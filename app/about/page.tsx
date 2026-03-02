import type { Metadata } from 'next';
import { About } from '@/components/About';

export const metadata: Metadata = {
  title: 'About Regression Consulting | Technology Execution for Enterprise Value',
  description:
    'Operator-led technology execution partner for investors and leadership teams seeking disciplined delivery, architecture integrity, and governance that protects enterprise value.',
};

export default function AboutPage() {
  return <About />;
}
