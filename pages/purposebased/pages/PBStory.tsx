import React from 'react';
import { usePageSeo } from '../../../hooks/usePageSeo';

// PurposeBased - Our Story.
// Hero + glassmorphic stat cards up top, then a condensed extended narrative
// built from one uniform section pattern: gold label, Cormorant title, DM
// Sans body. Sections alternate a plain ground and a tinted navy/glass band.
// Same gold / navy / glass tokens as the other PB pages.

const STATS: { num: string; label: string; source: string }[] = [
  { num: '332M', label: 'People living with depression globally', source: 'WHO, 2021' },
  { num: '58%', label: 'Young adults lacking meaning or purpose', source: 'Harvard GSE, Psychiatry.org' },
  { num: '85%+', label: 'People who believe in finding deeper purpose', source: 'Lifeway Research, 2025' },
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
      {/* ============ HERO ============ */}
      <header className="pbs-hero">
        <p className="pbs-label">Our Story</p>
        <h1 className="pbs-h1">Why we’re building this</h1>
      </header>

      {/* ============ STAT CARDS ============ */}
      <section className="pbs-stats-section">
        <div className="pbs-stats-grid">
          {STATS.map((stat) => (
            <div key={stat.num} className="pbs-stat-card">
              <span className="pbs-stat-num">{stat.num}</span>
              <span className="pbs-stat-label">{stat.label}</span>
              <span className="pbs-stat-source">{stat.source}</span>
            </div>
          ))}
        </div>
        <p className="pbs-stats-note">
          Around 332 million people worldwide live with depression. More than half of young adults
          lack meaning or purpose in their lives. We saw this crisis. We could not look away.
        </p>
      </section>

      {/* ============ WHY WE'RE BUILDING THIS (body only, title lives in hero) ============ */}
      <section className="pbs-fw">
        <div className="pbs-fw-body">
          <p>
            We wanted to build products that genuinely make a difference in people’s lives, and
            kept coming back to one thing that felt missing: purpose. People have asked what makes
            life meaningful for thousands of years. Yet today, with more freedom and opportunity
            than ever, many still feel lost or unsure what they are here to do. We are living
            through a meaning crisis, and most of us were never taught how to find it.
          </p>
          <h3 className="pbs-fw-sub">The Crisis Is Real</h3>
          <p>
            These numbers are not abstract. Belief in purpose is nearly universal, yet the pursuit
            of it is rare. We saw this, and we couldn’t look away.
          </p>
          <h3 className="pbs-fw-sub">The Opportunity of Our Time</h3>
          <p>
            We are also at a unique moment in history. Technology lets us learn almost anything,
            work with anyone, and build things ourselves. At the same time, automation is reshaping
            work. The old path of education, job, career may no longer be enough.
          </p>
          <p>
            So we asked ourselves: where are the tools to help people truly understand themselves?
            We couldn’t find the answer. So we decided to build it ourselves.
          </p>
        </div>
      </section>

      {/* ============ YOU CAN DO ANYTHING, JUST NOT EVERYTHING ============ */}
      <section className="pbs-fw">
        <p className="pbs-fw-label">The World We Live In</p>
        <h2 className="pbs-fw-title">You can do anything, just not everything</h2>
        <p className="pbs-fw-intro">
          We live in unprecedented times. More possibilities are available than ever before, learn
          any skill, build a business, connect with anyone, create what was once unimaginable.
        </p>
        <div className="pbs-fw-body">
          <p>
            But here’s the paradox: when everything is possible, everything pulls on your
            attention, energy, and time.
          </p>
          <p>
            Designer, writer, entrepreneur, scholar, healer, builder. Travel, create, build wealth,
            cultivate relationships, master disciplines. The wants are endless, scattering like
            light through a prism.
          </p>
          <p>
            This freedom can become a source of frustration, because{' '}
            <span className="pbs-fw-gold">you cannot do everything at once</span>. Without
            direction, you risk scattering your effort, becoming a master of none. The work is not
            to find the perfect path. It is to choose one, even knowing what you’re leaving behind.
            Depth requires trade-offs.
          </p>
          <p>
            That is where purpose comes in. It is not about infinite possibility. It is about{' '}
            <span className="pbs-fw-gold">intentional choice</span>.
          </p>
        </div>
      </section>

      {/* ============ PURPOSE? THE WORD IS OVERLOADED ============ */}
      <section className="pbs-fw pbs-fw--tinted">
        <p className="pbs-fw-label">On Words and Meaning</p>
        <h2 className="pbs-fw-title">
          <span className="pbs-fw-gold">Purpose? The word is overloaded</span>
        </h2>
        <p className="pbs-fw-intro">
          Purpose has become a cliché, stripped of meaning through overuse, or inflated by
          expectations no single word can carry.
        </p>
        <div className="pbs-fw-body">
          <p>
            But the concept it points to, the search for meaning and a reason to live, is ancient
            and urgent.
          </p>
          <p>
            So we use the word <span className="pbs-fw-gold">purpose</span> anyway. It’s the
            closest word we have, and people know what we mean when we say it.
          </p>
          <p>But understand: when we say purpose, we mean all of this:</p>
          <ul className="pbs-fw-tags">
            {['Calling', 'Direction', 'Meaning', 'Fulfillment', 'Mastery', 'Clarity', 'Belonging', 'Alignment', 'Impact'].map(
              (tag) => (
                <li key={tag} className="pbs-fw-tag">
                  {tag}
                </li>
              ),
            )}
          </ul>
          <p>The word is a doorway. What matters is not the label, but what lies behind it.</p>
        </div>
      </section>

      {/* ============ WHY PURPOSEBASED MATTERS ============ */}
      <section className="pbs-fw">
        <p className="pbs-fw-label">Why PurposeBased Matters</p>
        <h2 className="pbs-fw-title">The Product We Built</h2>
        <div className="pbs-fw-body">
          <p>
            We went to the source: the traditions, frameworks, and practices that help people
            understand themselves, and the gaps in what already exists. PurposeBased combines
            ancient traditions, Astrology, Numerology, Chinese Astrology, Enneagram, with modern
            frameworks like Human Design, Gene Keys, Jungian Type, Holland Code, and Hierarchy of
            Values.
          </p>
          <p>
            Together, they help reveal: who you are and what drives you / what naturally energizes
            you / where your strengths and talents lie / what kind of work may fit you / how you
            relate to other people and the world.
          </p>
          <p>
            PurposeBased goes beyond self-knowledge: daily check-ins, journaling, relationship
            mapping, and an AI Guide offering ongoing, personalized guidance.
          </p>
          <p>
            The result is not a label or a test score. It is a living picture of who you are and
            where you might go next.
          </p>
        </div>
        <h3 className="pbs-fw-sub">The Journey: From Self-Knowledge to Fulfillment</h3>
        <div className="pbs-fw-body">
          <p>
            It starts with understanding yourself: your values, strengths, and what gives your
            life meaning. From there comes alignment, bringing your choices closer to what matters.
            And from alignment comes fulfillment: not a perfect life, but one with more awareness
            and direction.
          </p>
          <p className="pbs-fw-emphasis">Know yourself. Align your life. Live your purpose.</p>
        </div>
      </section>

      {/* ============ WHY THIS MATTERS NOW ============ */}
      <section className="pbs-fw pbs-fw--tinted">
        <p className="pbs-fw-label">Why This Matters Now</p>
        <h2 className="pbs-fw-title">The Historical Moment</h2>
        <div className="pbs-fw-body">
          <p>
            We live in a time of enormous change. Automation and AI are transforming employment,
            and the old idea of one job for decades is becoming less certain. Purpose is no longer
            a luxury. It is becoming a necessity.
          </p>
          <p>
            At the same time, we have more freedom than ever, to learn, connect, build, and create
            work around what we care about. But the systems around us have not caught up. Education
            and career guidance rarely help people choose a meaningful direction.
          </p>
          <p>
            People need better tools to navigate this changing world. We cannot wait for
            institutions to catch up. The time is now.
          </p>
        </div>
      </section>

      {/* ============ OUR BIGGER VISION ============ */}
      <section className="pbs-fw">
        <p className="pbs-fw-label">Our Bigger Vision</p>
        <h2 className="pbs-fw-title">Humanity United</h2>
        <div className="pbs-fw-body">
          <p>
            This is just the beginning. Our goal is to reach people worldwide and help them
            understand their purpose and how to live it. We believe in a Humanity United, people
            who understand not only who they are, but how they contribute to something larger.
          </p>
          <p>
            But that unity cannot be imposed. It begins with individuals discovering their own
            purpose and what they are here to contribute. When millions do this, something greater
            becomes possible.
          </p>
          <p>Each of us is a piece of the puzzle. Our work is to help people find theirs.</p>
        </div>
      </section>

      {/* ============ THE COMMITMENT ============ */}
      <section className="pbs-fw pbs-fw--tinted">
        <p className="pbs-fw-label">The Commitment</p>
        <h2 className="pbs-fw-title">Why We Do This</h2>
        <div className="pbs-fw-body">
          <p>
            We are not here to maximize engagement or profit from confusion. We are here because
            purpose matters, it shapes how we spend our time and the world we create.
          </p>
          <p>
            People deserve clarity and tools that genuinely help them understand themselves.
            Technology is changing society quickly, and the choices we make now will shape what
            comes next.
          </p>
          <p>
            We can build technology that supports human growth rather than exploiting attention.
            So we are building, and will keep improving until everyone has a chance to understand
            their purpose.
          </p>
        </div>
      </section>

      {/* ============ THE HONOUR ============ */}
      <section className="pbs-honour">
        <p className="pbs-honour-text">The time is now. The honour is ours.</p>
      </section>

      <style>{`
        .pbs {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          display: block;
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 10% 104px;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- hero ---------- */
        .pbs-hero { max-width: 820px; margin-bottom: 48px; }
        .pbs-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 20px;
        }
        .pbs-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: clamp(38px, 6vw, 60px);
          line-height: 1.15;
          color: #ffffff;
          margin: 0;
        }

        /* ---------- stat cards ---------- */
        .pbs-stats-section { padding: 3rem 2rem; }
        .pbs-stats-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .pbs-stat-card {
          width: 280px;
          height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-align: center;
          padding: 2rem;
          background: rgba(196,168,90,0.12);
          border: 1.5px solid rgba(196,168,90,0.3);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(196,168,90,0.1);
        }
        .pbs-stat-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          color: #C4A85A;
        }
        .pbs-stat-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.5;
          color: var(--pb-text);
        }
        .pbs-stat-source {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 10px;
          font-style: italic;
          color: var(--pb-muted);
        }
        .pbs-stats-note {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          text-align: center;
          color: var(--pb-text);
          max-width: 700px;
          margin: 2rem auto 0;
        }

        /* ---------- uniform content sections ---------- */
        .pbs-fw {
          padding: 3rem 2rem;
          margin-top: 3rem;
        }
        .pbs-fw:first-of-type { margin-top: 0; }
        .pbs-fw--tinted {
          background: rgba(12, 31, 60, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .pbs-fw-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #C4A85A;
          margin: 0 0 12px;
        }
        .pbs-fw-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: 48px;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 20px;
        }
        .pbs-fw-sub {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 500;
          font-size: 22px;
          line-height: 1.3;
          color: #ffffff;
          margin: 32px 0 14px;
        }
        .pbs-fw-intro {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: var(--pb-text);
          margin: 0 0 20px;
        }
        .pbs-fw-body p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: var(--pb-text);
          margin: 0 0 16px;
        }
        .pbs-fw-body p:last-child { margin-bottom: 0; }
        .pbs-fw-emphasis {
          font-family: 'Cormorant', Georgia, serif !important;
          font-size: 20px !important;
          font-weight: 500;
          line-height: 1.5 !important;
          color: #C4A85A !important;
          margin-top: 8px !important;
        }
        .pbs-fw-gold {
          color: #C4A85A;
          font-weight: 500;
        }
        .pbs-fw-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          list-style: none;
          margin: 20px 0;
          padding: 0;
        }
        .pbs-fw-tag {
          display: inline-flex;
          align-items: center;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          padding: 6px 12px;
          background: rgba(196,168,90,0.1);
          border: 1px solid rgba(196,168,90,0.2);
          border-radius: 20px;
          color: var(--pb-text);
        }

        /* ---------- closing honour ---------- */
        .pbs-honour {
          padding: 3rem 2rem;
          margin-top: 3rem;
          text-align: center;
        }
        .pbs-honour-text {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.3;
          color: var(--pb-gold);
          text-shadow: 0 0 28px rgba(255,200,100,0.28);
          margin: 0;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .pbs { padding: 60px 7% 88px; }
          .pbs-fw-title { font-size: 40px; }
        }
        @media (max-width: 768px) {
          .pbs { padding: 48px 5% 72px; }
          .pbs-hero { margin-bottom: 40px; }
          .pbs-stats-grid { flex-direction: column; }
          .pbs-stat-card { width: 90%; max-width: 320px; height: auto; padding: 2rem; margin: 0 auto; }
          .pbs-fw, .pbs-honour { padding: 2.25rem 1.5rem; margin-top: 2.5rem; }
          .pbs-fw-title { font-size: 30px; }
          .pbs-fw-sub { font-size: 20px; }
        }
      `}</style>
    </article>
  );
};

export default PBStory;
