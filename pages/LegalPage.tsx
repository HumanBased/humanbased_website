import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const LegalPage: React.FC = () => {
  usePageTitle('Legal & Privacy – HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              HUMANBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Legal & Privacy
            </h1>
            <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-2xl">
              Find the privacy policy, terms, and data deletion information for each HumanBased product below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* BasedTalk */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="space-y-1">
                <p className="font-serif text-xl font-medium text-white/90">BasedTalk</p>
                <p className="text-xs text-white/40 tracking-wide uppercase">Relational Intelligence App</p>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/apps/basedtalk/privacy"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps/basedtalk/terms"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps/basedtalk/delete-account"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Delete Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps/basedtalk/delete-data"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Delete My Data
                  </Link>
                </li>
              </ul>
            </div>

            {/* PurposeBased */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="space-y-1">
                <p className="font-serif text-xl font-medium text-white/90">PurposeBased</p>
                <p className="text-xs text-white/40 tracking-wide uppercase">Self-Knowledge & Life Coaching App</p>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/apps/purposebased/privacy"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps/purposebased/terms"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps/purposebased/delete-account"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Delete Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps/purposebased/delete-data"
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/30">→</span> Delete My Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
