import Link from 'next/link';
import { FounderIntakeForm } from '../../components/founder-intake-form';

export default function FounderIntakePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">Founder Intake</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Share full details about your startup so we can assess mission relevance, readiness, and fit.
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <FounderIntakeForm />
      </div>
      <div className="mt-5">
        <Link href="/investor-intake" className="text-sm text-indigo-300 hover:text-indigo-200">Are you an investor? Go to Investor Intake →</Link>
      </div>
    </div>
  );
}
