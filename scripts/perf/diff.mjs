// Parity check between two capture sets (see capture-all.mjs).
//   node scripts/perf/diff.mjs <beforeName> <afterName> [threshold=0.5]
// Pixel diff: share of pixels whose largest channel difference exceeds 8/255
// (anti-aliasing noise tolerance). Pages of different height are compared over the
// common height and flagged. Style diff: computed-style fingerprint of every element,
// keyed by DOM path; reports elements whose box or any tracked property changed.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [beforeName, afterName, thr = '0.5'] = process.argv.slice(2);
if (!beforeName || !afterName) throw new Error('usage: diff.mjs <before> <after> [thresholdPercent]');
const root = process.env.PERF_WORK || path.resolve('perf-work');
const A = path.join(root, beforeName);
const B = path.join(root, afterName);
const diffDir = path.join(root, `diff-${beforeName}-${afterName}`);
await fs.mkdir(diffDir, { recursive: true });
const CHANNEL_TOLERANCE = 8;

const names = (await fs.readdir(A)).filter((f) => f.endsWith('.png')).map((f) => f.replace(/\.png$/, ''));
const rows = [];
let over = 0;
for (const n of names) {
  const [a, b] = await Promise.all([
    sharp(path.join(A, n + '.png')).removeAlpha().raw().toBuffer({ resolveWithObject: true }),
    sharp(path.join(B, n + '.png')).removeAlpha().raw().toBuffer({ resolveWithObject: true }),
  ]);
  const w = Math.min(a.info.width, b.info.width);
  const h = Math.min(a.info.height, b.info.height);
  let diff = 0;
  const mask = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const ia = (y * a.info.width + x) * 3;
      const ib = (y * b.info.width + x) * 3;
      const d = Math.max(Math.abs(a.data[ia] - b.data[ib]), Math.abs(a.data[ia + 1] - b.data[ib + 1]), Math.abs(a.data[ia + 2] - b.data[ib + 2]));
      const o = (y * w + x) * 3;
      if (d > CHANNEL_TOLERANCE) {
        diff++;
        mask[o] = 255;
        mask[o + 1] = 40;
        mask[o + 2] = 40;
      } else {
        mask[o] = mask[o + 1] = mask[o + 2] = Math.round(a.data[ia] * 0.25);
      }
    }
  }
  const pct = (diff / (w * h)) * 100;
  const heightDelta = b.info.height - a.info.height;

  // computed-style fingerprint
  let styleChanged = 0;
  let styleTotal = 0;
  const samples = [];
  try {
    let sa = JSON.parse(await fs.readFile(path.join(A, n + '.styles.json'), 'utf8'));
    const sb = JSON.parse(await fs.readFile(path.join(B, n + '.styles.json'), 'utf8'));
    // The PurposeBased star field is positioned with Math.random(), so its 1-3px
    // dots move on every load whatever the CSS does: leave them out.
    const isStar = (r) => r.box[2] <= 3 && r.box[3] <= 3 && r.position === 'absolute';
    const byPath = new Map(sb.filter((r) => !isStar(r)).map((r) => [r.p, r]));
    sa = sa.filter((r) => !isStar(r));
    styleTotal = sa.length;
    for (const ra of sa) {
      const rb = byPath.get(ra.p);
      if (!rb) { styleChanged++; if (samples.length < 4) samples.push(`${ra.p} ${ra.t} missing`); continue; }
      const keys = new Set([...Object.keys(ra), ...Object.keys(rb)]);
      const changed = [];
      for (const k of keys) {
        if (k === 'p' || k === 't') continue;
        // The two builds are served from different ports; compare URLs without the origin.
        const origin = (v) => (typeof v === 'string' ? v.replace(/http:\/\/localhost:\d+/g, '') : v);
        if (JSON.stringify(origin(ra[k])) !== JSON.stringify(origin(rb[k]))) changed.push(`${k}: ${JSON.stringify(ra[k])} -> ${JSON.stringify(rb[k])}`);
      }
      if (changed.length) { styleChanged++; if (samples.length < 4) samples.push(`${ra.p} ${ra.t} ${changed.slice(0, 3).join(' | ')}`); }
    }
    if (byPath.size !== sa.length) samples.push(`element count ${sa.length} -> ${byPath.size}`);
  } catch (e) {
    samples.push('no style data');
  }

  if (pct > Number(thr) || heightDelta !== 0 || styleChanged) {
    await sharp(mask, { raw: { width: w, height: h, channels: 3 } }).jpeg({ quality: 60 }).toFile(path.join(diffDir, n + '.jpg'));
  }
  if (pct > Number(thr)) over++;
  rows.push({ page: n, pixelDiffPct: +pct.toFixed(3), heightDelta, stylesChanged: `${styleChanged}/${styleTotal}`, sample: samples[0] || '' });
}
console.table(rows.map((r) => ({ ...r, sample: r.sample.slice(0, 110) })));
console.log(`pages: ${rows.length}, over ${thr}% pixel diff: ${over}, with style changes: ${rows.filter((r) => !r.stylesChanged.startsWith('0/')).length}, height changes: ${rows.filter((r) => r.heightDelta).length}`);
await fs.writeFile(path.join(root, `diff-${beforeName}-${afterName}.json`), JSON.stringify(rows, null, 2));
process.exitCode = over ? 1 : 0;
