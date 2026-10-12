// Per-page share images (1200x630) for pages that had only the site-wide image.
//   node scripts/og-pages.mjs
// Same method as brand-assets.mjs: photo layer only downscaled/cropped, text
// rendered by Chrome at 2x with the self-hosted fonts, composited, JPEG out.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFileSync, rmSync } from 'node:fs';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (...p) => path.join(ROOT, 'public', ...p);
const asset = (...p) => path.join(ROOT, 'assets', 'images', ...p);
const W = 1200, H = 630;
const GOLD = '#C4A85A';
const fontUrl = (f) => 'file://' + pub('fonts', f);
const FACES = `
@font-face{font-family:Inter;font-weight:100 900;src:url(${fontUrl('inter-latin.woff2')})}
@font-face{font-family:Cormorant;font-weight:300 700;src:url(${fontUrl('cormorant-latin.woff2')})}
@font-face{font-family:'DM Sans';font-weight:100 1000;src:url(${fontUrl('dm-sans-latin.woff2')})}
@font-face{font-family:'Playfair Display';font-weight:400 900;src:url(${fontUrl('playfair-display-latin.woff2')})}`;

let browser;
async function textLayer(body) {
  const tmp = path.join(ROOT, 'scripts', '.og-tmp.html');
  writeFileSync(tmp, `<!doctype html><html><head><style>${FACES}
    html,body{margin:0;width:${W}px;height:${H}px;background:transparent;overflow:hidden}*{box-sizing:border-box}</style></head><body>${body}</body></html>`);
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 });
  await page.goto('file://' + tmp, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ omitBackground: true, type: 'png' });
  await page.close();
  rmSync(tmp);
  return sharp(png).resize(W, H, { kernel: 'lanczos3' }).png().toBuffer();
}

const shade = `<div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,8,18,.82) 0%,rgba(5,8,18,.55) 42%,rgba(5,8,18,.05) 80%)"></div>`;
const hb = (eyebrow, title, sub) => `${shade}<div style="position:absolute;left:84px;top:190px;color:#fff;max-width:720px">
  <div style="font:600 22px/1 Inter,sans-serif;letter-spacing:4px;color:${GOLD}">${eyebrow}</div>
  <div style="font:700 96px/1 Inter,sans-serif;letter-spacing:-2px;margin-top:34px">${title}</div>
  <div style="width:100px;height:2px;background:${GOLD};margin:34px 0 28px"></div>
  <div style="font:400 36px/1.25 'Playfair Display',serif;color:rgba(255,255,255,.88)">${sub}</div></div>`;
const pb = (title, sub) => `${shade}<div style="position:absolute;left:86px;top:196px;max-width:740px">
  <div style="font:500 22px/1 'DM Sans',sans-serif;letter-spacing:3px;color:#ffc864">PURPOSEBASED</div>
  <div style="font:400 104px/1 Cormorant,serif;color:#fff;margin-top:36px">${title}</div>
  <div style="width:100px;height:2px;background:#ffc864;margin:36px 0 28px"></div>
  <div style="font:400 32px/1.3 'DM Sans',sans-serif;color:#cadcf0">${sub}</div></div>`;

const cover = (file, opts = {}) => sharp(file).resize(W, H, { fit: 'cover', position: 'centre', kernel: 'lanczos3', ...opts }).toBuffer();
const region = async (file, left, top, w, h) =>
  sharp(await sharp(file).extract({ left, top, width: w, height: h }).toBuffer()).resize(W, H, { kernel: 'lanczos3' }).toBuffer();

const JOBS = [
  ['og-about.jpg', () => cover(asset('about-strategic-discovery.webp')), hb('HUMANBASED', 'About', 'The people and principles behind it')],
  ['og-services.jpg', () => cover(asset('services-hero.webp'), { position: 'right' }), hb('HUMANBASED', 'Services', 'Technology built around people')],
  ['og-process.jpg', () => cover(asset('process-hero.webp')), hb('HUMANBASED', 'Our Process', 'Co-designed, ethical, continuous')],
  ['og-products.jpg', () => region(pub('images/hero/hero-hb-3360.webp'), 900, 560, 2400, 1260), hb('HUMANBASED', 'Products', 'PurposeBased and BasedTalk')],
  ['og-how-it-works.jpg', () => region(pub('images/purposebased/hero-bg.webp'), 0, 280, 1500, 787), pb('How it works', 'Five steps from questions to direction')],
  ['og-library.jpg', () => cover(pub('images/library/tao.webp')), pb('The Library', 'Ten traditions of purpose')],
  ['og-partners.jpg', () => region(pub('images/purposebased/hero-bg.webp'), 420, 0, 1500, 787), pb('Partners', 'Work with PurposeBased')],
];

browser = await puppeteer.launch({ args: ['--no-sandbox', '--allow-file-access-from-files'] });
for (const [file, photo, html] of JOBS) {
  const out = await sharp(await photo()).composite([{ input: await textLayer(html) }])
    .jpeg({ quality: 84, mozjpeg: true }).toFile(pub('images/og', file));
  console.log(file, (out.size / 1024).toFixed(0) + 'KB');
}
await browser.close();
