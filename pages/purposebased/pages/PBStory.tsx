import React from 'react';
import { usePageSeo } from '../../../hooks/usePageSeo';

// PurposeBased - Our Story.
// Editorial layout: full-bleed sections over three content widths (narrow 680
// for body copy, wide 980 for titles and pull quotes, full 1200 for stat cards
// and the pill row), a real type scale, and gold pull quotes that carry the
// emotional weight so the body copy can stay lean. Background alternates a
// plain ground and a tinted navy glass band, never two tinted in a row.

const STATS: { num: string; label: string; source: string }[] = [
  { num: '332M', label: 'People living with depression globally', source: 'WHO, 2021' },
  { num: '58%', label: 'Young adults lacking meaning or purpose', source: 'Harvard GSE, Psychiatry.org' },
  { num: '85%+', label: 'People who believe in finding deeper purpose', source: 'Lifeway Research, 2025' },
];

const PURPOSE_WORDS = [
  'Calling',
  'Direction',
  'Meaning',
  'Fulfillment',
  'Mastery',
  'Clarity',
  'Belonging',
  'Alignment',
  'Impact',
];

const PB_URL = 'https://humanbased.org/purposebased';
const STORY_URL = 'https://humanbased.org/purposebased/story';
const PB_OG_IMAGE = 'https://humanbased.org/images/pb-mockup.png';

const PBStory: React.FC = () => {
  usePageSeo({
    title: 'PurposeBased | Our Story | Purpose-Driven Social Enterprise',
    description:
      'Learn how PurposeBased was built by HumanBased to help people discover meaning through self-knowledge frameworks.',
    canonical: STORY_URL,
    og: {
      title: 'PurposeBased | Our Story | Purpose-Driven Social Enterprise',
      description:
        'Learn how PurposeBased was built by HumanBased to help people discover meaning through self-knowledge frameworks.',
      image: PB_OG_IMAGE,
      url: STORY_URL,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PurposeBased | Our Story',
      description:
        'Learn how PurposeBased was built by HumanBased to help people discover meaning through self-knowledge frameworks.',
      image: PB_OG_IMAGE,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PurposeBased', item: PB_URL },
        { '@type': 'ListItem', position: 2, name: 'Our Story', item: STORY_URL },
      ],
    },
  });

  return (
    <article className="pbs">
      {/* ============ HERO (the only place the label and H1 appear) ============ */}
      <header className="pbs-hero">
        <div className="pbs-wide">
          <p className="pbs-label">Our Story</p>
          <h1 className="pbs-h1">Why we’re building this</h1>
        </div>
      </header>

      {/* ============ 1. WHY WE'RE BUILDING THIS - plain ============ */}
      <section className="pbs-sec">
        <div className="pbs-narrow pbs-body">
          <p className="pbs-lead">
            We wanted to build something that genuinely changes lives, and kept returning to the one
            thing that felt missing: purpose.
          </p>
          <p>
            People have asked what makes life meaningful for thousands of years. Today, with more
            freedom and opportunity than ever, many still feel lost. We are living through a meaning
            crisis, and most of us were never taught how to navigate it.
          </p>
          <h3 className="pbs-sub">The crisis is real</h3>
          <p>
            Belief in purpose is nearly universal. The pursuit of it is rare. Behind every figure
            below is someone who was never handed the tools to look.
          </p>
        </div>

        <blockquote className="pbs-wide pbs-quote">
          We saw this, and we could not look away.
        </blockquote>

        <div className="pbs-narrow pbs-body">
          <h3 className="pbs-sub pbs-sub--first">The opportunity of our time</h3>
          <p>
            Technology lets us learn almost anything, work with anyone, and build things ourselves.
            At the same time, automation is reshaping work, and the old path of education, job,
            career may no longer be enough.
          </p>
          <p>
            So we asked where the tools were that help people truly understand themselves. We could
            not find them, so we decided to build them.
          </p>
        </div>
      </section>

      {/* ============ 2. STATS - plain ============ */}
      <section className="pbs-sec">
        <div className="pbs-full pbs-head pbs-head--compact">
          <p className="pbs-label">The Scale of It</p>
        </div>
        <div className="pbs-full">
          <div className="pbs-stats">
            {STATS.map((stat) => (
              <div key={stat.num} className="pbs-stat">
                <span className="pbs-stat-num">{stat.num}</span>
                <span className="pbs-stat-label">{stat.label}</span>
                <span className="pbs-stat-source">{stat.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. YOU CAN DO ANYTHING - tinted ============ */}
      <section className="pbs-sec pbs-sec--tint">
        <div className="pbs-wide pbs-head">
          <p className="pbs-label">The World We Live In</p>
          <h2 className="pbs-title">The paradox of infinite possibility</h2>
        </div>

        <div className="pbs-narrow pbs-body">
          <p className="pbs-lead">
            More is available to us than ever before. Learn any skill, build a business, reach
            anyone, create what was once unimaginable.
          </p>
          <p>
            But when everything is possible, everything pulls at your attention. Designer, writer,
            entrepreneur, scholar, healer, builder. The wants scatter like light through a prism.
          </p>
        </div>

        <blockquote className="pbs-wide pbs-quote">
          You can do anything, just not everything.
        </blockquote>

        <div className="pbs-narrow pbs-body">
          <p>
            Without direction, effort scatters and depth never arrives. The work is not to find the
            perfect path. It is to choose one, knowing what you leave behind.
          </p>
          <p>
            That is what purpose does. It is not about infinite possibility. It is about{' '}
            <span className="pbs-gold">intentional choice</span>.
          </p>
        </div>
      </section>

      {/* ============ 4. THE WORD IS OVERLOADED - plain ============ */}
      <section className="pbs-sec">
        <div className="pbs-wide pbs-head">
          <p className="pbs-label">On Words and Meaning</p>
          <h2 className="pbs-title">Purpose is an overloaded word</h2>
        </div>

        <div className="pbs-narrow pbs-body">
          <p className="pbs-lead">
            Purpose has become a cliché, stripped of meaning by overuse and inflated by expectations
            no single word can carry.
          </p>
          <p>
            But the thing it points to, the search for meaning and a reason to live, is ancient and
            urgent. So we use the word anyway. It is the closest one we have, and people know what
            we mean when we say it.
          </p>
          <p>When we say purpose, we mean all of this:</p>
        </div>

        <div className="pbs-full">
          <ul className="pbs-pills">
            {PURPOSE_WORDS.map((word) => (
              <li key={word} className="pbs-pill">
                {word}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="pbs-wide pbs-quote">The word is a doorway.</blockquote>

        <div className="pbs-narrow pbs-body">
          <p>What matters is not the label, but what lies behind it.</p>
        </div>
      </section>

      {/* ============ 5. WHY PURPOSEBASED MATTERS - tinted ============ */}
      <section className="pbs-sec pbs-sec--tint">
        <div className="pbs-wide pbs-head">
          <p className="pbs-label">Why PurposeBased Matters</p>
          <h2 className="pbs-title">The product we built</h2>
        </div>

        <div className="pbs-narrow pbs-body">
          <p className="pbs-lead">
            We went to the source: the traditions, frameworks, and practices that help people
            understand themselves, and the gaps in what already exists.
          </p>
          <p>
            PurposeBased combines ancient traditions, Astrology, Numerology, Chinese Astrology and
            Enneagram, with modern frameworks like Human Design, Gene Keys, Jungian Type, Holland
            Code, and Hierarchy of Values.
          </p>
          <p>
            Together they reveal who you are and what drives you, what naturally energizes you,
            where your strengths lie, what work may fit, and how you relate to other people.
          </p>
          <p>
            Beyond self-knowledge there are daily check-ins, journaling, relationship mapping, and a
            Guide offering ongoing, personalized direction. The result is not a test score. It is a
            living picture of who you are and where you might go next.
          </p>
          <h3 className="pbs-sub">From self-knowledge to fulfillment</h3>
          <p>
            It starts with understanding your values, your strengths, and what gives your life
            meaning. From there comes alignment, bringing your choices closer to what matters. From
            alignment comes fulfillment: not a perfect life, but one with direction.
          </p>
        </div>

        <blockquote className="pbs-wide pbs-quote">
          Know yourself. Align your life. Live your purpose.
        </blockquote>
      </section>

      {/* ============ 6. WHY THIS MATTERS NOW - plain ============ */}
      <section className="pbs-sec">
        <div className="pbs-wide pbs-head">
          <p className="pbs-label">Why This Matters Now</p>
          <h2 className="pbs-title">The historical moment</h2>
        </div>

        <div className="pbs-narrow pbs-body">
          <p className="pbs-lead">
            We live in a time of enormous change. Automation is transforming employment, and the old
            idea of one job for decades is becoming less certain.
          </p>
        </div>

        <blockquote className="pbs-wide pbs-quote">
          Purpose is no longer a luxury. It is becoming a necessity.
        </blockquote>

        <div className="pbs-narrow pbs-body">
          <p>
            At the same time we have more freedom than ever to learn, connect, build, and shape work
            around what we care about. The systems around us have not caught up. Education and
            career guidance rarely help anyone choose a meaningful direction.
          </p>
          <p>
            People need better tools to navigate this. We cannot wait for institutions to build them.
          </p>
        </div>
      </section>

      {/* ============ 7. OUR BIGGER VISION - tinted ============ */}
      <section className="pbs-sec pbs-sec--tint">
        <div className="pbs-wide pbs-head">
          <p className="pbs-label">Our Bigger Vision</p>
          <h2 className="pbs-title">Humanity united</h2>
        </div>

        <div className="pbs-narrow pbs-body">
          <p className="pbs-lead">
            This is the beginning. Our goal is to reach people worldwide and help them understand
            their purpose and how to live it.
          </p>
          <p>
            We believe in a humanity united: people who understand not only who they are, but how
            they contribute to something larger. That unity cannot be imposed. It begins with
            individuals discovering what they are here to contribute.
          </p>
          <p>Each of us is a piece of the puzzle. Our work is to help people find theirs.</p>
        </div>
      </section>

      {/* ============ 8. THE COMMITMENT - plain ============ */}
      <section className="pbs-sec">
        <div className="pbs-wide pbs-head">
          <p className="pbs-label">The Commitment</p>
          <h2 className="pbs-title">Why we do this</h2>
        </div>

        <div className="pbs-narrow pbs-body">
          <p className="pbs-lead">
            We are not here to maximize engagement or profit from confusion. We are here because
            purpose shapes how we spend our time and the world we create.
          </p>
          <p>
            People deserve clarity and tools that genuinely help them understand themselves.
            Technology is changing society quickly, and the choices made now will shape what comes
            next.
          </p>
          <p>
            We can build technology that supports human growth rather than exploiting attention. So
            we are building, and we will keep improving until everyone has a chance to understand
            their purpose.
          </p>
        </div>
      </section>

      {/* ============ 9. THE HONOUR - tinted ============ */}
      <section className="pbs-sec pbs-sec--tint pbs-sec--close">
        <blockquote className="pbs-wide pbs-quote pbs-quote--close">
          The time is now. The honour is ours.
        </blockquote>
      </section>

      <style>{`
        .pbs {
          --pb-gold: #C4A85A;
          --pb-navy: #0d1f3c;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          --pb-lead: rgba(255,255,255,0.85);
          display: block;
          width: 100%;
          font-family: 'DM Sans', system-ui, sans-serif;
        }
        .pbs *, .pbs *::before, .pbs *::after { box-sizing: border-box; }

        /* ---------- the three content widths ---------- */
        .pbs-narrow { width: 100%; max-width: 680px;  margin-inline: auto; }
        .pbs-wide   { width: 100%; max-width: 980px;  margin-inline: auto; }
        .pbs-full   { width: 100%; max-width: 1200px; margin-inline: auto; }

        /* ---------- section shell and background rhythm ---------- */
        .pbs-sec {
          padding-block: 4.5rem;   /* 4.5 + 4.5 = 9rem between major sections */
          padding-inline: 24px;
        }
        .pbs-sec--tint {
          background: rgba(12, 31, 60, 0.35);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .pbs-sec--close { padding-block: 6rem 7rem; }

        /* ---------- hero ---------- */
        .pbs-hero {
          padding-block: 7rem 4.5rem;
          padding-inline: 24px;
        }
        .pbs-label {
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 1.5rem;
        }
        .pbs-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: 80px;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        /* ---------- headings ---------- */
        .pbs-head { margin-bottom: 2.5rem; }   /* title to first paragraph */
        .pbs-head--compact { margin-bottom: 2rem; }
        .pbs-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: 56px;
          line-height: 1.1;
          letter-spacing: -0.005em;
          color: #ffffff;
          margin: 0;
        }
        .pbs-sub {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: 30px;
          line-height: 1.25;
          color: #ffffff;
          margin: 3.5rem 0 1.6rem;
        }
        .pbs-sub--first { margin-top: 0; }

        /* ---------- body copy ---------- */
        .pbs-body p {
          font-size: 17px;
          line-height: 1.8;
          color: var(--pb-text);
          margin: 0 0 1.6rem;
        }
        .pbs-body p:last-child { margin-bottom: 0; }
        .pbs-lead {
          font-size: 21px !important;
          line-height: 1.6 !important;
          color: var(--pb-lead) !important;
        }
        .pbs-gold { color: var(--pb-gold); font-weight: 500; }

        /* ---------- pull quotes ---------- */
        .pbs-quote {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 40px;
          line-height: 1.25;
          color: var(--pb-gold);
          text-align: center;
          text-wrap: balance;
          margin: 4rem auto;   /* 4rem above and below */
          padding: 0;
          border: 0;
        }
        .pbs-quote--close {
          margin: 0 auto;
          font-size: 48px;
          text-shadow: 0 0 32px rgba(196,168,90,0.3);
        }

        /* ---------- stat cards: one row, never a 2+1 pyramid ---------- */
        .pbs-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .pbs-stat {
          min-height: 240px;
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
        .pbs-stat-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 56px;
          font-weight: 600;
          line-height: 1;
          color: var(--pb-gold);
        }
        .pbs-stat-label {
          font-size: 15px;
          line-height: 1.5;
          color: var(--pb-text);
        }
        .pbs-stat-source {
          font-size: 11px;
          font-style: italic;
          color: var(--pb-muted);
        }

        /* ---------- pill row ---------- */
        .pbs-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          list-style: none;
          margin: 2.5rem 0 0;
          padding: 0;
        }
        .pbs-pill {
          display: inline-flex;
          align-items: center;
          font-size: 15px;
          line-height: 1.2;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(196,168,90,0.1);
          border: 1px solid rgba(196,168,90,0.28);
          color: var(--pb-text);
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1100px) {
          .pbs-h1 { font-size: 64px; }
          .pbs-title { font-size: 46px; }
          .pbs-quote { font-size: 34px; }
          .pbs-quote--close { font-size: 40px; }
          .pbs-stat-num { font-size: 48px; }
        }
        @media (max-width: 768px) {
          .pbs-sec { padding-block: 2.5rem; padding-inline: 20px; }
          .pbs-sec--close { padding-block: 3.5rem 4.5rem; }
          .pbs-hero { padding-block: 4rem 2.5rem; padding-inline: 20px; }
          .pbs-h1 { font-size: 44px; }
          .pbs-title { font-size: 34px; }
          .pbs-sub { font-size: 26px; margin-top: 2.75rem; }
          .pbs-lead { font-size: 19px !important; }
          .pbs-body p { font-size: 16px; }
          .pbs-quote { font-size: 26px; margin: 3rem auto; }
          .pbs-quote--close { font-size: 30px; margin: 0 auto; }
          .pbs-stats { grid-template-columns: 1fr; gap: 1.25rem; }
          .pbs-stat { min-height: 0; padding: 2rem 1.5rem; }
          .pbs-pills { gap: 10px; margin-top: 2rem; }
        }
      `}</style>
    </article>
  );
};

export default PBStory;
