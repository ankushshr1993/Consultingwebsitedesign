import Link from 'next/link';
import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
              Regression Consulting
            </h3>
            <p className="text-gray-400">
              Operator-led strategy and execution for high-stakes technology delivery.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#services" className="hover:text-white transition-colors">Execution Planning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Architecture Blueprint</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Program Governance</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Investor Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="https://defencefund.regressionconsulting.com" className="hover:text-white transition-colors">Defence Fund</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/regressionconsulting" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn"><Linkedin size={24} /></Link>
              <Link href="https://x.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Twitter"><Twitter size={24} /></Link>
              <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Facebook"><Facebook size={24} /></Link>
              <Link href="mailto:info@regressionconsulting.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Email"><Mail size={24} /></Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2026 Regression Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
