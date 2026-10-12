import React from 'react';
import ethicalIntelligenceImg from '../assets/images/about-ethical-intelligence.webp';
import organizationalEnablementImg from '../assets/images/about-organizational-enablement.webp';
import strategicDiscoveryImg from '../assets/images/about-strategic-discovery.webp';
import responsiblePlatformsImg from '../assets/images/about-responsible-platforms.webp';

const pillars = [
  { 
    title: "Strategic Discovery", 
    desc: "We map the intersection of organizational goals and human needs. Before writing code, we validate the problem space to ensure every initiative targets a measurable social or operational outcome.",
    image: strategicDiscoveryImg,
    w: 1200, h: 655
  },
  { 
    title: "Responsible Platforms", 
    desc: "We build robust, scalable digital environments designed to respect user attention. Our engineering prioritizes accessibility, privacy, and long-term maintainability over fleeting trends.",
    image: responsiblePlatformsImg,
    w: 1200, h: 686
  },
  { 
    title: "Ethical Intelligence", 
    desc: "We architect infrastructure that turns raw data into actionable social insight. From bias-aware algorithms to privacy-first analytics, we help you measure what truly matters for your mission.",
    image: ethicalIntelligenceImg,
    w: 1200, h: 627
  },
  { 
    title: "Organizational Enablement", 
    desc: "Technology fails without adoption. We train your teams and redesign workflows to ensure new systems amplify human capability rather than replacing it.",
    image: organizationalEnablementImg,
    w: 640, h: 388
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
          <div className={p.title === "Responsible Platforms" || p.title === "Organizational Enablement" ? "ed-card-media ed-card-media--lit" : "ed-card-media"}>
            <img
              src={p.image}
              alt=""
              width={p.w}
              height={p.h}
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
            <button className="text-xs font-bold uppercase tracking-widest text-[#d8bc6e] hover:text-amber-300 transition-colors">
              Explore Solutions →
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CapabilitiesGrid;

