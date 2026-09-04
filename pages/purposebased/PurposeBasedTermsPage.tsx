import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const PurposeBasedTermsPage: React.FC = () => {
  usePageTitle('PurposeBased Terms & Conditions, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6 sm:px-10 md:px-16">
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

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            PurposeBased is a self-knowledge and life coaching application developed by
            HumanBased, based in Copenhagen, Denmark. By creating an account and using
            PurposeBased, you agree to these terms. Please read them carefully.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                1. Who can use PurposeBased
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                PurposeBased is intended for users aged 13 and older. By creating an
                account, you confirm that you are at least 13 years of age. If you are
                under 16 and located in the European Union, you confirm that you have
                obtained parental or guardian consent where required by your local law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                2. What PurposeBased is and is not
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                PurposeBased provides self-knowledge tools, personality framework
                synthesis, and AI-assisted coaching for personal reflection and
                direction. It is not a medical service, a therapeutic service, a
                psychological diagnostic tool, or a substitute for professional mental
                health support. Nothing in PurposeBased constitutes medical,
                psychological, financial, or legal advice. If you are experiencing
                mental health difficulties, please seek qualified professional support.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                3. Your account
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account
                credentials. You may not share your account with others or create
                accounts on behalf of others without their consent. You may delete your
                account at any time from Settings. Deletion triggers a full wipe of
                your personal data within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                4. Subscriptions and payments
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                PurposeBased offers a free tier and paid subscription plans. Paid plans
                are billed monthly. You may cancel at any time from your account
                settings or by contacting{' '}
                <a
                  href="mailto:support@humanbased.org"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>
                . Cancellation takes effect at the end of the current billing period.
                Payments are processed by Stripe. We never see or store your payment
                details.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                5. Refund & Cancellation Policy
              </h2>

              <h3 className="font-serif text-base md:text-lg font-medium tracking-tight text-white/80 mb-2">
                Cancelling or downgrading your subscription
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                Cancelling stops future billing. It does not return money already
                paid for the current period.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60 mb-6">
                <li>
                  You can cancel anytime from Settings, then Manage Subscription.
                  You keep access until the end of your current billing period and
                  will not be charged again after that.
                </li>
                <li>
                  Downgrading (for example, from a higher tier to Seeker or Free)
                  takes effect at the end of your current billing period. You keep
                  your current tier's access until then, with no early cutoff.
                </li>
              </ul>

              <h3 className="font-serif text-base md:text-lg font-medium tracking-tight text-white/80 mb-2">
                Our approach to refunds
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                We want to be genuinely fair, on both sides. PurposeBased offers a
                full 24-hour trial, the ability to explore the app before
                committing to a subscription, and a detailed personalised analysis
                that draws on real astronomical calculation and nine converged
                frameworks. Producing that analysis has real, immediate costs the
                moment it is generated. We ask that refund requests are made in
                that same spirit of fairness.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60 mb-6">
                <li>
                  If the app genuinely was not working due to a technical fault
                  that prevented you from using what you paid for, you are
                  entitled to a full refund. Contact us and explain what happened;
                  we will look into it and make it right.
                </li>
                <li>
                  If you have simply changed your mind after trying the app, we
                  will refund 50% of what you paid. This reflects that you
                  received real, complete value (a full personalised analysis and
                  ongoing app access) while acknowledging your decision to stop.
                </li>
                <li>
                  If your subscription was already at a launch or promotional
                  discount (for example, LAUNCH50), a change-of-mind refund is not
                  available on top of that discount. The reduced price you paid
                  reflects the accommodation. Genuine technical-fault refunds
                  still apply regardless of any discount.
                </li>
              </ul>

              <h3 className="font-serif text-base md:text-lg font-medium tracking-tight text-white/80 mb-2">
                The €1.99 trial
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6">
                Given the free access provided before any payment (the 24-hour
                trial and the ability to explore the app before paying), and the
                real, immediate cost of generating a Full Analysis, the €1.99
                trial fee is non-refundable once the analysis has been generated,
                except under the genuine technical fault case above.
              </p>

              <h3 className="font-serif text-base md:text-lg font-medium tracking-tight text-white/80 mb-2">
                How to request a refund
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6">
                Email{' '}
                <a
                  href="mailto:support@humanbased.org"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>{' '}
                with your account email and the reason for your request. We aim to
                respond within 2 business days.
              </p>

              <h3 className="font-serif text-base md:text-lg font-medium tracking-tight text-white/80 mb-2">
                Promo codes
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Promo codes are non-transferable and can only be applied toward a
                paid subscription purchase. If a full refund is granted under the
                technical fault case on a subscription purchased with a promo
                code, you are refunded the amount you actually paid, the
                discounted price, not the full undiscounted price.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                6. Your content and data
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                You own the data you provide to PurposeBased, including your birth
                data, questionnaire answers, and coaching conversations. You grant
                HumanBased a limited licence to process this data to provide the
                service to you. We do not sell your data, share it for advertising, or
                use it to train AI models. See our Privacy Policy for full details.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                7. Acceptable use
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                You agree not to use PurposeBased to impersonate others, scrape or
                extract data from the platform, attempt to reverse-engineer the
                synthesis system, or use the service in any way that violates
                applicable law. We reserve the right to suspend or terminate accounts
                that violate these terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                8. Intellectual property
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                The PurposeBased application, design system, synthesis methodology,
                and all content produced by HumanBased are the intellectual property
                of HumanBased. Your personal Blueprint and analysis are generated for
                your use and may not be resold or redistributed commercially.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                9. Service availability
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We aim to keep PurposeBased available at all times but cannot
                guarantee uninterrupted access. We may update, modify, or temporarily
                suspend the service for maintenance without notice. We are not liable
                for any loss arising from service interruptions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                10. Limitation of liability
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                To the fullest extent permitted by law, HumanBased is not liable for
                any indirect, incidental, or consequential damages arising from your
                use of PurposeBased. Our total liability to you for any claim arising
                from these terms shall not exceed the amount you paid us in the 12
                months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                11. Governing law
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                These terms are governed by the laws of Denmark. Any disputes shall be
                subject to the jurisdiction of the Danish courts.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                12. Changes to these terms
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We may update these terms from time to time. When we make material
                changes we will update the date at the top of this page and notify
                registered users by email where appropriate. Continued use of
                PurposeBased after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                13. Contact
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
