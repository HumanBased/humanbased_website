import React from 'react';
import { Link } from 'react-router-dom';

// PurposeBased — See How It Works.
// Three phases, one journey. Horizontal flow on desktop with connecting
// arrows, stacked on mobile. Image slots are placeholders for real app
// screenshots. Same gold / navy / glass tokens as the other PB pages.

const PHASES: { n: string; title: string; body: string; img?: string; note: string }[] = [
  {
    n: '01',
    title: 'Know Thyself',
    body:
      'Nine frameworks read together reveal a pattern no single system can see. Your Blueprint emerges. This is your foundation. Not a label. A mirror that reflects what was always there.',
    note: 'App screenshot: Know Thyself reading',
  },
  {
    n: '02',
    title: 'Find Your Purpose',
    body:
      'Your Blueprint points to something deeper. The Guide helps you read what it is saying about the direction of your life. Not prescriptive. Revelatory. It points. You choose.',
    note: 'App screenshot: Purpose Questionnaire / Reveal',
  },
  {
    n: '03',
    title: 'Epic Life, On Purpose',
    body:
      'Not a destination. A way of moving through the world with clarity about who you are and what you are here to do. Daily practices. Intentional living. The architecture of an epic life, built by you.',
    note: 'App screenshot: Path / Daily Clarity screen',
  },
];

const PBSeeHowItWorks: React.FC = () => {
  return (
    <div className="pbw">
      {/* ============ HERO ============ */}
      <header className="pbw-hero">
        <p className="pbw-label">See How It Works</p>
        <h1 className="pbw-h1">Three phases. One journey.</h1>
      </header>

      {/* ============ THREE-PHASE FLOW ============ */}
      <div className="pbw-flow">
        {PHASES.map((p, i) => (
          <React.Fragment key={p.n}>
            <section className="pbw-phase">
              <div className="pbw-phase-img">
                {p.img ? (
                  <img src={p.img} alt={p.title} className="pbw-phase-img-el" />
                ) : (
                  <span className="pbw-phase-img-note">{p.note}</span>
                )}
              </div>
              <span className="pbw-phase-num">{p.n}</span>
              <h2 className="pbw-phase-title">{p.title}</h2>
              <p className="pbw-phase-body">{p.body}</p>
            </section>

            {i < PHASES.length - 1 && (
              <div className="pbw-arrow" aria-hidden="true">
                <span className="pbw-arrow-line" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ============ CLOSING CTA ============ */}
      <section className="pbw-cta">
        <a
          href="https://www.purposebased.app"
          target="_blank"
          rel="noopener noreferrer"
          className="pbw-btn pbw-btn--solid"
        >
          Start your journey
        </a>
        <Link to="/purposebased#features" className="pbw-btn pbw-btn--glass">
          Explore features
        </Link>
      </section>

      <style>{`
        .pbw {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          display: block;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 8% 96px;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- hero ---------- */
        .pbw-hero { max-width: 820px; margin-bottom: 60px; }
        .pbw-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          /* 4x the base label size, fluid */
          font-size: clamp(22px, 4.6vw, 44px);
          line-height: 1.15;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 20px;
        }
        .pbw-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(32px, 5vw, 50px);
          line-height: 1.15;
          color: #ffffff;
          margin: 0;
        }

        /* ---------- flow ---------- */
        .pbw-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 0 20px;
          align-items: start;
        }
        .pbw-phase {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .pbw-phase-img {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 14px;
          border: 1px solid rgba(255,200,100,0.22);
          background: linear-gradient(135deg, rgba(255,200,100,0.07), rgba(255,255,255,0.025));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 22px;
        }
        .pbw-phase-img-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pbw-phase-img-note {
          font-family: 'Cormorant', Georgia, serif;
          font-style: italic;
          font-size: 14px;
          line-height: 1.5;
          color: var(--pb-muted);
          text-align: center;
          padding: 0 20px;
        }
        .pbw-phase-num {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--pb-muted);
        }
        .pbw-phase-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 26px;
          color: #ffffff;
          margin: 10px 0 12px;
        }
        .pbw-phase-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--pb-text);
          margin: 0;
        }

        /* ---------- connecting arrow ---------- */
        .pbw-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 60px;
          height: 100%;
          padding-top: 90px;
        }
        .pbw-arrow-line {
          position: relative;
          width: 100%;
          min-width: 40px;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,200,100,0) 0%, rgba(255,200,100,0.85) 40%, rgba(255,248,220,1) 100%);
          box-shadow: 0 0 10px rgba(255,216,146,0.7);
        }
        .pbw-arrow-line::after {
          content: '';
          position: absolute;
          right: -2px;
          top: 50%;
          width: 9px;
          height: 9px;
          border-top: 2px solid rgba(255,248,220,1);
          border-right: 2px solid rgba(255,248,220,1);
          transform: translateY(-50%) rotate(45deg);
        }

        /* ---------- closing cta ---------- */
        .pbw-cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 72px;
        }
        .pbw-btn {
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
        .pbw-btn:hover { transform: translateY(-2px); }
        .pbw-btn--solid {
          background: linear-gradient(135deg, rgba(255,200,100,0.92), rgba(220,160,50,0.88));
          border: 1px solid rgba(255,220,130,0.6);
          color: #12283f;
          box-shadow: 0 0 24px rgba(255,200,100,0.18);
        }
        .pbw-btn--glass {
          background: linear-gradient(135deg, rgba(255,200,100,0.14), rgba(255,200,100,0.05));
          border: 1px solid rgba(255,200,100,0.38);
          color: var(--pb-gold);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .pbw { padding: 60px 7% 80px; }
          .pbw-phase-title { font-size: 24px; }
        }
        @media (max-width: 768px) {
          .pbw { padding: 48px 5% 64px; }
          .pbw-hero { margin-bottom: 44px; }
          .pbw-flow {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .pbw-phase { padding: 8px 0; }
          .pbw-phase-img { aspect-ratio: 16 / 10; margin-bottom: 18px; }
          .pbw-arrow {
            min-width: 0;
            width: auto;
            height: auto;
            padding: 14px 0;
          }
          .pbw-arrow-line {
            width: 2px;
            min-width: 0;
            height: 44px;
            background: linear-gradient(180deg, rgba(255,200,100,0) 0%, rgba(255,200,100,0.85) 40%, rgba(255,248,220,1) 100%);
          }
          .pbw-arrow-line::after {
            right: auto;
            left: 50%;
            top: auto;
            bottom: -2px;
            transform: translateX(-50%) rotate(135deg);
          }
          .pbw-cta { margin-top: 56px; }
        }
        @media (max-width: 480px) {
          .pbw-cta { flex-direction: column; }
          .pbw-cta .pbw-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default PBSeeHowItWorks;
