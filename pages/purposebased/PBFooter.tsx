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

// The orbit hub keeps its original 154px geometry. Responsive sizing is done
// by scaling the whole thing from its top-left corner, with the wrapper sized
// to the scaled result so it does not leave a hole in the grid.
const OrbitHub: React.FC = () => (
  <div className="pbf-orbit-wrap">
    <div className="pbf-orbit">
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
    </div>
  </div>
);

const PBFooter: React.FC = () => {
  return (
    <footer className="pbf">
      <div className="pbf-grid">
        {/* ---------- LEFT — brand ---------- */}
        <div className="pbf-brand">
          <img
            src="/images/pb-logo.png"
            alt="PurposeBased"
            className="pbf-mark"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <p className="pbf-wordmark">PurposeBased</p>
          <p className="pbf-tagline">By HumanBased, a Copenhagen Social Enterprise</p>

          <div className="pbf-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="pbf-social">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* ---------- MIDDLE — link columns ---------- */}
        <div className="pbf-links">
          <div className="pbf-col">
            <div className="pbf-col-head">Product</div>
            <Link to="/purposebased" className="pbf-link">
              Home
            </Link>
            <Link to="/purposebased/library" className="pbf-link">
              Library
            </Link>
            <Link to="/purposebased#pricing" className="pbf-link">
              Pricing
            </Link>
            <Link to="/purposebased#features" className="pbf-link">
              Features
            </Link>
          </div>

          <div className="pbf-col">
            <div className="pbf-col-head">Company</div>
            <Link to="/purposebased/story" className="pbf-link">
              Story
            </Link>
            <Link to="/purposebased/partners" className="pbf-link">
              Partners
            </Link>
            <a href="https://humanbased.org" target="_blank" rel="noopener noreferrer" className="pbf-link">
              HumanBased
            </a>
            <Link to="/about" className="pbf-link">
              About
            </Link>
          </div>
        </div>

        {/* ---------- RIGHT — orbit hub ---------- */}
        <OrbitHub />
      </div>

      <div className="pbf-legal">
        <div className="pbf-legal-links">
          <Link to="/apps/purposebased/privacy" className="pbf-legal-link">
            Privacy policy
          </Link>
          <Link to="/apps/purposebased/terms" className="pbf-legal-link">
            Terms
          </Link>
          <Link to="/apps/purposebased/delete-account" className="pbf-legal-link">
            Delete account
          </Link>
          <Link to="/apps/purposebased/delete-data" className="pbf-legal-link">
            Delete data
          </Link>
        </div>
        <div className="pbf-legal-row">
          <span>© 2026 HumanBased ApS</span>
          <span>Coding for humanity</span>
        </div>
      </div>

      <style>{`
        .pbf {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #8fa8c4;
          background: #08182a;
          color: var(--pb-text);
          position: relative;
          z-index: 10;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- grid ---------- */
        .pbf-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px 0;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr;
          gap: 80px;
        }

        /* ---------- left / brand ---------- */
        .pbf-mark {
          display: block;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: contain;
        }
        .pbf-wordmark {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 28px;
          color: #f3e9d6;
          margin: 12px 0 0;
        }
        .pbf-tagline {
          font-size: 13px;
          line-height: 1.6;
          color: var(--pb-muted);
          max-width: 260px;
          margin: 8px 0 0;
        }
        .pbf-socials {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 22px;
        }
        .pbf-social {
          font-size: 13px;
          color: var(--pb-text);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pbf-social:hover { color: var(--pb-gold); }

        /* ---------- middle / link columns ---------- */
        .pbf-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .pbf-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pbf-col-head {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pb-muted);
          margin-bottom: 4px;
        }
        .pbf-link {
          font-size: 14px;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pbf-link:hover { color: var(--pb-gold); }

        /* ---------- right / orbit hub ---------- */
        .pbf-orbit-wrap {
          position: relative;
          width: 154px;
          height: 154px;
          justify-self: end;
        }
        .pbf-orbit {
          position: relative;
          width: 154px;
          height: 154px;
          transform-origin: top left;
        }

        /* ---------- legal footer ---------- */
        .pbf-legal {
          max-width: 1200px;
          margin: 56px auto 0;
          padding: 24px 40px 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .pbf-legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 24px;
          margin-bottom: 16px;
        }
        .pbf-legal-link {
          font-size: 12px;
          color: var(--pb-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pbf-legal-link:hover { color: var(--pb-gold); }
        .pbf-legal-row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 12px;
          color: var(--pb-muted);
        }

        /* ---------- orbit animation ---------- */
        @keyframes pb-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pb-orbit-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .pb-orbit-spin { animation: pb-orbit 34s linear infinite; }
        .pb-orbit-spin-rev { animation: pb-orbit-rev 34s linear infinite; }

        /* ============================================================
           TABLET ≤1024px — 2 columns, orbit hub under the link columns
           ============================================================ */
        @media (max-width: 1024px) {
          .pbf-grid {
            grid-template-columns: 1.5fr 1.5fr;
            gap: 48px;
            padding: 60px 7% 0;
          }
          .pbf-brand { grid-column: 1; grid-row: 1; }
          .pbf-links { grid-column: 2; grid-row: 1; }
          .pbf-orbit-wrap {
            grid-column: 2;
            grid-row: 2;
            justify-self: start;
            width: 62px;
            height: 62px;
            margin-top: -24px;
          }
          .pbf-orbit { transform: scale(0.4); }
          .pbf-legal { margin-top: 44px; padding: 24px 7% 26px; }
        }

        /* ============================================================
           MOBILE ≤768px — single centred column
           ============================================================ */
        @media (max-width: 768px) {
          .pbf-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 48px 5% 0;
            justify-items: center;
            text-align: center;
          }
          .pbf-brand {
            grid-column: 1;
            grid-row: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .pbf-mark { width: 60px; height: 60px; }
          .pbf-tagline { max-width: 300px; }
          .pbf-socials { align-items: center; }
          .pbf-links {
            grid-column: 1;
            grid-row: auto;
            gap: 24px 40px;
            justify-items: center;
          }
          .pbf-col { align-items: center; }
          .pbf-orbit-wrap {
            grid-column: 1;
            grid-row: auto;
            justify-self: center;
            width: 47px;
            height: 47px;
            margin-top: 0;
          }
          .pbf-orbit { transform: scale(0.3); }
          .pbf-legal { margin-top: 36px; padding: 22px 5% 24px; text-align: center; }
          .pbf-legal-links { justify-content: center; }
          .pbf-legal-row { justify-content: center; gap: 6px 20px; }
        }
      `}</style>
    </footer>
  );
};

export default PBFooter;
