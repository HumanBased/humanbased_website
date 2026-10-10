// Canonical origin for every absolute URL the site emits (canonical, og:url,
// JSON-LD). The apex humanbased.org redirects here. scripts/routes.mjs keeps
// its own copy for the build-time sitemap; keep the two in sync.
export const SITE_ORIGIN = 'https://www.humanbased.org';

// Injected by vite.config.ts at build time.
declare const __BUILD_YEAR__: number;
declare const __TEAM_PHOTOS__: Record<string, boolean>;
export const BUILD_YEAR: number = __BUILD_YEAR__;
export const TEAM_PHOTOS: Record<string, boolean> = __TEAM_PHOTOS__;

export const SUPPORT_EMAIL = 'support@humanbased.org';
export const COMPANY_LINE = 'Founded 2025 · Copenhagen, Denmark · CVR DK45998576';

export function siteUrl(path: string): string {
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

// Share-preview images (1200x630), chosen by route.
export function ogImageFor(path: string): string {
  const p = path.replace(/\/+$/, '');
  if (p === '/purposebased/story') return siteUrl('/images/og/og-story.jpg');
  if (p.startsWith('/purposebased') || p.startsWith('/apps/purposebased')) {
    return siteUrl('/images/og/og-purposebased.jpg');
  }
  return siteUrl('/images/og/og-humanbased.jpg');
}

export const OG_LOCALE = 'en_US';

// Alt text for each share image, keyed by file name. Describes what the image
// shows, including the text rendered in it.
const OG_IMAGE_ALTS: Record<string, string> = {
  'og-humanbased.jpg':
    'HumanBased wordmark and the line "Technology in service of humanity" over a dark night sky with glowing translucent screens and a golden orbit around a small city.',
  'og-purposebased.jpg':
    'PurposeBased wordmark and the line "Become who you\'re meant to be" over a starry night landscape where a glowing golden road leads to a bright star.',
  'og-story.jpg':
    'PurposeBased "Our Story" title over a starry night landscape with a winding golden road and a faint circular zodiac-style wheel.',
};

export function ogImageAltFor(imageUrl: string): string | undefined {
  return OG_IMAGE_ALTS[imageUrl.split('/').pop() ?? ''];
}

// og:site_name by route: PurposeBased pages (site and app legal pages) versus HumanBased.
export function siteNameFor(path: string): string {
  const p = path.replace(/\/+$/, '');
  return p.startsWith('/purposebased') || p.startsWith('/apps/purposebased') ? 'PurposeBased' : 'HumanBased';
}
