// Two static-HTML guarantees for the visual overhaul:
//  1. Copy is unchanged: the visible text of each prerendered page matches a
//     reference build (word sequence, whitespace-normalised).
//  2. Pages are fully readable with JavaScript off: every text element in the
//     prerendered HTML is rendered visible (opacity, visibility, display).
// Usage: node scripts/visual/copy-and-nojs.mjs <referenceDistDir> [distDir]
import http from 'node:http';
import path from 'node:path';
import { existsSync, createReadStream, statSync } from 'node:fs';
import puppeteer from 'puppeteer';

const ROUTES = ['/', '/about', '/services', '/process', '/products', '/purposebased', '/purposebased/story', '/purposebased/how-it-works', '/purposebased/library'];
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.avif': 'image/avif', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };

const serve = (dir) =>
  new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let file = path.join(dir, decodeURIComponent(req.url.split('?')[0]));
      if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, 'index.html');
      if (!existsSync(file)) file = path.join(dir, 'index.html');
      res.setHeader('Content-Type', MIME[path.extname(file)] || 'application/octet-stream');
      createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });

const [refDir, distDir = 'dist'] = process.argv.slice(2);
if (!refDir) throw new Error('usage: copy-and-nojs.mjs <referenceDistDir> [distDir]');
const ref = await serve(path.resolve(refDir));
const cur = await serve(path.resolve(distDir));
const browser = await puppeteer.launch({ headless: true });

// Visible text, in reading order, from the static HTML only (JS disabled).
const readPage = async (port, route) => {
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'load' });
  const result = await page.evaluate(() => {
    const main = document.querySelector('main') || document.body;
    const text = main.innerText.replace(/\s+/g, ' ').trim();
    const hidden = [];
    main.querySelectorAll('h1,h2,h3,h4,p,li,blockquote,a,button,label,span').forEach((el) => {
      if (!el.textContent.trim() || el.closest('[aria-hidden="true"]')) return;
      let node = el;
      while (node && node !== document.body) {
        const cs = getComputedStyle(node);
        if (parseFloat(cs.opacity) < 0.05 || cs.visibility === 'hidden') {
          hidden.push(el.textContent.trim().slice(0, 60));
          return;
        }
        node = node.parentElement;
      }
    });
    return { text, hidden };
  });
  await page.close();
  return result;
};

let failures = 0;
for (const route of ROUTES) {
  const before = await readPage(ref.address().port, route);
  const after = await readPage(cur.address().port, route);
  const a = before.text.split(' ');
  const b = after.text.split(' ');
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  const same = before.text === after.text;
  if (!same) failures++;
  if (after.hidden.length) failures++;
  console.log(
    `${route.padEnd(30)} words ${String(b.length).padStart(5)}  copy ${same ? 'identical' : `DIFFERS at word ${i}: "${a.slice(i, i + 8).join(' ')}" vs "${b.slice(i, i + 8).join(' ')}"`}  hidden-with-JS-off ${after.hidden.length}`,
  );
  if (after.hidden.length) console.log('   hidden:', after.hidden.slice(0, 5));
}
await browser.close();
ref.close();
cur.close();
process.exitCode = failures ? 1 : 0;
