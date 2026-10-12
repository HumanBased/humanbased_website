# Mobile performance pass (branch `perf-pass`)

Goal: cut mobile load time (Lighthouse mobile LCP was about 7 s) without changing how any
page looks or reads.

## Method

- Lighthouse 12.8.2, mobile preset (default simulated slow 4G, 4x CPU), performance category.
- Each build was served from a small static server that speaks HTTP/2 with brotli, like
  Vercel does (a plain HTTP/1.1 server hides the benefit of parallel loading).
  Hashed assets get long cache headers. Routes: `/`, `/about/`, `/purposebased/`.
- Median of 3 runs per route. Before and after were measured back to back on the same
  machine in the same session, "before" being the unmodified `main` build.
- Run-to-run noise on this 2 core machine is roughly +/- 3 points of score and large for
  TBT (tens to a few hundred ms), so read TBT as a rough guide only.

## Results (median of 3, mobile)

| Route | Build | Perf | FCP | LCP | CLS | TBT | Transfer |
|---|---|---|---|---|---|---|---|
| `/` | before | 71 | 2.24 s | 5.87 s | 0 | 42 ms | 1157 KB |
| `/` | after | 80 | 2.04 s | 4.40 s | 0 | 27 ms | 849 KB |
| `/about/` | before | 72 | 2.41 s | 5.26 s | 0 | 0 ms | 827 KB |
| `/about/` | after | 92 | 1.45 s | 3.04 s | 0 | 13 ms | 517 KB |
| `/purposebased/` | before | 45 | 3.30 s | 6.66 s | 0 | 845 ms | 859 KB |
| `/purposebased/` | after | 63 | 2.50 s | 4.66 s | 0 | 519 ms | 595 KB |

Important caveat on "before": the sandbox this was measured in cannot reach
fonts.googleapis.com (the proxy answers 403 straight away). In production those two
stylesheets are render blocking and cost about 780 ms each in Lighthouse's simulation
(see `docs/perf/tailwind-build-time.md`), so the real "before" is worse than the table
and the real improvement larger. Earlier measurements on the live network gave LCP
7.4 s (home) and 8.2 s (PurposeBased).

## What changed

1. **Google Fonts removed everywhere.** The two `fonts.googleapis.com` stylesheets and the
   preconnects in `index.html` are gone. Cormorant (normal and italic), DM Sans, Cinzel
   (nav "Our Products") and Playfair Display (BasedTalk pages) are now self-hosted
   latin-subset variable woff2 files in `public/fonts/`, declared in `public/index.css`
   with `font-display: swap`, next to the existing size-adjusted fallbacks (which are
   unchanged). The PurposeBased font preloads now point at the local files instead of
   hard-coded `fonts.gstatic.com` URLs that could rot. Files come from the
   `@fontsource-variable` packages (same upstream families). Nothing loads from Google
   any more; the CSP header still allows it, which is harmless.
2. **Route-level code splitting.** Every page in `App.tsx` is a `React.lazy` chunk, and
   each PurposeBased sub-page is its own chunk. The entry script went from 540 KB
   (113 KB brotli) to 263 KB (71 KB brotli). A visitor now downloads the shared shell plus
   the one page they opened. The legal pages (privacy, terms, delete-account,
   delete-data) are untouched in content, URL and rewrite, they just load as chunks.
3. **Prerender keeps hydrating cleanly.** `scripts/prerender.mjs` now (a) waits for the
   lazy page to be in `<main>` before snapshotting, (b) adds `modulepreload` links for
   every chunk a route loaded so chunks download in parallel with the entry script, and
   (c) wraps `#root` content in the `<!--$-->` / `<!--/$-->` comments React uses to
   hydrate a Suspense boundary (without them every page threw React error 418 and
   re-rendered from scratch, which is what the first attempt showed as CLS 1 and a 12 s
   TBT). All 27 routes plus 404 still prerender.
4. **Logos.** The header and footer logo (340 px PNG, 166 KB, loaded as two requests plus
   the favicon) is now a 56 KB near-lossless WebP (largest pixel difference 2/255), the
   favicon and touch icon are 64 px and 180 px PNGs (4 KB and 17 KB), and the PurposeBased
   nav/footer mark (512 px, 94 KB, shown at 48 px) is a 192 px WebP (19 KB). The original
   files stay in `public/` because the manifest and external links point at them.
5. **Hero image left alone.** It was already served as responsive AVIF/WebP
   (`srcset` 960 to 3360 w, `sizes`, `fetchpriority=high`, matching `<link rel=preload
   imagesrcset>`). On a phone it fetches the 51 KB AVIF. Swapping in the 20 KB 960 px file
   in an experiment moved LCP by only 0.2 s, so image bytes are not the bottleneck, and a
   smaller file would visibly soften the planet.

## Checks

- Text: `document.body.innerText` identical before and after on all 27 routes, with
  JavaScript on and with JavaScript off (54 comparisons, 0 differences).
- JS off: no element with visible text is at opacity 0 on any route (same count as before);
  stylesheets are still linked in the static HTML, including the lazy page's own CSS.
- Console: no errors and no React hydration errors on any of the 27 routes.
- CLS: 0 in Lighthouse on all three routes; at most 0.008 (`/about/`, was already
  present in the before build) in a plain browser load.
- Hero seam check (`scripts/visual/seams.mjs`, home): the hero's own edge profile steps are
  0.00 to 0.83 out of 255 in both builds, identical row for row. One capture (2560 px
  wide, scrolled 300 px, top edge) flips between about 12 and 0.02 from run to run in
  both the before and after builds (it appeared in two of three "before" runs), so it is
  harness noise and not caused by this change. The hero image and CSS were not modified.
- `npx tsc --noEmit`: 29 errors, same as the baseline.

## What I could not fix, and why

- **LCP is still 4.4 s (home) and 4.7 s (PurposeBased).** In an earlier HTTP/1.1 run, with JavaScript removed from the
  page entirely, LCP only dropped to about 4.5 s (from 5.0 s), and removing the hero animation, mask,
  blend mode or aurora blur individually changed nothing. The remaining time is the
  browser compositing the hero's masked, blend-moded layers on a throttled CPU, which is
  part of the design. Changing it would change the look, which was off limits.
- **PurposeBased TBT (about 500 ms).** It is driven by the 285 individually animated stars
  in `PBCosmos` and the large inline style blocks, both random and visual. Left as is.
- **`/purposebased/` hero background (123 KB WebP).** An AVIF of it is about 50 percent
  smaller but is a second lossy generation (about 40 dB) of a dark gradient image, which
  risks banding. Needs the original artwork to re-encode safely, so skipped.
- **`manifest.json` still lists `/logo.png`** (166 KB, declared as 512 px but actually
  340 px). Lighthouse downloads it, real visitors do not. Left alone because it controls
  the installed-app icon.
- **Vite `modulepreload` and the `home-kpi` image (206 KB)** are below the fold and load
  late, so they do not affect LCP. Not touched.
- The Google Fonts files were not byte-compared with the previous remote files, since the
  sandbox cannot reach Google. The families and weights match, and the fallbacks are
  unchanged, but give PurposeBased a quick look on the preview deploy.
