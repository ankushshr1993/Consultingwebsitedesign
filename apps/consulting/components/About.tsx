const problemCards = [
  {
    title: 'Architecture',
    description: 'Systems, platforms, and integration decisions fragment faster than leadership can see.',
  },
  {
    title: 'Delivery Ecosystem',
    description: 'Internal teams and vendors optimise locally while the overall program loses coherence.',
  },
  {
    title: 'Decision Control',
    description: 'Ownership becomes unclear, escalations multiply, and leadership receives updates instead of control.',
  },
];

const proofSlices = [
  {
    situation: 'Multi-vendor delivery environment',
    intervention: 'Reset architecture and delivery decision rights across leadership, product, and engineering.',
    outcome: 'Reduced ambiguity around ownership, escalation, and execution confidence.',
  },
  {
    situation: 'Platform transition under investor pressure',
    intervention: 'Mapped structural dependencies, clarified escalation thresholds, and rebuilt weekly control cadence.',
    outcome: 'Leadership regained visibility on risks, blockers, and non-negotiable execution priorities.',
  },
  {
    situation: 'Leadership transition during active program delivery',
    intervention: 'Stabilised decision ownership and translated architectural risk into board-level action logic.',
    outcome: 'Continuity improved while handover risk and delivery drift were contained.',
  },
];

const strategicMoats = [
  'Proprietary Data',
  'Workflow',
  'Regulatory',
  'Distribution',
  'Ecosystem',
  'Network',
  'Physical Infrastructure',
  'Scale',
];

const strongFit = [
  'Investors evaluating technology execution risk',
  'Founders scaling beyond informal delivery',
  'CEOs/CTOs/CIOs facing execution drift',
  'Portfolio teams needing control before a board/investor moment',
];

const notFit = [
  'Teams looking only for slideware strategy',
  'Low-urgency transformation without leadership mandate',
  'Situations where politics matter more than operational truth',
];

export function About() {
  return (
    <section className="relative bg-[#0B1020] py-20 md:py-24">
      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <section className="space-y-6">
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-[#E8ECF8] md:text-5xl">
            When execution drifts, the status report is usually the last place to find the truth.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => (
              <article key={card.title} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6">
                <h3 className="text-xl font-semibold text-[#E8ECF8]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A8B3CF]">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Why Regression Consulting</p>
          <h3 className="max-w-4xl text-3xl font-semibold text-[#E8ECF8] md:text-4xl">Operator-led structural diagnosis in high-stakes execution environments.</h3>
          <p className="max-w-[75ch] text-[#A8B3CF] leading-relaxed">
            Regression is the discipline of separating signal from noise. We apply that lens to architecture, delivery systems, and decision structure so leadership can recover control with clarity rather than narrative.
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Proof in execution contexts</p>
          <div className="grid gap-5 md:grid-cols-3">
            {proofSlices.map((slice) => (
              <article key={slice.situation} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Situation</p>
                <p className="mt-2 text-[#E8ECF8]">{slice.situation}</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Intervention</p>
                <p className="mt-2 text-sm text-[#A8B3CF]">{slice.intervention}</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Leadership outcome</p>
                <p className="mt-2 text-sm text-[#E8ECF8]">{slice.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 md:p-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Moat-building principles</p>
          <h3 className="max-w-4xl text-2xl font-semibold text-[#E8ECF8] md:text-3xl">We help leadership design execution models that strengthen durable strategic moats.</h3>
          <p className="max-w-[75ch] text-sm leading-relaxed text-[#A8B3CF]">
            We do not treat moats as slideware. We help teams translate strategy into operational control across the moat categories that matter most to long-term defensibility.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {strategicMoats.map((moat) => (
              <p key={moat} className="rounded-lg border border-[#2A3559] bg-[#0B1020] px-4 py-3 text-sm text-[#E8ECF8]">
                {moat}
              </p>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 md:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">A strong fit</p>
            <div className="mt-4 space-y-2 text-[#E8ECF8]">
              {strongFit.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 md:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Not a fit</p>
            <div className="mt-4 space-y-2 text-[#E8ECF8]">
              {notFit.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
