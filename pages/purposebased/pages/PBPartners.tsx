import React from 'react';
import { Link } from 'react-router-dom';

const section: React.CSSProperties = {
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '110px 40px',
};

const slot: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '120px',
  color: '#8fa8c4',
  fontSize: '13px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
};

const PBPartners: React.FC = () => {
  return (
    <section style={section}>
      <p
        style={{
          fontSize: '11px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#ffc864',
          marginBottom: '18px',
        }}
      >
        Partners
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant', Georgia, serif",
          fontWeight: 500,
          fontSize: 'clamp(34px, 5vw, 52px)',
          color: '#f3e9d6',
          marginBottom: '16px',
        }}
      >
        The people we build with
      </h1>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#cadcf0', maxWidth: '620px', marginBottom: '44px' }}>
        Placeholder intro. This page will introduce the organisations and individuals collaborating on
        PurposeBased.
      </p>

      <div
        style={{
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          marginBottom: '56px',
        }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} style={slot}>
            Partner logo {i + 1}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <a href="mailto:hello@humanbased.org" className="pb-btn-solid">
          Become a partner
        </a>
        <Link to="/purposebased/story" className="pb-btn">
          Read our story
        </Link>
      </div>
    </section>
  );
};

export default PBPartners;
