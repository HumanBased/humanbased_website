import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import Hero from '../components/Hero';
import WhyHumanBased from '../components/WhyHumanBased';
import Impact from '../components/Impact';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  usePageTitle('HumanBased – Human problems. Digital solutions.');
  return (
    <div className="flex-grow">
      <Hero />
      <div id="about">
        <WhyHumanBased />
      </div>
      <Impact />
      <section id="process" className="pt-8 pb-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80">
              How
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
              Our Process
            </h2>
            <p className="text-white/60 text-base md:text-lg">
              We follow a rigorous path from immersion and insight to continuous evolution,
              so every engagement moves from understanding to lasting impact.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/process"
              className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              Explore the process
            </Link>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="scroll-mt-24 pt-10 pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14"
      >
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;