// Lists every text element rendered in Cormorant Garamond, per route, at desktop and
// phone width; flags sizes under 20px and weights above 500 (which would be synthetic).
//   node scripts/visual/serif-audit.mjs [baseUrl]
import puppeteer from 'puppeteer';
import { ROUTES } from '../routes.mjs';

const baseUrl = process.argv[2] || 'http://localhost:4173';
const browser = await puppeteer.launch({ headless: true });
const rows = [];
for (const route of ROUTES.filter((r) => !r.startsWith('/purposebased'))) {
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: h });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.goto(baseUrl + route + (route === '/' ? '' : '/'), { waitUntil: 'networkidle0', timeout: 60000 });
    const found = await page.evaluate(() => {
      const out = [];
      document.querySelectorAll('body *').forEach((el) => {
        const own = [...el.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim()).map((n) => n.textContent.trim()).join(' ');
        if (!own) return;
        const cs = getComputedStyle(el);
        if (!cs.fontFamily.startsWith('"Cormorant Garamond"')) return;
        if (cs.display === 'none' || cs.visibility === 'hidden') return;
        out.push({ tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().split(' ').filter((c) => /^(hb-|ed-|font-|text-(xs|sm|base|lg|xl|[2-9]xl))/.test(c)).slice(0, 4).join(' '), text: own.slice(0, 44), size: parseFloat(cs.fontSize), weight: +cs.fontWeight, style: cs.fontStyle });
      });
      return out;
    });
    found.forEach((f) => rows.push({ route, w, ...f }));
    await page.close();
  }
}
await browser.close();
const small = rows.filter((r) => r.size < 19.95);
const heavy = rows.filter((r) => r.weight > 500);
console.log(`elements in Cormorant Garamond: ${rows.length}`);
console.log(`under 20px: ${small.length}`);
small.forEach((r) => console.log(`  ${r.route} @${r.w} <${r.tag} ${r.cls}> ${r.size}px w${r.weight} "${r.text}"`));
console.log(`weight above 500 (synthetic bold): ${heavy.length}`);
heavy.forEach((r) => console.log(`  ${r.route} @${r.w} <${r.tag} ${r.cls}> ${r.size}px w${r.weight} "${r.text}"`));
// headings list (desktop) for the report
const seen = new Set();
console.log('HEADINGS now in Cormorant Garamond (desktop):');
rows.filter((r) => r.w === 1440 && /^h[1-6]$/.test(r.tag)).forEach((r) => {
  const key = r.route + r.text;
  if (seen.has(key)) return;
  seen.add(key);
  console.log(`  ${r.route.padEnd(12)} <${r.tag}> ${String(r.size).padEnd(5)}px w${r.weight} "${r.text}"`);
});
