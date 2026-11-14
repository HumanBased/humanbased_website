import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';

const PurposeBasedDeleteAccountPage: React.FC = () => {
  usePageTitle('Delete PurposeBased Account, HumanBased', '/apps/purposebased/delete-account',
    'The PurposeBased iPhone app has no accounts. To erase what the app stores on your phone, use Delete my data in the app settings.');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6 sm:px-10 md:px-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              PURPOSEBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Delete Your Account
            </h1>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            There are no accounts in the PurposeBased iPhone app. There is no sign-up and no sign-in, so there is no account to close and nothing for us to delete on our side.
          </p>

          <p className="text-sm md:text-base text-white/60 leading-relaxed">
            What you add to the app is stored on your phone. To erase it, see{' '}
            <Link to="/apps/purposebased/delete-data" className="text-amber-400 hover:text-amber-300 underline">
              Delete your data
            </Link>
            . Questions? Write to{' '}
            <a
              href="mailto:support@humanbased.org"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              support@humanbased.org
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedDeleteAccountPage;
