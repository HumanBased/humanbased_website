import React from 'react';
import { usePageSeo } from '../hooks/usePageSeo';
import Process from '../components/Process';
import WhyHumanBased from '../components/WhyHumanBased';
import OutcomeSafeguards from '../components/OutcomeSafeguards';
import processHeroImg from '../assets/images/process-hero.webp';
import Journey from '../components/motion/Journey';
import { HB_JOURNEY } from '../components/motion/journeys';
import TrustLine from '../components/TrustLine';

const ProcessPage: React.FC = () => {
  usePageSeo({
    title: 'The Process – HumanBased',
    description:
      'Our four-step method, discover, design, build, evolve, keeps clients in control and protects the outcomes that matter: productivity, cost, and satisfaction.',
    canonical: 'https://www.humanbased.org/process',
  });
  return (
    <div className="flex-grow bg-transparent relative">
      <Journey
        milestones={HB_JOURNEY(['#process-hero', '#process-steps', '#process-outcomes', '#process-cta'])}
      />
      {/* Hero Section: the photo is capped at its native 1376px and dissolves on
          all four edges into the page background (same technique as the home hero). */}
      <section className="relative min-h-[80vh] flex items-center justify-center" id="process-hero">
        <div className="hb-dissolve absolute inset-y-0 my-auto max-h-[768px] left-1/2 -translate-x-1/2 w-full max-w-[1376px]" aria-hidden="true">
          <img
            src={processHeroImg}
            alt=""
            className="w-full h-full object-cover"
            width={1376}
            height={768}
            decoding="async"
          />
        </div>
        {/* Readability: a soft centred wash, faded on the same edges. */}
        <div className="hb-dissolve hb-dissolve--veil absolute inset-0" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 ed-wide text-center space-y-6 mx-intro">
          <h1 className="font-serif ed-display">
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
      <div id="process-steps">
        <Process />
      </div>

      {/* Section 2 – Outcome Safeguards */}
      <section className="ed-sec pt-8" id="process-outcomes">
        <div className="ed-full space-y-10">
          <div className="ed-stack" data-reveal="">
            <h2 className="font-serif ed-title">
              Outcomes We Protect
            </h2>
            <p className="ed-lead text-white/65 max-w-2xl">
              Our process is designed to improve what matters most: productivity, cost, participation, and satisfaction.
            </p>
          </div>
          <OutcomeSafeguards />
        </div>
      </section>

      {/* Section 3 – Why HumanBased? */}
      <WhyHumanBased />

      {/* Section 4 – Closing CTA */}
      <hr className="mx-divider" />
      <section className="ed-sec" id="process-cta">
        <div className="ed-full flex flex-col md:flex-row md:items-center md:justify-between gap-8" data-reveal="">
          <div className="ed-stack">
            <h3 className="font-serif ed-title">
              Ready to work with a human‑first partner?
            </h3>
            <p className="ed-lead text-white/65 max-w-xl">
              Tell us about your organization, community, or product. We'll map a path
              from today's complexity to measurable, human‑centered outcomes.
            </p>
          </div>
          <div>
            <a
              href="/#contact"
              className="ed-btn ed-btn--primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="ed-full mt-14">
          <TrustLine />
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;