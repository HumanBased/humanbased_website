import React from 'react';
import { Link } from 'react-router-dom';

// Facts already published on the site (TeamBlock, footer, Organization JSON-LD).
// Nothing here may be invented: no clients, logos, testimonials or metrics.
const TrustLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <p className={`ed-trust ${className}`.trim()}>
    <span>Copenhagen, Denmark</span>
    <span>Founded 2025</span>
    <span>CVR DK45998576</span>
    <span>
      <Link to="/about">Luis Pereira &amp; Alexina Lesur, Co-founders</Link>
    </span>
  </p>
);

export default TrustLine;
