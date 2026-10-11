import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../hooks/usePageSeo';
import Journey from '../components/motion/Journey';
import { HB_JOURNEY } from '../components/motion/journeys';

const ComingSoonCard: React.FC<{ id?: string }> = ({ id }) => (
  <div className="mx-card overflow-hidden" data-reveal="" id={id}>
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[13px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/55 px-3 py-1.5 rounded-full border border-white/15">
          In Development
        </span>
      </div>
    </div>
    <div className="relative p-6 sm:p-7 lg:p-8 space-y-3">
      <h2 className="font-serif ed-subtitle text-white/70">
        Coming Soon
      </h2>
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">
        Next HumanBased Product
      </p>
      <p className="hb-body hb-body--card">
        We are building the next chapter of HumanBased. Quietly, deliberately, with humans at the center.
      </p>
    </div>
  </div>
);

const ProductsPage: React.FC = () => {
  usePageSeo({
    title: 'Our Products – HumanBased',
    description:
      'Explore HumanBased products: BasedTalk, a relational intelligence app available now on Google Play, and PurposeBased, our purpose and self-knowledge app.',
    canonical: 'https://www.humanbased.org/products',
  });

  return (
    <div className="flex-grow bg-transparent relative">
      <Journey
        milestones={HB_JOURNEY(['#products-hero', '#products-grid', '#product-next', '#products-end'])}
        end="#products-end"
      />
      {/* Hero */}
      <section className="ed-sec--first pb-20 md:pb-24" id="products-hero">
        <div className="relative ed-wide text-center space-y-6 mx-intro">
          <p className="ed-label">
            Our Products
          </p>
          <h1 className="font-serif ed-display text-white space-y-2 md:space-y-3">
            <span className="block font-light text-white/90">
              Our technology is built on
            </span>
            <span className="block font-light text-white/90">
              one simple truth
            </span>
            <span className="block font-medium text-amber-500">
              Humanity comes first.
            </span>
          </h1>
          <p className="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-white/75 max-w-2xl mx-auto leading-relaxed pt-4">
            Empowering people through technology that serves their needs.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="pb-32" id="products-grid">
        <div className="ed-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* BasedTalk, active */}
            <div
              className="relative group cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={() => { window.location.href = '/apps/basedtalk'; }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = '/apps/basedtalk';
                }
              }}
              aria-label="Open BasedTalk"
            >
              <div className="mx-card overflow-hidden h-full" data-reveal="">
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full uppercase tracking-[0.2em] whitespace-nowrap bg-[#c4a85a] text-black text-[11px] font-bold px-4 py-2">
                    Available Now
                  </span>
                </div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40 mt-12">
                  <img
                    src="/bt-banner.webp"
                    alt="BasedTalk app banner"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    width={1024}
                    height={500}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/70 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8 lg:p-10 space-y-5">
                  <div className="space-y-2">
                    <h2 className="font-serif ed-title text-white">
                      BasedTalk
                    </h2>
                    <p className="ed-label">
                      Relational Intelligence App
                    </p>
                  </div>

                  <p className="hb-body hb-body--card">
                    Reveal patterns. Practice boundaries. Reclaim your power. Available now on Google Play.
                  </p>

                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 pt-2">
                    <Link
                      to="/apps/basedtalk"
                      onClick={(e) => e.stopPropagation()}
                      className="ed-btn ed-btn--primary"
                    >
                      Explore BasedTalk
                    </Link>
                    <a
                      href="https://play.google.com/store/apps/details?id=org.humanbased.basedtalk"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ed-btn ed-btn--ghost"
                    >
                      Get on Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PurposeBased, coming soon */}
            <div
              className="relative group cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={() => { window.location.href = '/purposebased'; }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = '/purposebased';
                }
              }}
              aria-label="Open PurposeBased"
            >
              <div className="mx-card overflow-hidden h-full" data-reveal="">
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full uppercase tracking-[0.2em] whitespace-nowrap bg-[#c4a85a] text-black text-[11px] font-bold px-4 py-2">
                    Available Now
                  </span>
                </div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a0a14] mt-12">
                  {/* PurposeBased hero image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ backgroundImage: "url('/images/purposebased/pb-card-hero.webp')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/85 via-[#050509]/25 to-[#050509]/50" />
                  <div className="absolute inset-0 flex items-start justify-center pt-8 sm:pt-10 lg:pt-12">
                    <div className="mx-6 sm:mx-8 lg:mx-10 max-w-[80%] text-center">
                      <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.3em] text-amber-400/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
                        Welcome, Seeker
                      </p>
                      <p className="mt-1.5 font-serif text-[23px] sm:text-[29px] lg:text-[35px] font-medium leading-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
                        You are about to find
                      </p>
                      <p className="mt-[3.75rem] sm:mt-[4.25rem] lg:mt-[4.75rem] font-serif italic text-[29px] sm:text-[35px] lg:text-[43px] font-medium leading-tight text-amber-400 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] [filter:drop-shadow(0_1px_2px_rgba(196,168,90,0.25))]">
                        your purpose
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10 space-y-5">
                  <div className="space-y-2">
                    <h2 className="font-serif ed-title text-white">
                      PurposeBased
                    </h2>
                    <p className="ed-label">
                      Purpose &amp; Self-Knowledge App
                    </p>
                  </div>

                  <p className="hb-body hb-body--card">
                    Understand your patterns. Find your direction. Live with intention.
                  </p>

                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 pt-2">
                    <Link
                      to="/purposebased"
                      onClick={(e) => e.stopPropagation()}
                      className="ed-btn ed-btn--primary"
                    >
                      Explore PurposeBased
                    </Link>
                    <Link
                      to="/purposebased#pricing"
                      onClick={(e) => e.stopPropagation()}
                      className="ed-btn ed-btn--ghost"
                    >
                      Join the Waitlist
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Coming Soon placeholders */}
            <ComingSoonCard id="product-next" />
            <ComingSoonCard />
          </div>
          <div id="products-end" />
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
