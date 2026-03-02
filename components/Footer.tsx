<<<<<<< HEAD:components/Footer.tsx
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';
=======
import { Mail } from 'lucide-react';
>>>>>>> main:src/app/components/Footer.tsx

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">Regression Consulting</h3>
            <p className="text-gray-400">
              Executive operator advisory for qualified teams navigating consequential decisions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
<<<<<<< HEAD:components/Footer.tsx
              <li><Link href="/services" className="hover:text-white transition-colors">Business Strategy</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Market Analysis</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Change Management</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Innovation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/proof" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <Link href="/legal" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </Link>
            </div>
=======
              <li><a href="#services" className="hover:text-white transition-colors">Engagement Model</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Operating Approach</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Qualification Intake</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Primary Contact</h4>
            <a href="mailto:intake@regressionconsulting.com" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={18} />
              intake@regressionconsulting.com
            </a>
>>>>>>> main:src/app/components/Footer.tsx
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2026 Regression Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
