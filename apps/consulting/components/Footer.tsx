import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#2A3559] bg-[#0B1020] py-12 text-[#E8ECF8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <BrandLogo className="mb-4" />
            <p className="text-[#A8B3CF]">
              Operator-led strategy and execution for high-stakes technology delivery.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Services</h4>
            <ul className="space-y-2 text-[#A8B3CF]">
              <li><Link href="/#services" className="transition-colors hover:text-[#E8ECF8]">Execution Planning</Link></li>
              <li><Link href="/#services" className="transition-colors hover:text-[#E8ECF8]">Architecture Blueprint</Link></li>
              <li><Link href="/#services" className="transition-colors hover:text-[#E8ECF8]">Program Governance</Link></li>
              <li><Link href="/#services" className="transition-colors hover:text-[#E8ECF8]">Investor Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Initiatives</h4>
            <ul className="space-y-2 text-[#A8B3CF]">
              <li><Link href="https://defencefund.regressionconsulting.com" className="transition-colors hover:text-[#E8ECF8]">Defence Fund — sector-specific initiative for defence technology founders and investors.</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/regressionconsulting" target="_blank" rel="noreferrer" className="text-[#A8B3CF] transition-colors hover:text-[#4DA3FF]" aria-label="LinkedIn"><Linkedin size={20} /></Link>
              <Link href="https://x.com" target="_blank" rel="noreferrer" className="text-[#A8B3CF] transition-colors hover:text-[#4DA3FF]" aria-label="Twitter"><Twitter size={20} /></Link>
              <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#A8B3CF] transition-colors hover:text-[#4DA3FF]" aria-label="Facebook"><Facebook size={20} /></Link>
              <Link href="mailto:info@regressionconsulting.com" className="text-[#A8B3CF] transition-colors hover:text-[#4DA3FF]" aria-label="Email"><Mail size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2A3559] pt-8 text-center text-sm text-[#A8B3CF]">
          <p>&copy; 2026 Regression Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
