'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', end: true },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/how-we-work', label: 'How We Work' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/contact', label: 'Start a Conversation' },
];

const aliases: Record<string, string[]> = {
  '/what-we-do': ['/services'],
  '/how-we-work': ['/approach'],
  '/who-we-are': ['/about'],
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A3559] bg-[#0B1020]/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <BrandLogo className="text-[#E8ECF8]" />
          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);
              return (
                <Link key={item.href} href={item.href} className={item.href === '/contact' ? `px-4 py-2 rounded-md font-mono text-xs uppercase tracking-[0.14em] transition-all ${active ? 'bg-[#E8ECF8] text-[#0B1020]' : 'bg-[#4DA3FF] text-[#0B1020] hover:bg-[#7cbaff]'}` : `font-mono text-xs uppercase tracking-[0.14em] transition-colors ${active ? 'text-[#E8ECF8]' : 'text-[#A8B3CF] hover:text-[#E8ECF8]'}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>
          <button onClick={() => setMobileMenuOpen((s) => !s)} className="md:hidden text-[#A8B3CF] hover:text-[#E8ECF8]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`block rounded-md px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${active ? 'bg-[#111831] text-[#E8ECF8]' : 'text-[#A8B3CF] hover:bg-[#111831] hover:text-[#E8ECF8]'}`}>
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
