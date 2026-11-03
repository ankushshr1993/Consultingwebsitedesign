import type { Metadata } from 'next';
import Link from 'next/link';

const services = [
  {
    title: 'Investment-side execution review',
    buyer: 'VC, PE, investor, board, portfolio team',
    situation:
      'Capital is being deployed and the technology plan needs to be tested before assumptions become risk.',
    actions: [
      'Review architecture and delivery assumptions',
      'Identify execution dependencies',
      'Assess vendor/team capability',
      'Surface risks to timeline, cost, scalability, and control',
    ],
    output:
      'Execution-risk memo, leadership readout, and practical control recommendations.',
  },
  {
    title: 'Architecture governance reset',
    buyer: 'CEO, CTO, CIO, portfolio operating team',
    situation:
      'Systems, integrations, and platform decisions have become fragmented.',
    actions: [
      'Clarify target architecture',
      'Define system boundaries',
      'Reset decision rights',
      'Identify structural debt',
    ],
    output:
      'Architecture control map, decision-rights model, and prioritised reset plan.',
  },
  {
    title: 'Delivery stability advisory',
    buyer: 'Leadership team managing program drift',
    situation: 'Delivery is moving, but confidence is falling.',
    actions: [
      'Review cadence, reporting, escalation, ownership, and vendor coordination',
      'Identify where delivery control has broken down',
      'Rebuild operating rhythm',
    ],
    output:
      'Delivery control model, weekly cadence, risk dashboard, and escalation structure.',
  },
  {
    title: 'Leadership transition support',
    buyer: 'CEO, investor, incoming/outgoing CTO/CIO',
    situation:
      'Technology leadership is changing and execution continuity matters.',
    actions: [
      'Stabilise priorities',
      'Map dependencies',
      'Create transition control',
      'Protect critical delivery outcomes',
    ],
    output: 'Transition execution plan, risk register, and operating cadence.',
  },
];

const engagementModels = [
  {
    name: '2-week execution diagnostic',
    when: 'When leadership needs a fast, structured read on where execution risk is concentrated.',
    happens:
      'Rapid assessment of architecture, delivery mechanics, governance, and decision control across key workstreams.',
    receives: 'Diagnostic summary, risk priorities, and clear recommendations for immediate control actions.',
  },
  {
    name: '30/60/90-day reset',
    when: 'When execution drift is visible and leadership needs a practical reset plan with milestones.',
    happens:
      'A phased intervention to reset decision rights, operating cadence, escalation structure, and delivery confidence.',
    receives: 'Sequenced reset plan, accountability model, and measurable control checkpoints by phase.',
  },
  {
    name: 'Embedded advisory support',
    when: 'When teams need ongoing operator-level support during high-stakes delivery or transition periods.',
    happens:
      'Regular working sessions with leadership and delivery owners to maintain control, resolve blockers, and protect outcomes.',
    receives: 'Continuous advisory input, governance reinforcement, and decision support tied to live execution realities.',
  },
];

export const metadata: Metadata = {
  openGraph: { title: 'Investment-side execution review', description: 'Operator-led execution-risk advisory services for investors, boards, CEOs, and leadership teams.', url: '/services', type: 'website' },
  alternates: { canonical: '/services' },
  title: 'What We Do | Regression Consulting',
  description: 'Operator-led execution-risk advisory services for investors, boards, CEOs, and leadership teams.',
};

export default function ServicesPage() {
  return (
    <div className="services-dossier site-container">
      <header className="dossier-intro">
        <h1>Choose the support your situation needs.</h1>
        <p className="lead">
          We help investors and leadership teams diagnose execution risk, reset architecture and delivery control, and stabilise programs where ambiguity has started to affect confidence.
        </p>
      </header>

      <section className="service-chapters" aria-labelledby="advisory-services">
        <h2 id="advisory-services" className="section-heading">Advisory services</h2>
        {services.map((service, index) => (
          <article key={service.title} className="service-chapter">
            <div className="chapter-body">
              <h3><span className="chapter-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{service.title}</h3>
              <p>{service.situation}</p>
              <ul>
                {service.actions.map((action) => <li key={action}>{action}</li>)}
              </ul>
            </div>
            <aside className="chapter-aside" aria-label={`${service.title}: buyer and output`}>
              <dl>
                <div><dt>Buyer</dt><dd>{service.buyer}</dd></div>
                <div><dt>Output</dt><dd>{service.output}</dd></div>
              </dl>
            </aside>
          </article>
        ))}
      </section>

      <section className="engagement-comparison" aria-labelledby="engagement-models">
        <h2 id="engagement-models" className="section-heading">Engagement models</h2>
        {engagementModels.map((model) => (
          <article key={model.name} className="engagement-option">
            <h3>{model.name}</h3>
            <dl>
              <div><dt>When to use</dt><dd>{model.when}</dd></div>
              <div><dt>What happens</dt><dd>{model.happens}</dd></div>
              <div><dt>What client receives</dt><dd>{model.receives}</dd></div>
            </dl>
          </article>
        ))}
      </section>

      <section className="closing-note">
        <h2>Not sure which service fits?</h2>
        <p>
          Start with the situation. We will help identify whether the issue is architecture, governance, delivery control, or leadership alignment.
        </p>
        <Link href="/contact" className="button-primary">Start a conversation</Link>
      </section>
    </div>
  );
}
