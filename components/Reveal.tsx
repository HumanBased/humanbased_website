import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms, for optional stagger
}

// Scroll reveal via the motion engine (components/motion). Renders the final,
// visible state in static HTML; the hidden starting state only applies once the
// engine has run and only to elements that start off-screen.
const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => (
  <div
    data-reveal=""
    className={className || undefined}
    style={delay ? ({ '--mx-delay': `${delay}ms` } as React.CSSProperties) : undefined}
  >
    {children}
  </div>
);

export default Reveal;
