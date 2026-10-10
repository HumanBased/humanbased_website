// Dev helper: records the rendered box of every <img> per route so image changes
// (format, width/height, lazy loading) can be diffed for layout shift.
// Usage: node scripts/measure-imgs.mjs <out.json>   (serves dist/ locally)
import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import puppeteer from 'puppeteer';
import { ROUTES } from './routes.mjs';

const dist = path.resolve('dist');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.json': 'application/json', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  let f = path.join(dist, decodeURIComponent(req.url.split('?')[0]));
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) f = path.join(dist, 'index.html');
  res.setHeader('Content-Type', MIME[path.extname(f)] || 'application/octet-stream');
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const out = {};
for (const route of ROUTES.filter((r) => !r.startsWith('/apps'))) {
  for (const [label, w] of [['desktop', 1280], ['mobile', 390]]) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 900 });
    await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.evaluate(() => Promise.race([new Promise((r) => setTimeout(r, 4000)), Promise.all([...document.images].filter((i) => i.getBoundingClientRect().width > 0).map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; })))]));
    out[`${route} @${label}`] = await page.evaluate(() => [...document.images].map((i) => {
      const r = i.getBoundingClientRect();
      return `${i.getAttribute('src').split('/').pop().replace(/\.(png|webp|jpg)$/, '').replace(/\.webp$/, '')}|${Math.round(r.x)},${Math.round(r.y + scrollY)},${Math.round(r.width)}x${Math.round(r.height)}`;
    }));
    await page.close();
  }
}
await browser.close(); server.close();
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
console.log('wrote', process.argv[2], Object.keys(out).length, 'views');
