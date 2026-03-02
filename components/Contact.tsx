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

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus({ type: 'success', message: 'Thanks! We will reach out shortly.' });
      setForm(initialForm);
    } catch {
      setStatus({ type: 'error', message: 'Unable to submit right now. Please try again later.' });
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
            Contact Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tell us about your goals and we’ll help you build a practical strategy to move forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <Mail className="text-indigo-400 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white">Email</div>
                <div className="text-gray-400">Info@regressioncosnsulting.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <Phone className="text-indigo-400 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white">Phone</div>
                <div className="text-gray-400">+31619116786</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <MapPin className="text-indigo-400 mt-1" size={24} />
              <div>
                <div className="font-semibold text-white">Location</div>
                <div className="text-gray-400">India<br />Regression Consulting Private Limited<br />F-275, Jal Vayu Vihar, Sector 30, Gurugram</div>
                <div className="text-gray-400 mt-3">Netherlands<br />Ertskade, Amsterdam, 1019 BB</div>
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
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500"
              placeholder="How can we help?"
            />
            {status && <p className={status.type === 'success' ? 'text-green-400' : 'text-rose-400'}>{status.message}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
