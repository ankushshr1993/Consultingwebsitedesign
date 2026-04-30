import { BarChart3, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    step: '01',
    title: 'Diagnose',
    description: 'Execution perspective for deployment decisions, operating plans, and risk visibility.',
  },
  {
    icon: BarChart3,
    step: '02',
    title: 'Reset',
    description: 'Decision rights, platform boundaries, and governance controls for complex programs.',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Stabilize',
    description: 'Cadence, accountability, and leadership reporting where execution confidence has eroded.',
  },
  {
    icon: Lightbulb,
    step: '04',
    title: 'Fortify',
    description: 'Execution continuity through leadership transition, portfolio shifts, or operating model realignment.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[#0B1020] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-14 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF] mb-4">How we work</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#E8ECF8] mb-4">Signal over noise, step by step.</h2>
          <p className="mx-auto max-w-[72ch] text-lg text-[#A8B3CF]">
            Structured interventions for investors and leadership teams managing execution-critical environments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-xl border border-[#2A3559] bg-[#111831]/70 p-6">
                <p className="font-mono text-3xl text-[#4DA3FF]">{service.step}</p>
                <div className="mb-4 mt-4 inline-flex rounded-lg border border-[#2A3559] bg-[#0B1020] p-2">
                  <Icon className="text-[#A8B3CF]" size={22} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#E8ECF8]">{service.title}</h3>
                <p className="text-[#A8B3CF]">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
