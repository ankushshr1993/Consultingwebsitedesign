'use client';

import Link from 'next/link';
import { FormEvent, useRef, useState } from 'react';
import { enquiryFields, validateContactPayload, type EnquiryKind } from '../lib/contact';
import { trackEvent } from '../lib/analytics';

export function EnquiryForm({ kind }: { kind: EnquiryKind }) {
  const definitions = enquiryFields[kind];
  const empty = () => Object.fromEntries(definitions.map(field => [field.name, '']));
  const [fields, setFields] = useState<Record<string, string>>(empty);
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ error: boolean; message: string } | null>(null);
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const prefix = kind === 'contact' ? 'contact' : `${kind}_intake`;
  const payload = (values = fields) => ({ kind, fields: values, website, utmSource: typeof window === 'undefined' ? '' : new URLSearchParams(window.location.search).get('utm_source') || '' });
  const focusError = (nextErrors: Record<string, string>) => {
    const first = definitions.find(field => nextErrors[field.name]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
  };
  const checkField = (name: string, values = fields) => {
    const result = validateContactPayload(payload(values));
    setErrors(previous => ({ ...previous, [name]: result.ok ? '' : result.fieldErrors[name] || '' }));
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    const result = validateContactPayload(payload());
    if (!result.ok) {
      setErrors(result.fieldErrors);
      setStatus({ error: true, message: result.message });
      trackEvent(`${prefix}_validation_error`);
      focusError(result.fieldErrors);
      return;
    }
    setPending(true);
    setErrors({});
    trackEvent(`${prefix}_submit_attempt`);
    let failureCode = 'NETWORK_ERROR';
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload()) });
      const data = await response.json().catch(() => null);
      if (!response.ok || data?.ok !== true) {
        failureCode = data?.error?.code || 'REQUEST_FAILED';
        const fieldErrors = data?.error?.details?.fieldErrors || {};
        setErrors(fieldErrors);
        focusError(fieldErrors);
        throw new Error(data?.error?.message || 'Unable to submit. Please try again or email info@regressionconsulting.com.');
      }
      setFields(empty());
      setWebsite('');
      started.current = false;
      setStatus({ error: false, message: 'Your enquiry has been accepted. We will respond within 3 business days.' });
      trackEvent(`${prefix}_submit_success`);
    } catch (error) {
      trackEvent(`${prefix}_submit_error`, { code: failureCode });
      setStatus({ error: true, message: error instanceof Error ? error.message : 'Unable to submit. Please try again.' });
    } finally { setPending(false); }
  };
  return (
    <form ref={formRef} onSubmit={submit} noValidate aria-busy={pending} onFocusCapture={() => {
      if (!started.current) { started.current = true; trackEvent(`${prefix}_start`); }
    }} className="enquiry-form">
      <p id={`${kind}-instructions`} className="form-instructions">Fields are required unless marked optional. Please share only information suitable for an initial enquiry.</p>
      <input type="text" name="website" value={website} onChange={event => setWebsite(event.target.value)} hidden tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {[...new Set(definitions.map(field => field.group))].map(group => (
        <fieldset key={group} disabled={pending}>
          <legend>{group}</legend>
          <div className="form-grid">
            {definitions.filter(field => field.group === group).map(field => {
              const id = `${kind}-${field.name}`;
              const common = {
                id, name: field.name, value: fields[field.name], required: !field.optional,
                'aria-invalid': !!errors[field.name], 'aria-describedby': `${id}-help`,
                autoComplete: field.autoComplete, minLength: field.min ?? 2,
                maxLength: field.max ?? (field.type === 'textarea' ? 2000 : 200),
                onBlur: () => checkField(field.name),
                onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                  const next = { ...fields, [field.name]: event.target.value };
                  setFields(next); if (errors[field.name]) checkField(field.name, next);
                },
              };
              return <div key={field.name} className={field.type === 'textarea' ? 'form-field form-field-wide' : 'form-field'}>
                <label htmlFor={id}>{field.label}{field.optional && <span> (optional)</span>}</label>
                {field.type === 'textarea' ? <textarea {...common} rows={3} /> : field.type === 'select' ? <select {...common}><option value="">Choose an option</option>{field.options?.map(option => <option key={option} value={option}>{option}</option>)}</select> : <input {...common} type={field.type || 'text'} />}
                <p id={`${id}-help`} className={errors[field.name] ? 'field-help field-error' : 'field-help'}>{errors[field.name] || field.hint || '\u00a0'}</p>
              </div>;
            })}
          </div>
        </fieldset>
      ))}
      <p className="text-sm">We use your information to review and respond to your enquiry. Read our <Link href="/privacy-policy" className="text-link">privacy policy</Link>.</p>
      <div role="status" aria-live="polite" aria-atomic="true" className={status?.error ? 'form-status field-error' : 'form-status'}>{status?.message}</div>
      <button type="submit" className="button-primary" disabled={pending}>{pending ? 'Submitting…' : kind === 'founder' ? 'Submit founder intake' : kind === 'investor' ? 'Submit investor intake' : 'Send message'}</button>
      <p className="text-sm">Next: a fit review within 3 business days, followed by a conversation where relevant.</p>
    </form>
  );
}
