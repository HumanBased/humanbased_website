// Deterministic full-page captures of every prerendered route, for before/after
// parity checks (docs/perf).
//   node scripts/perf/capture-all.mjs <name> [baseUrl]
//
// Writes, for each route at 1440 and 390 wide:
//   docs/perf/<name>/<slug>-<w>.jpg            (reviewable, committed)
//   <PERF_WORK>/<name>/<slug>-<w>.png          (lossless, for the pixel diff)
//   <PERF_WORK>/<name>/<slug>-<w>.styles.json  (computed-style fingerprint)
// Determinism: seeded Math.random (PurposeBased star field), reduced motion
// emulated (motion engine leaves everything in its final state, CSS animations end
// immediately), animations and transitions zeroed.
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { ROUTES } from '../routes.mjs';

const [name, baseUrl = 'http://localhost:4173'] = process.argv.slice(2);
if (!name) throw new Error('usage: capture-all.mjs <name> [baseUrl]');
const workRoot = process.env.PERF_WORK || path.resolve('perf-work');
const docsDir = path.resolve('docs/perf', name);
const workDir = path.join(workRoot, name);
await fs.mkdir(docsDir, { recursive: true });
await fs.mkdir(workDir, { recursive: true });

const SIZES = [[1440, 900], [390, 844]];
const PAGES = [...ROUTES, '/this-page-does-not-exist'];
const slug = (r) => (r === '/' ? 'home' : r.replace(/^\//, '').replace(/\//g, '-'));

const PROPS = [
  'display', 'position', 'color', 'backgroundColor', 'backgroundImage', 'fontFamily', 'fontSize',
  'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing', 'textTransform', 'textAlign',
  'textDecorationLine', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'paddingTop',
  'paddingRight', 'paddingBottom', 'paddingLeft', 'borderTopWidth', 'borderTopColor',
  'borderTopStyle', 'borderRadius', 'opacity', 'transform', 'boxShadow', 'zIndex', 'overflowX',
  'overflowY', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'gap', 'gridTemplateColumns',
  'objectFit', 'objectPosition', 'backdropFilter', 'filter', 'mixBlendMode', 'cursor', 'whiteSpace',
  'visibility', 'listStyleType', 'maxWidth', 'minHeight',
];

const browser = await puppeteer.launch({ headless: true });
try {
  for (const route of PAGES) {
    for (const [w, h] of SIZES) {
      const page = await browser.newPage();
      await page.setViewport({ width: w, height: h });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.evaluateOnNewDocument(() => {
        let a = 0x9e3779b9;
        Math.random = () => {
          a = (a + 0x6d2b79f5) | 0;
          let t = Math.imul(a ^ (a >>> 15), 1 | a);
          t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
      });
      await page.goto(baseUrl + route + (route === '/' || route.endsWith('/') ? '' : '/'), { waitUntil: 'networkidle0', timeout: 60000 });
      await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 80));
        }
        window.scrollTo(0, 0);
        await Promise.all([...document.images].map((i) => (i.complete ? null : i.decode().catch(() => {}))));
        await document.fonts.ready;
        await new Promise((r) => setTimeout(r, 400));
      });
      // Very tall full-page screenshots occasionally come back with an unpainted
      // block (a compositor tile race, seen on both builds). Retake until two
      // consecutive shots agree on a coarse thumbnail, so flakes cannot read as diffs.
      const thumb = async (buf) => (await sharp(buf).resize(96, 400, { fit: 'fill' }).greyscale().raw().toBuffer());
      const meanDiff = (x, y) => x.reduce((acc, v, i) => acc + Math.abs(v - y[i]), 0) / x.length;
      let png = await page.screenshot({ fullPage: true });
      let prev = await thumb(png);
      for (let attempt = 0; attempt < 5; attempt++) {
        const next = await page.screenshot({ fullPage: true });
        const cur = await thumb(next);
        const d = meanDiff(prev, cur);
        png = next;
        prev = cur;
        if (d < 0.35) break;
        console.log(`  retake ${route} ${w} (thumbnail drift ${d.toFixed(2)})`);
      }
      const base = `${slug(route)}-${w}`;
      await fs.writeFile(path.join(workDir, `${base}.png`), png);
      await sharp(png).jpeg({ quality: 74, mozjpeg: true }).toFile(path.join(docsDir, `${base}.jpg`));
      const styles = await page.evaluate((props) => {
        const out = [];
        const walk = (el, p) => {
          if (['SCRIPT', 'STYLE', 'LINK', 'META', 'TITLE', 'NOSCRIPT'].includes(el.tagName)) return;
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          const rec = { p, t: el.tagName, box: [Math.round(r.left), Math.round(r.top + scrollY), Math.round(r.width), Math.round(r.height)] };
          for (const k of props) {
            let v = cs[k];
            if (k === 'backgroundImage' && v.length > 80) v = v.slice(0, 80);
            if (v) rec[k] = v;
          }
          out.push(rec);
          [...el.children].forEach((c, i) => walk(c, `${p}>${i}`));
        };
        walk(document.body, 'b');
        return out;
      }, PROPS);
      await fs.writeFile(path.join(workDir, `${base}.styles.json`), JSON.stringify(styles));
      await page.close();
      console.log('captured', base);
    }
  }
} finally {
  await browser.close();
}
