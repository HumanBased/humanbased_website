import React from 'react';

// Site-level background for the HumanBased pages: a document-height gradient and
// three tiled star layers (components/twilight.css). Parallax comes from the existing
// motion engine (data-parallax): far stars shift least, near ones most, clamped to
// +/-160px; under prefers-reduced-motion the layers stay put.
const TwilightBackground: React.FC = () => (
  <>
    <div className="hb-twilight" aria-hidden="true" />
    <div className="hb-stars hb-stars--small" data-parallax="-0.04" aria-hidden="true" />
    <div className="hb-stars hb-stars--medium" data-parallax="-0.09" aria-hidden="true" />
    <div className="hb-stars hb-stars--large" data-parallax="-0.16" aria-hidden="true" />
  </>
);

export default TwilightBackground;
