// Generates the HumanBased starfield: three transparent, seamlessly tileable layers
// (small, medium, large stars) as WebP, rendered at 2x so stars stay sharp on
// high-density screens and on 2560px-wide monitors.
//
//   node scripts/starfield.mjs            writes public/images/stars/stars-*.webp
//   node scripts/starfield.mjs --preview  also writes a 2x2 tiled crop to check seams
//
// Deterministic: a fixed seed per layer, so the output only changes if this file does.
// Every star is also drawn at its wrapped positions (+/- one tile), so what leaves one
// edge of the tile enters the opposite one and the tiling has no seam.
import { mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public/images/stars');
const SCALE = 2; // output pixels per CSS pixel

// Tile sizes differ per layer (and are not multiples of each other), so the three
// repeat patterns never line up into a visible grid.
const LAYERS = [
  { name: 'small', tile: 1024, seed: 0x5eed01, count: 340, r: [0.45, 0.85], alpha: [0.32, 0.8], halo: 0 },
  { name: 'medium', tile: 1280, seed: 0x5eed02, count: 74, r: [0.85, 1.4], alpha: [0.55, 0.92], halo: 0 },
  { name: 'large', tile: 1664, seed: 0x5eed03, count: 17, r: [1.25, 1.9], alpha: [0.88, 1], halo: [6.5, 11] },
];

// Mostly cool white, a few warm tints, a few pale blues.
const PALETTE = [
  { rgb: [226, 236, 255], w: 60 },
  { rgb: [204, 222, 255], w: 14 },
  { rgb: [255, 240, 214], w: 13 },
  { rgb: [255, 217, 176], w: 6 },
  { rgb: [188, 230, 255], w: 7 },
];

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pick = (rand) => {
  const total = PALETTE.reduce((s, p) => s + p.w, 0);
  let n = rand() * total;
  for (const p of PALETTE) { n -= p.w; if (n <= 0) return p.rgb; }
  return PALETTE[0].rgb;
};
const range = (rand, [a, b]) => a + rand() * (b - a);
const hex = ([r, g, b]) => `rgb(${r},${g},${b})`;

function layerSvg({ tile, seed, count, r, alpha, halo }) {
  const rand = mulberry32(seed);
  let defs = '';
  let body = '';
  for (let i = 0; i < count; i++) {
    const x = rand() * tile, y = rand() * tile;
    const rgb = pick(rand);
    const radius = range(rand, r);
    const a = range(rand, alpha);
    const haloR = halo ? range(rand, halo) : 0;
    if (haloR) {
      defs += `<radialGradient id="h${i}"><stop offset="0" stop-color="${hex(rgb)}" stop-opacity="0.34"/><stop offset="0.35" stop-color="${hex(rgb)}" stop-opacity="0.1"/><stop offset="1" stop-color="${hex(rgb)}" stop-opacity="0"/></radialGradient>`;
    }
    // wrapped copies: any star within reach of an edge also appears on the far side
    const reach = Math.max(radius * 3, haloR);
    for (const dx of [-tile, 0, tile]) for (const dy of [-tile, 0, tile]) {
      const cx = x + dx, cy = y + dy;
      if (cx < -reach || cx > tile + reach || cy < -reach || cy > tile + reach) continue;
      if (haloR) body += `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${haloR.toFixed(2)}" fill="url(#h${i})"/>`;
      // faint soft edge, then the crisp core
      body += `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${(radius * 1.8).toFixed(2)}" fill="${hex(rgb)}" fill-opacity="${(a * 0.16).toFixed(3)}"/>`;
      body += `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${radius.toFixed(2)}" fill="${hex(rgb)}" fill-opacity="${a.toFixed(3)}"/>`;
    }
  }
  const px = tile * SCALE;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 ${tile} ${tile}"><defs>${defs}</defs>${body}</svg>`;
}

mkdirSync(OUT, { recursive: true });
let total = 0;
for (const layer of LAYERS) {
  const file = path.join(OUT, `stars-${layer.name}.webp`);
  await sharp(Buffer.from(layerSvg(layer)), { density: 72 })
    .webp({ quality: 84, alphaQuality: 92, effort: 6, smartSubsample: false })
    .toFile(file);
  const kb = statSync(file).size / 1024;
  total += kb;
  console.log(`[stars] ${layer.name.padEnd(6)} ${layer.tile * SCALE}x${layer.tile * SCALE}px  ${kb.toFixed(1)}KB  (${layer.count} stars, shown at ${layer.tile}px)`);
}
console.log(`[stars] total ${total.toFixed(1)}KB (limit 120KB)`);
if (total > 120) { console.error('over budget'); process.exit(1); }

if (process.argv.includes('--preview')) {
  // 2x2 tiling of the medium layer on navy, cropped around the tile corner
  const tile = LAYERS[1].tile * SCALE;
  const one = await sharp(path.join(OUT, 'stars-medium.webp')).png().toBuffer();
  const sheet = await sharp({ create: { width: tile * 2, height: tile * 2, channels: 4, background: '#10264a' } })
    .composite([[0, 0], [tile, 0], [0, tile], [tile, tile]].map(([left, top]) => ({ input: one, left, top })))
    .png().toBuffer();
  await sharp(sheet).extract({ left: tile - 500, top: tile - 500, width: 1000, height: 1000 }).png().toFile(path.join(OUT, '..', '..', '..', 'docs/visual/after/starfield-tile-seam.png'));
  console.log('[stars] wrote docs/visual/after/starfield-tile-seam.png (crop centred on the tile corner)');
}
