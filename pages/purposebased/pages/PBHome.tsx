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

// Checkout destinations.
// Seeker is free, so it goes straight to signup in the app — not to Stripe.
// The two paid tiers point at Stripe Payment Links; swap the placeholders for
// the real https://buy.stripe.com/... URLs from the Stripe dashboard.
const APP_SIGNUP_URL = 'https://www.purposebased.app';
const CHECKOUT_BASED = 'https://buy.stripe.com/REPLACE_WITH_BASED_LINK';
const CHECKOUT_BLISSED = 'https://buy.stripe.com/REPLACE_WITH_BLISSED_LINK';

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
        <div className="pbh-hero-bg" aria-hidden="true">
          {/* Hero BG: drop a wide landscape/cosmos image at public/images/pb-hero-bg.jpg and set background-image: url('/images/pb-hero-bg.jpg') center/cover no-repeat here, then set opacity 0.15 */}
        </div>
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
            <div className="pbh-phone-tilt">
              <div className="pbh-phone">
                <div className="pbh-phone-screen">
                  <span className="pbh-phone-fallback">App screenshot</span>
                  {/* App screenshot lives at /public/images/pb-mockup.png */}
                  <img
                    src="/images/pb-mockup.png"
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
            Most will spend more time doing grocery lists than <em>planning for life.</em>
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
      <section id="features" className="pb-section pbh-sec">
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
            <a
              href={CHECKOUT_BASED}
              target="_blank"
              rel="noopener noreferrer"
              className="pbh-btn pbh-btn--solid"
            >
              Claim your place
            </a>
          </div>

          <div className="pbh-tiers">
            {/* Tier 1 — Seeker */}
            <div className="pbh-tier">
              <h3 className="pbh-tier-name">Seeker</h3>
              <div className="pbh-price">€0</div>
              <p className="pbh-price-note">Free, always</p>
              <ul className="pbh-list">
                <li>Self-Evaluation Tool</li>
                <li>Purpose Tracker</li>
                <li>Daily Insight</li>
                <li>Basic Framework Previews (4 of 9)</li>
                <li>My People, up to 5</li>
                <li>1 Guide message per day</li>
              </ul>
              <a
                href={APP_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pbh-btn pbh-btn--glass pbh-btn--full"
              >
                Begin
              </a>
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
                <li className="pbh-li--gold">Full Analysis</li>
                <li className="pbh-li--gold">9 Integrated Frameworks</li>
                <li>All framework readings</li>
                <li>90 Guide messages per month</li>
                <li>Living Chronicle</li>
                <li>Odyssey</li>
                <li>My People, up to 20</li>
              </ul>
              <a
                href={CHECKOUT_BASED}
                target="_blank"
                rel="noopener noreferrer"
                className="pbh-btn pbh-btn--solid pbh-btn--full"
              >
                Choose Based
              </a>
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
                <li className="pbh-li--gold">4 full analysis re-runs per month</li>
                <li>200 Guide messages per month</li>
                <li>My People, up to 100</li>
                <li>Year Ahead</li>
                <li>Priority support</li>
              </ul>
              <a
                href={CHECKOUT_BLISSED}
                target="_blank"
                rel="noopener noreferrer"
                className="pbh-btn pbh-btn--glass pbh-btn--full"
              >
                Choose Blissed
              </a>
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
          /* 4x the previous 11px, fluid so it scales down on small screens */
          font-size: clamp(22px, 4.6vw, 44px);
          line-height: 1.15;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 24px;
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
          /* Explicit so the full-width <a> variants cannot overflow their card
             if the global border-box reset ever goes away. */
          box-sizing: border-box;
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
          min-height: 65vh;
          display: flex;
          align-items: center;
          padding: 48px 10% 56px;
          position: relative;
          overflow: hidden;
        }
        .pbh-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
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
          gap: 40px;
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
          justify-content: flex-start;
          margin-left: -16px;
          perspective: 1200px;
        }
        .pbh-phone-tilt {
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .pbh-phone-tilt:hover {
          transform: rotateX(-8deg) rotateY(-12deg) rotateZ(2deg);
        }
        .pbh-phone {
          width: 336px;
          background: #0a0f1e;
          border-radius: 36px;
          padding: 12px;
          border: 1px solid rgba(255,200,100,0.15);
          box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
          animation: pb-float-tilt 6s ease-in-out infinite;
        }
        @keyframes pb-float-tilt {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          50% { transform: translateY(-12px) rotateX(-4deg) rotateY(-6deg); }
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
          font-size: 58px;
          line-height: 1.12;
          color: #ffffff;
          max-width: 660px;
          margin: 0 0 20px;
        }
        .pbh-h1 em { font-style: italic; font-weight: 300; }
        .pbh-h1 strong { font-weight: 600; }
        .pbh-sub {
          font-size: 14px;
          line-height: 1.8;
          color: var(--pb-muted);
          max-width: 384px;
          margin: 0 0 32px;
        }
        .pbh-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        /* ---------- how it works ---------- */
        .pbh-how { padding: 56px 10% 80px; position: relative; overflow: hidden; }
        .pbh-how::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 28% 68%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1.5px 1.5px at 58% 30%, rgba(255,224,182,0.4), transparent),
            radial-gradient(1px 1px at 78% 58%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 90% 16%, rgba(255,255,255,0.25), transparent),
            radial-gradient(1.5px 1.5px at 40% 88%, rgba(255,224,182,0.3), transparent);
          opacity: 0.7;
        }
        .pbh-how > .pbh-wrap { position: relative; z-index: 1; }
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
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid rgba(255,200,100,0.6);
          background: rgba(255,200,100,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 0 20px rgba(255,200,100,0.25), inset 0 0 12px rgba(255,200,100,0.14);
        }
        .pbh-node-circle::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,100,0.22);
          animation: pbh-halo 3.2s ease-in-out infinite;
        }
        .pbh-node-circle--final {
          width: 64px;
          height: 64px;
          border-color: rgba(255,200,100,0.9);
          box-shadow: 0 0 36px rgba(255,200,100,0.45), inset 0 0 16px rgba(255,200,100,0.2);
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
          filter: drop-shadow(0 0 8px rgba(255,200,100,0.85));
          animation: pbh-star-pulse 2.6s ease-in-out infinite;
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
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 90px;
          margin-top: 20px;
        }
        /* drifting energy particles around the connector */
        .pbh-arrow::before {
          content: '';
          position: absolute;
          inset: -22px 0 -10px;
          pointer-events: none;
          background-image:
            radial-gradient(2px 2px at 10% 30%, rgba(255,238,196,0.95), transparent),
            radial-gradient(1.5px 1.5px at 26% 70%, rgba(255,224,158,0.8), transparent),
            radial-gradient(2px 2px at 44% 20%, rgba(255,246,214,0.95), transparent),
            radial-gradient(1.5px 1.5px at 60% 74%, rgba(255,222,158,0.75), transparent),
            radial-gradient(2px 2px at 78% 32%, rgba(255,238,196,0.9), transparent),
            radial-gradient(1.5px 1.5px at 92% 58%, rgba(255,222,158,0.6), transparent);
          filter: drop-shadow(0 0 4px rgba(255,200,100,0.6));
          animation: pbh-particle-drift 4.5s ease-in-out infinite alternate;
        }
        /* faster twinkling sparkle layer */
        .pbh-arrow::after {
          content: '';
          position: absolute;
          inset: -16px 0 -6px;
          pointer-events: none;
          background-image:
            radial-gradient(1.5px 1.5px at 20% 52%, rgba(255,255,255,0.95), transparent),
            radial-gradient(1px 1px at 52% 40%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 80% 62%, rgba(255,242,208,0.9), transparent);
          animation: pbh-sparkle 2.1s ease-in-out infinite;
        }
        .pbh-arrow-line {
          position: relative;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(
            90deg,
            rgba(255,200,100,0) 0%,
            rgba(255,200,100,0.85) 16%,
            rgba(255,248,220,1) 50%,
            rgba(255,200,100,0.85) 84%,
            rgba(255,200,100,0) 100%
          );
          box-shadow:
            0 0 10px rgba(255,216,146,0.9),
            0 0 24px rgba(255,200,100,0.6),
            0 0 48px rgba(255,200,100,0.32);
          animation: pbh-beam-pulse 3s ease-in-out infinite;
        }
        /* travelling spark that flows toward the next phase */
        .pbh-arrow-line::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -45%;
          width: 45%;
          height: 6px;
          border-radius: 4px;
          transform: translateY(-50%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 45%, rgba(255,238,196,0.9) 62%, transparent);
          box-shadow: 0 0 14px rgba(255,246,214,0.95), 0 0 28px rgba(255,200,100,0.7);
          filter: blur(0.3px);
          animation: pbh-spark 2.6s linear infinite;
        }
        .pbh-arrow-line::after {
          content: '';
          position: absolute;
          right: -2px;
          top: 50%;
          width: 10px;
          height: 10px;
          border-top: 2px solid rgba(255,248,220,1);
          border-right: 2px solid rgba(255,248,220,1);
          transform: translateY(-50%) rotate(45deg);
          filter: drop-shadow(0 0 9px rgba(255,216,146,0.95));
        }
        .pbh-arrow-label {
          margin-top: 14px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-style: italic;
          letter-spacing: 1px;
          color: var(--pb-gold);
          text-shadow: 0 0 12px rgba(255,200,100,0.6);
        }
        @keyframes pbh-spark {
          from { left: -45%; }
          to { left: 100%; }
        }
        @keyframes pbh-particle-drift {
          from { opacity: 0.3; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(-5px); }
        }
        @keyframes pbh-sparkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }
        @keyframes pbh-beam-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255,216,146,0.7), 0 0 22px rgba(255,200,100,0.4), 0 0 40px rgba(255,200,100,0.22);
          }
          50% {
            box-shadow: 0 0 16px rgba(255,228,164,1), 0 0 34px rgba(255,200,100,0.8), 0 0 64px rgba(255,200,100,0.45);
          }
        }
        @keyframes pbh-halo {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.18); opacity: 0.12; }
        }
        @keyframes pbh-star-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.16); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pbh-arrow-line,
          .pbh-arrow-line::before,
          .pbh-arrow::before,
          .pbh-arrow::after,
          .pbh-node-circle::after,
          .pbh-node-star { animation: none; }
        }

        /* ---------- generic section ---------- */
        .pbh-sec { padding: 56px 10% 80px; }
        .pbh-wrap { max-width: 1100px; margin: 0 auto; }
        .pbh-close { padding: 56px 10% 80px; text-align: center; display: flex; flex-direction: column; align-items: center; }

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
        /* Key differentiator for the tier — carries the gold accent. */
        .pbh-list li.pbh-li--gold {
          color: var(--pb-gold);
          font-weight: 400;
        }

        /* ============================================================
           RESPONSIVE
           Desktop 1024px+ : 80px 10%  · hero 55/45 · pillars 3 cols
           Tablet  ≤1024px : 60px 7%   · hero 50/50 · pillars 2 cols
           Mobile  ≤768px  : 48px 5%   · hero stacked · single column
           ============================================================ */

        /* ---------- tablet ---------- */
        @media (max-width: 1024px) {
          .pbh-h1 { font-size: 42px; }
          .pbh-h2 { font-size: 36px; }
          .pbh-sec { padding: 56px 7% 60px; }
          .pbh-close { padding: 56px 7% 60px; }
          .pbh-how { padding: 56px 7% 60px; }
          .pbh-hero { padding: 40px 7% 56px; }
          .pbh-hero-grid { grid-template-columns: 50fr 50fr; gap: 32px; }
          .pbh-phone { width: 256px; }
          .pbh-pillars { grid-template-columns: repeat(2, 1fr); }
          .pbh-frow { gap: 36px; }
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
          .pbh-arrow::before,
          .pbh-arrow::after { display: none; }
          .pbh-arrow-line {
            width: 2px;
            height: 48px;
            background: linear-gradient(
              180deg,
              rgba(255,200,100,0) 0%,
              rgba(255,248,220,1) 50%,
              rgba(255,200,100,0) 100%
            );
            box-shadow: 0 0 10px rgba(255,216,146,0.9), 0 0 24px rgba(255,200,100,0.55);
          }
          .pbh-arrow-line::before { display: none; }
          .pbh-arrow-line::after {
            right: auto;
            left: 50%;
            top: auto;
            bottom: -2px;
            transform: translateX(-50%) rotate(135deg);
          }
        }

        /* ---------- mobile ---------- */
        @media (max-width: 768px) {
          .pbh-h1 { font-size: 36px; }
          .pbh-h2 { font-size: 32px; }
          .pbh-sec { padding: 48px 5%; }
          .pbh-close { padding: 48px 5%; }
          .pbh-how { padding: 48px 5%; }
          .pbh-hero { padding: 32px 5% 48px; }
          .pbh-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .pbh-hero-content { align-items: center; text-align: center; }
          .pbh-hero-visual { justify-content: center; margin-left: 0; }
          .pbh-sub { margin-bottom: 32px; }
          .pbh-cta-row { justify-content: center; }
          .pbh-phone { width: 208px; }
          .pbh-pillars { grid-template-columns: 1fr; }
          .pbh-frow { grid-template-columns: 1fr; gap: 24px; padding: 32px 0; }
          .pbh-frow--flip .pbh-ftext,
          .pbh-frow--flip .pbh-fimg { order: 0; }
          .pbh-fimg { height: 180px; }
          .pbh-founding { flex-direction: column; align-items: flex-start; }
          .pbh-founding .pbh-btn { width: 100%; }
        }

        /* ---------- pricing tiers stack ---------- */
        @media (max-width: 600px) {
          .pbh-tiers { grid-template-columns: 1fr; }
        }

        /* ---------- small mobile ---------- */
        @media (max-width: 480px) {
          .pbh-h1 { font-size: 26px; }
          .pbh-h2 { font-size: 28px; }
          .pbh-body { font-size: 15px; }
          .pbh-phone { width: 176px; }
          .pbh-price { font-size: 36px; }
          .pbh-price-was { font-size: 22px; }
          .pbh-cta-row { flex-direction: column; align-self: stretch; }
          .pbh-cta-row .pbh-btn { width: 100%; }
          .pbh-tier { padding: 26px 20px; }
          .pbh-pill { padding: 24px 20px; }
        }
      `}</style>
    </div>
  );
};

export default PBHome;
