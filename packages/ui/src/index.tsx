import { ReactNode } from 'react';

type ClassNameProp = { className?: string };

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export function Header({
  title,
  subtitle,
  className,
  eyebrow = 'Regression Defence Tech'
}: { title: string; subtitle?: string; eyebrow?: string } & ClassNameProp) {
  return (
    <header className={cx('border-b border-slate-800 bg-slate-950', className)}>
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-100">{title}</h1>
        {subtitle ? <p className="mt-2 max-w-3xl text-sm text-slate-300">{subtitle}</p> : null}
      </div>
    </header>
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

export function Button({ href, children, className }: { href: string; children: ReactNode } & ClassNameProp) {
  return (
    <a href={href} className={cx('inline-flex rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:bg-slate-800', className)}>
      {children}
    </a>
  );
}
