import fs from "fs";
import path from "path";
import matter from "../src/vendor/gray-matter";

export type InsightFrontMatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type Insight = InsightFrontMatter & {
  content: string;
};

function parseInsight(markdown: string): Insight {
  const { data, content } = matter(markdown);

  const frontMatter: InsightFrontMatter = {
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    slug: String(data.slug ?? ""),
  };

  return { ...frontMatter, content };
}

export function getAllInsights(): Insight[] {
  const insightsDir = path.join(process.cwd(), "content/insights");

  if (!fs.existsSync(insightsDir)) return [];

  return fs
    .readdirSync(insightsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const markdown = fs.readFileSync(path.join(insightsDir, file), "utf-8");
      return parseInsight(markdown);
    })
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
