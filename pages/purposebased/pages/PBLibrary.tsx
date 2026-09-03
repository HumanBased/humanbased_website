import React from 'react';

// PurposeBased — The Library.
// Six traditions that shaped human meaning. Premium glass cards with a top
// image slot (to be filled later) and modular, poetic copy.

const TRADITIONS: { title: string; copy: string; img?: string }[] = [
  {
    title: 'Ikigai',
    copy:
      'From Japanese philosophy: your reason for being. Not career optimization, but the quiet alignment of daily routines, relationships, and community. Where natural skill, daily interest, and effort overlap. The practical execution layer of purpose.',
  },
  {
    title: 'Dharma',
    copy:
      'Eastern wisdom: your personal duty. The distinct obligation dictated by your nature, stage of life, and environment. Not an external rulebook, but an expression of authentic responsibility. Living in alignment with Dharma generates maximum stability and output.',
  },
  {
    title: 'Thelema',
    copy:
      'Your True Will. A 20th-century philosophical system centered on discovering and executing your inherent trajectory. Separates temporary impulses from genuine internal drive. Enables singular, uncompromised direction aligned with your baseline nature.',
  },
  {
    title: 'Dao',
    copy:
      'The unnamable force behind all existence. Not about forcing outcomes, but Wu Wei: operating in harmony with natural dynamics. Working with your underlying psychological momentum. Aligning with your natural baseline allows progress to occur systematically.',
  },
  {
    title: 'Eudaimonia',
    copy:
      'Human flourishing. From ancient Greece: not a feeling, but active practice. Realizing your highest potential through reason, wise choices, and self-actualization. Two pillars: Arete (excellence) and Phronesis (practical wisdom). A lifetime commitment to becoming.',
  },
  {
    title: 'Magnum Opus',
    copy:
      "Your 'Great Work.' From classical and alchemical tradition: the fullest expression of your creative, intellectual, and life capacity. Not simply a career milestone or résumé builder, but the defining work you bring into the world. It is the long-term channeling of your core energy into something meaningful that can outlast you.",
  },
  {
    title: 'Logotherapy',
    copy:
      'The will to meaning. From Viktor Frankl\'s existential framework: the search for meaning as a fundamental human drive, beyond pleasure or power. It starts from the idea that life can retain meaning even in difficult circumstances. Purpose is discovered through responsibility, service, relationships, and the challenges we choose to engage with.',
  },
];

const PBLibrary: React.FC = () => {
  return (
    <section className="pbl">
      {/* ============ HERO ============ */}
      <header className="pbl-hero">
        <p className="pbl-label">The Library</p>
        <h1 className="pbl-h1">Six traditions that shaped human meaning</h1>
      </header>

      {/* ============ TRADITION CARDS ============ */}
      <div className="pbl-grid">
        {TRADITIONS.map((t) => (
          <article key={t.title} className="pbl-card">
            <div className="pbl-card-img">
              {t.img ? (
                <img src={t.img} alt={t.title} className="pbl-card-img-el" />
              ) : (
                <span className="pbl-card-img-note">Image to come</span>
              )}
            </div>
            <div className="pbl-card-text">
              <h3 className="pbl-card-title">{t.title}</h3>
              <p className="pbl-card-body">{t.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .pbl {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          display: block;
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 8% 96px;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- hero ---------- */
        .pbl-hero { max-width: 820px; margin-bottom: 56px; }
        .pbl-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          /* 4x the base label size, fluid */
          font-size: clamp(22px, 4.6vw, 44px);
          line-height: 1.15;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 20px;
        }
        .pbl-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(32px, 5vw, 50px);
          line-height: 1.15;
          color: #ffffff;
          margin: 0;
        }

        /* ---------- grid ---------- */
        .pbl-grid {
          display: grid;
          gap: 22px;
          grid-template-columns: repeat(4, 1fr);
        }
        .pbl-card {
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, rgba(255,200,100,0.07), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,200,100,0.22);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .pbl-card:hover {
          border-color: rgba(255,200,100,0.5);
          transform: translateY(-4px);
        }
        .pbl-card-img {
          position: relative;
          aspect-ratio: 16 / 9;
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,200,100,0.16);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pbl-card-img-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pbl-card-img-note {
          font-family: 'Cormorant', Georgia, serif;
          font-style: italic;
          font-size: 14px;
          color: var(--pb-muted);
        }
        .pbl-card-text { padding: 24px 24px 28px; }
        .pbl-card-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 12px;
        }
        .pbl-card-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--pb-text);
          margin: 0;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .pbl { padding: 60px 7% 80px; }
          .pbl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .pbl { padding: 48px 5% 64px; }
          .pbl-hero { margin-bottom: 40px; }
          .pbl-grid { grid-template-columns: 1fr; gap: 16px; }
          .pbl-card-text { padding: 22px 20px 24px; }
        }
      `}</style>
    </section>
  );
};

export default PBLibrary;
