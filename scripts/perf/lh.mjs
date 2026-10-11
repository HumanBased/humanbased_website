// Runs Lighthouse (mobile, performance + accessibility) N times per URL and
// writes a compact summary per run to docs/perf/lighthouse/<tag>-<page>.json.
//   node scripts/perf/lh.mjs <tag> [runs=3] [baseUrl]
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import puppeteer from 'puppeteer';

const [tag, runs = '3', baseUrl = 'http://localhost:4173'] = process.argv.slice(2);
if (!tag) throw new Error('usage: lh.mjs <tag> [runs] [baseUrl]');
const PAGES = [['home', '/'], ['pb', '/purposebased/']];
const outDir = path.resolve('docs/perf/lighthouse');
fs.mkdirSync(outDir, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lh-'));
const chrome = puppeteer.executablePath();

const hostOf = (u) => { try { return new URL(u).host; } catch { return u; } };

for (const [page, route] of PAGES) {
  const summaries = [];
  for (let i = 1; i <= Number(runs); i++) {
    const file = path.join(tmp, `${tag}-${page}-${i}.json`);
    execFileSync(process.platform === 'win32' ? 'npx.cmd' : 'npx', [
      '-y', 'lighthouse@12.8.2', baseUrl + route, '--quiet', '--only-categories=performance,accessibility',
      '--output=json', `--output-path=${file}`, '--chrome-flags=--headless=new',
    ], { env: { ...process.env, CHROME_PATH: chrome }, stdio: 'ignore', shell: process.platform === 'win32' });
    const j = JSON.parse(fs.readFileSync(file, 'utf8'));
    const a = j.audits;
    const lcpNode = a['largest-contentful-paint-element']?.details?.items?.[0]?.items?.[0]?.node;
    const blocking = (a['render-blocking-resources']?.details?.items || []).map((r) => ({ url: r.url.length > 110 ? r.url.slice(0, 110) + '…' : r.url, wastedMs: Math.round(r.wastedMs) }));
    const boot = (a['bootup-time']?.details?.items || []).map((r) => ({ host: r.url === 'Unattributable' ? r.url : hostOf(r.url) + new URL(r.url, 'http://x').pathname.slice(0, 28), scripting: Math.round(r.scripting), total: Math.round(r.total) }));
    const tw = boot.filter((b) => /tailwind/.test(b.host));
    const thread = (a['mainthread-work-breakdown']?.details?.items || []).map((r) => `${r.groupLabel} ${Math.round(r.duration)}ms`);
    const bytes = (a['network-requests']?.details?.items || []).filter((r) => /\.(js|css)(\?|$)/.test(r.url) || /tailwind/.test(r.url)).map((r) => ({ url: r.url.replace(baseUrl, '').slice(0, 70), kb: +(r.transferSize / 1024).toFixed(1) }));
    summaries.push({
      run: i,
      perf: Math.round(j.categories.performance.score * 100),
      a11y: Math.round(j.categories.accessibility.score * 100),
      fcp: a['first-contentful-paint'].numericValue && +(a['first-contentful-paint'].numericValue / 1000).toFixed(2),
      lcp: +(a['largest-contentful-paint'].numericValue / 1000).toFixed(2),
      cls: +a['cumulative-layout-shift'].numericValue.toFixed(4),
      tbt: Math.round(a['total-blocking-time'].numericValue),
      lcpElement: lcpNode ? lcpNode.selector : null,
      renderBlocking: blocking,
      tailwindThreadMs: tw,
      mainThread: thread,
      jsCssRequests: bytes,
    });
    const s = summaries[summaries.length - 1];
    console.log(`${tag} ${page} run${i}: perf ${s.perf} a11y ${s.a11y} FCP ${s.fcp}s LCP ${s.lcp}s CLS ${s.cls} TBT ${s.tbt}ms`);
  }
  fs.writeFileSync(path.join(outDir, `${tag}-${page}.json`), JSON.stringify(summaries, null, 2));
}
