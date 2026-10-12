import React from 'react';
import { Link } from 'react-router-dom';

// Company facts (location, founding year, CVR) live in the footer only.
// Nothing here may be invented: no clients, logos, testimonials or metrics.
const TrustLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <p className={`ed-trust ${className}`.trim()}>
    <span>
      <Link to="/about">Luis Pereira &amp; Alexina Lesur, Co-founders</Link>
    </span>
  </p>
);

export default TrustLine;
