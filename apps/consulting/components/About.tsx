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
  return <div className="home-index">
    <section><div className="site-container"><h2>Find the causes behind delivery drift.</h2>
      <ul className="ruled-index">{problemCards.map(card => <li key={card.title}><h3>{card.title}</h3><p>{card.description}</p></li>)}</ul>
    </div></section>
    <section><div className="site-container home-contexts">
      <div><h2>Separate signal from noise.</h2><p>Regression is the discipline of separating signal from noise. We apply that lens to architecture, delivery systems, and decision structure so leadership can recover control with clarity rather than narrative.</p></div>
      <div><h3>Execution contexts</h3><p className="mt-4">Context, intervention, and leadership outcome. Discuss the relevant experience with us in confidence.</p>
      {proofSlices.map(slice => <details className="context-detail" key={slice.situation}><summary>{slice.situation}</summary><div><h4>Intervention</h4><p>{slice.intervention}</p><h4>Leadership outcome</h4><p>{slice.outcome}</p></div></details>)}
      <details className="context-detail"><summary>Moat-building principles</summary><div><h3>We help leadership design execution models that strengthen durable strategic moats.</h3><p>We do not treat moats as slideware. We help teams translate strategy into operational control across the moat categories that matter most to long-term defensibility.</p><ul className="experience-index">{strategicMoats.map(moat => <li key={moat}>{moat}</li>)}</ul></div></details>
      </div>
    </div></section>
    <section><div className="site-container home-contexts"><h2>Is this the right fit?</h2><div><h3>A strong fit</h3><ul className="experience-index">{strongFit.map(item => <li key={item}>{item}</li>)}</ul><details className="context-detail"><summary>When we are not a fit</summary><ul className="experience-index">{notFit.map(item => <li key={item}>{item}</li>)}</ul></details></div></div></section>
  </div>;
}
