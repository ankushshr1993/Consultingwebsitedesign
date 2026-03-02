import { TrendingUp, Target, Users, Lightbulb, BarChart3, Shield } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const services = [
  {
    icon: TrendingUp,
    title: 'Decision Support Sprints',
    description: 'Structured analysis and operator briefs for critical decisions where speed and downside control matter.',
  },
  {
    icon: Target,
    title: 'Go-to-Market Pressure Testing',
    description: 'Challenge assumptions, tighten positioning, and identify where execution risk is highest before launch.',
  },
  {
    icon: Users,
    title: 'Leadership Operating Cadence',
    description: 'Design practical weekly and monthly rhythms so priorities, owners, and blockers are visible and enforced.',
  },
  {
    icon: Lightbulb,
    title: 'Initiative Scoping',
    description: 'Define clear boundaries, success criteria, and kill conditions before teams over-invest in low-yield work.',
  },
  {
    icon: BarChart3,
    title: 'Execution Diagnostics',
    description: 'Pinpoint where plans are breaking across pipeline, handoffs, and accountability, then map corrective actions.',
  },
  {
    icon: Shield,
    title: 'Risk and Tradeoff Reviews',
    description: 'Surface non-obvious operational, commercial, and organizational risks with explicit tradeoff recommendations.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Engagement Model
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Focused advisory engagements for executive teams that need decision quality and execution discipline, not generic strategy decks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative min-h-[14rem]"
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

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Who this is for</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Founder-led and executive-led teams making time-sensitive decisions.</li>
              <li>Organizations with a clear owner for implementation.</li>
              <li>Leaders open to direct challenge and prioritization tradeoffs.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Who this is not for</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Teams seeking outsourced execution or staff augmentation.</li>
              <li>Organizations without decision rights or executive sponsorship.</li>
              <li>Exploratory engagements without a defined business priority.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
