
import React from 'react';
import BasedTalkLayout from '../../components/BasedTalkLayout';

const BasedTalkLandingPage: React.FC = () => {
  return (
    <BasedTalkLayout>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
          Your reality anchor in confusing conversations.
        </h1>
        <p className="text-xl md:text-2xl text-[#102A43]/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          BasedTalk turns everyday speech into training reps for healthier, non‑toxic communication.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="basedtalk-btn-primary px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em]">
            Get the app
          </button>
          <button className="px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] border-2 border-[#4A90E2]/20 hover:border-[#4A90E2] transition-colors">
            See how it works
          </button>
        </div>
      </section>
      
      {/* Features Row */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="basedtalk-glass p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Speech Analysis</h3>
            <p className="text-[#102A43]/70 font-light text-sm leading-relaxed">
              Real-time processing to help you identify patterns and improve your verbal interactions instantly.
            </p>
          </div>
          <div className="basedtalk-glass p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Interaction Lab</h3>
            <p className="text-[#102A43]/70 font-light text-sm leading-relaxed">
              Safely experiment with different communication styles in controlled scenarios.
            </p>
          </div>
          <div className="basedtalk-glass p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Pattern Training</h3>
            <p className="text-[#102A43]/70 font-light text-sm leading-relaxed">
              Custom exercises designed to break toxic habits and build resilient communication skills.
            </p>
          </div>
          <div className="basedtalk-glass p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Credits & Subscriptions</h3>
            <p className="text-[#102A43]/70 font-light text-sm leading-relaxed">
              Flexible credit-based system to unlock advanced tools and personalized feedback.
            </p>
          </div>
        </div>
      </section>
    </BasedTalkLayout>
  );
};

export default BasedTalkLandingPage;
