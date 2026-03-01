import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">ConsultPro</h3>
            <p className="text-gray-400">
              Transforming businesses through expert consulting and strategic insights.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Business Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Change Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Innovation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
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