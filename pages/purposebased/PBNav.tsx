import React from 'react';
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
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '22px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <Link
          to="/purposebased"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: '1px dashed #ffc864',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            className="pb-font-serif"
            style={{ fontSize: '22px', fontWeight: 500, color: '#f3e9d6', letterSpacing: '0.5px' }}
          >
            PurposeBased
          </span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          {LINKS.map((l) => {
            const active = l.page === page;
            return (
              <Link
                key={l.page}
                to={l.to}
                className="pb-nav-link"
                style={{
                  fontSize: '14px',
                  textDecoration: 'none',
                  paddingBottom: '3px',
                  color: active ? '#ffc864' : '#cadcf0',
                  borderBottom: active ? '1px solid #ffc864' : '1px solid transparent',
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default PBNav;
