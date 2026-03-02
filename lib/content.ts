import fs from "node:fs";
import path from "node:path";
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

const INSIGHTS_DIRECTORY = path.join(process.cwd(), "content", "insights");

function getInsightMarkdownFiles(): string[] {
  if (!fs.existsSync(INSIGHTS_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(INSIGHTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"));
}

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
  return getInsightMarkdownFiles()
    .map((fileName) => {
      const filePath = path.join(INSIGHTS_DIRECTORY, fileName);
      const markdown = fs.readFileSync(filePath, "utf8");
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
