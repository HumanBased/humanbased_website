import React, { lazy } from 'react';
import { preload } from 'react-dom';
import PBCosmos from './PBCosmos';
import PBNav from './PBNav';
import PBFooter from './PBFooter';

// One chunk per sub-page: /purposebased/ no longer downloads the Partners form, the
// Story page and the rest. The route's chunks are modulepreloaded by the prerendered
// HTML (scripts/prerender.mjs), and the Suspense boundary is in App.tsx.
const PBHome = lazy(() => import('./pages/PBHome'));
const PBStory = lazy(() => import('./pages/PBStory'));
const PBLibrary = lazy(() => import('./pages/PBLibrary'));
const PBTraditionDetail = lazy(() => import('./pages/PBTraditionDetail'));
const PBPartners = lazy(() => import('./pages/PBPartners'));
const PBSeeHowItWorks = lazy(() => import('./pages/PBSeeHowItWorks'));
const PBFormspreeThankYou = lazy(() => import('./pages/PBFormspreeThankYou'));

export type PBPage =
  | 'home'
  | 'story'
  | 'library'
  | 'tradition-detail'
  | 'partners'
  | 'how-it-works'
  | 'receivedapplication';

const PAGES: Record<PBPage, React.ComponentType> = {
  home: PBHome,
  story: PBStory,
  library: PBLibrary,
  'tradition-detail': PBTraditionDetail,
  partners: PBPartners,
  'how-it-works': PBSeeHowItWorks,
  receivedapplication: PBFormspreeThankYou,
};

const PB_FONT_FILES = [
  '/fonts/cormorant-latin.woff2',
  '/fonts/cormorant-latin-italic.woff2',
  '/fonts/dm-sans-latin.woff2',
];

interface PurposeBasedProps {
  page?: PBPage;
}

// Shell for the /purposebased site-within-a-site. Renders the shared cosmos
// backdrop, nav and footer, plus whichever sub-page is active.
const PurposeBased: React.FC<PurposeBasedProps> = ({ page = 'home' }) => {
  const ActivePage = PAGES[page];

  // Fetch the display and body faces up front (self-hosted latin subsets, declared in
  // public/index.css), so they are usually in place at first paint and the swap from
  // the metric-matched fallback moves nothing. Hoisted into <head> of PurposeBased
  // pages only.
  PB_FONT_FILES.forEach((href) => preload(href, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }));

  return (
    <div
      className="pb-font-sans"
      style={{
        position: 'relative',
        minHeight: '100vh',
        color: '#cadcf0',
        overflowX: 'hidden',
      }}
    >
      <PBCosmos />
      <div
        // No zIndex: it would isolate hero blend modes from the fixed cosmos.
        // Tree order keeps this above PBCosmos (z-index 0).
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <PBNav page={page} />
        <main style={{ flex: 1 }}>
          <ActivePage />
        </main>
        <PBFooter />
      </div>
    </div>
  );
};

export default PurposeBased;
