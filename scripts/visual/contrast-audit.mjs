// Contrast audit of the rendered pages. For each route and viewport it scrolls through
// the document; at every position it (1) records each visible text node with its
// computed colour (alpha and ancestor opacity folded in), (2) makes all text transparent
// and screenshots, so the screenshot is the real background (gradient, stars, aurora,
// photos, cards), (3) for every text rect composites the text colour over each
// background pixel and takes WCAG contrast. The summary uses the worst 5% of pixels
// of each text rect, so one bright star behind a letter does not decide the result.
//
//   node scripts/visual/contrast-audit.mjs [outDir] [baseUrl]
//   routes: HumanBased pages (not the app-store legal pages, not PurposeBased)
//
// Classes: gold = small amber/gold text, target >= 4.5; body = other text, target >= 7;
// control = black text on the solid gold buttons, target 4.5 (AA);
// large = headings / text >= 28px, target >= 4.5 (not required by the brief, reported).
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const outDir = path.resolve(process.argv[2] || 'docs/visual/contrast');
const baseUrl = process.argv[3] || 'http://localhost:4173';
await fs.mkdir(outDir, { recursive: true });

const ROUTES = process.env.ONLY ? process.env.ONLY.split(',') : ['/', '/about/', '/services/', '/process/', '/products/', '/legal/', '/privacy/', '/this-page-does-not-exist/'];
const VIEWPORTS = [[1440, 900], [390, 844]];
const TARGET = { body: 7, gold: 4.5, large: 4.5, control: 4.5 };

const chan = (v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = (r, g, b) => 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b);

const COLLECT = () => {
  const out = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode;
    const t = n.textContent.replace(/\s+/g, ' ').trim();
    if (!t) continue;
    const el = n.parentElement;
    if (!el || el.closest('script,style,noscript,[aria-hidden="true"]')) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    let op = 1, fixed = false;
    for (let e = el; e; e = e.parentElement) {
      const c = getComputedStyle(e);
      op *= parseFloat(c.opacity);
      if (c.position === 'fixed' || c.position === 'sticky') fixed = true;
    }
    const m = cs.color.match(/rgba?\(([^)]+)\)/);
    if (!m) continue;
    const v = m[1].split(',').map(Number);
    const alpha = (v.length > 3 ? v[3] : 1) * op;
    if (alpha < 0.05 || cs.webkitTextFillColor === 'rgba(0, 0, 0, 0)') continue; // gradient / clipped text
    const range = document.createRange();
    range.selectNodeContents(n);
    const rects = [...range.getClientRects()].filter((r) => r.width > 2 && r.height > 4 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth);
    if (!rects.length) continue;
    const path = []; for (let e = el; e && e !== document.body; e = e.parentElement) path.unshift(e.tagName[0] + [...e.parentElement.children].indexOf(e));
    out.push({
      text: t.slice(0, 46), color: [v[0], v[1], v[2]], alpha, size: parseFloat(cs.fontSize), weight: +cs.fontWeight,
      tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().split(' ').slice(0, 3).join(' '),
      key: path.join('>'), fixed,
      rects: rects.map((r) => ({ x: r.left, y: r.top, w: r.width, h: r.height })),
    });
  }
  return out;
};

const isGold = ([r, g, b]) => r > 150 && g > 100 && b < 130 && r - b > 70 && r >= g;

const browser = await puppeteer.launch({ headless: true });
const results = [];
try {
  for (const [w, h] of VIEWPORTS) {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: w, height: h });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.goto(baseUrl + route, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' });
      await page.evaluate(() => document.fonts.ready);
      const docH = await page.evaluate(() => document.documentElement.scrollHeight);
      const positions = [];
      for (let y = 0; y < docH - h; y += Math.round(h * 0.7)) positions.push(y);
      positions.push(Math.max(0, docH - h));
      const seen = new Map();
      for (const y of positions) {
        await page.evaluate((top) => window.scrollTo(0, top), y);
        await new Promise((r) => setTimeout(r, 350));
        const items = await page.evaluate(COLLECT);
        const style = await page.addStyleTag({ content: '*{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important;caret-color:transparent!important}*::placeholder{color:transparent!important}' });
        const bg = await sharp(await page.screenshot()).removeAlpha().raw().toBuffer({ resolveWithObject: true });
        await page.evaluate((el) => el.remove(), style);
        for (const it of items) {
          const control = /ed-btn|bg-amber-500/.test(it.cls) || ((it.tag === 'a' || it.tag === 'button') && it.color.join() === '0,0,0');
          const kind = control ? 'control' : isGold(it.color) && it.size <= 20 ? 'gold' : (it.size >= 28 || /^h[1-4]$/.test(it.tag) ? 'large' : 'body');
          const ratios = [];
          for (const rc of it.rects) {
            const x0 = Math.max(0, Math.floor(rc.x)), x1 = Math.min(bg.info.width, Math.ceil(rc.x + rc.w));
            const y0 = Math.max(0, Math.floor(rc.y)), y1 = Math.min(bg.info.height, Math.ceil(rc.y + rc.h));
            for (let yy = y0; yy < y1; yy += 2) for (let xx = x0; xx < x1; xx += 2) {
              const k = (yy * bg.info.width + xx) * 3;
              const br = bg.data[k], bgc = bg.data[k + 1], bb = bg.data[k + 2], a = it.alpha;
              const lt = lum(a * it.color[0] + (1 - a) * br, a * it.color[1] + (1 - a) * bgc, a * it.color[2] + (1 - a) * bb);
              const lb = lum(br, bgc, bb);
              ratios.push(((lt > lb ? lt : lb) + 0.05) / ((lt > lb ? lb : lt) + 0.05));
            }
          }
          if (ratios.length < 8) continue;
          ratios.sort((p, q) => p - q);
          const ratio = ratios[Math.floor(0.05 * (ratios.length - 1))];
          const docY = it.fixed ? null : y + it.rects[0].y;
          const key = it.key + (it.fixed ? '|f' : '|' + Math.round(docY / 4));
          const prev = seen.get(key);
          if (!prev || ratio < prev.ratio) {
            seen.set(key, { text: it.text, kind, ratio: +ratio.toFixed(2), size: it.size, color: it.color.join(','), alpha: +it.alpha.toFixed(2), tag: it.tag, cls: it.cls, frac: docY === null ? null : +(docY / docH).toFixed(2), fixed: it.fixed });
          }
        }
      }
      const list = [...seen.values()];
      results.push({ route, w, docH, list });
      await page.close();
      const fails = list.filter((x) => x.ratio < TARGET[x.kind]);
      console.log(`${String(w).padStart(4)} ${route.padEnd(30)} nodes ${String(list.length).padStart(3)}  fail body ${fails.filter((f) => f.kind === 'body').length}  gold ${fails.filter((f) => f.kind === 'gold').length}  large ${fails.filter((f) => f.kind === 'large').length}   (lowest body ${Math.min(...list.filter((x) => x.kind === 'body').map((x) => x.ratio), 99)}, gold ${Math.min(...list.filter((x) => x.kind === 'gold').map((x) => x.ratio), 99)})`);
    }
  }
} finally {
  await browser.close();
}
await fs.writeFile(path.join(outDir, 'contrast.json'), JSON.stringify(results, null, 1));
