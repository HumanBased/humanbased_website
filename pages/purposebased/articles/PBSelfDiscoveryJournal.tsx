import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import { APP_URL, ArticleHero, ArticleStyles, JOURNAL_URL, KeepReading, PB_URL, pageLd } from './PBArticleKit';

// Free self-discovery journal. Everything happens in the browser: no requests,
// no analytics events, nothing about the answers leaves the page. Answers are
// optionally kept in localStorage (wrapped in try/catch; the page works without
// it) so a refresh does not lose them. The full prompt list is always rendered
// as plain HTML below the widget, so it is indexable and readable without JS.

type Group = { id: string; title: string; intro: string; prompts: string[] };

const GROUPS: Group[] = [
  {
    id: 'doing',
    title: 'What you do and when time disappears',
    intro: 'Start with what you already do when nobody is asking.',
    prompts: [
      'Think of the last time you lost track of time. What were you doing, and who were you with?',
      'What did you love doing as a child that nobody had to ask you to do?',
      'Which tasks do you start early and finish late without being told to?',
      'What do you read, watch or listen to when nothing is expected of you?',
      'Describe a recent day that felt like a good day. What were the ingredients?',
      'What would you do with an empty Saturday if money and obligation were not a factor?',
    ],
  },
  {
    id: 'strengths',
    title: 'Strengths and what others come to you for',
    intro: 'Other people often see your strengths before you do.',
    prompts: [
      'What do friends, family or colleagues come to you for?',
      'What compliment have you received more than once, even if you brushed it off?',
      'What do you find easy that other people seem to find hard?',
      'Describe something you made, fixed, solved or helped with that you are proud of. What did you do well in it?',
      'Which of your qualities do you take for granted?',
      'What would the people closest to you say is your best quality, and do you agree?',
    ],
  },
  {
    id: 'values',
    title: 'Values and what you refuse to compromise',
    intro: 'Values are easiest to see when they are tested.',
    prompts: [
      'Describe a moment when you were proud of how you acted. Which value was at work?',
      'When did you last feel angry about something unfair? What does that say about what you care about?',
      'What would you refuse to do, even for good money or approval?',
      'Whom do you admire, and what exactly do you admire in them?',
      'What do you want to be known for?',
      'Where does your current life line up with your values, and where does it grind against them?',
    ],
  },
  {
    id: 'energy',
    title: 'Energy and what drains you',
    intro: 'Notice what gives energy and what quietly takes it.',
    prompts: [
      'Which activities leave you with more energy than you started with?',
      'Which activities leave you flat, even when they go well?',
      'Which people, places or settings help you feel like yourself?',
      'What do you keep doing out of habit or obligation that you would drop if you could?',
      'When do you feel most at ease in your own skin, and what is going on around you?',
      'What do you pretend to enjoy?',
    ],
  },
  {
    id: 'direction',
    title: 'Direction and what you would regret not trying',
    intro: 'Last, look ahead, gently and without pressure.',
    prompts: [
      'Looking back from much later in life, what would you regret not having tried?',
      'If fear were smaller, what would you begin this month?',
      'What small experiment could you run in the next few weeks to test something you are curious about?',
      'Whose life or work makes you a little envious? What exactly do you envy?',
      'Who would you like your work, or simply your presence, to help?',
    ],
  },
];

type Flat = { group: Group; groupIndex: number; text: string; n: number };

const FLAT: Flat[] = (() => {
  const out: Flat[] = [];
  GROUPS.forEach((group, groupIndex) =>
    group.prompts.forEach((text) => out.push({ group, groupIndex, text, n: out.length + 1 })),
  );
  return out;
})();

const TOTAL = FLAT.length;
const STORE_KEY = 'pb-self-discovery-journal-v1';

const TITLE = 'Free Self-Discovery Journal with 29 Journal Prompts | PurposeBased';
const DESCRIPTION =
  'A free self-discovery journal: 29 journal prompts in five themes, answered one at a time. Download your answers as a text file. Nothing you write is sent anywhere.';

function loadStored(): { answers: string[]; index: number } | null {
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.answers)) return null;
    const answers = Array.from({ length: TOTAL }, (_, i) =>
      typeof data.answers[i] === 'string' ? data.answers[i] : '',
    );
    const index = Number.isInteger(data.index) ? Math.min(Math.max(data.index, 0), TOTAL - 1) : 0;
    return { answers, index };
  } catch {
    return null;
  }
}

function saveStored(answers: string[], index: number) {
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify({ answers, index }));
  } catch {
    /* storage unavailable: the page keeps working in memory */
  }
}

function clearStored() {
  try {
    window.localStorage.removeItem(STORE_KEY);
  } catch {
    /* ignore */
  }
}

function buildText(answers: string[]): string {
  const lines: string[] = ['My self-discovery journal', 'PurposeBased, https://www.humanbased.org/purposebased/self-discovery-journal', ''];
  let last = -1;
  FLAT.forEach((f, i) => {
    if (f.groupIndex !== last) {
      last = f.groupIndex;
      lines.push('', f.group.title.toUpperCase(), '');
    }
    lines.push(`${f.n}. ${f.text}`, (answers[i] || '').trim() || '(left blank)', '');
  });
  return lines.join('\n');
}

const PBSelfDiscoveryJournal: React.FC = () => {
  usePageSeo({
    title: TITLE,
    description: DESCRIPTION,
    canonical: JOURNAL_URL,
    jsonLd: pageLd({
      url: JOURNAL_URL,
      name: 'Self-discovery journal',
      description: DESCRIPTION,
      crumbs: [
        { name: 'PurposeBased', url: PB_URL },
        { name: 'Articles', url: `${PB_URL}/articles` },
        { name: 'Self-discovery journal', url: JOURNAL_URL },
      ],
    }),
  });

  const [answers, setAnswers] = useState<string[]>(() => Array.from({ length: TOTAL }, () => ''));
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const loaded = useRef(false);
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Restore after mount only, so the prerendered markup and the first client
  // render are identical.
  useEffect(() => {
    const stored = loadStored();
    if (stored) {
      setAnswers(stored.answers);
      setIndex(stored.index);
      setStarted(stored.answers.some((a) => a.trim() !== '') || stored.index > 0);
    }
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (loaded.current) saveStored(answers, index);
  }, [answers, index]);

  // After moving between prompts, put focus on the prompt card (not the page top).
  const move = (next: number, finish = false) => {
    if (finish) {
      setDone(true);
    } else {
      setIndex(next);
    }
    requestAnimationFrame(() => {
      if (finish) cardRef.current?.focus();
      else areaRef.current?.focus();
    });
  };

  const current = FLAT[index];
  const answered = useMemo(() => answers.filter((a) => a.trim() !== '').length, [answers]);

  const download = () => {
    const blob = new Blob([buildText(answers)], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-self-discovery-journal.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const clearAll = () => {
    setAnswers(Array.from({ length: TOTAL }, () => ''));
    setIndex(0);
    setDone(false);
    setStarted(false);
    clearStored();
  };

  return (
    <div className="pba pbj">
      <ArticleHero label="Free tool" title="Self-discovery journal" />

      <section className="pba-sec">
        <div className="pba-narrow pba-body">
          <p className="pba-lead">
            A self-discovery journal is a place to ask yourself honest questions and write down
            what comes up. This one has {TOTAL} journal prompts in five themes: what you do, your
            strengths, your values, your energy, and your direction.
          </p>
          <p>
            Answer one prompt at a time, in a sentence or a page, whatever comes. There are no
            right answers and nothing is scored. When you reach the end you can download
            everything as a plain text file to keep.
          </p>
          <p className="pbj-privacy">
            <strong>Nothing is sent anywhere.</strong> There are no accounts. What you type stays
            in this browser on this device. To make a refresh painless, your answers are also
            saved in this browser’s local storage, and the Clear button removes them. If you would
            rather work on paper, the full list of prompts is further down this page.
          </p>
        </div>
      </section>

      <section className="pba-sec pba-sec--tint" aria-labelledby="pbj-tool-title">
        <div className="pba-narrow">
          <h2 className="pba-h3" id="pbj-tool-title">
            Your journal
          </h2>

          <div className="pbj-card" ref={cardRef} tabIndex={-1}>
            {!done ? (
              <>
                <p className="pbj-progress-text" aria-live="polite">
                  Prompt {current.n} of {TOTAL} · {current.group.title}
                </p>
                <div
                  className="pbj-bar"
                  role="progressbar"
                  aria-label="Journal progress"
                  aria-valuemin={1}
                  aria-valuemax={TOTAL}
                  aria-valuenow={current.n}
                >
                  <span style={{ width: `${(current.n / TOTAL) * 100}%` }} />
                </div>
                {!started && index === 0 && <p className="pbj-hint">{current.group.intro}</p>}
                <label className="pbj-prompt" htmlFor="pbj-answer">
                  {current.text}
                </label>
                <textarea
                  id="pbj-answer"
                  ref={areaRef}
                  className="pbj-area"
                  rows={7}
                  value={answers[index]}
                  placeholder="Write whatever comes to mind."
                  onChange={(e) => {
                    const v = e.target.value;
                    setStarted(true);
                    setAnswers((prev) => prev.map((a, i) => (i === index ? v : a)));
                  }}
                />
                <div className="pbj-nav">
                  <button
                    type="button"
                    className="pba-btn pba-btn--ghost"
                    disabled={index === 0}
                    onClick={() => move(index - 1)}
                  >
                    Back
                  </button>
                  {index < TOTAL - 1 ? (
                    <button type="button" className="pba-btn" onClick={() => move(index + 1)}>
                      Next
                    </button>
                  ) : (
                    <button type="button" className="pba-btn" onClick={() => move(index, true)}>
                      Finish
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="pbj-done">
                <h3 className="pba-h3">You reached the end</h3>
                <p>
                  You answered {answered} of {TOTAL} prompts. Skipped ones are fine, they will be
                  marked as blank in the file. Reading your own words back a day later often shows
                  more than writing them did.
                </p>
                <div className="pbj-nav">
                  <button type="button" className="pba-btn" onClick={download}>
                    Download my answers as a text file
                  </button>
                  <button
                    type="button"
                    className="pba-btn pba-btn--ghost"
                    onClick={() => {
                      setDone(false);
                      setIndex(0);
                    }}
                  >
                    Review my answers
                  </button>
                </div>
                <p className="pbj-small">
                  The file is created in your browser. Nothing was uploaded.{' '}
                  <button type="button" className="pbj-linkbtn" onClick={clearAll}>
                    Clear my answers and start over
                  </button>
                </p>

                <div className="pbj-next">
                  <h3 className="pba-h3">Where to go from here</h3>
                  <p>
                    Writing is a good start. If you want a thorough, in-depth way to carry on, the
                    PurposeBased app builds on the same idea: knowing yourself first, then moving
                    toward meaning and purpose.
                  </p>
                  <p>
                    <a href={APP_URL} className="pba-btn" target="_blank" rel="noopener noreferrer">
                      Open the PurposeBased app
                    </a>
                  </p>
                  <p>
                    Or keep reading:{' '}
                    <Link to="/purposebased/articles/what-is-my-purpose" className="pba-link">
                      What is my purpose?
                    </Link>{' '}
                    and{' '}
                    <Link to="/purposebased/articles/how-to-find-yourself" className="pba-link">
                      How to find yourself
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>

          {!done && started && (
            <p className="pbj-small">
              <button type="button" className="pbj-linkbtn" onClick={clearAll}>
                Clear all my answers
              </button>
            </p>
          )}
        </div>
      </section>

      <section className="pba-sec" aria-labelledby="pbj-all-title">
        <div className="pba-narrow pba-body">
          <h2 className="pba-h2" id="pbj-all-title">
            All {TOTAL} prompts at a glance
          </h2>
          <p>Prefer a notebook? Here is the whole list, in order.</p>
          {GROUPS.map((g) => {
            const first = FLAT.find((f) => f.group === g)!.n;
            return (
              <div key={g.id} className="pbj-group">
                <h3 className="pba-h3">{g.title}</h3>
                <ol start={first}>
                  {g.prompts.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>

      <KeepReading current="journal" />

      <style href="pb-journal" precedence="pb">{`
        .pbj-privacy {
          padding: 1rem 1.25rem; border-left: 2px solid var(--pb-gold);
          background: rgba(196,168,90,0.08); color: #fff !important;
        }
        .pbj-privacy strong { color: #fff; }
        .pbj-card {
          margin-top: 1rem; padding: 1.75rem; border-radius: 16px; outline: none;
          background: rgba(8,24,42,0.7); border: 1px solid rgba(196,168,90,0.28);
        }
        .pbj-progress-text { margin: 0 0 0.75rem; font-size: 14px; line-height: 1.5; color: var(--pb-text); }
        .pbj-bar { height: 4px; border-radius: 4px; background: rgba(255,255,255,0.16); overflow: hidden; margin-bottom: 1.5rem; }
        .pbj-bar span { display: block; height: 100%; background: var(--pb-gold); }
        .pbj-hint { margin: 0 0 1rem; font-size: 16px; line-height: 1.6; color: var(--pb-text); }
        .pbj-prompt {
          display: block; margin-bottom: 1rem;
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-size: 30px; line-height: 1.25; color: #fff;
        }
        .pbj-area {
          width: 100%; min-height: 160px; padding: 14px 16px; resize: vertical;
          font: inherit; font-size: 17px; line-height: 1.6; color: #fff;
          background: rgba(11,26,51,0.9); border: 1px solid rgba(202,220,240,0.5); border-radius: 12px;
        }
        .pbj-area::placeholder { color: #b4c6dc; opacity: 1; }
        .pbj-area:focus-visible { outline: 2px solid var(--pb-gold); outline-offset: 2px; }
        .pbj-nav { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 1.25rem; }
        .pbj-done p { font-size: 17px; line-height: 1.7; color: var(--pb-text); margin: 0 0 1.25rem; }
        .pbj-small { font-size: 15px !important; margin-top: 1.25rem !important; color: var(--pb-text); }
        .pbj-linkbtn {
          background: none; border: 0; padding: 0; font: inherit; color: var(--pb-gold);
          text-decoration: underline; text-underline-offset: 3px; cursor: pointer;
        }
        .pbj-linkbtn:hover { color: #fff; }
        .pbj-linkbtn:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
        .pbj-next { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.12); }
        .pbj-group { margin-top: 2rem; }
        .pbj-group ol { margin: 0; padding-left: 1.5rem; }
        .pbj-group li { margin-bottom: 0.75rem; }
        .pbj-group li::marker { color: var(--pb-gold); }
        @media (max-width: 768px) {
          .pbj-card { padding: 1.25rem; }
          .pbj-prompt { font-size: 25px; }
        }
      `}</style>
      <ArticleStyles />
    </div>
  );
};

export default PBSelfDiscoveryJournal;
