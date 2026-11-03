import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/investor-intake', 'Investor intake', 'Share your investment mandate, geography, stage focus, and experience in defence or dual-use technology.');

import Link from 'next/link';
import { InvestorIntakeForm } from '../../components/investor-intake-form';

export default function InvestorIntakePage() {
  return (
    <div className="site-container intake-page">
      <header className="dossier-intro"><h1 className="text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">Investor Intake</h1>
      <p className="mt-4 max-w-3xl text-[var(--color-muted)]">
        Tell us your mandate, stage focus, and strategic intent so we can assess fit for collaboration.
      </p>
      </header><div className="intake-shell">
        <InvestorIntakeForm />
      </div>
      <div className="mt-5">
        <Link href="/founder-intake" className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent)]">Building a company? Go to Founder Intake</Link>
      </div>
    </div>
  );
}
