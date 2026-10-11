
import React from 'react';
import Reveal from './Reveal';
import processDiscoveryImg from '../assets/images/process-discovery.webp';
import processCodesignImg from '../assets/images/process-codesign.webp';
import processEthicalImg from '../assets/images/process-ethical-engineering.webp';
import processImprovementImg from '../assets/images/process-continuous-improvement.webp';

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
    <section className="ed-sec">
      <div className="ed-full">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16" data-reveal="">
          <p className="font-serif text-2xl md:text-3xl text-white/85">A rigorous path from deep understanding to lasting REAL IMPACT.</p>
        </div>

        {/* Self-drawing connector: one line through the four stages, drawn when
            it scrolls into view (motion engine, data-draw). Desktop only. */}
        <div className="hidden lg:block mb-6 px-[12.5%]" aria-hidden="true" data-reveal="fade" data-draw="">
          <svg viewBox="0 0 100 4" preserveAspectRatio="none" className="w-full h-3 overflow-visible">
            <line x1="0" y1="2" x2="100" y2="2" pathLength={1} stroke="rgba(196,168,90,0.75)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="relative -mt-[9px] flex justify-between">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="block h-[7px] w-[7px] -ml-[3px] rounded-full bg-[#c4a85a]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 90}>
              <div className="mx-card h-full p-6 md:p-7 group overflow-hidden">
              <div className="aspect-[4/3] md:aspect-[5/4] w-full rounded-[10px] overflow-hidden mb-8 bg-black/20 relative">
                {step.title === "Deep Discovery & Insight" ? (
                  <img src={processDiscoveryImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} width={1344} height={768} loading="lazy" decoding="async" />
                ) : step.title === "Co-Design & Validation" ? (
                  <img src={processCodesignImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} width={1376} height={768} loading="lazy" decoding="async" />
                ) : step.title === "Ethical, Auditable Engineering" ? (
                  <img src={processEthicalImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} width={1344} height={768} loading="lazy" decoding="async" />
                ) : step.title === "Continuous Improvement & Capability Building" ? (
                  <img src={processImprovementImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt={step.title} width={1376} height={768} loading="lazy" decoding="async" />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              </div>
              <h2 className="font-serif ed-subtitle text-[21px] mb-4">{step.title}</h2>
              <p className="text-white/65 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
              <div className="absolute top-4 right-6 text-4xl font-serif font-medium text-white/[0.03] group-hover:text-amber-500/[0.05] transition-colors">
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
