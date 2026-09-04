import React from 'react';
import { Link } from 'react-router-dom';

// Custom Formspree redirect target for the PB Partner Application.
// Formspree Settings → Redirect → https://humanbased.org/purposebased/receivedapplication
// Same design tokens as PBHome / PBPartners, scoped under .pbty.
const APP_URL = 'https://www.purposebased.app';

const PBFormspreeThankYou: React.FC = () => {
  return (
    <div className="pbty">
      <section className="pbty-sec">
        <div className="pbty-card">
          <p className="pbty-label">Thanks for applying</p>
          <h1 className="pbty-h1">We received your application</h1>
          <p className="pbty-body">
            We&rsquo;re reviewing your application and will be in touch within 48 hours. In the
            meantime, explore PurposeBased and see how the frameworks can guide your audience.
          </p>
          <div className="pbty-cta-row">
            <Link to="/purposebased" className="pbty-btn pbty-btn--solid">
              Explore PurposeBased
            </Link>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pbty-btn pbty-btn--glass"
            >
              Visit the app
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .pbty {
          --pb-gold: #ffc864;
          --pb-navy: #0d1f3c;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          font-family: 'DM Sans', system-ui, sans-serif;
          display: flex;
          min-height: 70vh;
        }

        .pbty-sec {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 96px 10% 110px;
        }

        /* premium glass card */
        .pbty-card {
          position: relative;
          overflow: hidden;
          max-width: 620px;
          width: 100%;
          text-align: center;
          border: 1px solid rgba(255,200,100,0.30);
          border-radius: 18px;
          padding: 56px 52px 52px;
          background: linear-gradient(135deg, rgba(255,200,100,0.10), rgba(255,255,255,0.03));
          box-shadow: 0 24px 64px rgba(0,0,0,0.45), 0 0 32px rgba(255,200,100,0.08), inset 0 1px 0 rgba(255,255,255,0.10);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .pbty-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 20%;
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,200,100,0.7), transparent);
        }

        .pbty-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(22px, 4.6vw, 44px);
          line-height: 1.15;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 22px;
        }
        .pbty-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 40px;
          line-height: 1.2;
          color: #ffffff;
          margin: 0 0 20px;
        }
        .pbty-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--pb-text);
          margin: 0 auto;
          max-width: 460px;
        }

        .pbty-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 34px;
        }
        .pbty-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          padding: 14px 32px;
          border-radius: 8px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pbty-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-15deg);
          transition: left 0.5s ease;
        }
        .pbty-btn:hover::before { left: 120%; }
        .pbty-btn:hover { transform: translateY(-2px); }
        .pbty-btn--solid {
          background: linear-gradient(135deg, rgba(255,200,100,0.92), rgba(220,160,50,0.88));
          border: 1px solid rgba(255,220,130,0.6);
          color: #12283f;
          box-shadow: 0 0 24px rgba(255,200,100,0.18);
        }
        .pbty-btn--glass {
          background: linear-gradient(135deg, rgba(255,200,100,0.14), rgba(255,200,100,0.05));
          border: 1px solid rgba(255,200,100,0.38);
          color: var(--pb-gold);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* ---------- tablet ---------- */
        @media (max-width: 1024px) {
          .pbty-sec { padding: 80px 7% 90px; }
          .pbty-h1 { font-size: 34px; }
        }

        /* ---------- mobile ---------- */
        @media (max-width: 768px) {
          .pbty-sec { padding: 64px 5% 72px; }
          .pbty-card { padding: 40px 26px 36px; border-radius: 14px; }
          .pbty-h1 { font-size: 30px; }
        }

        @media (max-width: 480px) {
          .pbty-cta-row { flex-direction: column; align-self: stretch; }
          .pbty-cta-row .pbty-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default PBFormspreeThankYou;
