// Lists every raster drawn larger than its pixel size (at 1x) on the marketing
// pages, for <img> elements and CSS background images, at several widths.
// Usage: node scripts/visual/image-sizes.mjs [baseUrl]
import puppeteer from 'puppeteer';

const baseUrl = process.argv[2] || 'http://localhost:4173';
const ROUTES = ['/', '/about', '/services', '/process', '/products', '/purposebased', '/purposebased/story', '/purposebased/how-it-works', '/purposebased/library'];
const WIDTHS = [[1440, 900], [1920, 1080], [2560, 1440]];

const browser = await puppeteer.launch({ headless: true });
const worst = new Map();
for (const route of ROUTES) {
  for (const [w, h] of WIDTHS) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: h });
    await page.goto(baseUrl + route, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    });
    const found = await page.evaluate(async () => {
      const out = [];
      for (const img of document.querySelectorAll('img')) {
        const r = img.getBoundingClientRect();
        if (!img.currentSrc || r.width < 2) continue;
        // naturalWidth is density-corrected for srcset picks; load the file
        // itself to get its true pixel size.
        const probe = new Image();
        probe.src = img.currentSrc;
        await probe.decode().catch(() => {});
        if (!probe.naturalWidth) continue;
        // object-fit: cover scales by the larger ratio.
        const fit = getComputedStyle(img).objectFit;
        const scale = fit === 'cover'
          ? Math.max(r.width / probe.naturalWidth, r.height / probe.naturalHeight)
          : Math.min(r.width / probe.naturalWidth, r.height / probe.naturalHeight);
        out.push({ src: img.currentSrc.split('/').pop(), natural: `${probe.naturalWidth}x${probe.naturalHeight}`, shown: `${Math.round(r.width)}x${Math.round(r.height)}`, scale });
      }
      const bgs = [];
      document.querySelectorAll('*').forEach((el) => {
        const bg = getComputedStyle(el).backgroundImage;
        const m = bg && bg.match(/url\("?([^")]+)"?\)/);
        if (m && /\.(webp|png|jpe?g|avif)/.test(m[1])) bgs.push([el, m[1], getComputedStyle(el).backgroundSize]);
      });
      for (const [el, url, size] of bgs) {
        const r = el.getBoundingClientRect();
        const img = new Image();
        img.src = url;
        await img.decode().catch(() => {});
        if (!img.naturalWidth) continue;
        const sx = r.width / img.naturalWidth;
        const sy = r.height / img.naturalHeight;
        const pct = size.match(/^(\d+)%/);
        const scale = size === 'cover' ? Math.max(sx, sy) : pct ? (r.width * parseInt(pct[1], 10) / 100) / img.naturalWidth : Math.min(sx, sy);
        out.push({ src: url.split('/').pop() + ' (css background)', natural: `${img.naturalWidth}x${img.naturalHeight}`, shown: `${Math.round(r.width)}x${Math.round(r.height)}`, scale });
      }
      return out;
    });
    for (const f of found) {
      if (f.scale <= 1.02) continue;
      const key = f.src;
      const prev = worst.get(key);
      if (!prev || f.scale > prev.scale) worst.set(key, { ...f, route, viewport: `${w}x${h}` });
    }
    await page.close();
  }
}
await browser.close();
const rows = [...worst.values()].sort((a, b) => b.scale - a.scale).map((r) => {
  const [nw, nh] = r.natural.split('x').map(Number);
  return { image: r.src, route: r.route, viewport: r.viewport, natural: r.natural, shown: r.shown, upscale: `${r.scale.toFixed(2)}x`, needs: `${Math.ceil(nw * r.scale)}x${Math.ceil(nh * r.scale)}` };
});
console.table(rows);
