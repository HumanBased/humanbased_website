import React from 'react';
import PBCosmos from './PBCosmos';
import PBNav from './PBNav';
import PBFooter from './PBFooter';
import PBHome from './pages/PBHome';
import PBStory from './pages/PBStory';
import PBLibrary from './pages/PBLibrary';
import PBPartners from './pages/PBPartners';
import PBSeeHowItWorks from './pages/PBSeeHowItWorks';
import PBFormspreeThankYou from './pages/PBFormspreeThankYou';

export type PBPage = 'home' | 'story' | 'library' | 'partners' | 'how-it-works' | 'thank-you';

const PAGES: Record<PBPage, React.FC> = {
  home: PBHome,
  story: PBStory,
  library: PBLibrary,
  partners: PBPartners,
  'how-it-works': PBSeeHowItWorks,
  'thank-you': PBFormspreeThankYou,
};

interface PurposeBasedProps {
  page?: PBPage;
}

// Shell for the /purposebased site-within-a-site. Renders the shared cosmos
// backdrop, nav and footer, plus whichever sub-page is active.
const PurposeBased: React.FC<PurposeBasedProps> = ({ page = 'home' }) => {
  const ActivePage = PAGES[page];

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
        style={{
          position: 'relative',
          zIndex: 10,
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
