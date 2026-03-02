const audiences = [
  {
    title: 'Venture Capital & Private Equity',
    context: 'Investment risk often hides inside delivery assumptions.',
    value:
      'We expose execution risk early, align architecture to investment thesis, and create governance visibility for hold, scale, or exit decisions.',
  },
  {
    title: 'Portfolio Companies at Inflection Points',
    context: 'Scale, platform rebuilds, and vendor sprawl create structural drift.',
    value:
      'We restore architecture coherence, delivery cadence, and decision accountability before instability affects growth metrics.',
  },
  {
    title: 'CEOs, CTOs & CIOs in Complex Environments',
    context: 'Leadership accountability increases as execution complexity compounds.',
    value:
      'We establish control across internal teams and partners so strategic priorities convert into measurable delivery outcomes.',
  },
];

const framework = [
  {
    step: 'Diagnose',
    benefit: 'Surface execution debt, architecture exposure, and governance blind spots before they compound.',
  },
  {
    step: 'Design',
    benefit: 'Set target-state architecture, decision rights, and operating controls tied to enterprise priorities.',
  },
  {
    step: 'Execute',
    benefit: 'Run delivery under explicit ownership, transparent reporting, and disciplined cadence.',
  },
  {
    step: 'Stabilise',
    benefit: 'Embed durable controls and platform resilience for regulated growth and long-term scale.',
  },
];

const beliefs = [
  'Speed without structure creates execution risk.',
  'Governance should increase momentum through clarity, not bureaucracy.',
  'Architecture is a capital asset; disciplined delivery protects its value.',
];

export function About() {
  return (
    <section id="about" className="relative bg-black py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-rose-500/5" />

      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">About Us</p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Regression Consulting is a technology execution partner for moments where delivery risk becomes enterprise risk.
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-300">
            We work with investors and leadership teams to protect valuation, build execution confidence, and align decision-makers around architecture and delivery control.
          </p>
        </header>

        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3 md:p-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">Startup Growth</p>
            <p className="mt-2 text-sm text-gray-200">Scale without structural drift.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">Execution Confidence</p>
            <p className="mt-2 text-sm text-gray-200">Clear ownership, measurable cadence.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">Leadership Alignment</p>
            <p className="mt-2 text-sm text-gray-200">Unified decisions under pressure.</p>
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Why We Exist</p>
          <p className="max-w-5xl text-gray-200 leading-relaxed">
            As organisations grow, architecture fragments, vendors optimise locally, and governance is introduced only after risk surfaces.
            Regression Consulting exists to re-establish structural control before execution instability impacts board confidence, regulatory posture, or enterprise value.
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Who We Work With</p>
          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-3">
                <h2 className="text-lg font-semibold text-white">{audience.title}</h2>
                <p className="text-sm text-gray-300">{audience.context}</p>
                <p className="text-sm leading-relaxed text-gray-200">{audience.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">What We Believe</p>
          <div className="space-y-2">
            {beliefs.map((belief) => (
              <p key={belief} className="text-gray-200">
                {belief}
              </p>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">How We Work</p>
          <div className="grid gap-4 md:grid-cols-2">
            {framework.map((item) => (
              <div key={item.step} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">{item.step}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">{item.benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Execution Credibility</p>
          <p className="text-gray-200">We bring enterprise architecture leadership from complex and regulated delivery environments.</p>
          <p className="text-gray-200">We have aligned multi-vendor ecosystems under unified governance to restore delivery control and reduce execution volatility.</p>
          <p className="text-gray-200">The business outcome: stronger oversight, lower execution risk, and better valuation resilience.</p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Our Commitment</p>
          <p className="text-gray-200">We engage selectively where execution outcomes are material.</p>
          <p className="text-gray-200">We maintain independent judgment and clear accountability.</p>
          <p className="text-gray-200">We deliver structural clarity that remains after the advisory cycle ends.</p>
        </section>

      </div>
    </section>
  );
}
