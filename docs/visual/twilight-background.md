# Twilight background and starfield (P90)

HumanBased pages only. The app-store legal pages keep the original background (they still
use `site-bg.webp` through `MainLayout legal`); PurposeBased is untouched.

## How it is built

- `components/twilight.css` + `components/TwilightBackground.tsx`, mounted once in
  `MainLayout` inside the page wrapper.
- **Gradient:** one absolutely positioned layer covering the full document height (not
  per page), `#0d1f3c` at the top to `#1d4373` at the bottom in ten eased stops; it is at
  `#17335f` at 66%, so the top two thirds stay in the `#0d1f3c` to `#17335f` range.
- **Stars:** three tiled CSS backgrounds (no canvas, no script to draw them) made by
  `scripts/starfield.mjs` at 2x: small (1024px tile), medium (1280px), large (1664px, a few
  stars with a faint halo). Seeded, so output is reproducible. 91 KB total as WebP
  (`public/images/stars/`), against 81 KB for the old image, which is no longer loaded on
  HumanBased pages. Tiles are seamless: every star is also drawn at its wrapped positions.
- **Parallax:** the existing motion engine (`data-parallax`, -0.04 / -0.09 / -0.16, clamped
  to 160px). Static under `prefers-reduced-motion`. With JavaScript off the gradient and
  stars are plain CSS and still show.
- **Hero blending:** unchanged technique (mask on all four edges + `screen` blend onto the
  real background). Re-measured: 38 edges, worst luminance step 0.78 / 255, none above 3.

## Contrast (scripts/visual/contrast-audit.mjs)

Samples the rendered background behind every text node at many scroll positions (text made
transparent, page screenshotted), composites the text colour over each pixel and takes the
worst 5% of pixels per text node.

- Body text: 7:1 or better on every HumanBased page (lowest 8.0 desktop, 7.2 phone). The
  muted white utilities (white/10 to white/75) are raised centrally in
  `components/contrast.css`; the footer, on the brightest part of the gradient, goes to
  full white.
- Gold labels: 4.5:1 or better everywhere (lowest 4.75). Brighter gold `#d8bc6e` is used
  only where needed: the "Explore ... ->" link buttons (were `#b8860b`, 3.1 to 4.0), four
  labels low on Services, and the "build together" heading span.
- Hero gold line "Purpose built. Human focused." is now `#d8bc6e`: 7.1 (1920), 7.9 (1440),
  7.7 (390), worst 5% of pixels. Scrim and Earth image unchanged.
- Not covered: black text on the solid gold buttons (6.45:1, AA) and the "You are about to
  find / your purpose" caption on the Products page, which is text on a PurposeBased card
  image, not on the page background.

## What the same change would take on PurposeBased

PurposeBased draws its own backdrop in `pages/purposebased/PBCosmos.tsx`: one `position:
fixed` viewport-sized div with `linear-gradient(180deg, #0a1628, #0d1f3c 50%, #0a1628)`,
285 individual `<div>` stars placed with `Math.random()` (so they differ on every load and
between the prerendered HTML and the client), each with its own CSS twinkle animation, three
shooting stars, and a rotating zodiac wheel at 7% opacity. Its home hero image is blended
with `mix-blend-mode: lighten` and the same four-sided mask. To match the twilight look:
(1) replace the fixed gradient with a document-height one (the shell already has a
positioned wrapper); (2) replace the 285 star divs with the three tiled star layers, which
removes ~285 animated nodes but also the twinkle (it could be a slow opacity pulse on the
layers); (3) re-run the seam measurement, because `lighten` reacts differently to a lighter
background than `screen`; (4) re-audit contrast, since its text colours (`#cadcf0`,
`#7f97b1`, gold `#ffc864`) were chosen for the darker `#0a1628`. Roughly half a day.
