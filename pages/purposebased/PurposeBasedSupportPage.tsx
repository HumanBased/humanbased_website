import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';

// Support page for the PurposeBased iPhone app. This URL goes into App Store Connect as the
// Support URL. Text follows claude/Legal_Support_Page_draft.md, adjusted for no account and
// "Delete my data", the label in the app (confirmed by the dev team, P-APP1).
const PurposeBasedSupportPage: React.FC = () => {
  usePageTitle('PurposeBased Support, HumanBased', '/apps/purposebased/support',
    'Support for the PurposeBased iPhone app: cancelling Blissed, restoring purchases, refunds and deleting your data.');

  return (
    <div className="flex-grow bg-transparent">
      <section className="pt-32 pb-20 px-6 sm:px-10 md:px-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-400">
              PURPOSEBASED
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Support
            </h1>
          </div>

          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            PurposeBased by HumanBased. Write to{' '}
            <a
              href="mailto:support@humanbased.org"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              support@humanbased.org
            </a>{' '}
            and a person will answer, usually within two working days.
          </p>

          <div className="space-y-10 mt-4">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                How do I cancel Blissed?
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                On your iPhone, open the Settings app, tap your name (your Apple Account), then Subscriptions, and choose PurposeBased. You keep Blissed until the end of the period you paid for.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                I bought Blissed but the app shows Based.
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Open the app, then Settings, then Restore purchases. Make sure you are signed in to the same Apple Account you used to buy.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                How do I get a refund?
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Apple handles refunds for App Store purchases. Go to reportaproblem.apple.com. If something in the app did not work, write to us as well.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                I changed phone. Where are my answers?
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Your answers live only on your phone, never on our servers. An iPhone backup (iCloud or computer) brings them back when you set up the new phone from it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                How do I delete my data?
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                There is no account. In the app, open Settings, tap Delete my data and confirm with Delete everything. This erases everything on your phone. It does not remove a profile file you exported yourself, or your Apple subscription.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Is my data shared or sold?
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                No. Everything stays on your phone and nothing is collected. No ads, no tracking, nothing sold.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Is this professional advice?
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                No. PurposeBased is a tool for reflection and small real steps. If you are struggling, please contact a professional or your local emergency number.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3 text-white/90">
                Links
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-white/60">
                <li>
                  <Link to="/apps/purposebased/privacy" className="text-amber-400 hover:text-amber-300 underline">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/apps/purposebased/terms" className="text-amber-400 hover:text-amber-300 underline">
                    Terms of use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeBasedSupportPage;
