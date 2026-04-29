import Link from 'next/link';

const faqs = [
  {
    q: 'Do you invest directly or only through partners?',
    a: 'We can invest selectively ourselves and may introduce aligned partners once institutional readiness is demonstrated.'
  },
  {
    q: 'Do you lead rounds?',
    a: 'Case by case. We prioritize structural readiness and quality of opportunity over fixed participation labels.'
  },
  {
    q: 'Which geographies are in scope?',
    a: 'Primary focus is India-origin defence and dual-use companies, with cross-border relevance and compliance feasibility.'
  },
  {
    q: 'What is your response timeline?',
    a: 'We aim to respond within 3 business days and share whether there is fit for deeper discussion.'
  },
  {
    q: 'How do you handle sensitive regulatory and export-control topics?',
    a: 'We treat these as first-order diligence factors and design pathways inside legal and compliance constraints.'
  }
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">FAQ</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Common questions from founders, investors, and ecosystem partners.</p>

      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <article key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">{item.q}</h2>
            <p className="mt-2 leading-relaxed text-slate-300">{item.a}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex gap-3">
        <Link href="/process" className="rounded-md border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10">
          See Process
        </Link>
        <Link href="/contact-us" className="rounded-md bg-indigo-500 px-5 py-2 text-sm text-white hover:bg-indigo-600">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
