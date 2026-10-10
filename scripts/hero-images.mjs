// Responsive derivatives for the HumanBased home hero (Earth at night).
//
//   node scripts/hero-images.mjs              build AVIF + WebP at every width
//   node scripts/hero-images.mjs --clean-dist drop the unserved masters from dist
//
// Master: public/images/hero/source/hero-hb-3360-esrgan.png, the 1680x944 original
// upscaled 2x with Real-ESRGAN (realesrgan-x4plus general photo model, run at 4x and
// downscaled with Lanczos to an exact 2x). The source/ folder is never served.
//
// Black point: the photo's empty space is a blue-black near rgb(0, 4, 15). The hero
// is drawn with mix-blend-mode: screen, where only true black leaves the page
// background untouched, so each channel is remapped to put that space at 0.
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MASTER = path.join(ROOT, 'public/images/hero/source/hero-hb-3360-esrgan.png');
const OUT_DIR = path.join(ROOT, 'public/images/hero');
const DIST_SOURCE = path.join(ROOT, 'dist/images/hero/source');

export const HERO_WIDTHS = [960, 1680, 2560, 3360];
// Per-channel black point (R, G, B) measured from the master's empty space.
const BLACK_POINT = [0, 5, 16];
const WEBP_QUALITY = { 960: 72, 1680: 70, 2560: 68, 3360: 66 };
const AVIF_QUALITY = 50;

function blackPointCorrected() {
  const scale = BLACK_POINT.map((k) => 255 / (255 - k));
  const offset = BLACK_POINT.map((k, i) => -k * scale[i]);
  return sharp(MASTER).removeAlpha().linear(scale, offset);
}

async function build() {
  if (!existsSync(MASTER)) throw new Error(`hero master missing: ${MASTER}`);
  mkdirSync(OUT_DIR, { recursive: true });
  const corrected = await blackPointCorrected().png().toBuffer();
  for (const width of HERO_WIDTHS) {
    const base = path.join(OUT_DIR, `hero-hb-${width}`);
    const resized = sharp(corrected).resize({ width, kernel: 'lanczos3' });
    const webp = await resized.clone().webp({ quality: WEBP_QUALITY[width], effort: 6, smartSubsample: true }).toFile(`${base}.webp`);
    const avif = await resized.clone().avif({ quality: AVIF_QUALITY, effort: 6 }).toFile(`${base}.avif`);
    console.log(`[hero] ${width}w  webp ${(webp.size / 1024).toFixed(0)}KB  avif ${(avif.size / 1024).toFixed(0)}KB  (${webp.width}x${webp.height})`);
  }
}

if (process.argv.includes('--clean-dist')) {
  if (existsSync(DIST_SOURCE)) rmSync(DIST_SOURCE, { recursive: true, force: true });
} else {
  await build();
}
