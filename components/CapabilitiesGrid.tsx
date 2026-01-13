import React from 'react';
import ethicalIntelligenceImg from '../assets/images/about-ethical-intelligence.webp.png';
import organizationalEnablementImg from '../assets/images/about-organizational-enablement.webp.png';
import strategicDiscoveryImg from '../assets/images/about-strategic-discovery.webp.png';
import responsiblePlatformsImg from '../assets/images/about-responsible-platforms.webp.png';

const pillars = [
  { 
    title: "Strategic Discovery", 
    desc: "We map the intersection of organizational goals and human needs. Before writing code, we validate the problem space to ensure every initiative targets a measurable social or operational outcome.",
    image: strategicDiscoveryImg
  },
  { 
    title: "Responsible Platforms", 
    desc: "We build robust, scalable digital environments designed to respect user attention. Our engineering prioritizes accessibility, privacy, and long-term maintainability over fleeting trends.",
    image: responsiblePlatformsImg
  },
  { 
    title: "Ethical Intelligence", 
    desc: "We architect infrastructure that turns raw data into actionable social insight. From bias-aware algorithms to privacy-first analytics, we help you measure what truly matters for your mission.",
    image: ethicalIntelligenceImg
  },
  { 
    title: "Organizational Enablement", 
    desc: "Technology fails without adoption. We train your teams and redesign workflows to ensure new systems amplify human capability rather than replacing it.",
    image: organizationalEnablementImg
  }
];

const CapabilitiesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pillars.map((p, i) => (
        <div key={i} className="glass rounded-[2.5rem] bg-white/[0.02] border-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/10 group shadow-2xl overflow-hidden">
          <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
            <img 
              src={p.image} 
              className={`visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02] ${p.title === "Organizational Enablement" ? "brightness-125" : ""}`}
              alt={`Abstract holographic visualization representing ${p.title.toLowerCase()}`}
            />
            {p.title === "Organizational Enablement" ? (
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/30 to-transparent"></div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
            )}
          </div>
          <div className="p-7 md:p-8">
            <h3 className="font-serif text-[25px] md:text-2xl font-medium mb-4">{p.title}</h3>
            <p className="text-white/50 leading-relaxed font-light mb-6 text-sm md:text-base">
              {p.desc}
            </p>
            <div className="h-px w-full bg-white/5 mb-6"></div>
            <button className="text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors">
              Explore Solutions →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CapabilitiesGrid;

