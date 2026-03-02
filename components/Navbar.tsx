import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/approach', label: 'Approach' },
  { to: '/proof', label: 'Proof' },
  { to: '/legal', label: 'Legal' },
  { to: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            ConsultPro
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  item.to === '/contact'
                    ? `px-6 py-2 rounded-md transition-all ${isActive ? 'bg-white text-black' : 'bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600'}`
                    : `transition-colors ${isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button onClick={() => setMobileMenuOpen((s) => !s)} className="md:hidden text-gray-300 hover:text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
