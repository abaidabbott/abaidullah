import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { contactEmail, getPhoneContact } from '../lib/contact';

const Footer: React.FC = () => {
  const phone = getPhoneContact();

  return (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-medium tracking-wide">
          <span className="text-gray-900 font-bold">Abaid Ullah</span> · @abaidabbott
        </p>
        <nav aria-label="Engineering guides" className="flex flex-col gap-2 text-sm">
          <a href="/ecommerce-forward-deployed-engineering.html" className="hover:text-blue-600 underline underline-offset-4">E-commerce forward deployed engineering</a>
          <a href="/custom-software-vs-crm-cost.html" className="hover:text-blue-600 underline underline-offset-4">Custom software vs Shopify and CRM costs</a>
          <a href="/engineering-profile.html" className="hover:text-blue-600 underline underline-offset-4">Engineering articles and project experience</a>
        </nav>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <a href={`mailto:${contactEmail}`} className="inline-flex items-center justify-center gap-2 hover:text-blue-600"><FaEnvelope aria-hidden="true" />{contactEmail}</a>
          <a href={phone.phoneUrl} className="inline-flex items-center justify-center gap-2 hover:text-blue-600"><FaPhone aria-hidden="true" />Call mobile</a>
        </div>
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
          <a href="https://www.facebook.com/abaidabbott/" className="hover:text-blue-700 transition-colors duration-200" aria-label="Facebook Profile">
            <FaFacebook size={20} />
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
