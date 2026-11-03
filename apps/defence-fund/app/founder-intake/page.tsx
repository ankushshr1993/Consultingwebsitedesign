import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/founder-intake', 'Founder intake', 'Introduce your defence or dual-use company, technical progress, compliance context, and capital needs.');

import Link from 'next/link';
import { FounderIntakeForm } from '../../components/founder-intake-form';

export default function FounderIntakePage() {
  return (
    <div className="site-container intake-page">
      <header className="dossier-intro"><h1 className="text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">Founder Intake</h1>
      <p className="mt-4 max-w-3xl text-[var(--color-muted)]">
        Share full details about your startup so we can assess mission relevance, readiness, and fit.
      </p>
      </header><div className="intake-shell">
        <FounderIntakeForm />
      </div>
      <div className="mt-5">
        <Link href="/investor-intake" className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent)]">Are you an investor? Go to Investor Intake</Link>
      </div>
    </div>
  );
}
