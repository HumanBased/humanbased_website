
import React, { useState, useEffect } from 'react';
import LogoOrb from './LogoOrb';
import { Link, NavLink, useLocation } from 'react-router-dom';
const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isAbout = location.pathname === "/about";
  const isServices = location.pathname === "/services";
  const isProcess = location.pathname === "/process";
  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // shrink logic for isScrolled
      setIsScrolled(currentY > 20);

      // hide when scrolling down, show when scrolling up
      if (currentY > lastScrollY && currentY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full bg-transparent pt-6 transition-all duration-300 transform ${
      isHidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-start transition-all duration-300">
          <Link to="/" className="flex items-center gap-3">
            <LogoOrb className="h-20 w-20 md:h-24 md:w-24" />
            <span className="font-semibold text-xl md:text-2xl tracking-tight">HumanBased</span>
          </Link>

          {/* Desktop Links and Button */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <NavLink
              to="/about"
              className="text-sm font-medium transition-colors uppercase tracking-widest"
            >
              <span className="flex flex-col leading-tight text-left">
                <span className={`text-[10px] uppercase tracking-[0.25em] ${
                  isAbout ? "text-amber-400" : "text-white/40"
                }`}>
                  Why
                </span>
                <span className={`text-base md:text-lg font-medium ${
                  isAbout ? "text-amber-400" : "text-white/80"
                }`}>
                  About
                </span>
              </span>
            </NavLink>
            <NavLink
              to="/services"
              className="text-sm font-medium transition-colors uppercase tracking-widest"
            >
              <span className="flex flex-col leading-tight text-left">
                <span className={`text-[10px] uppercase tracking-[0.25em] ${
                  isServices ? "text-amber-400" : "text-white/40"
                }`}>
                  What
                </span>
                <span className={`text-base md:text-lg font-medium ${
                  isServices ? "text-amber-400" : "text-white/80"
                }`}>
                  Services
                </span>
              </span>
            </NavLink>
            <NavLink
              to="/process"
              className="text-sm font-medium transition-colors uppercase tracking-widest"
            >
              <span className="flex flex-col leading-tight text-left">
                <span className={`text-[10px] uppercase tracking-[0.25em] ${
                  isProcess ? "text-amber-400" : "text-white/40"
                }`}>
                  How
                </span>
                <span className={`text-base md:text-lg font-medium ${
                  isProcess ? "text-amber-400" : "text-white/80"
                }`}>
                  The Process
                </span>
              </span>
            </NavLink>
            <a href="/#contact" className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-wider">
              Get in Touch
            </a>
          </div>
          
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#050509] flex flex-col items-center justify-center gap-8 md:hidden h-screen min-h-screen">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white p-2"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-center"
          >
            <span className="flex flex-col leading-tight text-center">
              <span className={`text-[10px] uppercase tracking-[0.25em] ${
                isAbout ? "text-amber-400" : "text-white/40"
              }`}>
                Why
              </span>
              <span className={`text-xl font-medium ${
                isAbout ? "text-amber-400" : "text-white/80"
              }`}>
                About
              </span>
            </span>
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-center"
          >
            <span className="flex flex-col leading-tight text-center">
              <span className={`text-[10px] uppercase tracking-[0.25em] ${
                isServices ? "text-amber-400" : "text-white/40"
              }`}>
                What
              </span>
              <span className={`text-xl font-medium ${
                isServices ? "text-amber-400" : "text-white/80"
              }`}>
                Services
              </span>
            </span>
          </NavLink>
          <NavLink
            to="/process"
            onClick={() => setIsOpen(false)}
            className="text-center"
          >
            <span className="flex flex-col leading-tight text-center">
              <span className={`text-[10px] uppercase tracking-[0.25em] ${
                isProcess ? "text-amber-400" : "text-white/40"
              }`}>
                How
              </span>
              <span className={`text-xl font-medium ${
                isProcess ? "text-amber-400" : "text-white/80"
              }`}>
                The Process
              </span>
            </span>
          </NavLink>
          <a 
            href="/#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold px-8 py-3 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
