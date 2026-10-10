import { useEffect } from 'react';

// Injects one JSON-LD block into <head> for the lifetime of the component.
// The prerender step snapshots the DOM, so the block lands in the static HTML.
export function useJsonLd(data: Record<string, unknown>): void {
  const key = JSON.stringify(data);
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-seo', '');
    script.textContent = key;
    document.head.appendChild(script);
    return () => script.remove();
  }, [key]);
}
