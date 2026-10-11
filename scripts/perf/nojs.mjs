// Renders every route with JavaScript disabled and checks the page is styled:
//  1. the compiled stylesheet is linked and loaded, no CDN script or request
//  2. body colours/fonts are the site's, not browser defaults
//  3. pixel diff against the JS-enabled "after" capture stays small (what differs
//     is JS-only decoration: journey lines, scroll-progress, re-randomised stars)
//   node scripts/perf/nojs.mjs <afterCaptureName> [baseUrl]
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { ROUTES } from '../routes.mjs';

const [afterName = 'after', baseUrl = 'http://localhost:4173'] = process.argv.slice(2);
const root = process.env.PERF_WORK || path.resolve('perf-work');
const slug = (r) => (r === '/' ? 'home' : r.replace(/^\//, '').replace(/\//g, '-'));
const browser = await puppeteer.launch({ headless: true });
const rows = [];
for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.setJavaScriptEnabled(false);
  const requests = [];
  page.on('request', (r) => requests.push(r.url()));
  await page.goto(baseUrl + route + (route === '/' ? '' : '/'), { waitUntil: 'networkidle0', timeout: 60000 });
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}' });
  // Real wheel scrolling (works with JS off) so native lazy images load as they
  // would for a visitor; then back to the top for the full-page capture.
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.mouse.move(700, 450);
  for (let y = 0; y < total; y += 600) {
    await page.mouse.wheel({ deltaY: 600 });
    await new Promise((r) => setTimeout(r, 120));
  }
  await new Promise((r) => setTimeout(r, 800));
  await page.mouse.wheel({ deltaY: -total - 2000 });
  await new Promise((r) => setTimeout(r, 500));
  const probe = await page.evaluate(() => {
    const cs = getComputedStyle(document.body);
    const h = document.querySelector('h1, h2');
    return {
      sheets: document.styleSheets.length,
      bodyBg: cs.backgroundColor,
      bodyColor: cs.color,
      headingFont: h ? getComputedStyle(h).fontFamily.slice(0, 28) : '-',
      hasMain: !!document.querySelector('main, #root > *'),
    };
  });
  const png = await page.screenshot({ fullPage: true });
  const ref = await sharp(path.join(root, afterName, `${slug(route)}-1440.png`)).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const cur = await sharp(png).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = Math.min(ref.info.width, cur.info.width);
  const h = Math.min(ref.info.height, cur.info.height);
  let diff = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const a = (y * ref.info.width + x) * 3;
      const b = (y * cur.info.width + x) * 3;
      if (Math.max(Math.abs(ref.data[a] - cur.data[b]), Math.abs(ref.data[a + 1] - cur.data[b + 1]), Math.abs(ref.data[a + 2] - cur.data[b + 2])) > 8) diff++;
    }
  }
  await fs.mkdir(path.join(root, 'nojs'), { recursive: true });
  await fs.writeFile(path.join(root, 'nojs', `${slug(route)}-1440.png`), png);
  rows.push({
    route,
    sheets: probe.sheets,
    cdn: requests.some((u) => /tailwind/.test(u)),
    bodyBg: probe.bodyBg,
    heading: probe.headingFont,
    heightDelta: cur.info.height - ref.info.height,
    diffVsJsOnPct: +((diff / (w * h)) * 100).toFixed(3),
  });
  await page.close();
}
await browser.close();
console.table(rows);
const bad = rows.filter((r) => r.cdn || r.sheets < 1 || r.diffVsJsOnPct > 1 || r.heightDelta !== 0);
console.log(`routes: ${rows.length}, unstyled or divergent: ${bad.length}`);
process.exitCode = bad.length ? 1 : 0;
