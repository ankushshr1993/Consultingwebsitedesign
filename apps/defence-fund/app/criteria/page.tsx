import Link from 'next/link';

const stageItems = [
  'Prototype validated (TRL maturity)',
  'Early revenue or credible deployment pathway',
  'Seed to pre-Series A orientation',
  'Founder-led, execution-focused'
];

const geographyItems = [
  'India-origin companies',
  'Europe considered as structured expansion pathway',
  'Willingness to design within export-control realities'
];

const coreCriteria = [
  {
    title: 'Team Quality',
    text: 'Founders with domain credibility, decision velocity, and openness to governance.'
  },
  {
    title: 'Technical Defensibility',
    text: 'Clear advantage versus global alternatives; credible differentiation.'
  },
  {
    title: 'Scalable Economics',
    text: 'Path toward strong margins and repeatable revenue.'
  },
  {
    title: 'Market Logic',
    text: 'Clear buyer definition and venture-scale opportunity beyond a single procurement channel.'
  },
  {
    title: 'Institutional Readiness',
    text: 'Willingness to adopt reporting discipline, structured governance, and board oversight.'
  },
  {
    title: 'Compliance Awareness',
    text: 'Early understanding of export-control, foreign participation, and regulatory constraints.'
  },
  {
    title: 'Dual-Use Optionality (Where Relevant)',
    text: 'Ability to expand beyond defence-only dependency.'
  },
  {
    title: 'Exit Rationality',
    text: 'Plausible strategic acquirer universe or defined long-term liquidity pathway.'
  }
];

const governanceItems = [
  'Clean cap table transparency',
  'Clear IP ownership documentation',
  'Export-control feasibility assessment',
  'Board-level reporting discipline',
  'No undisclosed side arrangements'
];

const notFitItems = [
  'Companies seeking guaranteed funding',
  'Grant-only R&D labs without commercial roadmap',
  'Low-margin manufacturing arbitrage without defensible IP',
  'Founder teams resistant to governance',
  'Businesses entirely dependent on a single government contract'
];

const readinessItems = [
  'We have validated our core technology.',
  'We understand our buyer and revenue model.',
  'We are open to governance discipline.',
  'We acknowledge regulatory constraints.',
  'We are seeking institutional capital, not visibility.'
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-1 text-slate-500">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CriteriaPage() {
  return (
    <div>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">Engagement Criteria</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Our Screening Philosophy</h2>
        <div className="mt-6 max-w-4xl space-y-3 text-base leading-relaxed text-slate-300">
          <p>We engage with a limited number of companies each year.</p>
          <p>
            Selection is based on institutional readiness, structural clarity, and scalable potential — not proximity, visibility, or
            grant history.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Stage &amp; Scope</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium text-slate-100">Stage</h3>
              <div className="mt-4">
                <BulletList items={stageItems} />
              </div>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium text-slate-100">Geography</h3>
              <div className="mt-4">
                <BulletList items={geographyItems} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Core Selection Criteria</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {coreCriteria.map((criteria) => (
            <article
              key={criteria.title}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-base font-semibold text-slate-100">{criteria.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{criteria.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Governance &amp; Compliance Expectations</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300">Institutional capital requires structure.</p>
          <div className="mt-6 max-w-4xl">
            <BulletList items={governanceItems} />
          </div>
          <p className="mt-6 text-sm text-slate-300">If these elements cannot be implemented, engagement does not proceed.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Not a Fit</h2>
        <div className="mt-6 max-w-4xl">
          <BulletList items={notFitItems} />
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Before Reaching Out</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
            Founders should be able to answer “yes” to most of the following:
          </p>
          <ul className="mt-6 max-w-4xl space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            {readinessItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 text-emerald-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-400">If uncertain, internal preparation should precede outreach.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Proceed Selectively</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
          We review opportunities deliberately and confidentially. If your company aligns with the above criteria, we welcome a
          focused introduction.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-rose-500 px-6 py-3 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-rose-600"
          >
            Contact
          </Link>
          <Link
            href="/thesis"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            View Thesis
          </Link>
        </div>
      </section>
    </div>
  );
}
