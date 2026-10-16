import React from 'react';

// Site-level background for the HumanBased pages: one document-height gradient
// (components/twilight.css). The three tiled star layers were removed for a more even
// background; the PurposeBased pages and the app-store legal pages keep their own.
const TwilightBackground: React.FC = () => <div className="hb-twilight" aria-hidden="true" />;

export default TwilightBackground;
