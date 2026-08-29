import React from 'react';
import { Link } from 'react-router-dom';

const section: React.CSSProperties = {
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '90px 40px',
};

const h2: React.CSSProperties = {
  fontFamily: "'Cormorant', Georgia, serif",
  fontWeight: 500,
  fontSize: '34px',
  color: '#f3e9d6',
  marginBottom: '18px',
};

const body: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.7,
  color: '#cadcf0',
  maxWidth: '620px',
};

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '28px',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
};

const PBHome: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section style={{ ...section, paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#ffc864',
            marginBottom: '20px',
          }}
        >
          A HumanBased Project
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant', Georgia, serif",
            fontWeight: 500,
            fontSize: 'clamp(38px, 6vw, 68px)',
            lineHeight: 1.1,
            color: '#f3e9d6',
            margin: '0 auto 24px',
            maxWidth: '820px',
          }}
        >
          Find the work that was always yours to do.
        </h1>
        <p style={{ ...body, margin: '0 auto 40px', textAlign: 'center' }}>
          PurposeBased is a guided space for people rethinking how they spend their one working life —
          placeholder copy for the finished narrative.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/purposebased/story" className="pb-btn-solid">
            Read the story
          </Link>
          <Link to="/purposebased/library" className="pb-btn">
            Explore the library
          </Link>
        </div>
      </section>

      {/* What it is */}
      <section style={section}>
        <h2 style={h2}>What PurposeBased is</h2>
        <p style={body}>
          Placeholder section. A short explanation of the offering, who it serves, and the change it
          is meant to create will live here.
        </p>
      </section>

      {/* Three pillars */}
      <section style={section}>
        <h2 style={h2}>How it works</h2>
        <div
          style={{
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            marginTop: '8px',
          }}
        >
          {['Reflect', 'Reframe', 'Act'].map((title, i) => (
            <div key={title} style={card}>
              <div
                className="pb-font-serif"
                style={{ fontSize: '24px', color: '#ffc864', marginBottom: '10px' }}
              >
                {`0${i + 1}`}
              </div>
              <h3 className="pb-font-serif" style={{ fontSize: '22px', color: '#f3e9d6', marginBottom: '8px' }}>
                {title}
              </h3>
              <p style={{ ...body, fontSize: '14px' }}>Placeholder description for the {title.toLowerCase()} step.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ ...section, textAlign: 'center' }}>
        <h2 style={{ ...h2, textAlign: 'center' }}>Start where you are</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
          <Link to="/purposebased/partners" className="pb-btn">
            See our partners
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PBHome;
