'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.subject,
          message: form.message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage = data?.error?.message || 'Unable to submit right now. Please try again later.';
        throw new Error(errorMessage);
      }

      setStatus({ type: 'success', message: 'Thanks! We will reach out shortly.' });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to submit right now. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="py-10 text-center md:py-16">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Get In Touch</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            We welcome focused enquiries from founders, investors, and ecosystem partners.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-2 py-10 text-center md:py-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">What You Can Reach Us For</h2>
          <ul className="space-y-2 text-left text-base leading-relaxed text-gray-300 md:list-disc md:list-inside md:text-center">
            <li>Founders: discussing engagement with our investment and institutionalisation process.</li>
            <li>Investors: exploring structured exposure to India-origin defence &amp; dual-use innovation.</li>
            <li>Partners: regulatory, ecosystem, or strategic collaboration opportunities.</li>
          </ul>
        </section>

        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-2 py-10 text-center md:grid-cols-3 md:py-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Mail className="mx-auto mb-3 text-indigo-400" size={24} />
            <h3 className="mb-2 text-xl font-semibold text-white">Email</h3>
            <p className="text-base text-gray-300">General enquiries and introductions:</p>
            <a href="mailto:info@regressionconsulting.com" className="mt-2 block text-indigo-400 hover:text-indigo-300">
              info@regressionconsulting.com
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="mb-2 text-xl font-semibold text-white">LinkedIn</h3>
            <p className="text-base text-gray-300">Connect with our team:</p>
            <a
              href="https://www.linkedin.com/company/regressionconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-indigo-400 hover:text-indigo-300"
            >
              linkedin.com/regressionconsulting
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Phone className="mx-auto mb-3 text-indigo-400" size={24} />
            <h3 className="mb-2 text-xl font-semibold text-white">Phone</h3>
            <p className="text-base text-gray-300">For priority enquiries:</p>
            <a href="tel:+31619116786" className="mt-2 block text-indigo-400 hover:text-indigo-300">
              +31619116786
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-2 py-10 md:py-12">
          <h2 className="mb-4 text-center text-2xl font-semibold text-white">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-base font-medium text-gray-100" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded border border-white/20 bg-gray-900 p-3 text-white outline-none ring-indigo-400/70 transition focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-base font-medium text-gray-100" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded border border-white/20 bg-gray-900 p-3 text-white outline-none ring-indigo-400/70 transition focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-base font-medium text-gray-100" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                className="w-full rounded border border-white/20 bg-gray-900 p-3 text-white outline-none ring-indigo-400/70 transition focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-base font-medium text-gray-100" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                minLength={10}
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded border border-white/20 bg-gray-900 p-3 text-white outline-none ring-indigo-400/70 transition focus:ring-2"
              />
            </div>
            {status && <p className={status.type === 'success' ? 'text-green-400' : 'text-rose-400'}>{status.message}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded bg-indigo-500 py-3 font-semibold text-white transition hover:bg-indigo-600 disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>

        <section className="mx-auto max-w-4xl rounded-xl bg-gray-900 px-6 py-8 text-center leading-relaxed text-white">
          <p>
            We aim to respond to all enquiries within <strong>3 business days</strong>. If you have not heard back within this
            timeframe, please feel free to follow up.
          </p>
        </section>

        <section className="mx-auto mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
          <div className="mb-5 flex items-center gap-2">
            <MapPin className="text-indigo-300" size={20} />
            <h2 className="text-lg font-semibold text-white">Offices &amp; Locations</h2>
          </div>

          <div className="space-y-7">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Regression%20Consulting%20Private%20Limited%2C%20F-275%2C%20Jal%20Vayu%20Vihar%2C%20Sector%2030%2C%20Gurugram%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open India registered office in Google Maps"
              className="group block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_24px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[1.03rem] font-semibold text-white transition-colors group-hover:text-white/95">
                  <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm">
                    🇮🇳
                  </span>
                  India
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-200">
                  Registered Office
                </span>
              </div>
              <div className="text-sm font-medium text-gray-300 transition-colors group-hover:text-gray-200">
                Regression Consulting Private Limited
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-400 transition-colors group-hover:text-gray-300">
                <div>F-275, Jal Vayu Vihar</div>
                <div>Sector 30, Gurugram</div>
              </div>
            </a>

            <div className="h-px w-full bg-white/10" aria-hidden="true" />

            <a
              href="https://www.google.com/maps/search/?api=1&query=Ertskade%2C%20Amsterdam%2C%201019%20BB%2C%20Netherlands"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Netherlands global presence in Google Maps"
              className="group block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_24px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[1.03rem] font-semibold text-white transition-colors group-hover:text-white/95">
                  <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm">
                    🇳🇱
                  </span>
                  Netherlands
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-200">
                  Global Presence
                </span>
              </div>
              <div className="text-sm leading-6 text-gray-400 transition-colors group-hover:text-gray-300">
                <div>Ertskade</div>
                <div>Amsterdam, 1019 BB</div>
              </div>
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-2 py-8 text-center text-sm text-gray-400">
          <p>
            By contacting us, you agree we may store and process your information in accordance with our{' '}
            <a href="/privacy-policy" className="text-indigo-400 hover:text-indigo-300">
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
