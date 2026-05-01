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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#030303] text-white antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
