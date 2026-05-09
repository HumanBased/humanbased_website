import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const BasedTalkDeleteAccountPage: React.FC = () => {
  usePageTitle('Delete Your BasedTalk Account, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              BasedTalk
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Delete Your Account
            </h1>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            You can delete your BasedTalk account and all associated personal data at
            any time. There are two ways to do it.
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
                Once confirmed, your account is closed immediately and all of your
                personal data is permanently removed from our systems within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                If you cannot access the app
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Email{' '}
                <a
                  href="mailto:support@humanbased.org?subject=Delete%20my%20BasedTalk%20account"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>{' '}
                from the address associated with your account and ask us to delete it.
                We will verify the request and complete the deletion within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What gets deleted
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Your account and login credentials.</li>
                <li>All journal entries, mood logs, and other content you created in the app.</li>
                <li>App interaction history tied to your account.</li>
              </ul>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-4">
                Voice recordings are never stored on our servers, so there is nothing
                to delete on that front. Crash logs that cannot be linked to your
                identity may be retained for up to 90 days for technical
                troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasedTalkDeleteAccountPage;
