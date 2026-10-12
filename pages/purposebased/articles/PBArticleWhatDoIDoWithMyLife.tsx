import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import {
  AppCta,
  ArticleHero,
  ArticleStyles,
  ARTICLES_URL,
  KeepReading,
  LIFE_URL,
  PB_URL,
  Quote,
  articleLd,
} from './PBArticleKit';

const TITLE = 'What Do I Do With My Life? Three Places to Start | PurposeBased';
const DESCRIPTION =
  'What to do with your life is usually answered by combining three things: getting deeply good at something, contributing to something larger than yourself, and knowing yourself well enough that the choice fits.';

const PBArticleWhatDoIDoWithMyLife: React.FC = () => {
  usePageSeo({
    title: TITLE,
    description: DESCRIPTION,
    canonical: LIFE_URL,
    og: { type: 'article' },
    jsonLd: articleLd({
      url: LIFE_URL,
      headline: 'What do I do with my life?',
      description: DESCRIPTION,
      crumbs: [
        { name: 'PurposeBased', url: PB_URL },
        { name: 'Articles', url: ARTICLES_URL },
        { name: 'What do I do with my life?', url: LIFE_URL },
      ],
    }),
  });

  return (
    <article className="pba">
      <ArticleHero label="Article" title="What do I do with my life?" meta="By HumanBased · 12 October 2026 · 7 minute read" />

      <section className="pba-sec">
        <div className="pba-narrow pba-body">
          <p className="pba-lead">
            What you do with your life is best decided by combining three things that writing on
            meaning keeps returning to: becoming deeply good at something, contributing to something
            larger than yourself, and knowing yourself well enough that your choice fits your values,
            strengths and natural pull. None of the three gives you a finished plan, but together
            they give you a direction you can start walking in this month.
          </p>
          <p>
            If you are asking this question, you probably feel the weight of it. It can seem as
            though everyone else was handed an answer at some point and you missed the day. Almost
            nobody got a handed answer. Most people who seem settled built it slowly, and the pieces
            they used are simpler than the question makes them look.
          </p>

          <h2 className="pba-h2">Begin with knowing yourself</h2>
          <p>
            The third piece on the list is where the work starts, so take it first. A choice about
            your life only fits if it is made by someone who knows what they value, what they do
            well, and what they are drawn to when nobody is steering them. Without that, you end up
            choosing from what is on offer: the job that was open, the path your family understood,
            the thing that looked impressive from outside.
          </p>
          <p>
            Knowing yourself is practical rather than mystical. It means being able to say, in
            plain sentences, which kinds of work leave you with energy, which kinds drain you, what
            people come to you for, and what you would refuse to give up even under pressure. Most
            people have never written any of that down. Doing so often brings a small shock of
            recognition, because the answers were there all along and nobody had asked.
          </p>
          <p>
            Two related pieces go deeper into this ground:{' '}
            <Link to="/purposebased/articles/how-to-find-yourself">how to find yourself</Link> and{' '}
            <Link to="/purposebased/articles/what-is-my-purpose">what purpose actually is</Link>. If
            you would rather start by writing, our free{' '}
            <Link to="/purposebased/self-discovery-journal">self-discovery journal</Link> walks you
            through twenty-nine prompts and keeps everything in your browser.
          </p>

          <h2 className="pba-h2">Get good at something, deeply</h2>
          <p>
            The first of the three is mastery: becoming so skilled at something that when you do it,
            time seems to disappear. Psychologists call that state flow, and it tends to come from
            effort that is demanding but within reach, repeated until you are good at it. It rarely
            comes from relaxing or drifting.
          </p>
          <p>
            This is useful when you are lost, because it turns an enormous question into a smaller
            one. You do not need to know what to do with your whole life to start getting good at
            one thing. Pick something that already holds your attention a little: a craft, a
            language, a way of solving problems, caring for people, building things. Give it regular,
            focused time for a year. Mastery is slow and mostly unglamorous, and it has a way of
            showing you what you actually enjoy, which no amount of imagining can do.
          </p>
          <p>
            Choosing what to master is where self-knowledge comes back in. Years of practice on
            something that does not suit your temperament will feel like grinding. Years on
            something that does will feel like becoming yourself.
          </p>

          <h2 className="pba-h2">Add your part to something larger</h2>
          <p>
            The second piece is contribution, helping to build toward a better society. It is easy
            to underrate because it can sound grand. In practice it is quite ordinary, and it helps
            to look at how much of your own life rests on it.
          </p>
          <p>
            Many of us live more comfortably than people did in the past. We walk on streets someone
            laid, drink from systems someone designed, live in cities that earlier generations
            planned and paid for, and rely on knowledge and institutions that people spent their
            lives building without ever seeing the full result. Each generation inherited a great
            deal and passed on something a little better. Adding your part to that chain is
            meaningful in a way that few other things are, because it connects your effort to people
            you will never meet.
          </p>
          <p>
            Your part does not have to be public or large. A teacher, a nurse, a plumber who does
            honest work, a parent raising someone decent, a developer who builds something people
            can trust, a neighbour who keeps a street alive: each is laying a stone. Viktor Frankl
            wrote in <em>Man’s Search for Meaning</em> that life keeps setting tasks for each of
            us, and that finding meaning means taking responsibility for fulfilling them. His words
            were:
          </p>
          <Quote by="Viktor Frankl" source="Man’s Search for Meaning">
            “…the tasks which it constantly sets for each individual.”
          </Quote>
          <p>
            In the same book he named doing a deed as one of the ways meaning can be found, and he
            wrote of responsibility toward other people and toward an unfinished work. A fair reading of all
            this is that meaning often arrives when you stop asking what life can give
            you and start asking what you can give back.
          </p>

          <h2 className="pba-h2">Putting the three together</h2>
          <p>
            Each piece alone can mislead. Mastery with no contribution can become a lonely
            perfectionism. Contribution with no self-knowledge can turn into burnout in a role you
            were never suited to. Self-knowledge with no action stays a private hobby. When all three
            are present, something clicks: you are doing work that suits you, that you are getting
            better at, and that matters to someone else.
          </p>
          <p>
            A simple way to test any option you are considering is to ask three questions of it.
            Does it fit what I value and what I am naturally drawn to? Could I get properly good at
            it, to the point of losing track of time? Does someone benefit from it, now or later? An
            option that scores well on all three deserves a serious trial. An option that scores on
            none is probably a distraction, however attractive it looks.
          </p>

          <h2 className="pba-h2">What to do this week</h2>
          <p>
            Do not try to decide your whole life. Choose a direction for the next six months and
            treat it as an experiment. Write down what you already know about yourself, even if it
            fits on half a page. Pick one skill to practise on a schedule. Find one small way to be
            useful to other people that uses it, such as helping a friend, volunteering for a few
            hours, or sharing what you are learning.
          </p>
          <p>
            At the end of the six months, ask what gave you energy, what dragged, and what you would
            do more of. Adjust and go again. Over a few rounds of that, a direction forms that you
            could not have reasoned your way to in advance. The question “what do I do with my life?”
            gets answered by living a good draft and revising it.
          </p>

          <div className="pba-takeaways">
            <h2 className="pba-h3">Key takeaways</h2>
            <ul>
              <li>Three things combine to answer the question: mastery, contribution and self-knowledge.</li>
              <li>Start with knowing yourself, so the choice fits your values, strengths and what you are drawn to.</li>
              <li>Mastery means getting so good at something that time seems to disappear while you do it. Psychologists call this flow.</li>
              <li>Contribution means adding your part to what earlier generations built and future ones will rely on. It can be small and ordinary.</li>
              <li>You do not have to decide everything. A six-month experiment beats waiting for certainty.</li>
            </ul>
          </div>
        </div>
      </section>

      <AppCta title="Why we built PurposeBased">
        <p>
          We have invested a great deal of work into finding how to help people answer exactly
          these questions. The PurposeBased app is built to be a thorough, in-depth way to find
          meaning, purpose and yourself, starting with knowing yourself.
        </p>
        <p>
          See <Link to="/purposebased/how-it-works" className="pba-link">how it works</Link>, or
          start from the <Link to="/purposebased" className="pba-link">PurposeBased home page</Link>.
        </p>
      </AppCta>

      <KeepReading current="life" />
      <ArticleStyles />
    </article>
  );
};

export default PBArticleWhatDoIDoWithMyLife;
