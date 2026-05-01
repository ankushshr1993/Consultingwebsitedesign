import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const noisePoints = [
  { x: 8, y: 70 },
  { x: 18, y: 34 },
  { x: 24, y: 64 },
  { x: 34, y: 44 },
  { x: 41, y: 60 },
  { x: 52, y: 38 },
  { x: 61, y: 50 },
  { x: 74, y: 30 },
  { x: 82, y: 42 },
  { x: 90, y: 24 },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B1020] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(200,164,93,0.18),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="space-y-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">When technology execution becomes enterprise risk</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#E8ECF8] md:text-6xl">
            Your program is not failing because of technology. It is failing because of structure.
          </h1>
          <p className="max-w-[78ch] text-lg leading-relaxed text-[#A8B3CF]">
            Architecture fragments. Vendors optimise locally. Decision ownership dissolves under pressure. We help investors and leadership teams find where control broke — and restore it before delivery risk becomes enterprise risk.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#C8A45D] bg-[#111827] px-8 py-3 text-white transition-colors hover:bg-[#1F2937]">
              Start a conversation
              <ArrowRight size={20} />
            </Link>
            <Link href="/approach" className="inline-flex items-center justify-center rounded-md border border-[#2A3559] px-8 py-3 text-[#E8ECF8] transition-colors hover:bg-[#111831]">
              See how we work
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-[#2A3559] bg-[#111831]/70 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Regression signal view</p>
          <div className="mt-5 rounded-xl border border-[#2A3559] bg-[#0B1020] p-4">
            <div className="relative h-64">
              {noisePoints.map((point, idx) => (
                <span key={`${point.x}-${point.y}-${idx}`} className="absolute h-2.5 w-2.5 rounded-full bg-[#8BA0CC]/80" style={{ left: `${point.x}%`, top: `${point.y}%` }} />
              ))}
              <div className="absolute left-[6%] right-[6%] top-[58%] h-px border-t border-dashed border-[#2A3559]" />
              <div className="absolute left-[6%] right-[6%] top-[55%] h-[2px] rotate-[-14deg] bg-gradient-to-r from-[#C8A45D]/60 via-[#E8ECF8] to-[#C8A45D]" />
              <span className="absolute left-[10%] top-[64%] text-[11px] font-mono uppercase tracking-[0.12em] text-[#8BA0CC]">noise</span>
              <span className="absolute right-[24%] top-[32%] text-[11px] font-mono uppercase tracking-[0.12em] text-[#C8A45D]">signal</span>
              <span className="absolute right-[8%] top-[19%] text-[11px] font-mono uppercase tracking-[0.12em] text-[#E8ECF8]">control restored</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
