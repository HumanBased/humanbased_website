import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../hooks/usePageSeo';
import Reveal from '../components/Reveal';
import Journey from '../components/motion/Journey';
import { HB_JOURNEY } from '../components/motion/journeys';
import impactProductivityImg from '../assets/images/services-impact-productivity.webp';
import impactCostImg from '../assets/images/services-impact-cost-reduction.webp';
import impactParticipationImg from '../assets/images/services-impact-participation.webp';
import impactSatisfactionImg from '../assets/images/services-impact-satisfaction.webp';
import servicesHeroImg from '../assets/images/services-hero.webp';
import orgDevImg from '../assets/images/services-card-organizational.webp';
import socialDevImg from '../assets/images/services-card-social.webp';
import personalDevImg from '../assets/images/services-card-personal.webp';
import expertMissionImg from '../assets/images/services-expert-mission.webp';
import automationImg from '../assets/images/services-automation.webp';

const FAQ: { q: string; a: string }[] = [
  {
    "q": "What does HumanBased actually build?",
    "a": "Custom mobile apps, web platforms and AI-assisted systems for organizations, communities and individuals. That can be an internal dashboard that replaces a tangle of spreadsheets, a member portal, a participation and decision-making tool, or a personal companion app. We also build our own products, PurposeBased and BasedTalk."
  },
  {
    "q": "Who do you work with?",
    "a": "Social enterprises, associations, public-interest organizations and teams that want technology to serve people, not the other way round. If your work depends on trust, participation or wellbeing, we are probably a good fit. We are a small Copenhagen team, so we take on a limited number of projects at a time."
  },
  {
    "q": "How does a project start?",
    "a": "With listening. We spend the first weeks mapping how work really happens in your organization: where time is lost, where people disagree, what they avoid. Only then do we propose what to build. You can read the full sequence on our process page."
  },
  {
    "q": "How do you handle privacy and data?",
    "a": "Privacy by default. We collect only what a system needs, we design for GDPR from the first sketch, and the people who use a product keep control of their information. Decisions that affect people stay with people, and automation is there to support them."
  },
  {
    "q": "What does it cost, and how long does it take?",
    "a": "It depends on scope, so we do not publish fixed prices. A small, focused tool can be ready in weeks. A platform that changes how a whole organization works takes longer and is built in stages, so you see something useful early. Write to us with a short description and we will tell you honestly what we would do and what it takes."
  }
];

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const ServicesPage: React.FC = () => {
  usePageSeo({
    title: 'Services – HumanBased',
    description:
      'What HumanBased builds and for whom: custom apps, platforms and AI-assisted systems for organizational, social and personal development, designed with the people who use them.',
    canonical: 'https://www.humanbased.org/services',
    jsonLd: FAQ_JSONLD,
  });

  return (
    <div className="flex-grow bg-transparent relative">
      <Journey
        milestones={HB_JOURNEY(['#services-intro', '#services-areas', '#services-impact', '#services-delivery'])}
      />
      <section className="ed-sec--first pb-12" id="services-intro">
        <div className="ed-full">
          <div className="mx-card overflow-hidden p-2 relative mx-intro">
            {/* Mobile Layout: Flex Column with Image on Top, Text Below */}
            <div className="flex flex-col lg:block">
              {/* Top Half: Image (Mobile and tablet) */}
              <div className="relative w-full h-56 sm:h-72 md:h-80 lg:hidden rounded-[12px] overflow-hidden group">
                <img
                  src={servicesHeroImg}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  width={1264}
                  height={848}
                  decoding="async"
                />
              </div>
              
              {/* Bottom Half: Text on Black Background (Mobile) */}
              <div className="w-full py-10 sm:py-12 px-6 sm:px-8 md:px-10 bg-[#050509] lg:hidden rounded-b-[12px]">
                <h4 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-white">We Serve for Real Impact</h4>
                <p className="hb-body hb-body--card mb-4">
                  We develop transformative solutions with one relentless focus: your success. Every product we create is customer-centered and outcomes-driven, fundamentally shifting what is possible for your organization and the people you serve.
                </p>
                <p className="hb-body hb-body--card">
                  Your needs drive every decision. Your results define our success. Real impact, tangible results, customer-first always.
                </p>
              </div>
              
              {/* Desktop Layout: Image with Overlay Text */}
              <div className="hidden lg:block lg:h-[600px] w-full bg-transparent rounded-[12px] overflow-hidden group relative">
                <img
                  src={servicesHeroImg}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform transition-opacity duration-500 ease-out hover:brightness-110 hover:scale-[1.02] active:brightness-110 active:scale-[1.02]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
                  }}
                  width={1264}
                  height={848}
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050509]/95 via-[#050509]/55 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-8 xl:px-12 visual-overlay-transition z-10">
                  <div className="max-w-md drop-shadow-lg relative z-10">
                    <h4 className="font-serif text-3xl xl:text-4xl font-medium mb-6 text-white">We Serve for Real Impact</h4>
                    <p className="hb-body hb-body--card mb-4">
                      We develop transformative solutions with one relentless focus: your success. Every product we create is customer-centered and outcomes-driven, fundamentally shifting what is possible for your organization and the people you serve.
                    </p>
                    <p className="hb-body hb-body--card mb-8">
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
      <section className="ed-sec pb-10">
        <div className="ed-full space-y-4" data-reveal="">
          <h1 className="font-serif ed-title mb-16">
            <span className="block">Services that move you</span>
            <span className="block">
              from{" "}
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-400">
                insight
              </span>
            </span>
            <span className="block">
              to{" "}
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-400">
                operational change.
              </span>
            </span>
          </h1>
          <p className="hb-body max-w-5xl mx-auto text-center mb-12">
            We design, build, and operationalize digital platforms that deliver measurable outcomes:
          </p>
          <div className="max-w-5xl mx-auto space-y-1 text-center">
            <p className="text-white/85 font-semibold uppercase tracking-[0.16em] mt-4 text-sm md:text-base">REDUCED COSTS | INCREASED PRODUCTIVITY</p>
            <p className="text-white/85 font-semibold uppercase tracking-[0.16em] text-sm md:text-base">STRONGER PARTICIPATION | HIGHER SATISFACTION</p>
          </div>
        </div>
      </section>

      {/* Section 2 – Three development cards */}
      <section className="pb-16" id="services-areas">
        <div className="ed-full space-y-14">
          {/* Organizational Development */}
          <Reveal delay={0}>
            <div className="mx-card px-6 py-10 md:px-10 md:py-12 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch group">
            <div className="lg:w-1/2 space-y-5">
              <p className="ed-label">
                Organizational
              </p>
              <h2 className="font-serif ed-title">
                Organizational Development
              </h2>
              <p className="hb-body hb-body--card">
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
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-[#d8bc6e] hover:text-amber-300 transition-colors">
                Explore Organizational Solutions &#8594;
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[10px] bg-black/40 overflow-hidden border border-white/10">
                <img src={orgDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Organizational Development" width={1200} height={750} loading="lazy" decoding="async" />
                <div className="absolute inset-0 border border-white/5 rounded-[10px] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>

          {/* Social Development */}
          <Reveal delay={90}>
            <div className="mx-card px-6 py-10 md:px-10 md:py-12 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch group">
            <div className="lg:w-1/2 space-y-5">
              <p className="ed-label">
                Social
              </p>
              <h2 className="font-serif ed-title">
                Social Development
              </h2>
              <p className="hb-body hb-body--card">
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
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-[#d8bc6e] hover:text-amber-300 transition-colors">
                See how we empower communities &#8594;
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[10px] bg-black/40 overflow-hidden border border-white/10">
                <img src={socialDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Social Development" width={1200} height={686} loading="lazy" decoding="async" />
                <div className="absolute inset-0 border border-white/5 rounded-[10px] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>

          {/* Personal Development */}
          <Reveal delay={180}>
            <div className="mx-card px-6 py-10 md:px-10 md:py-12 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch group">
            <div className="lg:w-1/2 space-y-5">
              <p className="ed-label">
                Personal
              </p>
              <h2 className="font-serif ed-title">
                Personal Development
              </h2>
              <p className="hb-body hb-body--card">
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
              <button className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-[#d8bc6e] hover:text-amber-300 transition-colors">
                See our personal tools &#8594;
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-full min-h-[220px] rounded-[10px] bg-black/40 overflow-hidden border border-white/10">
                <img src={personalDevImg} className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Personal Development" width={1200} height={686} loading="lazy" decoding="async" />
                <div className="absolute inset-0 border border-white/5 rounded-[10px] pointer-events-none" />
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 – Creating Solutions Tailored to Needs */}
      <section className="ed-sec pb-16">
        <div className="ed-wide text-center space-y-6" data-reveal="">
          <h2 className="font-serif ed-title">
            Creating Solutions Tailored to Needs
          </h2>
          <p className="hb-body max-w-3xl mx-auto">
            Every organization, community, and individual operates within a unique ecosystem. We use the full potential of
            emerging technology to architect solutions that honor your constraints, amplify your strengths, and meet people
            where they are.
          </p>
        </div>
      </section>

      {/* Section 3b – What we build, and for whom (plain-language text for visitors and search) */}
      <section className="pb-16" id="services-what">
        <div className="ed-wide space-y-8" data-reveal="">
          <h2 className="font-serif ed-title text-center">What we build, and for whom</h2>
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="hb-body">
              HumanBased is a Copenhagen social enterprise that designs and builds digital tools for organizations, communities and individuals. Our work falls into three areas. Organizational development is about the systems a team runs on: workflows, dashboards and automation that remove busywork. Social development is about how people take part together: portals, feedback tools and decision-making that include more voices. Personal development is about companion tools for learning, focus and wellbeing that respect the privacy of the person using them.
            </p>
            <p className="hb-body">
              Most of our clients arrive with a symptom: reports that take too long, members who stop engaging, a process nobody trusts anymore. We start by finding the cause, because a new app on top of the wrong problem only adds one more thing to maintain. We then co-design the solution with the people who will use it, build it in small steps, and keep improving it after launch. Our <Link to="/process" className="underline decoration-white/30 hover:text-amber-400">process</Link> page shows each stage.
            </p>
            <p className="hb-body">
              We combine human expertise with AI where it genuinely helps, for example sorting information, drafting, forecasting or running routine tasks around the clock. We keep a person in charge of every decision that matters. Our own products, PurposeBased and BasedTalk, are built the same way. You can see them on the <Link to="/products" className="underline decoration-white/30 hover:text-amber-400">products</Link> page, and learn who is behind the company on the <Link to="/about" className="underline decoration-white/30 hover:text-amber-400">about</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 – Metric-driven case studies */}
      <section className="pb-20" id="services-impact">
        <div className="ed-full space-y-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" data-reveal="">
            <div>
              <h2 className="font-serif ed-title">
                Real Impact for Real Businesses
              </h2>
              <p className="hb-body hb-body--card max-w-xl mt-3">
                No hype, just measurable change. We design interventions that move the metrics that matter for your
                operations, finances, participation, and experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A – Productivity */}
            <div className="mx-card overflow-hidden group" data-reveal="">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactProductivityImg}
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="ed-label ed-label--lower">
                  Operations Productivity
                </p>
                <h3 className="font-serif ed-subtitle">Productivity Up</h3>
                <p className="hb-body hb-body--card">
                  Streamlined approval chains, automated status updates, and unified dashboards reduced decision latency and
                  manual handoffs across teams.
                </p>
              </div>
            </div>

            {/* Card B – Cost Reduction */}
            <div className="mx-card overflow-hidden group" data-reveal="">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactCostImg}
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                  width={1000}
                  height={667}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="ed-label ed-label--lower">
                  Cost Optimization
                </p>
                <h3 className="font-serif ed-subtitle">Cost Reduction</h3>
                <p className="hb-body hb-body--card">
                  Intelligent automation and demand-aware infrastructure reduced operational overhead while preserving
                  service quality and reliability.
                </p>
              </div>
            </div>

            {/* Card C – Participation */}
            <div className="mx-card overflow-hidden group" data-reveal="">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactParticipationImg}
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                  width={1000}
                  height={571}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/35 via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="ed-label ed-label--lower">
                  Internal Communications
                </p>
                <h3 className="font-serif ed-subtitle">Participation Increased</h3>
                <p className="hb-body hb-body--card">
                  Purpose-built channels, prompts, and feedback loops brought more voices into important decisions without
                  overwhelming the signal.
                </p>
              </div>
            </div>

            {/* Card D – Satisfaction */}
            <div className="mx-card overflow-hidden group" data-reveal="">
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                <img
                  src={impactSatisfactionImg}
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]"
                  width={1000}
                  height={571}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <p className="ed-label ed-label--lower">
                  Customer &amp; Staff Experience
                </p>
                <h3 className="font-serif ed-subtitle">Satisfaction Improved</h3>
                <p className="hb-body hb-body--card">
                  Thoughtful journeys, clearer communication, and responsive support created better days for the people who
                  use and deliver your services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 – How we deliver */}
      <section className="ed-sec" id="services-delivery">
        <div className="ed-full space-y-14">
          <div className="text-center space-y-4" data-reveal="">
            <h2 className="font-serif ed-title">
              How We Deliver
            </h2>
            <p className="hb-body hb-body--card max-w-2xl mx-auto">
              We combine focused human expertise with always-on intelligent systems so your organization can move with
              confidence, clarity, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expert Mission */}
            <div className="mx-card overflow-hidden group" data-reveal="">
              <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                <img src={expertMissionImg} className="visual-card-img vc-lit transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="Expert Mission" width={1200} height={800} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/40 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 space-y-5">
                <h3 className="font-serif ed-subtitle">
                  Expert Mission
                </h3>
                <p className="hb-body hb-body--card">
                  We work with a dedicated team whose only mission is to understand your world and solve the problems that
                  matter most, strategists, designers, and engineers aligned around your outcomes.
                </p>
              </div>
            </div>

            {/* 24/7 Intelligent Automation */}
            <div className="mx-card overflow-hidden group" data-reveal="">
              <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                <img src={automationImg} className="visual-card-img vc-lit transition-all duration-500 ease-out group-hover:brightness-110 group-hover:scale-[1.02]" alt="24/7 Intelligent Automation" width={1200} height={655} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/40 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 space-y-5">
                <h3 className="font-serif ed-subtitle">
                  24/7 Intelligent Automation
                </h3>
                <p className="hb-body hb-body--card">
                  We design always-on automation that extends your capacity while keeping humans firmly in control, so your
                  systems keep working, even when your team is offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6 – Questions we hear */}
      <section className="ed-sec pb-16" id="services-faq">
        <div className="ed-wide space-y-10">
          <h2 className="font-serif ed-title text-center" data-reveal="">Questions we hear</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {FAQ.map(({ q, a }) => (
              <div key={q} data-reveal="">
                <h3 className="font-serif ed-subtitle mb-2">{q}</h3>
                <p className="hb-body hb-body--card">{a}</p>
              </div>
            ))}
            <p className="hb-body hb-body--card text-center pt-4">
              Have a different question? <a href="/#contact" className="underline decoration-white/30 hover:text-amber-400">Get in touch</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;