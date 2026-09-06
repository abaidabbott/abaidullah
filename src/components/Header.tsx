import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { GiNightSky, GiSun } from "react-icons/gi";
import { calendlyUrl } from '../lib/booking';

const Header: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="dark:bg-black dark:text-white bg-white text-black px-4 py-3 static w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3" aria-label="Abaid Ullah home">
          <span className="text-xl font-bold bg-black text-white rounded-full p-2 dark:bg-white dark:text-black">AU</span>
          <span className="leading-tight"><span className="block font-bold">Abaid Ullah</span><span className="text-xs text-gray-600 dark:text-gray-300">@abaidabbott</span></span>
        </a>
        <button type="button" className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul className="hidden md:flex space-x-4">
          <li><a href="#about" className="block py-2 px-4 hover:underline">About</a></li>
          <li><a href="#vision-mission" className="block py-2 px-4 hover:underline">Vision</a></li>
          <li><a href="#skills" className="block py-2 px-4 hover:underline">Skills</a></li>
          <li><a href="#projects" className="block py-2 px-4 hover:underline">Projects</a></li>
          <li><a href="#contact" className="block py-2 px-4 hover:underline">Contact</a></li>
          <li><a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-gray-900 px-4 py-2 text-white dark:bg-white dark:text-black">Book Call</a></li>
          <li>
            <button className="block py-2 px-4 hover:underline" onClick={toggleTheme} aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === 'light' ? <GiNightSky size={24} color='black' /> : <GiSun size={24} color='white' />}
            </button>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isMobileMenuOpen ? 'translate-x-0 visible' : '-translate-x-full invisible'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="dark:bg-black dark:text-white bg-white text-black w-64 h-full p-4 relative">
          <ul className="flex flex-col space-y-4">
            <li><a href="#about" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#vision-mission" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Vision</a></li>
            <li><a href="#skills" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Skills</a></li>
            <li><a href="#projects" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Projects</a></li>
            <li><a href="#contact" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Contact</a></li>
            <li><a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-gray-900 px-4 py-2 text-white dark:bg-white dark:text-black" onClick={toggleMobileMenu}>Book Call</a></li>

          </ul>
          <div className="md:hidden flex justify-between bottom-5 absolute w-full " style={{ margin: "-20px" }} >
            <button className="py-2 px-4 hover:underline w-full" onClick={toggleTheme} aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === 'light' ? <GiNightSky size={24} color='black' /> : <GiSun size={24} color='white' />}
            </button>
            <button onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Left to Close Drawer" : "right to Open drawer"}
            >
              {isMobileMenuOpen ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
