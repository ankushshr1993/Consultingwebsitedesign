import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">ConsultPro</h3>
            <p className="text-gray-400">Transforming businesses through expert consulting and strategic insights.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Strategy Architecture</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Go-To-Market Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Operating Model Evolution</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Transformation PMO</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/approach" className="hover:text-white transition-colors">Approach</Link></li>
              <li><Link to="/proof" className="hover:text-white transition-colors">Proof Narratives</Link></li>
              <li><Link to="/legal" className="hover:text-white transition-colors">Legal</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="X">
                <Twitter size={24} />
              </a>
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="mailto:contact@consultpro.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2026 ConsultPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
