import { ReactNode } from 'react';

type ClassNameProp = { className?: string };

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export function SharedSiteHero({
  eyebrow = 'Regression Defence Tech',
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
  metrics
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  metrics?: Array<{ label: string; value: string }>;
} & ClassNameProp) {
  return (
    <section className={cx('relative overflow-hidden border-b border-slate-800 bg-[#030303]', className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08]" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
        <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20" />
        <div className="absolute -top-28 left-[5%] h-52 w-[30rem] rotate-12 rounded-full border border-white/10 bg-gradient-to-r from-indigo-500/15 to-transparent blur-sm" />
        <div className="absolute bottom-[-5rem] right-[0%] h-40 w-[24rem] -rotate-12 rounded-full border border-white/10 bg-gradient-to-r from-rose-500/15 to-transparent blur-sm" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta}
            {secondaryCta}
          </div>
        )}
        {!!metrics?.length && (
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/15 bg-white/5 p-3 text-left">
                <p className="text-xs uppercase tracking-wider text-slate-400">{metric.label}</p>
                <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function Footer({ children, className }: { children?: ReactNode } & ClassNameProp) {
  return (
    <footer className={cx('border-t border-white/10', className)}>
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400">{children}</div>
    </footer>
  );
}

export function Section({ title, children, className }: { title: string; children: ReactNode } & ClassNameProp) {
  return (
    <section className={cx('mx-auto max-w-6xl px-6 py-10 sm:py-14', className)}>
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-slate-100">{title}</h2>
      <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-li:text-slate-300">{children}</div>
    </section>
  );
}
