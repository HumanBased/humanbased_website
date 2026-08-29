import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// PurposeBased affiliate / partner program sell page.
// Same design tokens, scroll-reveal, and premium card treatment as PBHome.
// Scoped under .pbp — Cormorant for headings, DM Sans for body/labels.

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_ID';

const ADVANTAGES: { title: string; body: string }[] = [
  {
    title: 'Honest reviews only',
    body:
      'Recommend PurposeBased exactly as you experience it. We do not ask you to sell. We ask you to share. Authentic referrals convert better and build more trust with your audience.',
  },
  {
    title: 'Recurring revenue',
    body:
      'Unlike a sponsored post that disappears in 24 hours, recurring commissions compound over time. As your audience grows, your income grows with it.',
  },
  {
    title: 'Direct product influence',
    body:
      'Active partners get a direct line to our product team. Your feedback shapes the roadmap. You are not just promoting the product — you are helping build it.',
  },
  {
    title: 'Track record that opens doors',
    body:
      'Successfully distributing a mission-aligned software product builds a proven track record: sales ability, audience trust, business maturity. This is a career asset.',
  },
];

const REWARD_ROWS: { sub: string; rate: string; earn: string }[] = [
  { sub: '1 — 100 subscribers', rate: '€1.00 / subscriber', earn: 'Up to €100 / mo' },
  { sub: '101 — 500 subscribers', rate: '€2.00 / subscriber', earn: 'Up to €1,000 / mo' },
  { sub: '501 — 750 subscribers', rate: '€3.00 / subscriber', earn: 'Up to €2,250 / mo' },
  { sub: '751 — 1,000 subscribers', rate: '€4.00 / subscriber', earn: 'Up to €4,000 / mo' },
  { sub: '1,001+ subscribers', rate: '€5.00 / subscriber', earn: 'Uncapped' },
];

const STEPS: { title: string; body: string }[] = [
  {
    title: 'Apply',
    body:
      'Fill in the application below. We review every submission personally and respond within 3 business days.',
  },
  {
    title: 'Get your link',
    body:
      'Once accepted, you receive a unique referral link. Share it anywhere — no code needed, just the link.',
  },
  {
    title: 'Share honestly',
    body:
      'Promote PurposeBased authentically to your audience. At least two mentions per month. No scripts, no pressure.',
  },
  {
    title: 'Get paid',
    body:
      'At the start of each month, review your Stripe dashboard, send an invoice, and receive payment within 30 days.',
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Do I need a promo code, or just the link?',
    a: 'Just the link. When someone clicks your unique referral link and subscribes, Stripe logs it automatically. No code entry needed. We also provide a promo code for cases where you mention PurposeBased verbally or in a caption.',
  },
  {
    q: 'When and how do I get paid?',
    a: 'At the start of each month, you check your Stripe dashboard to see your verified active subscribers. You then send us an invoice for that amount. We process payment within 30 days via Stripe transfer or bank wire.',
  },
  {
    q: 'What counts as an active subscriber?',
    a: 'A unique individual who subscribes using your link, completes their first full paid monthly billing cycle without cancellation or refund, and maintains an active paid subscription. Free trials, refunded accounts, and self-referrals do not count.',
  },
  {
    q: 'Can I promote other products at the same time?',
    a: 'Yes. This agreement is fully non-exclusive. You are free to promote other platforms, products, or services including direct competitors.',
  },
  {
    q: 'Is there a minimum audience size to apply?',
    a: 'No minimum. We look at fit and authenticity, not follower count. If you genuinely use and believe in PurposeBased, we want to hear from you.',
  },
  {
    q: 'What do I need to disclose to my audience?',
    a: 'You must clearly disclose the partnership on all promotional content — #ad, #partner, or a clear verbal disclosure. This is both a legal requirement and the right thing to do.',
  },
  {
    q: 'Can I see my earnings independently?',
    a: 'Yes. All conversions and earnings are tracked directly through Stripe. You have a direct view into your referral data — active subscribers, monthly earnings, subscription status — in real time. You never have to take our word for it.',
  },
];

const PROVIDE_ITEMS: { title: string; body: string }[] = [
  {
    title: 'Unique referral link',
    body: 'Tracked through Stripe. Share it anywhere. Works on any platform.',
  },
  {
    title: 'Real-time dashboard',
    body: 'See your active subscribers, monthly earnings, and conversion status at any time.',
  },
  {
    title: 'Creative assets',
    body: 'Product screenshots, brand materials, and copy templates ready to use.',
  },
  {
    title: 'Direct support',
    body: 'A dedicated line to the HumanBased team for questions, feedback, and feature requests.',
  },
];

const ASK_ITEMS: string[] = [
  'Use the product before promoting it. Authentic recommendations convert better and protect your audience.',
  'At least two promotional mentions per calendar month.',
  'Clear partnership disclosure on all content (#ad or #partner).',
];

const PROMOTER_LIST = [
  'Custom referral link tracked through Stripe',
  'Honest review encouraged, no scripts provided',
  'Monthly recurring earnings per active subscriber',
  'Direct feedback line to the product team',
  'Access to visual assets and partner materials',
];

const ORG_LIST = [
  'Group access arrangements available',
  'Bulk pricing on request',
  'White-label partner materials',
  'Co-branded content support',
  'Direct support from the HumanBased team',
];

type FormState = {
  name: string;
  email: string;
  track: string;
  platform: string;
  audience: string;
  reason: string;
};

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  track: 'Creator / Influencer / Coach',
  platform: '',
  audience: 'Under 1,000',
  reason: '',
};

const PBPartners: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll('.pb-section')) as HTMLElement[];

    if (typeof IntersectionObserver === 'undefined') {
      sections.forEach((s) => s.classList.add('pb-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pb-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async () => {
    if (status === 'sending') return;
    if (!form.name.trim() || !form.email.trim()) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          track: form.track,
          platform: form.platform,
          audience_size: form.audience,
          reason: form.reason,
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pbp" ref={rootRef}>
      {/* ============ SECTION 1 — HERO ============ */}
      <section className="pb-section pbp-sec pbp-hero">
        <div className="pbp-wrap">
          <p className="pbp-label">Partner program</p>
          <h1 className="pbp-h1">Distribute real agency. Build your track record.</h1>
          <p className="pbp-h1-sub">
            An affiliate model for people who want to recommend something worth recommending.
          </p>
          <hr className="pbp-rule" />
        </div>
      </section>

      {/* ============ SECTION 2 — WHY THIS IS DIFFERENT ============ */}
      <section className="pb-section pbp-sec">
        <div className="pbp-wrap">
          <p className="pbp-label">A better offer</p>
          <h2 className="pbp-h2">Most monetization sells your audience short.</h2>
          <hr className="pbp-rule" />
          <p className="pbp-body" style={{ maxWidth: 640 }}>
            Most social media affiliate programs ask you to push low-value products, forced
            sponsorships, or temporary hype. Partnering with PurposeBased gives you a tangible, deeply
            useful tool to recommend — backed by a social enterprise that reinvests profits into
            society.
          </p>
          <p className="pbp-body" style={{ maxWidth: 640, marginTop: 18 }}>
            You earn recurring revenue on every active subscription you bring in. Not a one-off
            payment. Not a fixed fee. A share of the ongoing value, for as long as your referrals stay
            subscribed.
          </p>

          <div className="pbp-adv-grid">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="pbp-pill">
                <h3 className="pbp-pill-title">{a.title}</h3>
                <p className="pbp-pill-body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — THE REWARD STRUCTURE ============ */}
      <section className="pb-section pbp-sec">
        <div className="pbp-wrap">
          <p className="pbp-label">The reward structure</p>
          <h2 className="pbp-h2">Performance-based. Transparent. Yours to verify.</h2>
          <hr className="pbp-rule" />
          <p className="pbp-body" style={{ maxWidth: 620 }}>
            Every euro is earned per active paid subscriber, per month. The more your audience grows,
            the more you earn per referral. All tracked in real time through Stripe.
          </p>

          <div className="pbp-rtable">
            <div className="pbp-rtable-head">
              <span>Active subscribers</span>
              <span>Monthly rate</span>
              <span>Your earnings*</span>
            </div>
            {REWARD_ROWS.map((r, i) => (
              <div
                key={r.sub}
                className={`pbp-rrow${i % 2 === 1 ? ' pbp-rrow--alt' : ''}${
                  i === REWARD_ROWS.length - 1 ? ' pbp-rrow--top' : ''
                }`}
              >
                <span className="pbp-rrow-sub">{r.sub}</span>
                <span className="pbp-rrow-rate">{r.rate}</span>
                <span className="pbp-rrow-earn">{r.earn}</span>
              </div>
            ))}
          </div>

          <div className="pbp-rtable-notes">
            <p className="pbp-rtable-note">
              * Earnings shown are illustrative maximums per tier. Actual earnings depend on your
              active subscriber count each month.
            </p>
            <p className="pbp-rtable-note">
              Rates apply to new active paid subscribers per calendar month. Free trials, refunds, and
              self-referrals are excluded.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3A — HOW IT WORKS ============ */}
      <section className="pb-section pbp-sec">
        <div className="pbp-wrap">
          <p className="pbp-label">How it works</p>
          <h2 className="pbp-h2">Four steps from application to income.</h2>
          <hr className="pbp-rule" />

          <div className="pbp-steps">
            {STEPS.map((s, i) => (
              <div key={s.title} className="pbp-step">
                <div className="pbp-step-num">{i + 1}</div>
                <h3 className="pbp-step-title">{s.title}</h3>
                <p className="pbp-step-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3B — STRIPE TRANSPARENCY ============ */}
      <section className="pb-section pbp-stripe">
        <div className="pbp-stripe-grid">
          <div className="pbp-stripe-text">
            <p className="pbp-label">Transparency</p>
            <h2 className="pbp-stripe-h2">Your earnings. Verified by Stripe, not by us.</h2>
            <hr className="pbp-rule" />
            <p className="pbp-body" style={{ maxWidth: 560 }}>
              Every referral is tracked directly through Stripe — the same payment infrastructure used
              by millions of businesses worldwide. When someone subscribes using your link, Stripe logs
              it immediately and permanently.
            </p>
            <p className="pbp-body" style={{ maxWidth: 560, marginTop: 18 }}>
              You get a direct view into your referral data. Active subscribers, monthly earnings,
              subscription status — all in real time. You never have to take our word for it.
            </p>
            <p className="pbp-stripe-aside">
              We chose this model deliberately. Transparency is not a feature — it is the foundation of
              a partnership worth having.
            </p>
          </div>

          <div className="pbp-stripe-card">
            <p className="pbp-stripe-card-label">Your Stripe Dashboard</p>
            <div className="pbp-stripe-stat">
              <span className="pbp-stripe-num">—</span>
              <span className="pbp-stripe-stat-label">Active subscribers</span>
            </div>
            <div className="pbp-stripe-stat">
              <span className="pbp-stripe-num">—</span>
              <span className="pbp-stripe-stat-label">Monthly earnings</span>
            </div>
            <div className="pbp-stripe-stat">
              <span className="pbp-stripe-num">—</span>
              <span className="pbp-stripe-stat-label">This month&rsquo;s referrals</span>
            </div>
            <p className="pbp-stripe-live">Live data. Updated by Stripe in real time.</p>
            <p className="pbp-stripe-powered">Powered by Stripe</p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — TWO TRACKS ============ */}
      <section className="pb-section pbp-sec">
        <div className="pbp-wrap">
          <p className="pbp-label">Two ways to partner</p>
          <h2 className="pbp-h2">Choose the track that fits you.</h2>
          <hr className="pbp-rule" />

          <div className="pbp-tracks">
            <div className="pbp-track">
              <span className="pbp-track-label">FOR CREATORS, COACHES &amp; INFLUENCERS</span>
              <h3 className="pbp-track-title">Share what you discover.</h3>
              <p className="pbp-body" style={{ fontSize: 15 }}>
                You have an audience that trusts you. PurposeBased gives you something real to share —
                a tool you have actually used, that does something meaningful. Share your experience,
                your unique referral link, and earn recurring revenue every month.
              </p>
              <ul className="pbp-track-list">
                {PROMOTER_LIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pbp-track">
              <span className="pbp-track-label">FOR SCHOOLS, COACHES &amp; ORGANIZATIONS</span>
              <h3 className="pbp-track-title">Integrate it into your work.</h3>
              <p className="pbp-body" style={{ fontSize: 15 }}>
                Integrate PurposeBased into your client sessions, programs, or curriculum. Use the My
                People feature for relationship diagnostics. Save hours of baseline work. We handle
                the billing, you handle the transformation.
              </p>
              <ul className="pbp-track-list">
                {ORG_LIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pbp-get">
            <p className="pbp-label">What you get</p>
            <div className="pbp-get-grid">
              {PROVIDE_ITEMS.map((item) => (
                <div key={item.title} className="pbp-get-card">
                  <h3 className="pbp-get-title">{item.title}</h3>
                  <p className="pbp-get-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4A — WHAT WE ASK ============ */}
      <section className="pb-section pbp-sec">
        <div className="pbp-wrap">
          <p className="pbp-label">What we ask</p>
          <div className="pbp-ask">
            {ASK_ITEMS.map((item) => (
              <div key={item} className="pbp-ask-row">
                <span className="pbp-ask-bullet">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4B — FAQ ============ */}
      <section className="pb-section pbp-sec">
        <div className="pbp-wrap">
          <p className="pbp-label">Common questions</p>
          <h2 className="pbp-h2">Everything you need to know.</h2>
          <hr className="pbp-rule" />

          <div className="pbp-faq">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="pbp-faq-item">
                  <button
                    type="button"
                    className="pbp-faq-q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="pbp-faq-toggle" aria-hidden="true">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && <p className="pbp-faq-a">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — APPLICATION FORM ============ */}
      <section className="pb-section pbp-sec" ref={formRef}>
        <div className="pbp-wrap pbp-form-wrap">
          <p className="pbp-label">Apply to partner</p>
          <h2 className="pbp-h2">Tell us about yourself.</h2>
          <hr className="pbp-rule" />
          <p className="pbp-body" style={{ maxWidth: 540 }}>
            We review every application personally. If it is a good fit, we will reach out within 3
            business days.
          </p>

          {status === 'success' ? (
            <p className="pbp-form-success">
              Your application is on its way. We will be in touch.
            </p>
          ) : (
            <div className="pbp-form">
              <div className="pbp-field">
                <label className="pbp-field-label" htmlFor="pbp-name">
                  Name
                </label>
                <input
                  id="pbp-name"
                  className="pbp-input"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                />
              </div>

              <div className="pbp-field">
                <label className="pbp-field-label" htmlFor="pbp-email">
                  Email
                </label>
                <input
                  id="pbp-email"
                  className="pbp-input"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                />
              </div>

              <div className="pbp-field">
                <label className="pbp-field-label" htmlFor="pbp-track">
                  Track
                </label>
                <select
                  id="pbp-track"
                  className="pbp-input"
                  value={form.track}
                  onChange={update('track')}
                >
                  <option>Creator / Influencer / Coach</option>
                  <option>Organization / Institution</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="pbp-field">
                <label className="pbp-field-label" htmlFor="pbp-platform">
                  Platform or website
                </label>
                <input
                  id="pbp-platform"
                  className="pbp-input"
                  type="text"
                  placeholder="Your main platform, channel, or website URL"
                  value={form.platform}
                  onChange={update('platform')}
                />
              </div>

              <div className="pbp-field">
                <label className="pbp-field-label" htmlFor="pbp-audience">
                  Audience size
                </label>
                <select
                  id="pbp-audience"
                  className="pbp-input"
                  value={form.audience}
                  onChange={update('audience')}
                >
                  <option>Under 1,000</option>
                  <option>1,000 — 10,000</option>
                  <option>10,000 — 100,000</option>
                  <option>Over 100,000</option>
                  <option>Not applicable</option>
                </select>
              </div>

              <div className="pbp-field">
                <label className="pbp-field-label" htmlFor="pbp-reason">
                  Why do you want to partner?
                </label>
                <textarea
                  id="pbp-reason"
                  className="pbp-input pbp-textarea"
                  rows={4}
                  placeholder="Tell us about your audience and why PurposeBased fits what you do"
                  value={form.reason}
                  onChange={update('reason')}
                />
              </div>

              <button
                type="button"
                className="pbp-btn pbp-btn--solid pbp-btn--full"
                onClick={handleSubmit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send application'}
              </button>

              {status === 'error' && (
                <p className="pbp-form-error">
                  Something went wrong. Please email us at partners@humanbased.org
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ============ SECTION 6 — CLOSING ============ */}
      <section className="pb-section pbp-close">
        <h2 className="pbp-close-h2">
          The best affiliates are the ones who actually use it.
        </h2>
        <p className="pbp-close-body">
          Start with the free tier. See what the nine frameworks reveal. Then decide if it is worth
          sharing.
        </p>
        <div className="pbp-close-cta">
          <Link to="/purposebased" className="pbp-btn pbp-btn--solid">
            Start free
          </Link>
          <button type="button" className="pbp-btn pbp-btn--glass" onClick={scrollToForm}>
            Apply above
          </button>
        </div>
      </section>

      <style>{`
        .pbp {
          --pb-gold: #ffc864;
          --pb-navy: #0d1f3c;
          --pb-text: #cadcf0;
          --pb-muted: #7f97b1;
          --pb-surface: rgba(255,255,255,0.035);
          --pb-border: rgba(255,255,255,0.10);
          --pb-border-gold: rgba(255,200,100,0.22);
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ---------- shared type ---------- */
        .pbp-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin: 0 0 18px;
        }
        .pbp-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 54px;
          line-height: 1.14;
          color: #ffffff;
          margin: 0 0 20px;
          max-width: 860px;
        }
        .pbp-h1-sub {
          font-family: 'Cormorant', Georgia, serif;
          font-style: italic;
          font-weight: 300;
          font-size: 32px;
          line-height: 1.35;
          color: var(--pb-muted);
          margin: 0;
          max-width: 720px;
        }
        .pbp-h2 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 44px;
          line-height: 1.2;
          color: #ffffff;
          margin: 0;
        }
        .pbp-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--pb-text);
          margin: 0;
        }
        .pbp-rule {
          width: 56px;
          height: 1px;
          background: var(--pb-gold);
          opacity: 0.55;
          border: 0;
          margin: 24px 0;
        }
        .pbp-hero .pbp-rule { margin: 32px 0 0; }

        /* ---------- buttons ---------- */
        .pbp-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          border-radius: 8px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pbp-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-15deg);
          transition: left 0.5s ease;
        }
        .pbp-btn:hover::before { left: 120%; }
        .pbp-btn:hover { transform: translateY(-2px); }
        .pbp-btn:disabled { opacity: 0.6; cursor: default; transform: none; }
        .pbp-btn:disabled::before { display: none; }
        .pbp-btn--solid {
          background: linear-gradient(135deg, rgba(255,200,100,0.92), rgba(220,160,50,0.88));
          border: 1px solid rgba(255,220,130,0.6);
          color: #12283f;
          box-shadow: 0 0 24px rgba(255,200,100,0.18);
        }
        .pbp-btn--glass {
          background: linear-gradient(135deg, rgba(255,200,100,0.14), rgba(255,200,100,0.05));
          border: 1px solid rgba(255,200,100,0.38);
          color: var(--pb-gold);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .pbp-btn--full { width: 100%; margin-top: 8px; }

        /* ---------- scroll reveal ---------- */
        .pb-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .pb-section.pb-visible { opacity: 1; transform: translateY(0); }

        /* ---------- layout ---------- */
        .pbp-sec { padding: 96px 10%; }
        .pbp-wrap { max-width: 1100px; margin: 0 auto; }
        .pbp-hero { padding-top: 130px; }

        /* ---------- advantage pills ---------- */
        .pbp-adv-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 44px;
        }
        .pbp-pill {
          border: 1px solid var(--pb-border-gold);
          border-radius: 12px;
          padding: 28px 26px;
          background: var(--pb-surface);
          transition: all 0.3s ease;
        }
        .pbp-pill:hover {
          border-color: rgba(255,200,100,0.5);
          transform: translateY(-3px);
        }
        .pbp-pill-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 10px;
        }
        .pbp-pill-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--pb-muted);
          margin: 0;
        }

        /* ---------- reward structure table ---------- */
        .pbp-rtable {
          margin-top: 40px;
          max-width: 760px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          overflow: hidden;
        }
        .pbp-rtable-head,
        .pbp-rrow {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
        }
        .pbp-rtable-head {
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255,200,100,0.2);
        }
        .pbp-rtable-head span {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--pb-muted);
        }
        .pbp-rrow {
          padding: 18px 20px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          align-items: baseline;
        }
        .pbp-rrow--alt { background: rgba(255,255,255,0.02); }
        .pbp-rrow-sub { color: var(--pb-text); font-weight: 300; }
        .pbp-rrow-rate {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--pb-gold);
        }
        .pbp-rrow-earn { font-size: 13px; color: var(--pb-muted); }
        .pbp-rrow--top {
          border: 1px solid rgba(255,200,100,0.25);
          border-radius: 8px;
        }
        .pbp-rrow--top .pbp-rrow-rate,
        .pbp-rrow--top .pbp-rrow-earn { color: #ffd98a; }
        .pbp-rtable-notes { margin-top: 18px; max-width: 760px; }
        .pbp-rtable-note {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          font-style: italic;
          line-height: 1.7;
          color: var(--pb-muted);
          margin: 6px 0 0;
        }

        /* ---------- how it works steps ---------- */
        .pbp-steps {
          margin-top: 44px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .pbp-step { position: relative; }
        .pbp-step:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 22px;
          left: 22px;
          width: calc(100% + 20px);
          height: 1px;
          background: rgba(255,200,100,0.25);
          z-index: 0;
        }
        .pbp-step-num {
          position: relative;
          z-index: 1;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,100,0.4);
          background: rgba(10,22,40,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant', Georgia, serif;
          font-size: 20px;
          color: var(--pb-gold);
          margin-bottom: 18px;
        }
        .pbp-step-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 22px;
          color: #ffffff;
          margin: 0 0 10px;
        }
        .pbp-step-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--pb-muted);
          margin: 0;
        }

        /* ---------- faq accordion ---------- */
        .pbp-faq { margin-top: 36px; max-width: 760px; }
        .pbp-faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 20px 0;
        }
        .pbp-faq-q {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          background: none;
          border: 0;
          padding: 0;
          text-align: left;
          cursor: pointer;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #ffffff;
        }
        .pbp-faq-toggle {
          flex-shrink: 0;
          font-size: 18px;
          line-height: 1;
          color: var(--pb-gold);
        }
        .pbp-faq-a {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: var(--pb-muted);
          padding-top: 12px;
          margin: 0;
          max-width: 680px;
        }

        /* ---------- what you get ---------- */
        .pbp-get { margin-top: 56px; }
        .pbp-get-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 26px;
        }
        .pbp-get-card {
          border: 1px solid var(--pb-border-gold);
          border-radius: 12px;
          padding: 22px 24px;
          background: var(--pb-surface);
        }
        .pbp-get-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 400;
          font-size: 20px;
          color: #ffffff;
          margin: 0 0 8px;
        }
        .pbp-get-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--pb-muted);
          margin: 0;
        }

        /* ---------- what we ask ---------- */
        .pbp-ask { margin-top: 24px; }
        .pbp-ask-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 11px 0;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--pb-text);
          max-width: 680px;
        }
        .pbp-ask-bullet { color: var(--pb-gold); flex-shrink: 0; }

        /* ---------- two tracks ---------- */
        .pbp-tracks {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 44px;
        }
        .pbp-track {
          border: 1px solid var(--pb-border-gold);
          border-radius: 16px;
          padding: 40px 36px;
          background: var(--pb-surface);
          transition: all 0.3s ease;
        }
        .pbp-track:hover {
          border-color: rgba(255,200,100,0.5);
          transform: translateY(-3px);
        }
        .pbp-track-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pb-gold);
          margin-bottom: 14px;
        }
        .pbp-track-title {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 30px;
          color: #ffffff;
          margin: 0 0 14px;
        }
        .pbp-track-list {
          list-style: none;
          padding: 0;
          margin: 22px 0 0;
        }
        .pbp-track-list li {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: var(--pb-text);
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .pbp-track-list li:last-child { border-bottom: none; }

        /* ---------- application form ---------- */
        .pbp-form-wrap { max-width: 640px; }
        .pbp-form { margin-top: 36px; }
        .pbp-field { margin-bottom: 20px; }
        .pbp-field-label {
          display: block;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--pb-muted);
          margin-bottom: 8px;
        }
        .pbp-input {
          width: 100%;
          box-sizing: border-box;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,200,100,0.25);
          border-radius: 8px;
          padding: 14px 18px;
          color: #ffffff;
          transition: border-color 0.25s ease;
        }
        .pbp-input::placeholder { color: var(--pb-muted); }
        .pbp-input:focus {
          border-color: rgba(255,200,100,0.6);
          outline: none;
        }
        .pbp-textarea { resize: vertical; min-height: 110px; line-height: 1.6; }
        select.pbp-input { appearance: none; -webkit-appearance: none; cursor: pointer; }
        select.pbp-input option { background: #0d1f3c; color: #ffffff; }
        .pbp-form-success {
          font-family: 'Cormorant', Georgia, serif;
          font-style: italic;
          font-size: 28px;
          color: #ffffff;
          text-align: center;
          margin: 48px auto 0;
          max-width: 460px;
        }
        .pbp-form-error {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px;
          color: var(--pb-gold);
          margin: 14px 0 0;
        }

        /* ---------- closing ---------- */
        .pbp-close {
          padding: 100px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pbp-close-h2 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 44px;
          line-height: 1.2;
          color: #ffffff;
          margin: 0;
          max-width: 620px;
        }
        .pbp-close-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--pb-muted);
          max-width: 480px;
          margin: 22px 0 34px;
        }
        .pbp-close-cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* ---------- stripe transparency ---------- */
        .pbp-stripe {
          padding: 64px 10%;
          background: linear-gradient(135deg, rgba(255,200,100,0.08) 0%, rgba(255,200,100,0.03) 100%);
          border-top: 1px solid rgba(255,200,100,0.25);
          border-bottom: 1px solid rgba(255,200,100,0.25);
        }
        .pbp-stripe-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.6fr 0.4fr;
          gap: 64px;
          align-items: center;
        }
        .pbp-stripe-h2 {
          font-family: 'Cormorant', Georgia, serif;
          font-weight: 300;
          font-size: 40px;
          line-height: 1.2;
          color: #ffffff;
          margin: 0;
        }
        .pbp-stripe-aside {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 14px;
          font-style: italic;
          font-weight: 300;
          line-height: 1.8;
          color: var(--pb-muted);
          max-width: 560px;
          margin: 22px 0 0;
        }
        .pbp-stripe-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,200,100,0.30);
          border-radius: 14px;
          padding: 32px 28px;
        }
        .pbp-stripe-card-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--pb-muted);
          margin: 0 0 8px;
        }
        .pbp-stripe-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .pbp-stripe-num {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 32px;
          line-height: 1;
          color: var(--pb-gold);
        }
        .pbp-stripe-stat-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          color: var(--pb-muted);
        }
        .pbp-stripe-live {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          font-style: italic;
          color: var(--pb-muted);
          text-align: center;
          margin: 20px 0 0;
        }
        .pbp-stripe-powered {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 11px;
          color: var(--pb-muted);
          text-align: center;
          margin: 14px 0 0;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 900px) {
          .pbp-h1 { font-size: 40px; }
          .pbp-h1-sub { font-size: 25px; }
          .pbp-h2, .pbp-close-h2 { font-size: 34px; }
          .pbp-stripe-h2 { font-size: 30px; }
          .pbp-sec { padding: 80px 7%; }
          .pbp-stripe { padding: 56px 7%; }
          .pbp-stripe-grid { grid-template-columns: 1fr; gap: 36px; }
          .pbp-adv-grid { grid-template-columns: 1fr; }
          .pbp-tracks { grid-template-columns: 1fr; }
          .pbp-get-grid { grid-template-columns: 1fr; }
          .pbp-steps { grid-template-columns: 1fr; gap: 8px; }
          .pbp-step:not(:last-child)::after { display: none; }
          .pbp-step { padding-bottom: 6px; }
          .pbp-rtable-head span { font-size: 10px; letter-spacing: 1.5px; }
          .pbp-rtable-head,
          .pbp-rrow { padding-left: 14px; padding-right: 14px; }
        }
        @media (max-width: 560px) {
          .pbp-rrow-rate { font-size: 16px; }
          .pbp-rrow { font-size: 13px; }
        }
      `}</style>
    </div>
  );
};

export default PBPartners;
