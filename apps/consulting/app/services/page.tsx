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

export default function ServicesPage() {
  return (
    <section className="relative bg-[#0B1020] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(245,181,68,0.10),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <header className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">What we do</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#E8ECF8] md:text-6xl">
            Technology execution support for high-stakes growth, investment, and control moments.
          </h1>
          <p className="max-w-[75ch] text-lg leading-relaxed text-[#A8B3CF]">
            We help investors and leadership teams diagnose execution risk, reset architecture and delivery control, and stabilise programs where ambiguity has started to affect confidence.
          </p>
        </header>

        <section className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Advisory services</p>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-[#E8ECF8]">{service.title}</h2>
                <p className="text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">Buyer:</span> {service.buyer}</p>
                <p className="text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">Situation:</span> {service.situation}</p>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">What we do</p>
                  <ul className="mt-2 space-y-1 text-sm text-[#E8ECF8]">
                    {service.actions.map((action) => (
                      <li key={action}>• {action}</li>
                    ))}
                  </ul>
                </div>
                <p className="rounded-lg border border-[#2A3559] bg-[#0B1020] p-3 text-sm text-[#E8ECF8]"><span className="font-mono text-[#A8B3CF]">Output:</span> {service.output}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Engagement models</p>
          <div className="grid gap-4 md:grid-cols-3">
            {engagementModels.map((model) => (
              <article key={model.name} className="rounded-xl border border-[#2A3559] bg-[#0B1020] p-5">
                <h3 className="text-lg font-semibold text-[#E8ECF8]">{model.name}</h3>
                <p className="mt-3 text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">When to use:</span> {model.when}</p>
                <p className="mt-2 text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">What happens:</span> {model.happens}</p>
                <p className="mt-2 text-sm text-[#A8B3CF]"><span className="font-mono text-[#E8ECF8]">What client receives:</span> {model.receives}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-8 text-center md:p-10">
          <h2 className="text-3xl font-semibold text-[#E8ECF8]">Not sure which service fits?</h2>
          <p className="mx-auto mt-4 max-w-[70ch] text-[#A8B3CF]">
            Start with the situation. We will help identify whether the issue is architecture, governance, delivery control, or leadership alignment.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-md bg-[#F5B544] px-8 py-3 font-medium text-[#0B1020] transition-colors hover:bg-[#ffd27e]">
            Start a conversation
          </Link>
        </section>
      </div>
    </section>
  );
}
