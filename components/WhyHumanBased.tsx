import React from 'react';
import resultsFirstImg from '../assets/images/home-results-first.webp.png';
import homeKpiImg from '../assets/images/home-kpi.webp.png';

const WhyHumanBased: React.FC = () => {

  return (
    <section className="pt-10 md:pt-14 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Why HumanBased?</h2>
          <p className="text-base md:text-lg text-white/70">high quality results without compromise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass group rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-white/20 bg-white/[0.02]">
            <div className="aspect-video relative bg-black/40 overflow-hidden">
              <img src={homeKpiImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Abstract holographic visualization representing human connection, growth, and collective good" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent visual-overlay-transition"></div>
            </div>
            <div className="p-10 space-y-4">
              <h3 className="font-serif text-2xl font-medium">Our Ultimate KPI</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Our measure of success extends beyond quarterly reports or efficiency gains. We exist to elevate individuals, fortify teams, and advance the collective good. Our impact spans from the individual finding clarity and purpose, to teams achieving genuine collaboration, to society benefiting from more conscious, capable institutions. These aren't separate goals, they're interdependent imperatives.
              </p>
            </div>
          </div>

          <div className="glass group rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-white/20 bg-white/[0.02]">
            <div className="aspect-video relative bg-black/40 overflow-hidden">
              <img src={resultsFirstImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Abstract holographic visualization representing results-first approach and measurable impact" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent visual-overlay-transition"></div>
            </div>
            <div className="p-10 space-y-4">
              <h3 className="font-serif text-2xl font-medium">Results First</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Your outcomes are our singular focus. We don't traffic in theoretical possibilities or feature bloat. We deliver solutions that move hard numbers and generate measurable impact. If it doesn't create tangible value, we don't build it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHumanBased;
