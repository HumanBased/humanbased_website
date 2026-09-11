import React from 'react';
import { usePageSeo } from '../../../hooks/usePageSeo';

// PurposeBased - Our Story.
// Full extended narrative, built from a uniform section pattern: gold label,
// Cormorant title, DM Sans body. Sections alternate a plain ground and a
// tinted navy/glass band for rhythm. Same gold / navy / glass tokens as the
// other PB pages.

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

      {/* ============ WHY WE'RE BUILDING THIS ============ */}
      <section className="pbs-fw">
        <p className="pbs-fw-label">Our Story</p>
        <h2 className="pbs-fw-title">Why we’re building this</h2>
        <div className="pbs-fw-body">
          <p>
            We wanted to build products that genuinely make a difference in people’s lives. In that
            process, we kept coming back to one thing that felt missing: purpose. People have been
            asking what makes life meaningful for thousands of years. Religions, philosophies, and
            entire cultures have tried to answer it. Yet today, with more freedom, technology, and
            opportunity than ever, many people still feel lost, disconnected, or unsure about what
            they are here to do. We are living through a meaning crisis. Mental health challenges
            are widespread, and many people, especially young people, struggle to find a sense of
            meaning and direction. Most of us are never really taught how to understand ourselves or
            figure out what makes our lives meaningful.
          </p>
          <h3 className="pbs-fw-sub">The Crisis Is Real</h3>
          <p>
            332 million people worldwide live with depression. More than half of young adults report
            lacking meaning or purpose in their lives. Over 85% of people believe in finding a deeper
            purpose, yet fewer than one in ten actively pursue it. We saw this, and we couldn’t look
            away.
          </p>
          <h3 className="pbs-fw-sub">The Opportunity of Our Time</h3>
          <p>
            We are also at a unique moment in history. Technology is opening up more possibilities
            than ever. We can learn almost anything, work with people anywhere in the world, build
            things ourselves, and create opportunities that were unimaginable a few decades ago. At
            the same time, automation is changing the way we work. The old path of simply getting an
            education, finding a job, and following a career may no longer be enough.
          </p>
          <p>
            So we asked ourselves: where are the tools that help people truly understand themselves
            and build a life that feels meaningful? We couldn’t find the answer. So we decided to
            build it ourselves.
          </p>
        </div>
      </section>

      {/* ============ YOU CAN DO ANYTHING, JUST NOT EVERYTHING ============ */}
      <section className="pbs-fw">
        <p className="pbs-fw-label">The World We Live In</p>
        <h2 className="pbs-fw-title">You can do anything, just not everything</h2>
        <p className="pbs-fw-intro">
          We live in unprecedented times. More possibilities are available to us than ever before.
          You can learn almost any skill, build a business, connect with people across the world,
          and create opportunities that were unimaginable a generation ago.
        </p>
        <div className="pbs-fw-body">
          <p>
            But here’s the paradox: when everything is possible, everything becomes a pull on your
            attention, your energy, and your time.
          </p>
          <p>
            You could become a designer, a writer, an entrepreneur, a scholar, a healer, a builder.
            You could travel, create, build wealth, cultivate relationships, master disciplines. The
            wants are endless, and they scatter like light through a prism.
          </p>
          <p>
            This freedom, paradoxically, can become a source of frustration. Because{' '}
            <span className="pbs-fw-gold">you cannot do everything at once</span>. And without a
            clear sense of direction, without choosing a lane of development, you risk pouring your
            effort in too many directions at once, becoming a master of none, reaching nowhere,
            scattered across possibilities. The work, then, is not to find the perfect path. It is
            to choose one. To stay in a lane of focus, even knowing what you’re leaving behind. To
            understand that depth requires trade-offs.
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
          Purpose has become a cliché. It is everywhere, and often used carelessly. It has been
          stripped of meaning through overuse, or inflated by expectations that no single word can
          carry.
        </p>
        <div className="pbs-fw-body">
          <p>
            But the concept it points to, the search for meaning, for a reason to live, for an
            understanding of why you’re here and what you’re meant to do, that search is ancient and
            urgent.
          </p>
          <p>
            So we use the word <span className="pbs-fw-gold">purpose</span>, even knowing its
            limitations, because it is the closest we have to capturing this sentiment. And because
            it is familiar, people know what we mean when we say it.
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
          <p>
            The word is a doorway. What matters is not the label, but what lies behind it: an
            understanding of who you are, and what you are here to do.
          </p>
        </div>
      </section>

      {/* ============ WHY PURPOSEBASED MATTERS ============ */}
      <section className="pbs-fw">
        <p className="pbs-fw-label">Why PurposeBased Matters</p>
        <h2 className="pbs-fw-title">The Product We Built</h2>
        <div className="pbs-fw-body">
          <p>
            We went to the source. We studied traditions, frameworks, and practices that have helped
            people understand themselves and find direction, as well as what already exists in the
            market and where the gaps are. We built PurposeBased to bring these different
            perspectives together in one place. It combines ancient traditions such as Astrology,
            Numerology, Chinese Astrology, and Enneagram with modern frameworks including Human
            Design, Gene Keys, Jungian Type, Holland Code, and Hierarchy of Values.
          </p>
          <p>
            Together, they help reveal: who you are and what drives you / what naturally energizes
            you / where your strengths and talents lie / what kind of work may fit you / how you
            relate to other people and the world.
          </p>
          <p>
            But PurposeBased goes beyond self-knowledge. It includes daily check-ins, journaling and
            reflection, relationship mapping, and an AI Guide that uses your personal information to
            offer ongoing, personalized guidance.
          </p>
          <p>
            The result is not just a label or a test score. It is a living picture of who you are,
            what matters to you, and where you might go next.
          </p>
        </div>
        <h3 className="pbs-fw-sub">The Journey: From Self-Knowledge to Fulfillment</h3>
        <div className="pbs-fw-body">
          <p>
            It starts with understanding yourself: your values, motivations, strengths, experiences,
            and what gives your life meaning. From there comes alignment: bringing your choices,
            goals, and everyday life closer to what genuinely matters to you. And from alignment
            comes fulfillment. Not a perfect life, but a life with more awareness, direction, and
            purpose.
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
            We live in a time of enormous change. Automation and AI are transforming traditional
            employment. The old idea of finding one job, keeping it for decades, and retiring is
            becoming less certain. People increasingly have to think about what they want to do with
            their time, skills, and lives. Purpose is no longer a luxury. It is becoming a necessity.
          </p>
          <p>
            At the same time, we have more freedom and opportunity than ever. We can learn almost
            anything, connect with people anywhere, build businesses, develop skills, and create work
            around what we care about. But the systems around us have not caught up. Education and
            career guidance often give people little help in understanding themselves or choosing a
            meaningful direction.
          </p>
          <p>
            People need better tools to navigate this changing world. We cannot wait for institutions
            to catch up. The time is now.
          </p>
        </div>
      </section>

      {/* ============ OUR BIGGER VISION ============ */}
      <section className="pbs-fw">
        <p className="pbs-fw-label">Our Bigger Vision</p>
        <h2 className="pbs-fw-title">Humanity United</h2>
        <div className="pbs-fw-body">
          <p>
            This is just the beginning. Our goal is to reach people around the world and help them
            develop a deeper understanding of their purpose and how to live a purpose-based life. We
            believe in a Humanity United, where people understand not only who they are, but how they
            can contribute to something larger than themselves.
          </p>
          <p>
            But that unity cannot be imposed. It has to begin with individuals. Each person can
            discover their own purpose, understand their strengths, and find what they are here to
            contribute. When millions of people do this and begin to align their lives accordingly,
            something greater becomes possible.
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
            We are not here to maximize engagement, create dependence, or profit from people’s
            confusion. We are here because purpose matters. It shapes how we spend our time, how we
            treat others, and the kind of world we create.
          </p>
          <p>
            People deserve clarity. They deserve tools that genuinely help them understand
            themselves. This moment matters. Technology is changing society quickly, and the choices
            we make now will shape what comes next.
          </p>
          <p>
            We can do better. We can build technology that supports human growth rather than
            exploiting attention. So we are building. And we will keep improving until everyone has a
            chance to better understand their purpose and learn how to live it.
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
        .pbs-hero { max-width: 820px; margin-bottom: 64px; }
        .pbs-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          /* 4x the base label size, fluid so it scales on small screens */
          font-size: clamp(22px, 4.6vw, 44px);
          line-height: 1.15;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 20px;
        }
        .pbs-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.15;
          color: #ffffff;
          margin: 0;
        }

        /* ---------- uniform content sections ---------- */
        .pbs-fw {
          padding: 4rem 2rem;
          margin-top: 72px;
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
          font-size: 32px;
          line-height: 1.2;
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
          font-size: 16px;
          line-height: 1.7;
          color: var(--pb-text);
          margin: 0 0 20px;
        }
        .pbs-fw-body p {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
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
          padding: 4rem 2rem;
          margin-top: 72px;
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
        }
        @media (max-width: 768px) {
          .pbs { padding: 48px 5% 72px; }
          .pbs-hero { margin-bottom: 48px; }
          .pbs-fw, .pbs-honour { padding: 3rem 1.5rem; margin-top: 52px; }
          .pbs-fw-title { font-size: 28px; }
          .pbs-fw-sub { font-size: 20px; }
        }
      `}</style>
    </article>
  );
};

export default PBStory;
