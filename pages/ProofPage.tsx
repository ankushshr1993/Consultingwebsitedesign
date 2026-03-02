const proofNarratives = [
  {
    client: 'B2B SaaS Scale-up',
    outcome: 'Lifted net revenue retention from 101% to 118% in two quarters.',
    story: 'Redesigned customer segmentation and aligned product packaging with high-expansion cohorts.'
  },
  {
    client: 'Regional Healthcare Network',
    outcome: 'Reduced administrative cycle time by 32%.',
    story: 'Introduced a new operating cadence across clinical ops and centralized shared services.'
  },
  {
    client: 'Industrial Manufacturer',
    outcome: 'Unlocked $8.4M annualized margin improvement.',
    story: 'Deployed plant-level performance controls and procurement renegotiation playbooks.'
  }
];

export function ProofPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Proof Narratives</h1>
      <p className="text-gray-300 mb-8">Representative outcomes from recent consulting engagements.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {proofNarratives.map((item) => (
          <article key={item.client} className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="font-semibold mb-2">{item.client}</h2>
            <p className="text-indigo-300 mb-2">{item.outcome}</p>
            <p className="text-gray-300 text-sm">{item.story}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
