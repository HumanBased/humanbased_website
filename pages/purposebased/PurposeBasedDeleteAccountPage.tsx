import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const PurposeBasedDeleteAccountPage: React.FC = () => {
  usePageTitle('Delete PurposeBased Account, HumanBased', '/apps/purposebased/delete-account',
    'PurposeBased has no account. Everything stays on your phone, and Delete my data in the app settings erases it.');

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
            PurposeBased has no account and no sign-in, so there is no account to close.
            Everything you add stays on your phone, and we do not hold a copy. You can erase it
            all at any time.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                In the app
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Open the PurposeBased app on your iPhone.</li>
                <li>Go to <strong className="text-white/80">Settings</strong>.</li>
                <li>Tap <strong className="text-white/80">Delete my data</strong>.</li>
                <li>Confirm with <strong className="text-white/80">Delete everything</strong>.</li>
              </ol>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-4">
                This erases everything the app holds on your phone, including your reminders and profile photo. It does not remove a profile file you exported yourself, or your Apple subscription. Cancel a subscription in the Settings app on your iPhone, under your Apple Account, then Subscriptions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                If you no longer have the app
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Deleting the app from your phone removes its data from the phone. Copies inside your
                own iPhone or iCloud backups are yours to manage in your iPhone settings. Questions?
                Write to{' '}
                <a
                  href="mailto:support@humanbased.org"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What gets deleted
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Your answers and cards.</li>
                <li>Your profile, and your birth details if you added them.</li>
                <li>Your journal, missions, calendar and notes.</li>
                <li>Your points and settings.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedDeleteAccountPage;
