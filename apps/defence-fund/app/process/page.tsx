import Link from 'next/link';

const steps = [
  {
    title: '1) Initial Screen (Week 1)',
    body: 'We review mission relevance, technical credibility, and baseline fit with our criteria.'
  },
  {
    title: '2) Diligence Snapshot (Weeks 2–3)',
    body: 'We test governance readiness, market logic, compliance posture, and capital pathway realism.'
  },
  {
    title: '3) Institutionalisation Plan (Weeks 3–6)',
    body: 'For aligned teams, we define a practical plan covering governance cadence, diligence materials, and investor positioning.'
  },
  {
    title: '4) Capital Alignment (Post-readiness)',
    body: 'We deploy selectively and introduce aligned partners when structural readiness is visible and defensible.'
  }
];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">How We Work</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
        Our process is designed to improve institutional readiness before scaling capital conversations.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {steps.map((step) => (
          <article key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">{step.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{step.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">What you can expect</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>Clear qualification decision and transparent next steps.</li>
          <li>Compliance-first framing across diligence discussions.</li>
          <li>Focused, high-signal engagement rather than broad networking.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/criteria" className="rounded-md border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10">
            View Criteria
          </Link>
          <Link href="/contact-us" className="rounded-md bg-indigo-500 px-5 py-2 text-sm text-white hover:bg-indigo-600">
            Start Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
