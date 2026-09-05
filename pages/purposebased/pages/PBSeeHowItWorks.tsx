import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';

// PurposeBased - See How It Works.
// A five-step journey down a central gold timeline: text and image alternate
// sides around the line on desktop, stacking into a single centered column on
// mobile. Image slots fall back to a titled placeholder until the real art
// lands in /public/images/how-it-works/.

const STEPS: { n: string; title: string; body: string; img: string }[] = [
  {
    n: 'Step 1',
    title: 'Realization',
    body:
      "You sense the power of purpose. Alignment, focus, clarity, there's something more you're meant for. The journey begins with knowing there's more to discover.",
    img: '/images/how-it-works/step-1-realization.png',
  },
  {
    n: 'Step 2',
    title: 'Search',
    body:
      'You begin looking. Nine frameworks converge to reveal your unique patterns, your blueprint, your direction. The convergence shows what no single system could alone.',
    img: '/images/how-it-works/step-2-search.png',
  },
  {
    n: 'Step 3',
    title: 'Discovery',
    body:
      "You find it. Your purpose emerges clearly. Not handed to you, but revealed through understanding yourself. The clarity arrives when you're ready to see it.",
    img: '/images/how-it-works/step-3-discovery.png',
  },
  {
    n: 'Step 4',
    title: 'Conquest',
    body:
      'You pursue it. Day after day, you align your actions with your purpose. You live it intentionally. This is where purpose becomes practice, where knowing becomes doing.',
    img: '/images/how-it-works/step-4-conquest.png',
  },
  {
    n: 'Step 5',
    title: 'Tend the Garden',
    body:
      'You nurture it. Purpose is never finished. It needs to be watered and tended, deepened over a lifetime. The most important work is the daily care that keeps it alive.',
    img: '/images/how-it-works/step-5-tend.png',
  },
];

const PB_URL = 'https://humanbased.org/purposebased';
const HOW_IT_WORKS_URL = 'https://humanbased.org/purposebased/how-it-works';
const PB_OG_IMAGE = 'https://humanbased.org/images/pb-mockup.png';

const PBSeeHowItWorks: React.FC = () => {
  usePageSeo({
    title: 'PurposeBased | How It Works',
    description:
      'Realization, search, discovery, conquest, and tending the garden. See how PurposeBased guides your purpose journey across five steps.',
    canonical: HOW_IT_WORKS_URL,
    og: {
      title: 'PurposeBased | How It Works',
      description:
        'Realization, search, discovery, conquest, and tending the garden. See how PurposeBased guides your purpose journey across five steps.',
      image: PB_OG_IMAGE,
      url: HOW_IT_WORKS_URL,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PurposeBased | How It Works',
      description: 'See how PurposeBased guides your purpose journey across five steps.',
      image: PB_OG_IMAGE,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PurposeBased', item: PB_URL },
        { '@type': 'ListItem', position: 2, name: 'How It Works', item: HOW_IT_WORKS_URL },
      ],
    },
  });

  return (
    <div className="pbw">
      {/* ============ HERO ============ */}
      <header className="pbw-hero">
        <p className="pbw-label">See How It Works</p>
        <h1 className="pbw-h1">Five steps. One journey.</h1>
      </header>

      {/* ============ FIVE-STEP JOURNEY ============ */}
      <div className="pbw-journey">
        {STEPS.map((s, i) => (
          <div key={s.n} className={`pbw-step${i % 2 === 1 ? ' pbw-step--flip' : ''}`}>
            <div className="pbw-step-text">
              <span className="pbw-step-num">{s.n}</span>
              <h2 className="pbw-step-title">{s.title}</h2>
              <p className="pbw-step-desc">{s.body}</p>
            </div>
            <div className="pbw-step-dot" aria-hidden="true" />
            <div className="pbw-step-img">
              <span className="pbw-step-img-note">{s.title}</span>
              <img
                src={s.img}
                alt={s.title}
                className="pbw-step-img-el"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
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
          --pb-surface: rgba(255,255,255,0.04);
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

        /* ---------- journey ---------- */
        .pbw-journey {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .pbw-journey::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 6px;
          bottom: 6px;
          width: 1px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #C4A85A 0%, rgba(196,168,90,0.3) 100%);
        }

        .pbw-step {
          display: grid;
          grid-template-columns: 1fr 48px 1fr;
          gap: 2rem;
          align-items: start;
        }
        .pbw-step-text {
          grid-row: 1;
          grid-column: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        .pbw-step--flip .pbw-step-text {
          grid-column: 3;
          align-items: flex-start;
          text-align: left;
        }
        .pbw-step-num {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--pb-gold);
        }
        .pbw-step-title {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          margin: 8px 0 10px;
        }
        .pbw-step-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--pb-text);
          max-width: 380px;
          margin: 0;
        }

        .pbw-step-dot {
          grid-row: 1;
          grid-column: 2;
          justify-self: center;
          margin-top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(196,168,90,0.2);
          border: 1px solid #ffffff;
          box-shadow: inset 0 0 4px rgba(196,168,90,0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          position: relative;
          z-index: 1;
        }

        .pbw-step-img {
          grid-row: 1;
          grid-column: 3;
          justify-self: start;
          position: relative;
          width: 140px;
          height: 140px;
          border-radius: 12px;
          background: var(--pb-surface);
          overflow: hidden;
        }
        .pbw-step--flip .pbw-step-img {
          grid-column: 1;
          justify-self: end;
        }
        .pbw-step-img-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pbw-step-img-note {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          font-family: 'Cormorant', Georgia, serif;
          font-style: italic;
          font-size: 14px;
          text-align: center;
          color: var(--pb-muted);
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
        }
        @media (max-width: 768px) {
          .pbw { padding: 48px 5% 64px; }
          .pbw-hero { margin-bottom: 44px; }
          .pbw-journey { gap: 2.75rem; }
          .pbw-journey::before { display: none; }
          .pbw-step,
          .pbw-step--flip {
            grid-template-columns: 1fr;
            gap: 1rem;
            justify-items: center;
          }
          .pbw-step-dot { display: none; }
          .pbw-step-text,
          .pbw-step--flip .pbw-step-text {
            grid-row: auto;
            grid-column: 1;
            align-items: center;
            text-align: center;
          }
          .pbw-step-desc { max-width: none; }
          .pbw-step-img,
          .pbw-step--flip .pbw-step-img {
            grid-row: auto;
            grid-column: 1;
            justify-self: stretch;
            width: 100%;
            height: 180px;
            order: -1;
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
