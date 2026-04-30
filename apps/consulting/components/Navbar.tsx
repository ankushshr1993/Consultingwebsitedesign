'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', end: true },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, end?: boolean) => {
    if (end) {
      return pathname === href;
    }

    return pathname === href || (pathname?.startsWith(`${href}/`) ?? false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A3559] bg-[#0B1020]/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold tracking-tight text-[#E8ECF8]">
            Regression Consulting
          </Link>

          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.href === '/contact'
                      ? `px-5 py-2 rounded-md font-mono text-xs uppercase tracking-[0.16em] transition-all ${active ? 'bg-[#E8ECF8] text-[#0B1020]' : 'bg-[#4DA3FF] text-[#0B1020] hover:bg-[#7cbaff]'}`
                      : `font-mono text-xs uppercase tracking-[0.16em] transition-colors ${active ? 'text-[#E8ECF8]' : 'text-[#A8B3CF] hover:text-[#E8ECF8]'}`
                  }
                >
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
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${active ? 'bg-[#111831] text-[#E8ECF8]' : 'text-[#A8B3CF] hover:bg-[#111831] hover:text-[#E8ECF8]'}`}
                >
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
