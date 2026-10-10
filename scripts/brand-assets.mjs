// Share images, email signature banner and square logo tile.
//   node scripts/brand-assets.mjs
//
// Rasters are never stretched: photo layers are only ever downscaled from their
// source (or cropped 1:1), and typography is rendered by Chrome at 2x on a
// transparent layer, then downscaled with Lanczos and composited on top.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdirSync } from 'node:fs';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (...p) => path.join(ROOT, 'public', ...p);
const OG = { width: 1200, height: 630 };
const NAVY = '#0d1f3c';
const GOLD = '#C4A85A';
const FONTS =
  'https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Playfair+Display:wght@400&family=Cormorant:wght@400;500&family=DM+Sans:wght@400;500&display=swap';

let browser;

// Render `body` HTML on a transparent page of `width` x `height` CSS px at `scale`.
async function renderLayer(body, width, height, scale = 2) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: scale });
  await page.setContent(
    `<!doctype html><html><head><link rel="stylesheet" href="${FONTS}">
     <style>html,body{margin:0;width:${width}px;height:${height}px;background:transparent;overflow:hidden}
     *{box-sizing:border-box}</style></head><body>${body}</body></html>`,
    { waitUntil: 'networkidle0' },
  );
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ omitBackground: true, type: 'png' });
  await page.close();
  return png;
}

// Photo (already at or above the output size) + 2x text layer downscaled = JPEG.
async function shareImage(file, photo, textHtml) {
  const text = await sharp(await renderLayer(textHtml, OG.width, OG.height))
    .resize(OG.width, OG.height, { kernel: 'lanczos3' })
    .png()
    .toBuffer();
  const out = await sharp(photo)
    .composite([{ input: text }])
    .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(pub('images/og', file));
  console.log(`[brand] ${file} ${out.width}x${out.height} ${(out.size / 1024).toFixed(0)}KB`);
}

const legibility = (stop) =>
  `<div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,8,18,.78) 0%,rgba(5,8,18,.5) ${stop}%,rgba(5,8,18,0) 72%)"></div>`;

async function ogHumanBased() {
  // Downscale from the 3360px Earth master (black-point corrected derivative).
  const photo = await sharp(pub('images/hero/hero-hb-3360.webp'))
    .resize(OG.width, OG.height, { fit: 'cover', position: 'right bottom', kernel: 'lanczos3' })
    .toBuffer();
  await shareImage(
    'og-humanbased.jpg',
    photo,
    `${legibility(38)}
     <div style="position:absolute;left:84px;top:212px;color:#fff">
       <div style="font:700 92px/1 Inter,sans-serif;letter-spacing:-2px">HumanBased</div>
       <div style="width:100px;height:2px;background:${GOLD};margin:34px 0 30px"></div>
       <div style="font:400 40px/1.2 'Playfair Display',serif;color:rgba(255,255,255,.88)">Technology in service of humanity</div>
     </div>`,
  );
}

async function ogPurposeBased() {
  // 1692x929 artwork downscaled to cover 1200x630.
  const photo = await sharp(pub('images/purposebased/hero-bg.webp'))
    .resize(OG.width, OG.height, { fit: 'cover', position: 'centre', kernel: 'lanczos3' })
    .toBuffer();
  await shareImage(
    'og-purposebased.jpg',
    photo,
    `${legibility(34)}
     <div style="position:absolute;left:86px;top:226px">
       <div style="font:400 108px/1 Cormorant,serif;color:#ffc864;letter-spacing:1px">PurposeBased</div>
       <div style="font:400 34px/1.2 'DM Sans',sans-serif;color:#cadcf0;margin-top:30px">Become who you're meant to be</div>
     </div>`,
  );
}

async function ogStory() {
  // A 1:1 crop of the artwork around the road and the star: no scaling at all,
  // so it stays sharp (the previous version was an enlarged crop).
  const photo = await sharp(pub('images/purposebased/hero-bg.webp'))
    .extract({ left: 380, top: 150, width: OG.width, height: OG.height })
    .toBuffer();
  await shareImage(
    'og-story.jpg',
    photo,
    `${legibility(30)}
     <div style="position:absolute;left:86px;top:196px">
       <div style="font:500 22px/1 'DM Sans',sans-serif;letter-spacing:3px;color:#ffc864">PURPOSEBASED</div>
       <div style="font:400 112px/1 Cormorant,serif;color:#fff;margin-top:38px">Our Story</div>
       <div style="width:100px;height:2px;background:#ffc864;margin-top:40px"></div>
     </div>`,
  );
}

// hb-logo.png is a square render on a light-blue ground; shown as a circle with
// a thin gold ring, the way the site presents its logo, so no light square sits
// on the navy.
async function circularLogo(size) {
  const ring = Math.max(2, Math.round(size / 96));
  const inner = size - ring * 2;
  const mask = Buffer.from(`<svg width="${inner}" height="${inner}"><circle cx="${inner / 2}" cy="${inner / 2}" r="${inner / 2}"/></svg>`);
  const logo = await sharp(pub('images/hb-logo.png'))
    .resize(inner, inner, { kernel: 'lanczos3' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
  const ringSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - ring / 2}" fill="none" stroke="${GOLD}" stroke-width="${ring}"/></svg>`,
  );
  return sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: logo, left: ring, top: ring }, { input: ringSvg }])
    .png()
    .toBuffer();
}

async function signatureBanner() {
  // 1200x220 file, shown at 600x110: everything is drawn at 2x directly.
  const W = 1200;
  const H = 220;
  const logo = await circularLogo(150);
  const text = await renderLayer(
    `<div style="position:absolute;right:36px;top:0;height:110px;display:flex;align-items:center;
       font:500 11px/1 Inter,sans-serif;letter-spacing:3.2px;text-transform:uppercase;color:${GOLD}">Solving for Humanity</div>`,
    600,
    110,
    2,
  );
  mkdirSync(pub('images/email'), { recursive: true });
  const out = await sharp({ create: { width: W, height: H, channels: 3, background: NAVY } })
    .composite([
      { input: { create: { width: W, height: 2, channels: 3, background: GOLD } }, left: 0, top: 0 },
      { input: logo, left: 64, top: Math.round((H - 150) / 2) + 1 },
      { input: text, left: 0, top: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(pub('images/email/signature-banner.png'));
  console.log(`[brand] signature-banner.png ${out.width}x${out.height} ${(out.size / 1024).toFixed(0)}KB`);
}

async function logoTile() {
  const S = 512;
  const R = 96; // corner radius
  const tile = Buffer.from(`<svg width="${S}" height="${S}"><rect width="${S}" height="${S}" rx="${R}" ry="${R}" fill="${NAVY}"/></svg>`);
  const logo = await circularLogo(352); // 80px padding all round
  const out = await sharp(tile)
    .composite([{ input: logo, left: 80, top: 80 }])
    .png({ compressionLevel: 9 })
    .toFile(pub('images/logo-square-512.png'));
  console.log(`[brand] logo-square-512.png ${out.width}x${out.height} ${(out.size / 1024).toFixed(0)}KB`);
}

browser = await puppeteer.launch({ headless: true });
try {
  await ogHumanBased();
  await ogPurposeBased();
  await ogStory();
  await signatureBanner();
  await logoTile();
} finally {
  await browser.close();
}
