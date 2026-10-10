import { useEffect } from 'react';
import { siteUrl } from '../config/site';
import { upsertLink, upsertMeta } from './usePageSeo';

// Sets the document title and, when a path is given, a self-referencing
// canonical plus a matching og:url on the www host.
export function usePageTitle(title: string, canonicalPath?: string) {
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
}
