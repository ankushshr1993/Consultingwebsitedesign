'use client';

import { FormEvent, useState } from 'react';

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
        throw new Error(data?.error?.message || 'Unable to send your message right now. Please try again later.');
      }

      setStatus({ type: 'success', message: 'Thanks — your message has been sent. We will get back to you shortly.' });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to send your message right now. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" noValidate onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label className="mb-1 block text-base font-medium text-slate-200" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded border border-white/15 bg-slate-900 px-3 py-2 text-white outline-none ring-0 transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-slate-200" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded border border-white/15 bg-slate-900 px-3 py-2 text-white outline-none ring-0 transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-slate-200" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
          className="w-full rounded border border-white/15 bg-slate-900 px-3 py-2 text-white outline-none ring-0 transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
        />
      </div>
      <div>
        <label className="mb-1 block text-base font-medium text-slate-200" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded border border-white/15 bg-slate-900 px-3 py-2 text-white outline-none ring-0 transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
        />
      </div>
      {status && <p className={status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}>{status.message}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-indigo-500 py-3 font-semibold text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-[#030303] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
