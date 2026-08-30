import React from 'react';

// PurposeBased — Our Story.
// Modular mission narrative: short sections with breathing room between them,
// no dense paragraphs. Same premium glass + gold tokens as the other PB pages.

const NARRATIVE: { heading: string; body: string; source?: string }[] = [
  {
    heading: 'The challenge',
    body:
      'Around 332 million people worldwide live with depression. More than half of young adults lack meaning or purpose in their lives. We saw this crisis. We could not look away.',
    source: 'WHO, 2021 · Harvard Graduate School of Education',
  },
  {
    heading: 'Why now',
    body:
      'The technological revolution is here. We asked ourselves: where are the conscious, humanist enterprises using this power for humanity’s benefit? We decided. We’ll do it ourselves.',
  },
  {
    heading: 'Based in Copenhagen',
    body:
      'We chose Copenhagen by conviction. We work from a corner of the world where fair, equal societies are not just an idea. They are the foundation. It is not perfect. But here, humans and nature sit at the center of the table. The work culture is extraordinary. The entrepreneurial spirit is alive and rooted in conscience. We believe in this place. We believe in building from here.',
  },
  {
    heading: 'The social enterprise movement',
    body:
      'Denmark’s social enterprise movement is thriving, thanks to pioneers like SED (Social Enterprise Denmark) and countless conscious entrepreneurs who refused to compromise. We stand with them.',
  },
  {
    heading: 'How we work',
    body:
      'Impact, not shortcuts. Ultra transparency. Data and attention treated as precious, not commodities. We only build products of high impact, even if they are hard to make, hard to sell, too novel for an unprepared market. We do that work anyway. That service. That mission.',
  },
  {
    heading: 'Beyond product',
    body:
      'We do not only build responsibly and sustainably. We actively support individuals and organizations on their path of human development. Purpose discovery is our north star.',
  },
  {
    heading: 'The honour',
    body: 'The time is now. The honour is ours.',
  },
];

const STATS: { num: string; label: string; source: string }[] = [
  { num: '332M', label: 'People living with depression globally', source: 'WHO, 2021' },
  { num: '58%', label: 'Young adults lacking meaning or purpose', source: 'Harvard GSE, Psychiatry.org' },
  { num: '85%+', label: 'People who believe in finding deeper purpose', source: 'Lifeway Research, 2025' },
];

const PBStory: React.FC = () => {
  return (
    <article className="pbs">
      {/* ============ HERO ============ */}
      <header className="pbs-hero">
        <p className="pbs-label">Our Story</p>
        <h1 className="pbs-h1">Why we’re building this</h1>
      </header>

      {/* ============ MODULAR NARRATIVE ============ */}
      <div className="pbs-narrative">
        {NARRATIVE.map((s) => (
          <section key={s.heading} className="pbs-block">
            <h2 className="pbs-block-head">{s.heading}</h2>
            <p className="pbs-block-body">{s.body}</p>
            {s.source && <p className="pbs-block-source">{s.source}</p>}
          </section>
        ))}
      </div>

      {/* ============ STATS ============ */}
      <div className="pbs-stats">
        {STATS.map((stat) => (
          <div key={stat.num} className="pbs-stat">
            <span className="pbs-stat-num">{stat.num}</span>
            <span className="pbs-stat-label">{stat.label}</span>
            <span className="pbs-stat-source">{stat.source}</span>
          </div>
        ))}
      </div>

      <style>{`
        .pbs {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          display: block;
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 10% 96px;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- hero ---------- */
        .pbs-hero { max-width: 820px; margin-bottom: 56px; }
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
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 44px;
        }
        .pbs-block-head {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 14px;
        }
        .pbs-block-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--pb-text);
          margin: 0;
        }
        .pbs-block-source {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          font-style: italic;
          letter-spacing: 0.5px;
          color: var(--pb-muted);
          margin: 12px 0 0;
        }

        /* ---------- stats grid ---------- */
        .pbs-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 72px;
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
          .pbs { padding: 60px 7% 80px; }
          .pbs-stat { padding: 24px 20px; }
          .pbs-stat-num { font-size: 38px; }
        }
        @media (max-width: 768px) {
          .pbs { padding: 48px 5% 64px; }
          .pbs-hero { margin-bottom: 44px; }
          .pbs-narrative { gap: 38px; }
          .pbs-block-body { font-size: 16px; }
          .pbs-stats { grid-template-columns: 1fr; gap: 14px; margin-top: 56px; }
        }
      `}</style>
    </article>
  );
};

export default PBStory;
