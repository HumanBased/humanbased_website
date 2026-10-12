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
  'know-thyself': 'Know Thyself, the inscription at Delphi and the root of Socrates\' life work: why self-examination comes before every answer about purpose.',
  anamnesis: "Anamnesis, Plato's idea that learning is recollection: the journey from shadows to light as a journey from forgetting to remembering who you are.",
  'exile-and-return': 'The Exile and the Return, from Sufi philosophy: longing as a compass, and the path of purpose as a journey home rather than toward something new.',
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
  'know-thyself': [
    '## The inscription at the door',
    `> "Know thyself." Inscribed at the entrance to the Temple of Apollo at Delphi, according to ancient writers such as Plato and Pausanias.`,
    'Of all the instructions humanity has ever given itself, this is the most persistent. It appears at the threshold of the Oracle: not inside, not hidden in a sacred chamber, but at the entrance. Before you ask your question, before you seek guidance, before you enter: know who is asking.',
    'Ancient writers tell us that the saying was dedicated to Apollo by the Seven Sages, early Greek thinkers remembered for their short, practical wisdom. Nobody can say exactly when it was first set there, but by the fifth century BC it was a familiar saying at Delphi.',
    'The Oracle of Delphi was consulted on everything: war, succession, foundation of cities, personal destiny. People made the journey from across the Greek world. The instruction at the door was not a pleasantry. It was the prerequisite. Self-knowledge was not one virtue among others; it was the condition for all wisdom.',
    '## The examined life',
    'Socrates made this the center of his entire life\'s work. In Plato\'s Apology, he explains that he goes about Athens examining himself and others because the unexamined life is not worth living. He describes it as a mission he could not give up, even when it put his own life at risk.',
    'This is not a poetic flourish. He means it literally: a life lived without self-examination is not, in the fullest sense, a life at all. It is a series of events, an accumulation of years, but not a directed human existence.',
    'The examined life is the one lived on purpose. Everything else is drift.',
    '## Where PurposeBased begins',
    'This is the foundation on which PurposeBased stands. The questionnaire, the synthesis, the coach and the path are all meant to begin with the same inscription, know thyself. And like the Oracle, the app asks you some questions before it offers any answer.',
    'The Know-thyself reading follows that order. It is not meant to hand you a verdict on who you should be. It asks first, listens to what you say, and then shows you what it heard. If you are searching for meaning, there is some relief in that. You were never expected to arrive with the answer. You were only asked to begin by looking.',
  ],
  anamnesis: [
    '## Learning as remembering',
    '> "All enquiry and all learning is but recollection." Plato, Meno (81d), in Benjamin Jowett\'s translation.',
    'In Plato\'s philosophy, the soul is eternal. Before birth, it exists in a realm of pure Forms: perfect, unchanging archetypes of justice, beauty, goodness, and truth. When it descends into a body, it forgets. The process of living is, fundamentally, the process of remembering.',
    'This is what Plato calls anamnesis, a Greek word for recollection, sometimes put as un-forgetting. It is not learning new things; it is recovering what was always already known. The teacher is not a transmitter of information but a midwife, helping to draw out what is already inside.',
    'In the Meno, Socrates puts the idea to the test. He questions a young slave who has never studied geometry about how to double the area of a square. The boy answers wrongly, then wrongly again, and then, led mostly by questions, finds the answer himself. Plato wants us to notice how little Socrates actually tells him.',
    '## Turning around in the cave',
    'In the Allegory of the Cave, in the Republic, prisoners sit chained, facing a wall, watching shadows cast by objects passing behind them. They mistake the shadows for reality. Education, for Plato, is the process of turning around: first painfully, because the light blinds, then gradually, as the eyes adjust and reality reveals itself in its actual form.',
    'The journey from shadows to light is not a journey from ignorance to knowledge. It is a journey from forgetting to remembering.',
    '## A mirror held still',
    'You do not have to share Plato\'s view of the soul to recognise the experience. Most people have read a sentence, heard a piece of advice or met a person and felt, with some surprise, that they already knew it.',
    'PurposeBased aims to work in that spirit. The reading is not meant to tell you something new about yourself. It is meant to reflect back what was already there. When someone reads their Know-thyself reading and says "this is exactly me," that moment is close to anamnesis. They always knew. They just needed the mirror held still long enough to see.',
  ],
  'exile-and-return': [
    '## The reed and the reed bed',
    '> "Out beyond ideas of wrongdoing and rightdoing, there is a field. I\'ll meet you there." Rumi, in the widely quoted translation by Coleman Barks.',
    'Sufism is the mystical tradition within Islam. In Sufi cosmology, the human being is characterised by ghurbat: exile. We have come from somewhere, and somewhere in us we remember it, even if we cannot name it. This memory is felt not as knowledge but as longing. It is the ache of the reed flute, cut from the reed bed, crying its separation. The music itself is the sound of remembering where it came from.',
    'Rumi\'s Masnavi, one of the great poems of the tradition, opens with exactly this image: the reed telling its story of being cut from its home.',
    'The Sufi path is not a journey toward something new. It is a journey home. The spiritual practices, dhikr (remembrance), sama (listening), sohbet (companionship with those further along the path), are all technologies of remembering. Ways of staying oriented toward the origin, even in exile.',
    '## Longing as a compass',
    'What makes this framework relevant to PurposeBased is the specific role it assigns to longing. In Western psychological frameworks, unfulfilled desire is often treated as a problem to be managed. In Sufism, it is a compass. The longing you cannot explain, the persistent pull toward something you can\'t quite name, is information. It is the soul remembering what the mind has forgotten.',
    'If you have ever felt that pull and been told to be realistic about it, this is a different way to hold it. The ache may not be a flaw to fix. It may be pointing somewhere.',
    '## Companions on the way',
    'PurposeBased aims to offer a coach that listens not just to what you say you want, but to what you keep returning to. That is something Sufi teachers have long done: following the longing toward its source.',
    'The mentorship layer the app is working toward, connecting those further along a path with those just beginning, is also sohbet. Companionship with the one who has already made part of the journey. Not a transaction, not a curriculum, but a presence that accelerates remembering.',
  ],
  thelema: [
    '## A phrase that is easy to misread',
    '> "Do what thou wilt shall be the whole of the Law." Aleister Crowley, The Book of the Law, Chapter I, verse 40.',
    'Aleister Crowley (1875 to 1947) was an English writer and occultist. He wrote The Book of the Law in Cairo in April 1904, and presented it as something dictated to him rather than invented by him. The name Thelema comes from the Greek word for will, and it became the name of the philosophy he built around that book.',
    'The famous line sounds like a licence to do anything you like. It is not meant that way. It also echoes an older phrase from Rabelais, whose sixteenth-century novel imagines an Abbey of Thélème with a single rule: do what you will.',
    '## True will and impulse',
    'Crowley\'s own term is True Will, and he kept it apart from the ordinary wants and desires of the ego. It is closer to a calling: the particular thing a person is here to do, which may have little to do with what they feel like doing today. The Book of the Law pictures every man and every woman as a star, each with a path of their own, and no two paths need collide.',
    'Impulse is loud and quick. True will is usually quieter, and it tends to ask for discipline, sometimes for years of it. Someone who follows a passing craving is not doing their will in this sense. They are being pushed around by it. Finding true will meant sorting what is truly yours from what you inherited, absorbed or were told to want.',
    'Crowley tied that search to the occult practices of his own system. Those are for the reader to study or leave alone, and Crowley remains a controversial figure, best read with a critical eye. The question underneath does not depend on them: what is truly mine to do?',
    '## What it offers a searcher',
    'Thelema is most useful as a warning against two mistakes. One is living entirely by other people\'s expectations. The other is mistaking appetite for calling. Between them lies the harder work of finding out what is genuinely yours.',
    'PurposeBased borrows the question, not the system. The Know-thyself reading looks at what keeps returning, what stays true when the expectations are stripped away, and where your strengths point. The aim is a direction that feels like yours, and that you can still defend a year from now.',
  ],
  tao: [
    '## The way that cannot be forced',
    '> "The Tao in its regular course does nothing (for the sake of doing it), and so there is nothing which it does not do." Tao Te Ching, chapter 37, in James Legge\'s translation (1891).',
    'The Tao Te Ching is a short book of 81 brief chapters, traditionally credited to Laozi, the "Old Master," whose existence scholars still debate. The oldest surviving fragments date to around 300 BC. Tao means way or path, and also the way things move when nobody is pushing them.',
    'Its best-known idea is wu wei, literally not-doing. It does not mean idleness. It means not forcing: acting in tune with the situation rather than against it. Chapter 8 praises water, whose excellence shows in benefiting all things. Chapter 64 reminds us that a journey of a thousand li begins with a single step.',
    '## The cook and the ox',
    'The Zhuangzi, written in the tradition of the Tao and credited to Zhuang Zhou, a thinker of the fourth century BC, makes the same point with a story. In its third chapter, a cook called Ding carves an ox so skilfully that his knife stays sharp for years. He does not hack at the animal. He follows its natural openings, moving the blade through the gaps between the joints.',
    'The story is about skill, but also about fit. The cook is not fighting the ox. He has learned its grain, and the work seems to do itself through him.',
    '## Moving with what wants to happen',
    'For someone searching for purpose, the Tao offers a different question. Not "what should I make happen?" but "what is already moving through me?" That can be a relief if you have spent years straining toward a goal that never felt right.',
    'It can also be misread as passivity, and it is worth saying that wu wei is practised, not assumed. The cook worked for years before the work became easy.',
    'PurposeBased leans on this idea when it looks for what comes naturally to you, what you do with ease that others find hard, and what keeps drawing you back. The path it suggests is made of small steps rather than a grand plan, which is how the Tao Te Ching says long journeys go.',
  ],
  eudaimonia: [
    '## Flourishing, not just feeling good',
    '> "The Good of man is the active exercise of his soul\'s faculties in conformity with excellence or virtue." Aristotle, Nicomachean Ethics, Book I, chapter 7 (Rackham translation).',
    'Eudaimonia is the word Aristotle used for the best a human life can be. It is usually translated as happiness, but flourishing comes closer. It is not a mood or a pleasant afternoon. It is a way of living well, and Aristotle treats pleasure as something that tends to follow from it rather than the goal.',
    'The word is built from eu, good, and daimon, spirit. Aristotle teaches it in the Nicomachean Ethics, and the idea has stayed in philosophy for more than two thousand years.',
    '## Virtue as practised excellence',
    'The Greek word we translate as virtue is arete, which really means excellence. For Aristotle, the virtues of character are built the way a skill is built: by repeated action, until doing the right thing becomes a settled part of who you are. A person becomes brave, generous or honest by practising it.',
    'Two details matter. First, eudaimonia needs actual activity, not just potential. Having a talent and never using it does not count. Second, it is judged over a whole life. Aristotle remarks that one swallow does not make a spring, and one good day does not make a flourishing life. He also admits that friends and a measure of good fortune matter, so he does not pretend it is all willpower.',
    '## What it offers a searcher',
    'Eudaimonia gives a quiet answer to the question of purpose. You do not find it once and keep it. You practise it. Purpose, on this view, is the ongoing development of what is best in you, used for something worth doing.',
    'That is a hopeful idea if you feel late or behind. The work is in the doing, and the doing can begin today.',
    'PurposeBased draws on this when it looks at your strengths as things to develop rather than labels to wear. The Know-thyself reading names the capacities you already have, and the path points to ways of using them that are worth the effort.',
  ],
  'magnum-opus': [
    '## The Great Work',
    'Magnum opus is Latin for great work. Today it usually means an artist\'s finest achievement. In the alchemical tradition it meant something more specific: the long process of making the philosopher\'s stone, with the transformation of lead into gold as its best-known image. Alchemy was also a real craft, a forerunner of chemistry, practised by people who took the laboratory as seriously as the symbol.',
    'Many alchemical writers described the work in stages marked by colour: nigredo, the blackening, when matter is broken down; albedo, the whitening, when it is purified; citrinitas, the yellowing; and rubedo, the reddening, when the work is complete. Writers disagreed about the number of stages, and there was never one standard recipe.',
    '## Gold as a symbol',
    'Many later readers, the psychologist Carl Jung among them, took alchemy as a language for inner change. In his book Psychology and Alchemy, Jung treated its images as symbols of a person becoming more fully themselves, a process he called individuation. On this reading the lead is the unfinished self, and the gold is what emerges after long, patient work.',
    'The darkness of nigredo is worth a thought. Many people who set out to change their lives meet a stretch like it first: old certainties come apart before anything new takes shape. The alchemists did not skip that stage. They treated it as part of the work.',
    '## A work that can outlast you',
    'What this tradition offers someone searching for purpose is a different sense of scale. A magnum opus is not a job title or a milestone on a CV. It is the defining work you bring into the world, built over years from your own material, and meant to be of use beyond you.',
    'It also asks for patience. The great work is slow, and the person doing it is changed by it.',
    'PurposeBased tries to serve that long view. The Know-thyself reading names the raw material, meaning your strengths, your recurring interests and what you care about. The path is meant to help you work with it, one step at a time, toward something worth building.',
  ],
  logotherapy: [
    '## A psychiatrist in the camps',
    '> "He who has a why to live for can bear with almost any how." Viktor Frankl, Man\'s Search for Meaning, quoting Nietzsche.',
    'Viktor Frankl (1905 to 1997) was a Viennese psychiatrist who survived several Nazi concentration camps, Auschwitz among them, and lost much of his family there. In 1946 he published an account of that time in German, under the title A Psychologist Experiences the Concentration Camp. In English it became Man\'s Search for Meaning.',
    'The book has two halves. The first describes what he saw: who held on, and why. The second sets out the approach he had been developing, which he called logotherapy.',
    '## The will to meaning',
    'Logos is the Greek word for meaning, among other things. Frankl argued that the search for meaning is a basic human drive, which he called the will to meaning. He set it against two other views of what moves people: Freud\'s emphasis on pleasure and Adler\'s on power.',
    'His observation in the camps was that people with something to live for, a task unfinished or someone waiting, were better able to bear the unbearable. He wrote that everything can be taken from a person except the freedom to choose one\'s attitude in any given circumstance.',
    'He was careful on two points. Meaning is specific: it differs from person to person and from one moment to the next, so no one can hand you yours. And he did not say suffering is good or necessary. His claim was that when suffering cannot be avoided, the way we meet it can still carry meaning.',
    '## Three places to look',
    'Logotherapy points to three main sources of meaning: through the work we do or the things we create, through love and care for another person, and through the attitude we take toward suffering we cannot change.',
    'For someone searching for purpose, this is a steadying thought. Meaning is not only for people with ideal circumstances or a clear calling. It can be found in responsibility, service, relationships and the challenges we choose to take on.',
    'PurposeBased shares that starting point. Its questions ask what life seems to be asking of you right now, and the Know-thyself reading is meant to help you hear it.',
  ],
};

// "Continue exploring" links shown under the copy of each tradition.
const RELATED: Record<string, string[]> = {
  ikigai: ['dharma', 'eudaimonia', 'magnum-opus'],
  dharma: ['ikigai', 'know-thyself', 'exile-and-return'],
  thelema: ['know-thyself', 'tao', 'magnum-opus'],
  tao: ['thelema', 'eudaimonia', 'exile-and-return'],
  eudaimonia: ['ikigai', 'logotherapy', 'know-thyself'],
  'magnum-opus': ['anamnesis', 'thelema', 'logotherapy'],
  logotherapy: ['eudaimonia', 'dharma', 'exile-and-return'],
  'know-thyself': ['anamnesis', 'thelema', 'eudaimonia'],
  anamnesis: ['know-thyself', 'exile-and-return', 'magnum-opus'],
  'exile-and-return': ['anamnesis', 'dharma', 'tao'],
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

        <nav className="pbtd-more" aria-label="Continue exploring">
          <h2 className="pbtd-more-title">Continue exploring</h2>
          <ul className="pbtd-more-list">
            {(RELATED[entry.slug] ?? [])
              .map((slug) => TRADITIONS.find((t) => t.slug === slug))
              .filter((t): t is (typeof TRADITIONS)[number] => Boolean(t))
              .map((t) => (
                <li key={t.slug}>
                  <Link to={`/purposebased/library/${t.slug}`} className="pbtd-more-link">
                    {t.title}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/purposebased/how-it-works" className="pbtd-more-link">
                How PurposeBased works
              </Link>
            </li>
          </ul>
        </nav>
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

        .pbtd-more {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 0.5px solid rgba(255,200,100,0.22);
        }
        .pbtd-more-title {
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
          font-weight: 400;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 1rem;
        }
        .pbtd-more-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.5rem;
        }
        .pbtd-more-link {
          font-size: 16px;
          color: var(--pb-text);
          text-decoration: underline;
          text-decoration-color: rgba(255,200,100,0.45);
          text-underline-offset: 4px;
        }
        .pbtd-more-link:hover { color: #ffffff; }

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
