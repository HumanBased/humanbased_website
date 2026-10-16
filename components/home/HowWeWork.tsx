import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import discoverImg from '../../assets/images/process-discovery.webp';
import designImg from '../../assets/images/process-codesign.webp';
import buildImg from '../../assets/images/process-ethical-engineering.webp';
import evolveImg from '../../assets/images/process-continuous-improvement.webp';

// Home "How we work": a finite four-step walk through the method on the Process page
// (components/Process.tsx). Back / Next move one step; the last step replaces Next
// with "Start a conversation" (the contact section). There is no autoplay and no loop,
// and the page never scrolls on its own.
const STEPS = [
  {
    name: 'Discover',
    title: 'Deep Discovery & Insight',
    desc: 'From assumptions to real constraints. We map the actual behaviors, frictions, and constraints in your organization so we solve the right problem, not just the visible symptoms.',
    img: discoverImg,
  },
  {
    name: 'Design',
    title: 'Co-Design & Validation',
    desc: 'From ideas to tested solutions. We turn insights into services, workflows, and interfaces that people adopt quickly because we validate them with real stakeholders before building.',
    img: designImg,
  },
  {
    name: 'Build',
    title: 'Ethical, Auditable Engineering',
    desc: 'From prototypes to production systems. We build data and AI systems that are transparent, governable, and aligned with your risk and compliance standards. No technical debt, no shortcuts.',
    img: buildImg,
  },
  {
    name: 'Evolve',
    title: 'Continuous Improvement & Capability Building',
    desc: 'From launch to lasting impact. We stay with you after launch, testing, tuning, and training your teams so improvements keep compounding and the system adapts to changing needs.',
    img: evolveImg,
  },
] as const;

const LAST = STEPS.length - 1;

type FocusTarget = 'next' | 'cta' | null;

const stepState = (index: number, current: number): 'done' | 'current' | 'todo' => {
  if (index < current) return 'done';
  return index === current ? 'current' : 'todo';
};

const HowWeWork: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const nextRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  // The button the visitor pressed can disappear (Next on the last step, Back on the
  // first), so focus is handed to the control that took its place.
  const focusAfter = useRef<FocusTarget>(null);

  useEffect(() => {
    const target = focusAfter.current;
    focusAfter.current = null;
    if (target === 'cta') ctaRef.current?.focus({ preventScroll: true });
    if (target === 'next') nextRef.current?.focus({ preventScroll: true });
  }, [current]);

  const goNext = () => {
    const next = Math.min(current + 1, LAST);
    if (next === LAST) focusAfter.current = 'cta';
    setCurrent(next);
  };

  const goBack = () => {
    const prev = Math.max(current - 1, 0);
    if (current === LAST || prev === 0) focusAfter.current = 'next';
    setCurrent(prev);
  };

  const step = STEPS[current];

  return (
    <section id="how-we-work" className="ed-sec" aria-labelledby="how-heading">
      <div className="ed-full">
        <header className="hh-head" data-reveal="">
          <h2 id="how-heading" className="font-serif ed-title">
            How we work
          </h2>
          <p className="ed-lead">
            We follow a rigorous path from immersion and insight to continuous evolution, so
            every engagement moves from understanding to lasting impact.
          </p>
        </header>

        <div className="mx-card" data-reveal="">
          <div className="px-5 pt-5 md:px-7 md:pt-7">
            <ol className="hh-steps-track" aria-label="Steps">
              {STEPS.map((s, i) => (
                <li
                  key={s.name}
                  data-state={stepState(i, current)}
                  aria-current={i === current ? 'step' : undefined}
                >
                  <span>{s.name}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="hh-stepper">
            {STEPS.map((s, i) => {
              const isActive = i === current;
              return (
                <div
                  key={s.name}
                  className="hh-step"
                  data-active={isActive ? 'true' : 'false'}
                  aria-hidden={!isActive}
                  inert={!isActive}
                  role="group"
                  aria-label={`Step ${i + 1} of ${STEPS.length}: ${s.name}`}
                >
                  <div className="hh-step-media">
                    <img src={s.img} alt="" width={800} height={457} loading="lazy" decoding="async" />
                  </div>
                  <div className="hh-step-text">
                    <p className="hh-step-count">
                      Step {i + 1} of {STEPS.length}
                    </p>
                    <h3 className="hh-step-name">{s.name}</h3>
                    <p className="hh-step-title">{s.title}</p>
                    <p className="hh-text">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-5 pb-5 md:px-7 md:pb-7">
            <div className="hh-controls">
              <button
                type="button"
                className="ed-btn ed-btn--ghost"
                onClick={goBack}
                disabled={current === 0}
              >
                <span aria-hidden="true">←</span> <span className="hh-back-label">Back</span>
              </button>
              {current < LAST ? (
                <button
                  type="button"
                  ref={nextRef}
                  className="ed-btn ed-btn--primary"
                  onClick={goNext}
                >
                  Next: {STEPS[current + 1].name} <span aria-hidden="true">→</span>
                </button>
              ) : (
                <a ref={ctaRef} href="#contact" className="ed-btn ed-btn--primary">
                  Start a conversation
                </a>
              )}
            </div>
          </div>

          {/* Announces the new step to screen readers after Back / Next. */}
          <p className="hh-sr-only" aria-live="polite">
            {`Step ${current + 1} of ${STEPS.length}: ${step.name}. ${step.title}.`}
          </p>
        </div>

        <p className="mt-6 text-center">
          <Link to="/process" className="hh-link">
            Explore the process <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HowWeWork;
