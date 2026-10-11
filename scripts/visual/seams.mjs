// Numeric seam check for hero images that dissolve into the page background.
// Usage: node scripts/visual/seams.mjs <route> <mediaSelector> <outDir> [baseUrl]
//
// For each viewport width and scroll position, all animation is paused and two
// screenshots are taken: with the hero image layers, and with them hidden. Their
// difference isolates the hero's contribution from the starfield. For each edge of
// the image box, that difference is averaged along the edge into a profile across
// it (a seam is a step that runs the length of the edge; stars and city lights
// are not), and the largest step between neighbouring pixels in the profile is
// reported, out of 255. The raw screenshot's largest single-pixel step across the
// boundary is reported alongside for reference.
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const [route, mediaSelector, outDir, baseUrl = 'http://localhost:4173'] = process.argv.slice(2);
if (!route || !mediaSelector || !outDir) throw new Error('usage: seams.mjs <route> <mediaSelector> <outDir> [baseUrl]');

const VIEWPORTS = [
  [390, 844],
  [1440, 900],
  [1920, 1080],
  [2560, 1440],
];
const BAND = 40; // px either side of the edge
const CROP = 48; // edge crop size before 4x zoom
const THRESHOLD = 3;

const lum = (d, i) => 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];

async function raw(png) {
  const { data, info } = await sharp(png).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, w: info.width, h: info.height };
}

// Profile across one edge. `axis` 'y' = horizontal edge at `pos`, sampled over x in [a, b).
function profile(img, axis, pos, a, b) {
  const out = [];
  for (let o = -BAND; o <= BAND; o++) {
    let sum = 0;
    let n = 0;
    for (let t = a; t < b; t++) {
      const x = axis === 'y' ? t : pos + o;
      const y = axis === 'y' ? pos + o : t;
      if (x < 0 || y < 0 || x >= img.w || y >= img.h) continue;
      sum += lum(img.data, (y * img.w + x) * 3);
      n++;
    }
    out.push(n ? sum / n : null);
  }
  return out;
}

function maxStep(values) {
  let max = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i] === null || values[i - 1] === null) continue;
    max = Math.max(max, Math.abs(values[i] - values[i - 1]));
  }
  return max;
}

// Largest single-pixel step straight across the boundary, anywhere along it.
function boundaryPixelStep(img, axis, pos, a, b) {
  let max = 0;
  for (let t = a; t < b; t++) {
    const [x0, y0, x1, y1] = axis === 'y' ? [t, pos - 1, t, pos] : [pos - 1, t, pos, t];
    if (x0 < 0 || y0 < 0 || x1 >= img.w || y1 >= img.h) continue;
    max = Math.max(max, Math.abs(lum(img.data, (y1 * img.w + x1) * 3) - lum(img.data, (y0 * img.w + x0) * 3)));
  }
  return max;
}

// File prefix: 'home' for /, 'pb-home' for /purposebased(/), else the route slug.
const pageTag = route === '/' ? 'home' : route.replace(/\W+/g, '-').replace(/^-|-$/g, '').replace(/^purposebased$/, 'pb-home');
await fs.mkdir(outDir, { recursive: true });
const browser = await puppeteer.launch({ headless: true });
const rows = [];
try {
  for (const [vw, vh] of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: vw, height: vh });
    await page.goto(baseUrl + route, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.addStyleTag({
      content: '*,*::before,*::after{animation-play-state:paused!important;transition:none!important}',
    });
    const heroBottom = await page.evaluate((sel) => {
      const r = document.querySelector(sel).getBoundingClientRect();
      return r.bottom + window.scrollY;
    }, mediaSelector);
    const scrolls = [
      ['0', 0],
      ['300', 300],
      ['bottom', Math.max(0, Math.round(heroBottom - vh * 0.6))],
    ];
    for (const [tag, y] of scrolls) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await new Promise((r) => setTimeout(r, 400));
      const box = await page.evaluate((sel) => {
        const r = document.querySelector(sel).getBoundingClientRect();
        return { top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), right: Math.round(r.right) };
      }, mediaSelector);
      const withHero = await raw(await page.screenshot());
      await page.evaluate((sel) => {
        document.querySelectorAll(sel).forEach((el) => (el.style.visibility = 'hidden'));
      }, `${mediaSelector}, .hb-hero-veil, .pbh-hero-veil`);
      const withoutHero = await raw(await page.screenshot());
      await page.evaluate((sel) => {
        document.querySelectorAll(sel).forEach((el) => (el.style.visibility = ''));
      }, `${mediaSelector}, .hb-hero-veil, .pbh-hero-veil`);

      // Hero contribution only.
      const diff = { w: withHero.w, h: withHero.h, data: Buffer.alloc(withHero.data.length) };
      for (let i = 0; i < diff.data.length; i++) diff.data[i] = Math.max(0, withHero.data[i] - withoutHero.data[i]);

      const xa = Math.max(0, box.left), xb = Math.min(vw, box.right);
      const ya = Math.max(0, box.top), yb = Math.min(vh, box.bottom);
      const edges = [
        ['top', 'y', box.top, xa, xb],
        ['bottom', 'y', box.bottom, xa, xb],
        ['left', 'x', box.left, ya, yb],
        ['right', 'x', box.right, ya, yb],
      ];
      for (const [edge, axis, pos, a, b] of edges) {
        // An edge is measurable if its band overlaps the viewport.
        const limit = axis === 'y' ? vh : vw;
        if (pos + BAND < 0 || pos - BAND > limit || b - a < 8) {
          rows.push({ vw, scroll: tag, edge, note: 'off-screen' });
          continue;
        }
        const profileStep = maxStep(profile(diff, axis, pos, a, b));
        const rawProfileStep = maxStep(profile(withHero, axis, pos, a, b));
        const pixelStep = pos > 0 && pos < limit ? boundaryPixelStep(withHero, axis, pos, a, b) : null;
        rows.push({
          vw,
          scroll: tag,
          edge,
          heroProfileStep: +profileStep.toFixed(2),
          pageProfileStep: +rawProfileStep.toFixed(2),
          worstPixelAcrossBoundary: pixelStep === null ? 'viewport edge' : +pixelStep.toFixed(1),
          pass: profileStep < THRESHOLD,
        });
        // 4x crop centred on the edge (clamped into the viewport).
        const mid = Math.round((a + b) / 2);
        const cx = axis === 'y' ? mid : Math.min(vw - CROP, Math.max(0, pos - CROP / 2));
        const cy = axis === 'y' ? Math.min(vh - CROP, Math.max(0, pos - CROP / 2)) : mid;
        await sharp(withHero.data, { raw: { width: vw, height: vh, channels: 3 } })
          .extract({ left: Math.max(0, cx - (axis === 'y' ? CROP / 2 : 0)), top: Math.max(0, cy - (axis === 'x' ? CROP / 2 : 0)), width: CROP, height: CROP })
          .resize(CROP * 4, CROP * 4, { kernel: 'nearest' })
          .png()
          .toFile(path.join(outDir, `${pageTag}-${vw}-scroll${tag}-${edge}.png`));
      }
    }
    await page.close();
  }
} finally {
  await browser.close();
}

console.table(rows);
const measured = rows.filter((r) => r.pass !== undefined);
const failed = measured.filter((r) => !r.pass);
console.log(`edges measured: ${measured.length}, failed: ${failed.length}, worst hero profile step: ${Math.max(...measured.map((r) => r.heroProfileStep)).toFixed(2)}`);
await fs.writeFile(path.join(outDir, `${pageTag}-seams.json`), JSON.stringify(rows, null, 2));
process.exitCode = failed.length ? 1 : 0;
