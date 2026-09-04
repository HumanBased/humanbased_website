import React from 'react';
import { usePageSeo } from '../../../hooks/usePageSeo';

// PurposeBased — Our Story.
// Artful, modular mission narrative: highlighted lines carry the weight,
// supporting copy stays quiet, generous whitespace between every section.
// Same gold / navy / glass tokens as the other PB pages.

const STATS: { num: string; label: string; source: string }[] = [
  { num: '332M', label: 'People living with depression globally', source: 'WHO, 2021' },
  { num: '58%', label: 'Young adults lacking meaning or purpose', source: 'Harvard GSE, Psychiatry.org' },
  { num: '85%+', label: 'People who believe in finding deeper purpose', source: 'Lifeway Research, 2025' },
];

const PB_URL = 'https://humanbased.org/purposebased';
const STORY_URL = 'https://humanbased.org/purposebased/story';
const PB_OG_IMAGE = 'https://humanbased.org/images/pb-mockup.png';

const PBStory: React.FC = () => {
  usePageSeo({
    title: 'PurposeBased | Our Story | Purpose-Driven Social Enterprise',
    description:
      'Learn how PurposeBased was built by HumanBased to help people discover meaning through self-knowledge frameworks.',
    canonical: STORY_URL,
    og: {
      title: 'PurposeBased | Our Story | Purpose-Driven Social Enterprise',
      description:
        'Learn how PurposeBased was built by HumanBased to help people discover meaning through self-knowledge frameworks.',
      image: PB_OG_IMAGE,
      url: STORY_URL,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PurposeBased | Our Story',
      description:
        'Learn how PurposeBased was built by HumanBased to help people discover meaning through self-knowledge frameworks.',
      image: PB_OG_IMAGE,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PurposeBased', item: PB_URL },
        { '@type': 'ListItem', position: 2, name: 'Our Story', item: STORY_URL },
      ],
    },
  });

  return (
    <article className="pbs">
      {/* ============ HERO ============ */}
      <header className="pbs-hero">
        <p className="pbs-label">Our Story</p>
        <h1 className="pbs-h1">Why we’re building this</h1>
      </header>

      <div className="pbs-narrative">
        {/* ============ THE CHALLENGE ============ */}
        <section className="pbs-block">
          <h2 className="pbs-block-head">The challenge</h2>

          <div className="pbs-stats">
            {STATS.map((stat) => (
              <div key={stat.num} className="pbs-stat">
                <span className="pbs-stat-num">{stat.num}</span>
                <span className="pbs-stat-label">{stat.label}</span>
                <span className="pbs-stat-source">{stat.source}</span>
              </div>
            ))}
          </div>

          <p className="pbs-block-body">
            Around 332 million people worldwide live with depression.
          </p>
          <p className="pbs-highlight">
            More than half of young adults lack meaning or purpose in their lives.
          </p>
          <p className="pbs-block-body">We saw this crisis. We could not look away.</p>
          <p className="pbs-block-source">WHO, 2021 · Harvard Graduate School of Education</p>
        </section>

        {/* ============ WHY NOW ============ */}
        <section className="pbs-block">
          <h2 className="pbs-block-head">Why now</h2>
          <p className="pbs-block-body">
            The technological revolution is here. We asked ourselves:
          </p>
          <p className="pbs-highlight">
            Where are the conscious, humanist enterprises using this power for humanity’s benefit?
          </p>
          <p className="pbs-block-body">We decided. We will do it ourselves.</p>
        </section>

        {/* ============ BASED IN COPENHAGEN ============ */}
        <section className="pbs-block">
          <h2 className="pbs-block-head">Based in Copenhagen</h2>
          <p className="pbs-block-body">
            We chose Copenhagen because it is where we want to build.
          </p>
          <p className="pbs-block-body">
            It is a place where fair, equal societies are the ground you stand on, not a line in a
            manifesto. Humans and nature sit at the center of the table here. The work culture leaves
            room for a life, and the people building things tend to do it with conscience.
          </p>
          <p className="pbs-block-body">
            We wanted to do this work from somewhere we actually believe in. So we came here.
          </p>
        </section>

        {/* ============ THE SOCIAL ENTERPRISE MOVEMENT ============ */}
        <section className="pbs-block">
          <h2 className="pbs-block-head">The social enterprise movement</h2>
          <p className="pbs-block-body">
            And the social enterprise movement is thriving in Denmark, thanks to pioneers like SED
            (Social Enterprise Denmark) and countless conscious entrepreneurs who refused to
            compromise. We stand with them.
          </p>
        </section>

        {/* ============ HOW WE WORK ============ */}
        <section className="pbs-block">
          <h2 className="pbs-block-head">How we work</h2>
          <div className="pbs-work">
            <p className="pbs-work-line">
              <span className="g">Impact</span>, not shortcuts.
            </p>
            <p className="pbs-work-line">
              <span className="g">Ultra transparency.</span>
            </p>
            <p className="pbs-work-line">
              Data and attention treated as <span className="g">precious</span>, not commodities.
            </p>
            <p className="pbs-work-line">
              We only build products of <span className="g">high impact</span>, even if they are hard
              to make, hard to sell, too novel for an unprepared market.
            </p>
            <p className="pbs-work-line">
              We do that work <span className="g">anyway</span>. That service. That mission.
            </p>
          </div>
        </section>

        {/* ============ BEYOND PRODUCT ============ */}
        <section className="pbs-block">
          <h2 className="pbs-block-head">Beyond product</h2>
          <p className="pbs-block-body">
            We do not only build responsibly and sustainably, we actively support individuals and
            organizations on their path of human development.
          </p>
          <p className="pbs-block-body">
            We share what we learn, openly, and we stand with the people doing the slow work of
            growth.
          </p>
          <p className="pbs-block-body">
            Purpose discovery is our north star. Everything we build is meant to serve it.
          </p>
        </section>

        {/* ============ THE HONOUR ============ */}
        <section className="pbs-block">
          <h2 className="pbs-block-head">The honour</h2>
          <p className="pbs-highlight pbs-highlight--close">
            The time is now. The honour is ours.
          </p>
        </section>
      </div>

      <style>{`
        .pbs {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          display: block;
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 10% 104px;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- hero ---------- */
        .pbs-hero { max-width: 820px; margin-bottom: 64px; }
        .pbs-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          /* 4x the base label size, fluid so it scales on small screens */
          font-size: clamp(22px, 4.6vw, 44px);
          line-height: 1.15;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 20px;
        }
        .pbs-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.15;
          color: #ffffff;
          margin: 0;
        }

        /* ---------- modular narrative ---------- */
        .pbs-narrative {
          display: flex;
          flex-direction: column;
          gap: 72px;
        }
        .pbs-block-head {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 22px;
        }
        .pbs-block-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--pb-text);
          max-width: 620px;
          margin: 0 0 18px;
        }
        .pbs-block-body:last-child { margin-bottom: 0; }
        .pbs-block-source {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          font-style: italic;
          letter-spacing: 0.5px;
          color: var(--pb-muted);
          margin: 18px 0 0;
        }

        /* ---------- highlighted lines ---------- */
        .pbs-highlight {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(25px, 3.8vw, 40px);
          line-height: 1.28;
          color: var(--pb-gold);
          max-width: 780px;
          margin: 26px 0;
        }
        .pbs-highlight--close {
          margin: 0;
          text-shadow: 0 0 28px rgba(255,200,100,0.28);
        }

        /* ---------- how we work — one phrase per line ---------- */
        .pbs-work {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 780px;
        }
        .pbs-work-line {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(19px, 2.5vw, 27px);
          line-height: 1.4;
          color: #f3e9d6;
          margin: 0;
          padding-left: 20px;
          border-left: 2px solid rgba(255,200,100,0.4);
        }
        .pbs-work-line .g {
          color: var(--pb-gold);
          font-style: italic;
        }
        @media (min-width: 769px) {
          .pbs-work-line:nth-child(even) {
            align-self: flex-end;
            text-align: right;
            padding-left: 0;
            padding-right: 20px;
            border-left: 0;
            border-right: 2px solid rgba(255,200,100,0.4);
          }
        }

        /* ---------- stats grid ---------- */
        .pbs-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 0 0 40px;
        }
        .pbs-stat {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: 1px solid rgba(255,200,100,0.22);
          border-radius: 14px;
          padding: 30px 26px;
          background: linear-gradient(135deg, rgba(255,200,100,0.08), rgba(255,255,255,0.03));
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .pbs-stat-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 44px;
          line-height: 1;
          color: var(--pb-gold);
        }
        .pbs-stat-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--pb-text);
        }
        .pbs-stat-source {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-style: italic;
          color: var(--pb-muted);
          margin-top: auto;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .pbs { padding: 60px 7% 88px; }
          .pbs-narrative { gap: 60px; }
          .pbs-stat { padding: 24px 20px; }
          .pbs-stat-num { font-size: 38px; }
        }
        @media (max-width: 768px) {
          .pbs { padding: 48px 5% 72px; }
          .pbs-hero { margin-bottom: 48px; }
          .pbs-narrative { gap: 52px; }
          .pbs-block-body { font-size: 16px; }
          .pbs-work { gap: 20px; }
          .pbs-stats { grid-template-columns: 1fr; gap: 14px; margin-bottom: 32px; }
        }
      `}</style>
    </article>
  );
};

export default PBStory;
