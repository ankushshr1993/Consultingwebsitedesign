'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', end: true },
  { href: '/services', label: 'What We Do' },
  { href: '/approach', label: 'How We Work' },
  { href: '/about', label: 'Who We Are' },
  { href: '/contact', label: 'Start a Conversation' },
];

const aliases: Record<string, string[]> = {
  '/services': ['/what-we-do'],
  '/approach': ['/how-we-work'],
  '/about': ['/who-we-are'],
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, end?: boolean) => {
    if (end) return pathname === href;
    const candidates = [href, ...(aliases[href] ?? [])];
    return candidates.some((path) => pathname === path || pathname?.startsWith(`${path}/`));
  };

  return (
    <header className="site-masthead fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-ground)]/92 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <BrandLogo compact className="text-[var(--color-ink)]" />
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={item.href === '/contact'
                    ? 'button-primary'
                    : `whitespace-nowrap text-[14px] font-medium leading-none tracking-[0.015em] transition-colors ${active ? 'border-b border-[var(--color-accent)] pb-0.5 text-[var(--color-ink)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <button type="button" aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setMobileMenuOpen((s) => !s)} className="min-h-11 min-w-11 p-2 lg:hidden text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-navigation" onKeyDown={(event) => { if (event.key === 'Escape') { setMobileMenuOpen(false); document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus(); } }} className="space-y-2 pb-5 lg:hidden">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined} onClick={() => setMobileMenuOpen(false)} className={`block rounded-md px-3 py-3 text-[13px] font-medium leading-none tracking-[0.015em] transition-colors ${active ? 'bg-[var(--color-surface)] text-[var(--color-ink)]' : 'text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]'}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
