import React from 'react';
import { preload } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';
import AuroraBackground from './components/AuroraBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import ProductsPage from './pages/ProductsPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import BasedTalkLandingPage from './pages/basedtalk/BasedTalkLandingPage';
import BasedTalkPrivacyPage from './pages/basedtalk/BasedTalkPrivacyPage';
import BasedTalkTermsPage from './pages/basedtalk/BasedTalkTermsPage';
import BasedTalkDeleteAccountPage from './pages/basedtalk/BasedTalkDeleteAccountPage';
import BasedTalkDeleteDataPage from './pages/basedtalk/BasedTalkDeleteDataPage';
import PurposeBasedPrivacyPage from './pages/purposebased/PurposeBasedPrivacyPage';
import PurposeBasedTermsPage from './pages/purposebased/PurposeBasedTermsPage';
import PurposeBasedDeleteAccountPage from './pages/purposebased/PurposeBasedDeleteAccountPage';
import PurposeBasedDeleteDataPage from './pages/purposebased/PurposeBasedDeleteDataPage';
import PurposeBased from './pages/purposebased';
import siteBg from './assets/images/site-bg.webp';
import { useMotion } from './components/motion/useMotion';
import './components/motion/motion.css';
import './components/editorial.css';
import './components/typography.css';
import './components/twilight.css';
import './components/contrast.css';
import TwilightBackground from './components/TwilightBackground';

// Latin-subset files the first screen of every HumanBased page uses. Preloaded here,
// not in index.html, so PurposeBased pages (DM Sans / Cormorant) do not fetch them.
const INTER_FONT = '/fonts/inter-latin.woff2';
const GARAMOND_FONT = '/fonts/cormorant-garamond-latin.woff2';

// `legal` marks the app-store legal pages: they keep the site's previous serif and no
// text halo, so they render exactly as before the typography change.
const MainLayout: React.FC<{ children: React.ReactNode; legal?: boolean }> = ({ children, legal = false }) => {
  preload(INTER_FONT, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  if (!legal) preload(GARAMOND_FONT, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  return (
    <div className={legal ? 'hb-legal' : 'hb-site'}>
      {/* App-store legal pages keep the original fixed starfield image; every other
          HumanBased page uses the twilight gradient + CSS starfield inside the page
          wrapper below. */}
      {legal && (
        <div className="fixed inset-0 z-[-1]">
          <div
            className="absolute inset-0 opacity-100 animate-star-drift"
            style={{
              backgroundImage: `url(${siteBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          {/* Dark Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#050509]/70" />
        </div>
      )}
      {/* Pulled up over the html/body header padding (2 x --nav-height) so the
          aurora also lights the strip under the navigation; without this a
          darker 60px band showed where the nav meets the hero. */}
      <div
        className="relative bg-transparent min-h-screen flex flex-col overflow-hidden"
        style={{ marginTop: 'calc(-2 * var(--nav-height))', paddingTop: 'calc(2 * var(--nav-height))' }}
      >
        {!legal && <TwilightBackground />}
        <AuroraBackground />
        {/* No z-index here: a stacking context would isolate the home hero's
            screen blend from the fixed background it has to merge into. Tree
            order alone keeps this content above the aurora layer. */}
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <main className="bg-transparent text-white">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* BasedTalk Routes (No MainLayout) */}
      <Route path="/apps/basedtalk" element={<BasedTalkLandingPage />} />
      <Route path="/apps/basedtalk/terms" element={<BasedTalkTermsPage />} />

      {/* PurposeBased site-within-a-site (own nav / cosmos / footer, no MainLayout) */}
      <Route path="/purposebased" element={<PurposeBased page="home" />} />
      <Route path="/purposebased/story" element={<PurposeBased page="story" />} />
      <Route path="/purposebased/how-it-works" element={<PurposeBased page="how-it-works" />} />
      <Route path="/purposebased/library" element={<PurposeBased page="library" />} />
      <Route
        path="/purposebased/library/:tradition"
        element={<PurposeBased page="tradition-detail" />}
      />
      <Route path="/purposebased/partners" element={<PurposeBased page="partners" />} />
      <Route
        path="/purposebased/receivedapplication"
        element={<PurposeBased page="receivedapplication" />}
      />

      {/* Google Play required policy pages, served from this repo in HumanBased dark theme */}
      <Route path="/apps/basedtalk/privacy" element={<MainLayout legal><BasedTalkPrivacyPage /></MainLayout>} />
      <Route path="/apps/purposebased/privacy" element={<MainLayout legal><PurposeBasedPrivacyPage /></MainLayout>} />
      <Route path="/apps/purposebased/terms" element={<MainLayout legal><PurposeBasedTermsPage /></MainLayout>} />
      <Route path="/apps/purposebased/delete-account" element={<MainLayout legal><PurposeBasedDeleteAccountPage /></MainLayout>} />
      <Route path="/apps/purposebased/delete-data" element={<MainLayout legal><PurposeBasedDeleteDataPage /></MainLayout>} />
      <Route path="/apps/basedtalk/delete-account" element={<MainLayout legal><BasedTalkDeleteAccountPage /></MainLayout>} />
      <Route path="/apps/basedtalk/delete-data" element={<MainLayout legal><BasedTalkDeleteDataPage /></MainLayout>} />

      {/* Main Site Routes (Wrapped in MainLayout) */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
      <Route path="/process" element={<MainLayout><ProcessPage /></MainLayout>} />
      <Route path="/products" element={<MainLayout><ProductsPage /></MainLayout>} />
      <Route path="/legal" element={<MainLayout><LegalPage /></MainLayout>} />
      <Route path="/privacy" element={<MainLayout><PrivacyPage /></MainLayout>} />
      
      {/* Unknown URLs: real 404 page (Vercel serves the prerendered dist/404.html with status 404) */}
      <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
    </Routes>
  );
};

const MotionMount: React.FC = () => {
  useMotion();
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <MotionMount />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
