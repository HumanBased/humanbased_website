import React from 'react';
import { preload } from 'react-dom';
import { Link } from 'react-router-dom';
import './Hero.css';

// Earth at night from orbit (public/images/hero, built by scripts/hero-images.mjs).
// The section has no background of its own: the photo is screen-blended onto the
// real page background and masked on all four edges, so it has no visible frame.
const HERO_WIDTHS = [960, 1680, 2560, 3360];
const srcSet = (ext: string) =>
  HERO_WIDTHS.map((w) => `/images/hero/hero-hb-${w}.${ext} ${w}w`).join(', ');
// Mobile shows a crop around 200vw wide (planet curve and lights); desktop covers.
const HERO_SIZES = '(max-width: 767px) 200vw, 100vw';

const Hero: React.FC = () => {
  // Hoisted into <head> (and so into the prerendered HTML) as the LCP image.
  preload('/images/hero/hero-hb-1680.avif', {
    as: 'image',
    type: 'image/avif',
    fetchPriority: 'high',
    imageSrcSet: srcSet('avif'),
    imageSizes: HERO_SIZES,
  });

  return (
    <section className="hb-hero" id="hero">
      <div className="hb-hero-media" data-parallax="0.16" aria-hidden="true">
        <picture>
          <source type="image/avif" srcSet={srcSet('avif')} sizes={HERO_SIZES} />
          <source type="image/webp" srcSet={srcSet('webp')} sizes={HERO_SIZES} />
          <img
            className="hb-hero-img"
            src="/images/hero/hero-hb-1680.webp"
            alt=""
            width={1680}
            height={944}
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="hb-hero-veil" aria-hidden="true" />

      <div className="hb-hero-content">
        <div className="hb-hero-copy mx-intro">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05] text-white">
            Human problems.<br />
            <span className="text-amber-500">Digital solutions.</span>
          </h1>

          <div className="hb-hero-lines">
            <p>We are on a mission to transform how Humanity lives and works.</p>
            <p>Technology in service of humanity.</p>
            <p>Purpose built. Human focused.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-colors text-center text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border border-white/20 bg-white/5 text-white/90 font-medium rounded-full hover:bg-white/10 hover:border-white/35 hover:text-white transition-colors text-center text-sm sm:text-base"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
