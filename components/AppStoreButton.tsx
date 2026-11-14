import React from 'react';
import { APP_LIVE, APP_STORE_LABEL, APP_STORE_URL } from '../config/site';

// The one App Store button for the whole site. Until APP_STORE_URL is set in
// config/site.ts it is a quiet, non-clickable label ("Coming to the App Store").
// Once the link is there, every instance becomes a real link.
const AppStoreButton: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) =>
  APP_LIVE ? (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={className} style={{ textDecoration: 'none', ...style }}>
      {APP_STORE_LABEL}
    </a>
  ) : (
    <span className={className} style={{ cursor: 'default', ...style }}>
      {APP_STORE_LABEL}
    </span>
  );

export default AppStoreButton;
