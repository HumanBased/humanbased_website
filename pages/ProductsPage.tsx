import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const ComingSoonCard: React.FC = () => (
  <div className="relative glass rounded-[2.5rem] border-white/5 bg-white/[0.015] overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] pointer-events-none" />
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#070713] to-[#050509]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,164,65,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.06),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.35em] text-white/30 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
          In Development
        </span>
      </div>
    </div>
    <div className="relative p-7 md:p-8 space-y-3">
      <h3 className="font-serif text-2xl md:text-[26px] font-medium text-white/40">
        Coming Soon
      </h3>
      <p className="text-xs uppercase tracking-[0.25em] text-white/25">
        Next HumanBased Product
      </p>
      <p className="text-sm text-white/30 font-light leading-relaxed">
        We are building the next chapter of HumanBased. Quietly, deliberately, with humans at the center.
      </p>
    </div>
  </div>
);

const ProductsPage: React.FC = () => {
  usePageTitle('Our Products, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="light-blob w-[600px] h-[600px] bg-amber-500/10 top-0 left-1/2 -translate-x-1/2"></div>
        <div className="light-blob w-[500px] h-[500px] bg-indigo-500/10 bottom-0 right-0"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-amber-400">
            Our Products
          </p>
          <h1 className="font-serif tracking-tight leading-[1.05] text-white space-y-2 md:space-y-3">
            <span className="block font-light text-3xl sm:text-4xl md:text-5xl text-white/90">
              Our technology is built on
            </span>
            <span className="block font-light text-3xl sm:text-4xl md:text-5xl text-white/90">
              one simple truth
            </span>
            <span className="block font-bold text-amber-500 text-3xl sm:text-4xl md:text-5xl">
              Humanity comes first.
            </span>
          </h1>
          <p className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-white max-w-2xl mx-auto leading-relaxed pt-2">
            Empowering people through technology that serves their needs.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BasedTalk, active */}
            <div className="relative group">
              <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-amber-500/40 via-amber-400/10 to-indigo-500/30 opacity-70 blur-[2px] group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative glass rounded-[2.5rem] border border-amber-500/20 bg-[#0a0a14]/80 overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-amber-500/40">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                  <img
                    src="/bt-banner.png"
                    alt="BasedTalk app banner"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-black font-bold text-xs tracking-widest px-3 py-1 rounded-full uppercase">
                      Available Now
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white">
                      BasedTalk
                    </h3>
                    <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-amber-400/90 font-semibold">
                      Relational Intelligence App
                    </p>
                  </div>

                  <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
                    Reveal patterns. Practice boundaries. Reclaim your power. Available now on Google Play.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      to="/apps/basedtalk"
                      className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black text-xs md:text-sm font-bold px-6 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] uppercase tracking-wider shadow-xl shadow-amber-500/10"
                    >
                      Explore BasedTalk
                    </Link>
                    <a
                      href="https://play.google.com/store/apps/details?id=org.humanbased.basedtalk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white/90 hover:text-white text-xs md:text-sm font-bold px-6 py-3 rounded-full transition-all uppercase tracking-wider"
                    >
                      Get on Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Coming Soon placeholders */}
            <ComingSoonCard />
            <ComingSoonCard />
            <ComingSoonCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
