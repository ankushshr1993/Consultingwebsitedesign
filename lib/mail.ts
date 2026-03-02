import { Resend } from 'resend';
import type { ContactInput } from './validators';

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactEmail(data: ContactInput) {
  if (!resend || !toEmail || !fromEmail) {
    throw new Error('Missing email configuration (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).');
  }

  const body = data.message?.trim() || data.executionChallenge?.trim() || '';

  return resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject: `New contact form submission from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Role: ${data.role}`,
      `Urgency: ${data.urgency}`,
      '',
      'Message / Execution challenge:',
      body,
    ].join('\n'),
  });
}
