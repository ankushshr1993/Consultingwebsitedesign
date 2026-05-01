import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { Linkedin, Mail } from 'lucide-react';

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
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Navigate</h4>
            <ul className="space-y-2 text-[#A8B3CF]">
              <li><Link href="/what-we-do" className="transition-colors hover:text-[#E8ECF8]">What We Do</Link></li>
              <li><Link href="/how-we-work" className="transition-colors hover:text-[#E8ECF8]">How We Work</Link></li>
              <li><Link href="/who-we-are" className="transition-colors hover:text-[#E8ECF8]">Who We Are</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-[#E8ECF8]">Start a Conversation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Separate initiatives</h4>
            <p className="mb-3 text-sm text-[#A8B3CF]">
              Distinct from the core advisory business.
            </p>
            <Link href="https://deftech.regressionconsulting.com/" target="_blank" rel="noreferrer" className="text-[#E8ECF8] underline decoration-[#4DA3FF] underline-offset-4 hover:text-[#4DA3FF]">
              DefTech Initiative
            </Link>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#A8B3CF]">Connect</h4>
            <div className="space-y-3 text-[#A8B3CF]">
              <Link href="https://www.linkedin.com/company/regressionconsulting" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-[#4DA3FF]" aria-label="LinkedIn"><Linkedin size={18} />LinkedIn</Link>
              <Link href="mailto:info@regressionconsulting.com" className="flex items-center gap-2 transition-colors hover:text-[#4DA3FF]" aria-label="Email"><Mail size={18} />info@regressionconsulting.com</Link>
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
