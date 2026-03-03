import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/ui';
import { siteMetadata } from './metadata';
import './globals.css';

export const metadata: Metadata = siteMetadata;

const links = [
  ['/', 'Home'],
  ['/thesis', 'Thesis'],
  ['/criteria', 'Criteria'],
  ['/team', 'Team'],
  ['/contact-us', 'Contact Us']
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#030303]/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-5 px-6 py-5 text-sm text-slate-300">
            {links.map(([href, label]) => (
              <Link key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </nav>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()} Regression Defence Tech. Informational content only.</Footer>
      </body>
    </html>
  );
}
