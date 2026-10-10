import React from 'react';
import { usePageSeo } from '../hooks/usePageSeo';
import Philosophy from '../components/Philosophy';
import CapabilitiesGrid from '../components/CapabilitiesGrid';
import { Link } from 'react-router-dom';
import TeamBlock from '../components/TeamBlock';
import Journey from '../components/motion/Journey';
import { HB_JOURNEY } from '../components/motion/journeys';

const AboutPage: React.FC = () => {
  usePageSeo({
    title: 'About – HumanBased',
    description:
      'HumanBased is a social enterprise built on one conviction: technology should serve humanity. See our mission, philosophy, and human-first approach.',
    canonical: 'https://www.humanbased.org/about',
  });
  return (
    <div className="flex-grow bg-transparent relative">
      <Journey
        milestones={HB_JOURNEY(['#about-why', '#team-heading', '#about-philosophy', '#about-capabilities'])}
        end="#about-card"
      />
      {/* Section 1 – Hero */}
      <section className="ed-sec--first pb-0" id="about-why">
        <div className="ed-narrow text-center ed-stack">
          <p className="ed-label mx-intro">OUR WHY</p>
          <h1 className="font-serif ed-display mx-intro pb-4">About HumanBased</h1>
          <p className="font-serif ed-lead" data-reveal="">
            HumanBased is a social enterprise founded on a core conviction: 
            technology exists to serve humanity, to advance social progress and improve 
            life on Earth.
          </p>

          <p className="font-serif ed-lead" data-reveal="">
            Our mission is to harness the full potential of innovation and solve real problems while preserving what makes us fundamentally Human. We work to amplify Natural Human Intelligence, strengthen human connection, and protect the organic systems that enable our existence.
          </p>

          <p className="font-serif ed-lead" data-reveal="">
            We deploy state-of-the-art digital solutions to address social challenges without sacrificing the values of connection and authenticity, the core of who we are.
          </p>

          <p className="font-serif ed-lead" data-reveal="">
            In an era often captivated by replacement and automation, our focus is rather on system optimization and values restoration. Our base commitment is to use technological progress to empower Humanity.
          </p>

          <p className="font-serif ed-lead" data-reveal="">
            We exist to alleviate suffering, solve problems once thought unsolvable, and empower Humans to reach their full potential.
          </p>

          <p className="font-serif ed-lead" data-reveal="">
            We do not build technology to transcend Humanity. We build it to restore, enhance, and honor it.
          </p>

          <p className="font-serif ed-lead" data-reveal="">
            This is our contribution to a new Renaissance of Human genius, a time of unprecedented levels of progress is on the horizon.
          </p>
        </div>
      </section>

      <div className="ed-wide text-center ed-sec">
        <p className="ed-quote" data-reveal="">
          We exist to put technology in service of humanity, bridging
          organizational goals, social impact, and personal development with
          systems that actually work for people.
        </p>
      </div>

      {/* Who is behind HumanBased */}

      <TeamBlock />


      {/* Section 2 – Philosophy */}
      <Philosophy />

      {/* Section 3 – CapabilitiesGrid */}
      <section className="ed-sec" id="about-capabilities">
        <div className="ed-full ed-stack-lg">
          <div className="ed-stack" data-reveal="">
            <h2 className="font-serif ed-title">
              What We Stand For
            </h2>
            <p className="ed-lead text-white/65 max-w-2xl">
              These are the capabilities we bring into every engagement, linking strategy,
              responsible technology, ethics, and enablement.
            </p>
          </div>
          <CapabilitiesGrid />
        </div>
      </section>

      {/* Section 4 – About HumanBased Card */}
      <section className="ed-sec pt-0" id="about-card">
        <div className="ed-full">
          <div className="mx-card p-8 md:p-12 lg:p-16" data-reveal="">
            <div className="max-w-3xl mx-auto text-center ed-stack">
              <h2 className="font-serif ed-title">
                About HumanBased
              </h2>
              <p className="ed-lead text-white/70">
                We design, build, and operationalize digital platforms that deliver measurable outcomes: reduced costs, increased productivity, stronger participation, and higher satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="/#contact"
                  className="ed-btn ed-btn--primary"
                >
                  Get in Touch
                </a>
                <Link
                  to="/services"
                  className="ed-btn ed-btn--ghost normal-case tracking-normal"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;