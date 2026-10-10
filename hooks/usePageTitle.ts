import { useEffect } from 'react';
import { ogImageFor, siteUrl } from '../config/site';
import { applyShareMeta, upsertLink, upsertMeta } from './usePageSeo';

// Sets the document title and, when given, a self-referencing canonical, a
// page-specific meta description, and Open Graph / Twitter tags that carry the
// same title, description and URL plus the right share image for the route.
export function usePageTitle(title: string, canonicalPath?: string, description?: string) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);

  useEffect(() => {
    if (typeof document === 'undefined' || !canonicalPath) return;
    const cleanups: Array<() => void> = [upsertLink('canonical', siteUrl(canonicalPath))];
    if (description) cleanups.push(upsertMeta({ attr: 'name', key: 'description' }, description));
    cleanups.push(
      ...applyShareMeta({
        title,
        description: description ?? '',
        url: siteUrl(canonicalPath),
        image: ogImageFor(canonicalPath),
      }),
    );
    return () => {
      for (let i = cleanups.length - 1; i >= 0; i -= 1) cleanups[i]();
    };
  }, [title, canonicalPath, description]);
}
