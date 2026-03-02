type ReactMarkdownProps = {
  children: string;
};

export default function ReactMarkdown({ children }: ReactMarkdownProps) {
  const blocks = children.split(/\n\n+/).map((block) => block.trim()).filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => {
        if (block.startsWith("### ")) {
          return <h3 key={index}>{block.replace("### ", "")}</h3>;
        }

        if (block.startsWith("## ")) {
          return <h2 key={index}>{block.replace("## ", "")}</h2>;
        }

        if (block.startsWith("# ")) {
          return <h1 key={index}>{block.replace("# ", "")}</h1>;
        }

        const lines = block.split("\n");
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={index}>
              {lines.map((line, lineIndex) => (
                <li key={lineIndex}>{line.replace(/^-\s/, "")}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block}</p>;
      })}
    </>
  );
}
