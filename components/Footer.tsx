
import React from 'react';
import { Link } from 'react-router-dom';
import LogoOrb from './LogoOrb';
import SocialHub from './SocialHub';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 mb-12">
          {/* Left: Logo + Tagline */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <LogoOrb className="h-20 w-20 md:h-24 md:w-24" />
              <span className="font-semibold text-xl md:text-2xl tracking-tight text-white">HumanBased</span>
            </div>
            <p className="text-white/60 text-base leading-relaxed font-light">
              Technology in service of humanity. Human problems meet digital solutions.
            </p>
          </div>

          {/* Middle: Company + Services */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-16 justify-center">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Company</span>
              <Link to="/about" className="text-sm text-white/60 hover:text-amber-500 transition-colors">About</Link>
              <a href="/#contact" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Contact</a>
              <a href="/privacy" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Privacy</a>
              <Link to="/legal" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Legal</Link>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Work</span>
              <Link to="/services" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Services</Link>
              <Link to="/process" className="text-sm text-white/60 hover:text-amber-500 transition-colors">The Process</Link>
              <a href="/#contact" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Get in Touch</a>
            </div>
          </div>

          {/* Right: Social Hub Wheel */}
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <div className="w-56 h-56 md:w-64 md:h-64">
              <SocialHub size="compact" />
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/10">
          <span>© 2024 HumanBased. All rights reserved.</span>
          <div className="flex gap-10">
            <span className="cursor-pointer hover:text-white/30 transition-colors">Cookie Settings</span>
            <span className="cursor-pointer hover:text-white/30 transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
