import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import Process from '../components/Process';
import WhyHumanBased from '../components/WhyHumanBased';
import OutcomeSafeguards from '../components/OutcomeSafeguards';
import processHeroImg from '../assets/images/process-hero.webp.png';

const ProcessPage: React.FC = () => {
  usePageTitle('The Process – HumanBased');
  return (
    <div className="flex-grow bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-transparent">
          <img
            src={processHeroImg}
            alt="Abstract visualization representing the process of building"
            className="w-full h-full object-cover"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            How We Build
          </h1>
          <p className="text-base md:text-lg text-white/70">
            With us, you keep the control during the whole process through our method
            <br />
            <span className="inline-block text-xl md:text-2xl font-semibold">
              DISCOVER → DESIGN → BUILD → EVOLVE.
            </span>
            <br />
            This way the chances that we increase the quality of our output by
            building exactly what our clients need. From understanding your real
            constraints to involving you in the design and delivering solid systems
            that people actually use and that keep improving over time.
          </p>
        </div>
      </section>

      {/* Section 1 – Our Process */}
      <div>
        <Process />
      </div>

      {/* Section 2 – Outcome Safeguards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
              Outcomes We Protect
            </h2>
            <p className="text-white/60 max-w-2xl mt-3">
              Our process is designed to improve what matters most: productivity, cost, participation, and satisfaction.
            </p>
          </div>
          <OutcomeSafeguards />
        </div>
      </section>

      {/* Section 3 – Why HumanBased? */}
      <WhyHumanBased />

      {/* Section 4 – Closing CTA */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
              Ready to work with a human‑first partner?
            </h3>
            <p className="text-white/60 max-w-xl">
              Tell us about your organization, community, or product. We'll map a path
              from today's complexity to measurable, human‑centered outcomes.
            </p>
          </div>
          <div>
            <a
              href="/#contact"
              className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;