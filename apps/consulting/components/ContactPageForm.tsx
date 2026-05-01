'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

type SituationType =
  | 'Investment deployment'
  | 'Growth inflection'
  | 'Execution drift'
  | 'Platform transition'
  | 'Leadership realignment'
  | 'Other';

type UrgencyType = 'Exploring' | 'Important this quarter' | 'Active issue' | 'Board/investor pressure';

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  situationType: SituationType;
  urgency: UrgencyType;
  message: string;
  website: string;
};

const initialForm: ContactFormState = {
  name: '',
  email: '',
  company: '',
  role: '',
  situationType: 'Execution drift',
  urgency: 'Exploring',
  message: '',
  website: '',
};

const nextSteps = [
  'You share the context',
  'We respond within one business day',
  'We agree whether a diagnostic conversation makes sense',
];

export function ContactPageForm() {
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
        throw new Error(data?.error?.message || 'Unable to submit right now. Please try again later.');
      }

      setStatus({ type: 'success', message: 'Thanks. We will respond within one business day.' });
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
    <section id="contact" className="relative bg-[#0B1020] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,181,68,0.10),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <header className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <h1 className="text-4xl font-semibold leading-tight text-[#E8ECF8] md:text-6xl">Something is not right with your program. Let’s talk about it.</h1>
          <p className="mt-4 max-w-[78ch] text-lg leading-relaxed text-[#A8B3CF]">
            Share the situation, the pressure, or the decision you are facing. We will respond within one business day. If we can help, we will tell you how. If we cannot, we will be direct about that too.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="space-y-4 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 md:p-8" onSubmit={handleSubmit}>
            <input type="text" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="w-full rounded-md border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]" placeholder="Name" />
            <input type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full rounded-md border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]" placeholder="Work email" />
            <input type="text" required value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} className="w-full rounded-md border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]" placeholder="Company" />
            <input type="text" required value={form.role} onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))} className="w-full rounded-md border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]" placeholder="Role" />

            <select value={form.situationType} onChange={(e) => setForm((p) => ({ ...p, situationType: e.target.value as SituationType }))} className="w-full rounded-md border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]">
              {['Investment deployment', 'Growth inflection', 'Execution drift', 'Platform transition', 'Leadership realignment', 'Other'].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            <select value={form.urgency} onChange={(e) => setForm((p) => ({ ...p, urgency: e.target.value as UrgencyType }))} className="w-full rounded-md border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]">
              {['Exploring', 'Important this quarter', 'Active issue', 'Board/investor pressure'].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            <textarea rows={5} required minLength={10} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} className="w-full rounded-md border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]" placeholder="What is happening, what is at stake, and what would a useful conversation help clarify?" />
            <input type="text" value={form.website} onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))} className="hidden" tabIndex={-1} autoComplete="off" />

            {status && <p className={status.type === 'success' ? 'text-green-400' : 'text-rose-400'}>{status.message}</p>}
            <button type="submit" disabled={isSubmitting} className="w-full rounded-md bg-[#F5B544] px-8 py-3 font-medium text-[#0B1020] transition-colors hover:bg-[#ffd27e] disabled:opacity-60">
              {isSubmitting ? 'Sending...' : 'Start a conversation'}
            </button>
          </form>

          <div className="space-y-6">
            <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">What happens next</p>
              <div className="mt-4 space-y-3">
                {nextSteps.map((step, idx) => (
                  <div key={step} className="rounded-lg border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-[#E8ECF8]"><span className="mr-2 font-mono text-[#F5B544]">0{idx + 1}</span>{step}</div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Contact details</p>
              <div className="flex items-start gap-3 text-[#E8ECF8]"><Mail size={18} className="mt-1 text-[#F5B544]" /> info@regressionconsulting.com</div>
              <div className="flex items-start gap-3 text-[#E8ECF8]"><Phone size={18} className="mt-1 text-[#F5B544]" /> +31 6 1911 6786</div>
            </section>

            <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 space-y-4">
              <div className="flex items-center gap-2"><MapPin size={18} className="text-[#F5B544]" /><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Locations</p></div>
              <div>
                <p className="text-[#E8ECF8]">Amsterdam, Netherlands — European presence</p>
              </div>
              <div>
                <p className="text-[#A8B3CF]">Gurugram, India — Registered office</p>
              </div>
            </section>
          </div>
        </div>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 text-center text-[#A8B3CF]">
          No generic sales process. No pressure. The first conversation is simply to understand whether the issue is structural, urgent, and within our scope.
        </section>
      </div>
    </section>
  );
}
