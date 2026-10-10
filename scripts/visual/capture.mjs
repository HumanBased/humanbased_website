// Full-page screenshots of the marketing pages at desktop and mobile size.
// Usage: node scripts/visual/capture.mjs <outDir> [baseUrl]
// Run against `npx vite preview --port 4173` after `npm run build`.
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const PAGES = [
  ['home', '/'],
  ['about', '/about'],
  ['services', '/services'],
  ['products', '/products'],
  ['process', '/process'],
  ['pb-home', '/purposebased'],
  ['pb-story', '/purposebased/story'],
  ['pb-how-it-works', '/purposebased/how-it-works'],
  ['pb-library', '/purposebased/library'],
];
const SIZES = [
  ['1440', 1440, 900],
  ['390', 390, 844],
];

const outDir = process.argv[2];
const baseUrl = process.argv[3] || 'http://localhost:4173';
if (!outDir) throw new Error('usage: capture.mjs <outDir> [baseUrl]');
await fs.mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
try {
  for (const [name, route] of PAGES) {
    for (const [tag, width, height] of SIZES) {
      const page = await browser.newPage();
      await page.setViewport({ width, height });
      await page.goto(baseUrl + route, { waitUntil: 'networkidle0', timeout: 60000 });
      // Scroll the whole page so scroll-triggered reveals fire before the capture.
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.6;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 900));
      });
      const png = await page.screenshot({ fullPage: true });
      await sharp(png).jpeg({ quality: 72, mozjpeg: true }).toFile(path.join(outDir, `${name}-${tag}.jpg`));
      await page.close();
      console.log('captured', name, tag);
    }
  }
} finally {
  await browser.close();
}
