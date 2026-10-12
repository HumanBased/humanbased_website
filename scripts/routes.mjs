// Single source of truth for the routes the build prerenders and lists in
// sitemap.xml. Keep SITE_ORIGIN in sync with config/site.ts.
export const SITE_ORIGIN = 'https://www.humanbased.org';

// Routes rendered to static HTML by scripts/prerender.mjs, with sitemap priority.
// /purposebased/library/:tradition detail pages are intentionally absent
// (pending a decision on thin content).
export const ROUTE_ENTRIES = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/services', priority: 0.8 },
  { path: '/process', priority: 0.7 },
  { path: '/products', priority: 0.9 },
  { path: '/purposebased', priority: 0.9 },
  { path: '/purposebased/story', priority: 0.7 },
  { path: '/purposebased/how-it-works', priority: 0.8 },
  { path: '/purposebased/library', priority: 0.7 },
  { path: '/purposebased/partners', priority: 0.7 },
  { path: '/purposebased/articles', priority: 0.7 },
  { path: '/purposebased/articles/what-is-my-purpose', priority: 0.7 },
  { path: '/purposebased/articles/how-to-find-yourself', priority: 0.7 },
  { path: '/purposebased/self-discovery-journal', priority: 0.7 },
  { path: '/apps/basedtalk/privacy', priority: 0.5 },
  { path: '/apps/basedtalk/terms', priority: 0.5 },
  { path: '/apps/basedtalk/delete-account', priority: 0.4 },
  { path: '/apps/basedtalk/delete-data', priority: 0.4 },
  { path: '/apps/purposebased/privacy', priority: 0.5 },
  { path: '/apps/purposebased/terms', priority: 0.5 },
  { path: '/apps/purposebased/delete-account', priority: 0.4 },
  { path: '/apps/purposebased/delete-data', priority: 0.4 },
  { path: '/legal', priority: 0.3 },
  { path: '/privacy', priority: 0.3 },
];

// Library detail pages are prerendered (own title, description, self canonical,
// noindex,follow) but kept out of the sitemap while their content is thin.
export const NOINDEX_ROUTES = [
  'ikigai', 'dharma', 'thelema', 'tao', 'eudaimonia', 'magnum-opus', 'logotherapy',
].map((slug) => '/purposebased/library/' + slug);

export const ROUTES = [...ROUTE_ENTRIES.map((r) => r.path), ...NOINDEX_ROUTES];

// In the sitemap but not prerendered: /apps/basedtalk is proxied to the
// BasedTalk website project via a vercel.json rewrite.
export const EXTERNAL_SITEMAP_ENTRIES = [
  { path: '/apps/basedtalk', priority: 0.9 },
];

// Any path with no route: rendered by the SPA's catch-all and written to dist/404.html.
export const NOT_FOUND_ROUTE = '/__not-found__';
