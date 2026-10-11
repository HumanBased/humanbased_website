// Starfield checks: parallax moves the layers, reduced motion freezes them, the stars
// are there with JavaScript off, and before/after crops at 2560 wide.
//   node scripts/visual/starfield-check.mjs [outDir] [baseUrl]
// "before" is the original fixed site-bg.webp background, which the app-store legal
// pages still use; "after" is the new CSS starfield on a HumanBased page.
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const outDir = path.resolve(process.argv[2] || 'docs/visual/after');
const baseUrl = process.argv[3] || 'http://localhost:4173';
await fs.mkdir(outDir, { recursive: true });
const browser = await puppeteer.launch({ headless: true });

const layerTransforms = (page) => page.evaluate(() => [...document.querySelectorAll('.hb-stars')].map((el) => getComputedStyle(el).transform));

// 1. parallax: scroll 600px, compare transforms
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + '/about/', { waitUntil: 'networkidle0' });
  const before = await layerTransforms(page);
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }));
  await new Promise((r) => setTimeout(r, 600));
  const after = await layerTransforms(page);
  console.log('PARALLAX (scrollY 0 -> 600), translateY of small / medium / large layers:');
  console.log('  scrollY 0  :', before.join(' | '));
  console.log('  scrollY 600:', after.join(' | '));
  await page.close();
}
// 2. reduced motion: layers must not move
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(baseUrl + '/about/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }));
  await new Promise((r) => setTimeout(r, 600));
  console.log('REDUCED MOTION, after scrolling 600px:', (await layerTransforms(page)).join(' | '));
  await page.close();
}
// 3. JavaScript off: gradient and stars are plain CSS
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setJavaScriptEnabled(false);
  await page.goto(baseUrl + '/about/', { waitUntil: 'networkidle0' });
  const info = await page.evaluate(() => ({
    gradient: getComputedStyle(document.querySelector('.hb-twilight')).backgroundImage.slice(0, 60),
    layers: [...document.querySelectorAll('.hb-stars')].map((e) => getComputedStyle(e).backgroundImage.replace(/url\(".*\/(stars-\w+\.webp)"\)/, '$1')),
    height: document.querySelector('.hb-twilight').getBoundingClientRect().height,
    docHeight: document.documentElement.scrollHeight,
  }));
  console.log('JS OFF:', JSON.stringify(info));
  await page.close();
}
// 4. crops at 2560 wide: the same sky area before (legal page, old image) and after
const crop = async (route, name) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 2560, height: 1440 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(baseUrl + route, { waitUntil: 'networkidle0' });
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}' });
  await new Promise((r) => setTimeout(r, 800));
  const png = await page.screenshot();
  await page.close();
  // a text-free patch of sky, shown at 3x with nearest-neighbour so individual pixels are visible
  return sharp(png).extract({ left: 1760, top: 170, width: 420, height: 260 }).resize(1260, 780, { kernel: 'nearest' }).png().toBuffer();
};
const beforeImg = await crop('/apps/purposebased/privacy/', 'before');
const afterImg = await crop('/about/', 'after');
await sharp({ create: { width: 2540, height: 780, channels: 3, background: '#fff' } })
  .composite([{ input: beforeImg, left: 0, top: 0 }, { input: afterImg, left: 1280, top: 0 }])
  .jpeg({ quality: 90 })
  .toFile(path.join(outDir, 'starfield-before-after-2560.jpg'));
console.log('wrote', path.join(outDir, 'starfield-before-after-2560.jpg'), '(left: before, right: after; 3x zoom of the same 420x260px patch at 2560 wide)');
await browser.close();
