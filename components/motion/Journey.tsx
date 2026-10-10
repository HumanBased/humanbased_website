import React, { useEffect, useRef, useState } from 'react';
import { onMotionFrame, prefersReducedMotion } from './engine';

// A thin line that draws itself down the page as the visitor scrolls, with a
// milestone node beside each anchored section that lights up once reached.
// Decorative (aria-hidden) and client-only: it measures the live layout, so it
// is not part of the prerendered HTML and pages read the same without it.

export interface JourneyMilestone {
  /** CSS selector of the section the node sits beside (its top edge). */
  target: string;
  label: string;
}

interface JourneyProps {
  milestones: JourneyMilestone[];
  /** Selector of the element the line starts at (top edge). Defaults to the first milestone. */
  start?: string;
  /** Selector of the element the line ends at (bottom edge). Defaults to the last milestone. */
  end?: string;
  /** Horizontal position inside the positioned parent, any CSS length. */
  left?: string;
}

// Fraction of the viewport height where the line's drawing tip sits.
const DRAW_TIP = 0.62;

interface Layout {
  top: number;
  height: number;
  nodes: number[];
}

const measure = (parent: HTMLElement, props: JourneyProps): Layout | null => {
  const parentTop = parent.getBoundingClientRect().top;
  const topOf = (selector: string) => {
    const el = parent.querySelector(selector);
    return el ? el.getBoundingClientRect().top - parentTop : null;
  };
  const startSel = props.start ?? props.milestones[0]?.target;
  const endSel = props.end ?? props.milestones[props.milestones.length - 1]?.target;
  const startY = startSel ? topOf(startSel) : null;
  const endEl = endSel ? parent.querySelector(endSel) : null;
  if (startY === null || !endEl) return null;
  const endY = endEl.getBoundingClientRect().bottom - parentTop;
  const nodes = props.milestones
    .map((m) => topOf(m.target))
    .map((y) => (y === null ? -1 : Math.max(0, y - startY)));
  return { top: startY, height: Math.max(0, endY - startY), nodes };
};

const Journey: React.FC<JourneyProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [layout, setLayout] = useState<Layout | null>(null);
  const layoutRef = useRef<Layout | null>(null);
  const propsRef = useRef(props);
  propsRef.current = props;

  useEffect(() => setMounted(true), []);

  // Measure on mount and whenever the page's layout changes size.
  useEffect(() => {
    if (!mounted) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const remeasure = () => {
      const next = measure(parent, propsRef.current);
      layoutRef.current = next;
      setLayout(next);
    };
    remeasure();
    const ro = new ResizeObserver(remeasure);
    ro.observe(parent);
    return () => ro.disconnect();
  }, [mounted]);

  // Per frame: move the drawing tip and light the nodes it has passed.
  useEffect(() => {
    if (!mounted) return;
    const node = ref.current;
    const parent = node?.parentElement;
    if (!node || !parent) return;
    const reduced = prefersReducedMotion();
    const introTimer = window.setTimeout(() => node.removeAttribute('data-intro'), 900);
    const unsubscribe = onMotionFrame((vh) => {
      const current = layoutRef.current;
      if (!current || current.height === 0) return;
      const lineTop = parent.getBoundingClientRect().top + current.top;
      const drawn = reduced ? current.height : Math.min(current.height, Math.max(0, vh * DRAW_TIP - lineTop));
      node.style.setProperty('--journey-progress', (drawn / current.height).toFixed(4));
      node.querySelectorAll<HTMLElement>('.mx-journey-node').forEach((dot, i) => {
        const y = current.nodes[i];
        dot.toggleAttribute('data-lit', y >= 0 && drawn >= y);
      });
    });
    return () => {
      window.clearTimeout(introTimer);
      unsubscribe();
    };
  }, [mounted, layout]);

  if (!mounted) return null;

  return (
    <div
      ref={ref}
      className="mx-journey"
      data-intro=""
      aria-hidden="true"
      style={{
        left: props.left ?? 'max(14px, calc(50% - 640px))',
        top: layout?.top ?? 0,
        height: layout?.height ?? 0,
      }}
    >
      <div className="mx-journey-track" />
      <div className="mx-journey-fill" />
      {props.milestones.map((m, i) => (
        <div
          key={m.label}
          className="mx-journey-node"
          style={{ top: layout && layout.nodes[i] >= 0 ? layout.nodes[i] : -9999 }}
        >
          <span className="mx-journey-label">{m.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Journey;
