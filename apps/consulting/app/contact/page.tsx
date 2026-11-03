import type { Metadata } from 'next';
import { ContactPageForm } from '@/components/ContactPageForm';

export const metadata: Metadata = {
  openGraph: { title: 'Start a Conversation | Regression Consulting', description: 'Confidential advisory conversations for leadership teams facing technology execution risk.', url: '/contact', type: 'website' },
  alternates: { canonical: '/contact' },
  title: 'Start a Conversation | Regression Consulting',
  description: 'Confidential advisory conversations for leadership teams facing technology execution risk.',
};

export default function ContactPage() {
  return <ContactPageForm />;
}
