import React from 'react';
import { preload } from 'react-dom';
import PBCosmos from './PBCosmos';
import PBNav from './PBNav';
import PBFooter from './PBFooter';
import PBHome from './pages/PBHome';
import PBStory from './pages/PBStory';
import PBLibrary from './pages/PBLibrary';
import PBTraditionDetail from './pages/PBTraditionDetail';
import PBPartners from './pages/PBPartners';
import PBSeeHowItWorks from './pages/PBSeeHowItWorks';
import PBFormspreeThankYou from './pages/PBFormspreeThankYou';

export type PBPage =
  | 'home'
  | 'story'
  | 'library'
  | 'tradition-detail'
  | 'partners'
  | 'how-it-works'
  | 'receivedapplication';

const PAGES: Record<PBPage, React.FC> = {
  home: PBHome,
  story: PBStory,
  library: PBLibrary,
  'tradition-detail': PBTraditionDetail,
  partners: PBPartners,
  'how-it-works': PBSeeHowItWorks,
  receivedapplication: PBFormspreeThankYou,
};

const PB_FONT_FILES = [
  'https://fonts.gstatic.com/s/cormorant/v24/H4clBXOCl9bbnla_nHIq75u9qKS-aw.woff2',
  'https://fonts.gstatic.com/s/cormorant/v24/H4cjBXOCl9bbnla_nHIq6qu_oqOcaThr.woff2',
  'https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2',
];

interface PurposeBasedProps {
  page?: PBPage;
}

// Shell for the /purposebased site-within-a-site. Renders the shared cosmos
// backdrop, nav and footer, plus whichever sub-page is active.
const PurposeBased: React.FC<PurposeBasedProps> = ({ page = 'home' }) => {
  const ActivePage = PAGES[page];

  // Fetch the display and body faces in parallel with the Google Fonts CSS, so they
  // are usually in place at first paint and the swap from the metric-matched
  // fallback (public/index.css) moves nothing. The URLs are the latin-subset files
  // Chrome requests from the CSS in index.html; if Google rotates them the preload
  // simply stops matching (a wasted request, no breakage), so re-check after any
  // font URL change. Hoisted into <head> of PurposeBased pages only.
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
