import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import {
  AppCta,
  ArticleHero,
  ArticleStyles,
  ARTICLES_URL,
  KeepReading,
  PB_URL,
  PURPOSE_URL,
  Quote,
  articleLd,
} from './PBArticleKit';

const TITLE = 'What Is My Purpose? A Plain Answer | PurposeBased';
const DESCRIPTION =
  'Your purpose is what feels meaningful to you, fits your values and draws on what you are naturally pulled toward. You build it by practising it, and it starts with knowing yourself.';

const PBArticleWhatIsMyPurpose: React.FC = () => {
  usePageSeo({
    title: TITLE,
    description: DESCRIPTION,
    canonical: PURPOSE_URL,
    og: { type: 'article' },
    jsonLd: articleLd({
      url: PURPOSE_URL,
      headline: 'What is my purpose?',
      description: DESCRIPTION,
      crumbs: [
        { name: 'PurposeBased', url: PB_URL },
        { name: 'Articles', url: ARTICLES_URL },
        { name: 'What is my purpose?', url: PURPOSE_URL },
      ],
    }),
  });

  return (
    <article className="pba">
      <ArticleHero label="Article" title="What is my purpose?" meta="By HumanBased · 12 October 2026 · 8 minute read" />

      <section className="pba-sec">
        <div className="pba-narrow pba-body">
          <p className="pba-lead">
            Your purpose is the thing you give your time and effort to that feels meaningful to you,
            fits your values, and draws on what you are naturally pulled toward and perhaps good at.
            Nobody hands it to you whole: you develop it, practise it and make it yours, and it can
            change as you do.
          </p>
          <p>
            That is the short answer. The longer one matters because most people ask this question
            on a quiet evening when something feels slightly off, and a single sentence does not
            help much with that. So here is the longer version, written plainly.
          </p>

          <h2 className="pba-h2">Purpose is something you build</h2>
          <p>
            A lot of us carry a picture of purpose as a hidden answer, a single correct job or
            mission sitting somewhere out there while we wander around failing to find it. It is an
            understandable picture, and it makes the search feel like a test you are failing.
          </p>
          <p>
            A more useful picture is closer to a skill. You do not discover that you are a good
            cook by thinking hard about it. You cook, you notice what works, you cook again, and
            slowly it becomes yours. Purpose behaves in a similar way. You try something, you pay
            attention to how it feels and what it asks of you, and you keep going or you adjust.
            Over months and years the thing you practise becomes something you can say you stand
            for.
          </p>
          <p>
            Viktor Frankl, the psychiatrist who wrote about finding meaning even in the worst
            conditions, put the personal nature of this clearly in <em>Man’s Search for Meaning</em>.
          </p>
          <Quote by="Viktor Frankl" source="Man’s Search for Meaning">
            “For the meaning of life differs from man to man, from day to day and from hour to hour.
            What matters, therefore, is not the meaning of life in general but rather the specific
            meaning of a person’s life at a given moment.”
          </Quote>
          <p>
            Notice the words “a given moment”. The answer Frankl points to is never reached once and
            filed away. You meet it again and again, in the circumstances you are actually in.
          </p>

          <h2 className="pba-h2">What a purpose is usually made of</h2>
          <p>
            People describe their purpose in very different words, but when you look closely the
            same few ingredients keep turning up.
          </p>
          <p>
            First, it is meaningful to you. Not impressive to others, not sensible on paper,
            meaningful to you. You can tell the difference because meaningful work leaves you
            feeling that your time went somewhere, even when the day was hard.
          </p>
          <p>
            Second, it lines up with your values. If honesty matters to you and your work asks you
            to bend the truth, no title or salary will make it feel like purpose. If you value
            care for others, a role with no contact with people may leave you restless however well
            it goes. Values are the ground the rest stands on, and they are easy to forget until
            something grinds against them.
          </p>
          <p>
            Third, it draws on something you are naturally drawn to. There are subjects you keep
            returning to without being asked, problems you find interesting when other people find
            them dull. That pull is information. It is worth following for a while to see where it
            leads.
          </p>
          <p>
            Fourth, and often as a result of the third, it may involve something you are good at.
            Talent is not required for purpose, and plenty of people find meaning in things they
            will never be the best at. But many people find that what they are drawn to and what
            they do well overlap more than they expected, and that the overlap is where effort
            starts to feel like energy.
          </p>

          <h2 className="pba-h2">It can change, and that is fine</h2>
          <p>
            The purpose that fits you at twenty-five may not fit at forty-five. A person who finds
            meaning in building something from nothing may, later in life, find it in teaching what
            they learned. Becoming a parent, losing someone, moving country or simply growing older
            all shift what matters. If your purpose shifts, you have not necessarily got it wrong. Often it means you were
            paying attention.
          </p>
          <p>
            There is one catch. You cannot know whether something is your purpose until you have
            applied yourself to it properly. Half an effort tells you very little. A month of
            trying a new craft and quitting at the first dull patch does not show that the craft is
            wrong for you, only that the first dull patch arrived. The only way to learn whether a
            direction fits is to give it enough of yourself that it can push back, reward you or
            disappoint you honestly.
          </p>
          <p>
            Joseph Campbell, who spent his life studying the stories people tell about meaning,
            said it this way to Bill Moyers in the conversations collected as <em>The Power of Myth</em>.
          </p>
          <Quote by="Joseph Campbell" source="The Power of Myth, with Bill Moyers">
            “If you follow your bliss, you put yourself on a kind of track that has been there all
            the while, waiting for you.”
          </Quote>
          <p>
            “Bliss” can sound grander than most of us feel on an ordinary Tuesday. It helps to read
            it as whatever leaves you most alive and most yourself, and to treat following it as a
            matter of small, repeated steps.
          </p>

          <h2 className="pba-h2">How do you discover it? Start by knowing yourself</h2>
          <p>
            The difficulty is simple. To find out what fits you, you have to know who you are,
            and most of us have never been asked to look at that carefully. School tells us what we
            are good at in a narrow range of subjects. Work tells us what we are paid for. Hardly
            anything asks what we value when no one is grading, or what we would do with a free
            afternoon and no obligations.
          </p>
          <p>
            So the first piece of work is about you, before it is about any job or mission. Some
            questions that tend to open things up:
          </p>
          <ul>
            <li>When did you last lose track of time, and what were you doing?</li>
            <li>What do other people come to you for, without you ever advertising it?</li>
            <li>What would you refuse to do, even if it paid well and nobody would find out?</li>
            <li>Which activities leave you with more energy than you started with, and which leave you flat?</li>
            <li>What would you regret never having tried?</li>
          </ul>
          <p>
            You do not need to answer them well. Write the first honest thing that comes. If you
            would like a structured place to do this, we made a free{' '}
            <Link to="/purposebased/self-discovery-journal">self-discovery journal</Link> with
            prompts on exactly these themes. It runs in your browser and nothing you write is sent
            anywhere.
          </p>
          <p>
            Mary Oliver ended her poem “The Summer Day” with a question that does a lot of this work
            on its own.
          </p>
          <Quote by="Mary Oliver" source="“The Summer Day”">
            “Tell me, what is it you plan to do / with your one wild and precious life?”
          </Quote>
          <p>
            Nobody can answer that with a career plan alone. It asks you to notice that you are
            choosing, every day, whether or not you admit it.
          </p>
          <p>
            Another line is often credited to the theologian Howard Thurman, though it reaches us
            through a friend’s recollection of a conversation rather than from his own writing. The
            advice runs roughly like this: instead of asking what the world needs, ask what makes
            you come alive, because the world needs people who have come alive. Whoever first said
            it, it points in a useful direction. Purpose that comes from aliveness lasts longer than
            purpose assembled from what you think you should want.
          </p>

          <h2 className="pba-h2">Then practise it</h2>
          <p>
            Once you have a few honest observations about yourself, turn them into small
            experiments. If you noticed that you light up when you explain things, offer to teach
            one short session, write one page, or mentor one person for a month. If you noticed that
            you hate the open-plan noise and love long uninterrupted stretches, look at how you
            could rearrange a week to protect one. Keep each experiment small enough that failing
            costs you little, and long enough that you learn something real.
          </p>
          <p>
            After each one, ask three plain questions. Did it give me energy or take it? Did it
            sit well with my values? Did someone benefit? The answers will not always be tidy. Over
            time they form a pattern, and that pattern is much more trustworthy than a sudden
            conviction in the middle of the night.
          </p>
          <p>
            Expect to hold your answer loosely. You will make a provisional commitment, live inside
            it, and revise. That is what developing a purpose looks like from the inside, and it is
            a much calmer process than the hunt for a single correct answer.
          </p>

          <div className="pba-takeaways">
            <h2 className="pba-h3">Key takeaways</h2>
            <ul>
              <li>Purpose is built and practised over time. It is not a hidden answer you either find or miss.</li>
              <li>It usually combines what is meaningful to you, what fits your values, and what you are naturally drawn to and may be good at.</li>
              <li>It can change as you change. Revising it is part of the process.</li>
              <li>You only learn whether a direction fits by applying yourself to it properly.</li>
              <li>The way in is knowing yourself: your values, strengths and what gives you energy.</li>
            </ul>
          </div>
        </div>
      </section>

      <AppCta title="Why we built PurposeBased">
        <p>
          We have invested a great deal of work into finding how to help people answer exactly
          these questions. The PurposeBased app is built to be a thorough, in-depth way to find
          meaning, purpose and yourself, and it starts where this article does: with knowing
          yourself.
        </p>
        <p>
          If you want to see how the steps fit together first, read{' '}
          <Link to="/purposebased/how-it-works" className="pba-link">how it works</Link>, or visit
          the <Link to="/purposebased" className="pba-link">PurposeBased home page</Link>.
        </p>
      </AppCta>

      <KeepReading current="purpose" />
      <ArticleStyles />
    </article>
  );
};

export default PBArticleWhatIsMyPurpose;
