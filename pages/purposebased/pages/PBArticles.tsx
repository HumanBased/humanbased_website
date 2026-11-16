import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import { PB_ARTICLES, publishedLabel, readMinutes } from '../../../content/pbArticles';

const URL = 'https://www.humanbased.org/purposebased/articles';

// List of all PurposeBased articles. Content lives in content/pbArticles.ts.
const PBArticles: React.FC = () => {
  usePageSeo({
    title: 'Articles on Purpose and Self-Knowledge | PurposeBased',
    description:
      'Plain-language articles on finding your purpose, getting to know yourself and choosing a direction that fits you, from PurposeBased by HumanBased.',
    canonical: URL,
  });

  return (
    <section className="pbas">
      <header className="pbas-hero">
        <p className="pbas-label">Articles</p>
        <h1 className="pbas-h1">Purpose, self-knowledge and finding your direction</h1>
      </header>

      <ul className="pbas-list">
        {PB_ARTICLES.map((a) => (
          <li key={a.slug}>
            <Link to={`/purposebased/articles/${a.slug}`} className="pbas-card">
              <h2 className="pbas-title">{a.title}</h2>
              <p className="pbas-desc">{a.metaDescription}</p>
              <span className="pbas-meta">{publishedLabel()} · {readMinutes(a)} minute read</span>
            </Link>
          </li>
        ))}
      </ul>

      <style>{`
        .pbas { --pb-gold: #ffc864; --pb-text: #cadcf0; display: block; max-width: 860px; margin: 0 auto; padding: 72px 2rem 96px; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; }
        .pbas-hero { margin-bottom: 44px; }
        .pbas-label { font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: var(--pb-gold); margin: 0 0 14px; }
        .pbas-h1 { font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif; font-weight: 300; font-size: clamp(32px, 4.6vw, 48px); line-height: 1.15; color: #ffffff; margin: 0; }
        .pbas-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 18px; }
        .pbas-card { display: block; padding: 24px 28px; border-radius: 14px; border: 0.5px solid rgba(255,200,100,0.22); background: linear-gradient(135deg, rgba(255,200,100,0.07), rgba(255,255,255,0.025)); text-decoration: none; transition: border-color .2s ease, transform .2s ease; }
        .pbas-card:hover { border-color: rgba(255,200,100,0.5); transform: translateY(-2px); }
        .pbas-title { font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif; font-weight: 400; font-size: clamp(24px, 3vw, 30px); line-height: 1.2; color: var(--pb-gold); margin: 0 0 10px; }
        .pbas-desc { font-size: 16px; font-weight: 300; line-height: 1.65; color: var(--pb-text); margin: 0 0 12px; }
        .pbas-meta { font-size: 13px; color: #8fa8c4; }
        @media (max-width: 768px) { .pbas { padding: 48px 1.25rem 64px; } .pbas-card { padding: 20px; } }
      `}</style>
    </section>
  );
};

export default PBArticles;
