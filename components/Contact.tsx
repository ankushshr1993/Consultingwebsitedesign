'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: ContactFormState = {
  name: '',
  email: '',
  company: '',
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
        body: JSON.stringify(form),
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
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Discuss your execution context
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            If technology execution has become critical to growth, regulatory stability, or investor confidence, we welcome a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <Mail className="text-indigo-400 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white">Email</div>
                <div className="text-gray-400">info@regressionconsulting.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <Phone className="text-indigo-400 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white">Phone</div>
                <div className="text-gray-400">+31619116786</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
              <div className="mb-5 flex items-center gap-2">
                <MapPin className="text-indigo-300" size={20} />
                <div className="text-lg font-semibold text-white">Locations</div>
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
                        <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm">🇮🇳</span>
                        India
                      </div>
                      <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-200">
                        Registered Office
                      </span>
                    </div>
                    <div className="text-sm font-medium text-gray-300 transition-colors group-hover:text-gray-200">Regression Consulting Private Limited</div>
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
                        <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm">🇳🇱</span>
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
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500"
              placeholder="Your name"
            />
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500"
              placeholder="name@company.com"
            />
            <input
              type="text"
              required
              value={form.company}
              onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500"
              placeholder="Company"
            />
            <textarea
              rows={4}
              required
              minLength={10}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500"
              placeholder="How can we help? (at least 10 characters)"
            />
            {status && <p className={status.type === 'success' ? 'text-green-400' : 'text-rose-400'}>{status.message}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Request an advisory conversation'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
