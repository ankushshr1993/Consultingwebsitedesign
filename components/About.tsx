import { CheckCircle } from 'lucide-react';

const highlights = [
  'Data-driven strategy and execution planning.',
  'Clear milestones, ownership, and accountability.',
  'Hands-on support from discovery to delivery.',
  'Practical recommendations built for real teams.',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-violet-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            About ConsultPro
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We help organizations transform vision into measurable outcomes through strategic advisory, market insight,
            and implementation support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Our mission</h3>
            <p className="text-gray-300 leading-relaxed">
              ConsultPro partners with growing businesses to solve complex challenges and unlock sustainable growth.
              We combine business strategy, technology, and operational excellence to deliver practical results.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Why teams choose us</h3>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
