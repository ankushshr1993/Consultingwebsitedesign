import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroVideo =
  'https://cdn.pixabay.com/video/2021/08/04/83815-582673704_large.mp4';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B1020] py-20 md:py-24">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(200,164,93,0.22),transparent_45%)]" />
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

        <aside className="rounded-2xl border border-[#2A3559] bg-[#111831]/75 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Regression signal view</p>
          <div className="mt-5 overflow-hidden rounded-xl border border-[#2A3559] bg-[#0B1020]">
            <iframe
              title="Signal and control animation"
              src="https://hyperframes.heygen.com/"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-3 flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.12em] text-[#A8B3CF]">
            <span>Noise</span>
            <span>Signal</span>
            <span>Control restored</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
