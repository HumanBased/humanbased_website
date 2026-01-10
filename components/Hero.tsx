
import React from 'react';
import Reveal from './Reveal';
import homeHeroImg from '../assets/images/home-hero.webp.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 top-0 bg-transparent">
        <img
          src={homeHeroImg}
          alt="Abstract holographic technology scene representing human problems and digital solutions"
          className="w-full h-full object-cover object-[center_top_40%]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
          }}
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-transparent z-[5]" />
      </div>

      {/* Content overlay */}
      <div className="relative max-w-6xl w-full px-6 z-10 flex items-center min-h-screen pt-32">
        <div className="max-w-3xl ml-0 md:ml-16 text-left">
          {/* Content panel */}
          <Reveal>
            <div className="space-y-6 py-6 sm:py-8 md:py-10 lg:py-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] text-white">
              Human problems.<br />
              <span className="text-amber-500">Digital solutions.</span>
            </h1>

            <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-light">
                We are on a mission to transform how Humanity lives and works.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-light">
                Technology in service of humanity.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-light">
                Purpose built. Human focused.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 text-center text-sm sm:text-base"
              >
                Get in Touch
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border border-white/20 bg-white/5 text-white/90 font-medium rounded-full hover:bg-white/10 hover:text-white transition-all text-center text-sm sm:text-base"
              >
                View Services
              </a>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
