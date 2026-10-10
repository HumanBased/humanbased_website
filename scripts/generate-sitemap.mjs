import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE_ORIGIN, ROUTE_ENTRIES, EXTERNAL_SITEMAP_ENTRIES } from './routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

function buildSitemap(entries, lastmod) {
  const urls = entries.map(
    ({ path: p, priority }) =>
      `  <url><loc>${SITE_ORIGIN}${p}</loc><lastmod>${lastmod}</lastmod><priority>${priority.toFixed(1)}</priority></url>`,
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

async function main() {
  if (!existsSync(distDir)) {
    throw new Error(`dist directory not found at ${distDir}`);
  }
  const lastmod = new Date().toISOString().slice(0, 10);
  const xml = buildSitemap([...ROUTE_ENTRIES, ...EXTERNAL_SITEMAP_ENTRIES], lastmod);
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`[sitemap] wrote ${ROUTE_ENTRIES.length + EXTERNAL_SITEMAP_ENTRIES.length} URLs to dist/sitemap.xml`);
}

main().catch((err) => {
  console.error('[sitemap] failed:', err);
  process.exit(1);
});
