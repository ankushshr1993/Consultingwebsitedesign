import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Resources</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Practical guides for founders and investors evaluating defence and dual-use readiness.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Link href="/resources/institutional-readiness-checklist" className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08]">
          <h2 className="text-xl font-semibold text-white">Institutional Readiness Checklist</h2>
          <p className="mt-2 text-slate-300">A practical founder checklist before institutional fundraising conversations.</p>
        </Link>
        <Link href="/resources/export-control-readiness" className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08]">
          <h2 className="text-xl font-semibold text-white">Export-Control Readiness Primer</h2>
          <p className="mt-2 text-slate-300">Key questions to map compliance constraints before cross-border scaling.</p>
        </Link>
      </div>
    </div>
  );
}
