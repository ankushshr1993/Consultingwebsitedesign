import { Resend } from 'resend';
import type { ContactPayload } from './contact';

const resendApiKey = process.env.RESEND_API_KEY;
const defaultContactToEmail = 'info@regressionconsulting.com';
const toEmail = process.env.CONTACT_TO_EMAIL || defaultContactToEmail;
const fromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactEmail(data: ContactPayload) {
  if (!resend || !toEmail || !fromEmail) {
    throw new Error('Missing email configuration (RESEND_API_KEY, CONTACT_FROM_EMAIL).');
  }

  return resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject: `[Defence Fund] ${data.subject}`,
    text: [`Name: ${data.name}`, `Email: ${data.email}`, `Subject: ${data.subject}`, '', 'Message:', data.message].join('\n'),
  });
}
