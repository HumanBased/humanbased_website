// Team photos for the About page.
//
// Drop public/images/team/luis.(png|jpg|jpeg|webp) and alexina.(...) and run
// the build. Each source is turned into a square 600x600 WebP (face-centred
// crop, under 80 KB) at public/images/team/<key>.webp. Missing photos are
// skipped: the About block falls back to an initials badge.
//
//   node scripts/team-photos.mjs              convert sources (runs as prebuild)
//   node scripts/team-photos.mjs --clean-dist drop non-WebP originals from dist
import { existsSync, readdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = path.join(ROOT, 'public/images/team');
const DIST_DIR = path.join(ROOT, 'dist/images/team');
const EXTS = ['webp', 'png', 'jpg', 'jpeg'];
const SIZE = 360;
const MAX_BYTES = 80 * 1024;

// Where the face sits as a fraction of the source (x, y of its centre). Faces
// in portraits sit in the upper part, so the default biases the crop upward.
const FOCUS = {
  luis: { x: 0.50, y: 0.3 },
  alexina: { x: 0.5, y: 0.33 },
};
const CROP_SHARE = 0.9; // fraction of the short side kept, leaves some shoulder

const KEYS = Object.keys(FOCUS);

function findSource(key) {
  for (const ext of EXTS) {
    const file = path.join(SRC_DIR, `${key}.${ext}`);
    if (existsSync(file)) return file;
  }
  return null;
}

async function encodeUnderLimit(img) {
  let buf;
  for (let quality = 85; quality >= 40; quality -= 5) {
    buf = await img.clone().webp({ quality, effort: 6 }).toBuffer();
    if (buf.length <= MAX_BYTES) break;
  }
  return buf;
}

async function convert(key) {
  const source = findSource(key);
  if (!source) {
    console.log(`[team-photos] ${key}: no source, initials badge stays`);
    return;
  }
  const target = path.join(SRC_DIR, `${key}.webp`);
  const input = readFileSync(source);
  const meta = await sharp(input).metadata();

  // Already in final form (re-runs after the first conversion).
  if (source === target && meta.width === SIZE && meta.height === SIZE && input.length <= MAX_BYTES) {
    console.log(`[team-photos] ${key}: already ${SIZE}x${SIZE}, ${(input.length / 1024).toFixed(1)} KB`);
    return;
  }

  const side = Math.round(Math.min(meta.width, meta.height) * CROP_SHARE);
  const clamp = (v, max) => Math.max(0, Math.min(Math.round(v), max));
  const left = clamp(meta.width * FOCUS[key].x - side / 2, meta.width - side);
  const top = clamp(meta.height * FOCUS[key].y - side / 2, meta.height - side);

  const cropped = sharp(input).rotate().extract({ left, top, width: side, height: side }).resize(SIZE, SIZE);
  const out = await encodeUnderLimit(cropped);
  writeFileSync(target, out);
  console.log(`[team-photos] ${key}: ${path.basename(source)} -> ${key}.webp ${SIZE}x${SIZE}, ${(out.length / 1024).toFixed(1)} KB`);
}

function cleanDist() {
  if (!existsSync(DIST_DIR)) return;
  for (const name of readdirSync(DIST_DIR)) {
    if (!name.endsWith('.webp')) rmSync(path.join(DIST_DIR, name));
  }
}

if (process.argv.includes('--clean-dist')) {
  cleanDist();
} else {
  for (const key of KEYS) await convert(key);
}
