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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A3559] bg-[#0B1020]/92 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <BrandLogo compact className="text-[#E8ECF8]" />
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.href === '/contact'
                    ? 'rounded-md border border-[#C8A45D] bg-[#111827] px-4 py-2 text-[14px] font-medium leading-none tracking-[0.015em] text-white transition-colors hover:bg-[#1F2937]'
                    : `text-[14px] font-medium leading-none tracking-[0.015em] transition-colors ${active ? 'border-b border-[#C8A45D] pb-0.5 text-[#E8ECF8]' : 'text-[#A8B3CF] hover:text-[#E8ECF8]'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <button onClick={() => setMobileMenuOpen((s) => !s)} className="p-2 md:hidden text-[#A8B3CF] hover:text-[#E8ECF8]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="space-y-2 pb-5 md:hidden">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`block rounded-md px-3 py-3 text-[13px] font-medium leading-none tracking-[0.015em] transition-colors ${active ? 'bg-[#111831] text-[#E8ECF8]' : 'text-[#A8B3CF] hover:bg-[#111831] hover:text-[#E8ECF8]'}`}>
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
