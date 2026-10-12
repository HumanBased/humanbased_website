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
  Quote,
  YOURSELF_URL,
  articleLd,
} from './PBArticleKit';

const TITLE = 'How to Find Yourself: Start by Knowing Yourself | PurposeBased';
const DESCRIPTION =
  'You find yourself by learning your own traits, strengths and values, then testing them in what you do. What you do and who you are are closely linked, so the two get answered together.';

const PBArticleHowToFindYourself: React.FC = () => {
  usePageSeo({
    title: TITLE,
    description: DESCRIPTION,
    canonical: YOURSELF_URL,
    og: { type: 'article' },
    jsonLd: articleLd({
      url: YOURSELF_URL,
      headline: 'How to find yourself',
      description: DESCRIPTION,
      crumbs: [
        { name: 'PurposeBased', url: PB_URL },
        { name: 'Articles', url: ARTICLES_URL },
        { name: 'How to find yourself', url: YOURSELF_URL },
      ],
    }),
  });

  return (
    <article className="pba">
      <ArticleHero label="Article" title="How to find yourself" meta="By HumanBased · 12 October 2026 · 8 minute read" />

      <section className="pba-sec">
        <div className="pba-narrow pba-body">
          <p className="pba-lead">
            You find yourself by getting to know your own traits, strengths and values, and then
            testing what you learn in the things you actually do. What you do with your time is
            closely bound up with who you feel you are, so the two questions tend to be answered
            together.
          </p>
          <p>
            People usually reach for this question when something has stopped fitting: a job, a
            relationship, a city, a version of themselves. It can feel vague and a little
            embarrassing to say out loud. It is also one of the most practical questions you can
            work on, and there is a sensible order to do it in.
          </p>

          <h2 className="pba-h2">It starts with knowing yourself</h2>
          <p>
            People have been telling each other to do this for a very long time. “Know thyself” was
            inscribed on the Temple of Apollo at Delphi, and ancient writers such as Plato return to
            it again and again. Socrates went further. In Plato’s <em>Apology</em>, speaking at his
            trial, he gives the line that is still quoted today.
          </p>
          <Quote by="Socrates, as recorded by Plato" source="Apology, 38a">
            “The unexamined life is not worth living.”
          </Quote>
          <p>
            Knowing yourself, in the practical sense, means getting specific about your traits and
            qualities. Are you patient or quick? Do you think by talking or by going quiet? Do you
            need people around you to recharge, or time alone? Are you careful, curious, stubborn,
            warm, funny, exacting? Most of us could answer these for a close friend in a minute and
            struggle to answer them for ourselves.
          </p>
          <p>
            There is a quiet benefit here that is easy to miss. When you can name your qualities
            plainly, you start to value yourself better. Many people carry a vague sense of being
            ordinary or behind, mostly because they have never looked at what they actually bring.
            Seeing it written down, in your own words, changes how you hold yourself. You stop
            apologising for the things that make you who you are.
          </p>

          <h2 className="pba-h2">What you do shapes who you are</h2>
          <p>
            Self-knowledge on its own tends to stay abstract. One of the biggest ways to find yourself is through what you do, because there
            is a strong link between your activity and your identity. Ask someone to describe
            themselves and watch how quickly they say what they do: a nurse, a builder, a mother,
            a writer, a person who is between things and unsure. The answer to “who am I?” is
            threaded through the answer to “what do I spend my days on?”
          </p>
          <p>
            Think of the small ways this shows up. Someone who starts volunteering at a
            community kitchen often ends up describing themselves as a person who cooks for
            others. Someone who writes every morning for a year starts to say “I’m a writer”
            without flinching. Nobody announced a new identity. The doing came first, and the
            description followed.
          </p>
          <p>
            That link works in both directions. Who you are guides what you choose, and what you
            choose over many years shapes who you become. It also explains why a job that clashes
            with your values can make you feel like a stranger in your own life, and why work that
            suits you can make you feel more like yourself than any amount of thinking about it.
          </p>
          <p>
            Viktor Frankl, writing about his years in concentration camps, argued that even when much is taken from us, we keep the freedom to choose our attitude
            and our own way. He called it the last of the human freedoms, and the phrase from{' '}
            <em>Man’s Search for Meaning</em> is the freedom “to choose one’s own way”. Your way is
            built out of choices about what to do next, repeated.
          </p>

          <h2 className="pba-h2">Use your strengths to choose what you do</h2>
          <p>
            The better you know your strengths and talents, the more you can choose something to do
            that you do well and also enjoy. That sounds obvious, yet many careers are built
            backwards: from what was available, what a parent hoped for, or what paid the rent in
            a hurry. Years later the person cannot say what they are good at, only what they have
            put up with.
          </p>
          <p>
            A simple way to start is to look for evidence. Strengths show up as patterns:
            compliments you brush off, tasks others hand to you, work that feels easy to you and
            hard to everyone else. Enjoyment shows up as patterns too: the things you do on a
            free Saturday, the subjects you read about unprompted, the hours that disappear. Where
            the two overlap, you have a good place to look.
          </p>
          <p>
            Also notice what drains you. A strength you dislike using is a trap. Plenty of people
            are good at something that exhausts them and end up locked into it because everyone
            keeps asking for more. Knowing yourself includes knowing what to say no to.
          </p>

          <h2 className="pba-h2">When it lines up, finding yourself feels like relief</h2>
          <p>
            Three things can line up. What you do is aligned with
            your values. It contributes something to other people or to society. And people value
            it, in whatever form that takes: a thank-you, a living wage, a community that relies on
            you. When all three are present, the whole process becomes rewarding, because the
            effort is going somewhere that matters to you and to others at once. That is when many
            people say they have found themselves. Nothing dramatic changed. Their days finally
            point in a direction they would pick on purpose.
          </p>
          <p>
            Missing one of the three shows up in familiar ways. Without values, you get success that
            feels hollow. Without contribution, you get a private satisfaction that curdles into
            isolation. Without being valued, you get a long unpaid hobby that tires you out. None of
            these is a failure of character. They are signs that one piece of the picture is still
            missing, and each can be adjusted.
          </p>
          <Quote by="Henry David Thoreau" source="Walden, “Economy”">
            “The mass of men lead lives of quiet desperation.”
          </Quote>
          <p>
            Thoreau wrote that sentence in 1854, and it still lands. A great deal of quiet
            dissatisfaction comes from the distance between what people do all day and who they are.
            That distance is a major source of despair, and it is also an opportunity: much of it
            can be turned into contentment and a sense of fulfilment when people begin to close the
            gap.
          </p>

          <h2 className="pba-h2">What this could mean beyond one person</h2>
          <p>
            Imagine, even loosely, a world where more people had worked out their own individual
            purpose and were free to live from it. Fewer people sitting through the week waiting
            for the weekend. More people doing work that fits them and gives something back. It
            seems fair to hope that a society made of people living more on purpose would put the
            human being back at the centre of how we organise work and community. That is a large
            hope, and it begins with a small, private act: one person getting to know themselves.
          </p>

          <h2 className="pba-h2">A practical way to begin this week</h2>
          <p>
            Pick one evening and write for twenty minutes without editing. Describe three moments
            from the past year when you felt most like yourself, and three when you felt least like
            yourself. Under each, note what you were doing, who was around, and what mattered in
            that moment. Read it back the next day and underline what repeats.
          </p>
          <p>
            Then choose one small change that moves your week toward the first set and away from
            the second. Keep it modest. Finding yourself happens through small adjustments that
            compound. If you would like prompts to work from, our free{' '}
            <Link to="/purposebased/self-discovery-journal">self-discovery journal</Link> offers
            twenty-nine of them, one at a time, and keeps everything in your browser. For a wider
            look at the same ground, read{' '}
            <Link to="/purposebased/articles/what-is-my-purpose">What is my purpose?</Link>
          </p>

          <div className="pba-takeaways">
            <h2 className="pba-h3">Key takeaways</h2>
            <ul>
              <li>Finding yourself starts with knowing yourself: your traits, qualities and values, named plainly.</li>
              <li>Knowing your qualities helps you value yourself better and stop apologising for them.</li>
              <li>What you do is closely tied to your identity, so choices about work and time are choices about who you become.</li>
              <li>Your strengths and talents point toward things you can do well and enjoy. Notice what drains you as well.</li>
              <li>It feels most rewarding when what you do fits your values, contributes to others and is valued by them.</li>
              <li>Small experiments and honest reflection beat waiting for a sudden answer.</li>
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

      <KeepReading current="yourself" />
      <ArticleStyles />
    </article>
  );
};

export default PBArticleHowToFindYourself;
