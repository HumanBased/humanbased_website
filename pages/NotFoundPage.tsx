import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../hooks/usePageSeo';

const NotFoundPage: React.FC = () => {
  usePageSeo({
    title: 'Page not found – HumanBased',
    description: 'The page you are looking for does not exist or has moved.',
    robots: 'noindex,follow',
  });

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-24 px-6 sm:px-10 md:px-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-amber-400">404</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Page not found
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            The page you are looking for does not exist or has moved. These may help:
          </p>
          <nav aria-label="Helpful links" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/" className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors">
              Products
            </Link>
            <Link to="/purposebased" className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors">
              PurposeBased
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
