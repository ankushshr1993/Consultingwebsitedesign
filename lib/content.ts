import matter from "gray-matter";

export type InsightFrontMatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type Insight = InsightFrontMatter & {
  content: string;
};

const insightModules = import.meta.glob<string>("/content/insights/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseInsight(markdown: string): Insight {
  const { data, content } = matter(markdown);

  const frontMatter: InsightFrontMatter = {
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    slug: String(data.slug ?? ""),
  };

  return {
    ...frontMatter,
    content,
  };
}

export function getAllInsights(): Insight[] {
  return Object.values(insightModules)
    .map((markdown) => parseInsight(markdown))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightBySlug(slug: string): Insight | undefined {
  return getAllInsights().find((insight) => insight.slug === slug);
}

export function getInsightMetadata(slug: string) {
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight Not Found",
      description: "The requested insight could not be found.",
    };
  }

  return {
    title: `${insight.title} | Insights`,
    description: insight.description,
  };
}
