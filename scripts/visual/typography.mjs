// Typography verification: screenshots, hero text contrast by pixel sampling, and
// characters per line on About.
//   node scripts/visual/typography.mjs [outDir] [baseUrl]
//   EXTRA_CSS='...' injects CSS first (to trial focal-point / scrim changes before editing).
//
// Contrast: the hero glyphs are made transparent and the page is screenshotted; every
// pixel inside each text line box is sampled. Per pixel the text colour is composited
// over that pixel and the WCAG contrast ratio is computed. Reported twice:
//   flat  - background + scrim only (the text halo is switched off): conservative
//   halo  - background + scrim + the faint dark text halo that surrounds the letters
// Each is summarised as the worst 5% of pixels (p5) and the minimum.
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const outDir = path.resolve(process.argv[2] || 'docs/visual/typography');
const baseUrl = process.argv[3] || 'http://localhost:4173';
const EXTRA_CSS = process.env.EXTRA_CSS || '';
await fs.mkdir(outDir, { recursive: true });

const VIEWPORTS = [[1920, 1080], [1440, 900], [390, 844]];
const channel = (v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = (r, g, b) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

const HERO_LINES = [
  { sel: '.hb-hero-line1', color: [255, 255, 255], alpha: 0.96, label: 'line 1 (Garamond 400)' },
  { sel: '.hb-hero-line2', color: [0xea, 0xdf, 0xbd], alpha: 1, label: 'line 2 (italic, cream)' },
  { sel: '.hb-hero-line3', color: [0xc4, 0xa8, 0x5a], alpha: 1, label: 'line 3 (Inter, gold)' },
];

// contrast of `line` text over every pixel inside its line boxes of the raw RGB image
function sample(bg, boxes, line) {
  const ratios = [];
  const xs = boxes.flatMap((bx) => [bx.x, bx.x + bx.w]);
  const xmin = Math.min(...xs), xmax = Math.max(...xs), bins = new Array(8).fill(Infinity);
  for (const b of boxes) {
    const x0 = Math.max(0, Math.floor(b.x)), x1 = Math.min(bg.info.width, Math.ceil(b.x + b.w));
    const y0 = Math.max(0, Math.floor(b.y)), y1 = Math.min(bg.info.height, Math.ceil(b.y + b.h));
    for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
      const k = (y * bg.info.width + x) * 3;
      const r = bg.data[k], g = bg.data[k + 1], bl = bg.data[k + 2], a = line.alpha;
      const lt = lum(a * line.color[0] + (1 - a) * r, a * line.color[1] + (1 - a) * g, a * line.color[2] + (1 - a) * bl);
      const lb = lum(r, g, bl);
      const ratio = ((lt > lb ? lt : lb) + 0.05) / ((lt > lb ? lb : lt) + 0.05);
      ratios.push(ratio);
      const bi = Math.min(7, Math.floor(((x - xmin) / Math.max(1, xmax - xmin)) * 8));
      if (ratio < bins[bi]) bins[bi] = ratio;
    }
  }
  ratios.sort((p, q) => p - q);
  const at = (p) => ratios[Math.floor(p * (ratios.length - 1))];
  return { min: +at(0).toFixed(2), p5: +at(0.05).toFixed(2), median: +at(0.5).toFixed(2), bins: bins.map((v) => (isFinite(v) ? +v.toFixed(1) : null)), x: [Math.round(xmin), Math.round(xmax)] };
}

const browser = await puppeteer.launch({ headless: true });
const report = { contrast: [], cpl: [], fonts: [] };
try {
  for (const [w, h] of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: h });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.goto(baseUrl + '/', { waitUntil: 'networkidle0', timeout: 60000 });
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}' + EXTRA_CSS });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 600));

    const boxes = await page.evaluate((sels) => sels.map((sel) => {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector(sel));
      return [...range.getClientRects()].map((r) => ({ x: r.left, y: r.top, w: r.width, h: r.height }));
    }), HERO_LINES.map((l) => l.sel));
    report.fonts.push(await page.evaluate(() => ({
      viewport: innerWidth,
      loaded: [...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family} ${f.style} ${f.weight}`),
      line1Size: getComputedStyle(document.querySelector('.hb-hero-line1')).fontSize,
      line2Size: getComputedStyle(document.querySelector('.hb-hero-line2')).fontSize,
      line3Size: getComputedStyle(document.querySelector('.hb-hero-line3')).fontSize,
    })));

    await page.screenshot({ path: path.join(outDir, `hero-${w}.png`) });
    // flat: glyphs transparent, halo off
    await page.addStyleTag({ content: '.hb-hero-lines p{color:transparent!important;text-shadow:none!important}' });
    const flat = await sharp(await page.screenshot()).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    // halo: glyphs transparent, halo on (a transparent glyph still casts its shadow)
    await page.addStyleTag({ content: '.hb-hero-lines p{text-shadow:var(--hb-halo)!important}' });
    const halo = await sharp(await page.screenshot()).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    HERO_LINES.forEach((line, i) => {
      const f = sample(flat, boxes[i], line), hl = sample(halo, boxes[i], line);
      report.contrast.push({ viewport: w, line: line.label, flat: f, halo: hl });
      if (process.env.BINS) console.log(`  ${w}px ${line.label}: x ${f.x.join('-')} worst per slice (flat): ${f.bins.join(' ')}`);
    });
    await page.close();

    const ap = await browser.newPage();
    await ap.setViewport({ width: w, height: h });
    await ap.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await ap.goto(baseUrl + '/about/', { waitUntil: 'networkidle0', timeout: 60000 });
    await ap.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}' + EXTRA_CSS });
    await ap.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); }
      window.scrollTo(0, 0); await document.fonts.ready; await new Promise((r) => setTimeout(r, 500));
    });
    await ap.screenshot({ path: path.join(outDir, `about-${w}-top.png`) });
    const pb = await (await ap.$('.hb-prose')).boundingBox();
    await ap.screenshot({ path: path.join(outDir, `about-${w}-prose.png`), captureBeyondViewport: true, clip: { x: 0, y: Math.max(0, pb.y - 160), width: w, height: Math.min(pb.height + 1400, 2400) } });
    const stats = await ap.evaluate(() => {
      const lines = (p) => {
        const r = document.createRange();
        const rows = new Map();
        const t = p.textContent;
        for (let i = 0; i < t.length; i++) {
          r.setStart(p.firstChild, i); r.setEnd(p.firstChild, i + 1);
          const rc = r.getClientRects()[0];
          if (!rc) continue;
          const key = Math.round(rc.top);
          rows.set(key, (rows.get(key) || 0) + 1);
        }
        return [...rows.values()];
      };
      const out = [];
      document.querySelectorAll('.hb-prose p, .hb-closing').forEach((p) => {
        const l = lines(p);
        const full = l.slice(0, -1); // the last line of a paragraph is short by nature
        const cs = getComputedStyle(p);
        out.push({
          kind: p.classList.contains('hb-lead') ? 'lead' : p.classList.contains('hb-closing') ? 'closing' : 'body',
          lines: l.length,
          cpl: full.length ? Math.round(full.reduce((a, b) => a + b, 0) / full.length) : l[0],
          size: cs.fontSize, weight: cs.fontWeight, align: cs.textAlign, family: cs.fontFamily.slice(0, 22), lh: cs.lineHeight, color: cs.color,
        });
      });
      const hc = getComputedStyle(document.querySelector('#team-heading'));
      return { paras: out, heading: { size: hc.fontSize, weight: hc.fontWeight, family: hc.fontFamily.slice(0, 22) }, proseWidth: Math.round(document.querySelector('.hb-prose').getBoundingClientRect().width), scrollW: document.documentElement.scrollWidth };
    });
    report.cpl.push({ viewport: w, ...stats });
    await ap.close();
  }
} finally {
  await browser.close();
}
await fs.writeFile(path.join(outDir, 'measurements.json'), JSON.stringify(report, null, 2));
console.log('FONTS'); report.fonts.forEach((f) => console.log(' ', f.viewport, `sizes ${f.line1Size}/${f.line2Size}/${f.line3Size}`, '| loaded:', f.loaded.join('; ')));
console.log('HERO CONTRAST (WCAG ratio, target >= 7): p5 = worst 5% of pixels, min = single worst pixel');
console.table(report.contrast.map((c) => ({ viewport: c.viewport, line: c.line, 'flat p5': c.flat.p5, 'flat min': c.flat.min, 'halo p5': c.halo.p5, 'halo min': c.halo.min, median: c.flat.median })));
console.log('ABOUT'); report.cpl.forEach((c) => {
  const body = c.paras.filter((p) => p.kind === 'body');
  console.log(`  ${c.viewport}px: prose ${c.proseWidth}px wide, body ${body[0]?.size}/${body[0]?.weight}/${body[0]?.align}/lh ${body[0]?.lh}, lead ${c.paras[0].size}/${c.paras[0].weight}, closing ${c.paras.at(-1).size}/${c.paras.at(-1).align}, heading ${c.heading.size}/${c.heading.weight}; chars per line: body [${body.map((p) => p.cpl).join(', ')}], lead ${c.paras[0].cpl}; horizontal overflow: ${c.scrollW > c.viewport}`);
});
