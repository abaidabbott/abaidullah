import React from 'react';
import { calendlyUrl } from "../lib/booking";
import { contactEmail, getPhoneContact, linkedInUrl } from "../lib/contact";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { TbClockHour4 } from "react-icons/tb";
import Chatbot from './chatbot/chatbot';

const Contact: React.FC = () => {
  const phone = getPhoneContact();

  return (
    <section id="contact" className="py-24 bg-white text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>
          <h2 className="md:text-5xl text-4xl font-extrabold mb-6 tracking-tight text-gray-900">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Have a project, contract or role in mind? Contact me directly or share the details with the assistant below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          <div className="flex flex-col space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center items-center rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-4 font-bold text-white transition-colors shadow-sm">
                Book a call
              </a>
              <a href={phone.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center items-center rounded-xl border border-gray-300 bg-white px-6 py-4 font-bold text-gray-900 hover:bg-gray-50 transition-colors shadow-sm">
                <FaWhatsapp className="mr-2 text-green-600" size={20} />
                WhatsApp
              </a>
            </div>

            <div className="space-y-6">
              {[
                { icon: <FaEnvelope size={20} className="text-blue-600" />, label: contactEmail, href: `mailto:${contactEmail}` },
                { icon: <FaPhone size={20} className="text-blue-600" />, label: 'Call mobile', href: phone.phoneUrl },
                { icon: <FaGithub size={20} className="text-blue-600" />, label: 'github.com/abaidabbott', href: "https://github.com/abaidabbott" },
                { icon: <FaLinkedin size={20} className="text-blue-600" />, label: 'linkedin.com/in/abaidabbott', href: linkedInUrl },
                // { icon: <FaTwitter size={20} className="text-blue-600" />, label: 'x.com/abaidabbott', href: "https://x.com/abaidabbott" },
                // { icon: <FaFacebook size={20} className="text-blue-600" />, label: 'facebook.com/abaidabbott', href: "https://www.facebook.com/abaidabbott/" },
                { icon: <FaYoutube size={20} className="text-blue-600" />, label: 'youtube.com/@abaidabbott', href: "https://www.youtube.com/@abaidabbott" },
                { icon: <TbClockHour4 size={22} className="text-blue-600" />, label: '40+ hours/week. Available in UK, UAE, USA (CST) and Canada time zones.', href: null }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-5">
                  <div className='bg-blue-50 border border-blue-100 rounded-xl p-3.5 shrink-0'>
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-base font-semibold text-gray-700">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-2 h-full min-h-[500px] shadow-inner">
            <Chatbot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
