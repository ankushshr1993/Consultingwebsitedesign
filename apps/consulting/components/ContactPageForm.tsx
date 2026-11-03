'use client';

import { useRef, useState } from 'react';
import { contactSchema, type ContactInput } from '../lib/validators';

const initialForm: ContactInput = { name: '', email: '', company: '', role: '', situationType: 'Execution drift', urgency: 'Exploring', message: '', website: '' };
const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', max: 100 },
  { name: 'email', label: 'Work email', type: 'email', autoComplete: 'email', max: 200 },
  { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization', max: 120 },
  { name: 'role', label: 'Role', type: 'text', autoComplete: 'organization-title', max: 120 },
  { name: 'situationType', label: 'Situation', options: ['Investment deployment', 'Growth inflection', 'Execution drift', 'Platform transition', 'Leadership realignment', 'Other'] },
  { name: 'urgency', label: 'Urgency', options: ['Exploring', 'Important this quarter', 'Active issue', 'Board/investor pressure'] },
  { name: 'message', label: 'What is happening?', type: 'textarea', hint: 'Describe the situation and what is at stake. At least 10 characters.', max: 3000 },
] as const;

export function ContactPageForm() {
  const [form, setForm] = useState<ContactInput>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ error: boolean; message: string } | null>(null);
  const ref = useRef<HTMLFormElement>(null);
  const fieldErrors = (values: ContactInput) => {
    const result = contactSchema.safeParse(values);
    return result.success ? {} : Object.fromEntries(Object.entries(result.error.flatten().fieldErrors).map(([name, messages]) => [name, messages?.[0] || 'Check this field.']));
  };
  const checkField = (name: string, values = form) => setErrors(previous => ({ ...previous, [name]: fieldErrors(values)[name] || '' }));
  const focusError = (next: Record<string, string>) => {
    const field = fields.find(item => next[item.name]);
    if (field) ref.current?.querySelector<HTMLElement>(`[name="${field.name}"]`)?.focus();
  };
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    const nextErrors = fieldErrors(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setStatus({ error: true, message: 'Please check the highlighted fields.' }); focusError(nextErrors); return; }
    setPending(true);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await response.json().catch(() => null);
      if (!response.ok || data?.ok !== true) {
        const serverErrors = Object.fromEntries(Object.entries(data?.error?.details?.fieldErrors || {}).map(([key, value]) => [key, Array.isArray(value) ? String(value[0]) : String(value)]));
        setErrors(serverErrors); focusError(serverErrors);
        throw new Error(data?.error?.message || 'Unable to submit. Please try again or email info@regressionconsulting.com.');
      }
      setForm(initialForm);
      setStatus({ error: false, message: 'Your enquiry has been accepted. We will respond within one business day.' });
    } catch (error) { setStatus({ error: true, message: error instanceof Error ? error.message : 'Unable to submit. Please try again.' }); }
    finally { setPending(false); }
  };
  return (
    <section id="contact" className="site-container contact-page">
      <header className="page-intro">
        <h1>Let’s look at what is happening.</h1>
        <p>Share the situation or decision you are facing. We respond within one business day.</p>
        <p className="text-sm">All conversations are confidential. We work under NDA where required.</p>
      </header>
      <div className="contact-grid">
        <form ref={ref} onSubmit={submit} noValidate aria-busy={pending} className="enquiry-form">
          <p>All fields are required. Please share only information suitable for an initial enquiry.</p>
          <fieldset disabled={pending}>
            <legend className="sr-only">Your enquiry</legend>
            <div className="form-grid">
              {fields.map(field => {
                const id = `contact-${field.name}`;
                const common = {
                  id, name: field.name, value: form[field.name], required: true,
                  'aria-invalid': !!errors[field.name], 'aria-describedby': `${id}-help`,
                  onBlur: () => checkField(field.name),
                  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
                    const next = { ...form, [field.name]: event.target.value } as ContactInput;
                    setForm(next); if (errors[field.name]) checkField(field.name, next);
                  },
                };
                return <div className={field.name === 'message' ? 'form-field form-field-wide' : 'form-field'} key={field.name}>
                  <label htmlFor={id}>{field.label}</label>
                  {'options' in field ? <select {...common}>{field.options.map(option => <option key={option} value={option}>{option}</option>)}</select> : field.type === 'textarea' ? <textarea {...common} rows={5} minLength={10} maxLength={field.max} /> : <input {...common} type={field.type} minLength={2} maxLength={field.max} autoComplete={field.autoComplete} />}
                  <p id={`${id}-help`} className={errors[field.name] ? 'field-help field-error' : 'field-help'}>{errors[field.name] || ('hint' in field ? field.hint : '\u00a0')}</p>
                </div>;
              })}
            </div>
          </fieldset>
          <input type="text" name="website" value={form.website} onChange={event => setForm(previous => ({ ...previous, website: event.target.value }))} hidden tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div role="status" aria-live="polite" aria-atomic="true" className={status?.error ? 'form-status field-error' : 'form-status'}>{status?.message}</div>
          <button type="submit" disabled={pending} className="button-primary">{pending ? 'Sending…' : 'Start a conversation'}</button>
        </form>
        <aside className="contact-aside">
          <section><h2>What happens next</h2><ol><li>You share the context.</li><li>We respond within one business day.</li><li>We agree whether a diagnostic conversation makes sense.</li></ol></section>
          <section><h2>Contact directly</h2><a href="mailto:info@regressionconsulting.com" className="text-link">info@regressionconsulting.com</a><a href="tel:+31619116786" className="text-link">+31 6 1911 6786</a></section>
          <section><h2>Locations</h2><p>Amsterdam, Netherlands: European presence</p><p>Gurugram, India: registered office</p></section>
        </aside>
      </div>
      <p className="contact-note">The first conversation is to understand whether the issue is structural, urgent, and within our scope.</p>
    </section>
  );
}
