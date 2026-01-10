import React from "react";
import { usePageTitle } from '../hooks/usePageTitle';

const LegalPage: React.FC = () => {
  usePageTitle('Legal – HumanBased');
  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Legal
          </h1>

          <p className="text-sm md:text-base text-white/70">
            HumanBased is a social enterprise focused on building
            technology in service of humanity. This site is provided for
            informational purposes only and does not constitute legal,
            financial, or investment advice.
          </p>

          <p className="text-sm md:text-base text-white/60">
            All content, copy, and visual assets on this website are
            provided as-is and remain the property of HumanBased or its
            respective owners. You may not reproduce, distribute, or adapt
            this material without prior written permission.
          </p>

          <p className="text-sm md:text-base text-white/60">
            Actual results depend on each organization's
            context, constraints, and execution, and cannot be guaranteed.
          </p>

          <p className="text-sm md:text-base text-white/60">
            If you have questions about data, privacy, or how we work with
            your organization, please get in touch using the contact form
            on this site and we will respond with more detail.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;

