import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';

// PurposeBased — The Library.
// Seven traditions that shaped human meaning. Big image-left/text-right cards
// on desktop, image-top/text-below on mobile. Each card opens its own detail page.

export interface Tradition {
  slug: string;
  title: string;
  copy: string;
  img?: string;
}

export const TRADITIONS: Tradition[] = [
  {
    slug: 'ikigai',
    title: 'Ikigai',
    copy:
      "The reason for being. Purpose found at the intersection of what you love, what you're good at, what the world needs, and what sustains you. It's the convergence point where passion meets skill, demand meets reward.",
    img: '/images/library/ikigai.png',
  },
  {
    slug: 'dharma',
    title: 'Dharma',
    copy:
      "Your sacred duty and purpose in life. From Hindu and Buddhist philosophy: the cosmic law and order, and your role in maintaining it. Dharma isn't imposed—it's discovered through understanding your nature, talents, and the needs of your community.",
    img: '/images/library/dharma.png',
  },
  {
    slug: 'thelema',
    title: 'Thelema',
    copy:
      "Do what thou wilt shall be the whole of the Law. From Aleister Crowley's magical philosophy: true will is not selfish desire, but your authentic purpose aligned with the universe. It's about discovering and living your genuine nature, unbound by external expectations.",
    img: '/images/library/thelema.png',
  },
  {
    slug: 'dao',
    title: 'Dao',
    copy:
      'The way or path. From Chinese philosophy: the underlying flow of the universe. Your purpose is found by understanding your place within this flow—not by forcing, but by moving with what naturally wants to happen through you.',
    img: '/images/library/dao.png',
  },
  {
    slug: 'eudaimonia',
    title: 'Eudaimonia',
    copy:
      "Flourishing through virtue. From Aristotle's ethics: happiness is not pleasure, but the actualization of your highest potential. Purpose is the ongoing practice of excellence, the development of your capabilities in service of a meaningful life.",
    img: '/images/library/eudaimonia.png',
  },
  {
    slug: 'magnum-opus',
    title: 'Magnum Opus',
    copy:
      "Your 'Great Work.' From classical and alchemical tradition: the fullest expression of your creative, intellectual, and life capacity. Not simply a career milestone or résumé builder, but the defining work you bring into the world. It is the long-term channeling of your core energy into something meaningful that can outlast you.",
  },
  {
    slug: 'logotherapy',
    title: 'Logotherapy',
    copy:
      "The will to meaning. From Viktor Frankl's existential framework: the search for meaning as a fundamental human drive, beyond pleasure or power. It starts from the idea that life can retain meaning even in difficult circumstances. Purpose is discovered through responsibility, service, relationships, and the challenges we choose to engage with.",
  },
];

const PB_URL = 'https://humanbased.org/purposebased';
const LIBRARY_URL = 'https://humanbased.org/purposebased/library';
const PB_OG_IMAGE = 'https://humanbased.org/images/pb-mockup.png';

const PBLibrary: React.FC = () => {
  usePageSeo({
    title: 'PurposeBased | 7 Traditions of Purpose',
    description:
      'Explore 7 philosophical and spiritual traditions — Ikigai, Dharma, Thelema, Dao, Eudaimonia, Magnum Opus, Logotherapy — that inform your purpose blueprint.',
    canonical: LIBRARY_URL,
    og: {
      title: 'PurposeBased | 7 Traditions of Purpose',
      description:
        'Explore 7 philosophical and spiritual traditions — Ikigai, Dharma, Thelema, Dao, Eudaimonia, Magnum Opus, Logotherapy — that inform your purpose blueprint.',
      image: PB_OG_IMAGE,
      url: LIBRARY_URL,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PurposeBased | 7 Traditions of Purpose',
      description:
        'Explore 7 philosophical and spiritual traditions that inform your purpose blueprint.',
      image: PB_OG_IMAGE,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PurposeBased', item: PB_URL },
        { '@type': 'ListItem', position: 2, name: 'The Library', item: LIBRARY_URL },
      ],
    },
  });

  return (
    <section className="pbl">
      {/* ============ HERO ============ */}
      <header className="pbl-hero">
        <p className="pbl-label">The Library</p>
        <h1 className="pbl-h1">Seven traditions that shaped human meaning</h1>
      </header>

      {/* ============ TRADITION CARDS ============ */}
      <div className="pbl-grid">
        {TRADITIONS.map((t) => (
          <Link key={t.slug} to={`/purposebased/library/${t.slug}`} className="pbl-card">
            <div className="pbl-card-img">
              {t.img ? (
                <img src={t.img} alt={t.title} className="pbl-card-img-el" />
              ) : (
                <span className="pbl-card-img-note">{t.title}</span>
              )}
            </div>
            <div className="pbl-card-text">
              <h3 className="pbl-card-title">{t.title}</h3>
              <p className="pbl-card-body">{t.copy}</p>
              <span className="pbl-card-link">Explore</span>
            </div>
          </Link>
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
          gap: 28px;
          grid-template-columns: repeat(2, 1fr);
        }
        .pbl-card {
          display: flex;
          flex-direction: row;
          text-decoration: none;
          color: inherit;
          background: linear-gradient(135deg, rgba(255,200,100,0.07), rgba(255,255,255,0.025));
          border: 0.5px solid rgba(255,200,100,0.22);
          border-radius: 12px;
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
          width: 50%;
          flex-shrink: 0;
          aspect-ratio: 1 / 1;
          background: rgba(255,255,255,0.03);
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
          font-size: 22px;
          color: var(--pb-muted);
          text-align: center;
          padding: 0 16px;
        }
        .pbl-card-text {
          flex: 1;
          min-width: 0;
          padding: 28px 28px 26px;
          display: flex;
          flex-direction: column;
        }
        .pbl-card-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: 20px;
          color: #ffffff;
          margin: 0 0 12px;
        }
        .pbl-card-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--pb-text);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pbl-card-link {
          margin-top: 1.5rem;
          font-size: 13px;
          color: var(--pb-gold);
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .pbl { padding: 60px 7% 80px; }
        }
        @media (max-width: 768px) {
          .pbl { padding: 48px 5% 64px; }
          .pbl-hero { margin-bottom: 40px; }
          .pbl-grid { grid-template-columns: 1fr; gap: 18px; }
          .pbl-card { flex-direction: column; }
          .pbl-card-img { width: 100%; aspect-ratio: 16 / 9; }
          .pbl-card-text { padding: 20px 20px 22px; }
          .pbl-card-body { -webkit-line-clamp: 2; }
          .pbl-card-link { margin-top: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default PBLibrary;
