import type { LucideIcon } from 'lucide-react';
import { ClipboardCheck, Compass, GanttChartSquare, Handshake, SearchCheck } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { trackEvent } from '../../lib/analytics';

type Service = {
  icon: LucideIcon;
  name: string;
  problemContext: string;
  engagementDuration: string;
  artifactDeliverables: string[];
  outcomeNarrative: string;
  engagementBoundary: string;
};

const mandatedServices: Service[] = [
  {
    icon: ClipboardCheck,
    name: 'Execution Stabilisation',
    problemContext:
      'Critical initiatives are slipping because decision rights are unclear, cross-functional dependencies are unmanaged, and delivery signals are inconsistent across teams.',
    engagementDuration: '4-6 weeks',
    artifactDeliverables: [
      'Current-state execution heatmap and blocker log',
      'Stabilisation playbook with role clarity and escalation paths',
      'Weekly operating cadence template with KPI scorecard',
    ],
    outcomeNarrative:
      'Leaders gain immediate control over execution risk, teams align on priorities, and delivery confidence is restored through predictable operating rhythms.',
    engagementBoundary:
      'Focused on stabilising execution governance and priorities; does not include full PMO outsourcing or long-term transformation delivery.',
  },
  {
    icon: Compass,
    name: 'Architecture & Integration Blueprint',
    problemContext:
      'Technology landscapes have grown fragmented, creating integration bottlenecks, duplicate capabilities, and uncertainty about target-state architecture decisions.',
    engagementDuration: '6-8 weeks',
    artifactDeliverables: [
      'Current-state application and integration landscape map',
      'Target-state architecture blueprint with domain boundaries',
      'Sequenced integration roadmap with transition principles',
    ],
    outcomeNarrative:
      'Stakeholders align on a practical target architecture that reduces integration risk, improves interoperability, and enables faster solution delivery.',
    engagementBoundary:
      'Provides architecture and integration direction; excludes implementation engineering, migration execution, and managed platform operations.',
  },
  {
    icon: SearchCheck,
    name: 'Technology Due Diligence',
    problemContext:
      'Investment or acquisition decisions require a clear view of technical debt, security posture, platform scalability, and near-term remediation exposure.',
    engagementDuration: '3-5 weeks',
    artifactDeliverables: [
      'Technical diligence findings report and risk register',
      'Debt, security, and scalability assessment summary',
      'Remediation cost-range model with prioritised actions',
    ],
    outcomeNarrative:
      'Decision-makers receive an evidence-backed view of technology risk and value potential, enabling confident transaction and investment choices.',
    engagementBoundary:
      'Assessment-only scope for decision support; does not include legal advice, penetration testing, or remediation programme delivery.',
  },
  {
    icon: GanttChartSquare,
    name: '100-Day Value Creation Plan',
    problemContext:
      'Post-deal or post-strategy momentum is often lost without a tightly sequenced plan that links strategic intent to executable value initiatives.',
    engagementDuration: '4-6 weeks',
    artifactDeliverables: [
      'Value lever baseline and opportunity sizing model',
      '100-day initiative plan with owners, milestones, and dependencies',
      'Executive dashboard framework for value tracking',
    ],
    outcomeNarrative:
      'Organisations move from strategy to disciplined execution with visible early wins and a quantified path toward measurable value realisation.',
    engagementBoundary:
      'Covers planning and mobilisation for the first 100 days; excludes downstream execution staffing and multi-year transformation management.',
  },
  {
    icon: Handshake,
    name: 'Governance & Vendor Alignment',
    problemContext:
      'Delivery outcomes are constrained by misaligned governance forums, unclear vendor accountability, and contracts that do not reinforce performance.',
    engagementDuration: '5-7 weeks',
    artifactDeliverables: [
      'Governance operating model and RACI alignment',
      'Vendor performance framework with service-level scorecards',
      'Commercial and accountability alignment recommendations',
    ],
    outcomeNarrative:
      'Internal leaders and external partners align around transparent accountability, faster decision cycles, and outcomes-driven collaboration.',
    engagementBoundary:
      'Advisory support for governance and vendor alignment; excludes contract renegotiation execution and day-to-day vendor management.',
  },
];

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="relative min-h-[20rem]">
      <div className="relative h-full rounded-xl border border-white/10 p-2 bg-black/40 backdrop-blur-sm">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col gap-5 rounded-lg border border-white/5 bg-[#030303]/80 p-6 shadow-lg">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 rounded-lg flex items-center justify-center border border-white/10">
            <Icon className="text-indigo-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-white">{service.name}</h3>

          <ServiceDetail label="Problem context" value={service.problemContext} />
          <ServiceDetail label="Engagement duration" value={service.engagementDuration} />
          <ServiceDetailList label="Artifact deliverables" items={service.artifactDeliverables} />
          <ServiceDetail label="Outcome narrative" value={service.outcomeNarrative} />
          <ServiceDetail label="Engagement boundary" value={service.engagementBoundary} />
        </div>
      </div>
    </article>
  );
}

type ServiceDetailProps = {
  label: string;
  value: string;
};

function ServiceDetail({ label, value }: ServiceDetailProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-indigo-300 uppercase tracking-wide mb-2">{label}</p>
      <p className="text-sm text-gray-300 leading-relaxed">{value}</p>
    </div>
  );
}

type ServiceDetailListProps = {
  label: string;
  items: string[];
};

function ServiceDetailList({ label, items }: ServiceDetailListProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-indigo-300 uppercase tracking-wide mb-2">{label}</p>
      <ul className="space-y-2 list-disc list-inside text-sm text-gray-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Mandated Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Structured advisory services designed to de-risk execution, align stakeholders, and create measurable value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative min-h-[14rem]"
                onClick={() => trackEvent('insight_open', { props: { insight: service.title } })}
              >
                <div className="relative h-full rounded-xl border border-white/10 p-2 bg-black/40 backdrop-blur-sm">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative flex h-full flex-col gap-6 rounded-lg border border-white/5 bg-[#030303]/80 p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 rounded-lg flex items-center justify-center border border-white/10">
                      <Icon className="text-indigo-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
