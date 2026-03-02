import { ArrowRight } from 'lucide-react';
import { HeroGeometric } from './ui/hero-geometric';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative">
      <HeroGeometric 
        badge="Professional Consulting"
        title1="Transform Your Business"
        title2="Expert Strategic Solutions"
      />
      <div className="absolute bottom-0 left-0 right-0 pb-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-8 py-3 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="border-2 border-white/20 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-all text-center backdrop-blur-sm">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
