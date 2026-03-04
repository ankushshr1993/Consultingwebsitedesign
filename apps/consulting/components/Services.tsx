import { BarChart3, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Execution Planning & Delivery Readiness',
    description: 'Define scope, milestones, ownership, and operating rhythm. Turn priorities into an executable plan teams can deliver.',
  },
  {
    icon: BarChart3,
    title: 'Architecture & Integration Blueprint',
    description: 'Create a pragmatic target architecture, system boundaries, and integration approach that scales and survives real constraints.',
  },
  {
    icon: TrendingUp,
    title: 'Delivery Control & Program Governance',
    description: 'Establish metrics, cadences, vendor coordination, and escalation paths—so leadership gets predictable outcomes, not surprises.',
  },
  {
    icon: Lightbulb,
    title: 'Investor & Portfolio Technology Support',
    description: 'Support diligence, 100-day plans, and execution turnarounds. Improve confidence in timelines, cost, and delivery capability.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-rose-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Focused engagements that reduce delivery risk, accelerate execution, and improve reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <Icon className="text-indigo-400 mb-4" size={28} />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
