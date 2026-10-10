# Motion system

One folder, no dependencies: CSS plus about 3KB of TypeScript (gzipped). Mounted once in
`App.tsx` (`useMotion()` inside the router, `motion.css` imported globally).

## Contract

- **Static HTML is final.** Nothing here is required to read a page. Hidden starting
  states only apply under `html.motion-ok`, which the engine adds *after* marking every
  element already on screen as revealed (`data-revealed="static"`). No flash, no delayed
  LCP, and the page reads fully with JavaScript off.
- **The prerender never bakes motion.** `scripts/prerender.mjs` emulates
  `prefers-reduced-motion: reduce`, then strips `motion-ok`, `data-revealed`,
  `data-counted`, `--parallax-y`, `--scroll-progress` and every `.mx-journey`.
- **Reduced motion means static.** Engine skips reveals and count-ups; CSS removes
  parallax, draws journey lines fully and drops hover lifts. The global rule in
  `index.html` already zeroes animation and transition durations.
- **Pauses itself.** One IntersectionObserver, one rAF-throttled scroll reader that
  skips work while the tab is hidden; parallax skips off-screen elements; CSS pauses
  animations under `html[data-tab-hidden]` and on `[data-pause-offscreen]` elements once they leave the viewport (the engine sets `data-offscreen`). No canvas is used, so
  there is no devicePixelRatio cost to cap; raster heroes are capped by their `srcset`.

## Attribute API

| Attribute / class | Effect |
|---|---|
| `data-reveal` | Fades and lifts 18px into place when it scrolls in. `data-reveal="fade"` for opacity only. Stagger with `style={{'--mx-delay': '120ms'}}`. `components/Reveal.tsx` wraps this. |
| `data-parallax="0.16"` | Translates by `scrollY * speed` (clamped ±160px) through `--parallax-y`. Use on decorative layers only. |
| `data-draw` + `data-reveal` | SVG `path`/`line` children with `pathLength={1}` draw themselves when revealed. |
| `data-countup` | Counts a real, already-published number up from 0 when it scrolls in ("58%", "332M", "85%+"); the final text is restored exactly. Screen readers get the final value via `aria-label`. Never use it for invented figures. |
| `.mx-card` | Refined card: hairline border, 3px lift and a gold top hairline on hover or keyboard focus within. |
| `.mx-divider` | Hairline section divider that fades out at both ends (replaces hard `border-t`). |
| `.mx-intro` | Hero copy settles 10px into place on load (transform only, never opacity, so LCP is not delayed). |
| `.mx-nav-progress` | 1px gold reading-progress line. Scroll-driven CSS animation where supported, `--scroll-progress` fallback otherwise. |
| `.hb-dissolve` | Fades an image or wash out on all four edges (vertical × horizontal mask, intersected). |

## Journey line

```tsx
<div style={{ position: 'relative' }}>
  <Journey
    start=".hero-copy"            // optional: where the line starts
    end="#contact"                // optional: where it ends (bottom edge)
    milestones={HB_JOURNEY(['#a', '#b', '#c', '#d'])}  // Discover, Design, Build, Evolve
  />
  ...sections
</div>
```

`PB_JOURNEY([...3 selectors])` gives Know yourself, Find purpose, Epic life. The line is
client-only (it measures the live layout), decorative (`aria-hidden`), re-measures on
resize via ResizeObserver, draws to 62% of the viewport height, and lights each node once
the drawn length passes it. Labels show from 1280px wide.

## Engine API (`engine.ts`)

- `startMotion()`: idempotent; called by `useMotion`.
- `scanMotionTargets()`: pick up `data-reveal` / `data-countup` elements added later
  (called on every route change).
- `onMotionFrame(cb)`: subscribe to the shared scroll/resize frame; returns unsubscribe.
- `prefersReducedMotion()`.
