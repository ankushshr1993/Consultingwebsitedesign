import ReactMarkdown from "react-markdown";
import { getInsightBySlug, getInsightMetadata } from "../../../lib/content";
import { useInsightTracking } from "../hooks/useInsightTracking";
import { usePageMetadata } from "../hooks/usePageMetadata";

type InsightDetailPageProps = {
  slug: string;
};

export function InsightDetailPage({ slug }: InsightDetailPageProps) {
  const insight = getInsightBySlug(slug);

  usePageMetadata(getInsightMetadata(slug));
  useInsightTracking(insight?.slug);

  if (!insight) {
    return (
      <main className="min-h-screen bg-[#030303] text-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <a href="/insights" className="text-sm text-white/70 hover:text-white">← Back to insights</a>
          <h1 className="mt-6 text-3xl font-semibold">Insight not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <a href="/insights" className="text-sm text-white/70 hover:text-white">← Back to insights</a>
        <p className="mt-6 text-xs uppercase text-white/50">{new Date(insight.date).toLocaleDateString()}</p>
        <h1 className="mt-2 text-4xl font-semibold">{insight.title}</h1>
        <p className="mt-3 text-white/70">{insight.description}</p>

        <div className="prose prose-invert mt-10 max-w-none leading-7">
          <ReactMarkdown>{insight.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
