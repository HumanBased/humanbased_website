// Proves the compiled stylesheet contains every rule the runtime Tailwind CDN
// generated, with the same declarations, including :hover / :focus / group-hover
// variants and every responsive @media block.
//   node scripts/perf/css-parity.mjs <cdnBaseUrl> <compiledCssPath>
// <cdnBaseUrl> serves the pre-migration build (CDN script in the page). For each
// route, at desktop and phone widths, it collects the <style> element the CDN
// injects (banner "tailwindcss v3.4.17"), after exercising the states that change
// the DOM (mobile menu open, form errors via an empty submit).
import fs from 'node:fs';
import postcss from 'postcss';
import puppeteer from 'puppeteer';
import { ROUTES } from '../routes.mjs';

const [baseUrl, compiledPath] = process.argv.slice(2);
if (!baseUrl || !compiledPath) throw new Error('usage: css-parity.mjs <cdnBaseUrl> <compiledCssPath>');

// Whitespace, attribute-selector quotes and leading-zero formatting differ between
// the CDN's output and the compiler's but mean the same thing.
const norm = (s) =>
  s
    .replace(/\s+/g, ' ')
    .replace(/\[([\w-]+)=(['"])([^'"\]]*)\2\]/g, '[$1=$3]')
    .replace(/(^|[^\d.])(-?)0\.(\d)/g, '$1$2.$3')
    .replace(/,\s*/g, ', ')
    .trim();
function index(cssText) {
  const map = new Map(); // "atrules||selector" -> Map(prop -> Set(values))
  postcss.parse(cssText).walkRules((rule) => {
    const chain = [];
    for (let p = rule.parent; p && p.type !== 'root'; p = p.parent) {
      if (p.type === 'atrule') chain.unshift(`@${p.name} ${norm(p.params)}`);
    }
    if (chain.some((c) => c.startsWith('@keyframes'))) {
      const name = chain.find((c) => c.startsWith('@keyframes'));
      chain.length = 0;
      chain.push(name);
    }
    for (const sel of rule.selectors) {
      const key = `${chain.join(' > ')}||${norm(sel)}`;
      if (!map.has(key)) map.set(key, new Map());
      const props = map.get(key);
      rule.walkDecls((d) => {
        if (!props.has(d.prop)) props.set(d.prop, new Set());
        props.get(d.prop).add(norm(d.value));
      });
    }
  });
  return map;
}

const compiled = index(fs.readFileSync(compiledPath, 'utf8'));
const browser = await puppeteer.launch({ headless: true });
const cdnCss = new Set();
const pages = [...ROUTES, '/this-page-does-not-exist'];
for (const route of pages) {
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: h });
    await page.goto(baseUrl + route + (route.endsWith('/') || route === '/' ? '' : '/'), { waitUntil: 'networkidle0', timeout: 60000 });
    // Exercise DOM-changing states.
    await page.evaluate(async () => {
      document.querySelector('button[aria-label="Open menu"], button[aria-label="Toggle menu"]')?.click();
      document.querySelector('form button[type="submit"]')?.click();
      await new Promise((r) => setTimeout(r, 600));
    });
    const texts = await page.evaluate(() => [...document.querySelectorAll('style')].map((s) => s.textContent).filter((t) => /tailwindcss v3/.test(t)));
    texts.forEach((t) => cdnCss.add(t));
    await page.close();
  }
}
await browser.close();

const cdn = new Map();
for (const t of cdnCss) {
  for (const [k, props] of index(t)) {
    if (!cdn.has(k)) cdn.set(k, new Map());
    for (const [p, vals] of props) {
      if (!cdn.get(k).has(p)) cdn.get(k).set(p, new Set());
      vals.forEach((v) => cdn.get(k).get(p).add(v));
    }
  }
}

let missingRules = 0;
let missingDecls = 0;
const examples = [];
for (const [key, props] of cdn) {
  const have = compiled.get(key);
  if (!have) {
    missingRules++;
    if (examples.length < 12) examples.push(`MISSING RULE ${key}`);
    continue;
  }
  for (const [prop, vals] of props) {
    for (const v of vals) {
      if (!have.get(prop)?.has(v)) {
        missingDecls++;
        if (examples.length < 12) examples.push(`DECL ${key} { ${prop}: ${v} } (compiled: ${[...(have.get(prop) || [])].join(' | ') || 'absent'})`);
      }
    }
  }
}
const hover = [...cdn.keys()].filter((k) => /:hover|:focus|group-hover|:active|:disabled/.test(k)).length;
const media = new Set([...cdn.keys()].filter((k) => k.startsWith('@media')).map((k) => k.split('||')[0]));
console.log(`CDN rules observed: ${cdn.size} (state variants: ${hover}; @media blocks: ${media.size} -> ${[...media].join(' ; ')})`);
console.log(`Compiled rules:     ${compiled.size}`);
console.log(`CDN rules missing from compiled CSS: ${missingRules}; declarations differing: ${missingDecls}`);
examples.forEach((e) => console.log('  ' + e));
process.exitCode = missingRules || missingDecls ? 1 : 0;
