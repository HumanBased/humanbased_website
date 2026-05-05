import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync, createReadStream, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const publicDir = path.resolve(__dirname, '..', 'public');

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/process',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(distDir, urlPath);
    if (existsSync(filePath) && statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    if (!existsSync(filePath)) {
      filePath = path.join(distDir, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
    createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function copyPublicMissing() {
  if (!existsSync(publicDir)) return;
  const entries = await fs.readdir(publicDir, { withFileTypes: true, recursive: true });
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const abs = path.join(entry.parentPath ?? entry.path, entry.name);
    const rel = path.relative(publicDir, abs);
    const dest = path.join(distDir, rel);
    if (existsSync(dest)) continue;
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(abs, dest);
    console.log(`[prerender] copied public -> ${rel}`);
  }
}

async function prerender() {
  if (!existsSync(distDir)) {
    throw new Error(`dist directory not found at ${distDir}`);
  }
  await copyPublicMissing();
  const server = await startServer();
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`[prerender] serving ${distDir} at ${baseUrl}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = baseUrl + route;
      console.log(`[prerender] rendering ${route}`);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.waitForSelector('#root > *', { timeout: 30000 });
      const html = await page.content();
      await page.close();

      const outDir = route === '/'
        ? distDir
        : path.join(distDir, ...route.split('/').filter(Boolean));
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, 'index.html');
      await fs.writeFile(outFile, html, 'utf8');
      console.log(`[prerender]   -> ${path.relative(distDir, outFile)}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log('[prerender] done');
}

prerender().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
