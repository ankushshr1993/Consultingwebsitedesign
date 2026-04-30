import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroGeometric } from './ui/hero-geometric';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <HeroGeometric
        title1="When technology execution"
        title2="becomes enterprise risk."
      />
      <div className="absolute inset-x-0 bottom-0 pb-12 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex max-w-3xl items-center justify-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">
            <span className="h-px w-8 bg-[#2A3559]" />
            Investor & leadership execution advisory
            <span className="h-px w-8 bg-[#2A3559]" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#4DA3FF] px-8 py-3 text-[#0B1020] transition-all hover:bg-[#7cbaff]"
            >
              Request a risk diagnostic
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/approach"
              className="rounded-md border border-[#2A3559] px-8 py-3 text-[#E8ECF8] transition-all hover:bg-[#111831]"
            >
              Stress-test an execution plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
