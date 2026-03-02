import Link from 'next/link';

const insights = [
  { slug: 'market-positioning-playbook', title: 'Market Positioning Playbook' },
  { slug: 'operational-efficiency-checklist', title: 'Operational Efficiency Checklist' },
  { slug: 'change-management-framework', title: 'Change Management Framework' },
];

export default function InsightsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6">Insights</h1>
      <ul className="space-y-3">
        {insights.map((item) => (
          <li key={item.slug}>
            <Link className="text-indigo-300 hover:text-indigo-200 underline" href={`/insights/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
