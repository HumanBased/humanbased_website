
import React from 'react';
import Reveal from './Reveal';
import processDiscoveryImg from '../assets/images/process-discovery.webp.png';
import processCodesignImg from '../assets/images/process-codesign.webp.png';
import processEthicalImg from '../assets/images/process-ethical-engineering.webp.png';
import processImprovementImg from '../assets/images/process-continuous-improvement.webp.png';

const Process: React.FC = () => {

  const steps = [
    { 
      title: "Deep Discovery & Insight", 
      desc: "From assumptions to real constraints. We map the actual behaviors, frictions, and constraints in your organization so we solve the right problem, not just the visible symptoms." 
    },
    { 
      title: "Co-Design & Validation", 
      desc: "From ideas to tested solutions. We turn insights into services, workflows, and interfaces that people adopt quickly because we validate them with real stakeholders before building." 
    },
    { 
      title: "Ethical, Auditable Engineering", 
      desc: "From prototypes to production systems. We build data and AI systems that are transparent, governable, and aligned with your risk and compliance standards. No technical debt, no shortcuts." 
    },
    { 
      title: "Continuous Improvement & Capability Building", 
      desc: "From launch to lasting impact. We stay with you after launch, testing, tuning, and training your teams so improvements keep compounding and the system adapts to changing needs." 
    }
  ];

  return (
    <section className="pt-10 md:pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8 md:mb-10">
          <p className="text-lg md:text-2xl font-semibold text-white/80">A rigorous path from deep understanding to lasting REAL IMPACT.</p>
        </div>

        <div className="max-w-5xl mx-auto mb-4 md:mb-6 pointer-events-none">
          {/* Diagonal connector arrows from the tagline into each card */}
          <div className="hidden sm:flex justify-between px-4 md:px-8">
            {/* Leftmost card arrow – diagonal down-left */}
            <div className="flex flex-col items-center origin-top rotate-[22deg]">
              <div className="h-8 md:h-10 w-px bg-gradient-to-b from-transparent via-amber-400/60 to-amber-400/90" />
              <div className="w-2.5 h-2.5 border-l border-b border-amber-400 rotate-[-45deg] -mt-1" />
            </div>

            {/* Slightly left-of-center arrow */}
            <div className="flex flex-col items-center origin-top rotate-[8deg]">
              <div className="h-8 md:h-10 w-px bg-gradient-to-b from-transparent via-amber-400/60 to-amber-400/90" />
              <div className="w-2.5 h-2.5 border-l border-b border-amber-400 rotate-[-45deg] -mt-1" />
            </div>

            {/* Slightly right-of-center arrow */}
            <div className="flex flex-col items-center origin-top rotate-[-8deg]">
              <div className="h-8 md:h-10 w-px bg-gradient-to-b from-transparent via-amber-400/60 to-amber-400/90" />
              <div className="w-2.5 h-2.5 border-l border-b border-amber-400 rotate-[-45deg] -mt-1" />
            </div>

            {/* Rightmost card arrow – diagonal down-right */}
            <div className="flex flex-col items-center origin-top rotate-[-22deg]">
              <div className="h-8 md:h-10 w-px bg-gradient-to-b from-transparent via-amber-400/60 to-amber-400/90" />
              <div className="w-2.5 h-2.5 border-l border-b border-amber-400 rotate-[-45deg] -mt-1" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 90}>
              <div className="glass p-6 md:p-7 rounded-[2.5rem] bg-white/[0.01] border-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-white/10 group relative overflow-hidden">
              <div className="aspect-[4/3] md:aspect-[5/4] w-full rounded-3xl overflow-hidden mb-8 bg-black/20 relative">
                {step.title === "Deep Discovery & Insight" ? (
                  <img src={processDiscoveryImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} />
                ) : step.title === "Co-Design & Validation" ? (
                  <img src={processCodesignImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} />
                ) : step.title === "Ethical, Auditable Engineering" ? (
                  <img src={processEthicalImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} />
                ) : step.title === "Continuous Improvement & Capability Building" ? (
                  <img src={processImprovementImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
              <div className="absolute top-4 right-6 text-4xl font-serif font-semibold text-white/[0.03] group-hover:text-amber-500/[0.05] transition-colors">
                0{idx + 1}
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
