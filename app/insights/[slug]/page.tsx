export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <section className="max-w-4xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4">Insight: {slug.replace(/-/g, ' ')}</h1>
      <p className="text-gray-300">Detailed insight content can be connected here from a CMS or markdown source.</p>
    </section>
  );
}
