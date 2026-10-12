import React from 'react';
import { Link } from 'react-router-dom';

// Shared pieces for the PurposeBased articles, the articles index and the
// self-discovery journal: URLs, JSON-LD builders, the editorial stylesheet and
// small layout components. Visual language follows PBStory (Cormorant display
// type, DM Sans body, gold labels, navy glass bands over the cosmos backdrop).

export const ORIGIN = 'https://www.humanbased.org';
export const PB_URL = `${ORIGIN}/purposebased`;
export const HOW_URL = `${ORIGIN}/purposebased/how-it-works`;
export const ARTICLES_URL = `${ORIGIN}/purposebased/articles`;
export const PURPOSE_URL = `${ORIGIN}/purposebased/articles/what-is-my-purpose`;
export const YOURSELF_URL = `${ORIGIN}/purposebased/articles/how-to-find-yourself`;
export const JOURNAL_URL = `${ORIGIN}/purposebased/self-discovery-journal`;
export const APP_URL = 'https://www.purposebased.app';
export const PUBLISHED = '2026-10-12';

const PUBLISHER = { '@type': 'Organization', name: 'HumanBased', url: ORIGIN };

type Crumb = { name: string; url: string };

function breadcrumb(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function articleLd(opts: {
  url: string;
  headline: string;
  description: string;
  crumbs: Crumb[];
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumb(opts.crumbs),
      {
        '@type': 'Article',
        headline: opts.headline,
        description: opts.description,
        url: opts.url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        inLanguage: 'en',
        author: PUBLISHER,
        publisher: PUBLISHER,
      },
    ],
  };
}

export function pageLd(opts: {
  url: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'CollectionPage';
  crumbs: Crumb[];
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumb(opts.crumbs),
      {
        '@type': opts.type ?? 'WebPage',
        name: opts.name,
        description: opts.description,
        url: opts.url,
        inLanguage: 'en',
        isPartOf: { '@type': 'WebSite', name: 'PurposeBased', url: PB_URL },
        publisher: PUBLISHER,
      },
    ],
  };
}

export const ArticleHero: React.FC<{
  label: string;
  title: string;
  meta?: string;
  trail?: 'articles' | 'none';
}> = ({ label, title, meta, trail = 'articles' }) => (
  <header className="pba-hero">
    <div className="pba-wide">
      <nav className="pba-crumbs" aria-label="Breadcrumb">
        <Link to="/purposebased">PurposeBased</Link>
        {trail === 'articles' ? (
          <>
            <span aria-hidden="true"> / </span>
            <Link to="/purposebased/articles">Articles</Link>
          </>
        ) : null}
      </nav>
      <p className="pba-label">{label}</p>
      <h1 className="pba-h1">{title}</h1>
      {meta ? <p className="pba-meta">{meta}</p> : null}
    </div>
  </header>
);

export const Quote: React.FC<{ children: React.ReactNode; by: string; source: string }> = ({
  children,
  by,
  source,
}) => (
  <figure className="pba-quote">
    <blockquote>{children}</blockquote>
    <figcaption>
      {by}, <cite>{source}</cite>
    </figcaption>
  </figure>
);

export const AppCta: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="pba-sec pba-sec--tint pba-cta" aria-labelledby="pba-cta-title">
    <div className="pba-narrow">
      <p className="pba-label">PurposeBased</p>
      <h2 className="pba-h2" id="pba-cta-title">
        {title}
      </h2>
      {children}
      <div className="pba-cta-row">
        <a href={APP_URL} className="pba-btn" target="_blank" rel="noopener noreferrer">
          Open the PurposeBased app
        </a>
        <Link to="/purposebased/how-it-works" className="pba-btn pba-btn--ghost">
          See how it works
        </Link>
      </div>
    </div>
  </section>
);

export const KeepReading: React.FC<{ current: 'purpose' | 'yourself' | 'journal' }> = ({ current }) => (
  <section className="pba-sec" aria-labelledby="pba-more-title">
    <div className="pba-narrow">
      <h2 className="pba-h3" id="pba-more-title">
        Keep reading
      </h2>
      <ul className="pba-more">
        {current !== 'purpose' && (
          <li>
            <Link to="/purposebased/articles/what-is-my-purpose">What is my purpose?</Link>
            <span>What purpose is made of, and how you build it.</span>
          </li>
        )}
        {current !== 'yourself' && (
          <li>
            <Link to="/purposebased/articles/how-to-find-yourself">How to find yourself</Link>
            <span>Why what you do and who you are belong together.</span>
          </li>
        )}
        {current !== 'journal' && (
          <li>
            <Link to="/purposebased/self-discovery-journal">Self-discovery journal</Link>
            <span>A free set of prompts you can answer in private.</span>
          </li>
        )}
        <li>
          <Link to="/purposebased/articles">All articles</Link>
          <span>The full list.</span>
        </li>
      </ul>
    </div>
  </section>
);

export const ArticleStyles: React.FC = () => (
  <style href="pb-article" precedence="pb">{`
    .pba {
      --pb-gold: #C4A85A;
      --pb-text: #cadcf0;
      --pb-lead: rgba(255,255,255,0.88);
      display: block;
      width: 100%;
      font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
      color: var(--pb-text);
    }
    .pba *, .pba *::before, .pba *::after { box-sizing: border-box; }
    .pba-narrow { width: 100%; max-width: 700px; margin-inline: auto; }
    .pba-wide { width: 100%; max-width: 980px; margin-inline: auto; }

    .pba-sec { padding: 3rem 24px; }
    .pba-sec--tint {
      background: rgba(12, 31, 60, 0.35);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
    .pba-hero { padding: 7rem 24px 2.5rem; }
    .pba-crumbs { font-size: 14px; color: var(--pb-text); margin: 0 0 1.75rem; }
    .pba-crumbs a { color: var(--pb-text); text-decoration: underline; text-underline-offset: 3px; }
    .pba-label {
      font-size: 12px; font-weight: 600; line-height: 1.2; letter-spacing: 2px;
      text-transform: uppercase; color: var(--pb-gold); margin: 0 0 1.25rem;
    }
    .pba-h1 {
      font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
      font-weight: 500; font-size: 68px; line-height: 1.06; letter-spacing: -0.01em;
      color: #fff; margin: 0; text-wrap: balance;
    }
    .pba-meta { font-size: 14px; color: var(--pb-text); margin: 1.5rem 0 0; }
    .pba-h2 {
      font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
      font-weight: 500; font-size: 42px; line-height: 1.12; color: #fff; margin: 3rem 0 1.25rem;
    }
    .pba-h2:first-child { margin-top: 0; }
    .pba-h3 {
      font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
      font-weight: 500; font-size: 30px; line-height: 1.2; color: #fff; margin: 0 0 1rem;
    }
    .pba-body p, .pba-body li {
      font-size: 18px; line-height: 1.8; color: var(--pb-text);
    }
    .pba-body p { margin: 0 0 1.5rem; }
    .pba-body .pba-lead {
      font-size: 22px; line-height: 1.6; color: var(--pb-lead);
    }
    .pba-body a, .pba-link {
      color: var(--pb-gold); text-underline-offset: 3px;
    }
    .pba-body a:hover, .pba-link:hover { color: #fff; }
    .pba-body ul { margin: 0 0 1.5rem; padding-left: 1.25rem; }
    .pba-body li { margin-bottom: 0.75rem; }
    .pba-body li::marker { color: var(--pb-gold); }

    .pba-quote { margin: 2.5rem 0; padding: 0 0 0 1.5rem; border-left: 2px solid var(--pb-gold); }
    .pba-quote blockquote {
      margin: 0; font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
      font-size: 29px; line-height: 1.35; color: #f3e9d6;
    }
    .pba-quote figcaption { margin-top: 0.9rem; font-size: 15px; color: var(--pb-text); }
    .pba-quote cite { font-style: italic; }

    .pba-takeaways {
      margin: 2.5rem 0; padding: 1.75rem 1.75rem 0.75rem;
      background: rgba(196,168,90,0.08); border: 1px solid rgba(196,168,90,0.28); border-radius: 16px;
    }
    .pba-takeaways .pba-h3 { margin-bottom: 1rem; }

    .pba-cta p { font-size: 18px; line-height: 1.8; color: var(--pb-text); margin: 0 0 1.5rem; }
    .pba-cta .pba-cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin: 2rem 0 0; }
    .pba-btn {
      display: inline-flex; align-items: center; justify-content: center; min-height: 48px;
      padding: 12px 26px; border-radius: 999px; border: 1px solid var(--pb-gold);
      background: var(--pb-gold); color: #0b1a33; font: inherit; font-size: 16px; font-weight: 600;
      text-decoration: none; cursor: pointer;
    }
    .pba-btn:hover { background: #d8be74; border-color: #d8be74; }
    .pba-btn:focus-visible, .pba-body a:focus-visible, .pba-link:focus-visible {
      outline: 2px solid #fff; outline-offset: 3px;
    }
    .pba-btn--ghost { background: transparent; color: #fff; border-color: rgba(255,255,255,0.55); }
    .pba-btn--ghost:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
    .pba-btn[disabled] { opacity: 0.45; cursor: default; }

    .pba-more { list-style: none; margin: 0; padding: 0; display: grid; gap: 1rem; }
    .pba-more li { display: flex; flex-direction: column; gap: 2px; }
    .pba-more a { font-size: 19px; color: var(--pb-gold); text-underline-offset: 3px; }
    .pba-more a:hover { color: #fff; }
    .pba-more span { font-size: 16px; color: var(--pb-text); }

    .pba-cards { display: grid; gap: 1.5rem; }
    .pba-card {
      display: block; padding: 1.75rem; border-radius: 16px; text-decoration: none;
      background: rgba(12,31,60,0.55); border: 1px solid rgba(196,168,90,0.28);
    }
    .pba-card:hover { border-color: var(--pb-gold); }
    .pba-card h2 {
      font-family: 'Cormorant', 'Cormorant Fallback', Georgia, serif;
      font-weight: 500; font-size: 32px; line-height: 1.15; color: #fff; margin: 0 0 0.6rem;
    }
    .pba-card p { margin: 0; font-size: 17px; line-height: 1.7; color: var(--pb-text); }
    .pba-card .pba-label { margin-bottom: 0.75rem; }

    @media (max-width: 768px) {
      .pba-sec { padding: 2rem 20px; }
      .pba-hero { padding: 4rem 20px 1.5rem; }
      .pba-h1 { font-size: 42px; }
      .pba-h2 { font-size: 32px; margin-top: 2.5rem; }
      .pba-body p, .pba-body li, .pba-cta p { font-size: 17px; }
      .pba-body .pba-lead { font-size: 20px; }
      .pba-quote blockquote { font-size: 25px; }
      .pba-takeaways { padding: 1.25rem 1.25rem 0.5rem; }
    }
  `}</style>
);
