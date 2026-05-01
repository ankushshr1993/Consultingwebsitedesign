import Link from 'next/link';

const method = [
  {
    step: '01',
    title: 'Find where control broke.',
    includes: [
      'Architecture and integration review',
      'Delivery cadence review',
      'Governance and escalation review',
      'Vendor and team ownership review',
      'Leadership reporting review',
    ],
    receives: 'Execution-risk map, structural diagnosis, and priority control issues.',
  },
  {
    step: '02',
    title: 'Re-establish decision structure.',
    includes: [
      'Decision rights',
      'Ownership boundaries',
      'Escalation paths',
      'Target-state architecture direction',
      'Delivery rhythm and governance model',
    ],
    receives: 'Reset plan, operating model, and leadership control cadence.',
  },
  {
    step: '03',
    title: 'Embed operating discipline.',
    includes: [
      'Weekly execution cadence',
      'Risk and dependency visibility',
      'Vendor coordination',
      'Architecture governance',
      'Board/investor reporting logic',
    ],
    receives: 'Durable controls, cleaner reporting, and reduced execution ambiguity.',
  },
];

const workingModel = [
  'Direct access to decision-makers',
  'Short cycles, visible checkpoints',
  'Practical outputs, not theatre',
  'Independent judgment',
  'Execution accountability',
];

const antiScope = [
  'We do not produce strategy decks disconnected from execution.',
  'We do not replace management accountability.',
  'We do not hide operational truth for political comfort.',
  'We do not add governance for its own sake.',
];

export default function ApproachPage() {
  return (
    <section className="relative bg-[#0B1020] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(245,181,68,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">How we work</p>
          <h1 className="text-4xl font-semibold leading-tight text-[#E8ECF8] md:text-6xl">How we restore execution control.</h1>
          <p className="max-w-[75ch] text-lg leading-relaxed text-[#A8B3CF]">
            We work in short, direct cycles to find where control broke, reset the operating structure, and embed delivery discipline that leadership can actually use.
          </p>
        </header>

        <section className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Method timeline</p>
          <div className="grid gap-5 md:grid-cols-3">
            {method.map((stage) => (
              <article key={stage.step} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6">
                <p className="font-mono text-3xl text-[#F5B544]">{stage.step}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#E8ECF8]">{stage.title}</h2>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Include</p>
                <ul className="mt-2 space-y-1 text-sm text-[#E8ECF8]">
                  {stage.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border border-[#2A3559] bg-[#0B1020] p-3 text-sm text-[#E8ECF8]"><span className="font-mono text-[#A8B3CF]">Client receives:</span> {stage.receives}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Working model</p>
          <div className="grid gap-4 md:grid-cols-3">
            {workingModel.map((item) => (
              <article key={item} className="rounded-xl border border-[#2A3559] bg-[#0B1020] p-5 text-[#E8ECF8]">
                {item}
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">What we do not do</p>
          <ul className="space-y-2 text-[#E8ECF8]">
            {antiScope.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 text-center md:p-10">
          <h2 className="text-3xl font-semibold text-[#E8ECF8]">You have seen how we work. Ready to test where control is breaking?</h2>
          <Link href="/contact" className="mt-6 inline-flex rounded-md bg-[#F5B544] px-8 py-3 font-medium text-[#0B1020] transition-colors hover:bg-[#ffd27e]">
            Start a conversation
          </Link>
        </section>
      </div>
    </section>
  );
}
