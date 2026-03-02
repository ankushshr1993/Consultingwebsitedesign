type GrayMatterResult = {
  data: Record<string, string>;
  content: string;
};

export default function matter(input: string): GrayMatterResult {
  const normalized = input.replace(/\r\n/g, "\n");

  if (!normalized.startsWith("---\n")) {
    return { data: {}, content: normalized };
  }

  const endIndex = normalized.indexOf("\n---\n", 4);

  if (endIndex === -1) {
    return { data: {}, content: normalized };
  }

  const frontMatterBlock = normalized.slice(4, endIndex);
  const content = normalized.slice(endIndex + 5).trim();

  const data = frontMatterBlock.split("\n").reduce<Record<string, string>>((acc, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return acc;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "");

    if (key) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return { data, content };
}
