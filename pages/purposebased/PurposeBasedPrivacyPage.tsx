import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

// TODO(Lui): decide whether to add a postal address (the GDPR asks for the controller's contact details). Not legal advice; text follows the verified app facts of 2026-11-14. Update the "Last updated" date whenever the text changes.
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
            <p className="text-sm text-white/50 italic">Last updated: 17 November 2026</p>
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
                <li>Everything you answer in the app stays on your phone: your cards, profile, birth details if you add them, journal, missions, planned days, notes and an optional profile photo.</li>
                <li>There is no account, no sign-in and no server. The app makes no network calls of its own.</li>
                <li>We collect no data.</li>
                <li>Purchases go through Apple. We never see your payment details.</li>
                <li>No analytics, no ads, no tracking, no third-party tools inside the app, no selling of data.</li>
                <li>You can delete what the app stores at any time: Settings, then Delete my data.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Who is responsible
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                HumanBased, a social enterprise based in Copenhagen, Denmark (CVR 45 99 85 76), is the data controller for the app. Write to <a href="mailto:support@humanbased.org" className="text-amber-400 hover:text-amber-300 underline">support@humanbased.org</a> for anything about your data. We apply the GDPR to every user, wherever you live.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What stays on your phone
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Your answers to the cards, your profile, your birth date, time and place if you add them, your journal, missions, planned days, notes, points, settings and an optional profile photo you pick from your photo library.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Everything you enter stays on your phone. We have no server and no account system, so we never see it. If you back up your phone to iCloud, the backup includes this app's data. That copy is held by Apple in your own account, under Apple's terms, and we cannot see it. If you do not back up your phone, your data exists only on your phone. You manage backups in your iPhone settings.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Reminders are local notifications on your phone. They do not pass through any server. You can also save your profile as a file and choose where to keep it; that file is yours to keep or delete.
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
                The app has no analytics, no advertising, no tracking and no third-party tools of its own. Apple may give us anonymous crash reports, but only if you have allowed that in your iPhone settings. They do not identify you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What you choose to send out of the app
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Planned days and your phone's calendar. The calendar feature is off until you turn it on when you plan a day. If you turn it on, the app adds the planned day as an event in your iPhone's default calendar. It only adds events and never reads your calendar. Depending on your calendar settings, that calendar can sync to iCloud, Google or a work account such as Exchange, so other people may be able to see the event. We never see it. You manage or delete these events in your own Calendar app.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Picture cards. If you share a picture card, the app hands it to the iPhone share sheet and you choose where it goes. You start it, and we never see it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Purchases
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Blissed is a subscription sold through the App Store. Apple handles the payment and refunds, and the app checks your plan on your phone. We never see your name, card or payment details. Prices are shown by Apple. Apple's own privacy policy applies to the purchase.
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
                Scholarship and discount requests
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                If you ask for a scholarship or a student or senior discount, you may send us proof of your situation by email. We use it only to check your request. We delete it as soon as we have confirmed it, and never keep it longer than 6 months. You can ask us to delete it sooner. Legal basis: your request and our legitimate interest in checking it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                How long we keep data
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>On your phone: until you delete it or delete the app.</li>
                <li>Support emails: 6 months after the last message, so we can follow up on the same question, then they are deleted. You can ask us to delete them sooner.</li>
                <li>Proof sent for a scholarship or discount: deleted once we have confirmed it, and no later than 6 months after we receive it.</li>
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
                In the app: Settings, then Delete my data, then confirm with Delete everything. This removes everything the app stores on your phone, including reminders and your profile photo. Deleting the app also removes its data from your phone. It cannot remove events the app already added to your phone's calendar, or copies inside existing iPhone backups. It does not remove a profile file you saved yourself, or your Apple subscription. Subscriptions are managed by Apple: cancel them in the Settings app on your iPhone, under your Apple Account, then Subscriptions.
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
                HumanBased, Copenhagen, Denmark. CVR 45 99 85 76. <a href="mailto:support@humanbased.org" className="text-amber-400 hover:text-amber-300 underline">support@humanbased.org</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedPrivacyPage;
