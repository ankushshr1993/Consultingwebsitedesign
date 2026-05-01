import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { ContactCta } from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Regression Consulting | Technology Execution Risk Advisory',
  description: 'Operator-led advisory for investors, boards, and leadership teams when technology execution becomes enterprise risk.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ContactCta />
    </>
  );
}
