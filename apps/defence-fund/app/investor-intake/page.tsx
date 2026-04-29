import Link from 'next/link';
import { InvestorIntakeForm } from '../../components/investor-intake-form';

export default function InvestorIntakePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">Investor Intake</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Tell us your mandate, stage focus, and strategic intent so we can assess fit for collaboration.
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <InvestorIntakeForm />
      </div>
      <div className="mt-5">
        <Link href="/founder-intake" className="text-sm text-indigo-300 hover:text-indigo-200">Building a company? Go to Founder Intake →</Link>
      </div>
    </div>
  );
}
