import React from 'react';
import { Link } from 'react-router-dom';
import servicesImg from '../../assets/images/services-hero.webp';

// Home "Choose your path". Product names, labels, body lines, images and URLs are
// taken from pages/ProductsPage.tsx and the PurposeBased home (APP_SIGNUP_URL); the
// Products page itself is not changed. PurposeBased is a live web app, so the home
// shows "Available now" and "Start free" and no waitlist button.
const BASEDTALK_PLAY_URL = 'https://play.google.com/store/apps/details?id=org.humanbased.basedtalk';
const PURPOSEBASED_APP_URL = 'https://www.purposebased.app';

const ProductCard: React.FC<{
  name: string;
  label: string;
  body: string;
  media: React.ReactNode;
  actions: React.ReactNode;
}> = ({ name, label, body, media, actions }) => (
  <li className="mx-card hh-product">
    <div className="hh-product-media">{media}</div>
    <div className="hh-product-body">
      {/* Same status pill as the Products page (pages/ProductsPage.tsx). */}
      <p>
        <span className="inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border border-[rgba(212,168,67,0.55)] bg-[rgba(8,16,34,0.62)] py-2 pl-[13px] pr-4 text-[12px] font-medium uppercase tracking-[0.16em] text-white/95 shadow-[0_4px_18px_rgba(0,0,0,0.35)] backdrop-blur-[10px]">
          <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-[#4ade80] shadow-[0_0_0_3px_rgba(74,222,128,0.2),0_0_10px_#4ade80]" />
          Available now
        </span>
      </p>
      <h4 className="hh-product-name">{name}</h4>
      <p className="ed-label">{label}</p>
      <p className="hh-text">{body}</p>
      <div className="hh-actions">{actions}</div>
    </div>
  </li>
);

// The PurposeBased card art with the caption the Products page overlays on it,
// at the phone sizes (the home cards are never wider than a phone card).
const PurposeBasedMedia: React.FC = () => (
  <>
    <div
      className="hh-product-bg bg-cover bg-center"
      style={{ backgroundImage: "url('/images/purposebased/pb-card-hero.webp')" }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 bg-gradient-to-t from-[#050509]/85 via-[#050509]/25 to-[#050509]/50"
      aria-hidden="true"
    />
    <div className="absolute inset-0 flex items-start justify-center pt-8" aria-hidden="true">
      <div className="relative isolate mx-6 max-w-[80%] text-center">
        <span className="pb-caption-scrim" />
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-amber-400/90 hb-caption-halo">
          Welcome, Seeker
        </p>
        <p className="mt-1.5 font-serif text-[23px] font-medium leading-tight text-white hb-caption-halo">
          You are about to find
        </p>
        <p className="mt-[3.75rem] font-serif italic text-[29px] font-medium leading-tight text-[#d8bc6e] hb-caption-halo">
          your purpose
        </p>
      </div>
    </div>
  </>
);

const ChoosePath: React.FC = () => (
  <section id="paths" className="ed-sec" aria-labelledby="paths-heading">
    <div className="ed-full">
      <header className="hh-head" data-reveal="">
        <h2 id="paths-heading" className="font-serif ed-title">
          Choose your path
        </h2>
        <p className="ed-lead">What brings you here?</p>
      </header>

      <div className="hh-paths">
        {/* Path 1: products */}
        <article className="hh-path" aria-labelledby="path-products" data-reveal="">
          <div className="hh-path-text">
            <p className="hh-path-num" aria-hidden="true">01</p>
            <h3 id="path-products" className="font-serif ed-title">
              Our products
            </h3>
            <p className="hh-path-tagline">Tools for greater clarity.</p>
            <p className="hh-text">
              BasedTalk, for relational intelligence and self-awareness, and PurposeBased, for
              purpose, self-knowledge, direction and meaningful growth.
            </p>
            <Link to="/products" className="hh-link">
              See all products <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="hh-products">
            <ProductCard
              name="BasedTalk"
              label="Relational Intelligence App"
              body="Reveal patterns. Practice boundaries. Reclaim your power. Available now on Google Play."
              media={
                <img
                  className="hh-product-contain"
                  src="/bt-banner.webp"
                  alt="BasedTalk app banner"
                  width={1024}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              }
              actions={
                <>
                  {/* Full page load: /apps/basedtalk is served by the BasedTalk site (vercel.json rewrite). */}
                  <a href="/apps/basedtalk" className="ed-btn ed-btn--primary">
                    Explore BasedTalk
                  </a>
                  <a
                    href={BASEDTALK_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ed-btn ed-btn--ghost"
                  >
                    Get on Google Play
                    <span className="hh-sr-only"> (opens in a new tab)</span>
                  </a>
                </>
              }
            />
            <ProductCard
              name="PurposeBased"
              label="Purpose & Self-Knowledge App"
              body="Understand your patterns. Find your direction. Live with intention."
              media={<PurposeBasedMedia />}
              actions={
                <>
                  <a
                    href={PURPOSEBASED_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ed-btn ed-btn--primary"
                  >
                    Start free
                    <span className="hh-sr-only"> with PurposeBased (opens in a new tab)</span>
                  </a>
                  <Link to="/purposebased" className="ed-btn ed-btn--ghost">
                    Explore PurposeBased
                  </Link>
                </>
              }
            />
          </ul>
        </article>

        {/* Path 2: services */}
        <article className="hh-path" aria-labelledby="path-services" data-reveal="">
          <div className="hh-path-text">
            <p className="hh-path-num" aria-hidden="true">02</p>
            <h3 id="path-services" className="font-serif ed-title">
              Our services
            </h3>
            <p className="hh-path-tagline">Systems built around people.</p>
            <p className="hh-text">
              Digital products and intelligent systems for organizations, communities and people.
              We design and build the platforms, workflows and tools that make daily work and life
              easier, together with the people who will use them.
            </p>
            <p className="hh-text">
              For organizations, that can include AI-assisted workflow automation that removes
              busywork while decisions stay with people.
            </p>
            <Link to="/services" className="hh-link">
              Explore our services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hh-media">
            <img
              src={servicesImg}
              alt=""
              width={1264}
              height={848}
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default ChoosePath;
