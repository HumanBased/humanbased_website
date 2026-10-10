// Motion engine: one IntersectionObserver for reveals and count-ups, one
// rAF-throttled scroll reader for progress, parallax and journey lines.
// See components/motion/README.md for the attribute API.
//
// Static-HTML contract: nothing here is needed to read the page. Hidden starting
// states only apply under html.motion-ok, which is added after everything already
// on screen has been marked revealed, so there is no flash and no delayed LCP.

const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const REVEAL_SELECTOR = '[data-reveal]:not([data-revealed])';
const COUNT_SELECTOR = '[data-countup]:not([data-counted])';
const PARALLAX_SELECTOR = '[data-parallax]';
const COUNT_DURATION_MS = 1400;
const MAX_PARALLAX_PX = 160;

type FrameListener = (viewportHeight: number) => void;

const frameListeners = new Set<FrameListener>();
let observer: IntersectionObserver | null = null;
let frameRequested = false;
let started = false;

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia(REDUCED_QUERY).matches;

const isInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
};

// "58%" -> { prefix: '', value: 58, decimals: 0, suffix: '%' }; "332M" keeps the M.
const parseCount = (text: string) => {
  const match = text.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return null;
  const numeric = match[2].replace(',', '.');
  return {
    prefix: match[1],
    value: parseFloat(numeric),
    decimals: numeric.includes('.') ? numeric.split('.')[1].length : 0,
    suffix: match[3],
  };
};

const runCountUp = (el: HTMLElement): void => {
  el.setAttribute('data-counted', '');
  const finalText = el.textContent ?? '';
  const parsed = parseCount(finalText.trim());
  if (!parsed || prefersReducedMotion()) return;
  el.setAttribute('aria-label', finalText);
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / COUNT_DURATION_MS);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${parsed.prefix}${(parsed.value * eased).toFixed(parsed.decimals)}${parsed.suffix}`;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = finalText;
  };
  requestAnimationFrame(tick);
};

const onIntersect: IntersectionObserverCallback = (entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const el = entry.target as HTMLElement;
    observer?.unobserve(el);
    if (el.hasAttribute('data-reveal')) el.setAttribute('data-revealed', '');
    if (el.hasAttribute('data-countup')) runCountUp(el);
  }
};

const updateParallax = (vh: number): void => {
  document.querySelectorAll<HTMLElement>(PARALLAX_SELECTOR).forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < -vh || rect.top > vh * 2) return; // off-screen: skip work
    const speed = parseFloat(el.dataset.parallax || '0.2');
    // Distance of the element's top from the top of the page, as scrolled.
    const shift = Math.max(-MAX_PARALLAX_PX, Math.min(MAX_PARALLAX_PX, window.scrollY * speed));
    el.style.setProperty('--parallax-y', `${shift.toFixed(1)}px`);
  });
};

const frame = (): void => {
  frameRequested = false;
  if (document.visibilityState === 'hidden') return;
  const vh = window.innerHeight;
  const scrollable = document.documentElement.scrollHeight - vh;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
  updateParallax(vh);
  frameListeners.forEach((listener) => listener(vh));
};

export const requestFrame = (): void => {
  if (frameRequested) return;
  frameRequested = true;
  requestAnimationFrame(frame);
};

/** Subscribe to the shared scroll/resize frame. Returns an unsubscribe function. */
export const onMotionFrame = (listener: FrameListener): (() => void) => {
  frameListeners.add(listener);
  requestFrame();
  return () => frameListeners.delete(listener);
};

/** Pick up reveal and count-up elements added since the last scan (route changes). */
export const scanMotionTargets = (): void => {
  if (!observer) return;
  document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
    if (isInViewport(el)) el.setAttribute('data-revealed', 'static');
    else observer?.observe(el);
  });
  document.querySelectorAll<HTMLElement>(COUNT_SELECTOR).forEach((el) => {
    if (isInViewport(el)) el.setAttribute('data-counted', '');
    else observer?.observe(el);
  });
  requestFrame();
};

const onVisibility = (): void => {
  document.documentElement.toggleAttribute('data-tab-hidden', document.visibilityState === 'hidden');
  if (document.visibilityState === 'visible') requestFrame();
};

/** Start once per page load. Safe to call repeatedly. */
export const startMotion = (): void => {
  if (started || typeof window === 'undefined') return;
  started = true;
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame);
  document.addEventListener('visibilitychange', onVisibility);
  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    requestFrame();
    return;
  }
  observer = new IntersectionObserver(onIntersect, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  scanMotionTargets();
  // Only now may off-screen elements take their hidden starting state.
  document.documentElement.classList.add('motion-ok');
};
