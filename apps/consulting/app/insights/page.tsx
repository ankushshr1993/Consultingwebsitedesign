import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | Regression Consulting',
  robots: {
    index: false,
    follow: false,
  },
};

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-semibold text-[#E8ECF8]">Insights</h1>
      <p className="text-[#A8B3CF]">Insights are currently shared directly during client conversations.</p>
    </section>
  );
}
