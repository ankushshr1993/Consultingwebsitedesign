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
  return <div className="home-index">
    <section><div className="site-container home-contexts"><h2>When to bring us in</h2><div>{moments.map(moment => <details key={moment.title} className="context-detail"><summary>{moment.title}</summary><div><p>{moment.trigger}</p><p>What we look for: {moment.inspect}</p><p>What leadership gets back: {moment.outcome}</p></div></details>)}</div></div></section>
    <section className="home-method"><div className="site-container"><h2>Diagnose, reset, stabilise.</h2><ol>{method.map(stage => <li key={stage.step}><span className="chapter-number" aria-hidden="true">{stage.step}</span><h3>{stage.title}</h3><p>{stage.gets}</p><details><summary>What this involves</summary><div><p>What we inspect: {stage.inspect}</p><p>What changes: {stage.changes}</p></div></details></li>)}</ol></div></section>
  </div>;
}
