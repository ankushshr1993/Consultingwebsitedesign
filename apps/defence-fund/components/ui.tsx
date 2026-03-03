import { ReactNode } from 'react';

type ClassNameProp = { className?: string };

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export function SiteHero({
  eyebrow,
  title,
  subtitle,
  children,
  className
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
} & ClassNameProp) {
  return (
    <section className={cx('relative overflow-hidden border-b border-white/10 bg-[#030303]', className)}>
      <div className="hero-ambient pointer-events-none absolute inset-0">
        <div className="fluid-orb fluid-orb-indigo" />
        <div className="fluid-orb fluid-orb-rose" />
        <div className="fluid-orb fluid-orb-cyan" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-5xl bg-gradient-to-b from-white to-white/85 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-xl">{subtitle}</p>
        {children ? <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div> : null}
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
