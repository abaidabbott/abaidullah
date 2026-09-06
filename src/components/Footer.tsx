import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-medium tracking-wide">
          <span className="text-gray-900 font-bold">Abaid Ullah</span> · @abaidabbott
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/abaidabbott" className="hover:text-blue-600 transition-colors duration-200" aria-label="LinkedIn Profile">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/abaidabbott" className="hover:text-gray-900 transition-colors duration-200" aria-label="GitHub Profile">
            <FaGithub size={20} />
          </a>
          <a href="https://x.com/abaidabbott" className="hover:text-blue-400 transition-colors duration-200" aria-label="Twitter Profile">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.youtube.com/@abaidabbott" className="hover:text-red-600 transition-colors duration-200" aria-label="YouTube Channel">
            <FaYoutube size={20} />
          </a>
        </div>
        <p className="text-xs font-semibold">&copy; {new Date().getFullYear()} Abaid Ullah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;