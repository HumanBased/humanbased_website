import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const PurposeBasedTermsPage: React.FC = () => {
  usePageTitle('PurposeBased Terms & Conditions, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              PURPOSEBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-white/50 italic">Last updated: June 2026</p>
          </div>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                By downloading or using PurposeBased, you agree to these Terms &
                Conditions ("Terms"). If you do not agree, do not use the app.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                2. Description of Service
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                PurposeBased is a self-knowledge and life coaching application developed
                by HumanBased. It uses your birth data and questionnaire answers to
                generate a personal Blueprint and Full Analysis, and provides an
                AI-powered coaching experience to support your self-development.
                PurposeBased is an educational and self-awareness tool. It does not
                provide medical advice, psychological diagnosis, therapeutic treatment,
                or emergency support. If you need professional mental health assistance,
                please consult a licensed professional.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                3. User Accounts
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                You must create an account to use PurposeBased. You are responsible for
                maintaining the confidentiality of your login credentials and for all
                activity that occurs under your account.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                4. Credits and Subscriptions
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60 mb-4">
                <li>Credits are digital units used to unlock analyses, coaching sessions, and other features in the app.</li>
                <li>Credits are non-refundable.</li>
                <li>Subscriptions are billed through Stripe. By subscribing, you authorise recurring charges at the selected billing interval.</li>
                <li>Promotional prices and bonuses may change at any time.</li>
              </ul>
              <h3 className="font-serif text-lg md:text-xl font-medium tracking-tight mb-2 text-white/80">
                Credit Accumulation and Expiry
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Unused credits from your monthly PurposeBased subscription carry over to
                the following month. Credits accumulate month to month and remain valid
                for 6 months from the date they were issued. Credits older than 6 months
                expire automatically and are not recoverable. At no point can a user
                accumulate more than 6 months worth of credits for their subscription
                tier (Seeker: 300 credits, Transmuter: 900 credits, Sovereign: 2,400
                credits).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                5. Payment Terms
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Payments are processed by Stripe. By providing payment information you
                confirm that you are authorised to use the payment method. Subscriptions
                renew automatically until cancelled. You may cancel at any time through
                your account settings; cancellation takes effect at the end of the
                current billing period.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                6. Prohibited Use
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                You agree not to use PurposeBased to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Harass or harm other people.</li>
                <li>Generate abusive, hateful, or illegal content.</li>
                <li>Attempt to reverse-engineer or misuse AI features.</li>
                <li>Circumvent any security measures or access controls.</li>
                <li>Violate any applicable laws or regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                7. Termination
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We may suspend or terminate accounts that violate these Terms or
                applicable law. You may delete your account at any time through the
                app or by contacting support.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                8. Limitation of Liability
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We are not liable for any indirect, incidental, or consequential damages
                arising from the use of the app. The app is provided "as is" without
                warranties of any kind. AI-generated content, including your Blueprint,
                Full Analysis, and coaching conversations, may not always be accurate,
                complete, or appropriate for every situation. You should use your own
                judgment when applying any insights from the app.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                9. Governing Law
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                These Terms are governed by the laws of Denmark. Any disputes shall be
                subject to the exclusive jurisdiction of the courts of Denmark, unless
                mandatory local law provides otherwise.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                10. Contact
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                HumanBased, Copenhagen, Denmark.<br />
                Email:{' '}
                <a
                  href="mailto:support@humanbased.org"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedTermsPage;
