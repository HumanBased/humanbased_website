
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
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

    try {
      const formDataObj = new FormData(e.currentTarget);
      
      const response = await fetch("https://formspree.io/f/PLACEHOLDER_ID", {
        method: "POST",
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', email: '', message: '' });
        setErrors({});
        // Reset form
        e.currentTarget.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setIsError(true);
        } else {
          setIsError(true);
        }
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
    <section className="px-6 relative">
      {/* Light blob */}
      <div className="light-blob w-[600px] h-[600px] bg-indigo-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Let us explore what we can <span className="text-amber-500">build together</span>.
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-xl">
              We work with organizations ready to modernize operations, communities seeking better ways to connect and govern, and individuals committed to personal growth and purposeful living. Share a bit about your context and we will reply with thoughtful next steps.
            </p>
          </div>
          
          <div className="glass p-6 md:p-7 lg:p-8 rounded-[3rem] border-white/5 bg-white/[0.02] shadow-2xl">
            <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-3">Get in Touch</h3>
            <p className="text-xs md:text-sm text-white/60 max-w-xl mb-6">
              Share a bit about what you&apos;re working on. We&apos;ll get in touch within the next 24h
              with a short note or a proposal for a first conversation.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 ml-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/[0.03] border rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all text-sm md:text-base text-white placeholder:text-white/20 ${
                      errors.name ? 'border-red-400/50' : 'border-white/5'
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 ml-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 ml-1">
                    Company or team
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all text-sm md:text-base text-white placeholder:text-white/20"
                    placeholder="Your organization"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 ml-1">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/[0.03] border rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all text-sm md:text-base text-white placeholder:text-white/20 ${
                      errors.email ? 'border-red-400/50' : 'border-white/5'
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 ml-1">{errors.email}</p>
                  )}
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 ml-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white/[0.03] border rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] transition-all text-sm md:text-base text-white placeholder:text-white/20 resize-none ${
                      errors.message ? 'border-red-400/50' : 'border-white/5'
                    }`}
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
                className="w-full md:w-auto px-8 py-3 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm md:text-base uppercase tracking-widest shadow-xl shadow-amber-500/10 text-center"
              >
                {isLoading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
