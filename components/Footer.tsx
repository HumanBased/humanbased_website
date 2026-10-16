
import React from 'react';
import { Link } from 'react-router-dom';
import LogoOrb from './LogoOrb';
import SocialHub from './SocialHub';
import { OPEN_COOKIE_SETTINGS } from './Analytics';
import { BUILD_YEAR, COMPANY_LINE, SUPPORT_EMAIL } from '../config/site';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 pb-40 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-12 mb-12">
          {/* Left: Logo + Tagline */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <LogoOrb className="h-16 w-16 sm:h-20 sm:w-20 xl:h-24 xl:w-24" />
              <span className="font-semibold text-lg sm:text-xl xl:text-2xl tracking-tight text-white">HumanBased</span>
            </div>
            <p className="text-white/80 text-base leading-relaxed font-light">
              Technology in service of humanity. Human problems meet digital solutions.
            </p>
          </div>

          {/* Middle: Company + Services */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-12 xl:gap-16 sm:justify-start lg:justify-center">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/65">Company</span>
              <Link to="/about" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">About</Link>
              <a href="/#contact" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">Contact</a>
              <Link to="/privacy" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">Privacy</Link>
              <Link to="/legal" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">Legal</Link>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/65">Work</span>
              <Link to="/services" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">Services</Link>
              <Link to="/products" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">Our Products</Link>
              <Link to="/process" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">The Process</Link>
              <a href="/#contact" className="inline-block py-2 -my-2 text-base md:text-sm text-white/80 hover:text-amber-500 transition-colors">Get in Touch</a>
            </div>
          </div>

          {/* Right: Social Hub Wheel */}
          <div className="relative w-full md:col-span-2 lg:col-span-1 lg:w-auto min-h-[224px] lg:min-h-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 lg:relative lg:left-0 xl:left-20 lg:translate-x-0 lg:bottom-auto lg:ml-auto w-56 h-56 xl:w-64 xl:h-64 block">
              <SocialHub size="compact" />
            </div>
          </div>
        </div>
        
        <p className="pb-6 text-center md:text-left text-xs text-white/70">
          {COMPANY_LINE} ·{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-block py-2 hover:text-amber-500 transition-colors">{SUPPORT_EMAIL}</a>
        </p>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
          <span className="text-center">© {BUILD_YEAR} HumanBased. All rights reserved.</span>
          <div className="flex gap-10">
            <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))} className="uppercase tracking-[0.2em] font-bold cursor-pointer py-2 hover:text-white/80 transition-colors">Cookie Settings</button>
            <span className="cursor-pointer py-2 hover:text-white/80 transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
