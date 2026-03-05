import { Resend } from 'resend';
import type { ContactPayload } from './contact';

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || process.env.RESEND_TO_EMAIL || 'info@regressionconsulting.com';
const fromEmail =
  process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || process.env.FROM_EMAIL || 'info@regressionconsulting.com';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactEmail(data: ContactPayload) {
  if (!resend || !toEmail || !fromEmail) {
    throw new Error('Missing email configuration (RESEND_API_KEY, CONTACT_FROM_EMAIL|RESEND_FROM_EMAIL|FROM_EMAIL).');
  }

  return resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject: `[Defence Fund] ${data.subject}`,
    text: [`Name: ${data.name}`, `Email: ${data.email}`, `Subject: ${data.subject}`, '', 'Message:', data.message].join('\n'),
  });
}
