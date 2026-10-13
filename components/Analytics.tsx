import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Google Analytics 4, loaded only after a visitor accepts. Nothing is requested
// and no cookie is set before that. The choice is kept in localStorage; the
// footer's "Cookie Settings" link reopens the banner (event below).
const GA_ID = 'G-37VL22LV55';
const KEY = 'hb-analytics-consent';
export const OPEN_COOKIE_SETTINGS = 'hb:open-cookie-settings';

type Choice = 'granted' | 'denied' | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function writeChoice(v: Exclude<Choice, null>) {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    /* storage blocked: the choice just lasts for this visit */
  }
}

let loaded = false;
function loadGa() {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    (window.dataLayer as unknown[]).push(arguments);
  };
  window.gtag('js', new Date());
  // SPA: page views are sent by the route listener below, not on load.
  window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

const Analytics: React.FC = () => {
  const location = useLocation();
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);

  // Mount: restore the stored choice. Automated browsers (the build's prerender,
  // Lighthouse) never see the banner, so it is not baked into the static HTML.
  useEffect(() => {
    const c = readChoice();
    setChoice(c);
    if (c === 'granted') loadGa();
    if (c === null && !navigator.webdriver) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  // Page views on every route change once consent is given.
  useEffect(() => {
    if (choice === 'granted' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [choice, location.pathname, location.search]);

  const decide = useCallback((v: Exclude<Choice, null>) => {
    writeChoice(v);
    setChoice(v);
    setOpen(false);
    if (v === 'granted') loadGa();
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie settings"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0b1a33]/95 backdrop-blur px-5 py-4 shadow-2xl flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm leading-relaxed text-white/75 flex-1">
          We use Google Analytics to see which pages are useful, so we can improve them. It only runs if you accept.{' '}
          <Link to="/privacy" className="underline decoration-white/30 hover:text-amber-400">Privacy</Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide('denied')}
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide('granted')}
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black hover:bg-amber-400 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
