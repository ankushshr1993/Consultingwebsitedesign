const cadence = [
  ['Week 1-2: Diagnose', 'Stakeholder interviews, KPI baselining, and root-cause mapping.'],
  ['Week 3-4: Design', 'Option development, trade-off analysis, and decision workshops.'],
  ['Week 5-8: Deliver', 'Implementation plans, operating cadence, and pilot activation.'],
  ['Week 9+: Scale', 'Performance reviews, capability transfer, and quarterly optimization cycles.'],
];

export function ApproachPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Approach Cadence</h1>
      <p className="text-gray-300 mb-8">Our cadence keeps teams focused on fast learning loops and accountable execution.</p>
      <div className="space-y-4">
        {cadence.map(([title, text]) => (
          <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="font-semibold text-lg mb-1">{title}</h2>
            <p className="text-gray-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
