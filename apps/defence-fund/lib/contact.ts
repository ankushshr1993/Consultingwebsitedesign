export type ContactPayload = { name: string; email: string; subject: string; message: string; website?: string };
export type EnquiryKind = 'contact' | 'founder' | 'investor';
export type FieldDefinition = {
  name: string; label: string; group: string;
  type?: 'email' | 'url' | 'textarea' | 'select';
  autoComplete?: string; optional?: boolean; min?: number; max?: number; hint?: string; options?: string[];
};
export const enquiryFields: Record<EnquiryKind, FieldDefinition[]> = {
  contact: [
    { name: 'name', label: 'Name', autoComplete: 'name', group: 'Your details' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', group: 'Your details' },
    { name: 'subject', label: 'Subject', group: 'Your message' },
    { name: 'message', label: 'Message', type: 'textarea', min: 10, max: 3000, group: 'Your message' },
  ],
  founder: [
    { name: 'founderName', label: 'Founder name', autoComplete: 'name', group: 'You and your company' },
    { name: 'email', label: 'Work email', type: 'email', autoComplete: 'email', group: 'You and your company' },
    { name: 'companyName', label: 'Company name', autoComplete: 'organization', group: 'You and your company' },
    { name: 'websiteUrl', label: 'Company website', type: 'url', optional: true, hint: 'Include https:// if you have a website.', group: 'You and your company' },
    { name: 'stage', label: 'Current stage', type: 'select', options: ['Prototype', 'Pre-seed', 'Seed', 'Pre-Series A', 'Series A or later', 'Other'], group: 'Technology and readiness' },
    { name: 'category', label: 'Technology category', hint: 'For example: autonomy, sensing, or defence software.', group: 'Technology and readiness' },
    { name: 'problem', label: 'Problem and end user', type: 'textarea', min: 20, hint: 'Describe the problem and who would use the technology. At least 20 characters.', group: 'Technology and readiness' },
    { name: 'traction', label: 'Traction and milestones', type: 'textarea', min: 20, hint: 'Include validation or deployment progress. At least 20 characters.', group: 'Technology and readiness' },
    { name: 'compliance', label: 'Compliance considerations', type: 'textarea', min: 20, hint: 'Describe known constraints or what still needs assessment. At least 20 characters.', group: 'Your next step' },
    { name: 'ask', label: 'What are you seeking?', type: 'textarea', min: 20, hint: 'Describe the support or capital you are seeking. At least 20 characters.', group: 'Your next step' },
  ],
  investor: [
    { name: 'name', label: 'Name', autoComplete: 'name', group: 'You and your firm' },
    { name: 'email', label: 'Work email', type: 'email', autoComplete: 'email', group: 'You and your firm' },
    { name: 'firm', label: 'Firm', autoComplete: 'organization', group: 'You and your firm' },
    { name: 'investorType', label: 'Investor type', type: 'select', options: ['Venture capital', 'Family office', 'Corporate investor', 'Individual investor', 'Other'], group: 'Your mandate' },
    { name: 'geography', label: 'Geography focus', group: 'Your mandate' },
    { name: 'checkSize', label: 'Typical investment size', hint: 'Include currency and a range, for example EUR 100,000 to 500,000.', group: 'Your mandate' },
    { name: 'stageFocus', label: 'Stage focus', type: 'textarea', min: 10, hint: 'Describe the stages you consider. At least 10 characters.', group: 'Your mandate' },
    { name: 'defenceExposure', label: 'Defence or dual-use experience', type: 'textarea', min: 20, hint: 'Describe relevant experience, or your interest if new to the sector. At least 20 characters.', group: 'Experience and contribution' },
    { name: 'valueAdd', label: 'Strategic contribution', type: 'textarea', min: 20, hint: 'Explain how you could support companies. At least 20 characters.', group: 'Experience and contribution' },
  ],
};
type Validation = { ok: true; data: ContactPayload } | { ok: false; message: string; fieldErrors: Record<string, string> };
export function validateContactPayload(payload: unknown): Validation {
  const invalid = (message: string, fieldErrors: Record<string, string> = {}): Validation => ({ ok: false, message, fieldErrors });
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return invalid('Invalid request payload.');
  const input = payload as Record<string, unknown>;
  const kind = input.kind ?? 'contact';
  if (kind !== 'contact' && kind !== 'founder' && kind !== 'investor') return invalid('Unknown enquiry type.');
  // Retain legacy general enquiries; intake must use independently validated fields.
  if (kind === 'contact' && typeof input.subject === 'string' && /^(founder|investor) intake:/i.test(input.subject.trim())) {
    return invalid('Please use the current intake form and complete every required field.');
  }
  const fields = input.fields ?? (kind === 'contact' ? input : null);
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) return invalid('Please complete the enquiry form.');
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};
  for (const field of enquiryFields[kind]) {
    const raw = (fields as Record<string, unknown>)[field.name];
    const value = typeof raw === 'string' ? raw.trim() : '';
    values[field.name] = value;
    if (field.optional && typeof raw !== 'object' && !value && (raw == null || typeof raw === 'string')) continue;
    if (typeof raw !== 'string' || value.length < (field.min ?? 2)) errors[field.name] = `${field.label}: enter at least ${field.min ?? 2} characters.`;
    else if (value.length > (field.max ?? (field.type === 'textarea' ? 2000 : 200))) errors[field.name] = `${field.label} is too long.`;
    else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[field.name] = 'Enter a valid email address.';
    else if (field.type === 'url') {
      try { if (!['http:', 'https:'].includes(new URL(value).protocol)) throw new Error(); }
      catch { errors[field.name] = 'Enter a complete http:// or https:// website address.'; }
    } else if (field.options && !field.options.includes(value)) errors[field.name] = `Choose a valid ${field.label.toLowerCase()}.`;
  }
  if (Object.keys(errors).length) return invalid('Please check the highlighted fields.', errors);
  if (input.website != null && typeof input.website !== 'string') return invalid('Invalid request payload.');
  const website = typeof input.website === 'string' ? input.website.trim() : '';
  if (kind === 'contact') return { ok: true, data: { name: values.name, email: values.email, subject: values.subject, message: values.message, website } };
  const source = typeof input.utmSource === 'string' ? input.utmSource.trim().slice(0, 200).replace(/[\r\n]/g, ' ') : '';
  const message = [...enquiryFields[kind].map(field => `${field.label}: ${values[field.name] || 'Not supplied'}`), `UTM source: ${source || 'Not supplied'}`].join('\n');
  return { ok: true, data: {
    name: kind === 'founder' ? values.founderName : values.name,
    email: values.email,
    subject: `${kind === 'founder' ? 'Founder' : 'Investor'} Intake: ${kind === 'founder' ? values.companyName : values.firm}`,
    message, website,
  } };
}
