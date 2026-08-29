import React from 'react';
import { Link } from 'react-router-dom';

const SOCIALS: { name: string; url: string; path: string }[] = [
  {
    name: 'Instagram',
    url: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'LinkedIn',
    url: '#',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'Facebook',
    url: '#',
    path: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.493 4.373-4.493 1.243 0 2.312.092 2.623.134v3.042h-1.801c-1.412 0-1.685.671-1.685 1.655v2.173h3.368l-.438 3.403h-2.93v8.74h6.101c.732 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z',
  },
  {
    name: 'TikTok',
    url: '#',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23.84-.13 1.78.29 2.51.39.75 1.04 1.31 1.86 1.57.9.32 1.91.21 2.72-.23.83-.44 1.42-1.26 1.56-2.17.05-.28.07-.56.07-.84.02-4.45-.01-8.9.03-13.35z',
  },
];

const colHeadStyle: React.CSSProperties = {
  fontSize: '11px',
  letterSpacing: '1.6px',
  textTransform: 'uppercase',
  color: '#8fa8c4',
  marginBottom: '16px',
};

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <div style={colHeadStyle}>{title}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>{children}</div>
  </div>
);

const OrbitHub: React.FC = () => (
  <div style={{ position: 'relative', width: '154px', height: '154px', marginTop: '24px' }}>
    <div
      style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(255,200,100,0.16)' }}
    />
    <div
      style={{ position: 'absolute', inset: '24px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)' }}
    />

    <div
      className="pb-font-serif"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50px',
        height: '50px',
        marginTop: '-25px',
        marginLeft: '-25px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(255,200,100,0.2), rgba(255,200,100,0.06))',
        border: '1px solid rgba(255,200,100,0.5)',
        boxShadow: '0 0 16px rgba(255,200,100,0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
      }}
    >
      <img
        src="/images/hb-logo.png"
        alt="HumanBased"
        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.style.display = 'none';
          const fallback = t.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Cormorant,serif', fontSize: '18px', color: '#ffc864', fontWeight: 600 }}>H</span>
        <span
          style={{
            fontFamily: 'Cormorant,serif',
            fontSize: '10px',
            color: 'rgba(255,200,100,0.6)',
            letterSpacing: '2px',
          }}
        >
          B
        </span>
      </div>
    </div>

    <div className="pb-orbit-spin" style={{ position: 'absolute', inset: 0 }}>
      {SOCIALS.map((s, i) => {
        const angle = i * (360 / SOCIALS.length);
        return (
          <div
            key={s.name}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '32px',
              height: '32px',
              marginTop: '-16px',
              marginLeft: '-16px',
              transform: `rotate(${angle}deg) translateX(59px) rotate(-${angle}deg)`,
            }}
          >
            <div className="pb-orbit-spin-rev">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  display: 'flex',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  color: '#cadcf0',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>

    <style>{`
      @keyframes pb-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes pb-orbit-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      .pb-orbit-spin { animation: pb-orbit 34s linear infinite; }
      .pb-orbit-spin-rev { animation: pb-orbit-rev 34s linear infinite; }
    `}</style>
  </div>
);

const PBFooter: React.FC = () => {
  return (
    <footer style={{ background: '#08182a', color: '#cadcf0', position: 'relative', zIndex: 10 }}>
      <div className="pbf-grid">
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/images/pb-logo.png"
              alt="PurposeBased"
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="pb-font-serif" style={{ fontSize: '22px', fontWeight: 500, color: '#f3e9d6' }}>
              PurposeBased
            </span>
          </div>
          <p style={{ fontSize: '13px', color: '#cadcf0', marginTop: '14px', maxWidth: '240px', lineHeight: 1.6 }}>
            By HumanBased, a Copenhagen Social Enterprise
          </p>
          <OrbitHub />
        </div>

        <FooterColumn title="Product">
          <Link to="/purposebased" className="pb-foot-link">
            Home
          </Link>
          <Link to="/purposebased/library" className="pb-foot-link">
            Library
          </Link>
          <Link to="/purposebased#pricing" className="pb-foot-link">
            Pricing
          </Link>
        </FooterColumn>

        <FooterColumn title="Company">
          <Link to="/purposebased/story" className="pb-foot-link">
            Story
          </Link>
          <Link to="/purposebased/partners" className="pb-foot-link">
            Partners
          </Link>
          <a
            href="https://humanbased.org"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-foot-link"
          >
            HumanBased
          </a>
        </FooterColumn>

        <FooterColumn title="Legal">
          <Link to="/apps/purposebased/privacy" className="pb-foot-link">
            Privacy policy
          </Link>
          <Link to="/apps/purposebased/terms" className="pb-foot-link">
            Terms
          </Link>
          <Link to="/apps/purposebased/delete-account" className="pb-foot-link">
            Delete account
          </Link>
          <Link to="/apps/purposebased/delete-data" className="pb-foot-link">
            Delete data
          </Link>
        </FooterColumn>
      </div>

      <div className="pbf-bottom">
        <span>© 2026 HumanBased ApS</span>
        <span>Coding for humanity</span>
      </div>

      <style>{`
        .pbf-grid {
          max-width: 1180px;
          margin: 0 auto;
          padding: 64px 40px 0;
          display: grid;
          gap: 44px;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .pbf-bottom {
          max-width: 1180px;
          margin: 56px auto 0;
          padding: 24px 40px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 12px;
          color: #8fa8c4;
        }

        /* ---------- tablet ---------- */
        @media (max-width: 1024px) {
          .pbf-grid { padding: 56px 7% 0; gap: 36px; }
          .pbf-bottom { margin-top: 44px; padding: 22px 7%; }
        }

        /* ---------- mobile ---------- */
        @media (max-width: 768px) {
          .pbf-grid {
            padding: 48px 5% 0;
            gap: 32px;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
          .pbf-bottom { margin-top: 36px; padding: 20px 5%; }
        }

        @media (max-width: 480px) {
          .pbf-grid { grid-template-columns: 1fr; }
          .pbf-bottom { justify-content: flex-start; }
        }
      `}</style>
    </footer>
  );
};

export default PBFooter;
