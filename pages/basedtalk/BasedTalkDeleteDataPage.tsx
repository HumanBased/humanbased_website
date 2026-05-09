import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const BasedTalkDeleteDataPage: React.FC = () => {
  usePageTitle('Delete Your BasedTalk Data, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              BasedTalk
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Delete Your Data
            </h1>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            You have the right to request deletion of all personal data BasedTalk
            holds about you. Submitting a deletion request is the same action as
            deleting your account: both result in a full wipe of your data from our
            systems.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                In the app
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Open the BasedTalk app on your device.</li>
                <li>Go to <strong className="text-white/80">Settings</strong>.</li>
                <li>Tap <strong className="text-white/80">Delete Account</strong>.</li>
                <li>Confirm the action when prompted.</li>
              </ol>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-4">
                This triggers a full data wipe: account, journals, mood logs, app
                interaction history, and any other personal data linked to your
                account are permanently removed within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                If you cannot access the app
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Email{' '}
                <a
                  href="mailto:support@humanbased.org?subject=Delete%20my%20BasedTalk%20data"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>{' '}
                from the address associated with your account. State that you would
                like all of your personal data deleted. We will verify the request and
                complete the deletion within 30 days, in line with our GDPR
                obligations.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What is removed
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Account record and login credentials.</li>
                <li>All user-generated text: journals, mood logs, communication notes.</li>
                <li>App interaction history tied to your identity.</li>
              </ul>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-4">
                Voice recordings are never stored, so there is nothing to delete in
                that category. Anonymous crash diagnostics that cannot be linked to
                you may be retained up to 90 days for technical troubleshooting and
                are then automatically removed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasedTalkDeleteDataPage;
