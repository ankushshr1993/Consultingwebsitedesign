const insights = [
  {
    slug: 'market-positioning-playbook',
    title: 'Market Positioning Playbook',
    description: 'A practical framework to sharpen messaging, segment prioritization, and GTM execution.',
    date: '2026-01-11',
  },
  {
    slug: 'operational-efficiency-checklist',
    title: 'Operational Efficiency Checklist',
    description: 'Decision-oriented checklist for improving throughput, ownership clarity, and cycle times.',
    date: '2026-01-03',
  },
  {
    slug: 'change-management-framework',
    title: 'Change Management Framework',
    description: 'A focused approach to adoption planning, resistance mitigation, and leadership alignment.',
    date: '2025-12-19',
  },
];

export function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-white/70 hover:text-white">← Back to home</a>
        <h1 className="mt-4 text-4xl font-semibold">Insights</h1>
        <p className="mt-3 text-white/70">Strategic memos and operating playbooks for consulting-led teams.</p>

        <ul className="mt-10 space-y-5">
          {insights.map((insight) => (
            <li key={insight.slug} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase text-white/50">{new Date(insight.date).toLocaleDateString()}</p>
              <h2 className="mt-2 text-2xl font-medium">{insight.title}</h2>
              <p className="mt-2 text-white/70">{insight.description}</p>
              <a href={`/insights/${insight.slug}`} className="mt-4 inline-block text-sm text-[#9ae6b4] hover:text-[#baf7cd]">
                Read memo →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
