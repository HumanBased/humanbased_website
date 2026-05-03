
import React from 'react';
import BasedTalkLayout from '../../components/BasedTalkLayout';

const BasedTalkPrivacyPage: React.FC = () => {
  return (
    <BasedTalkLayout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="basedtalk-glass p-12 md:p-20 rounded-[3rem] shadow-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-[#102A43]">Privacy Policy</h1>
          <p className="text-[#102A43]/60 mb-12 italic">Last Updated: April 2026</p>

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
                <p>Voice data is transmitted over TLS, processed using industry-standard encryption, and is never sold or shared with third parties for advertising.</p>
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
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">5. AI Processing and Third-Party Providers</h2>
              <p>BasedTalk uses AI to power features like conversation analysis, the Socratic coach (Basy), and Creator Language reframes. Here is how your data flows through our AI systems:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your conversation text and voice transcriptions are sent to our AI provider (Google Gemini, accessed via OpenRouter) for processing.</li>
                <li>Voice transcriptions are deleted immediately after processing. They are not stored permanently.</li>
                <li>Google Gemini does not use your data to train its models (per Google Cloud API terms).</li>
                <li>Google may retain prompts for up to 55 days solely for abuse monitoring purposes, as required by their platform policies. This retention is handled by Google, not by HumanBased.</li>
                <li>OpenRouter, our API routing provider, does not store prompts or responses by default. We have opted out of any data training programs.</li>
                <li>We do not sell, share, or provide your conversation data to any third party for advertising, marketing, or model training purposes.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">6. Data Security</h2>
              <p>Your data is protected using industry-standard security measures at every level:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All data transmitted between your device and our servers is encrypted using TLS (Transport Layer Security).</li>
                <li>Data stored on our servers is encrypted at rest using AES-256 encryption provided by our managed infrastructure.</li>
                <li>Row-Level Security (RLS) ensures that each user can only access their own data within the system.</li>
                <li>Your account is further protected by optional PIN lock within the app.</li>
                <li>Payment processing is handled entirely by Apple and Google through their respective in-app purchase systems. We never see or store your payment details.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">7. Data Retention</h2>
              <p>We retain your data according to the following schedule:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account data (email, profile): retained for the life of your account, plus 30 days after you request deletion.</li>
                <li>Journal entries, Red Flags, Healing Ties, and Communication Log data: retained for the life of your account. Deleted within 30 days of account deletion.</li>
                <li>Voice recordings: not stored. Transcriptions are processed in real time and deleted immediately after analysis.</li>
                <li>Analysis results: retained for the life of your account as part of your analysis history.</li>
                <li>Crash and error logs: retained for up to 90 days for debugging purposes, then automatically deleted.</li>
              </ul>
              <p>After you request account deletion, all personal data is permanently removed from our systems within 30 days, except where retention is required by law.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">8. International Data Transfers</h2>
              <p>BasedTalk is operated by HumanBased, based in Copenhagen, Denmark. Our infrastructure providers are located in the United States:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Supabase (database and authentication): US-based managed infrastructure.</li>
                <li>OpenRouter and Google Gemini (AI processing): US-based servers.</li>
              </ul>
              <p>If you are located in the European Economic Area (EEA), your data is transferred to the United States for processing. These transfers are governed by Standard Contractual Clauses (SCCs) as approved by the European Commission, ensuring your data receives an adequate level of protection in accordance with GDPR requirements.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">9. Your Rights Under GDPR</h2>
              <p>If you are located in the European Economic Area, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right of access: you can request a copy of all personal data we hold about you.</li>
                <li>Right to rectification: you can ask us to correct any inaccurate data.</li>
                <li>Right to erasure: you can request that we delete your personal data.</li>
                <li>Right to data portability: you can request your data in a structured, commonly used, machine-readable format.</li>
                <li>Right to restrict processing: you can ask us to limit how we use your data.</li>
                <li>Right to object: you can object to the processing of your personal data for certain purposes.</li>
                <li>Right to lodge a complaint: you have the right to file a complaint with your local data protection supervisory authority.</li>
              </ul>
              <p>To exercise any of these rights, contact us at support@humanbased.org. We will respond to your request within 30 days, as required by GDPR.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">10. Children’s Privacy</h2>
              <p>BasedTalk is designed for users aged 13 and older. We do not knowingly collect personal information from children under the age of 13. Age is self-declared during account creation, and we do not use age verification technology.</p>
              <p>If we become aware that we have collected personal data from a child under 13, we will take immediate steps to delete that data from our servers. If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us at support@humanbased.org.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">11. Policy Changes</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated policy on this page with a new 'Last Updated' date.</li>
                <li>Sending an email notification to registered users for significant changes.</li>
              </ul>
              <p>Your continued use of BasedTalk after any changes indicates your acceptance of the updated policy. We encourage you to review this page periodically.</p>
            </section>

            <section className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#102A43]">12. Contact Information</h2>
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
