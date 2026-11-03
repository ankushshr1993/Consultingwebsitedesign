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
    <section className={cx('relative overflow-hidden border-b border-slate-800 bg-[var(--color-ground)]', className)}>
      <div className="site-container defence-hero">
        <div><h1>{title}</h1><p className="hero-lede">{subtitle}</p><div className="hero-actions">{primaryCta}{secondaryCta}</div>
        {!!metrics?.length && <dl>{metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}</div>
      </div>
    </section>
  );
}

export function Footer({ children, className }: { children?: ReactNode } & ClassNameProp) {
  return (
    <footer className={cx('border-t border-white/10', className)}>
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[var(--color-muted)]">{children}</div>
    </footer>
  );
}

export function Section({ title, children, className }: { title: string; children: ReactNode } & ClassNameProp) {
  return (
    <section id={title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className={cx('mx-auto max-w-6xl px-6 py-10 sm:py-14', className)}>
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">{title}</h2>
      <div className="prose prose-invert max-w-none prose-p:text-[var(--color-muted)] prose-li:text-[var(--color-muted)]">{children}</div>
    </section>
  );
}
