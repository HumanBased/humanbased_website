
import React from 'react';
import BasedTalkLayout from '../../components/BasedTalkLayout';

const BasedTalkTermsPage: React.FC = () => {
  return (
    <BasedTalkLayout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="basedtalk-glass p-12 md:p-20 rounded-[3rem] shadow-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-[#102A43]">Terms of Service</h1>
          <p className="text-[#102A43]/60 mb-12 italic">Last Updated: March 2026</p>
          
          <div className="space-y-12 text-[#102A43]/80 leading-relaxed text-base md:text-lg font-light">
            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">1. Acceptance of Terms</h2>
              <p>By downloading or using BasedTalk, you agree to these Terms of Service (“Terms”). If you do not agree, do not use the App.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">2. Not Therapy or Professional Advice</h2>
              <p>BasedTalk is an educational and self-awareness tool. It does NOT provide:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>medical advice</li>
                <li>psychological diagnosis</li>
                <li>therapeutic treatment</li>
                <li>emergency or crisis support</li>
              </ul>
              <p>If you need mental health assistance, please consult a licensed professional.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">3. User Accounts</h2>
              <p>You may choose to create an account. You are responsible for maintaining the confidentiality of your login credentials.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">4. Credits and Subscriptions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Credits are digital units used to unlock content and experiences in the App.</li>
                <li>Credits are non‑refundable.</li>
                <li>Subscriptions (such as monthly credit plans) are managed by Apple or Google. Billing, taxes, and refunds are governed by their terms.</li>
                <li>Promotional prices and bonuses (including launch discounts) may change at any time.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">5. Acceptable Use</h2>
              <p>You agree NOT to use BasedTalk to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>harass or harm others</li>
                <li>generate abusive, hateful, or illegal content</li>
                <li>reverse-engineer or misuse AI features</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">6. AI-Generated Content</h2>
              <p>BasedTalk uses AI to generate scenarios and insights. These may not always be accurate, complete, or appropriate for every situation. You should use your own judgment when applying them.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">7. Termination</h2>
              <p>We may suspend or terminate accounts that violate these Terms or applicable law.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">8. Limitation of Liability</h2>
              <p>We are not liable for any indirect, incidental, or consequential damages arising from the use of the App. The App is provided “as is” without warranties of any kind.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">9. Governing Law</h2>
              <p>These Terms are governed by the laws of your local jurisdiction, unless mandatory law provides otherwise.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">10. Contact Information</h2>
              <p>
                HumanBased<br />
                Email: support@humanbased.org<br />
                Website: https://www.humanbased.org
              </p>
            </section>
          </div>
        </div>
      </div>
    </BasedTalkLayout>
  );
};

export default BasedTalkTermsPage;
