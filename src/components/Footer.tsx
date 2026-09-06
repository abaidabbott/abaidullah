import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-gray-900 dark:text-gray-100 bg-gray-800 text-gray-100 py-12">
      <div className="container mx-auto px-4 text-center flex items-center md:justify-between justify-center gap-8 flex-wrap">
        <p className="text-md md:text-lg">
          Abaid Ullah · @abaidabbott
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/abaidabbott" className="hover:text-gray-300 transition-colors duration-200" aria-label="LinkedIn Profile">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/abaidabbott" className="hover:text-gray-300 transition-colors duration-200" aria-label="GitHub Profile">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/abaidabbott" className="hover:text-gray-300 transition-colors duration-200" aria-label="Twitter Profile">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com/@abaidabbott" className="hover:text-gray-300 transition-colors duration-200" aria-label="YouTube Channel">
            <FaYoutube size={24} />
          </a>
        </div>
        <p className="text-sm font-semibold">&copy; {new Date().getFullYear()} Abaid Ullah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;