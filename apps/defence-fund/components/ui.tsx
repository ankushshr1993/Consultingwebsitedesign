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
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
} & ClassNameProp) {
  return (
    <section className={cx('relative overflow-hidden border-b border-slate-800 bg-[#030303]', className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08]" />
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
      </div>
    </section>
  );
}

export function Footer({ children, className }: { children?: ReactNode } & ClassNameProp) {
  return (
    <footer className={cx('border-t border-slate-800', className)}>
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-400">{children}</div>
    </footer>
  );
}

export function Section({ title, children, className }: { title: string; children: ReactNode } & ClassNameProp) {
  return (
    <section className={cx('mx-auto max-w-5xl px-6 py-10', className)}>
      <h2 className="mb-4 text-xl font-medium text-slate-100">{title}</h2>
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}
