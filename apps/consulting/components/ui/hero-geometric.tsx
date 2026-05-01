'use client';

import { motion } from 'motion/react';

const points = [
  [8, 72], [14, 65], [22, 69], [29, 57], [35, 61], [43, 47], [51, 45], [58, 36], [66, 33], [74, 26], [82, 21], [90, 16],
  [18, 78], [27, 66], [39, 59], [48, 52], [62, 41], [71, 38], [79, 31], [86, 25],
];

function HeroGeometric({ title1, title2 }: { title1?: string; title2?: string }) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#090d1a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(77,163,255,0.16),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(245,181,68,0.12),transparent_45%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(168,179,207,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(168,179,207,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />

      <motion.svg
        viewBox="0 0 100 100"
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[12%] h-[70vh] w-[58vw] min-w-[320px] opacity-90"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {points.map(([x, y], idx) => (
          <circle key={idx} cx={x} cy={y} r="0.9" fill="#A8B3CF" opacity="0.65" />
        ))}
        <motion.line
          x1="6"
          y1="76"
          x2="94"
          y2="14"
          stroke="#F5B544"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: 'easeInOut' }}
        />
      </motion.svg>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#A8B3CF]">Signal over noise</p>
          <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-[#E8ECF8] sm:text-6xl md:text-7xl">
            <span className="block">{title1}</span>
            <span className="mt-2 block text-[#F5B544]">{title2}</span>
          </h1>
          <p className="mt-7 max-w-[68ch] text-base leading-relaxed text-[#A8B3CF] sm:text-lg">
            Regression Consulting helps investors and executive teams recover delivery control, architecture coherence, and governance clarity when execution risk threatens enterprise value.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090d1a] to-transparent" />
    </section>
  );
}

export { HeroGeometric };
