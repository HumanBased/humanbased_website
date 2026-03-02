
import React from 'react';
import BasedTalkLayout from '../../components/BasedTalkLayout';

const BasedTalkPrivacyPage: React.FC = () => {
  return (
    <BasedTalkLayout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="basedtalk-glass p-12 md:p-20 rounded-[3rem] shadow-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-[#102A43]">Privacy Policy</h1>
          <p className="text-[#102A43]/60 mb-12 italic">Last Updated: March 2026</p>
          
          <div className="space-y-12 text-[#102A43]/80 leading-relaxed text-base md:text-lg font-light">
            <p>
              BasedTalk (“the App”) is developed and operated by HumanBased (“we”, “us”, “our”). This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application, website, and related services. By using BasedTalk, you agree to the terms described here.
            </p>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">1. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-[#102A43]">1.1 Information You Provide to Us</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account Information: email address (if you choose to register).</li>
                  <li>Mood and Communication Logs: mood entries, interactions, and usage data within the app.</li>
                  <li>Credits and Purchases: information related to credit subscriptions handled through Google Play or Apple App Store.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-[#102A43]">1.2 Voice & Text Processing</h3>
                <p>BasedTalk includes voice analysis and text analysis tools. When you use these features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your audio is processed temporarily to generate insights.</li>
                  <li>We do not permanently store full audio recordings.</li>
                  <li>We may store short transcriptions only if needed for app features.</li>
                </ul>
                <p>Voice data is processed securely and never sold.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-[#102A43]">1.3 Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device model, OS, unique device identifiers</li>
                  <li>Crash data and performance analytics</li>
                  <li>Usage data for improving the App experience</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve BasedTalk features</li>
                <li>To personalize user experience</li>
                <li>To process subscriptions and payments</li>
                <li>To monitor app performance</li>
                <li>For legal compliance</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">3. Legal Basis Under GDPR</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consent for analytics and optional features</li>
                <li>Contract for creating and maintaining your account</li>
                <li>Legitimate Interests for improving app performance</li>
                <li>Legal Obligation for financial and tax compliance</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">4. Third-Party Services</h2>
              <p>We use trusted third-party providers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Play Billing (Android payments)</li>
                <li>Apple In‑App Purchases (iOS payments)</li>
                <li>AI providers (for AI-driven scenario generation)</li>
                <li>Expo / React Native framework tools</li>
              </ul>
              <p>These services process data only as necessary to operate the App.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">5. User Rights</h2>
              <p>If you are in the EU, UK, or California, you have rights including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your data</li>
                <li>Right to delete your data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p>To exercise these rights, contact: support@humanbased.org</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">6. Data Retention</h2>
              <p>We store only essential data for as long as necessary for app functionality. You can request deletion anytime.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">7. Children’s Privacy</h2>
              <p>BasedTalk is not intended for users under 16. We do not knowingly collect data from children.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">8. Contact Information</h2>
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

export default BasedTalkPrivacyPage;
