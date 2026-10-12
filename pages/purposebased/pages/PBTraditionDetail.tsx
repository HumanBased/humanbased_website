import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import { TRADITIONS } from './PBLibrary';


// Hand-written meta descriptions (<= 160 chars); the on-page copy is longer.
const SEO_DESCRIPTIONS: Record<string, string> = {
  ikigai: 'Ikigai, the reason for being: purpose found where what you love, what you are good at, what the world needs and what sustains you meet.',
  dharma: 'Dharma, from Hindu and Buddhist philosophy: your duty and purpose in life, discovered through your nature, talents and the needs of your community.',
  thelema: "Thelema, from Aleister Crowley's philosophy: true will as your authentic purpose, aligned with the universe rather than selfish desire.",
  tao: 'Tao - The Way, from Chinese philosophy: finding purpose by understanding your place in the underlying flow of the universe and moving with it.',
  eudaimonia: "Eudaimonia, from Aristotle's ethics: flourishing through virtue, where purpose is the ongoing practice of excellence in a meaningful life.",
  'magnum-opus': 'Magnum Opus, the Great Work from classical and alchemical tradition: the defining work you bring into the world with your fullest capacity.',
  logotherapy: "Logotherapy, from Viktor Frankl's framework: the will to meaning as a human drive, and the idea that life can keep meaning in hard circumstances.",
};

// Long-form copy per tradition (from the founding philosophy document, May 2026).
// A string starting with "> " is a pull quote; "## " is a sub-heading; everything else is a paragraph.
// Traditions without an entry here keep showing their short card copy.
const LONG_COPY: Record<string, string[]> = {
  ikigai: [
    '## The Japanese art of the intersection',
    'The Japanese concept of ikigai, often translated as "reason for being" or "the reason you wake up," is, at its most practical, a diagram. Four overlapping circles: what you love, what you are good at, what the world needs, what you can be paid for. The intersection of all four is ikigai.',
    'What makes ikigai powerful is its refusal to separate the transcendent from the practical. It does not say: follow your bliss and the money will come. It does not say: be practical and save meaning for weekends. It holds all four requirements simultaneously and asks where they converge.',
    "The person who is excellent at something they don't love will be competent and hollow. The person who loves something they're not good at will be passionate and ineffective. The person who does something the world needs but that doesn't pay will be noble and broke. The person who earns well from something meaningless will be comfortable and empty. Ikigai is the name for the place where none of those compromises are required.",
    "PurposeBased draws on this framework directly. The vocational side of the app is, at its core, an ikigai inquiry: where do your strengths, your loves, your market value, and the world's genuine needs converge? The path it builds points toward that convergence.",
    'What ikigai adds to dharma is the explicit economic dimension. It takes seriously that a person must live, must eat, must support the people they love. Purpose is not a luxury. Purpose-aligned work must also be livelihood. The app does not ask its users to be saints. It asks them to find the work that is most theirs and helps them make it viable.',
  ],
  dharma: [
    '## The Bhagavad Gita and the duty you cannot delegate',
    '> "Better is one\'s own dharma, though imperfectly performed, than the dharma of another well performed." Bhagavad Gita, Chapter 3, Verse 35.',
    'The Bhagavad Gita opens on a battlefield.',
    'Arjuna is a warrior prince, standing in his chariot between two armies, about to fight a war in which many of the men on the opposing side are his relatives, his teachers, his friends. He is overwhelmed. He puts down his bow. He tells Krishna, his charioteer and guide, that he cannot do this. That it is wrong. That he would rather die than kill the people he loves.',
    'What follows is one of the most important philosophical conversations in human history. Krishna does not tell Arjuna to stop feeling. He does not dismiss his grief. He engages it, systematically, with the full weight of cosmic philosophy, until Arjuna understands something he had forgotten: he is a warrior. It is his svadharma, his specific, personal duty, to fight with skill and integrity when the situation demands it. To refuse his dharma, even out of love, is not virtue. It is avoidance.',
    'Arjuna knows who he is. He has simply forgotten, in the fog and grief of the moment, how to be it.',
    "Krishna's role is not to give Arjuna a new mission. It is to remind him of the one he already has.",
    '## Not ignorant, only lost',
    'This is the relationship PurposeBased aspires to. The user is Arjuna: not ignorant, but temporarily lost, overwhelmed by the noise of daily life, the demands of others, the accumulated weight of choices made out of habit rather than direction. The app is Krishna: not a god, not an oracle, but a voice that knows who you are and will not let you forget it.',
    'The concept of svadharma is crucial here. Not dharma in the general sense of cosmic order or religious duty, but your specific dharma: the role that is particular to your nature, your capacities, your position in the web of existence. The Gita insists that doing your own dharma imperfectly is better than doing someone else\'s perfectly. This is a radical statement in a world that relentlessly compares people to one another and grades them on the same scale.',
    'PurposeBased is built on the same conviction. You are not being measured against a universal standard. You are being helped to find and fulfil your specific role.',
  ],
};

// Slugs that were renamed; the old URL is also 301-redirected in vercel.json.
const RENAMED_SLUGS: Record<string, string> = { dao: 'tao' };

const PBTraditionDetail: React.FC = () => {
  const { tradition } = useParams<{ tradition: string }>();
  const entry = TRADITIONS.find((t) => t.slug === tradition);

  const title = entry ? `PurposeBased | ${entry.title}` : 'PurposeBased | The Library';
  const description = entry
    ? (SEO_DESCRIPTIONS[entry.slug] ?? entry.title)
    : 'Explore the traditions that shape your purpose blueprint.';
  const url = `https://www.humanbased.org/purposebased/library/${tradition ?? ''}`;

  usePageSeo({
    title,
    description,
    canonical: url,
    robots: 'noindex,follow',
  });

  if (!entry) {
    const renamed = tradition ? RENAMED_SLUGS[tradition] : undefined;
    if (renamed) return <Navigate to={`/purposebased/library/${renamed}`} replace />;
    return <Navigate to="/purposebased/library" replace />;
  }

  return (
    <section className="pbtd">
      <div className="pbtd-content">
        <h1 className="pbtd-title">{entry.title}</h1>

        <div className="pbtd-card">
          {entry.img ? (
            <img
              src={entry.img}
              alt=""
              width={entry.imgWidth}
              height={entry.imgHeight}
              decoding="async"
              className="pbtd-card-img"
            />
          ) : (
            <div className="pbtd-card-placeholder" />
          )}
        </div>

        <Link to="/purposebased/library" className="pbtd-back">
          ← Back to Library
        </Link>

        {LONG_COPY[entry.slug] ? (
          LONG_COPY[entry.slug].map((block, i) =>
            block.startsWith('## ') ? (
              <h2 key={i} className="pbtd-sub">{block.slice(3)}</h2>
            ) : block.startsWith('> ') ? (
              <blockquote key={i} className="pbtd-quote">{block.slice(2)}</blockquote>
            ) : (
              <p key={i} className="pbtd-body pbtd-body--long">{block}</p>
            ),
          )
        ) : (
          <p className="pbtd-body">{entry.copy}</p>
        )}
      </div>

      <style>{`
        .pbtd {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          display: block;
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        }

        .pbtd-content {
          /* Wide enough to let the 650px card (plus its side padding) breathe;
             body copy rides along at a still-comfortable measure. */
          max-width: 720px;
          margin: 0 auto;
          padding: 72px 2rem 96px;
        }
        .pbtd-title {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 300;
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 28px;
        }

        /* Compact framed artwork - same card treatment as the library grid. */
        .pbtd-card {
          position: relative;
          width: 100%;
          max-width: 650px;
          aspect-ratio: 16 / 9;
          margin: 0 auto 28px;
          border-radius: 12px;
          border: 0.5px solid rgba(255,200,100,0.22);
          background: linear-gradient(135deg, rgba(255,200,100,0.07), rgba(255,255,255,0.025));
          overflow: hidden;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .pbtd-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pbtd-card-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,100,0.12), rgba(10,22,40,0.6));
        }

        .pbtd-back {
          display: inline-block;
          font-size: 13px;
          color: var(--pb-gold);
          text-decoration: none;
          margin-bottom: 1.75rem;
        }
        .pbtd-back:hover { opacity: 0.8; }
        .pbtd-body {
          font-size: 20px;
          line-height: 1.75;
          color: var(--pb-text);
          margin: 0;
        }

        .pbtd-body--long { margin: 0 0 1.25rem; }
        .pbtd-sub {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 400;
          font-size: clamp(22px, 3vw, 28px);
          line-height: 1.25;
          color: var(--pb-gold);
          margin: 2rem 0 1rem;
        }
        .pbtd-quote {
          margin: 0 0 1.5rem;
          padding: 0.25rem 0 0.25rem 1.25rem;
          border-left: 2px solid rgba(255,200,100,0.45);
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-style: italic;
          font-size: clamp(21px, 2.6vw, 25px);
          line-height: 1.5;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .pbtd-content { padding: 48px 1.25rem 64px; }
          .pbtd-card { max-width: 100%; }
          .pbtd-body { font-size: 18px; }
        }
      `}</style>
    </section>
  );
};

export default PBTraditionDetail;
