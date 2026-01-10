import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import Philosophy from '../components/Philosophy';
import CapabilitiesGrid from '../components/CapabilitiesGrid';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  usePageTitle('About – HumanBased');
  return (
    <div className="flex-grow bg-transparent">
      {/* Section 1 – Hero */}
      <section className="pb-0">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5 pt-32">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-amber-400">
            OUR WHY
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8">
            About HumanBased
          </h1>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
            HumanBased is a social enterprise founded on a core conviction: 
            technology exists to serve humanity, to advance social progress and improve 
            life on Earth.
          </p>

          <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
            Our mission is to harness the full potential of innovation and solve real problems while preserving what makes us fundamentally Human. We work to amplify Natural Human Intelligence, strengthen human connection, and protect the organic systems that enable our existence.
          </p>

          <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
            We deploy state-of-the-art digital solutions to address social challenges without sacrificing the values of connection and authenticity, the core of who we are.
          </p>

          <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
            In an era often captivated by replacement and automation, our focus is rather on system optimization and values restoration. Our base commitment is to use technological progress to empower Humanity.
          </p>

          <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
            We exist to alleviate suffering, solve problems once thought unsolvable, and empower Humans to reach their full potential.
          </p>

          <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
            We do not build technology to transcend Humanity. We build it to restore, enhance, and honor it.
          </p>

          <p className="font-serif text-lg md:text-xl leading-relaxed text-white/80">
            This is our contribution to a new Renaissance of Human genius, a time of unprecedented levels of progress is on the horizon.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="mt-[50px] mb-[50px] text-xl md:text-2xl italic text-white/80">
          We exist to put technology in service of humanity, bridging
          organizational goals, social impact, and personal development with
          systems that actually work for people.
        </p>
      </div>

      {/* Section 2 – Philosophy */}
      <Philosophy />

      {/* Section 3 – CapabilitiesGrid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
              What We Stand For
            </h2>
            <p className="text-white/60 max-w-2xl mt-3 pt-[25px] pb-[25px]">
              These are the capabilities we bring into every engagement, linking strategy,
              responsible technology, ethics, and enablement.
            </p>
          </div>
          <CapabilitiesGrid />
        </div>
      </section>

      {/* Section 4 – About HumanBased Card */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass rounded-[3rem] border-white/5 bg-white/[0.01] p-8 md:p-10 lg:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-[33px] md:text-4xl font-medium tracking-tight">
                About HumanBased
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                We design, build, and operationalize digital platforms that deliver measurable outcomes: reduced costs, increased productivity, stronger participation, and higher satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
                >
                  Get in Touch
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center border border-white/20 bg-white/5 text-white/90 font-medium px-6 py-2.5 rounded-full hover:bg-white/10 hover:text-white transition-all text-sm"
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