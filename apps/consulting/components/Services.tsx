const moments = [
  {
    title: 'Investment deployment',
    trigger: 'Before capital is committed, we test whether the technology plan can survive real execution pressure.',
    inspect: 'Architecture viability, delivery assumptions, capability dependencies, and decision governance.',
    outcome: 'A leadership-grade view of execution risk before assumptions harden into exposure.',
  },
  {
    title: 'Growth inflection',
    trigger: 'Velocity rises faster than operating structure, and hidden dependencies start compounding.',
    inspect: 'System boundaries, operating cadence, ownership seams, and constraint bottlenecks.',
    outcome: 'A clearer control model that supports growth without drifting into fragility.',
  },
  {
    title: 'Execution drift',
    trigger: 'Delivery appears active, but confidence in outcomes keeps deteriorating.',
    inspect: 'Escalation mechanics, reporting logic, vendor coordination, and unresolved risk chains.',
    outcome: 'Restored execution discipline with practical control checkpoints.',
  },
  {
    title: 'Platform transition',
    trigger: 'Core systems are moving while legacy commitments and integration debt remain live.',
    inspect: 'Transition sequencing, architecture breakpoints, and accountability at system interfaces.',
    outcome: 'Reduced transition risk and stronger delivery coherence during change.',
  },
  {
    title: 'Leadership realignment',
    trigger: 'Leadership changes create ambiguity around decision authority and execution continuity.',
    inspect: 'Decision-rights clarity, mandate boundaries, dependency ownership, and governance continuity.',
    outcome: 'Stabilised execution control through periods of leadership change.',
  },
];

const method = [
  {
    step: '01',
    title: 'Diagnose',
    inspect: 'Architecture logic, delivery mechanics, governance cadence, and points where control has fractured.',
    changes: 'Noise is separated from causality; structural issues are made explicit to leadership.',
    gets: 'Execution-risk map and priority interventions.',
  },
  {
    step: '02',
    title: 'Reset',
    inspect: 'Decision rights, escalation pathways, ownership boundaries, and delivery operating model.',
    changes: 'Control structures are rebuilt around clarity, accountability, and speed of correction.',
    gets: 'A practical reset plan with visible control checkpoints.',
  },
  {
    step: '03',
    title: 'Stabilise',
    inspect: 'Weekly execution cadence, dependency visibility, and leadership reporting usefulness.',
    changes: 'Governance becomes decision-useful rather than performative.',
    gets: 'A durable operating rhythm that protects delivery confidence.',
  },
];

export function Services() {
  return (
    <section className="relative bg-[#0B1020] py-20">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        <section className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">Moments where we step in</p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {moments.map((moment) => (
              <article key={moment.title} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6 transition-colors hover:border-[#C8A45D]/70">
                <h3 className="text-xl font-semibold text-[#E8ECF8]">{moment.title}</h3>
                <p className="mt-3 text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">Trigger:</span> {moment.trigger}</p>
                <p className="mt-2 text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">What we look for:</span> {moment.inspect}</p>
                <p className="mt-2 text-sm text-[#E8ECF8]"><span className="font-mono text-[#A8B3CF]">What leadership gets back:</span> {moment.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">How we work</p>
          <div className="grid gap-5 md:grid-cols-3">
            {method.map((stage) => (
              <article key={stage.step} className="rounded-xl border border-[#2A3559] bg-[#0B1020] p-6">
                <p className="font-mono text-3xl text-[#C8A45D]">{stage.step}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#E8ECF8]">{stage.title}</h3>
                <p className="mt-4 text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">What we inspect:</span> {stage.inspect}</p>
                <p className="mt-2 text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">What changes:</span> {stage.changes}</p>
                <p className="mt-2 text-sm text-[#E8ECF8]"><span className="font-mono text-[#A8B3CF]">What the client gets:</span> {stage.gets}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
