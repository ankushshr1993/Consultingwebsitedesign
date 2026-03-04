export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

export function validateContactPayload(payload: unknown): { ok: true; data: ContactPayload } | { ok: false; message: string } {
  if (!payload || typeof payload !== 'object') {
    return { ok: false, message: 'Invalid request payload.' };
  }

  const input = payload as Record<string, unknown>;

  const name = String(input.name ?? '').trim();
  const email = String(input.email ?? '').trim();
  const subject = String(input.subject ?? '').trim();
  const message = String(input.message ?? '').trim();
  const website = String(input.website ?? '').trim();

  if (!name || !email || !subject || !message) {
    return { ok: false, message: 'Name, email, subject, and message are required.' };
  }

  if (!email.includes('@')) {
    return { ok: false, message: 'Please provide a valid email address.' };
  }

  if (message.length < 10) {
    return { ok: false, message: 'Message must be at least 10 characters long.' };
  }

  return { ok: true, data: { name, email, subject, message, website } };
}
