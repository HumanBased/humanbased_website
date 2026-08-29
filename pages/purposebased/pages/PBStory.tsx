import React from 'react';

const wrap: React.CSSProperties = {
  maxWidth: '760px',
  margin: '0 auto',
  padding: '110px 40px',
};

const h1: React.CSSProperties = {
  fontFamily: "'Cormorant', Georgia, serif",
  fontWeight: 500,
  fontSize: 'clamp(34px, 5vw, 52px)',
  color: '#f3e9d6',
  marginBottom: '28px',
  lineHeight: 1.15,
};

const p: React.CSSProperties = {
  fontSize: '17px',
  lineHeight: 1.8,
  color: '#cadcf0',
  marginBottom: '22px',
};

const PBStory: React.FC = () => {
  return (
    <article style={wrap}>
      <p
        style={{
          fontSize: '11px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#ffc864',
          marginBottom: '18px',
        }}
      >
        Our Story
      </p>
      <h1 style={h1}>Why we started PurposeBased</h1>
      <p style={p}>
        Placeholder narrative. This page will carry the founding story — the observation that sparked
        the project, the people it is built for, and what HumanBased hopes it becomes.
      </p>
      <p style={p}>
        A second placeholder paragraph covering the approach and the values that shape every decision
        behind the product.
      </p>
      <p style={p}>
        A closing placeholder paragraph inviting the reader into the next chapter.
      </p>
    </article>
  );
};

export default PBStory;
