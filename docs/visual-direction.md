# Visual direction: HumanBased and PurposeBased

Captures: `docs/visual/before/` (1440x900 and 390x844, full page), `docs/visual/after/`.

## What reads as amateur or inconsistent today

- **Hero images that stop as rectangles.** The home hero is a 1184px raster stretched to
  full width at 25% opacity. On PurposeBased the hero section paints its own opaque navy
  gradient, so a hard band shows where the section ends and the starfield resumes.
- **The page background was never matched.** HumanBased pages sit on a fixed starfield
  (`assets/images/site-bg.webp`, slow 90s drift, under a `#050509` 70% veil, plus a blurred
  aurora layer in screen blend). PurposeBased sits on `PBCosmos`: a fixed vertical gradient
  `#0a1628 → #0d1f3c → #0a1628` with a CSS starfield. Anything that paints a flat colour
  behind an image leaves a seam against either one.
- **Five type families, no scale.** Fraunces, Inter, Cinzel, Playfair and Cormorant/DM Sans,
  with headings jumping between `text-3xl` and `text-6xl` page to page. Section padding
  varies from 32px to 120px with no rhythm.
- **Effects stacked on effects.** Gold shimmer text, silver shimmer, pulsing nodes, glow
  filters, blur blobs. Each says "premium"; together they say "template".
- **Cards are all the same card.** Same radius, same border, same hover scale everywhere,
  so nothing has hierarchy.
- **Reveal animations hide content in the static HTML.** `Reveal` and PurposeBased's
  `.pb-section` bake `opacity: 0` into the prerendered markup: with JavaScript off, or
  before hydration, sections are invisible.
- **No sense of sequence.** The Process (discover, design, build, evolve) and the
  PurposeBased journey (know yourself, find purpose, epic life) are described in copy, but
  the page itself never moves you through them.

## Design language

- **Base:** deep navy and near-black, from the existing backgrounds. Nothing new is painted
  behind content; images dissolve into the real background instead.
- **Line, not glow.** One hairline weight (1px, 1.5px for the journey line), precise
  geometry, square-ish radii (12px cards, 999px only for buttons). Shadows only to separate
  layers, never as decoration.
- **Gold is a signal, not a fill.** `#C4A85A` / the existing amber marks the journey line,
  milestones, active states and the single primary action per view. Never on body copy.
- **Three widths** (borrowed from the Story page): narrow 680px for reading, wide 980px for
  titles and pull quotes, full 1200px for grids. One spacing rhythm: sections step in
  `clamp(72px, 10vw, 140px)`.
- **Type scale:** one serif for display, one sans for UI and body, per site (HumanBased:
  Fraunces + Inter; PurposeBased: Cormorant + DM Sans, unchanged). Five display sizes.
- **Credibility through restraint:** a single trust line (Copenhagen, CVR, founding team),
  real facts only. No invented clients, logos, testimonials or metrics.
- **PurposeBased keeps its brand elements** (zodiac wheel, sacred geometry in its artwork).
  We add none, and add no zodiac, sacred geometry, nebulae, lens flares or glow blobs to
  HumanBased.

## Motion principles

1. **Content is never hostage to motion.** Text is visible in the static HTML and with
   JavaScript off. Hidden starting states apply only once JS has marked what is already on
   screen as revealed.
2. **Slow and few.** 600 to 900ms ease-out for reveals, 30s for ambient drift. One moving
   idea per viewport.
3. **Motion explains position.** The journey line draws as you scroll and its milestones
   light up as you pass the matching section, so the page reads as a path, not a stack.
4. **Compositor only.** `transform`, `opacity`, `stroke-dashoffset`. No layout animation,
   no scroll handlers doing layout reads in a loop; IntersectionObserver plus one
   rAF-throttled scroll reader, paused off-screen and when the tab is hidden.
5. **Reduced motion means static.** Under `prefers-reduced-motion` everything renders in
   its final state: no drift, no parallax, line fully drawn.
6. **Intro under 800ms, never blocking.** The hero line draws and the headline settles,
   but the headline and image are visible from the first paint (LCP is not delayed).
