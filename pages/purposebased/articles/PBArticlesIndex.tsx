import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import { ARTICLES_URL, ArticleHero, ArticleStyles, PB_URL, pageLd } from './PBArticleKit';

const TITLE = 'Articles on Purpose and Self-Knowledge | PurposeBased';
const DESCRIPTION =
  'Plain-spoken articles and a free journal on finding your purpose and getting to know yourself, from the team behind PurposeBased.';

const ITEMS = [
  {
    to: '/purposebased/articles/what-is-my-purpose',
    label: 'Article',
    title: 'What is my purpose?',
    text: 'What purpose is made of, why it can change, and why you build it by practising it.',
  },
  {
    to: '/purposebased/articles/how-to-find-yourself',
    label: 'Article',
    title: 'How to find yourself',
    text: 'Why knowing your traits and strengths comes first, and how what you do shapes who you are.',
  },
  {
    to: '/purposebased/self-discovery-journal',
    label: 'Free tool',
    title: 'Self-discovery journal',
    text: 'Twenty-nine journal prompts in five themes, answered one at a time. Everything stays in your browser.',
  },
];

const PBArticlesIndex: React.FC = () => {
  usePageSeo({
    title: TITLE,
    description: DESCRIPTION,
    canonical: ARTICLES_URL,
    jsonLd: pageLd({
      url: ARTICLES_URL,
      name: 'Articles on purpose and self-knowledge',
      description: DESCRIPTION,
      type: 'CollectionPage',
      crumbs: [
        { name: 'PurposeBased', url: PB_URL },
        { name: 'Articles', url: ARTICLES_URL },
      ],
    }),
  });

  return (
    <div className="pba">
      <header className="pba-hero">
        <div className="pba-wide">
          <nav className="pba-crumbs" aria-label="Breadcrumb">
            <Link to="/purposebased">PurposeBased</Link>
          </nav>
          <p className="pba-label">Read</p>
          <h1 className="pba-h1">Articles on purpose and self-knowledge</h1>
        </div>
      </header>
      <section className="pba-sec">
        <div className="pba-narrow pba-body">
          <p className="pba-lead">
            Two articles and one free tool, written to help you ask better questions about your
            purpose and about yourself.
          </p>
        </div>
        <div className="pba-narrow">
          <div className="pba-cards">
            {ITEMS.map((item) => (
              <Link key={item.to} to={item.to} className="pba-card">
                <p className="pba-label">{item.label}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="pba-sec pba-sec--tint">
        <div className="pba-narrow pba-body">
          <p>
            All of this comes from the same place as the PurposeBased app: a belief that knowing
            yourself is where finding meaning begins.{' '}
            <Link to="/purposebased/how-it-works">See how the app works</Link> or go back to the{' '}
            <Link to="/purposebased">PurposeBased home page</Link>.
          </p>
        </div>
      </section>
      <ArticleStyles />
    </div>
  );
};

export default PBArticlesIndex;
