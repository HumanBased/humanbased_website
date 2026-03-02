import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';
import AuroraBackground from './components/AuroraBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';
import BasedTalkLandingPage from './pages/basedtalk/BasedTalkLandingPage';
import BasedTalkPrivacyPage from './pages/basedtalk/BasedTalkPrivacyPage';
import BasedTalkTermsPage from './pages/basedtalk/BasedTalkTermsPage';
import siteBg from './assets/images/site-bg.webp.png';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Fixed site background layer */}
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
      <div className="relative bg-transparent min-h-screen flex flex-col overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="bg-transparent text-white">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* BasedTalk Routes (No MainLayout) */}
      <Route path="/apps/basedtalk" element={<BasedTalkLandingPage />} />
      <Route path="/apps/basedtalk/privacy" element={<BasedTalkPrivacyPage />} />
      <Route path="/apps/basedtalk/terms" element={<BasedTalkTermsPage />} />

      {/* Main Site Routes (Wrapped in MainLayout) */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
      <Route path="/process" element={<MainLayout><ProcessPage /></MainLayout>} />
      <Route path="/legal" element={<MainLayout><LegalPage /></MainLayout>} />
      <Route path="/privacy" element={<MainLayout><PrivacyPage /></MainLayout>} />
      
      {/* Fallback to Home */}
      <Route path="*" element={<MainLayout><HomePage /></MainLayout>} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
