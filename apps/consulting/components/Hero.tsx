import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroGeometric } from './ui/hero-geometric';

export function Hero() {
  return (
    <section id="home" className="relative">
      <HeroGeometric
        title1="When technology execution"
        title2="becomes enterprise risk."
      />
      <div className="absolute bottom-0 left-0 right-0 pb-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex max-w-3xl items-center justify-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gray-300/90">
            <span className="h-px w-8 bg-white/30" />
            Investor & leadership execution advisory
            <span className="h-px w-8 bg-white/30" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(99,102,241,0.25)]"
            >
              Request an advisory conversation
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/#services"
              className="border-2 border-white/20 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-all text-center backdrop-blur-sm"
            >
              View our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
