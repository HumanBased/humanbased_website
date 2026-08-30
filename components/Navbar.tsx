
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
  const isProducts = location.pathname === "/products";
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
      <div className="max-w-[86rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass rounded-full px-4 sm:px-6 py-3 flex items-center gap-2 transition-all duration-300">
          {/* Left column: Logo */}
          <Link to="/" className="flex items-center gap-3 min-w-0 flex-shrink-0">
            <LogoOrb className="h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24 lg:h-20 lg:w-20 xl:h-24 xl:w-24" />
            <span className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl tracking-tight">HumanBased</span>
          </Link>

          {/* Middle column: standalone primary nav item (desktop) */}
          <NavLink
            to="/products"
            className="hidden lg:flex flex-1 min-w-0 items-center justify-end pr-2 xl:pr-8 transition-opacity hover:opacity-90"
          >
            <span className="flex flex-col leading-tight text-right">
              <span className="text-[10px] uppercase tracking-[0.25em] invisible" aria-hidden="true">
                &nbsp;
              </span>
              <span
                className="text-base lg:text-lg xl:text-xl font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                style={{
                  fontFamily: "'Cinzel', serif",
                  backgroundImage: 'linear-gradient(135deg, #C0C0C0 0%, #FFD700 40%, #FFF8DC 60%, #C0C0C0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Products
              </span>
            </span>
          </NavLink>

          {/* Right column: Desktop Links and Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 flex-shrink-0">
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
                <span className={`text-base lg:text-lg xl:text-lg font-medium whitespace-nowrap ${
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
                <span className={`text-base lg:text-lg xl:text-lg font-medium whitespace-nowrap ${
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
                <span className={`text-base lg:text-lg xl:text-lg font-medium whitespace-nowrap ${
                  isProcess ? "text-amber-400" : "text-white/80"
                }`}>
                  The Process
                </span>
              </span>
            </NavLink>
            <a href="/#contact" className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-4 xl:px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap">
              Get in Touch
            </a>
          </div>

          {/* Hamburger Menu Button - Mobile and tablet */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto text-white p-2 flex-shrink-0"
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
        <div className="fixed inset-0 z-50 bg-[#050509] flex flex-col items-center justify-center gap-8 px-6 overflow-y-auto lg:hidden h-screen min-h-screen">
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
            to="/products"
            onClick={() => setIsOpen(false)}
            className="text-center"
          >
            <span className={`text-2xl font-bold uppercase tracking-[0.2em] ${
              isProducts ? "text-amber-400" : "text-white"
            }`}>
              Our Products
            </span>
          </NavLink>
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
