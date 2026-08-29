import React from 'react';

const section: React.CSSProperties = {
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '110px 40px',
};

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '14px',
  padding: '26px',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
};

const PLACEHOLDER_ITEMS = [
  'Essay — placeholder title one',
  'Guide — placeholder title two',
  'Exercise — placeholder title three',
  'Conversation — placeholder title four',
  'Essay — placeholder title five',
  'Guide — placeholder title six',
];

const PBLibrary: React.FC = () => {
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
        The Library
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
        Readings, prompts and practices
      </h1>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#cadcf0', maxWidth: '620px', marginBottom: '44px' }}>
        Placeholder intro. The finished library will be a browsable collection of material grouped by
        theme and depth.
      </p>

      <div
        style={{
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
      >
        {PLACEHOLDER_ITEMS.map((item) => (
          <div key={item} style={card}>
            <h3 className="pb-font-serif" style={{ fontSize: '20px', color: '#f3e9d6', marginBottom: '8px' }}>
              {item}
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#cadcf0' }}>
              Placeholder summary line for this library entry.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PBLibrary;
