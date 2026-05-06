'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useMemo, useState } from 'react';
import { TrackedLink } from '../components/tracked-link';

type Mode = 'Founder' | 'Investor' | 'Operator';

const buttonClass =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

const sectors = [
  { id: 'A1', title: 'Air Dominance', detail: 'Edge autonomy, ISR fusion, and resilient mission routing.' },
  { id: 'B4', title: 'Secure Maritime', detail: 'Persistent sensing and contested-water communication stacks.' },
  { id: 'C2', title: 'Cyber Defence', detail: 'Zero-trust tactical software and hardened command workflows.' },
  { id: 'D7', title: 'Space & Signals', detail: 'Orbital infrastructure and anti-jamming intelligence layers.' }
];

const modeCopy: Record<Mode, { subtitle: string; primary: string; secondary: string }> = {
  Founder: {
    subtitle: 'Prototype-to-deployability with procurement-ready governance and compliance architecture.',
    primary: '/founder-intake',
    secondary: '/process'
  },
  Investor: {
    subtitle: 'Noise-filtered pipeline with diligence transparency, risk controls, and long-horizon capital discipline.',
    primary: '/investor-intake',
    secondary: '/thesis'
  },
  Operator: {
    subtitle: 'Mission-operations perspective with systems-readiness checkpoints and execution scorecards.',
    primary: '/process',
    secondary: '/resources'
  }
};

export default function Page() {
  const [mode, setMode] = useState<Mode>('Founder');
  const [activeSector, setActiveSector] = useState(sectors[0].id);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const gridGlow = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(56,189,248,0.2), transparent 38%)`;

  const selectedSector = useMemo(
    () => sectors.find((sector) => sector.id === activeSector) ?? sectors[0],
    [activeSector]
  );

  const activeMode = modeCopy[mode];

  return (
    <main
      className="relative overflow-hidden bg-[#03050b]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: gridGlow }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,210,255,0.16),transparent_38%),radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.18),transparent_36%),radial-gradient(circle_at_50%_95%,rgba(244,63,94,0.12),transparent_42%)]" />

      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-20 lg:grid-cols-[1.25fr_1fr] lg:pt-24">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Defence Tech Mission Interface</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Command-layer capital for defence and dual-use systems.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{activeMode.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {(['Founder', 'Investor', 'Operator'] as Mode[]).map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  mode === item
                    ? 'border-cyan-300 bg-cyan-500/15 text-cyan-100'
                    : 'border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                {item} View
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <TrackedLink
              href={activeMode.primary}
              eventName="hero_primary_mode_cta_click"
              className={`${buttonClass} bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400`}
            >
              Open Primary Route
            </TrackedLink>
            <Link href={activeMode.secondary} className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>
              Open Secondary Route
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
            {['Free orbit flow', 'Hotspot zones', 'Asymmetric rhythm', 'Dynamic viewpoints'].map((metric) => (
              <div key={metric} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-200">
                {metric}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-[#090f1d] to-[#0d1323] p-5 [perspective:1300px]"
        >
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cyan-100/80">
            <span>Strategic Map</span>
            <span>Minimap</span>
          </div>

          <div className="mb-4 rounded-xl border border-white/10 bg-[#0a1324] p-3">
            <p className="text-xs tracking-[0.2em] text-cyan-200">ACTIVE SECTOR</p>
            <p className="mt-2 text-lg font-medium text-white">{selectedSector.title}</p>
            <p className="mt-1 text-sm text-slate-300">{selectedSector.detail}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map((sector, index) => (
              <motion.button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                whileHover={{ rotateY: index % 2 === 0 ? 10 : -10, rotateX: -5, scale: 1.02, y: -3 }}
                transition={{ type: 'spring', stiffness: 190, damping: 16 }}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left ${
                  activeSector === sector.id ? 'border-cyan-300/70 bg-[#12223d]' : 'border-white/15 bg-[#0f1c33]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-rose-300/5 opacity-0 transition group-hover:opacity-100" />
                <p className="relative text-xs tracking-[0.25em] text-cyan-200">Sector {sector.id}</p>
                <h3 className="relative mt-2 text-lg font-medium text-white">{sector.title}</h3>
                <p className="relative mt-2 text-sm text-slate-300">{sector.detail}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Interaction Doctrine</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Game-like control, web-native clarity.</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Multiple entry points instead of a fixed camera path.</li>
              <li>• Micro-interactions and active-state feedback across every zone.</li>
              <li>• 2D overlays preserved so users are never lost in pure 3D motion.</li>
              <li>• Distinct pacing between sections to break visual rhythm.</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b1222] to-[#131126] p-8"
          >
            <h2 className="text-2xl font-semibold text-white">Choose your next waypoint</h2>
            <p className="mt-3 text-slate-300">
              Enter the intake, audit the process map, or review thesis depth before moving to
              execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/founder-intake" className={`${buttonClass} border border-cyan-300/30 text-cyan-100 hover:bg-cyan-500/10`}>
                Founder Intake
              </Link>
              <Link href="/investor-intake" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>
                Investor Intake
              </Link>
              <Link href="/thesis" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>
                Defence Thesis
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
