const outcomes = [
  {
    metric: '90 days',
    title: 'Post-acquisition stabilisation',
    description: 'Stabilized delivery governance and execution accountability after ownership transition.',
  },
  {
    metric: '38%',
    title: 'Program variance reduction',
    description: 'Reduced forecast variance over three consecutive quarters in a multi-vendor program.',
  },
  {
    metric: 'Board-ready',
    title: 'ERP de-risk before approval',
    description: 'Reframed risk posture and controls before irreversible board-level commitment.',
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
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Execution truth</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#E8ECF8]">Execution rarely fails in technology. It fails in structure.</h1>
          <p className="mx-auto max-w-[75ch] text-base md:text-lg leading-relaxed text-[#A8B3CF]">
            Leadership receives progress updates while execution reality drifts. We restore structural control before instability affects growth, regulatory posture, or investor confidence.
          </p>
        </header>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/80 p-6 md:p-8 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Operator-led</p>
          <h2 className="text-2xl text-[#E8ECF8]">Operator-led, with enterprise scar tissue.</h2>
          <p className="max-w-[72ch] text-[#A8B3CF] leading-relaxed">
            Regression Consulting is led by senior operators who have rebuilt delivery governance inside high-pressure enterprise environments. We work directly with executive teams to clarify ownership, reset decision rights, and recover confidence in execution.
          </p>
        </section>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/80 p-6 md:p-8 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Why regression</p>
          <p className="max-w-[74ch] text-[#E8ECF8] leading-relaxed">
            Regression is the discipline of finding true signal through noisy data. We apply the same principle in technology diligence and execution recovery: isolate what is causal, remove what is cosmetic, and return systems to a stable operating baseline.
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Selected outcomes</p>
          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.title} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6">
                <p className="text-3xl font-mono text-[#4DA3FF]">{outcome.metric}</p>
                <h3 className="mt-3 text-lg font-semibold text-[#E8ECF8]">{outcome.title}</h3>
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
