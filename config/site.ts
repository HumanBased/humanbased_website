// Canonical origin for every absolute URL the site emits (canonical, og:url,
// JSON-LD). The apex humanbased.org redirects here. scripts/routes.mjs keeps
// its own copy for the build-time sitemap; keep the two in sync.
export const SITE_ORIGIN = 'https://www.humanbased.org';

export function siteUrl(path: string): string {
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}
