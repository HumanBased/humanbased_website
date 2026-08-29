import React, { useEffect, useRef } from 'react';

// PurposeBased home. Premium wellness/purpose landing page.
// Cormorant for headings, DM Sans for body/labels. Colour tokens live in the
// scoped <style> block below as CSS custom properties on .pbh.

const FEATURES: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Know Thyself',
    body:
      'Your full analysis across nine frameworks, written as one reading. Not nine separate reports — one portrait of who you are.',
  },
  {
    n: '02',
    title: 'Purpose Guide',
    body:
      'A conversation that already holds your blueprint. Ask about a decision and get an answer grounded in your own structure, not generic advice.',
  },
  {
    n: '03',
    title: 'Know Where You Stand',
    body:
      'Daily alignment against the current sky. Short, specific, and tied to what you are actually working on right now.',
  },
  {
    n: '04',
    title: 'My People',
    body:
      'The people who matter, read alongside you. Understand the dynamic instead of guessing at it.',
  },
  {
    n: '05',
    title: 'Odyssey',
    body:
      'Your life as a long arc. Chapters, turning points, and the direction the whole thing is pointing.',
  },
];

const PILLARS: { title: string; body: string }[] = [
  { title: 'Depth', body: 'Nine frameworks read together, not one horoscope in isolation.' },
  { title: 'Direction', body: 'A guide that knows your blueprint and speaks from it.' },
  { title: 'Practice', body: 'Daily alignment you can act on, not content you scroll past.' },
];

const scrollToId = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const PBHome: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll('.pb-section')) as HTMLElement[];

    if (typeof IntersectionObserver === 'undefined') {
      sections.forEach((s) => s.classList.add('pb-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pb-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pbh" ref={rootRef}>
      {/* ============ SECTION 1 — HERO ============ */}
      <section id="home" className="pbh-hero">
        <div className="pbh-hero-glow-a" aria-hidden="true" />
        <div className="pbh-hero-glow-b" aria-hidden="true" />
        <div className="pbh-hero-grid">
          <div className="pbh-hero-content">
            <p className="pbh-label">Welcome, Seeker</p>
            <h1 className="pbh-h1">
              You are about to find
              <br />
              <em>your purpose</em>
            </h1>
            <p className="pbh-sub">
              Today might be the day everything becomes clear. Start the journey towards a life on
              purpose.
            </p>
            <div className="pbh-cta-row">
              <a
                href="https://www.purposebased.app"
                target="_blank"
                rel="noopener noreferrer"
                className="pbh-btn pbh-btn--solid"
              >
                Start your journey
              </a>
              <button
                type="button"
                className="pbh-btn pbh-btn--glass"
                onClick={scrollToId('how-it-works')}
              >
                How it works
              </button>
            </div>
          </div>

          <div className="pbh-hero-visual">
            <div className="pbh-phone">
              <div className="pbh-phone-screen">
                <span className="pbh-phone-fallback">App screenshot</span>
                {/* TODO: drop a PurposeBased app screenshot into /public/images/pb-mockup.jpg */}
                <img
                  src="/images/pb-mockup.jpg"
                  alt="PurposeBased app"
                  className="pbh-phone-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <span className="pbh-chevron" aria-hidden="true" />
      </section>

      {/* ============ SECTION 1B — HOW IT WORKS ============ */}
      <section id="how-it-works" className="pb-section pbh-how">
        <div className="pbh-wrap">
          <p className="pbh-label">The journey</p>
          <h2 className="pbh-h2">
            From <em>Know Thyself</em> to an <em>epic life,</em> on purpose.
          </h2>
          <hr className="pbh-rule" />

          <div className="pbh-journey">
            <div className="pbh-node">
              <div className="pbh-node-circle">
                <span className="pbh-node-num">01</span>
              </div>
              <h3 className="pbh-node-title">Know Thyself</h3>
              <p className="pbh-node-body">
                Nine frameworks read together reveal a pattern no single system can see. This is your
                blueprint.
              </p>
            </div>

            <div className="pbh-arrow">
              <span className="pbh-arrow-line" />
              <span className="pbh-arrow-label">understand →</span>
            </div>

            <div className="pbh-node">
              <div className="pbh-node-circle">
                <span className="pbh-node-num">02</span>
              </div>
              <h3 className="pbh-node-title">Find Your Purpose</h3>
              <p className="pbh-node-body">
                Your blueprint points to something. The Guide helps you read what it is saying about
                the direction of your life.
              </p>
            </div>

            <div className="pbh-arrow">
              <span className="pbh-arrow-line" />
              <span className="pbh-arrow-label">align →</span>
            </div>

            <div className="pbh-node">
              <div className="pbh-node-circle pbh-node-circle--final">
                <span className="pbh-node-star">✦</span>
              </div>
              <h3 className="pbh-node-title pbh-node-title--final">Epic life, on purpose</h3>
              <p className="pbh-node-body">
                Not a destination. A way of moving through the world — with clarity about who you are
                and what you are here to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 — PROBLEM ============ */}
      <section className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">The problem</p>
          <h2 className="pbh-h2" style={{ maxWidth: 700 }}>
            Most people never sit down and <em>look at the whole thing</em>
          </h2>
          <hr className="pbh-rule" />
          <p className="pbh-body" style={{ maxWidth: 620 }}>
            Career here. Relationships there. Money somewhere else. Each part gets attention in
            isolation, and the pattern connecting them stays invisible. Purpose is not a feeling you
            wait for. It is a structure you can read.
          </p>
        </div>
      </section>

      {/* ============ SECTION 3 — SOLUTION / THREE PILLARS ============ */}
      <section className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">The solution</p>
          <h2 className="pbh-h2">
            Know yourself. <em>Then</em> move.
          </h2>
          <div className="pbh-pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="pbh-pill">
                <h3 className="pbh-pill-title">{p.title}</h3>
                <p className="pbh-pill-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — FIVE FEATURES ============ */}
      <section className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">Features</p>
          <h2 className="pbh-h2">Five ways in</h2>
          <div className="pbh-features">
            {FEATURES.map((f, i) => (
              <div key={f.n} className={`pbh-frow${i % 2 === 1 ? ' pbh-frow--flip' : ''}`}>
                <div className="pbh-ftext">
                  <span className="pbh-fnum">{f.n}</span>
                  <h3 className="pbh-ftitle">{f.title}</h3>
                  <p className="pbh-body" style={{ fontSize: 15 }}>
                    {f.body}
                  </p>
                </div>
                <div className="pbh-fimg">[ image ]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — PRICING ============ */}
      <section id="pricing" className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">Pricing</p>
          <h2 className="pbh-h2">
            Start free. <em>Go deeper when you want to.</em>
          </h2>

          <div className="pbh-founding">
            <div className="pbh-founding-left">
              <span className="pbh-badge">Founding offer</span>
              <p className="pbh-founding-head">50% off every tier, for the first 1,000 members</p>
              <p className="pbh-founding-note">
                Locked in for as long as your subscription stays active. Ends 31 December 2026.
              </p>
            </div>
            <button type="button" className="pbh-btn pbh-btn--solid">
              Claim your place
            </button>
          </div>

          <div className="pbh-tiers">
            {/* Tier 1 — Seeker */}
            <div className="pbh-tier">
              <h3 className="pbh-tier-name">Seeker</h3>
              <div className="pbh-price">€0</div>
              <p className="pbh-price-note">Free, always</p>
              <ul className="pbh-list">
                <li>Full questionnaire</li>
                <li>4 of 9 framework previews</li>
                <li>My People, up to 5</li>
                <li>1 Guide message per day</li>
              </ul>
              <button type="button" className="pbh-btn pbh-btn--glass pbh-btn--full">
                Begin
              </button>
            </div>

            {/* Tier 2 — Based (highlighted) */}
            <div className="pbh-tier pbh-tier--featured">
              <span className="pbh-badge pbh-badge--top">Most chosen</span>
              <h3 className="pbh-tier-name">Based</h3>
              <div className="pbh-price">
                €6.50 <s className="pbh-price-was">€13</s>
              </div>
              <p className="pbh-price-note">per month · founding price</p>
              <ul className="pbh-list">
                <li>Full analysis, all nine frameworks</li>
                <li>All framework readings</li>
                <li>90 Guide messages per month</li>
                <li>Living Chronicle</li>
                <li>Odyssey</li>
                <li>My People, up to 20</li>
              </ul>
              <button type="button" className="pbh-btn pbh-btn--solid pbh-btn--full">
                Choose Based
              </button>
            </div>

            {/* Tier 3 — Blissed */}
            <div className="pbh-tier">
              <h3 className="pbh-tier-name">Blissed</h3>
              <div className="pbh-price">
                €9 <s className="pbh-price-was">€18</s>
              </div>
              <p className="pbh-price-note">per month · founding price</p>
              <p className="pbh-tier-plus">Everything in Based, plus</p>
              <ul className="pbh-list">
                <li>200 Guide messages per month</li>
                <li>My People, up to 100</li>
                <li>4 full analysis re-runs per month</li>
                <li>Year Ahead</li>
                <li>Priority support</li>
              </ul>
              <button type="button" className="pbh-btn pbh-btn--glass pbh-btn--full">
                Choose Blissed
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6 — CLOSING CTA ============ */}
      <section className="pb-section pbh-close">
        <h2 className="pbh-h2 pbh-h2--center">
          The map is already there.
          <br />
          <em>You just have not read it yet.</em>
        </h2>
        <button type="button" className="pbh-btn pbh-btn--solid" style={{ marginTop: 34 }}>
          Start your blueprint
        </button>
      </section>

      <style>{`
        .pbh {
          --pb-gold: #ffc864;
          --pb-navy: #0d1f3c;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          --pb-surface: rgba(255,255,255,0.035);
          --pb-border: rgba(255,255,255,0.10);
          --pb-border-gold: rgba(255,200,100,0.22);
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- shared type ---------- */
        .pbh-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 18px;
        }
        .pbh-h2 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 44px;
          line-height: 1.2;
          color: #ffffff;
          margin: 0;
        }
        .pbh-h2 em { font-style: italic; font-weight: 300; }
        .pbh-h2--center { max-width: 560px; margin: 0 auto; text-align: center; }
        .pbh-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--pb-text);
        }
        .pbh-rule {
          width: 56px;
          height: 1px;
          background: var(--pb-gold);
          opacity: 0.55;
          border: 0;
          margin: 28px 0;
        }

        /* ---------- buttons ---------- */
        .pbh-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          border-radius: 8px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pbh-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-15deg);
          transition: left 0.5s ease;
        }
        .pbh-btn:hover::before { left: 120%; }
        .pbh-btn:hover { transform: translateY(-2px); }
        .pbh-btn--solid {
          background: linear-gradient(135deg, rgba(255,200,100,0.92), rgba(220,160,50,0.88));
          border: 1px solid rgba(255,220,130,0.6);
          color: #12283f;
          box-shadow: 0 0 24px rgba(255,200,100,0.18);
        }
        .pbh-btn--glass {
          background: linear-gradient(135deg, rgba(255,200,100,0.14), rgba(255,200,100,0.05));
          border: 1px solid rgba(255,200,100,0.38);
          color: var(--pb-gold);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .pbh-btn--full { width: 100%; margin-top: 22px; }

        /* ---------- scroll reveal ---------- */
        .pb-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .pb-section.pb-visible { opacity: 1; transform: translateY(0); }

        /* ---------- hero ---------- */
        .pbh-hero {
          min-height: calc(100vh - 70px);
          display: flex;
          align-items: center;
          padding: 0 10% 72px;
          position: relative;
          overflow: hidden;
        }
        .pbh-hero-glow-a,
        .pbh-hero-glow-b {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .pbh-hero-glow-a {
          background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(100,130,255,0.12) 0%, rgba(80,50,180,0.08) 35%, transparent 70%);
        }
        .pbh-hero-glow-b {
          background: radial-gradient(ellipse 40% 30% at 50% 35%, rgba(255,200,100,0.06) 0%, transparent 60%);
        }
        .pbh-hero-grid {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 64px;
          align-items: center;
        }
        .pbh-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .pbh-hero-visual {
          display: flex;
          justify-content: center;
        }
        .pbh-phone {
          width: 260px;
          background: #0a0f1e;
          border-radius: 36px;
          padding: 12px;
          border: 1px solid rgba(255,200,100,0.15);
          box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
        }
        .pbh-phone-screen {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 9 / 19;
          background: #0d1f3c;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pbh-phone-fallback {
          font-family: 'Cormorant', Georgia, serif;
          font-style: italic;
          font-size: 18px;
          color: var(--pb-muted);
          text-align: center;
          padding: 0 20px;
        }
        .pbh-phone-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pbh-chevron {
          position: absolute;
          bottom: 30px;
          left: 50%;
          margin-left: -8px;
          width: 15px;
          height: 15px;
          z-index: 2;
          border-right: 2px solid var(--pb-gold);
          border-bottom: 2px solid var(--pb-gold);
          opacity: 0;
          animation: pbh-chev-in 0.8s ease 2s forwards, pbh-chev-bounce 1.9s ease-in-out 2s infinite;
        }
        @keyframes pbh-chev-in { to { opacity: 0.85; } }
        @keyframes pbh-chev-bounce {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(45deg) translate(4px, 4px); }
        }
        .pbh-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 64px;
          line-height: 1.12;
          color: #ffffff;
          max-width: 820px;
          margin: 0 0 24px;
        }
        .pbh-h1 em { font-style: italic; font-weight: 300; }
        .pbh-h1 strong { font-weight: 600; }
        .pbh-sub {
          font-size: 16px;
          line-height: 1.8;
          color: var(--pb-muted);
          max-width: 480px;
          margin: 0 0 40px;
        }
        .pbh-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        /* ---------- how it works ---------- */
        .pbh-how { padding: 76px 10%; }
        .pbh-journey {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 0 20px;
          align-items: start;
        }
        .pbh-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .pbh-node-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid rgba(255,200,100,0.6);
          background: rgba(255,200,100,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .pbh-node-circle--final {
          width: 64px;
          height: 64px;
          border-color: rgba(255,200,100,0.9);
          box-shadow: 0 0 24px rgba(255,200,100,0.3);
        }
        .pbh-node-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 20px;
          color: var(--pb-gold);
        }
        .pbh-node-star {
          font-size: 24px;
          line-height: 1;
          color: var(--pb-gold);
        }
        .pbh-node-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 22px;
          color: #ffffff;
          margin: 0 0 10px;
        }
        .pbh-node-title--final {
          font-size: 26px;
          color: var(--pb-gold);
        }
        .pbh-node-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--pb-muted);
          max-width: 240px;
          margin: 0;
        }
        .pbh-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 90px;
          margin-top: 20px;
        }
        .pbh-arrow-line {
          position: relative;
          width: 100%;
          height: 1px;
          background: rgba(255,200,100,0.5);
        }
        .pbh-arrow-line::after {
          content: '';
          position: absolute;
          right: -1px;
          top: 50%;
          width: 7px;
          height: 7px;
          border-top: 1px solid rgba(255,200,100,0.7);
          border-right: 1px solid rgba(255,200,100,0.7);
          transform: translateY(-50%) rotate(45deg);
        }
        .pbh-arrow-label {
          margin-top: 12px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-style: italic;
          color: var(--pb-gold);
        }

        /* ---------- generic section ---------- */
        .pbh-sec { padding: 96px 10%; }
        .pbh-wrap { max-width: 1100px; margin: 0 auto; }
        .pbh-close { padding: 96px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; }

        /* ---------- pillars ---------- */
        .pbh-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
          perspective: 1000px;
        }
        .pbh-pill {
          position: relative;
          border: 1px solid rgba(255,200,100,0.30);
          border-radius: 14px;
          padding: 28px 24px;
          background: linear-gradient(135deg, rgba(255,200,100,0.08) 0%, rgba(255,200,100,0.03) 100%);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,200,100,0.08), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .pbh-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 20%;
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,200,100,0.6), transparent);
        }
        .pbh-pill:hover {
          transform: translateY(-6px) rotateX(2deg);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 24px rgba(255,200,100,0.10), inset 0 1px 0 rgba(255,255,255,0.08);
          border-color: rgba(255,200,100,0.55);
        }
        .pbh-pill-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 26px;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 0 20px rgba(255,200,100,0.3);
        }
        .pbh-pill-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--pb-muted);
          margin: 10px 0 0;
        }

        /* ---------- features ---------- */
        .pbh-features { margin-top: 40px; }
        .pbh-frow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .pbh-frow:last-child { border-bottom: none; }
        .pbh-frow--flip .pbh-ftext { order: 2; }
        .pbh-frow--flip .pbh-fimg { order: 1; }
        .pbh-fnum {
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--pb-muted);
        }
        .pbh-ftitle {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 26px;
          color: #ffffff;
          margin: 10px 0 12px;
        }
        .pbh-fimg {
          height: 220px;
          border-radius: 10px;
          border: 1px solid var(--pb-border-gold);
          background: var(--pb-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant', Georgia, serif;
          font-size: 15px;
          color: var(--pb-muted);
          transition: all 0.3s ease;
        }
        .pbh-fimg:hover {
          border-color: rgba(255,200,100,0.4);
          background: rgba(255,255,255,0.055);
        }

        /* ---------- pricing ---------- */
        .pbh-founding {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid rgba(255,200,100,0.35);
          background: rgba(255,200,100,0.07);
          border-radius: 10px;
          padding: 20px 26px;
          margin: 40px 0 34px;
        }
        .pbh-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: #ffc864;
          color: #12283f;
          padding: 4px 12px;
          border-radius: 3px;
        }
        .pbh-badge--top { margin-bottom: 14px; }
        .pbh-founding-head {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 24px;
          color: #ffffff;
          margin: 12px 0 6px;
        }
        .pbh-founding-note {
          font-size: 13px;
          color: var(--pb-muted);
          margin: 0;
        }
        .pbh-tiers {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 20px;
        }
        .pbh-tier {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,200,100,0.20);
          border-radius: 14px;
          padding: 32px 26px;
          background: linear-gradient(145deg, rgba(255,200,100,0.07) 0%, rgba(255,200,100,0.02) 60%, rgba(100,140,255,0.03) 100%);
          box-shadow: 0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }
        .pbh-tier::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,235,200,0.22), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        .pbh-tier:hover::before { left: 130%; }
        .pbh-tier:hover {
          border-color: rgba(255,200,100,0.5);
          transform: translateY(-3px);
        }
        .pbh-tier--featured {
          border: 1px solid rgba(255,200,100,0.50);
          background: linear-gradient(145deg, rgba(255,200,100,0.14) 0%, rgba(255,200,100,0.06) 60%, rgba(255,160,50,0.04) 100%);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 32px rgba(255,200,100,0.08), inset 0 1px 0 rgba(255,255,255,0.12);
        }
        .pbh-tier--featured .pbh-badge--top {
          text-shadow: 0 0 12px rgba(255,200,100,0.8);
        }
        .pbh-tier-name {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 14px;
        }
        .pbh-price {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 42px;
          color: var(--pb-gold);
          line-height: 1;
        }
        .pbh-price-was {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 28px;
          color: var(--pb-muted);
          text-decoration: line-through;
          margin-left: 8px;
        }
        .pbh-price-note {
          font-size: 13px;
          color: var(--pb-muted);
          margin: 8px 0 0;
        }
        .pbh-tier-plus {
          font-family: 'Cormorant', Georgia, serif;
          font-style: italic;
          font-size: 19px;
          color: var(--pb-gold);
          margin: 14px 0 0;
        }
        .pbh-list {
          list-style: none;
          padding: 0;
          margin: 18px 0 0;
        }
        .pbh-list li {
          font-size: 13px;
          font-weight: 300;
          color: var(--pb-text);
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* ---------- responsive ---------- */
        @media (max-width: 900px) {
          .pbh-h2 { font-size: 34px; }
          .pbh-sec { padding: 80px 7%; }
          .pbh-hero { padding: 0 7% 72px; }
          .pbh-hero-grid { gap: 40px; }
          .pbh-how { padding: 64px 7%; }
          .pbh-pillars { grid-template-columns: 1fr; }
          .pbh-journey {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 0;
          }
          .pbh-node { padding: 8px 0; }
          .pbh-arrow {
            min-width: 0;
            width: auto;
            margin: 6px 0;
          }
          .pbh-arrow-line { width: 1px; height: 40px; }
          .pbh-arrow-line::after {
            right: auto;
            left: 50%;
            top: auto;
            bottom: -1px;
            transform: translateX(-50%) rotate(135deg);
          }
        }
        @media (max-width: 768px) {
          .pbh-h1 { font-size: 38px; }
          .pbh-hero { padding: 0 24px 72px; }
          .pbh-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .pbh-hero-content { align-items: center; text-align: center; }
          .pbh-cta-row { justify-content: center; }
          .pbh-phone { width: 200px; }
          .pbh-frow { grid-template-columns: 1fr; gap: 20px; }
          .pbh-frow--flip .pbh-ftext,
          .pbh-frow--flip .pbh-fimg { order: 0; }
          .pbh-founding { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
};

export default PBHome;
