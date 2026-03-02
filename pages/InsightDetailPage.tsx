type InsightDetailPageProps = {
  slug: string;
};

export function InsightDetailPage({ slug }: InsightDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#030303] text-white px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <a href="/insights" className="text-sm text-white/70 hover:text-white">← Back to insights</a>
        <p className="mt-6 text-xs uppercase text-white/50">{new Date().toLocaleDateString()}</p>
        <h1 className="mt-2 text-4xl font-semibold">Insight: {slug.replace(/-/g, ' ')}</h1>
        <p className="mt-3 text-white/70">
          Detailed memo content for this insight can be connected to a CMS or markdown source.
        </p>
      </article>
    </main>
  );
}
