import React from 'react';
import { FaGithub, FaLinkedin, FaMobileAlt, FaRobot, FaRocket } from 'react-icons/fa';
import { FiArrowUpRight, FiZap, FiDownload } from 'react-icons/fi';
import { calendlyUrl } from '../lib/booking';

const highlights = ['SaaS products', 'AI agents', 'RAG systems', 'Mobile apps', 'Automation'];

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pb-16  overflow-hidden bg-white">
      
      <div className="container mx-auto grid min-h-[calc(100vh-140px)] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-700">
              Abaid Ullah / Available for work
            </span>
          </div>
          
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Full Stack AI <br className="hidden md:block"/> Software Engineer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            I work across web apps, mobile apps, Python backends, AI integrations and automation. My strength is turning product requirements into shipped software that real teams can use.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            {/* <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-8 py-3.5 font-bold text-white transition-all hover:bg-gray-800">
              View Projects
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a> */}
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3.5 font-bold text-gray-900 transition-all hover:bg-gray-50 shadow-sm">
              <FiZap className="text-blue-600" />
              Book a Call
            </a>
            <a href="/Abaid_Ullah_CV.pdf" download="Abaid_Ullah_CV.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3.5 font-bold text-gray-900 transition-all hover:bg-gray-50 shadow-sm">
              <FiDownload className="text-gray-700" />
              Download CV
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span 
                key={item} 
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-lg lg:ml-auto relative">
          <div className="relative mx-auto flex min-h-[500px] items-center justify-center">
            {/* Orbits */}
            <div className="hero-orbit absolute h-[380px] w-[380px] rounded-full border border-gray-200 md:h-[460px] md:w-[460px]">
              <span className="orbit-body orbit-body-moon" />
            </div>
            <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-gray-200 md:h-[380px] md:w-[380px]" />

            {/* Profile Image */}
            <div className="relative h-80 w-80 rounded-full p-2 bg-white border border-gray-200 shadow-xl md:h-80 md:w-80 z-10">
              <div className="h-full w-full overflow-hidden rounded-full bg-gray-100">
                <img
                  src="/abaid-ullah.jpg"
                  alt="Abaid Ullah"
                  className="h-full w-full object-cover filter contrast-125"
                />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-6 top-16 bg-white border border-gray-200 shadow-lg rounded-xl p-4 z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-100 text-blue-600"><FaRobot size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-gray-900">AI Systems</p>
                  <p className="text-xs font-medium text-gray-500">RAG / agents</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-28 bg-white border border-gray-200 shadow-lg rounded-xl p-4 z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-purple-100 text-purple-600"><FaMobileAlt size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-gray-900">SaaS Products</p>
                  <p className="text-xs font-medium text-gray-500">Web / Mobile</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-2 bg-white border border-gray-200 shadow-lg rounded-xl p-4 z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-green-100 text-green-600"><FaRocket size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-gray-900">MVP to Launch</p>
                  <p className="text-xs font-medium text-gray-500">Fast execution</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 relative z-20">
            <a href="https://github.com/abaidabbott" target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white border border-gray-200 text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-50 shadow-sm" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abaidabbott" target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white border border-gray-200 text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-50 shadow-sm" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
