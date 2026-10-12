# PurposeBased articles and free journal tool

Branch: `articles-tool`. All pages are indexable, in the sitemap, prerendered (listed in `scripts/routes.mjs`), use `usePageSeo` with a unique title, description and self canonical on https://www.humanbased.org, and carry JSON-LD (BreadcrumbList plus Article or WebPage). No ratings, no offers, no prices.

## Routes and target queries

| Route | Target query | Schema |
| --- | --- | --- |
| /purposebased/articles/what-is-my-purpose | what is my purpose | BreadcrumbList + Article |
| /purposebased/articles/how-to-find-yourself | how to find yourself | BreadcrumbList + Article |
| /purposebased/articles | index of the three pages | BreadcrumbList + CollectionPage |
| /purposebased/self-discovery-journal | self discovery journal, journal prompts | BreadcrumbList + WebPage |

Both articles: datePublished and dateModified 2026-10-12, author and publisher HumanBased (Organization). The first two sentences of each article answer the query directly.

Footer: a small "Read / Free tool" link row was added above the legal links in `pages/purposebased/PBFooter.tsx` (shows on every PurposeBased page). No other existing copy was changed. Legal pages and vercel.json rewrites are untouched.

Files: `pages/purposebased/articles/` (PBArticleKit.tsx shared styles and JSON-LD, the two articles, the index, the journal), wiring in `pages/purposebased/index.tsx`, `App.tsx`, `scripts/routes.mjs`.

## Journal tool behaviour

29 prompts in five groups (6, 6, 6, 6, 5), one at a time, with progress bar, back and next, and a text file download on the final screen. No network requests, no analytics events. Answers are kept in localStorage (key `pb-self-discovery-journal-v1`, every access in try/catch; page works without it) and the Clear button removes them. The full prompt list is rendered as plain HTML at the bottom of the page, so it is present in the prerendered HTML and readable without JavaScript.

## Quote sources (all checked against a source page during the build)

1. Viktor Frankl, *Man's Search for Meaning*: "For the meaning of life differs from man to man, from day to day and from hour to hour. What matters, therefore, is not the meaning of life in general but rather the specific meaning of a person's life at a given moment." Checked against the excerpts at religiousnaturalism.org/mans-search-for-meaning. The tool returned the two sentences in segments, so the join between them rests on that page and my own recollection of the book; worth a glance at a printed copy.
2. Viktor Frankl, same book, fragment used inside a sentence in article 2: "to choose one's own way" (from "the last of the human freedoms: to choose one's attitude in any given set of circumstances, to choose one's own way"). Same source page.
3. Joseph Campbell with Bill Moyers, *The Power of Myth* (1988): "If you follow your bliss, you put yourself on a kind of track that has been there all the while, waiting for you." Checked against the Marginalian article (themarginalian.org/2015/04/09/find-your-bliss-joseph-campbell-power-of-myth/).
4. Mary Oliver, "The Summer Day": "Tell me, what is it you plan to do / with your one wild and precious life?" Checked against poets.org/poem/summer-day. That page does not name the collection, so only the poem title is credited.
5. Socrates in Plato's *Apology* 38a: "The unexamined life is not worth living." Checked against thegreats.org (Apology reading page), which gives the 38a reference but no translator. Wording varies slightly between translations, so no translator is credited.
6. Henry David Thoreau, *Walden*, "Economy" (1854): "The mass of men lead lives of quiet desperation." Checked against etc.usf.edu/lit2go (Walden, Economy).
7. "Know thyself" at Delphi: stated as an inscription on the Temple of Apollo, reported by ancient writers such as Plato. Checked against the Wikipedia article "Know thyself" (which names Plato and Pliny the Elder, not Pausanias, so Pausanias is not mentioned).

## Paraphrased on purpose (no quotation marks)

- Howard Thurman ("ask what makes you come alive"): Quote Investigator (quoteinvestigator.com/2021/07/09/come-alive/) shows the earliest print source is a 1992 LA Times essay by Mary Kay Blakely, and that the attribution to Thurman rests on Gil Bailie's recollection of a conversation (published in *Violence Unveiled*, 1995). The article therefore paraphrases it and says it is "often credited" to Thurman and reaches us through a friend's recollection.
- Frankl's "last of the human freedoms" is described in prose, with only the short fragment "to choose one's own way" in quotation marks.

## Things I was unsure about

- Reading time ("8 minute read") is an estimate from word count (about 1,500 to 1,700 words each).
- Prerender runs with reduced motion and no Journey component is used on these pages, so there is no hidden-until-scroll content.
- Contrast: body text uses #cadcf0 and headings white (same as PBStory); gold labels use #C4A85A; button text is #0b1a33 on that gold. These are the existing PurposeBased colours. I checked the pairs by calculation against the dark navy backdrop, not with the pixel-level contrast audit script (which covers only HumanBased routes).
- The route check (`scripts/visual/nojs-routes.mjs`) in this sandbox reports every route as flagged because Google Fonts requests are blocked by the sandbox proxy (console error, not a page error); the new routes show hidden 0 and plenty of text, same as existing routes.
- The CTA links to https://www.purposebased.app, the same URL the PurposeBased home page uses.
