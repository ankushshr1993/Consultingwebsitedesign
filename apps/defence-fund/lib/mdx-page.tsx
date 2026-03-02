import fs from 'node:fs';
import path from 'node:path';
import { Section } from '../../../packages/ui/src';

function renderLine(line: string, i: number) {
  if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>;
  if (line.startsWith('- ')) return <li key={i}>{line.slice(2)}</li>;
  return <p key={i}>{line}</p>;
}

export function MdxPage({ title, fileName }: { title: string; fileName: string }) {
  const filePath = path.join(process.cwd(), 'content', fileName);
  const raw = fs.readFileSync(filePath, 'utf8').trim();
  const blocks = raw.split('\n').filter(Boolean);

  return <Section title={title}>{blocks.map((line, i) => renderLine(line, i))}</Section>;
}
