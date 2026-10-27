import React, { lazy, Suspense } from 'react';
import { preload } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';
import AuroraBackground from './components/AuroraBackground';
import siteBg from './assets/images/site-bg.webp';
import { useMotion } from './components/motion/useMotion';
import './components/motion/motion.css';
import './components/editorial.css';
import './components/typography.css';
import './components/twilight.css';
import './components/contrast.css';
import TwilightBackground from './components/TwilightBackground';
import Analytics from './components/Analytics';

// Every page is its own chunk, so a visitor downloads the shared shell plus the one
// page they opened. scripts/prerender.mjs writes a modulepreload link for that page's
// chunks into each static HTML file, so the chunk loads in parallel with this entry
// script instead of after it. The single null-fallback Suspense boundary in AppRoutes
// is deliberate: during hydration the prerendered markup stays on screen until the
// chunk arrives, and router navigations run in a transition, which keeps the previous
// page up until the next one is ready. scripts/prerender.mjs adds the matching
// <!--$--> ... <!--/$--> markers around #root's content, because it serialises a
// client-rendered DOM and React needs them to hydrate a Suspense boundary.
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const BasedTalkLandingPage = lazy(() => import('./pages/basedtalk/BasedTalkLandingPage'));
const BasedTalkPrivacyPage = lazy(() => import('./pages/basedtalk/BasedTalkPrivacyPage'));
const BasedTalkTermsPage = lazy(() => import('./pages/basedtalk/BasedTalkTermsPage'));
const BasedTalkDeleteAccountPage = lazy(() => import('./pages/basedtalk/BasedTalkDeleteAccountPage'));
const BasedTalkDeleteDataPage = lazy(() => import('./pages/basedtalk/BasedTalkDeleteDataPage'));
const PurposeBasedPrivacyPage = lazy(() => import('./pages/purposebased/PurposeBasedPrivacyPage'));
const PurposeBasedTermsPage = lazy(() => import('./pages/purposebased/PurposeBasedTermsPage'));
const PurposeBasedSupportPage = lazy(() => import('./pages/purposebased/PurposeBasedSupportPage'));
const PurposeBasedDeleteAccountPage = lazy(() => import('./pages/purposebased/PurposeBasedDeleteAccountPage'));
const PurposeBasedDeleteDataPage = lazy(() => import('./pages/purposebased/PurposeBasedDeleteDataPage'));
const PurposeBased = lazy(() => import('./pages/purposebased'));

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
    <Suspense fallback={null}>
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
      <Route path="/apps/purposebased/support" element={<MainLayout legal><PurposeBasedSupportPage /></MainLayout>} />
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
    </Suspense>
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
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
