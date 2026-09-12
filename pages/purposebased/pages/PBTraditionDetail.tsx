import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import { TRADITIONS } from './PBLibrary';

const PB_OG_IMAGE = 'https://humanbased.org/images/pb-mockup.png';

const firstSentences = (text: string, count: number): string => {
  const parts = text.split(/(?<=[.?!])\s+/).slice(0, count);
  return parts.join(' ');
};

const PBTraditionDetail: React.FC = () => {
  const { tradition } = useParams<{ tradition: string }>();
  const entry = TRADITIONS.find((t) => t.slug === tradition);

  const title = entry ? `PurposeBased | ${entry.title}` : 'PurposeBased | The Library';
  const description = entry
    ? firstSentences(entry.copy, 3)
    : 'Explore the traditions that shape your purpose blueprint.';
  const url = `https://humanbased.org/purposebased/library/${tradition ?? ''}`;

  usePageSeo({
    title,
    description,
    canonical: url,
    og: {
      title,
      description,
      image: PB_OG_IMAGE,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: PB_OG_IMAGE,
    },
  });

  if (!entry) {
    return <Navigate to="/purposebased/library" replace />;
  }

  return (
    <section className="pbtd">
      <div className="pbtd-content">
        <h1 className="pbtd-title">{entry.title}</h1>

        <div className="pbtd-card">
          {entry.img ? (
            <img src={entry.img} alt={entry.title} className="pbtd-card-img" />
          ) : (
            <div className="pbtd-card-placeholder" />
          )}
        </div>

        <Link to="/purposebased/library" className="pbtd-back">
          ← Back to Library
        </Link>

        <p className="pbtd-body">{entry.copy}</p>
      </div>

      <style>{`
        .pbtd {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          display: block;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        .pbtd-content {
          max-width: 640px;
          margin: 0 auto;
          padding: 72px 2rem 96px;
        }
        .pbtd-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 28px;
        }

        /* Compact framed artwork - same card treatment as the library grid. */
        .pbtd-card {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 16 / 9;
          margin: 0 auto 28px;
          border-radius: 12px;
          border: 0.5px solid rgba(255,200,100,0.22);
          background: linear-gradient(135deg, rgba(255,200,100,0.07), rgba(255,255,255,0.025));
          overflow: hidden;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .pbtd-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pbtd-card-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,100,0.12), rgba(10,22,40,0.6));
        }

        .pbtd-back {
          display: inline-block;
          font-size: 13px;
          color: var(--pb-gold);
          text-decoration: none;
          margin-bottom: 1.75rem;
        }
        .pbtd-back:hover { opacity: 0.8; }
        .pbtd-body {
          font-size: 20px;
          line-height: 1.75;
          color: var(--pb-text);
          margin: 0;
        }

        @media (max-width: 768px) {
          .pbtd-content { padding: 48px 1.25rem 64px; }
          .pbtd-card { max-width: 100%; }
          .pbtd-body { font-size: 18px; }
        }
      `}</style>
    </section>
  );
};

export default PBTraditionDetail;
