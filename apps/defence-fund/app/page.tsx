'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrackedLink } from '../components/tracked-link';

const buttonClass =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

const sectors = [
  { id: 'A1', title: 'Air Dominance', detail: 'Edge autonomy, ISR fusion, and resilient mission routing.' },
  { id: 'B4', title: 'Secure Maritime', detail: 'Persistent sensing and contested-water communication stacks.' },
  { id: 'C2', title: 'Cyber Defence', detail: 'Zero-trust tactical software and hardened command workflows.' },
  { id: 'D7', title: 'Space & Signals', detail: 'Orbital infrastructure and anti-jamming intelligence layers.' }
];

const pathways = [
  {
    label: 'Founder Path',
    title: 'Prototype → Deployable Program',
    copy: 'We convert ambitious defence prototypes into institution-ready companies through milestones, procurement alignment, and compliance architecture.'
  },
  {
    label: 'Investor Path',
    title: 'Noise → High-Conviction Selection',
    copy: 'We filter crowded defence opportunity flow into deeply diligenced, governance-vetted companies with strategic defensibility.'
  }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#03050b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,210,255,0.16),transparent_38%),radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.18),transparent_36%),radial-gradient(circle_at_50%_95%,rgba(244,63,94,0.12),transparent_42%)]" />

      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-20 lg:grid-cols-[1.2fr_1fr] lg:pt-24">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Defence Tech Mission Interface</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Not a slideshow. A living command map for defence capital.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Navigate sectors, activate hotspots, and enter structured pathways for founders and
            investors. This interface is built for depth, not hype.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <TrackedLink
              href="/founder-intake"
              eventName="hero_founder_cta_click"
              className={`${buttonClass} bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400`}
            >
              Enter Founder Path
            </TrackedLink>
            <TrackedLink
              href="/investor-intake"
              eventName="hero_investor_cta_click"
              className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}
            >
              Enter Investor Path
            </TrackedLink>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
            {['Non-linear navigation', 'Hotspot interactions', '3D depth cues', 'Dual audience pathways'].map((metric) => (
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
            <span>Strategic Zones</span>
            <span>Live Map</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map((sector, index) => (
              <motion.button
                key={sector.id}
                whileHover={{ rotateY: index % 2 === 0 ? 10 : -10, rotateX: -5, scale: 1.02, y: -3 }}
                transition={{ type: 'spring', stiffness: 190, damping: 16 }}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0f1c33] p-4 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-rose-300/5 opacity-0 transition group-hover:opacity-100" />
                <p className="relative text-xs tracking-[0.25em] text-cyan-200">Sector {sector.id}</p>
                <h3 className="relative mt-2 text-lg font-medium text-white">{sector.title}</h3>
                <p className="relative mt-2 text-sm text-slate-300">{sector.detail}</p>
                <p className="relative mt-4 text-xs text-cyan-100">Open hotspot ↗</p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {pathways.map((path, idx) => (
            <motion.article
              key={path.label}
              initial={{ opacity: 0, x: idx === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{path.label}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{path.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-300">{path.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b1222] to-[#131126] p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">Choose your next waypoint</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Move through dedicated routes instead of a fixed camera path. Every action opens a new
            layer of diligence, execution, and capital alignment.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/process" className={`${buttonClass} border border-cyan-300/30 text-cyan-100 hover:bg-cyan-500/10`}>
              View Process Map
            </Link>
            <Link href="/thesis" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>
              Read Defence Thesis
            </Link>
            <Link href="/faq" className={`${buttonClass} border border-white/25 text-white hover:bg-white/10`}>
              Open FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
