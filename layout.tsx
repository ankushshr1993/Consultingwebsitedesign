import type { ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
