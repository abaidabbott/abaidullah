import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { calendlyUrl } from '../lib/booking';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 px-4 py-3 text-gray-950 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Abaid Ullah home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gray-900 text-sm font-bold text-white">AU</span>
          <span className="leading-tight">
            <span className="block font-bold text-gray-900">Abaid Ullah</span>
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">AI Software Engineer</span>
          </span>
        </a>
        
        <button type="button" className="rounded-lg p-2 md:hidden text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu} aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <ul className="hidden items-center gap-4 md:flex">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-sm">
              Book Call
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-4 top-16 z-50 rounded-lg border border-gray-200 bg-white p-4 shadow-xl md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-2">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="block rounded-lg px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900" onClick={toggleMobileMenu}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100 mt-2">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-blue-600 px-4 py-3 text-center font-bold text-white shadow-sm" onClick={toggleMobileMenu}>
                Book Call
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Header;
