// Journey milestone labels per route (client render, after layout is measured).
//   node scripts/visual/journey-labels.mjs [baseUrl]
import puppeteer from 'puppeteer';
const baseUrl = process.argv[2] || 'http://localhost:4173';
const browser = await puppeteer.launch({ headless: true });
for (const route of ['/about/', '/', '/services/', '/process/', '/products/']) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl + route, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 600));
  const labels = await page.evaluate(() => {
    const root = document.querySelector('[class*="mx-journey"]');
    return root ? root.textContent.replace(/\s+/g, ' ').trim() : null;
  });
  console.log(route.padEnd(11), labels);
  await page.close();
}
await browser.close();
