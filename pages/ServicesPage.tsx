import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import Reveal from '../components/Reveal';
import impactProductivityImg from '../assets/images/services-impact-productivity.webp.png';
import impactCostImg from '../assets/images/services-impact-cost-reduction.webp.png';
import impactParticipationImg from '../assets/images/services-impact-participation.webp.png';
import impactSatisfactionImg from '../assets/images/services-impact-satisfaction.webp.png';
import servicesHeroImg from '../assets/images/services-hero.webp.png';
import orgDevImg from '../assets/images/services-card-organizational.webp.png';
import socialDevImg from '../assets/images/services-card-social.webp.png';
import personalDevImg from '../assets/images/services-card-personal.webp.png';
import expertMissionImg from '../assets/images/services-expert-mission.webp.png';
import automationImg from '../assets/images/services-automation.webp.png';

const ServicesPage: React.FC = () => {
  usePageTitle('Services – HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pb-12 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass rounded-[3rem] overflow-hidden bg-white/[0.01] border-white/5 p-2 relative">
            {/* Mobile Layout: Flex Column with Image on Top, Text Below */}
            <div className="flex flex-col md:block">
              {/* Top Half: Image (Mobile) */}
              <div className="relative w-full h-64 md:hidden rounded-[2.8rem] overflow-hidden group">
                <img
                  src={servicesHeroImg}
                  alt="Abstract holographic visualization representing services that create real impact"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              {/* Bottom Half: Text on Black Background (Mobile) */}
              <div className="w-full pt-[50px] pb-[50px] px-6 bg-[#050509] md:hidden rounded-b-[2.8rem]">
                <h4 className="font-serif text-2xl font-medium mb-4 text-white">We Serve for Real Impact</h4>
                <p className="text-white font-light mb-4 text-base">
                  We develop transformative solutions with one relentless focus: your success. Every product we create is customer-centered and outcomes-driven, fundamentally shifting what is possible for your organization and the people you serve.
                </p>
                <p className="text-white font-light text-base">
                  Your needs drive every decision. Your results define our success. Real impact, tangible results, customer-first always.
                </p>
              </div>
              
              {/* Desktop Layout: Image with Overlay Text */}
              <div className="hidden md:block md:h-[600px] w-full bg-transparent rounded-[2.8rem] overflow-hidden group relative">
                <img
                  src={servicesHeroImg}
                  alt="Abstract holographic visualization representing services that create real impact"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform transition-opacity duration-500 ease-out hover:brightness-110 hover:scale-[1.02] active:brightness-110 active:scale-[1.02]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050509] via-[#050509]/85 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-12 visual-overlay-transition z-10">
                  <div className="max-w-md drop-shadow-lg relative z-10">
                    <h4 className="font-serif text-3xl lg:text-4xl font-medium mb-6 text-white">We Serve for Real Impact</h4>
                    <p className="text-white font-light mb-4 text-lg">
                      We develop transformative solutions with one relentless focus: your success. Every product we create is customer-centered and outcomes-driven, fundamentally shifting what is possible for your organization and the people you serve.
                    </p>
                    <p className="text-white font-light mb-8 text-lg">
                      Your needs drive every decision. Your results define our success. Real impact, tangible results, customer-first always.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 – Intro */}
      <section className="pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16">
            <span className="block">Services that move you</span>
            <span className="block">
              from{" "}
              <span className="text-6xl md:text-7xl lg:text-8xl text-amber-300">
                insight
              </span>
            </span>
            <span className="block">
              to{" "}
              <span className="text-6xl md:text-7xl lg:text-8xl text-amber-300">
                operational change.
              </span>
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-5xl mx-auto text-center mb-12">
            We design, build, and operationalize digital platforms that deliver measurable outcomes:
          </p>
          <div className="max-w-5xl mx-auto space-y-1 text-center">
            <p className="text-white font-bold uppercase mt-4 text-xl">REDUCED COSTS | INCREASED PRODUCTIVITY</p>
            <p className="text-white font-bold uppercase text-xl">STRONGER PARTICIPATION | HIGHER SATISFACTION</p>
          </div>
        </div>
      </section>

      {/* Section 2 – Three development cards */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Organizational Development */}
          <Reveal delay={0}>
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row gap-10 items-stretch shadow-2xl group">
            <div className="md:w-1/2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                Organizational
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Organizational Development
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light">
                We map the real behaviors, frictions, and constraints in your organization so we solve the right problem, not just the visible symptoms. From there, we build systems that reduce busywork and let your teams focus on high-leverage work.
              </p>
              <ul className="space-y-2 text-white/60 text-sm md:text-base font-light">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>AI-driven workflow automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Custom internal dashboards</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Legacy system modernization</span>
                </li>
              </ul>
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-amber-500 hover:text-amber-400 transition-colors">
                Explore Organizational Solutions &#8594;
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[2rem] bg-black/40 overflow-hidden border border-white/10">
                <img src={orgDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Organizational Development" />
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>

          {/* Social Development */}
          <Reveal delay={90}>
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row gap-10 items-stretch shadow-2xl group">
            <div className="md:w-1/2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                Social
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Social Development
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light">
                We turn your insights into platforms, workflows, and interfaces that people adopt quickly because they feel built for them. The result: real connection, transparent governance, and inclusive decision-making across your ecosystem.
              </p>
              <ul className="space-y-2 text-white/60 text-sm md:text-base font-light">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Community and member portals</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Participation and governance workflows</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Feedback and deliberation tools</span>
                </li>
              </ul>
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-amber-500 hover:text-amber-400 transition-colors">
                See how we empower communities &#8594;
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[2rem] bg-black/40 overflow-hidden border border-white/10">
                <img src={socialDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Social Development" />
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>

          {/* Personal Development */}
          <Reveal delay={180}>
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row gap-10 items-stretch shadow-2xl group">
            <div className="md:w-1/2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                Personal
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Personal Development
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light">
                We turn insights into companion tools that people actually use. From learning experiences to wellbeing support, we build systems that respect privacy while helping individuals grow skills and stay focused on what matters.
              </p>
              <ul className="space-y-2 text-white/60 text-sm md:text-base font-light">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Companion tools for wellbeing and focus</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Learning and skill-building experiences</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Personal analytics that respect privacy</span>
                </li>
              </ul>
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-amber-500 hover:text-amber-400 transition-colors">
                See our personal tools &#8594;
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[2rem] bg-black/40 overflow-hidden border border-white/10">
                <img src={personalDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Personal Development" />
                <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 – Creating Solutions Tailored to Needs */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
            Creating Solutions Tailored to Needs
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl mx-auto">
            Every organization, community, and individual operates within a unique ecosystem. We use the full potential of
            emerging technology to architect solutions that honor your constraints, amplify your strengths, and meet people
            where they are.
          </p>
        </div>
      </section>

      {/* Section 4 – Metric-driven case studies */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                Real Impact for Real Businesses
              </h2>
              <p className="text-white/50 text-sm md:text-base font-light max-w-xl mt-3">
                No hype, just measurable change. We design interventions that move the metrics that matter for your
                operations, finances, participation, and experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A – Productivity */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactProductivityImg}
                  alt="Abstract holographic visualization representing productivity improvement"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Operations Productivity
                </p>
                <h3 className="font-serif text-2xl font-medium">Productivity Up</h3>
                <p className="text-white/60 text-sm font-light">
                  Streamlined approval chains, automated status updates, and unified dashboards reduced decision latency and
                  manual handoffs across teams.
                </p>
              </div>
            </div>

            {/* Card B – Cost Reduction */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactCostImg}
                  alt="Abstract holographic visualization representing cost reduction"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Cost Optimization
                </p>
                <h3 className="font-serif text-2xl font-medium">Cost Reduction</h3>
                <p className="text-white/60 text-sm font-light">
                  Intelligent automation and demand-aware infrastructure reduced operational overhead while preserving
                  service quality and reliability.
                </p>
              </div>
            </div>

            {/* Card C – Participation */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactParticipationImg}
                  alt="Abstract holographic visualization representing increased participation"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Internal Communications
                </p>
                <h3 className="font-serif text-2xl font-medium">Participation Increased</h3>
                <p className="text-white/60 text-sm font-light">
                  Purpose-built channels, prompts, and feedback loops brought more voices into important decisions without
                  overwhelming the signal.
                </p>
              </div>
            </div>

            {/* Card D – Satisfaction */}
            <div className="glass rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactSatisfactionImg}
                  alt="Abstract holographic visualization representing improved satisfaction"
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                  Customer &amp; Staff Experience
                </p>
                <h3 className="font-serif text-2xl font-medium">Satisfaction Improved</h3>
                <p className="text-white/60 text-sm font-light">
                  Thoughtful journeys, clearer communication, and responsive support created better days for the people who
                  use and deliver your services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 – How we deliver */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
              How We Deliver
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light max-w-2xl mx-auto">
              We combine focused human expertise with always-on intelligent systems so your organization can move with
              confidence, clarity, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expert Mission */}
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                <img src={expertMissionImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="Expert Mission" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 space-y-5">
                <h3 className="font-serif text-2xl md:text-3xl font-medium">
                  Expert Mission
                </h3>
                <p className="text-white/60 text-sm md:text-base font-light">
                  We work with a dedicated team whose only mission is to understand your world and solve the problems that
                  matter most, strategists, designers, and engineers aligned around your outcomes.
                </p>
              </div>
            </div>

            {/* 24/7 Intelligent Automation */}
            <div className="glass rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl group">
              <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                <img src={automationImg} className="visual-card-img transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02] active:brightness-110 active:scale-[1.02]" alt="24/7 Intelligent Automation" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 space-y-5">
                <h3 className="font-serif text-2xl md:text-3xl font-medium">
                  24/7 Intelligent Automation
                </h3>
                <p className="text-white/60 text-sm md:text-base font-light">
                  We design always-on automation that extends your capacity while keeping humans firmly in control, so your
                  systems keep working, even when your team is offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;