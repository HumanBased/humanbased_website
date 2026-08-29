import React from 'react';

const PLACEHOLDER_ITEMS = [
  'Essay — placeholder title one',
  'Guide — placeholder title two',
  'Exercise — placeholder title three',
  'Conversation — placeholder title four',
  'Essay — placeholder title five',
  'Guide — placeholder title six',
];

const PBLibrary: React.FC = () => {
  return (
    <section className="pbl">
      <p className="pbl-label">The Library</p>
      <h1 className="pbl-h1">Readings, prompts and practices</h1>
      <p className="pbl-intro">
        Placeholder intro. The finished library will be a browsable collection of material grouped by
        theme and depth.
      </p>

      <div className="pbl-grid">
        {PLACEHOLDER_ITEMS.map((item) => (
          <div key={item} className="pbl-card">
            <h3 className="pb-font-serif pbl-card-title">{item}</h3>
            <p className="pbl-card-body">Placeholder summary line for this library entry.</p>
          </div>
        ))}
      </div>

      <style>{`
        .pbl {
          display: block;
          max-width: 1180px;
          margin: 0 auto;
          padding: 80px 10%;
        }
        .pbl-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffc864;
          margin: 0 0 18px;
        }
        .pbl-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.15;
          color: #f3e9d6;
          margin: 0 0 16px;
        }
        .pbl-intro {
          font-size: 16px;
          line-height: 1.7;
          color: #cadcf0;
          max-width: 620px;
          margin: 0 0 44px;
        }
        .pbl-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(3, 1fr);
        }
        .pbl-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 26px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .pbl-card:hover {
          border-color: rgba(255,200,100,0.4);
          transform: translateY(-3px);
        }
        .pbl-card-title {
          font-size: 20px;
          color: #f3e9d6;
          margin: 0 0 8px;
        }
        .pbl-card-body {
          font-size: 14px;
          line-height: 1.6;
          color: #cadcf0;
          margin: 0;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .pbl { padding: 60px 7%; }
          .pbl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .pbl { padding: 48px 5%; }
          .pbl-intro { margin-bottom: 32px; }
          .pbl-grid { grid-template-columns: 1fr; gap: 14px; }
          .pbl-card { padding: 22px 20px; }
        }
      `}</style>
    </section>
  );
};

export default PBLibrary;
