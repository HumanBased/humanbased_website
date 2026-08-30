import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { PBPage } from './index';

const LINKS: { label: string; page: PBPage; to: string }[] = [
  { label: 'Home', page: 'home', to: '/purposebased' },
  { label: 'Story', page: 'story', to: '/purposebased/story' },
  { label: 'Library', page: 'library', to: '/purposebased/library' },
  { label: 'Partners', page: 'partners', to: '/purposebased/partners' },
];

interface PBNavProps {
  page: PBPage;
}

const PBNav: React.FC<PBNavProps> = ({ page }) => {
  const [open, setOpen] = useState(false);

  // Close the mobile dropdown whenever the active page changes.
  useEffect(() => {
    setOpen(false);
  }, [page]);

  const renderLinks = () =>
    LINKS.map((l) => (
      <Link
        key={l.page}
        to={l.to}
        className={`pb-nav-link pbn-link${l.page === page ? ' pbn-link--active' : ''}`}
        onClick={() => setOpen(false)}
      >
        {l.label}
      </Link>
    ));

  return (
    <header className="pbn">
      <div className="pbn-bar">
        <Link to="/purposebased" className="pbn-brand" onClick={() => setOpen(false)}>
          <img
            src="/images/pb-logo.png"
            alt="PurposeBased"
            style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="pb-font-serif pbn-word">PurposeBased</span>
        </Link>

        <nav className="pbn-links">{renderLinks()}</nav>

        <button
          type="button"
          className="pbn-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && <nav className="pbn-drop">{renderLinks()}</nav>}

      <style>{`
        .pbn {
          position: sticky;
          top: 0;
          z-index: 20;
          background: transparent;
        }
        .pbn-bar {
          max-width: 1180px;
          margin: 0 auto;
          padding: 22px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .pbn-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .pbn-word {
          font-size: 24px;
          font-weight: 500;
          color: #f3e9d6;
          letter-spacing: 0.5px;
        }
        .pbn-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .pbn-link {
          font-size: 14px;
          text-decoration: none;
          padding-bottom: 3px;
          color: #cadcf0;
          border-bottom: 1px solid transparent;
          transition: color 0.2s ease;
        }
        .pbn-link--active {
          color: #ffc864;
          border-bottom-color: #ffc864;
        }
        .pbn-burger {
          display: none;
          background: none;
          border: 0;
          padding: 4px 6px;
          font-size: 22px;
          line-height: 1;
          color: #ffc864;
          cursor: pointer;
        }
        .pbn-drop { display: none; }

        /* ---------- tablet ---------- */
        @media (max-width: 1024px) {
          .pbn-bar { padding: 18px 7%; }
          .pbn-links { gap: 22px; }
        }

        /* ---------- mobile: hamburger ---------- */
        @media (max-width: 768px) {
          .pbn-bar { padding: 16px 5%; }
          .pbn-links { display: none; }
          .pbn-burger { display: block; }
          .pbn-drop {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
            box-sizing: border-box;
            background: #0a1628;
            padding: 16px;
            border-top: 1px solid rgba(255,200,100,0.18);
            border-bottom: 1px solid rgba(255,200,100,0.18);
            box-shadow: 0 12px 32px rgba(0,0,0,0.45);
          }
          .pbn-drop .pbn-link {
            padding: 13px 4px;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .pbn-drop .pbn-link:last-child { border-bottom: none; }
          .pbn-word { font-size: 20px; }
        }

        @media (max-width: 480px) {
          .pbn-word { font-size: 18px; }
        }
      `}</style>
    </header>
  );
};

export default PBNav;
