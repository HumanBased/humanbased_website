// PurposeBased articles. One entry per article; the page template is
// pages/purposebased/pages/PBArticle.tsx. Text comes from the Google Docs in the
// shared "01 PB" folder. To add an article: add an entry here and add its slug to
// ARTICLE_SLUGS in scripts/routes.mjs.

import { PB_ARTICLES_MORE } from './pbArticlesMore';

export type ArticleBlock =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'quote'; text: string; by: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'takeaways'; items: string[] }
  | { t: 'sources'; items: string[] };

// Text may carry **bold**, *italic* and [label](/path or https://url) links.
export interface PBArticleEntry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  published: string; // "2026-11": month only, shown as "November 2026"
  cta: { heading: string; text: string; links: string };
  blocks: ArticleBlock[];
}

const WHAT_IS_MY_PURPOSE: PBArticleEntry = {
    slug: 'what-is-my-purpose',
    title: 'What Is My Purpose?',
    metaTitle: 'What Is My Purpose? A Plain Answer | PurposeBased',
    metaDescription:
      'Your purpose is what feels meaningful to you, fits your values and draws on what you are naturally pulled toward. You build it by practising it, and it starts with knowing yourself.',
    published: '2026-11',
    cta: {
      heading: 'Why we built PurposeBased',
      text: "If you're trying to understand yourself better and find a clearer sense of purpose, PurposeBased can help you explore what matters to you and what direction feels right for you.",
      links: "If you'd like to see how it works, read [how it works](/purposebased/how-it-works), or visit the [PurposeBased home page](/purposebased).",
    },
    blocks: [
      { t: 'p', text: 'Your purpose is the thing you give your time and effort to that feels meaningful to you, fits your values, and draws on what you are naturally pulled toward and perhaps good at. Nobody hands it to you whole: you develop it, practice it and make it yours, and it can change as you do.' },
      { t: 'p', text: "That's the short answer, but finding your purpose often takes more than a simple definition. Maybe something in your life no longer feels quite right, or perhaps you're wondering what would make your life feel more meaningful. Wherever you're starting from, understanding your purpose begins with getting to know yourself." },

      { t: 'h2', text: 'Purpose is something you build' },
      { t: 'p', text: 'A lot of us think of purpose as a hidden answer, a single correct job or mission waiting somewhere out there while we search for it. It’s easy to see why we think this way, but it can make finding our purpose feel like a test we are failing.' },
      { t: 'p', text: 'A useful way to understand purpose is like a skill you develop over time. You don’t become a good cook just by thinking about cooking. You learn by cooking, noticing what works, and trying again. Purpose works in a similar way. You try something, pay attention to how it feels, and make adjustments. Over time, what you practice can become something you stand for.' },
      { t: 'p', text: 'Viktor Frankl, the famous psychiatrist who wrote about finding meaning even in the most difficult circumstances, explored this idea in Man’s Search for Meaning.' },
      { t: 'quote', text: 'For the meaning of life differs from man to man, from day to day and from hour to hour. What matters, therefore, is not the meaning of life in general but rather the specific meaning of a person’s life at a given moment.', by: 'Viktor Frankl, Man’s Search for Meaning' },
      { t: 'p', text: 'Notice the words “a given moment”. The answer Frankl points to is never reached once and filed away. You return to it again and again, as your circumstances change.' },

      { t: 'h2', text: 'What a purpose is usually made of' },
      { t: 'p', text: 'People describe their purpose in different ways, but when you look closely, a few common themes start to emerge.' },
      { t: 'p', text: 'First, it is meaningful to you. Not impressive to others, not sensible on paper, but meaningful to you. You can tell the difference because meaningful work leaves you feeling that your time was well-spent, even when the day was hard.' },
      { t: 'p', text: "Second, it lines up with your values. If honesty matters to you and your work asks you to bend the truth, no title or salary will make it feel meaningful. If you value caring for others, a role with little contact with people may leave you feeling depleted, no matter how well it goes. Your values are the foundation everything else rests on, and it's often only when something conflicts with them that you realize how important they are." },
      { t: 'p', text: 'Third, it draws on things that naturally interest you. There are subjects you keep returning to without being asked and problems you find interesting even when other people find them dull. That interest can tell you something about yourself. When you find such an interest, explore it to see where it leads.' },
      { t: 'p', text: 'Fourth, and often as a result of the third, it may involve something you are good at. Talent is not a requirement for finding purpose, and some people find meaning in things they’re not necessarily talented at. But more often than not people discover that the things they enjoy and the things they do well overlap more than they expected. That overlap can make the effort feel more rewarding and give them the energy to keep going.' },

      { t: 'h2', text: 'It can change, and that is normal' },
      { t: 'p', text: 'The purpose that fits you at twenty-five may not fit at forty-five. A person who finds meaning in building something from nothing may, later in life, find it in teaching what they learned. Becoming a parent, losing someone, moving country or simply growing older all shift what matters. If your purpose shifts, you have not necessarily got it wrong. Often it means you’re paying attention.' },
      { t: 'p', text: 'There is one catch. You cannot know whether something is right for you until you have genuinely given it a try. Half-hearted effort tells you very little. Trying a new craft for a month and quitting as soon as it becomes difficult does not necessarily mean you can say that this is not for you. It may simply mean you have reached the first challenging part that you must overcome. To find out whether a direction suits you, you need to give it enough time and effort to discover what you enjoy, what challenges you, and whether it feels worthwhile.' },
      { t: 'p', text: 'Joseph Campbell, who spent his life studying the stories people tell about meaning, said it this way to Bill Moyers in the conversations collected as The Power of Myth.' },
      { t: 'quote', text: 'If you follow your bliss, you put yourself on a kind of track that has been there all the while, waiting for you.', by: 'Joseph Campbell, The Power of Myth, with Bill Moyers' },
      { t: 'p', text: '“Bliss” can sound like a grand idea, especially on an ordinary Tuesday. But you can think of it as whatever makes you feel most alive and most like yourself. Following it doesn\'t have to mean making a dramatic life change. It can begin with small steps, taken one at a time, developing that awareness.' },

      { t: 'h2', text: 'How do you discover it? Start by knowing yourself' },
      { t: 'p', text: 'The difficulty is simple. To find out what fits you, you have to know who you are, and most of us have never been asked to look at that carefully. School tells us what we are good at in a narrow range of subjects. Work tells us what we are paid for. Hardly anything asks what we value when no one is grading us, or what we would do with a free afternoon and no obligations.' },
      { t: 'p', text: 'So the first step is to understand yourself, before thinking about any job or mission. Here are some questions to help you get started:' },
      { t: 'ul', items: [
        'When did you last lose track of time, and what were you doing?',
        'What do other people come to you for, without you ever advertising it?',
        'What would you refuse to do, even if it paid well and nobody would find out?',
        'Which activities leave you with more energy than you started with, and which leave you flat?',
        'What would you regret never having tried?',
      ] },
      { t: 'p', text: 'You do not need to answer them perfectly or at the first attempt, this sense of purpose needs to be developed. Just write down the first honest answer that comes to mind.' },
      { t: 'p', text: 'Mary Oliver ended her poem “The Summer Day” with a question that does a lot of this work on its own.' },
      { t: 'quote', text: 'Tell me, what is it you plan to do with your one wild and precious life?', by: 'Mary Oliver, “The Summer Day”' },
      { t: 'p', text: 'Nobody can answer that with a career plan alone. It asks you to notice that you are choosing, every day, whether or not you admit it.' },
      { t: 'p', text: 'Another piece of advice is often attributed to the theologian Howard Thurman. The idea is this: instead of asking what the world needs, ask what makes you come alive, because the world needs people who have come alive. Whoever first said it, the advice points in a useful direction. A sense of purpose that grows from what genuinely engages you may feel more lasting than one built around what you think you should want.' },

      { t: 'h2', text: 'Then practice it' },
      { t: 'p', text: 'Once you have a few honest observations about yourself, try putting them into practice through small experiments. If you notice that you enjoy explaining things, offer to teach a short session, write a page about something you know, or mentor someone for a month. If you find that you struggle with the noise of an open-plan office but enjoy having time to focus, see if you can make room for more uninterrupted time in your week. Keep each experiment small enough that there is little to lose, but give it enough time to learn something useful.' },
      { t: 'p', text: 'After each experiment, ask yourself three simple questions:' },
      { t: 'ul', items: [
        'Did it give me energy or leave me feeling drained?',
        'Did it feel right for my values?',
        'Did it help someone else? (often very fulfilling on its own)',
      ] },
      { t: 'p', text: 'You may not always have clear answers, and that is okay. Over time, you will start to notice patterns. These can tell you more about what suits you than a sudden feeling that you have finally found the answer.' },
      { t: 'p', text: 'Be prepared for your answer to change. You might choose a direction, give it a proper try, and later decide to do things differently. That is part of developing your purpose. It does not have to be a search for one perfect answer. It is something you learn about yourself as you go.' },

      { t: 'takeaways', items: [
        'Purpose develops over time through the things you do and the choices you make. It is not a hidden answer you either find or miss.',
        'It often involves what feels meaningful to you, what fits your values, and what naturally interests you or draws on your strengths.',
        'Your purpose can change as you do. Changing direction does not mean you have failed.',
        'You learn whether something feels right by giving it a genuine try.',
        'Getting to know yourself is a good place to start. Pay attention to your values, strengths, and what gives you energy.',
      ] },
    ],
  };

// Order = order on the list page. Add new articles to content/pbArticlesMore.ts.
export const PB_ARTICLES: PBArticleEntry[] = [WHAT_IS_MY_PURPOSE, ...PB_ARTICLES_MORE];

export const findArticle = (slug?: string) => PB_ARTICLES.find((a) => a.slug === slug);

export const articleWords = (a: PBArticleEntry) =>
  a.blocks.reduce((n, b) => {
    const parts = 'text' in b ? [b.text] : b.items;
    return n + parts.join(' ').split(/\s+/).filter(Boolean).length;
  }, 0);

export const readMinutes = (a: PBArticleEntry) => Math.max(1, Math.round(articleWords(a) / 220));

export const publishedLabel = () => 'November 2026';

