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
      <div className="pbtd-hero">
        {entry.img ? (
          <img src={entry.img} alt={entry.title} className="pbtd-hero-img" />
        ) : (
          <div className="pbtd-hero-placeholder" />
        )}
        <div className="pbtd-hero-overlay" />
        <div className="pbtd-hero-title-wrap">
          <h1 className="pbtd-hero-title">{entry.title}</h1>
        </div>
      </div>

      <div className="pbtd-content">
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

        .pbtd-hero {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
        }
        .pbtd-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pbtd-hero-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,100,0.12), rgba(10,22,40,0.6));
        }
        .pbtd-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,18,32,0.85) 0%, rgba(8,18,32,0.15) 55%, transparent 100%);
        }
        .pbtd-hero-title-wrap {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 8% 6%;
        }
        .pbtd-hero-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(36px, 6vw, 72px);
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
        }

        .pbtd-content {
          max-width: 640px;
          margin: 0 auto;
          padding: 2rem;
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
          font-size: 16px;
          line-height: 1.7;
          color: var(--pb-text);
          margin: 0;
        }

        @media (max-width: 768px) {
          .pbtd-content { padding: 1.5rem 1.25rem 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default PBTraditionDetail;
