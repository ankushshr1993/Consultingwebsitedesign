'use client';

import { FormEvent, useState } from 'react';
import { trackEvent } from '../lib/analytics';

type FounderFormState = {
  founderName: string;
  companyName: string;
  email: string;
  websiteUrl: string;
  stage: string;
  category: string;
  problem: string;
  traction: string;
  compliance: string;
  ask: string;
  website: string;
};

const initialForm: FounderFormState = {
  founderName: '',
  companyName: '',
  email: '',
  websiteUrl: '',
  stage: '',
  category: '',
  problem: '',
  traction: '',
  compliance: '',
  ask: '',
  website: '',
};

export function FounderIntakeForm() {
  const [form, setForm] = useState<FounderFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    trackEvent('founder_intake_submit_attempt');

    const message = [
      `Founder name: ${form.founderName}`,
      `Company: ${form.companyName}`,
      `Website: ${form.websiteUrl || 'N/A'}`,
      `Stage: ${form.stage}`,
      `Startup category: ${form.category}`,
      `Problem & end user context: ${form.problem}`,
      `Current traction / milestones: ${form.traction}`,
      `Compliance/regulatory context: ${form.compliance}`,
      `What the founder is seeking: ${form.ask}`,
    ].join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.founderName,
          email: form.email,
          subject: `Founder Intake: ${form.companyName}`,
          message,
          website: form.website,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error?.message || 'Unable to submit intake right now. Please try again later.');
      }

      setStatus({ type: 'success', message: 'Thanks — your founder intake has been submitted. We will respond within 3 business days.' });
      trackEvent('founder_intake_submit_success');
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to submit intake right now. Please try again later.',
      });
      trackEvent('founder_intake_submit_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded border border-white/15 bg-slate-900 px-3 py-2 text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40';

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))} />
      <div className="grid gap-4 md:grid-cols-2">
        <input className={inputClass} placeholder="Founder name" required value={form.founderName} onChange={(e) => setForm((p) => ({ ...p, founderName: e.target.value }))} />
        <input className={inputClass} type="email" placeholder="Work email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input className={inputClass} placeholder="Company name" required value={form.companyName} onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))} />
        <input className={inputClass} placeholder="Company website (optional)" value={form.websiteUrl} onChange={(e) => setForm((p) => ({ ...p, websiteUrl: e.target.value }))} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input className={inputClass} placeholder="Current stage (e.g., Seed)" required value={form.stage} onChange={(e) => setForm((p) => ({ ...p, stage: e.target.value }))} />
        <input className={inputClass} placeholder="Startup category (AI, autonomy, sensing...)" required value={form.category} onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))} />
      </div>
      <textarea className={inputClass} rows={3} placeholder="Problem area and end-user context" required minLength={20} value={form.problem} onChange={(e) => setForm((p) => ({ ...p, problem: e.target.value }))} />
      <textarea className={inputClass} rows={3} placeholder="Current traction and key milestones" required minLength={20} value={form.traction} onChange={(e) => setForm((p) => ({ ...p, traction: e.target.value }))} />
      <textarea className={inputClass} rows={3} placeholder="Compliance / regulatory considerations" required minLength={20} value={form.compliance} onChange={(e) => setForm((p) => ({ ...p, compliance: e.target.value }))} />
      <textarea className={inputClass} rows={3} placeholder="What are you looking for from us?" required minLength={20} value={form.ask} onChange={(e) => setForm((p) => ({ ...p, ask: e.target.value }))} />
      {status && <p className={status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}>{status.message}</p>}
      <button disabled={isSubmitting} className="w-full rounded bg-indigo-500 py-3 font-semibold text-white hover:bg-indigo-600 disabled:opacity-60">{isSubmitting ? 'Submitting...' : 'Submit Founder Intake'}</button>
    </form>
  );
}
