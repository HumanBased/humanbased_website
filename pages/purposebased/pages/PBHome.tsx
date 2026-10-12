import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import Journey from '../../../components/motion/Journey';
import { PB_JOURNEY } from '../../../components/motion/journeys';

// PurposeBased home. Premium wellness/purpose landing page.
// Cormorant for headings, DM Sans for body/labels. Colour tokens live in the
// scoped <style> block below as CSS custom properties on .pbh.

const FEATURES: { n: string; title: string; body: string; img: string }[] = [
  {
    n: '01',
    title: 'Know Thyself',
    body:
      'Your Know Thyself reading: a full convergence reading, written as one. Not separate reports, one portrait of who you are.',
    img: '/images/features/know-thyself.webp',
  },
  {
    n: '02',
    title: 'Purpose Guide',
    body:
      'A conversation that already holds your blueprint. Ask about a decision and get an answer grounded in your own structure, not generic advice.',
    img: '/images/features/guide.webp',
  },
  {
    n: '03',
    title: 'Know Where You Stand',
    body:
      'Daily alignment against the current sky. Short, specific, and tied to what you are actually working on right now.',
    img: '/images/features/know-where-you-stand.webp',
  },
  {
    n: '04',
    title: 'My People',
    body:
      'The people who matter, read alongside you. Understand the dynamic instead of guessing at it.',
    img: '/images/features/my-people.webp',
  },
  {
    n: '05',
    title: 'Odyssey',
    body:
      'Your life as a long arc. Chapters, turning points, and the direction the whole thing is pointing.',
    img: '/images/features/odyssey.webp',
  },
];

const PILLARS: { title: string; body: string }[] = [
  { title: 'Depth', body: 'A full convergence reading, not one horoscope in isolation.' },
  { title: 'Direction', body: 'A guide that knows your blueprint and speaks from it.' },
  { title: 'Practice', body: 'Daily alignment you can act on, not content you scroll past.' },
];

// App screenshots for the "What a reading looks like" section. `src` stays null
// until the WebP exists in public/images/purposebased/ (the source PNGs were not in
// the repo); a null src renders a clearly labelled placeholder, not a broken image.
// Both frames share one aspect ratio so the phones always match.
// Flip to true once the WebPs below exist; the section is skipped entirely until then.
const SHOW_READING = false;
const SHOT_WIDTH = 390;
const SHOT_HEIGHT = 844;
const READING_SHOTS: { src: string | null; alt: string; placeholder: string }[] = [
  {
    src: null, // '/images/purposebased/app-reading.webp'
    alt: 'The reading screen in the PurposeBased app, showing your main pattern written for you.',
    placeholder: 'Reading screen',
  },
  {
    src: null, // '/images/purposebased/app-vision.webp'
    alt: 'The vision screen in the PurposeBased app.',
    placeholder: 'Vision screen',
  },
];

// Every statement below is lifted from a published page (privacy, delete-account, Story).
const DATA_POINTS: { title: string; body: string }[] = [
  {
    title: 'Privacy by default',
    body: 'Built to minimize data collection and maximize your privacy from day one.',
  },
  {
    title: 'Delete anytime',
    body: 'Delete your account in the app and your personal data is permanently removed within 30 days.',
  },
  {
    title: 'No engagement games',
    body: 'We are not here to maximize engagement or profit from confusion.',
  },
];

const PRIVACY_PATH = '/apps/purposebased/privacy';
const DELETE_ACCOUNT_PATH = '/apps/purposebased/delete-account';
const STORY_PATH = '/purposebased/story';

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is it free?',
    a: (
      <p>
        Yes. PurposeBased has a free tier, so you can start without paying. The plans above show
        what each tier includes.
      </p>
    ),
  },
  {
    q: 'What do I need to start?',
    a: (
      <p>
        An account, your date, time and place of birth, and a few questions during onboarding.
        Your birth details are used to calculate your astrological and numerological placements.
      </p>
    ),
  },
  {
    q: 'Is it only astrology?',
    a: (
      <p>
        No. Astrology is one lens among several. PurposeBased combines ancient traditions such as
        Numerology and Chinese Astrology with modern frameworks such as Hierarchy of Values, and
        reads them together as one pattern.
      </p>
    ),
  },
  {
    q: 'How is my data used, and can I delete it?',
    a: (
      <>
        <p>
          Your birth data and answers are used only to generate your reading and your Guide
          conversations. We do not sell, rent or share your personal data for advertising,
          marketing or model training.
        </p>
        <p>
          You can delete your account in the app, under Settings, then Delete Account. Your
          personal data is permanently removed within 30 days. Read the{' '}
          <Link to={PRIVACY_PATH}>privacy policy</Link> or the{' '}
          <Link to={DELETE_ACCOUNT_PATH}>delete account page</Link>.
        </p>
      </>
    ),
  },
  {
    q: 'Can I cancel?',
    a: (
      <p>
        Yes, anytime. Go to Settings, then Manage Subscription. You keep access until the end of
        your current billing period and will not be charged again after that.
      </p>
    ),
  },
  {
    q: 'What is the Guide?',
    a: (
      <p>
        A conversation that already holds your blueprint. Ask about a decision and get an answer
        grounded in your own structure, not generic advice.
      </p>
    ),
  },
];

// Checkout destinations.
// Seeker is free, so it goes straight to signup in the app, not to Stripe.
// The two paid tiers point at Stripe Payment Links; swap the placeholders for
// the real https://buy.stripe.com/... URLs from the Stripe dashboard.
const APP_SIGNUP_URL = 'https://www.purposebased.app';
const CHECKOUT_BASED = 'https://buy.stripe.com/dRmaEWcBwf2G1YucNX3F600';
const CHECKOUT_BLISSED = 'https://buy.stripe.com/dRmcN49pkf2GfPk3dn3F601';

const scrollToId = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const PB_URL = 'https://www.humanbased.org/purposebased';

const PBHome: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  // The hero artwork is a CSS background, so give the browser an early, high-priority
  // fetch for it (the prerendered HTML keeps this link in <head>).
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/purposebased/hero-bg.webp';
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  usePageSeo({
    title: "PurposeBased | Become Who You're Meant To Be",
    description:
      'The most comprehensive tool to not only find your purpose but follow it, and live a more meaningful life. Start free.',
    canonical: PB_URL,
    og: {
      description: 'Find your purpose, and follow it.',
      url: PB_URL,
    },
    twitter: {
      description: 'Find your purpose, and follow it.',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'PurposeBased',
      description:
        'A self-knowledge app that reads your patterns in a full convergence reading, helps you find your direction, and supports living with intention.',
      url: PB_URL,
      image: 'https://www.humanbased.org/images/og/og-purposebased.jpg',
      applicationCategory: 'LifestyleApplication',
      publisher: {
        '@type': 'Organization',
        name: 'HumanBased',
        url: 'https://www.humanbased.org',
      },
    },
  });

  return (
    <div className="pbh" ref={rootRef} style={{ position: 'relative' }}>
      <Journey
        start=".pbh-hero-content"
        milestones={PB_JOURNEY(['#how-it-works', '#features', '.pbh-close'])}
      />
      {/* ============ SECTION 1 - HERO ============ */}
      <section id="home" className="pbh-hero">
        <div className="pbh-hero-bg" aria-hidden="true" />
        <div className="pbh-hero-scrim" aria-hidden="true" />
        <div className="pbh-hero-glow-a" aria-hidden="true" />
        <div className="pbh-hero-glow-b" aria-hidden="true" />
        <div className="pbh-hero-content">
          <p className="pbh-label">Welcome, Seeker</p>
          <h1 className="pbh-h1">
            You are about to find
            <br />
            <em>your purpose</em>
          </h1>
          <p className="pbh-sub">
            Today might be the day everything becomes clear. Start the journey towards a life on
            purpose.
          </p>
          <div className="pbh-cta-row">
            <a
              href="https://www.purposebased.app"
              target="_blank"
              rel="noopener noreferrer"
              className="pbh-btn pbh-btn--solid"
            >
              Start your journey
            </a>
            <button
              type="button"
              className="pbh-btn pbh-btn--glass"
              onClick={scrollToId('how-it-works')}
            >
              How it works
            </button>
          </div>
          <p className="pbh-hero-note">
            Free to start · Delete your data anytime · Built in Copenhagen, where people are at the
            center
          </p>
        </div>
        <span className="pbh-chevron" aria-hidden="true" />
      </section>

      {/* ============ SECTION 1A - WHAT A READING LOOKS LIKE (hidden by SHOW_READING) ============ */}
      {SHOW_READING && (
      <section id="reading" data-reveal="" className="pb-section pbh-sec pbh-reading" aria-labelledby="reading-h">
        <div className="pbh-wrap">
          <p className="pbh-label">Example reading</p>
          <h2 className="pbh-h2" id="reading-h">
            What a <em>reading</em> looks like
          </h2>
          <p className="pbh-body pbh-reading-line">
            A real screen from the app: your main pattern, written for you.
          </p>
          <div className="pbh-phones">
            {READING_SHOTS.map((shot) => (
              <div key={shot.placeholder} className="pbh-phone">
                <div className="pbh-phone-screen">
                  {shot.src ? (
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      width={SHOT_WIDTH}
                      height={SHOT_HEIGHT}
                      loading="lazy"
                      decoding="async"
                      className="pbh-phone-img"
                    />
                  ) : (
                    <div className="pbh-phone-ph" role="img" aria-label={`Placeholder: ${shot.alt}`}>
                      <span>{shot.placeholder}</span>
                      <span className="pbh-phone-ph-note">Screenshot coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ============ SECTION 1B - HOW IT WORKS ============ */}
      <section id="how-it-works" data-reveal="" className="pb-section pbh-how">
        <div className="pbh-wrap">
          <p className="pbh-label">The journey</p>
          <h2 className="pbh-h2">
            From <em>Know Thyself</em> to an <em>epic life,</em> on purpose.
          </h2>
          <hr className="pbh-rule" />

          <div className="pbh-journey">
            <div className="pbh-node">
              <div className="pbh-node-circle">
                <span className="pbh-node-num">01</span>
              </div>
              <h3 className="pbh-node-title">Know Thyself</h3>
              <p className="pbh-node-body">
                A full convergence reading reveals the pattern no single system can see: your
                blueprint.
              </p>
            </div>

            <div className="pbh-arrow">
              <span className="pbh-arrow-line" />
              <span className="pbh-arrow-label">understand →</span>
            </div>

            <div className="pbh-node">
              <div className="pbh-node-circle">
                <span className="pbh-node-num">02</span>
              </div>
              <h3 className="pbh-node-title">Find Your Purpose</h3>
              <p className="pbh-node-body">
                The Guide helps you read what your blueprint says about the direction of your life.
              </p>
            </div>

            <div className="pbh-arrow">
              <span className="pbh-arrow-line" />
              <span className="pbh-arrow-label">align →</span>
            </div>

            <div className="pbh-node">
              <div className="pbh-node-circle pbh-node-circle--final">
                <span className="pbh-node-star">✦</span>
              </div>
              <h3 className="pbh-node-title pbh-node-title--final">Epic life, on purpose</h3>
              <p className="pbh-node-body">
                A way of moving through the world with clarity about who you are and what you are
                here to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 - PROBLEM ============ */}
      <section data-reveal="" className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">The problem</p>
          <h2 className="pbh-h2" style={{ maxWidth: 700 }}>
            Most will spend more time doing grocery lists than <em>planning for life.</em>
          </h2>
          <hr className="pbh-rule" />
          <div className="pbh-problem">
            <p className="pbh-body" style={{ maxWidth: 620 }}>
              Career here. Relationships there. Money somewhere else. Each part gets attention in
              isolation, and the pattern connecting them stays invisible. Purpose is not a feeling
              you wait for. It is a structure you can read.
            </p>
            <div className="pbh-stat">
              <span className="pbh-stat-num" data-countup="">58%</span>
              <span className="pbh-stat-label">Young adults lacking meaning or purpose</span>
              <span className="pbh-stat-source">Harvard GSE, Psychiatry.org</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 - SOLUTION / THREE PILLARS ============ */}
      <section data-reveal="" className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">The solution</p>
          <h2 className="pbh-h2">
            Know yourself. <em>Then</em> move.
          </h2>
          <div className="pbh-pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="pbh-pill">
                <h3 className="pbh-pill-title">{p.title}</h3>
                <p className="pbh-pill-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 - FIVE FEATURES ============ */}
      <section id="features" data-reveal="" className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">Features</p>
          <h2 className="pbh-h2">Five ways in</h2>
          <div className="pbh-features">
            {FEATURES.map((f, i) => (
              <div key={f.n} className={`pbh-frow${i % 2 === 1 ? ' pbh-frow--flip' : ''}`}>
                <div className="pbh-ftext">
                  <span className="pbh-fnum">{f.n}</span>
                  <h3 className="pbh-ftitle">{f.title}</h3>
                  <p className="pbh-body" style={{ fontSize: 15 }}>
                    {f.body}
                  </p>
                </div>
                <div className="pbh-fimg">
                  <img
                    src={f.img}
                    alt=""
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="pbh-fimg-el"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 - PRICING ============ */}
      <section id="pricing" data-reveal="" className="pb-section pbh-sec">
        <div className="pbh-wrap">
          <p className="pbh-label">Pricing</p>
          <h2 className="pbh-h2">
            Start free. <em>Go deeper when you want to.</em>
          </h2>

          <div className="pbh-founding">
            <div className="pbh-founding-left">
              <span className="pbh-badge">Founding offer</span>
              <p className="pbh-founding-head">50% off your first 6 months, for the first 1,000 members.</p>
              <p className="pbh-founding-note">
                Claim by 31 December 2026.
              </p>
            </div>
            <a
              href={CHECKOUT_BASED}
              target="_blank"
              rel="noopener noreferrer"
              className="pbh-btn pbh-btn--solid"
            >
              Claim your place
            </a>
          </div>

          <div className="pbh-tiers">
            {/* Tier 1 - Seeker */}
            <div className="pbh-tier">
              <h3 className="pbh-tier-name">Seeker</h3>
              <div className="pbh-price">€0</div>
              <p className="pbh-price-note">Free, always</p>
              <ul className="pbh-list">
                <li>Purpose Questionnaire &amp; Archetype Reveal</li>
                <li>
                  Preview 4 frameworks (Astrology, Numerology, Chinese Astrology, Hierarchy of
                  Values)
                </li>
                <li>Preferences &amp; Values tool</li>
                <li>Skills &amp; Experience tool</li>
                <li>The Guide (1 message/day)</li>
                <li>Daily sacred-geometry visual + shareable cards</li>
                <li>Share your analysis</li>
                <li>
                  Free Explore tiles (This Week&apos;s Sky, Today&apos;s Numerology, Season, Chinese
                  Astrology)
                </li>
                <li>Library (in-app reference)</li>
                <li>Referral &amp; friend invites</li>
                <li>Mood Tracker (Purpose check-in self-rating)</li>
                <li>Today&apos;s Cosmic Insight (daily shared cosmic reading)</li>
              </ul>
              <a
                href={APP_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pbh-btn pbh-btn--glass pbh-btn--full"
              >
                Begin
              </a>
            </div>

            {/* Tier 2 - Based (highlighted) */}
            <div className="pbh-tier pbh-tier--featured">
              <span className="pbh-badge pbh-badge--top">Most chosen</span>
              <h3 className="pbh-tier-name">Based</h3>
              <div className="pbh-price">
                €6.50 <s className="pbh-price-was">€13</s>
              </div>
              <p className="pbh-price-note">per month for 6 months · founding price</p>
              <p className="pbh-plus-heading">Everything on Seeker, plus:</p>
              <ul className="pbh-list">
                <li className="pbh-li--gold">Know Thyself (deep multi-section personal reading)</li>
                <li>Know-thyself reading (Astrology, Human Design, Chinese Astrology)</li>
                <li>Your Direction / Path insights (Domains, Drains, Growth Edge)</li>
                <li>My People (compatibility readings, up to 7 people)</li>
                <li>Daily Alignment (personal daily reading)</li>
                <li>Self-Awareness Radar (self-evaluation chart)</li>
                <li>Living Chronicle (reflections &amp; journal)</li>
                <li>Odyssey (island map for life domains)</li>
                <li>Weekly Review (guided check-in)</li>
                <li>Supplemental questionnaires &amp; readings</li>
                <li>
                  Based Explore tiles (Shadow Work, Body Decides, Best Cities, Mind Wiring, People
                  Dynamics, Today For Your People)
                </li>
                <li>The Guide (90 messages/month)</li>
                <li>1 Know Thyself re-run/month</li>
              </ul>
              <a
                href={CHECKOUT_BASED}
                target="_blank"
                rel="noopener noreferrer"
                className="pbh-btn pbh-btn--solid pbh-btn--full"
              >
                Choose Based
              </a>
            </div>

            {/* Tier 3 - Blissed */}
            <div className="pbh-tier">
              <h3 className="pbh-tier-name">Blissed</h3>
              <div className="pbh-price">
                €9 <s className="pbh-price-was">€18</s>
              </div>
              <p className="pbh-price-note">per month for 6 months · founding price</p>
              <p className="pbh-plus-heading">Everything on Based, plus:</p>
              <ul className="pbh-list">
                <li className="pbh-li--gold">
                  5 more framework readings (Enneagram, Hierarchy of Values deep, Gene Keys, Jungian
                  Type, Holland Code, completing the full convergence reading)
                </li>
                <li>Year Ahead (12-month personal reading)</li>
                <li>Vocational Edge (career/purpose direction)</li>
                <li>The Guide (200 messages/month)</li>
                <li>Unlimited My People</li>
                <li>4 Know Thyself re-runs/month</li>
              </ul>
              <a
                href={CHECKOUT_BLISSED}
                target="_blank"
                rel="noopener noreferrer"
                className="pbh-btn pbh-btn--glass pbh-btn--full"
              >
                Choose Blissed
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 5B - YOUR DATA ============ */}
      <section id="your-data" data-reveal="" className="pb-section pbh-sec" aria-labelledby="your-data-h">
        <div className="pbh-wrap">
          <p className="pbh-label">Your data</p>
          <h2 className="pbh-h2" id="your-data-h">
            Yours to <em>keep,</em> yours to <em>delete.</em>
          </h2>
          <div className="pbh-pillars">
            {DATA_POINTS.map((d) => (
              <div key={d.title} className="pbh-pill">
                <h3 className="pbh-pill-title">{d.title}</h3>
                <p className="pbh-pill-body">{d.body}</p>
              </div>
            ))}
          </div>
          <p className="pbh-links">
            <Link to={PRIVACY_PATH}>Privacy policy</Link>
            <span aria-hidden="true">·</span>
            <Link to={DELETE_ACCOUNT_PATH}>Delete your account</Link>
          </p>
        </div>
      </section>

      {/* ============ SECTION 5C - FAQ ============ */}
      <section id="faq" data-reveal="" className="pb-section pbh-sec" aria-labelledby="faq-h">
        <div className="pbh-wrap">
          <p className="pbh-label">Questions</p>
          <h2 className="pbh-h2" id="faq-h">
            Good to <em>know</em>
          </h2>
          <div className="pbh-faq">
            {FAQ.map((item) => (
              <details key={item.q} className="pbh-faq-item">
                <summary className="pbh-faq-q">{item.q}</summary>
                <div className="pbh-faq-a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 6 - CLOSING CTA ============ */}
      <section data-reveal="" className="pb-section pbh-close">
        <h2 className="pbh-h2 pbh-h2--center">
          The map is already there.
          <br />
          <em>You just have not read it yet.</em>
        </h2>
        <a
          href={APP_SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pbh-btn pbh-btn--solid"
          style={{ marginTop: 34 }}
        >
          Start your blueprint
        </a>
        <p className="pbh-founders">
          <Link to={STORY_PATH}>
            Built by the founding team of HumanBased, a social enterprise in Copenhagen.
          </Link>
        </p>
      </section>

      {/* href + precedence: React hoists this into <head>, so the prerendered
          HTML styles the page before its markup paints (no unstyled first frame). */}
      <style href="pb-home" precedence="pb">{`
        .pbh {
          --pb-gold: #ffc864;
          --pb-navy: #0d1f3c;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          --pb-surface: rgba(255,255,255,0.035);
          --pb-border: rgba(255,255,255,0.10);
          --pb-border-gold: rgba(255,200,100,0.22);
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        }

        /* ---------- shared type ---------- */
        .pbh-label {
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          /* 4x the previous 11px, fluid so it scales down on small screens */
          font-size: clamp(22px, 4.6vw, 44px);
          line-height: 1.15;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 24px;
        }
        .pbh-h2 {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 300;
          font-size: 44px;
          line-height: 1.2;
          color: #ffffff;
          margin: 0;
        }
        .pbh-h2 em { font-style: italic; font-weight: 300; }
        .pbh-h2--center { max-width: 560px; margin: 0 auto; text-align: center; }
        .pbh-body {
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--pb-text);
        }
        .pbh-rule {
          width: 56px;
          height: 1px;
          background: var(--pb-gold);
          opacity: 0.55;
          border: 0;
          margin: 28px 0;
        }

        /* ---------- buttons ---------- */
        .pbh-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          /* Explicit so the full-width <a> variants cannot overflow their card
             if the global border-box reset ever goes away. */
          box-sizing: border-box;
          padding: 14px 36px;
          border-radius: 8px;
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pbh-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-15deg);
          transition: left 0.5s ease;
        }
        .pbh-btn:hover::before { left: 120%; }
        .pbh-btn:hover { transform: translateY(-2px); }
        .pbh-btn--solid {
          background: linear-gradient(135deg, rgba(255,200,100,0.92), rgba(220,160,50,0.88));
          border: 1px solid rgba(255,220,130,0.6);
          color: #12283f;
          box-shadow: 0 0 24px rgba(255,200,100,0.18);
        }
        .pbh-btn--glass {
          background: linear-gradient(135deg, rgba(255,200,100,0.14), rgba(255,200,100,0.05));
          border: 1px solid rgba(255,200,100,0.38);
          color: var(--pb-gold);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .pbh-btn--full { width: 100%; margin-top: 22px; }

        /* Scroll reveal: sections carry data-reveal and are driven by the shared
           motion engine (components/motion), which never hides them in static HTML. */

        /* ---------- hero ---------- */
        .pbh-hero {
          min-height: 65vh;
          display: flex;
          align-items: center;
          padding: 48px 10% 56px max(10%, calc(max(14px, 50% - 640px) + 64px));
          position: relative;
          overflow: hidden;
          /* Transparent on purpose: the real page background is PBCosmos (a
             fixed #0a1628 -> #0d1f3c -> #0a1628 gradient plus starfield, see
             PBCosmos.tsx), which no flat colour here could match. Every layer
             below fades out on its own edges instead. */
          background: transparent;
          /* Long eased fades: ~22% top, ~35% bottom, ~10% sides. */
          --pbh-fade-y: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.06) 4%, rgba(0,0,0,0.24) 9%, rgba(0,0,0,0.55) 14%, rgba(0,0,0,0.84) 18%, #000 22%, #000 65%, rgba(0,0,0,0.82) 71%, rgba(0,0,0,0.55) 79%, rgba(0,0,0,0.27) 87%, rgba(0,0,0,0.08) 94%, transparent 100%);
          --pbh-fade-x: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 2.5%, rgba(0,0,0,0.58) 5.5%, rgba(0,0,0,0.88) 8%, #000 10.5%, #000 89.5%, rgba(0,0,0,0.88) 92%, rgba(0,0,0,0.58) 94.5%, rgba(0,0,0,0.2) 97.5%, transparent 100%);
        }
        .pbh-hero-bg {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          /* The artwork is 1692x929: never draw it wider than that. On larger
             screens the side fades dissolve it into the cosmos instead. */
          width: min(100%, 1692px);
          max-height: 929px;
          margin: auto 0;
          transform: translateX(-50%);
          z-index: 0;
          pointer-events: none;
          background: url('/images/purposebased/hero-bg.webp') center/cover no-repeat;
          /* lighten: where the artwork is darker than the cosmos (its navy edges),
             the cosmos shows; where it is brighter, the artwork shows. */
          mix-blend-mode: lighten;
          -webkit-mask-image: var(--pbh-fade-y), var(--pbh-fade-x);
          mask-image: var(--pbh-fade-y), var(--pbh-fade-x);
          -webkit-mask-composite: source-in;
          mask-composite: intersect;
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
        @supports not (mix-blend-mode: lighten) {
          .pbh-hero-bg { mix-blend-mode: normal; }
        }
        .pbh-hero-scrim,
        .pbh-hero-glow-a,
        .pbh-hero-glow-b {
          -webkit-mask-image: var(--pbh-fade-y);
          mask-image: var(--pbh-fade-y);
        }
        .pbh-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(100deg, rgba(6,12,26,0.7) 0%, rgba(6,12,26,0.42) 40%, rgba(6,12,26,0.08) 70%);
        }
        .pbh-hero-glow-a,
        .pbh-hero-glow-b {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .pbh-hero-glow-a {
          background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(100,130,255,0.12) 0%, rgba(80,50,180,0.08) 35%, transparent 70%);
        }
        .pbh-hero-glow-b {
          background: radial-gradient(ellipse 40% 30% at 50% 35%, rgba(255,200,100,0.06) 0%, transparent 60%);
        }
        .pbh-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          max-width: 600px;
        }
        .pbh-hero-content .pbh-label,
        .pbh-hero-content .pbh-h1,
        .pbh-hero-content .pbh-sub {
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        .pbh-chevron {
          position: absolute;
          bottom: 30px;
          left: 50%;
          margin-left: -8px;
          width: 15px;
          height: 15px;
          z-index: 2;
          border-right: 2px solid var(--pb-gold);
          border-bottom: 2px solid var(--pb-gold);
          opacity: 0;
          animation: pbh-chev-in 0.8s ease 2s forwards, pbh-chev-bounce 1.9s ease-in-out 2s infinite;
        }
        @keyframes pbh-chev-in { to { opacity: 0.85; } }
        @keyframes pbh-chev-bounce {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(45deg) translate(4px, 4px); }
        }
        .pbh-h1 {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 300;
          font-size: 58px;
          line-height: 1.12;
          color: #ffffff;
          max-width: 660px;
          margin: 0 0 20px;
        }
        .pbh-h1 em { font-style: italic; font-weight: 300; }
        .pbh-h1 strong { font-weight: 600; }
        .pbh-sub {
          font-size: 14px;
          line-height: 1.8;
          color: var(--pb-muted);
          max-width: 384px;
          margin: 0 0 32px;
        }
        .pbh-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        .pbh-hero-note {
          font-size: 12px;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
          max-width: 440px;
          margin: 20px 0 0;
          text-shadow: 0 1px 3px rgba(0,0,0,0.65), 0 2px 12px rgba(0,0,0,0.55);
        }

        /* ---------- reading (phone frames) ---------- */
        .pbh-reading-line { max-width: 520px; margin: 18px 0 0; }
        .pbh-phones {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 44px;
        }
        .pbh-phone {
          width: 240px;
          padding: 9px;
          border-radius: 38px;
          background: linear-gradient(160deg, #1b2c4a, #0a1424);
          border: 1px solid rgba(255,200,100,0.28);
          box-shadow: 0 18px 48px rgba(0,0,0,0.5), 0 0 32px rgba(255,200,100,0.07);
        }
        .pbh-phone-screen {
          position: relative;
          aspect-ratio: 390 / 844;
          border-radius: 30px;
          overflow: hidden;
          background: #0a1424;
        }
        .pbh-phone-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .pbh-phone-ph {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          text-align: center;
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 22px;
          color: var(--pb-gold);
          border: 1px dashed rgba(255,200,100,0.4);
          border-radius: 30px;
          background: rgba(255,200,100,0.04);
        }
        .pbh-phone-ph-note {
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--pb-muted);
        }

        /* ---------- how it works ---------- */
        .pbh-how { padding: 56px 10% 80px; position: relative; overflow: hidden; }
        .pbh-how::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 28% 68%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1.5px 1.5px at 58% 30%, rgba(255,224,182,0.4), transparent),
            radial-gradient(1px 1px at 78% 58%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 90% 16%, rgba(255,255,255,0.25), transparent),
            radial-gradient(1.5px 1.5px at 40% 88%, rgba(255,224,182,0.3), transparent);
          opacity: 0.7;
        }
        .pbh-how > .pbh-wrap { position: relative; z-index: 1; }
        .pbh-journey {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 0 20px;
          align-items: start;
        }
        .pbh-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .pbh-node-circle {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid rgba(255,200,100,0.6);
          background: rgba(255,200,100,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 0 20px rgba(255,200,100,0.25), inset 0 0 12px rgba(255,200,100,0.14);
        }
        .pbh-node-circle::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,100,0.22);
          animation: pbh-halo 3.2s ease-in-out infinite;
        }
        .pbh-node-circle--final {
          width: 64px;
          height: 64px;
          border-color: rgba(255,200,100,0.9);
          box-shadow: 0 0 36px rgba(255,200,100,0.45), inset 0 0 16px rgba(255,200,100,0.2);
        }
        .pbh-node-num {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 20px;
          color: var(--pb-gold);
        }
        .pbh-node-star {
          font-size: 24px;
          line-height: 1;
          color: var(--pb-gold);
          filter: drop-shadow(0 0 8px rgba(255,200,100,0.85));
          animation: pbh-star-pulse 2.6s ease-in-out infinite;
        }
        .pbh-node-title {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 400;
          font-size: 22px;
          color: #ffffff;
          margin: 0 0 10px;
        }
        .pbh-node-title--final {
          font-size: 26px;
          color: var(--pb-gold);
        }
        .pbh-node-body {
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--pb-muted);
          max-width: 240px;
          margin: 0;
        }
        .pbh-arrow {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 90px;
          margin-top: 20px;
        }
        /* drifting energy particles around the connector */
        .pbh-arrow::before {
          content: '';
          position: absolute;
          inset: -22px 0 -10px;
          pointer-events: none;
          background-image:
            radial-gradient(2px 2px at 10% 30%, rgba(255,238,196,0.95), transparent),
            radial-gradient(1.5px 1.5px at 26% 70%, rgba(255,224,158,0.8), transparent),
            radial-gradient(2px 2px at 44% 20%, rgba(255,246,214,0.95), transparent),
            radial-gradient(1.5px 1.5px at 60% 74%, rgba(255,222,158,0.75), transparent),
            radial-gradient(2px 2px at 78% 32%, rgba(255,238,196,0.9), transparent),
            radial-gradient(1.5px 1.5px at 92% 58%, rgba(255,222,158,0.6), transparent);
          filter: drop-shadow(0 0 4px rgba(255,200,100,0.6));
          animation: pbh-particle-drift 4.5s ease-in-out infinite alternate;
        }
        /* faster twinkling sparkle layer */
        .pbh-arrow::after {
          content: '';
          position: absolute;
          inset: -16px 0 -6px;
          pointer-events: none;
          background-image:
            radial-gradient(1.5px 1.5px at 20% 52%, rgba(255,255,255,0.95), transparent),
            radial-gradient(1px 1px at 52% 40%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 80% 62%, rgba(255,242,208,0.9), transparent);
          animation: pbh-sparkle 2.1s ease-in-out infinite;
        }
        .pbh-arrow-line {
          position: relative;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(
            90deg,
            rgba(255,200,100,0) 0%,
            rgba(255,200,100,0.85) 16%,
            rgba(255,248,220,1) 50%,
            rgba(255,200,100,0.85) 84%,
            rgba(255,200,100,0) 100%
          );
          box-shadow:
            0 0 10px rgba(255,216,146,0.9),
            0 0 24px rgba(255,200,100,0.6),
            0 0 48px rgba(255,200,100,0.32);
          animation: pbh-beam-pulse 3s ease-in-out infinite;
        }
        /* travelling spark that flows toward the next phase */
        .pbh-arrow-line::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -45%;
          width: 45%;
          height: 6px;
          border-radius: 4px;
          transform: translateY(-50%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 45%, rgba(255,238,196,0.9) 62%, transparent);
          box-shadow: 0 0 14px rgba(255,246,214,0.95), 0 0 28px rgba(255,200,100,0.7);
          filter: blur(0.3px);
          animation: pbh-spark 2.6s linear infinite;
        }
        .pbh-arrow-line::after {
          content: '';
          position: absolute;
          right: -2px;
          top: 50%;
          width: 10px;
          height: 10px;
          border-top: 2px solid rgba(255,248,220,1);
          border-right: 2px solid rgba(255,248,220,1);
          transform: translateY(-50%) rotate(45deg);
          filter: drop-shadow(0 0 9px rgba(255,216,146,0.95));
        }
        .pbh-arrow-label {
          margin-top: 14px;
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          font-size: 11px;
          font-style: italic;
          letter-spacing: 1px;
          color: var(--pb-gold);
          text-shadow: 0 0 12px rgba(255,200,100,0.6);
        }
        @keyframes pbh-spark {
          from { left: -45%; }
          to { left: 100%; }
        }
        @keyframes pbh-particle-drift {
          from { opacity: 0.3; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(-5px); }
        }
        @keyframes pbh-sparkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }
        @keyframes pbh-beam-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255,216,146,0.7), 0 0 22px rgba(255,200,100,0.4), 0 0 40px rgba(255,200,100,0.22);
          }
          50% {
            box-shadow: 0 0 16px rgba(255,228,164,1), 0 0 34px rgba(255,200,100,0.8), 0 0 64px rgba(255,200,100,0.45);
          }
        }
        @keyframes pbh-halo {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.18); opacity: 0.12; }
        }
        @keyframes pbh-star-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.16); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pbh-arrow-line,
          .pbh-arrow-line::before,
          .pbh-arrow::before,
          .pbh-arrow::after,
          .pbh-node-circle::after,
          .pbh-node-star { animation: none; }
        }

        /* ---------- generic section ---------- */
        .pbh-sec { padding: 56px 10% 80px; }
        .pbh-wrap { max-width: 1100px; margin: 0 auto; }
        .pbh-close { padding: 56px 10% 80px; text-align: center; display: flex; flex-direction: column; align-items: center; }

        /* ---------- problem stat (mirrors Story page stat cards) ---------- */
        .pbh-problem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .pbh-stat {
          flex: 0 0 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          text-align: center;
          padding: 2.25rem 1.75rem;
          background: rgba(196,168,90,0.08);
          border: 1px solid rgba(196,168,90,0.25);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
        }
        .pbh-stat-num {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 56px;
          font-weight: 600;
          line-height: 1;
          color: var(--pb-gold);
        }
        .pbh-stat-label { font-size: 15px; line-height: 1.5; color: var(--pb-text); }
        .pbh-stat-source { font-size: 11px; font-style: italic; color: var(--pb-muted); }

        /* ---------- pillars ---------- */
        .pbh-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
          perspective: 1000px;
        }
        .pbh-pill {
          position: relative;
          border: 1px solid rgba(255,200,100,0.30);
          border-radius: 14px;
          padding: 28px 24px;
          background: linear-gradient(135deg, rgba(255,200,100,0.08) 0%, rgba(255,200,100,0.03) 100%);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,200,100,0.08), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .pbh-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 20%;
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,200,100,0.6), transparent);
        }
        .pbh-pill:hover {
          transform: translateY(-6px) rotateX(2deg);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 24px rgba(255,200,100,0.10), inset 0 1px 0 rgba(255,255,255,0.08);
          border-color: rgba(255,200,100,0.55);
        }
        .pbh-pill-title {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 300;
          font-size: 26px;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 0 20px rgba(255,200,100,0.3);
        }
        .pbh-pill-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--pb-muted);
          margin: 10px 0 0;
        }

        /* ---------- features ---------- */
        .pbh-features { margin-top: 40px; }
        .pbh-frow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .pbh-frow:last-child { border-bottom: none; }
        .pbh-frow--flip .pbh-ftext { order: 2; }
        .pbh-frow--flip .pbh-fimg { order: 1; }
        .pbh-fnum {
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--pb-muted);
        }
        .pbh-ftitle {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 400;
          font-size: 26px;
          color: #ffffff;
          margin: 10px 0 12px;
        }
        .pbh-fimg {
          position: relative;
          height: 220px;
          border-radius: 10px;
          border: 1px solid var(--pb-border-gold);
          background: var(--pb-surface);
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .pbh-fimg:hover {
          border-color: rgba(255,200,100,0.4);
        }
        .pbh-fimg-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ---------- pricing ---------- */
        .pbh-founding {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid rgba(255,200,100,0.35);
          background: rgba(255,200,100,0.07);
          border-radius: 10px;
          padding: 20px 26px;
          margin: 40px 0 34px;
        }
        .pbh-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: #ffc864;
          color: #12283f;
          padding: 4px 12px;
          border-radius: 3px;
        }
        .pbh-badge--top { margin-bottom: 14px; }
        .pbh-founding-head {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 24px;
          color: #ffffff;
          margin: 12px 0 6px;
        }
        .pbh-founding-note {
          font-size: 13px;
          color: var(--pb-muted);
          margin: 0;
        }
        .pbh-tiers {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 20px;
        }
        .pbh-tier {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,200,100,0.20);
          border-radius: 14px;
          padding: 32px 26px;
          background: linear-gradient(145deg, rgba(255,200,100,0.07) 0%, rgba(255,200,100,0.02) 60%, rgba(100,140,255,0.03) 100%);
          box-shadow: 0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }
        .pbh-tier::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,235,200,0.22), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        .pbh-tier:hover::before { left: 130%; }
        .pbh-tier:hover {
          border-color: rgba(255,200,100,0.5);
          transform: translateY(-3px);
        }
        .pbh-tier--featured {
          border: 1px solid rgba(255,200,100,0.50);
          background: linear-gradient(145deg, rgba(255,200,100,0.14) 0%, rgba(255,200,100,0.06) 60%, rgba(255,160,50,0.04) 100%);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 32px rgba(255,200,100,0.08), inset 0 1px 0 rgba(255,255,255,0.12);
        }
        .pbh-tier--featured .pbh-badge--top {
          text-shadow: 0 0 12px rgba(255,200,100,0.8);
        }
        .pbh-tier-name {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 400;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 14px;
        }
        .pbh-price {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 42px;
          color: var(--pb-gold);
          line-height: 1;
        }
        .pbh-price-was {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 28px;
          color: var(--pb-muted);
          text-decoration: line-through;
          margin-left: 8px;
        }
        .pbh-price-note {
          font-size: 13px;
          color: var(--pb-muted);
          margin: 8px 0 0;
        }
        /* "Everything on X, plus:" heading - larger gold lead-in above the
           bullet list, per tier. Bullets themselves stay at .pbh-list size. */
        .pbh-plus-heading {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-style: italic;
          font-size: clamp(18px, 2.5vw, 28px);
          line-height: 1.25;
          color: var(--pb-gold);
          margin: 16px 0 12px;
        }
        .pbh-list {
          list-style: none;
          padding: 0;
          margin: 18px 0 0;
        }
        .pbh-list li {
          font-size: 13px;
          font-weight: 300;
          color: var(--pb-text);
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        /* Key differentiator for the tier - carries the gold accent. */
        .pbh-list li.pbh-li--gold {
          color: var(--pb-gold);
          font-weight: 400;
        }

        /* ---------- your data links, faq, founders ---------- */
        .pbh-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin: 28px 0 0;
          font-size: 14px;
          color: var(--pb-muted);
        }
        .pbh-links a,
        .pbh-faq-a a,
        .pbh-founders a {
          color: var(--pb-gold);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .pbh-links a:hover,
        .pbh-faq-a a:hover,
        .pbh-founders a:hover { color: #ffe0a0; }
        .pbh-links a:focus-visible,
        .pbh-faq-a a:focus-visible,
        .pbh-founders a:focus-visible,
        .pbh-faq-q:focus-visible {
          outline: 2px solid var(--pb-gold);
          outline-offset: 3px;
          border-radius: 4px;
        }
        .pbh-faq { margin-top: 36px; max-width: 760px; }
        .pbh-faq-item { border-bottom: 1px solid rgba(255,255,255,0.10); }
        .pbh-faq-q {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          cursor: pointer;
          list-style: none;
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 24px;
          color: #ffffff;
        }
        .pbh-faq-q::-webkit-details-marker { display: none; }
        .pbh-faq-q::after {
          content: '+';
          flex: none;
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          font-size: 22px;
          color: var(--pb-gold);
        }
        .pbh-faq-item[open] > .pbh-faq-q::after { content: '\\2212'; }
        .pbh-faq-a { padding: 0 0 22px; max-width: 640px; }
        .pbh-faq-a p {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--pb-text);
          margin: 0 0 12px;
        }
        .pbh-faq-a p:last-child { margin-bottom: 0; }
        .pbh-founders { margin: 40px 0 0; font-size: 14px; color: var(--pb-muted); }

        /* ============================================================
           RESPONSIVE
           Desktop 1024px+ : 80px 10%  · hero text left third · pillars 3 cols
           Tablet  ≤1024px : 60px 7%   · hero text left third · pillars 2 cols
           Mobile  ≤768px  : 48px 5%   · hero stacked/centered · single column
           ============================================================ */

        /* ---------- tablet ---------- */
        @media (max-width: 1024px) {
          .pbh-h1 { font-size: 42px; }
          .pbh-h2 { font-size: 36px; }
          .pbh-sec { padding: 56px 7% 60px; }
          .pbh-close { padding: 56px 7% 60px; }
          .pbh-how { padding: 56px 7% 60px; }
          .pbh-hero { padding: 40px 7% 56px; }
          .pbh-pillars { grid-template-columns: repeat(2, 1fr); }
          .pbh-frow { gap: 36px; }
          .pbh-problem { flex-direction: column; align-items: flex-start; gap: 32px; }
          .pbh-stat { flex: none; width: 100%; max-width: 320px; }
          .pbh-journey {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 0;
          }
          .pbh-node { padding: 8px 0; }
          .pbh-arrow {
            min-width: 0;
            width: auto;
            margin: 6px 0;
          }
          .pbh-arrow::before,
          .pbh-arrow::after { display: none; }
          .pbh-arrow-line {
            width: 2px;
            height: 48px;
            background: linear-gradient(
              180deg,
              rgba(255,200,100,0) 0%,
              rgba(255,248,220,1) 50%,
              rgba(255,200,100,0) 100%
            );
            box-shadow: 0 0 10px rgba(255,216,146,0.9), 0 0 24px rgba(255,200,100,0.55);
          }
          .pbh-arrow-line::before { display: none; }
          .pbh-arrow-line::after {
            right: auto;
            left: 50%;
            top: auto;
            bottom: -2px;
            transform: translateX(-50%) rotate(135deg);
          }
        }

        /* ---------- mobile ---------- */
        @media (max-width: 768px) {
          .pbh-h1 { font-size: 36px; }
          .pbh-h2 { font-size: 32px; }
          .pbh-sec { padding: 48px 5%; }
          .pbh-close { padding: 48px 5%; }
          .pbh-how { padding: 48px 5%; }
          .pbh-hero { padding: 32px 5% 48px; }
          /* ~10% of a phone is ~40px, too steep beside the bright star: fade ~22%. */
          .pbh-hero {
            --pbh-fade-x: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 4%, rgba(0,0,0,0.26) 8%, rgba(0,0,0,0.52) 12%, rgba(0,0,0,0.78) 17%, #000 22%, #000 78%, rgba(0,0,0,0.78) 83%, rgba(0,0,0,0.52) 88%, rgba(0,0,0,0.26) 92%, rgba(0,0,0,0.08) 96%, transparent 100%);
          }
          .pbh-hero-content { align-items: center; text-align: center; max-width: none; }
          .pbh-sub { margin-bottom: 32px; }
          .pbh-cta-row { justify-content: center; }
          .pbh-hero-note { text-align: center; }
          .pbh-phones { gap: 20px; }
          .pbh-phone { width: 44vw; max-width: 240px; padding: 6px; border-radius: 28px; }
          .pbh-phone-screen { border-radius: 22px; }
          .pbh-phone-ph { border-radius: 22px; font-size: 18px; }
          .pbh-faq-q { font-size: 21px; }
          .pbh-pillars { grid-template-columns: 1fr; }
          .pbh-frow { grid-template-columns: 1fr; gap: 24px; padding: 32px 0; }
          .pbh-frow--flip .pbh-ftext,
          .pbh-frow--flip .pbh-fimg { order: 0; }
          .pbh-fimg { height: 180px; }
          .pbh-founding { flex-direction: column; align-items: flex-start; }
          .pbh-founding .pbh-btn { width: 100%; }
        }

        /* ---------- pricing tiers stack ---------- */
        @media (max-width: 600px) {
          .pbh-tiers { grid-template-columns: 1fr; }
        }

        /* ---------- small mobile ---------- */
        @media (max-width: 480px) {
          .pbh-h1 { font-size: 26px; }
          .pbh-h2 { font-size: 28px; }
          .pbh-body { font-size: 15px; }
          .pbh-price { font-size: 36px; }
          .pbh-price-was { font-size: 22px; }
          .pbh-cta-row { flex-direction: column; align-self: stretch; }
          .pbh-cta-row .pbh-btn { width: 100%; }
          .pbh-tier { padding: 26px 20px; }
          .pbh-pill { padding: 24px 20px; }
        }
      `}</style>
    </div>
  );
};

export default PBHome;
