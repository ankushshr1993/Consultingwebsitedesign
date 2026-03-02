import { TrendingUp, Target, Users, Lightbulb, BarChart3, Shield } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { trackEvent } from '../../lib/analytics';

const services = [
  {
    icon: TrendingUp,
    title: 'Business Strategy',
    description: 'Develop comprehensive strategies to drive growth and competitive advantage in your market.',
  },
  {
    icon: Target,
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to identify opportunities and optimize positioning.',
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Guide your organization through transformational changes with proven methodologies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description: 'Foster innovation and develop new products, services, and business models.',
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Enhance operational efficiency and maximize your organizational performance.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate risks to protect your business interests.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive consulting solutions tailored to your unique business challenges
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
