import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

// TODO(Lui): set the "Last updated" date to the publishing date, and decide whether to add a postal address (the GDPR asks for the controller's contact details). Text follows claude/Legal_Privacy_Policy_draft.md, adapted to no account, confirmed by Lui on 2026-10-27.
const PurposeBasedPrivacyPage: React.FC = () => {
  usePageTitle('PurposeBased Privacy Policy, HumanBased', '/apps/purposebased/privacy',
    'The PurposeBased privacy policy: everything stays on your phone, there is no account, and we collect no data. How to contact us and delete your data.');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              PURPOSEBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/50 italic">Last updated: 27 October 2026</p>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            PurposeBased is an iPhone app by HumanBased, based in Copenhagen, Denmark. This policy explains what happens to your information, and the rights you have over it. It follows the iPhone app, which has no account and keeps everything on your phone.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                The short version
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Everything you answer in the app stays on your phone: your cards, profile, birth details if you add them, journal, missions, calendar and notes.</li>
                <li>There is no account, no sign-in and no server. The app makes no network calls of its own.</li>
                <li>We collect no data.</li>
                <li>Purchases go through Apple. We never see your payment details.</li>
                <li>No analytics, no crash reporting, no ads, no tracking, no selling of data.</li>
                <li>You can delete everything at any time: Settings, then Delete my data.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Who is responsible
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                HumanBased, a social enterprise based in Copenhagen, Denmark, is the data controller for the app. Write to <a href="mailto:support@humanbased.org" className="text-amber-400 hover:text-amber-300 underline">support@humanbased.org</a> for anything about your data. We apply the GDPR to every user, wherever you live.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What stays on your phone
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Your answers to the cards, your profile, your birth date, time and place if you add them, your journal, missions, calendar, notes, points and settings. They are stored only on your device. We cannot see them and we do not hold a copy.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Reminders are local notifications on your phone. They do not pass through any server. You can also export your profile as a file; that file is yours to keep or delete. If you back up your iPhone, the backup can bring your data back when you set up a new phone. Without a backup it cannot be recovered, because we have no copy. Backups are yours to manage in your iPhone settings.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What we collect
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Nothing, through the app. The app does not send your answers, birth details or journal anywhere in this version.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                The app has no analytics, no crash reporting, no advertising and no tracking of any kind.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Purchases
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Blissed is a subscription sold through the App Store. Apple handles the payment and the app checks your plan on your phone. We never see your name, card or payment details. Apple's own privacy policy applies to the purchase.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Support emails
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Feedback and support in the app open your own email app. We only receive what you choose to send to support@humanbased.org. If you write to us, we keep the conversation to help you. Our support email runs on Google Workspace. Legal basis: legitimate interest.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Links that open in your browser
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                The privacy and terms pages open in your browser, outside the app. That is a normal website visit, and it is separate from the app, which sends nothing.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                A future feature: the Purpose Coach
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                A future version may offer the Purpose Coach, a coach trained on purpose, meaningful careers and talent management. It is not part of this version. Before it arrives, we will update this policy, and we will ask for your consent in the app if it needs to send anything off your phone.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                How long we keep data
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>On your phone: until you delete it or delete the app.</li>
                <li>Support emails: up to 2 years after the last message.</li>
                <li>Sales records from Apple: as long as accounting law requires.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Your rights
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                You can ask to see, correct, export or delete your data, to restrict or object to processing, and to withdraw consent. Write to <a href="mailto:support@humanbased.org" className="text-amber-400 hover:text-amber-300 underline">support@humanbased.org</a>. You can also complain to your data protection authority. In Denmark that is Datatilsynet.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Deleting your data
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                In the app: Settings, then Delete my data, then confirm with Delete everything. This removes everything on your phone, including reminders and your profile photo. It does not remove a profile file you exported yourself, or your Apple subscription. Subscriptions are managed by Apple: cancel them in the Settings app on your iPhone, under your Apple Account, then Subscriptions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Children
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                The app is for people aged 16 and over. If you believe a younger person is using it, write to us and we will help.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Changes
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We update the date at the top when this policy changes, and tell you in the app about important changes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Contact
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                HumanBased, Copenhagen, Denmark. <a href="mailto:support@humanbased.org" className="text-amber-400 hover:text-amber-300 underline">support@humanbased.org</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedPrivacyPage;
