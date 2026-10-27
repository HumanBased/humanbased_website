import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

// TODO(Lui): set the "Last updated" date to the publishing date. Text follows claude/Legal_Terms_of_Use_draft.md, adapted to no account, confirmed by Lui on 2026-10-27.
const PurposeBasedTermsPage: React.FC = () => {
  usePageTitle('PurposeBased Terms of Use, HumanBased', '/apps/purposebased/terms',
    'The terms of use for the PurposeBased iPhone app, published by HumanBased in Copenhagen, Denmark.');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              PURPOSEBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Terms of Use
            </h1>
            <p className="text-sm text-white/50 italic">Last updated: 27 October 2026</p>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            These terms apply to your use of PurposeBased, an iPhone app by HumanBased, based in Copenhagen, Denmark. By using the app you agree to them. Please read them carefully.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                1. What the app is
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                PurposeBased helps you understand yourself, explore careers and take small real steps toward work that fits you. It offers reflection, not certainty. It is not medical, psychological, financial or legal advice, and it never decides for you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                2. Who can use it
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                You must be 16 or older.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                3. Your account
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                There is no account and no sign-in. Everything you add stays on your phone. You can erase it at any time in Settings, with Delete my data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                4. Plans and payment
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Based is free. Blissed is a paid subscription sold through the App Store.</li>
                <li>Payment is charged to your Apple Account when you confirm the purchase.</li>
                <li>The subscription renews automatically at the end of each period unless you cancel at least 24 hours before it renews. Your Apple Account is charged for the renewal within 24 hours before the period ends.</li>
                <li>You can manage or cancel the subscription in the Settings app on your iPhone, under your Apple Account, then Subscriptions. Cancelling stops the next renewal. You keep Blissed until the current period ends.</li>
                <li>If a free trial is offered, any unused part of it ends when you buy a subscription.</li>
                <li>Prices are shown by Apple in your local currency before you confirm.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                5. Refunds
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Purchases are processed by Apple, so refunds are handled by Apple under its policies. Request one at reportaproblem.apple.com. If something in the app stopped you from using what you paid for, write to us too and we will help.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                6. Your content
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                What you write stays yours and stays on your phone. We do not sell it, use it for advertising or use it to train AI. See the Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                7. Fair use
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Do not copy, resell, reverse engineer or misuse the app or its content. The app, its questions, texts and design belong to HumanBased.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                8. Availability and changes
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We work to keep the app running well, but we cannot promise it is always available or free of errors. We may improve, change or remove features.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                9. Liability
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                To the extent the law allows, we are not liable for indirect losses, and our total liability is limited to what you paid us in the 12 months before a claim. Nothing here limits rights you have under consumer law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                10. Apple
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                These terms are between you and HumanBased, not Apple. Apple's Licensed Application End User License Agreement also applies to your use of the app.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                11. Law
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Danish law applies. Disputes go to the Danish courts, without taking away the consumer protections of the country you live in.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                12. Contact
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

export default PurposeBasedTermsPage;
