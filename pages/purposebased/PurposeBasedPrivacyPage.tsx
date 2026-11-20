import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

// Text supplied by the dev team on 2026-11-20 and set exactly as written. Update the "Last updated" date whenever the text changes.
const PurposeBasedPrivacyPage: React.FC = () => {
  usePageTitle('PurposeBased Privacy Policy, HumanBased', '/apps/purposebased/privacy',
    'The PurposeBased privacy policy: nothing about you ever leaves your phone, there is no account, and we keep nothing. How to contact us and delete your data.');

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
            <p className="text-sm text-white/50 italic">Last updated: 20 November 2026</p>
          </div>

          <div className="space-y-1 text-sm md:text-base text-white/70 leading-relaxed">
            <p>App: PurposeBased (iPhone). Provider: HumanBased, Copenhagen, Denmark. CVR 45 99 85 76.</p>
            <p>Contact: <a href="mailto:support@humanbased.org" className="text-amber-400 hover:text-amber-300 underline">support@humanbased.org</a></p>
          </div>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Our promise
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Nothing about you ever leaves your phone. We keep nothing, share nothing and sell nothing, and there is no account.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                What stays on your phone
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Everything you put into the app: your answers, cards, Profile, birth date, time and place if you add them, journal, missions, career reactions, plans, points and settings. It is stored only on your phone and used only there. We have no server and no copy, so we cannot see it.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-3">
                If you change phone, an iPhone backup brings it back. You can also save a copy of your Profile as a file and open it again later. Without one of these it cannot be recovered.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                The few things that touch the internet, and what they carry
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-white/60">
                <li><strong className="text-white/80">Purchases.</strong> Blissed is bought through Apple. Apple handles the payment and tells your phone whether your plan is active. We never see your name or your card details.</li>
                <li><strong className="text-white/80">The update check.</strong> Once a day the app asks Apple's App Store whether a newer version of PurposeBased exists. The question only names the app. Nothing about you is in it. Like any internet connection, Apple sees your phone's network address. You can turn the check off in Settings.</li>
                <li><strong className="text-white/80">Calendar, if you turn it on.</strong> A planned day is added to your phone's calendar. Depending on your calendar settings it can sync to iCloud, Google or a work account, under their privacy rules. Deleting your data in the app cannot remove those events.</li>
                <li><strong className="text-white/80">Emails you choose to send us.</strong> Feedback opens your own mail app, so you see exactly what is sent. We keep the conversation to help you.</li>
              </ol>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-3">
                No ads, no tracking, no analytics, no outside code in the app. We do not use your data to train AI.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Who is responsible
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                HumanBased, a social enterprise in Copenhagen, Denmark. Write to <a href="mailto:support@humanbased.org" className="text-amber-400 hover:text-amber-300 underline">support@humanbased.org</a> about anything here. We apply the GDPR to everyone, wherever you live.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                How long we keep data
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>On your phone: until you delete it or delete the app.</li>
                <li>Emails you send us: up to 2 years after the last message.</li>
                <li>Purchase records: kept by Apple. We hold only what accounting law requires.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Your rights
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                You can ask to see, correct or delete any data we hold about you (in practice, only emails you sent us), and you can complain to your data protection authority. In Denmark that is Datatilsynet.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Deleting your data
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                In the app: Settings, Delete my data. This removes everything from your phone. Deleting the app does the same. Subscriptions are managed by Apple: cancel them in your Apple account settings.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Children
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                PurposeBased is for people aged 16 and over.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Changes
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                If anything here changes, for example a future Purpose Coach that would need to send text to a service, we will update this page first and ask for your permission in the app before anything is sent.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedPrivacyPage;
