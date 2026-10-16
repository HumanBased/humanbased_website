
import TrustLine from './TrustLine';
import React, { useState } from 'react';
import { SUPPORT_EMAIL } from '../config/site';

interface ContactProps {
  /** Founders credit under the form (components/TrustLine). Default on. */
  showTrustLine?: boolean;
}

const Contact: React.FC<ContactProps> = ({ showTrustLine = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    website: '' // honeypot: real visitors never see or fill this
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please add a short message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    const form = e.currentTarget;

    try {
      const response = await fetch('https://www.humanbased.org/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', email: '', message: '', website: '' });
        setErrors({});
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="relative">
      <div className="ed-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="ed-stack lg:sticky lg:top-36" data-reveal="">
            <h2 className="font-serif ed-title">
              Let us explore what we can <span className="text-[#d8bc6e]">build together</span>.
            </h2>
            <p className="ed-lead text-white/70 max-w-xl">
              We work with organizations ready to modernize operations, communities seeking better ways to connect and govern, and individuals committed to personal growth and purposeful living. Share a bit about your context and we will reply with thoughtful next steps.
            </p>
            <p className="ed-body">
              Prefer email? Write to{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-amber-400 hover:text-amber-300 transition-colors">{SUPPORT_EMAIL}</a>.
            </p>
          </div>
          
          <div className="mx-card p-6 md:p-9" data-reveal="" style={{ ['--mx-delay' as string]: '120ms' }}>
            <h3 className="font-serif ed-subtitle mb-3">Get in Touch</h3>
            <p className="ed-small max-w-xl mb-8">
              Share a bit about what you&apos;re working on. We&apos;ll get in touch within the next 24h
              with a short note or a proposal for a first conversation.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                <label htmlFor="website">Leave this field empty</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="name" className="ed-field-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    className="ed-field"
                    aria-invalid={Boolean(errors.name)}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 ml-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="ed-field-label">
                    Company or team
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    maxLength={120}
                    value={formData.company}
                    onChange={handleChange}
                    className="ed-field"
                    placeholder="Your organization"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="ed-field-label">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    className="ed-field"
                    aria-invalid={Boolean(errors.email)}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 ml-1">{errors.email}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="ed-field-label">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={5000}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="ed-field resize-none"
                    aria-invalid={Boolean(errors.message)}
                    placeholder="Tell us briefly about your context, goals, and timelines."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 ml-1">{errors.message}</p>
                  )}
                </div>
              </div>

              {isSuccess && (
                <p className="text-sm text-emerald-400">
                  Thank you. We&apos;ve received your message. We&apos;ll get in touch within the next 24h.
                </p>
              )}

              {isError && (
                <p className="text-sm text-red-400">
                  Something went wrong while sending. Please check your connection and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="ed-btn ed-btn--primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
        {showTrustLine && (
          <>
            <hr className="mx-divider mt-16 mb-8" />
            <TrustLine className="justify-center" />
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
