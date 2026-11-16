import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageSeo } from '../../../hooks/usePageSeo';
import {
  PB_ARTICLES,
  findArticle,
  publishedLabel,
  readMinutes,
  type ArticleBlock,
} from '../../../content/pbArticles';

const ORIGIN = 'https://www.humanbased.org';

// Minimal inline markup used in article text: **bold**, *italic*, [label](link).
const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
export function renderInline(text: string): React.ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const [, label, href] = m;
      return href.startsWith('/') ? (
        <Link key={i} to={href} className="pba-link">{label}</Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="pba-link">{label}</a>
      );
    }
    return part;
  });
}

const Block: React.FC<{ b: ArticleBlock }> = ({ b }) => {
  switch (b.t) {
    case 'h2': return <h2 className="pba-h2">{b.text}</h2>;
    case 'h3': return <h3 className="pba-h3">{b.text}</h3>;
    case 'p': return <p className="pba-p">{renderInline(b.text)}</p>;
    case 'quote':
      return (
        <figure className="pba-quote">
          <blockquote>{b.text}</blockquote>
          <figcaption>{b.by}</figcaption>
        </figure>
      );
    case 'ul': return <ul className="pba-ul">{b.items.map((it) => <li key={it}>{renderInline(it)}</li>)}</ul>;
    case 'ol': return <ol className="pba-ul pba-ol">{b.items.map((it) => <li key={it}>{renderInline(it)}</li>)}</ol>;
    case 'takeaways':
      return (
        <aside className="pba-take">
          <h2 className="pba-take-h">Key takeaways</h2>
          <ul className="pba-ul">{b.items.map((it) => <li key={it}>{renderInline(it)}</li>)}</ul>
        </aside>
      );
    case 'sources':
      return (
        <aside className="pba-sources">
          <h2 className="pba-take-h">Sources</h2>
          <ul className="pba-ul">{b.items.map((it) => <li key={it}>{renderInline(it)}</li>)}</ul>
        </aside>
      );
  }
};

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

  if (!article) return <Navigate to="/purposebased/articles" replace />;

  const others = PB_ARTICLES.filter((a) => a.slug !== article.slug);
  const at = PB_ARTICLES.findIndex((a) => a.slug === article.slug);
  // Next three articles in the list, wrapping around.
  const more = [1, 2, 3].map((n) => PB_ARTICLES[(at + n) % PB_ARTICLES.length]).filter((a) => others.includes(a));

  return (
    <article className="pba">
      <div className="pba-content">
        <p className="pba-kicker"><Link to="/purposebased/articles" className="pba-kicker-link">PurposeBased · Articles</Link></p>
        <h1 className="pba-title">{article.title}</h1>
        <p className="pba-meta">{publishedLabel()} · {readMinutes(article)} minute read</p>

        {article.blocks.map((b, i) => <Block key={i} b={b} />)}

        <aside className="pba-cta">
          <h2 className="pba-take-h">{article.cta.heading}</h2>
          <p className="pba-p">{article.cta.text}</p>
          <p className="pba-p" style={{ marginBottom: 0 }}>{renderInline(article.cta.links)}</p>
        </aside>

        <nav className="pba-more" aria-label="Keep reading">
          <h2 className="pba-take-h">Keep reading</h2>
          <ul className="pba-more-list">
            {more.map((a) => (
              <li key={a.slug}>
                <Link to={`/purposebased/articles/${a.slug}`} className="pba-more-link">{a.title}</Link>
              </li>
            ))}
            <li><Link to="/purposebased/articles" className="pba-more-link">All articles</Link></li>
          </ul>
        </nav>
      </div>

      <style>{`
        .pba {
          --pb-gold: #ffc864;
          --pb-text: #cadcf0;
          display: block;
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        }
        .pba-content { max-width: 720px; margin: 0 auto; padding: 72px 2rem 96px; }
        .pba-kicker { font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: var(--pb-gold); margin: 0 0 14px; }
        .pba-kicker-link { color: inherit; text-decoration: none; }
        .pba-kicker-link:hover { opacity: 0.8; }
        .pba-title {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 300; font-size: clamp(34px, 5vw, 52px); line-height: 1.12;
          color: #ffffff; margin: 0 0 12px;
        }
        .pba-meta { font-size: 14px; color: #8fa8c4; margin: 0 0 40px; }
        .pba-p { font-size: 19px; line-height: 1.8; font-weight: 300; color: var(--pb-text); margin: 0 0 1.35rem; }
        .pba-p strong, .pba-ul strong { font-weight: 500; color: #ffffff; }
        .pba-h2 {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 400; font-size: clamp(26px, 3.4vw, 34px); line-height: 1.2;
          color: var(--pb-gold); margin: 2.6rem 0 1rem;
        }
        .pba-h3 {
          font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-weight: 500; font-size: clamp(22px, 2.8vw, 27px); line-height: 1.25;
          color: #ffffff; margin: 2rem 0 0.8rem;
        }
        .pba-quote { margin: 0 0 1.8rem; padding: 0.25rem 0 0.25rem 1.4rem; border-left: 2px solid rgba(255,200,100,0.45); }
        .pba-quote blockquote {
          margin: 0; font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
          font-style: italic; font-size: clamp(22px, 2.8vw, 27px); line-height: 1.5; color: #ffffff;
        }
        .pba-quote figcaption { margin-top: 10px; font-size: 14px; color: #8fa8c4; }
        .pba-ul { margin: 0 0 1.5rem; padding-left: 1.3rem; list-style: disc; }
        .pba-ol { list-style: decimal; }
        .pba-ul li { font-size: 18px; line-height: 1.7; font-weight: 300; color: var(--pb-text); margin-bottom: 0.6rem; }
        .pba-ul li::marker { color: var(--pb-gold); }
        .pba-take, .pba-cta, .pba-sources {
          margin-top: 2.8rem; padding: 26px 28px 20px; border-radius: 16px;
          border: 1px solid rgba(255,200,100,0.28);
          background: linear-gradient(135deg, rgba(255,200,100,0.08), rgba(255,200,100,0.03));
        }
        .pba-sources { margin-top: 1.5rem; }
        .pba-cta { margin-top: 1.5rem; padding-bottom: 26px; }
        .pba-take-h { font-size: 13px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; color: var(--pb-gold); margin: 0 0 1rem; }
        .pba-link { color: #ffffff; text-decoration: underline; text-decoration-color: rgba(255,200,100,0.55); text-underline-offset: 4px; }
        .pba-link:hover { color: var(--pb-gold); }
        .pba-more { margin-top: 2.8rem; padding-top: 1.5rem; border-top: 0.5px solid rgba(255,200,100,0.22); }
        .pba-more-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; }
        .pba-more-link { font-size: 17px; color: var(--pb-text); text-decoration: underline; text-decoration-color: rgba(255,200,100,0.45); text-underline-offset: 4px; }
        .pba-more-link:hover { color: #ffffff; }
        @media (max-width: 768px) {
          .pba-content { padding: 48px 1.25rem 64px; }
          .pba-p { font-size: 17px; }
          .pba-ul li { font-size: 17px; }
          .pba-take, .pba-cta, .pba-sources { padding: 22px 20px 16px; }
        }
      `}</style>
    </article>
  );
};

export default PBArticle;
