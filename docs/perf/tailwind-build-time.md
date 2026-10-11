# Tailwind: runtime CDN to build time (P89)

Tailwind 3.4.17 (the version `cdn.tailwindcss.com` served) is now compiled by PostCSS during
`vite build`. The CDN `<script>` and the inline `tailwind.config` are gone; the theme
(`amber` 400/500/600) lives in `tailwind.config.js`; the output is one minified, linked
stylesheet (`/assets/index-*.css`, 48 KB raw, 9.8 KB gzip) in the head of every prerendered
page.

## Was the CDN the cause of the slow load?

Partly. Before, on both pages it was the largest render-blocking script (about 770 to 790 ms
of blocking in the trace, a 124 KB download, 90 to 115 ms of main-thread scripting) and it
re-generated the page's CSS in the browser on every load. Removing it helped, but it was not
the whole story: LCP is still about 7.4 s (home) and 8.2 s (/purposebased/) in Lighthouse's
simulated slow-4G mobile profile. What remains on the critical path is the two Google Fonts
stylesheets (about 775 to 905 ms render-blocking), the app stylesheet, and the 136 KB script.

## Lighthouse mobile, median of 3 runs

| | Perf | FCP | LCP | CLS | TBT |
|---|---|---|---|---|---|
| Home, before | 63 | 4.11 s | 8.25 s | 0.006 | 45 ms |
| Home, after | 65 | 3.70 s | 7.36 s | 0.006 | 42 ms |
| /purposebased/, before | 62 | 5.36 s | 8.64 s | 0.002 | 104 ms |
| /purposebased/, after | 61 | 3.96 s | 8.17 s | 0 | 182 ms |

TBT on /purposebased/ varies a lot between runs on both builds (before 55 to 208 ms, after
141 to 295 ms). Per-run summaries: `docs/perf/lighthouse/`.

## Parity (docs/perf/before vs docs/perf/after)

- Pixel diff, 27 routes x 1440 and 390 wide (56 captures): largest difference 0.093%,
  32 captures identical, none above the 0.5% limit, no page height changed.
- Computed styles of every element (about 50 properties) compared per route: no differences
  other than the PurposeBased star field, which is positioned with `Math.random()`.
- CSS rule parity: all 565 rules the CDN generated across every route (plus mobile menu and
  empty-form-submit states) exist in the compiled CSS with the same declarations, including
  `:hover`/`:focus`/`group-hover` variants and the four responsive `@media` blocks. Only 5
  declarations differ, all legacy vendor prefixes for browsers older than the browserslist
  (`-moz-tab-size`, `-webkit-text-decoration-*`). `package.json` `browserslist` keeps
  `-webkit-backdrop-filter` for Safari/iOS 14+.

## Things worth knowing

- Tailwind's CSS is imported last in `index.tsx` so it follows every other stylesheet, as
  the CDN's runtime `<style>` did; utilities keep winning ties. This is also why headings
  use Tailwind's Georgia-based `font-serif`, not the Fraunces rule in `index.html`
  (unchanged behaviour). Fraunces is still preloaded on every page and appears unused.
- `/purposebased/partners` hides its sections until JavaScript adds a class (existing
  behaviour, unrelated to Tailwind); with JS off that page is styled but mostly invisible.
- Journey line: the first version caused layout shift on /purposebased/ in some runs. It now
  stays hidden until its first measurement. Rewriting it with transforms fixed the shift but
  changed how the footer text is composited (subpixel instead of grayscale anti-aliasing,
  0.25% luminance difference), so the original geometry-based rendering was kept.
- Re-run: `npm run build`, `npx vite preview --port 4173`, then `scripts/perf/capture-all.mjs`,
  `diff.mjs`, `css-parity.mjs`, `nojs.mjs`, `lh.mjs` (see the headers of each script).
