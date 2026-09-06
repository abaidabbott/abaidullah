import React from 'react';
import { FaClipboardCheck, FaCodeBranch, FaRocket, FaTools } from 'react-icons/fa';

const journey = [
  {
    icon: <FaClipboardCheck />,
    title: '1. Requirements & Spec',
    text: 'Start by understanding the business goal, writing clear specs, flows, and data models.',
  },
  {
    icon: <FaTools />,
    title: '2. Build & MVP',
    text: 'Build the first usable version with the right stack across frontend, backend, and AI integrations.',
  },
  {
    icon: <FaCodeBranch />,
    title: '3. Staging & Iterate',
    text: 'Set up staging for the team to test, report issues, and refine the product with quick feedback loops.',
  },
  {
    icon: <FaRocket />,
    title: '4. Production Handoff',
    text: 'Move the product into production with clean documentation and reliable CI/CD deployment flows.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 text-gray-900 border-t border-gray-200 border-b">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
              About & Journey
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-6">
              Full stack engineer with AI product instincts.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              I describe myself as a Full Stack AI Software Engineer. My work covers web platforms, mobile apps, backend systems, AI integrations and automation. I care about product context, clean execution and building software that solves the real operational problem.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              I can take a rough idea, clarify the flow, choose the stack, and build the first working version. I have worked with international teams and companies across the USA, Canada, Europe, Asia and the UAE.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">From idea to shipped software</h3>
            <div className="grid gap-6">
              {journey.map((item, index) => (
                <div 
                  key={item.title} 
                  className="flex gap-5 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
