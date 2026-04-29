import { BarChart3, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Investment-side execution review',
    description: 'Execution perspective for deployment decisions, operating plans, and risk visibility.',
  },
  {
    icon: BarChart3,
    title: 'Architecture governance reset',
    description: 'Decision rights, platform boundaries, and governance controls for complex programs.',
  },
  {
    icon: TrendingUp,
    title: 'Delivery stability advisory',
    description: 'Cadence, accountability, and leadership reporting where execution confidence has eroded.',
  },
  {
    icon: Lightbulb,
    title: 'Leadership transition support',
    description: 'Execution continuity through CTO/CIO change, portfolio shifts, or operating model realignment.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-rose-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Advisory focus areas
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Targeted engagements for investors and leadership teams managing execution-critical environments.
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
