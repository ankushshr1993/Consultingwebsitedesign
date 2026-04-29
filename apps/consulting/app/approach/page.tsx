export default function ApproachPage() {
  return (
    <section className="relative bg-black py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-rose-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.12),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(244,114,182,0.1),transparent_38%)]" />

      <div className="relative mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Approach</p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">How we restore execution control.</h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-300">
            Our role is to convert strategic intent into reliable delivery by establishing structural clarity, explicit ownership, and consistent governance.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">01 Diagnose</p>
            <h2 className="text-lg font-semibold text-white">Find where control broke down</h2>
            <p className="text-sm leading-relaxed text-gray-200">
              We assess architecture decisions, delivery mechanics, and governance behavior to identify what is driving execution volatility.
            </p>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">02 Reset</p>
            <h2 className="text-lg font-semibold text-white">Re-establish decision structure</h2>
            <p className="text-sm leading-relaxed text-gray-200">
              We define ownership boundaries, escalation paths, and governance cadence so leadership has clear control over delivery outcomes.
            </p>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">03 Stabilise</p>
            <h2 className="text-lg font-semibold text-white">Embed operating discipline</h2>
            <p className="text-sm leading-relaxed text-gray-200">
              We help teams maintain execution rhythm, reporting integrity, and architecture coherence through high-stakes growth and transition periods.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-4 shadow-[0_14px_36px_rgba(0,0,0,0.32)]">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">Working model</p>
          <p className="text-gray-200">Direct access to decision-makers.</p>
          <p className="text-gray-200">Short cycles with visible leadership checkpoints.</p>
          <p className="text-gray-200">Practical outputs that teams can execute immediately.</p>
        </section>
      </div>
    </section>
  );
}
