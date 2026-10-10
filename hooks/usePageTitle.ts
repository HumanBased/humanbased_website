import { useEffect } from 'react';
import { siteUrl } from '../config/site';
import { upsertLink, upsertMeta } from './usePageSeo';

// Sets the document title and, when given, a self-referencing canonical, a
// matching og:url on the www host, and a page-specific meta description.
export function usePageTitle(title: string, canonicalPath?: string, description?: string) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);

  useEffect(() => {
    if (typeof document === 'undefined' || !canonicalPath) return;
    const url = siteUrl(canonicalPath);
    const revertLink = upsertLink('canonical', url);
    const revertOgUrl = upsertMeta({ attr: 'property', key: 'og:url' }, url);
    return () => {
      revertOgUrl();
      revertLink();
    };
  }, [canonicalPath]);

  useEffect(() => {
    if (typeof document === 'undefined' || !description) return;
    return upsertMeta({ attr: 'name', key: 'description' }, description);
  }, [description]);
}
