'use client';

import { FormEvent, useState } from 'react';
import { trackEvent } from '../lib/analytics';

type InvestorFormState = {
  name: string;
  firm: string;
  email: string;
  investorType: string;
  geography: string;
  checkSize: string;
  stageFocus: string;
  defenceExposure: string;
  valueAdd: string;
  website: string;
};

const initialForm: InvestorFormState = {
  name: '', firm: '', email: '', investorType: '', geography: '', checkSize: '', stageFocus: '', defenceExposure: '', valueAdd: '', website: ''
};

export function InvestorIntakeForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const inputClass = 'w-full rounded border border-white/15 bg-slate-900 px-3 py-2 text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40';

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    trackEvent('investor_intake_submit_attempt');

    const message = [
      `Name: ${form.name}`,
      `Firm: ${form.firm}`,
      `Investor type: ${form.investorType}`,
      `Geography: ${form.geography}`,
      `Typical check size: ${form.checkSize}`,
      `Stage focus: ${form.stageFocus}`,
      `Defence/dual-use exposure: ${form.defenceExposure}`,
      `Strategic value-add: ${form.valueAdd}`,
      `UTM source: ${typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || 'N/A' : 'N/A'}`,
    ].join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, subject: `Investor Intake: ${form.firm}`, message, website: form.website })
      });
      const data = await response.json().catch(() => null);
      if (!response.ok) throw new Error(data?.error?.message || 'Unable to submit investor intake.');
      setStatus({ type: 'success', message: 'Thanks — your investor intake has been submitted. We will respond within 3 business days.' });
      trackEvent('investor_intake_submit_success');
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Unable to submit investor intake.' });
      trackEvent('investor_intake_submit_error');
    } finally { setIsSubmitting(false); }
  };

  return <form className="space-y-4" onSubmit={onSubmit} noValidate>
    <input type="text" className="hidden" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))} />
    <div className="grid gap-4 md:grid-cols-2">
      <input className={inputClass} placeholder="Name" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
      <input className={inputClass} type="email" placeholder="Work email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <input className={inputClass} placeholder="Firm" required value={form.firm} onChange={(e) => setForm((p) => ({ ...p, firm: e.target.value }))} />
      <input className={inputClass} placeholder="Investor type (VC, family office...)" required value={form.investorType} onChange={(e) => setForm((p) => ({ ...p, investorType: e.target.value }))} />
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <input className={inputClass} placeholder="Geography focus" required value={form.geography} onChange={(e) => setForm((p) => ({ ...p, geography: e.target.value }))} />
      <input className={inputClass} placeholder="Typical check size" required value={form.checkSize} onChange={(e) => setForm((p) => ({ ...p, checkSize: e.target.value }))} />
    </div>
    <textarea className={inputClass} rows={3} placeholder="Stage focus" required minLength={10} value={form.stageFocus} onChange={(e) => setForm((p) => ({ ...p, stageFocus: e.target.value }))} />
    <textarea className={inputClass} rows={3} placeholder="Prior defence / dual-use exposure" required minLength={20} value={form.defenceExposure} onChange={(e) => setForm((p) => ({ ...p, defenceExposure: e.target.value }))} />
    <textarea className={inputClass} rows={3} placeholder="How can you add strategic value?" required minLength={20} value={form.valueAdd} onChange={(e) => setForm((p) => ({ ...p, valueAdd: e.target.value }))} />
    {status && <p className={status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}>{status.message}</p>}
    <button disabled={isSubmitting} className="w-full rounded bg-indigo-500 py-3 font-semibold text-white hover:bg-indigo-600 disabled:opacity-60">{isSubmitting ? 'Submitting...' : 'Submit Investor Intake'}</button>
    <p className="text-xs text-slate-400">Next steps: mandate-fit review in 3 business days, then an alignment call where relevant.</p>
  </form>;
}
