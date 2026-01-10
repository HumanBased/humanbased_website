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
import siteBg from './assets/images/site-bg.webp.png';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollHandler />
      {/* Fixed site background layer */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src={siteBg} 
          alt="" 
          className="h-full w-full object-cover opacity-100" 
        />
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#050509]/70" />
      </div>
      <div className="relative bg-transparent min-h-screen flex flex-col overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="bg-transparent text-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/legal" element={<LegalPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;