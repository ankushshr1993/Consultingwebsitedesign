'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', end: true },
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/proof', label: 'Proof' },
  { href: '/legal', label: 'Legal' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, end?: boolean) => {
    if (end) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            ConsultPro
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const active = isActive(item.href, item.end);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.href === '/contact'
                      ? `px-6 py-2 rounded-md transition-all ${active ? 'bg-white text-black' : 'bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600'}`
                      : `transition-colors ${active ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button onClick={() => setMobileMenuOpen((s) => !s)} className="md:hidden text-gray-300 hover:text-white">
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
                  className={`block rounded-md px-3 py-2 transition-colors ${active ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
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
