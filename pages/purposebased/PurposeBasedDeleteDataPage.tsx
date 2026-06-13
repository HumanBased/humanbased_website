import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const PurposeBasedDeleteDataPage: React.FC = () => {
  usePageTitle('Delete PurposeBased Data, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              PURPOSEBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Delete Your Data
            </h1>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            You have the right to request deletion of all personal data PurposeBased
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
                <li>Open the PurposeBased app on your device.</li>
                <li>Go to <strong className="text-white/80">Settings</strong>.</li>
                <li>Tap <strong className="text-white/80">Delete Account</strong>.</li>
                <li>Confirm the action when prompted.</li>
              </ol>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-4">
                This triggers a full data wipe: your account, birth data, questionnaire
                answers, Blueprint, Full Analysis, coaching conversations, and profile
                photo are permanently removed within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                If you cannot access the app
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Email{' '}
                <a
                  href="mailto:support@humanbased.org?subject=Delete%20my%20PurposeBased%20data"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>{' '}
                from the address associated with your account. State that you would
                like all of your personal data deleted. We will verify the request and
                complete the deletion within 30 days, in line with our GDPR obligations.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What is removed
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Account record and login credentials.</li>
                <li>Date, time, and place of birth.</li>
                <li>Questionnaire answers.</li>
                <li>Blueprint and Full Analysis.</li>
                <li>Coaching conversations.</li>
                <li>Profile photo, if uploaded.</li>
              </ul>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-4">
                Anonymous crash diagnostics that cannot be linked to you may be retained
                up to 90 days for technical troubleshooting and are then automatically
                removed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedDeleteDataPage;
