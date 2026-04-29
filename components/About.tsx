const outcomes = [
  {
    title: 'Execution confidence',
    description: 'Clear ownership, measurable delivery cadence, and leadership visibility.',
  },
  {
    title: 'Architecture integrity',
    description: 'Technology foundations that scale without structural drift.',
  },
  {
    title: 'Leadership alignment',
    description: 'Strategic priorities translated into coordinated execution.',
  },
];

const moments = [
  'Investment deployment',
  'Growth inflection',
  'Execution drift',
  'Platform transition',
  'Leadership realignment',
];

export function About() {
  return (
    <section id="about" className="relative bg-black py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-rose-500/5" />

      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Execution truth</p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Execution rarely fails in technology.
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-300">It fails in structure.</p>
        </header>

        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3 md:p-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">Architecture</p>
            <p className="mt-2 text-sm text-gray-200">Architecture fragments.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">Delivery ecosystem</p>
            <p className="mt-2 text-sm text-gray-200">Vendors optimise locally.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">Decision control</p>
            <p className="mt-2 text-sm text-gray-200">Decision ownership becomes unclear.</p>
          </div>
        </section>

        <section className="space-y-4">
          <p className="max-w-5xl text-gray-200 leading-relaxed">
            Leadership receives progress updates, but execution reality drifts.
          </p>
          <p className="max-w-5xl text-gray-200 leading-relaxed">
            Regression Consulting restores structural control before delivery instability affects growth, regulatory posture, or investor confidence.
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">What success looks like</p>
          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-3">
                <h2 className="text-lg font-semibold text-white">{outcome.title}</h2>
                <p className="text-sm leading-relaxed text-gray-200">{outcome.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Moments where we step in</p>
          <div className="space-y-2">
            {moments.map((moment) => (
              <p key={moment} className="text-gray-200">
                {moment}
              </p>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Execution discipline</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2">
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                We work directly with leadership teams to restore architecture clarity, delivery governance, and decision accountability across complex technology programs.
              </p>
            </div>
          </div>
          <a href="/approach" className="inline-block text-sm text-indigo-300 hover:text-indigo-200 transition-colors">
            See our approach →
          </a>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Execution credibility</p>
          <p className="text-gray-200">Independent advisory perspective across investors, boards, and leadership teams.</p>
          <p className="text-gray-200">Focused on structural control where execution outcomes are material.</p>
          <p className="text-gray-200">Built for clarity under pressure.</p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Engagement posture</p>
          <p className="text-gray-200">Direct, selective, and accountable.</p>
          <p className="text-gray-200">Aligned with leadership decisions that shape growth and confidence.</p>
          <p className="text-gray-200">Structured to move from ambiguity to control quickly.</p>
        </section>
      </div>
    </section>
  );
}
