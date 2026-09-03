import { useEffect } from 'react';

// Runtime <head> management for SEO. The build's prerender step (scripts/prerender.mjs)
// snapshots the live DOM per route with Puppeteer, so meta tags written here end up
// baked into the static index.html that crawlers and link unfurlers read.
//
// Meta tags are keyed by name= or property=; JSON-LD is injected as a single
// <script type="application/ld+json" data-page-seo>. On unmount every change is
// reverted so an SPA navigation back to a page that sets no SEO is left clean.

export interface PageSeo {
  title: string;
  description: string;
  canonical?: string;
  og?: {
    type?: string;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  /** JSON-LD structured data object (schema.org). */
  jsonLd?: Record<string, unknown>;
}

type MetaSelector = { attr: 'name' | 'property'; key: string };

function upsertMeta({ attr, key }: MetaSelector, content: string): () => void {
  const selector = `meta[${attr}="${key}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (existing) {
    const prev = existing.getAttribute('content');
    existing.setAttribute('content', content);
    return () => {
      if (prev === null) existing.removeAttribute('content');
      else existing.setAttribute('content', prev);
    };
  }

  const el = document.createElement('meta');
  el.setAttribute(attr, key);
  el.setAttribute('content', content);
  document.head.appendChild(el);
  return () => el.remove();
}

function upsertLink(rel: string, href: string): () => void {
  const selector = `link[rel="${rel}"]`;
  const existing = document.head.querySelector<HTMLLinkElement>(selector);

  if (existing) {
    const prev = existing.getAttribute('href');
    existing.setAttribute('href', href);
    return () => {
      if (prev === null) existing.removeAttribute('href');
      else existing.setAttribute('href', prev);
    };
  }

  const el = document.createElement('link');
  el.setAttribute('rel', rel);
  el.setAttribute('href', href);
  document.head.appendChild(el);
  return () => el.remove();
}

export function usePageSeo(seo: PageSeo): void {
  // Serialise so the effect re-runs on any content change without a new object
  // reference triggering it every render.
  const key = JSON.stringify(seo);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const cleanups: Array<() => void> = [];

    const prevTitle = document.title;
    document.title = seo.title;
    cleanups.push(() => {
      document.title = prevTitle;
    });

    cleanups.push(upsertMeta({ attr: 'name', key: 'description' }, seo.description));

    if (seo.canonical) {
      cleanups.push(upsertLink('canonical', seo.canonical));
    }

    const og = seo.og ?? {};
    const ogTags: Record<string, string | undefined> = {
      'og:type': og.type ?? 'website',
      'og:title': og.title ?? seo.title,
      'og:description': og.description ?? seo.description,
      'og:image': og.image,
      'og:url': og.url,
    };
    for (const [k, v] of Object.entries(ogTags)) {
      if (v) cleanups.push(upsertMeta({ attr: 'property', key: k }, v));
    }

    const tw = seo.twitter ?? {};
    const twTags: Record<string, string | undefined> = {
      'twitter:card': tw.card ?? 'summary_large_image',
      'twitter:title': tw.title ?? og.title ?? seo.title,
      'twitter:description': tw.description ?? og.description ?? seo.description,
      'twitter:image': tw.image ?? og.image,
    };
    for (const [k, v] of Object.entries(twTags)) {
      if (v) cleanups.push(upsertMeta({ attr: 'name', key: k }, v));
    }

    if (seo.jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-seo', '');
      script.textContent = JSON.stringify(seo.jsonLd);
      document.head.appendChild(script);
      cleanups.push(() => script.remove());
    }

    return () => {
      // Revert in reverse order.
      for (let i = cleanups.length - 1; i >= 0; i -= 1) cleanups[i]();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
