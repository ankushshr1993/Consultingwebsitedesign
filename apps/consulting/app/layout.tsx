import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getSiteUrl } from './site-url';
import './globals.css';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Regression Consulting | Technology Execution Risk Advisory',
  description: 'Operator-led advisory for investors, boards, and leadership teams when technology execution becomes enterprise risk.',
  metadataBase: new URL(siteUrl),
  openGraph: { title: 'Regression Consulting', description: 'Operator-led technology execution-risk advisory.', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-ground)] text-[var(--color-ink)] antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" className="pt-20" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
