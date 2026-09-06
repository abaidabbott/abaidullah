import { calendlyUrl } from "../lib/booking";
import { getWhatsAppUrl } from "../lib/contact";
// import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { TbClockHour4 } from "react-icons/tb";
import Chatbot from './chatbot/chatbot';
import { Linkedin } from 'lucide-react';
// import { useChatbotContext } from './chatbot/chatbot-provider';

const Contact: React.FC = () => {
  // const state = useChatbotContext()
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Basic validation
  //   if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
  //     alert('Please fill in all fields.');
  //     return;
  //   }

  //   // Assuming all fields are valid, construct the mailto link
  //   const subject = 'Message from Contact Form';
  //   const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  //   const mailToLink = `mailto:bestabaidullahbutt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  //   // Redirect to mail client
  //   window.location.href = mailToLink;
  // };


  return (
    <section id="contact" className="py-20 dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl text-3xl font-bold mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Open a direct channel for applied AI, product engineering, and forward-deployed work.
          </p>
        </div>

        <div className="mb-12 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white dark:bg-white dark:text-gray-900">Book a call with Abaid Ullah</a>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 dark:border-gray-600 dark:text-white">
            Open WhatsApp
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-4">
              <div className='bg-gray-900 dark:bg-gray-100 rounded-xl shadow-sm p-4'>
                <FaMapMarkerAlt size={24} className="text-gray-100 dark:text-gray-900" />
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Lahore%2C+Punjab%2C+Pakistan" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Lahore, Punjab, Pakistan
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className='bg-gray-900 dark:bg-gray-100 rounded-xl shadow-sm p-4'>
                <FaEnvelope size={24} className="text-gray-100 dark:text-gray-900" />
              </div>
              <a href="mailto:bestabaidullahbutt@gmail.com" className="text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors">bestabaidullahbutt@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className='bg-gray-900 dark:bg-gray-100 rounded-xl shadow-sm p-4'>
                <FaGithub size={24} className="text-gray-100 dark:text-gray-900" />
              </div>
              <a href="https://github.com/abaidabbott" className="text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors">github.com/abaidabbott</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className='bg-gray-900 dark:bg-gray-100 rounded-xl shadow-sm p-4'>
                <Linkedin size={24} className="text-gray-100 dark:text-gray-900" />
              </div>
              <a href="https://www.linkedin.com/in/abaidabbott" className="text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors">linkedin.com/in/abaidabbott</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className='bg-gray-900 dark:bg-gray-100 rounded-xl shadow-sm p-4'>
                <FaWhatsapp size={24} className="text-gray-100 dark:text-gray-900" />
              </div>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Open WhatsApp</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className='bg-gray-900 dark:bg-gray-100 rounded-xl shadow-sm p-4'>
                <TbClockHour4 size={24} className="text-gray-100 dark:text-gray-900" />
              </div>
              <span className="text-lg">Monday - Friday | 12pm - 2am</span>
            </div>
          </div>

          <div className="">
            <Chatbot />

            {/* <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transform transition duration-300 hover:shadow-md">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Name</label>
                <input 
                  type="text" 
                  placeholder='Ex: John Doe' 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder='Ex: yourmail@example.com' 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea 
                  placeholder='Write your message or question here' 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 px-6 py-4 rounded-lg font-semibold transform transition duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 shadow-sm hover:shadow-md"
              >
                Get Started
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
