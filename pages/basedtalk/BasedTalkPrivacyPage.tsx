import React from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';

const BasedTalkPrivacyPage: React.FC = () => {
  usePageTitle('BasedTalk Privacy Policy, HumanBased');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              BasedTalk
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/50 italic">Last updated: May 2026</p>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            BasedTalk is a mental wellness and communication skills mobile application
            developed by HumanBased, based in Copenhagen, Denmark. This policy explains
            what we collect, why we collect it, how it is processed, and the rights you
            have over your information. We follow the European General Data Protection
            Regulation (GDPR) and apply the same standards to all users worldwide.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                1. Information we collect
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>
                  <strong className="text-white/80">Email address</strong>, when you
                  create an account or sign in.
                </li>
                <li>
                  <strong className="text-white/80">User-generated text</strong>, such
                  as journal entries, mood logs, communication notes, and any messages
                  you choose to write inside the app.
                </li>
                <li>
                  <strong className="text-white/80">Voice recordings</strong> are
                  ephemeral. Your audio is processed in real time to produce a
                  transcription or insight, and is then discarded. We do not store
                  voice recordings on our servers.
                </li>
                <li>
                  <strong className="text-white/80">Crash logs and diagnostics</strong>,
                  collected to identify and fix technical problems.
                </li>
                <li>
                  <strong className="text-white/80">App interactions</strong>, such as
                  the features you use and the screens you visit, used to improve the
                  app experience.
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
                authentication and database infrastructure. Your account data and
                user-generated text are stored on Supabase servers in the European
                Union, hosted in the London region. Data is encrypted in transit using
                TLS and at rest using AES-256. Row-level security ensures each account
                can only access its own data.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Payment processing, where applicable, is handled entirely by Apple or
                Google through their respective in-app purchase systems. We never see
                or store your payment details.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                4. Legal basis (GDPR)
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
                5. Your rights
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                If you are located in the European Economic Area, you have the
                following rights regarding your personal data:
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
                We extend these rights to all BasedTalk users, regardless of where you
                are located.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                6. Right to deletion
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-3">
                You can delete your account and all associated personal data at any
                time. In the app, open <strong className="text-white/80">Settings</strong>,
                then tap <strong className="text-white/80">Delete Account</strong>.
                This triggers a full wipe of your account and personal data from our
                systems within 30 days.
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
                7. Data retention
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>Account data: kept while your account is active, removed within 30 days of deletion.</li>
                <li>User-generated text: kept while your account is active, removed within 30 days of deletion.</li>
                <li>Voice recordings: not stored. Discarded immediately after processing.</li>
                <li>Crash logs: kept up to 90 days, then automatically removed.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                8. Children
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                BasedTalk is intended for users aged 13 and older. We do not knowingly
                collect data from children under 13. If you believe a child under 13
                has provided personal data, contact us and we will remove it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                9. Changes to this policy
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                We may update this policy from time to time. When we make material
                changes we will update the date at the top of this page and notify
                registered users by email where appropriate.
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

export default BasedTalkPrivacyPage;
