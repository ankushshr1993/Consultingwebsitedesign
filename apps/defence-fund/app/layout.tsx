import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/ui';
import { siteMetadata } from './metadata';
import { Navigation } from '../components/navigation';
import { Analytics } from '../components/analytics';
import './globals.css';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Analytics />
        <Footer className="site-colophon">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Regression Defence Tech. Informational content only.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://regressionconsulting.com" className="hover:text-[var(--color-ink)]">Consulting</Link>
              <Link href="/legal" className="hover:text-[var(--color-ink)]">Legal</Link>
              <Link href="/privacy-policy" className="hover:text-[var(--color-ink)]">Privacy</Link>
              <Link href="/terms" className="hover:text-[var(--color-ink)]">Terms</Link>
            </div>
          </div>
        </Footer>
      </body>
    </html>
  );
}
