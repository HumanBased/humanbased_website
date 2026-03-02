
import React from 'react';
import { Link } from 'react-router-dom';
import LogoOrb from './LogoOrb';

interface BasedTalkLayoutProps {
  children: React.ReactNode;
}

const BasedTalkLayout: React.FC<BasedTalkLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#E6F2FF] text-[#102A43] font-sans selection:bg-[#4A90E2]/30 selection:text-[#102A43]">
      <style>
        {`
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
          .basedtalk-glass {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          .basedtalk-gradient-text {
            background: linear-gradient(135deg, #4A90E2 0%, #8EC5FC 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .basedtalk-btn-primary {
            background: linear-gradient(135deg, #4A90E2 0%, #8EC5FC 100%);
            color: white;
            transition: all 0.3s ease;
          }
          .basedtalk-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
          }
        `}
      </style>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#4A90E2]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LogoOrb className="h-10 w-10 text-[#4A90E2]" />
            <span className="font-semibold text-xl tracking-tight text-[#102A43]">HumanBased</span>
          </Link>
          
          <div className="flex items-center gap-4">
             <Link to="/apps/basedtalk" className="text-sm font-medium text-[#102A43]/70 hover:text-[#4A90E2] transition-colors">Home</Link>
             <Link to="/apps/basedtalk/privacy" className="text-sm font-medium text-[#102A43]/70 hover:text-[#4A90E2] transition-colors">Privacy</Link>
             <Link to="/apps/basedtalk/terms" className="text-sm font-medium text-[#102A43]/70 hover:text-[#4A90E2] transition-colors">Terms</Link>
             <a 
              href="#" 
              className="basedtalk-btn-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider ml-4"
            >
              Open BasedTalk App
            </a>
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-[#4A90E2]/10 bg-white/30">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <LogoOrb className="h-8 w-8 text-[#4A90E2]" />
            <span className="font-medium text-sm text-[#102A43]">© 2026 HumanBased</span>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/apps/basedtalk/privacy" className="text-sm text-[#102A43]/60 hover:text-[#4A90E2]">Privacy Policy</Link>
            <Link to="/apps/basedtalk/terms" className="text-sm text-[#102A43]/60 hover:text-[#4A90E2]">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BasedTalkLayout;
