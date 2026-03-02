import { ArrowRight } from 'lucide-react';
import { HeroGeometric } from './ui/hero-geometric';
import { trackEvent } from '../../lib/analytics';

export function Hero() {
  return (
    <section id="home" className="relative">
      <HeroGeometric
        badge="Regression Consulting"
        title1="Operator-Level Advisory"
        title2="for High-Stakes Decisions"
      />
      <div className="absolute bottom-0 left-0 right-0 pb-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-300 mb-6 max-w-3xl mx-auto">
            We work with leaders who need clarity, sequencing, and accountable execution support—not broad discovery workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              onClick={() => trackEvent('cta_diagnostic_click')}
              className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            <a href="#about" className="border-2 border-white/20 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-all text-center backdrop-blur-sm">
              See Fit Criteria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
