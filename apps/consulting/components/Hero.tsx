import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroVideo = '/media/hero-execution-risk.mp4';

const noisePoints = [
  { left: '8%', top: '68%', delay: '0s' },
  { left: '16%', top: '40%', delay: '0.3s' },
  { left: '24%', top: '58%', delay: '0.7s' },
  { left: '34%', top: '44%', delay: '1.1s' },
  { left: '43%', top: '55%', delay: '0.5s' },
  { left: '52%', top: '36%', delay: '1.4s' },
  { left: '63%', top: '47%', delay: '0.9s' },
  { left: '74%', top: '31%', delay: '1.6s' },
  { left: '86%', top: '25%', delay: '0.2s' },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B1020] py-20 md:py-24">
      <video className="absolute inset-0 h-full w-full object-cover opacity-20" autoPlay muted loop playsInline aria-hidden="true">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(200,164,93,0.22),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="space-y-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8B3CF]">When technology execution becomes enterprise risk</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#E8ECF8] md:text-6xl">Your program is not failing because of technology. It is failing because of structure.</h1>
          <p className="max-w-[78ch] text-lg leading-relaxed text-[#A8B3CF]">Architecture fragments. Vendors optimise locally. Decision ownership dissolves under pressure. We help investors and leadership teams find where control broke — and restore it before delivery risk becomes enterprise risk.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#C8A45D] bg-[#111827] px-8 py-3 text-white transition-colors hover:bg-[#1F2937]">Start a conversation <ArrowRight size={20} /></Link>
            <Link href="/approach" className="inline-flex items-center justify-center rounded-md border border-[#2A3559] px-8 py-3 text-[#E8ECF8] transition-colors hover:bg-[#111831]">See how we work</Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-[#2A3559] bg-[#111831]/75 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Regression signal view</p>
          <div className="mt-5 rounded-xl border border-[#2A3559] bg-[#0B1020] p-4">
            <div className="relative h-64 overflow-hidden rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]">
              {noisePoints.map((point, idx) => (
                <span key={`${point.left}-${point.top}-${idx}`} className="absolute h-2.5 w-2.5 rounded-full bg-[#8BA0CC]/80 animate-pulse" style={{ left: point.left, top: point.top, animationDelay: point.delay }} />
              ))}
              <div className="absolute left-[7%] right-[10%] top-[61%] border-t border-dashed border-[#2A3559]" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="signalLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8BA0CC" />
                    <stop offset="50%" stopColor="#E8ECF8" />
                    <stop offset="100%" stopColor="#C8A45D" />
                  </linearGradient>
                </defs>
                <polyline points="8,74 20,62 31,58 43,50 56,45 69,38 82,30 93,22" fill="none" stroke="url(#signalLine)" strokeWidth="1.2" className="[stroke-dasharray:3_2] animate-[dash_5s_linear_infinite]" />
              </svg>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.12em] text-[#A8B3CF]"><span>Noise</span><span>Signal</span><span>Control restored</span></div>
        </aside>
      </div>
    </section>
  );
}
