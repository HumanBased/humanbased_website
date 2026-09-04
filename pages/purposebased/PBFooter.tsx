import React from 'react';
import { Link } from 'react-router-dom';
import SocialHub from '../../components/SocialHub';

const PBFooter: React.FC = () => {
  return (
    <footer className="pbf">
      <div className="pbf-grid">
        {/* ---------- LEFT - brand block: logo + wordmark, with legal entity stacked below ---------- */}
        <div className="pbf-brand-block">
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
          </div>

          <div className="pbf-entity">
            <span>By HumanBased</span>
            <span>A Social Enterprise</span>
            <span>Copenhagen</span>
          </div>
        </div>

        {/* ---------- CENTER / RIGHT - link columns ---------- */}
        <div className="pbf-links">
          <div className="pbf-col">
            <div className="pbf-col-head">Product</div>
            <Link to="/purposebased" className="pbf-link">
              Home
            </Link>
            <Link to="/purposebased/library" className="pbf-link">
              Library
            </Link>
            <Link to="/purposebased/how-it-works" className="pbf-link">
              How it works
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

        {/* ---------- FAR RIGHT - social media hub (same as HumanBased footer) ---------- */}
        <div className="pbf-hub">
          <SocialHub size="compact" />
        </div>
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
          <span>© 2025 HumanBased</span>
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
          /* brand · flexible gap (entity sits here) · centered link columns · flexible gap · hub */
          grid-template-columns: auto 1fr auto 1fr auto;
          align-items: start;
          gap: 56px;
        }

        /* ---------- left / brand block - logo + wordmark, entity text stacked below as one unit ---------- */
        .pbf-brand-block {
          grid-column: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          /* nudge the mark/wordmark further left, toward the grid edge */
          margin-left: -10px;
        }
        .pbf-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
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
          font-size: 26px;
          color: #f3e9d6;
          margin: 12px 0 0;
        }

        /* ---------- entity - left-aligned text, sitting directly below the logo/wordmark ---------- */
        .pbf-entity {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          font-size: 13px;
          line-height: 1.6;
          text-align: left;
          color: var(--pb-muted);
          margin-top: 16px;
        }
        .pbf-entity span { display: block; }

        /* ---------- center / link columns (Product + Company, equal spacing between) ---------- */
        .pbf-links {
          grid-column: 3;
          display: grid;
          grid-template-columns: repeat(2, auto);
          gap: 32px 64px;
          justify-content: center;
        }
        .pbf-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .pbf-col-head {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pb-muted);
          margin-bottom: 4px;
          text-align: center;
        }
        .pbf-link {
          font-size: 14px;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .pbf-link:hover { color: var(--pb-gold); }

        /* ---------- far right / social hub ---------- */
        .pbf-hub {
          grid-column: 5;
          justify-self: end;
          align-self: start;
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

        /* ============================================================
           TABLET ≤1024px - 2 columns, hub drops under the link columns
           ============================================================ */
        @media (max-width: 1024px) {
          .pbf-grid {
            grid-template-columns: auto 1fr;
            grid-template-rows: auto auto;
            gap: 40px 48px;
            padding: 60px 7% 0;
          }
          .pbf-brand-block { grid-column: 1; grid-row: 1 / span 2; }
          .pbf-links { grid-column: 2; grid-row: 1; }
          .pbf-hub {
            grid-column: 2;
            grid-row: 2;
            justify-self: start;
          }
          .pbf-legal { margin-top: 44px; padding: 24px 7% 26px; }
        }

        /* ============================================================
           MOBILE ≤768px - single centred column
           ============================================================ */
        @media (max-width: 768px) {
          .pbf-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 48px 5% 0;
            justify-items: center;
            text-align: center;
          }
          .pbf-brand-block { grid-column: 1; grid-row: auto; align-items: center; }
          .pbf-brand { align-items: center; text-align: center; }
          .pbf-mark { width: 64px; height: 64px; }
          .pbf-entity { align-items: center; text-align: center; }
          .pbf-links {
            grid-column: 1;
            grid-row: auto;
            gap: 24px 40px;
            justify-content: center;
          }
          .pbf-col { align-items: center; }
          .pbf-hub {
            grid-column: 1;
            grid-row: auto;
            justify-self: center;
          }
          .pbf-legal { margin-top: 36px; padding: 22px 5% 24px; text-align: center; }
          .pbf-legal-links { justify-content: center; }
          .pbf-legal-row { justify-content: center; gap: 6px 20px; }
        }
      `}</style>
    </footer>
  );
};

export default PBFooter;
