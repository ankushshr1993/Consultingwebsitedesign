const outcomes = [
  {
    title: 'Governance clarity',
    description: 'Decision rights and escalation paths made explicit across leadership, product, and engineering.',
  },
  {
    title: 'Delivery stability',
    description: 'Operating cadence reset so risks are surfaced early and corrective action happens before drift compounds.',
  },
  {
    title: 'Board-level visibility',
    description: 'Execution reporting reframed around risk, confidence, and next decisions — not activity volume.',
  },
];

const notFit = [
  'Teams seeking presentation-only strategy without execution ownership',
  'Low-urgency transformation programs without leadership mandate',
  'Situations requiring promotional narratives over operational truth',
];

export function About() {
  return (
    <section id="about" className="relative bg-[#0B1020] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(77,163,255,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Who we are</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#E8ECF8]">Operator-led execution advisory for high-stakes environments.</h1>
          <p className="mx-auto max-w-[75ch] text-base md:text-lg leading-relaxed text-[#A8B3CF]">
            We partner directly with investors and leadership teams when technology execution becomes enterprise risk.
          </p>
        </header>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/80 p-6 md:p-8 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Why regression</p>
          <p className="max-w-[74ch] text-[#E8ECF8] leading-relaxed">
            Regression is the discipline of finding true signal through noisy data. We apply the same principle in technology diligence and execution recovery: isolate what is causal, remove what is cosmetic, and return systems to a stable operating baseline.
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">What changes when we are involved</p>
          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.title} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6">
                <h3 className="text-lg font-semibold text-[#E8ECF8]">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A8B3CF]">{outcome.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Not a fit</p>
          <div className="space-y-2">
            {notFit.map((item) => (
              <p key={item} className="text-[#E8ECF8]">• {item}</p>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
