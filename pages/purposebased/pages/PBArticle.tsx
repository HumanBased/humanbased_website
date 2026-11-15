import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import { findArticle } from '../../../content/pbArticles';

const ORIGIN = 'https://www.humanbased.org';

// One PurposeBased article. Content lives in content/pbArticles.ts.
const PBArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = findArticle(slug);
  const url = `${ORIGIN}/purposebased/articles/${slug ?? ''}`;

  usePageSeo({
    title: article ? article.metaTitle : 'PurposeBased',
    description: article ? article.metaDescription : 'PurposeBased by HumanBased.',
    canonical: url,
    og: { type: 'article', url },
    jsonLd: article
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.published,
          dateModified: article.published,
          mainEntityOfPage: url,
          author: { '@type': 'Organization', name: 'HumanBased', url: ORIGIN },
          publisher: { '@type': 'Organization', name: 'HumanBased', url: ORIGIN },
        }
      : undefined,
  });

  if (!article) return <Navigate to="/purposebased" replace />;

  return (
    <article className="pba">
      <div className="pba-content">
        <p className="pba-kicker">PurposeBased · Article</p>
        <h1 className="pba-title">{article.title}</h1>
        <p className="pba-meta">{article.readMinutes} minute read</p>

        {article.blocks.map((b, i) => {
          if (b.t === 'h2') return <h2 key={i} className="pba-h2">{b.text}</h2>;
          if (b.t === 'p') return <p key={i} className="pba-p">{b.text}</p>;
          if (b.t === 'quote')
            return (
              <figure key={i} className="pba-quote">
                <blockquote>{b.text}</blockquote>
                <figcaption>{b.by}</figcaption>
              </figure>
            );
          if (b.t === 'ul')
            return (
              <ul key={i} className="pba-ul">
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            );
          return (
            <aside key={i} className="pba-take">
              <h2 className="pba-take-h">Key takeaways</h2>
              <ul className="pba-ul">
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </aside>
          );
        })}

        <aside className="pba-cta">
          <h2 className="pba-take-h">Why we built PurposeBased</h2>
          <p className="pba-p">
            If you're trying to understand yourself better and find a clearer sense of purpose,
            PurposeBased can help you explore what matters to you and what direction feels right
            for you.
          </p>
          <p className="pba-p" style={{ marginBottom: 0 }}>
            If you'd like to see how it works, read{' '}
            <Link to="/purposebased/how-it-works" className="pba-link">how it works</Link>, or
            visit the <Link to="/purposebased" className="pba-link">PurposeBased home page</Link>.
          </p>
        </aside>
      </div>

      <style>{`
        .pba {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          display: block;
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        }
        .pba-content { max-width: 720px; margin: 0 auto; padding: 72px 2rem 96px; }
        .pba-kicker {
          font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--pb-gold); margin: 0 0 14px;
        }
        .pba-title {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 300; font-size: clamp(34px, 5vw, 52px); line-height: 1.12;
          color: #ffffff; margin: 0 0 12px;
        }
        .pba-meta { font-size: 14px; color: #8fa8c4; margin: 0 0 40px; }
        .pba-p { font-size: 19px; line-height: 1.8; font-weight: 300; color: var(--pb-text); margin: 0 0 1.35rem; }
        .pba-h2 {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 400; font-size: clamp(26px, 3.4vw, 34px); line-height: 1.2;
          color: var(--pb-gold); margin: 2.6rem 0 1rem;
        }
        .pba-quote {
          margin: 0 0 1.8rem; padding: 0.25rem 0 0.25rem 1.4rem;
          border-left: 2px solid rgba(255,200,100,0.45);
        }
        .pba-quote blockquote {
          margin: 0; font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-style: italic; font-size: clamp(22px, 2.8vw, 27px); line-height: 1.5; color: #ffffff;
        }
        .pba-quote figcaption { margin-top: 10px; font-size: 14px; color: #8fa8c4; }
        .pba-ul { margin: 0 0 1.5rem; padding-left: 1.3rem; list-style: disc; }
        .pba-ul li { font-size: 18px; line-height: 1.7; font-weight: 300; color: var(--pb-text); margin-bottom: 0.6rem; }
        .pba-ul li::marker { color: var(--pb-gold); }
        .pba-take, .pba-cta {
          margin-top: 2.8rem; padding: 26px 28px 20px; border-radius: 16px;
          border: 1px solid rgba(255,200,100,0.28);
          background: linear-gradient(135deg, rgba(255,200,100,0.08), rgba(255,200,100,0.03));
        }
        .pba-cta { margin-top: 1.5rem; padding-bottom: 26px; }
        .pba-take-h {
          font-size: 13px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase;
          color: var(--pb-gold); margin: 0 0 1rem;
        }
        .pba-link {
          color: #ffffff; text-decoration: underline;
          text-decoration-color: rgba(255,200,100,0.55); text-underline-offset: 4px;
        }
        .pba-link:hover { color: var(--pb-gold); }
        @media (max-width: 768px) {
          .pba-content { padding: 48px 1.25rem 64px; }
          .pba-p { font-size: 17px; }
          .pba-ul li { font-size: 17px; }
          .pba-take, .pba-cta { padding: 22px 20px 16px; }
        }
      `}</style>
    </article>
  );
};

export default PBArticle;
