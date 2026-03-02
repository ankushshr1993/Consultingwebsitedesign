import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">Regression Consulting</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-6 py-2 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all">Qualification Intake</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="block bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-6 py-2 rounded-md hover:from-indigo-600 hover:to-rose-600 transition-all text-center">Qualification Intake</a>
          </div>
        )}
      </nav>
    </header>
  );
}
