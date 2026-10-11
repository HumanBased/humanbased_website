// About page: computed fonts of the prose, closing statement and team heading, font file
// statuses, and full-page + top screenshots at 1440 and 390.
//   node scripts/visual/about-fonts.mjs [outDir] [baseUrl]
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const outDir = path.resolve(process.argv[2] || 'docs/visual/p91');
const baseUrl = process.argv[3] || 'http://localhost:4173';
await fs.mkdir(outDir, { recursive: true });
const browser = await puppeteer.launch({ headless: true });
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h });
  const fonts = [];
  page.on('response', (r) => { if (/\.woff2?(\?|$)/.test(r.url())) fonts.push(r.status() + ' ' + r.url().split('/').pop()); });
  await page.goto(baseUrl + '/about/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const info = await page.evaluate(() => {
    const pick = (el) => { const cs = getComputedStyle(el); return { family: cs.fontFamily, weight: cs.fontWeight, size: cs.fontSize, style: cs.fontStyle }; };
    const loaded = [...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family} ${f.weight} ${f.style}`);
    const q = (s) => document.querySelector(s);
    const used = (s) => document.fonts.check('20px ' + s);
    return {
      lead: pick(q('.hb-lead')), body: pick(q('.hb-prose .hb-body')), closing: pick(q('.hb-closing')), team: pick(q('#team-heading')), eyebrow: pick(q('.ed-eyebrow')),
      gap: q('.ed-eyebrow').nextElementSibling.getBoundingClientRect().top - q('.ed-eyebrow').getBoundingClientRect().bottom,
      company: [...document.querySelectorAll('p')].filter((p) => /CVR DK45998576/.test(p.textContent)).map((p) => ({ cls: p.className, align: getComputedStyle(p).textAlign, insideTeam: !!p.closest('section[aria-labelledby=team-heading]') })),
      loaded, cormorantUsable: used('"Cormorant Garamond"'),
    };
  });
  console.log(w, JSON.stringify(info, null, 1)); console.log('font responses:', fonts.join(' | '));
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: path.join(outDir, `about-top-${w}.png`) });
  await page.screenshot({ path: path.join(outDir, `about-full-${w}.png`), fullPage: true });
  await page.close();
}
await browser.close();
