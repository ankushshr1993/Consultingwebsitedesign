import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header } from '@regression/ui';
import { defenceMetadata } from '../../../packages/config/src';
import { siteMetadata } from './metadata';
import './globals.css';

export const metadata: Metadata = siteMetadata;

const links = [
  ['/', 'Thesis'],
  ['/focus', 'Focus'],
  ['/criteria', 'Criteria'],
  ['/team', 'Team'],
  ['/intake', 'Intake'],
  ['/legal', 'Legal']
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header title={defenceMetadata.siteName} subtitle={defenceMetadata.description} />
        <nav className="mx-auto flex max-w-5xl gap-5 px-6 py-5 text-sm text-slate-300">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()} Regression Defence Tech. Informational content only.</Footer>
      </body>
    </html>
  );
}
