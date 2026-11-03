import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-colophon border-t border-[var(--color-border)] bg-[var(--color-ground)] py-12 text-[var(--color-ink)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a className="colophon-contact" href="mailto:info@regressionconsulting.com">info@regressionconsulting.com</a>
        <div className="mb-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <BrandLogo className="mb-4" />
            <p className="text-[var(--color-muted)]">Operator-led strategy and execution for high-stakes technology delivery.</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs tracking-normal text-[var(--color-muted)]">Navigate</h2>
            <ul className="space-y-2 text-[var(--color-muted)]">
              <li><Link href="/services" className="transition-colors hover:text-[var(--color-ink)]">What We Do</Link></li>
              <li><Link href="/approach" className="transition-colors hover:text-[var(--color-ink)]">How We Work</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-[var(--color-ink)]">Who We Are</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-[var(--color-ink)]">Start a Conversation</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs tracking-normal text-[var(--color-muted)]">Specialist verticals</h2>
            <p className="mb-3 text-sm text-[var(--color-muted)]">A specialist Regression vertical applying our execution-risk lens to defence technology, dual-use innovation, and resilient technology ecosystems.</p>
            <Link href="https://deftech.regressionconsulting.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-ink)] underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent)]">
              DefTech &amp; Strategic Resilience
            </Link>
          </div>

          <div>
            <h2 className="mb-4 text-xs tracking-normal text-[var(--color-muted)]">Connect</h2>
            <div className="space-y-3 text-[var(--color-muted)]">
              <Link href="https://www.linkedin.com/in/ankush-shr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]" aria-label="Ankush Sharma on LinkedIn"><Linkedin size={18} />LinkedIn</Link>
              <Link href="mailto:info@regressionconsulting.com" className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]" aria-label="Email"><Mail size={18} />info@regressionconsulting.com</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-muted)]">
          <p>&copy; 2026 Regression Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
