// Screenshot of the Products page PurposeBased card (image + caption) at 1440 and 390.
//   node scripts/visual/products-caption.mjs [outDir] [baseUrl]
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const outDir = path.resolve(process.argv[2] || 'docs/visual/p91');
const baseUrl = process.argv[3] || 'http://localhost:4173';
await fs.mkdir(outDir, { recursive: true });
const browser = await puppeteer.launch({ headless: true });
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(baseUrl + '/products/', { waitUntil: 'networkidle0' });
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}' });
  const box = await page.evaluate(() => {
    const el = [...document.querySelectorAll('p')].find((p) => /Welcome, Seeker/.test(p.textContent)).closest('div.relative.w-full.overflow-hidden');
    el.scrollIntoView({ block: 'center', behavior: 'instant' });
    const r = el.getBoundingClientRect();
    return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height };
  });
  await new Promise((r) => setTimeout(r, 900));
  const lines = await page.evaluate(() => [...document.querySelectorAll('p')].filter((p) => /Welcome, Seeker|about to find|your purpose/.test(p.textContent)).map((p) => { const r = p.getBoundingClientRect(); const cs = getComputedStyle(p); return [p.textContent.trim(), Math.round(r.top * 10) / 10, cs.fontSize]; }));
  console.log(w, JSON.stringify(lines));
  await page.screenshot({ path: path.join(outDir, `products-caption-${w}.png`), clip: box });
  await page.close();
}
await browser.close();
