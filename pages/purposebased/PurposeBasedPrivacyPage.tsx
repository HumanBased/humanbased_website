import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const PurposeBasedPrivacyPage: React.FC = () => {
  usePageTitle('PurposeBased Privacy Policy, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              PURPOSEBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/50 italic">Last updated: June 2026</p>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            PurposeBased is a self-knowledge and life coaching application developed by
            HumanBased, based in Copenhagen, Denmark. This policy explains what we
            collect, why we collect it, how it is processed, and the rights you have
            over your information. We follow the European General Data Protection
            Regulation (GDPR) and apply the same standards to all users worldwide.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                1. Information we collect
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>
                  <strong className="text-white/80">Full name and email address</strong>,
                  when you create an account.
                </li>
                <li>
                  <strong className="text-white/80">Date, time, and place of birth</strong>,
                  used to calculate astrological and numerological placements. This data
                  is sensitive and is treated with the highest level of care.
                </li>
                <li>
                  <strong className="text-white/80">Questionnaire answers</strong>,
                  provided during onboarding, used to generate your personal Blueprint
                  and inform your coaching experience.
                </li>
                <li>
                  <strong className="text-white/80">Your Blueprint and Full Analysis</strong>,
                  a synthesised profile generated from your birth data and questionnaire
                  answers, stored so you do not need to regenerate it.
                </li>
                <li>
                  <strong className="text-white/80">Coaching conversations</strong>, the
                  messages you exchange with your AI coach, stored to provide continuity
                  within a session.
                </li>
                <li>
                  <strong className="text-white/80">Profile photo</strong>, if you choose
                  to upload one.
                </li>
                <li>
                  <strong className="text-white/80">Subscription and payment status</strong>,
                  to determine which features you can access. We do not store payment
                  details.
                </li>
                <li>
                  <strong className="text-white/80">App interactions and crash logs</strong>,
                  used to improve the app experience and fix technical problems.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                2. No third-party data sharing
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We do not sell, rent, or share your personal data with third parties
                for advertising, marketing, or model training. The only entities that
                process your data are the infrastructure providers we use to operate
                the app, listed below as data processors. They act under contract on
                our behalf and may not use your data for their own purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                3. Data processors
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                <strong className="text-white/80">Supabase</strong> provides our
                authentication and database infrastructure. Your account data, birth
                data, questionnaire answers, Blueprint, and coaching conversations are
                stored on Supabase servers in the European Union. Data is encrypted in
                transit using TLS and at rest using AES-256. Row-level security ensures
                each account can only access its own data.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                <strong className="text-white/80">OpenRouter</strong> provides access to
                the AI models used to generate your Full Analysis and power your coaching
                conversations. Your birth data and questionnaire answers are transmitted
                to OpenRouter solely to generate your analysis. OpenRouter does not
                retain this data for training purposes under our agreement.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                <strong className="text-white/80">Stripe</strong> handles subscription
                payments. When you subscribe, you are directed to Stripe's secure payment
                page. We never see or store your card details. Stripe may retain payment
                records as required by financial regulations.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                4. A note on sensitive data
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Your birth data and personal questionnaire answers are used exclusively
                to generate your Blueprint and coaching experience within the app. They
                are never used for advertising, shared with other users, or sold. We
                treat this information with the same care as health or financial data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                5. Legal basis (GDPR)
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>
                  <strong className="text-white/80">Contract</strong>, to create and
                  maintain your account and deliver the features you use.
                </li>
                <li>
                  <strong className="text-white/80">Legitimate interest</strong>, to
                  diagnose crashes and improve performance.
                </li>
                <li>
                  <strong className="text-white/80">Consent</strong>, for any optional
                  feature where consent is requested.
                </li>
                <li>
                  <strong className="text-white/80">Legal obligation</strong>, where
                  retention is required by law.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                6. Your rights
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                If you are located in the European Economic Area, you have the following
                rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Right of access, to request a copy of the data we hold about you.</li>
                <li>Right to rectification, to correct inaccurate data.</li>
                <li>Right to erasure, to request deletion of your personal data.</li>
                <li>Right to data portability, to receive your data in a structured, machine-readable format.</li>
                <li>Right to restrict processing of your data.</li>
                <li>Right to object to processing for certain purposes.</li>
                <li>Right to lodge a complaint with your local data protection authority.</li>
              </ul>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-3">
                We extend these rights to all PurposeBased users, regardless of where
                you are located.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                7. Right to deletion
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                You can delete your account and all associated personal data at any
                time. In the app, open <strong className="text-white/80">Settings</strong>,
                then tap <strong className="text-white/80">Delete Account</strong>. This
                triggers a full wipe of your account, birth data, questionnaire answers,
                Blueprint, and coaching conversations from our systems within 30 days.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                If you cannot access the app, email{' '}
                <a
                  href="mailto:support@humanbased.org"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  support@humanbased.org
                </a>{' '}
                from the address associated with your account and we will process the
                deletion within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                8. Data retention
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Account data: kept while your account is active, removed within 30 days of deletion.</li>
                <li>Birth data and questionnaire answers: kept while your account is active, removed within 30 days of deletion.</li>
                <li>Blueprint and Full Analysis: kept while your account is active, removed within 30 days of deletion.</li>
                <li>Coaching conversations: kept while your account is active, removed within 30 days of deletion.</li>
                <li>Profile photo: kept while your account is active, removed within 30 days of deletion.</li>
                <li>Crash logs: kept up to 90 days, then automatically removed.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                9. Children
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                PurposeBased is intended for users aged 16 and older. We do not
                knowingly collect data from children under 16. If you believe a child
                under 16 has provided personal data, contact us and we will remove it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                10. Changes to this policy
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We may update this policy from time to time. When we make material
                changes we will update the date at the top of this page and notify
                registered users by email where appropriate.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                11. Contact
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

export default PurposeBasedPrivacyPage;
