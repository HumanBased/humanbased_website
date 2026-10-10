import React from 'react';
import ethicalIntelligenceImg from '../assets/images/about-ethical-intelligence.webp';
import organizationalEnablementImg from '../assets/images/about-organizational-enablement.webp';
import strategicDiscoveryImg from '../assets/images/about-strategic-discovery.webp';
import responsiblePlatformsImg from '../assets/images/about-responsible-platforms.webp';

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {pillars.map((p, i) => (
        <article
          key={p.title}
          className="mx-card"
          data-reveal=""
          style={{ ['--mx-delay' as string]: `${(i % 2) * 100}ms` }}
        >
          <div className="ed-card-media">
            <img
              src={p.image}
              className={p.title === "Organizational Enablement" ? "brightness-125" : undefined}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ed-card-body">
            <h3 className="font-serif ed-subtitle mb-4">{p.title}</h3>
            <p className="ed-body mb-6">
              {p.desc}
            </p>
            <div className="h-px w-full bg-white/5 mb-6"></div>
            <button className="text-xs font-bold uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors">
              Explore Solutions →
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CapabilitiesGrid;

