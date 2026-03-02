const serviceDefinitions = [
  ['Strategy Architecture', 'Prioritize growth bets, define strategic choices, and align executive teams around a single operating narrative.'],
  ['Go-To-Market Design', 'Segment opportunities, clarify positioning, and sequence launch plans to improve pipeline quality and conversion.'],
  ['Operating Model Evolution', 'Reshape governance, decision rights, and planning rhythms to increase speed without creating organizational drag.'],
  ['Transformation PMO', 'Stand up workstreams, risk controls, and KPI instrumentation to keep complex initiatives on track.'],
];

export function ServicesPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Service Definitions</h1>
      <p className="text-gray-300 mb-8">Each engagement area is scoped to produce a clear deliverable, ownership model, and measurable business effect.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {serviceDefinitions.map(([title, text]) => (
          <article key={title} className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="text-gray-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
