import React from "react";
import { usePageTitle } from '../hooks/usePageTitle';

const PrivacyPage: React.FC = () => {
  usePageTitle('Privacy & Data Governance – HumanBased');
  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
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
                For organizations with sensitive needs, we offer bespoke privacy models, including on-premise deployment and end-to-end encryption, ensuring your data remains strictly under your control.
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
