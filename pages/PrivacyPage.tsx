import React from "react";
import { usePageTitle } from '../hooks/usePageTitle';

const PrivacyPage: React.FC = () => {
  usePageTitle('Privacy & Data Governance – HumanBased', '/privacy',
    'How HumanBased approaches privacy and data governance: GDPR compliance, privacy by default, transparency and security in our applications.');
  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Privacy & Data Governance
          </h1>

          <p className="text-sm md:text-base text-white/70">
            HumanBased operates in full compliance with the European GDPR and global privacy best practices. We believe in radical transparency.
          </p>

          <div className="space-y-6 mt-8">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Privacy by Default
              </h2>
              <p className="text-sm md:text-base text-white/60">
                Our applications are architected to minimize data collection and maximize user privacy from day one.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Website Analytics
              </h2>
              <p className="text-sm md:text-base text-white/60">
                With your consent, this website uses Google Analytics 4 to understand which pages are useful. It sets cookies and sends usage data to Google only if you choose Accept in the cookie banner. If you decline, nothing is loaded. You can change your choice at any time with Cookie Settings in the footer. IP addresses are anonymised.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Full Transparency
              </h2>
              <p className="text-sm md:text-base text-white/60">
                Our clients and their users always retain agency over their information. We provide clear, accessible insights into how data is processed.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Advanced Security
              </h2>
              <p className="text-sm md:text-base text-white/60">
                For organizations with sensitive needs, we offer bespoke privacy models, including on-premise hosting and hardened encryption configurations, so your data remains under your direct control.
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-white/60 mt-8">
            If you have questions about our privacy practices or data handling, please get in touch using the contact form
            on this site and we will respond with more detail.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
