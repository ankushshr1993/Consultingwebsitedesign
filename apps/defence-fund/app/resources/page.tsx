import { pageMetadata } from '../../lib/page-metadata';

export const metadata = pageMetadata('/resources', 'Founder and investor resources', 'Practical preparation checklists for institutional readiness and export-control conversations.');

import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">Resources</h1>
      <p className="mt-4 max-w-3xl text-[var(--color-muted)]">Preparation checklists for founders and investors. Use them to identify missing evidence and questions for an initial conversation.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Link href="/resources/institutional-readiness-checklist" className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-6 hover:bg-[var(--color-surface)]">
          <h2 className="text-xl font-semibold text-[var(--color-ink)]">Institutional Readiness Checklist</h2>
          <p className="mt-2 text-[var(--color-muted)]">Five preparation areas with examples of the governance, ownership, and commercial evidence to gather.</p>
        </Link>
        <Link href="/resources/export-control-readiness" className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-6 hover:bg-[var(--color-surface)]">
          <h2 className="text-xl font-semibold text-[var(--color-ink)]">Export-control readiness checklist</h2>
          <p className="mt-2 text-[var(--color-muted)]">Five sets of questions to organize transfer, approval, end-use, and data discussions with specialist advisers.</p>
        </Link>
      </div>
      <p className="mt-10">Ready to discuss fit? <Link href="/founder-intake" className="text-link">Introduce your company</Link> or <Link href="/investor-intake" className="text-link">share your investment mandate</Link>.</p>
    </div>
  );
}
