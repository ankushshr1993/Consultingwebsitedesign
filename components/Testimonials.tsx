const testimonials = [
  {
    quote:
      'ConsultPro transformed our business strategy and increased our revenue by 150% within just six months.',
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote:
      'Their market analysis insights helped us identify new opportunities that we never would have discovered on our own.',
    name: 'Michael Rodriguez',
    role: 'Founder, GrowthLabs',
  },
  {
    quote:
      'The team delivered exceptional results with clear communication and actionable plans at every step.',
    name: 'Emily Johnson',
    role: 'COO, InnovateCorp',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-rose-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by ambitious teams seeking measurable growth and strategic clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-300 leading-relaxed mb-6">“{item.quote}”</p>
              <div>
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-sm text-gray-400">{item.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
