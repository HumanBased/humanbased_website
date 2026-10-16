# Home page redesign (branch `home-redesign`)

Status: **built, uncommitted, not pushed. Round 2 (owner-approved changes) applied.**
Base: `main` at `ad653f2`.
Screenshots: `docs/home-before-after/`.

| File | What it shows |
|---|---|
| `before-390.jpg`, `before-1440.jpg` | Current live home (main) |
| `after-390.jpg`, `after-1440.jpg` | New home (round 2) |
| `compare-390.jpg`, `compare-1440.jpg` | Before (left) and after (right), side by side |
| `compare-hero-label-1440.jpg` | Hero at 1440: old "DISCOVER" label vs new "WHY" label |
| `after-hero-390.jpg`, `after-hero-1440-label.jpg` | Hero first screen, phone and desktop |
| `compare-background-1440.jpg` | Same strip of page, with stars (top) and without (bottom) |
| `after-390-step1…4.jpg` | The "How we work" stepper at each step on a phone |
| `home-checks.json` | Stepper behaviour, tap sizes, font sizes, overflow (390 and 1440) |
| `contrast/contrast.json` | Pixel contrast audit of the home page (round 1) |

Phone captures are real 390×844 screenshots taken while scrolling and stitched together. The consent banner is set to "declined" before capture.

---

## Page order

| Before (live) | After |
|---|---|
| Hero | Hero (unchanged, Earth photo) |
| Why HumanBased? | **Why HumanBased?** (unchanged, same position, right after the hero) |
| Our Process teaser | **The people** (new) |
| Contact (with founders credit line) | **Choose your path** (new) |
| | **How we work** (new; replaces the Our Process teaser) |
| | Contact (founders credit line removed) |

## Files changed

| File | Change |
|---|---|
| `pages/HomePage.tsx` | New order; old "Our Process" teaser removed; 5-label journey; `Contact` without the founders line |
| `components/home/ChoosePath.tsx`, `People.tsx`, `HowWeWork.tsx`, `home.css` | New home sections and their home-only styles (scoped to `.hb-home`) |
| `components/motion/journeys.ts` | New `HOME_JOURNEY` (5 labels). `HB_JOURNEY` and `ABOUT_LABELS` are unchanged, so other pages keep their labels. |
| `components/Contact.tsx` | New optional prop `showTrustLine` (default `true`). Only the home page passes `false`. |
| `components/TwilightBackground.tsx`, `components/twilight.css` | Star layers removed; gradient unchanged |

`components/motion/Journey.tsx` was **not** changed: it already draws any number of milestones. Only the helper that names them was limited to four.

**Not touched:** Products, About, Services, Process pages; header; footer; `TrustLine.tsx`; `Hero.tsx`; the PurposeBased mini-site; the app-store legal pages.

---

## Round 2 changes (owner-approved)

### a) Old "Our Process" teaser removed, its sentence moved into the stepper

| Before | After |
|---|---|
| Separate block: label "HOW", heading "Our Process", sentence, button "Explore the process" → `/process` | Block removed. Its sentence is now the "How we work" intro line, word for word. The link stays, with the same wording, directly under the stepper: "Explore the process →" → `/process`. |

The intro line I wrote in round 1 ("Discover, design, build, evolve. Four steps, and you keep control the whole way.") is no longer used.

### b) New order
Why HumanBased? now comes straight after the hero, then The people, Choose your path, How we work, Contact. Section content is unchanged.

### c) Journey line: five labels on the home page

| Label | Sits beside |
|---|---|
| WHY | Hero (top of the line) |
| WHO | The people |
| WHAT | Choose your path |
| HOW | How we work |
| CONTACT | Contact section |

Discover / Design / Build / Evolve no longer appear on the home line; those words are used only in the stepper. The line's look (track, gold fill, dots, label font) is unchanged. Labels are visible from 1280px wide, as before; below that only the dots show.

**Collision check (measured on the production build, nearest card, heading, image or text block):**

| Width | WHY → "Human problems." | WHO | WHAT | HOW | CONTACT |
|---|---|---|---|---|---|
| 1440 | 44px | 142px | 128px | 142px | 142px |
| 1366 | 44px | 134px | 125px | 134px | 134px |
| 1280 | 30px | 125px | 110px | 125px | 125px |
| 390 | labels hidden | hidden | hidden | hidden | hidden |

The WHY label sits over the hero photo, which is a background image, not a card or heading.

### d) Hero: space between the first label and the heading
The cleanest fix needed no repositioning: the old label "DISCOVER" ended **8px** from "Human problems." at 1440, and the new, shorter "WHY" ends **44px** from it (30px at 1280, the narrowest width where labels show). The heading has not moved. See `compare-hero-label-1440.jpg` and `after-hero-390.jpg` (no label on phones).

### e) Founders credit line removed from the home page
"Luis Pereira & Alexina Lesur, Co-founders" came from `components/TrustLine.tsx`, rendered at the bottom of `components/Contact.tsx` together with a divider line and its margins. On the home page both the divider and the line are gone (`<Contact showTrustLine={false} />`).
**Where else it appears:** `/process` (`pages/ProcessPage.tsx`, line 105, under the closing "Get in Touch" block). Unchanged. `Contact` itself is only used on the home page.

---

## Sections

### "Choose your path"
Heading "Choose your path", subheading "What brings you here?", two path cards:
- **01 Our products**, "Tools for greater clarity.", with the owner's one-line introduction, the existing BasedTalk and PurposeBased cards and images, and "See all products →". PurposeBased shows "Available now" and **"Start free"** (`https://www.purposebased.app`); no waitlist button.
- **02 Our services**, "Systems built around people.", three plain sentences and "Explore our services →", with the existing Services hero image.

Presentation differences from the Products-page cards (copy unchanged): the badge sits above the product name instead of on the image; the image frame is 16:10 and the BasedTalk banner is shown whole; only the buttons are clickable (no link inside a link); "Explore BasedTalk" does a full page load to the BasedTalk site.

### "The people"
Heading "The people", the About page's closing sentence, both co-founders with their existing photos, names and "Co-founder", and "More about us →" to `/about`. No biographies exist in the repo, so none are shown.

### "How we work"
Discover → Design → Build → Evolve with Back and Next, using the existing Process images and text. On step 4, Next becomes **"Start a conversation"** (links to `#contact`). There is no loop and no autoplay, and the page never scrolls by itself. Focus moves to the new button, a screen-reader announcement is made per step, and the fade is off under reduced motion. "Explore the process →" sits under the stepper.

### Background
Star layers removed on HumanBased pages; the gradient stays. PurposeBased and the app-store legal pages are unchanged.

### Home-only sizing changes to existing content (style only)
Small gold labels and form labels 11px → 12px; contact intro, messages and inputs → 16px (stops iOS zooming on tap); `support@` link hit area → 44px tall.

---

## Notes outside this scope
- The Products page PurposeBased card still shows both "Available Now" and "Join the Waitlist".
- Footer: 20px-tall links, 40×40 social icons without accessible names, 10px text, and an "Accessibility" item that does nothing.
- Header: 40×40 hamburger, 10px "Why/What/How" labels.
- On phones the journey line's dot sits about 6px left of the hero heading (existing layout, all pages).
- Run the repo's contrast script from PowerShell, or with `MSYS_NO_PATHCONV=1` in Git Bash.

## Checks run (round 2)

| Check | Result |
|---|---|
| `npm run build` | Passes; no tracked file modified by the build scripts |
| Console errors, production build, 390 and 1440, full scroll | None |
| Horizontal scroll | None |
| Tap targets < 44px, text < 12px, running text < 16px (home content) | 0 at 390 and 1440 (header and footer excluded, see notes) |
| Stepper | 1 → 4, step 4 shows "Back" and "Start a conversation" (`#contact`), focus moves to it, Back returns to step 3 |
| Journey labels | 5 nodes, no collisions (table above) |
| TypeScript | No new error types in changed files (only the repo-wide "cannot find module *.webp" class) |
| Contrast | Round 1 audit: all visible text passes. No colours changed in round 2. |
| Not run | axe-core, Lighthouse, real devices (use the Wi-Fi dev server) |
