import React from 'react';
import { preload } from 'react-dom';
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
  // The italic line sits on the first screen; the upright face is preloaded by MainLayout.
  preload('/fonts/cormorant-garamond-latin-italic.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  // Hoisted into <head> (and so into the prerendered HTML) as the LCP image.
  preload('/images/hero/hero-hb-1680.avif', {
    as: 'image',
    type: 'image/avif',
    fetchPriority: 'high',
    imageSrcSet: srcSet('avif'),
    imageSizes: HERO_SIZES,
  });

  return (
    <section className="hb-hero" id="hero" data-pause-offscreen="">
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
            <p className="hb-hero-line1">We are on a mission to transform how Humanity lives and works.</p>
            <p className="hb-hero-line2">Technology in service of humanity.</p>
            <p className="hb-hero-line3">Purpose built. Human focused.</p>
          </div>

          {/* No call-to-action buttons here on purpose: the hero is for the picture and the
              message. Contact lives in the header menu and the sections below. */}
          <a href="#about" className="hb-hero-scroll" aria-label="Scroll to the next section">
            <span className="hb-hero-scroll-label">Scroll</span>
            <span className="hb-hero-scroll-line" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
