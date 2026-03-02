import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-black to-rose-500/10 p-10">
        <p className="text-indigo-300 text-sm uppercase tracking-wider mb-3">Professional Consulting</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn strategic intent into measurable outcomes.</h1>
        <p className="text-gray-300 max-w-3xl mb-8">
          ConsultPro helps leadership teams define priorities, deliver transformation programs, and scale execution with confidence.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/services" className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-6 py-3 rounded-md inline-flex items-center gap-2">
            Explore Services <ArrowRight size={18} />
          </Link>
          <Link to="/approach" className="border border-white/20 px-6 py-3 rounded-md text-white hover:bg-white/5">See Our Approach</Link>
        </div>
      </div>
    </section>
  );
}
