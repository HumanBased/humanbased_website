// All prerendered routes with JavaScript off: styled (stylesheet applied), nothing hidden,
// and the page is the prerendered one. Also reports console errors with JS on (hydration).
//   node scripts/visual/nojs-routes.mjs [baseUrl]
import puppeteer from 'puppeteer';
import { ROUTES } from '../routes.mjs';
const baseUrl = process.argv[2] || 'http://localhost:4173';
const browser = await puppeteer.launch({ headless: true });
let bad = 0;
for (const route of ROUTES) {
  const off = await browser.newPage();
  await off.setJavaScriptEnabled(false);
  await off.goto(baseUrl + (route === '/' ? '/' : route + '/'), { waitUntil: 'load' });
  const r = await off.evaluate(() => {
    const hidden = [...document.querySelectorAll('h1,h2,h3,p,li,a,button')].filter((e) => e.textContent.trim() && (getComputedStyle(e).opacity === '0' || getComputedStyle(e).visibility === 'hidden')).length;
    return { bg: getComputedStyle(document.body).backgroundColor, font: getComputedStyle(document.body).fontFamily.slice(0, 30), hidden, chars: document.body.innerText.length };
  });
  await off.close();
  const on = await browser.newPage();
  const errs = [];
  on.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 90)); });
  on.on('pageerror', (e) => errs.push(String(e).slice(0, 90)));
  await on.goto(baseUrl + (route === '/' ? '/' : route + '/'), { waitUntil: 'networkidle0' });
  await on.close();
  const ok = r.hidden === 0 && r.chars > 100 && errs.length === 0;
  if (!ok) bad++;
  console.log((ok ? 'ok  ' : 'FLAG') + ' ' + route.padEnd(44) + ` chars ${r.chars} hidden ${r.hidden} bg ${r.bg} errors ${errs.length}${errs.length ? ' ' + errs[0] : ''}`);
}
console.log('flagged:', bad, 'of', ROUTES.length);
await browser.close();
