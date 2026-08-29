import React from 'react';

const PBStory: React.FC = () => {
  return (
    <article className="pbs">
      <p className="pbs-label">Our Story</p>
      <h1 className="pbs-h1">Why we started PurposeBased</h1>
      <p className="pbs-p">
        Placeholder narrative. This page will carry the founding story — the observation that sparked
        the project, the people it is built for, and what HumanBased hopes it becomes.
      </p>
      <p className="pbs-p">
        A second placeholder paragraph covering the approach and the values that shape every decision
        behind the product.
      </p>
      <p className="pbs-p">
        A closing placeholder paragraph inviting the reader into the next chapter.
      </p>

      {/* Stats grid — responsive rules below are ready for the real numbers:
          3 columns on desktop and tablet, single column on mobile. */}
      <div className="pbs-stats">
        <div className="pbs-stat">
          <span className="pbs-stat-num">—</span>
          <span className="pbs-stat-label">Placeholder stat one</span>
        </div>
        <div className="pbs-stat">
          <span className="pbs-stat-num">—</span>
          <span className="pbs-stat-label">Placeholder stat two</span>
        </div>
        <div className="pbs-stat">
          <span className="pbs-stat-num">—</span>
          <span className="pbs-stat-label">Placeholder stat three</span>
        </div>
      </div>

      <style>{`
        .pbs {
          display: block;
          max-width: 760px;
          margin: 0 auto;
          padding: 80px 10%;
        }
        .pbs-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffc864;
          margin: 0 0 18px;
        }
        .pbs-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.15;
          color: #f3e9d6;
          margin: 0 0 28px;
        }
        .pbs-p {
          font-size: 17px;
          line-height: 1.8;
          color: #cadcf0;
          margin: 0 0 22px;
        }

        /* ---------- stats grid ---------- */
        .pbs-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 44px;
        }
        .pbs-stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border: 1px solid rgba(255,200,100,0.22);
          border-radius: 12px;
          padding: 26px 24px;
          background: rgba(255,255,255,0.035);
        }
        .pbs-stat-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 36px;
          line-height: 1;
          color: #ffc864;
        }
        .pbs-stat-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: #7f97b1;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .pbs { padding: 60px 7%; }
          .pbs-stat { padding: 20px 18px; }
          .pbs-stat-num { font-size: 30px; }
        }
        @media (max-width: 768px) {
          .pbs { padding: 48px 5%; }
          .pbs-p { font-size: 16px; }
          .pbs-stats { grid-template-columns: 1fr; gap: 14px; }
        }
      `}</style>
    </article>
  );
};

export default PBStory;
