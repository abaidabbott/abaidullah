import React from 'react';
import { FaTrophy, FaShieldAlt, FaBriefcase, FaCode, FaRocket } from 'react-icons/fa';

const domains = [
  'Fintech & Capital Markets',
  'Agricultural Tech',
  'Enterprise SaaS',
  'Healthcare AI',
  'E-Commerce & Logistics'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 text-gray-900 border-t border-gray-200 border-b">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
              Engineering for Scale & Impact
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-6">
              Senior Full Stack AI Developer
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              I partner with startups and enterprise teams to architect, build, and scale complex software systems. Whether it's integrating applied AI, building robust backend architectures, or delivering polished mobile experiences, I take full ownership of the technical lifecycle—from initial spec to production deployment.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              My approach is highly pragmatic. I prioritize clean architecture, maintainability, and direct business value. I operate autonomously, making high-level technical decisions while executing the hands-on engineering required to bring ambitious products to market.
            </p>

            {/* <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaTrophy className="text-blue-600" /> Business Impact & Problem Solving
            </h3> */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative">
              <div className="absolute top-0 right-8 -mt-3 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                Client Success
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients don't just need code; they need scalable solutions that drive their business forward. Here is how my engineering translates to industry impact:
              </p>
              <ul className="text-sm text-gray-600 space-y-3 list-disc pl-5">
                <li><strong>Unblocking Product Growth:</strong> Solved a critical video-streaming limitation that had stalled a major platform's launch, engineering a custom bypass to enable seamless user acquisition.</li>
                <li><strong>Securing Digital Assets:</strong> Architected encrypted NFC authentication flows, ensuring bulletproof security and compliance for fintech and physical access applications.</li>
                <li><strong>Automating Manual Workflows:</strong> Deployed robust applied AI pipelines (RAG for document intelligence, Computer Vision for media) that drastically reduced operational overhead and unlocked new product tiers.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Leadership</h3>
            <div className="grid gap-6 mb-12">
              <div className="flex gap-5 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Autonomous Execution</h4>
                  <p className="text-sm leading-relaxed text-gray-600">Proven ability to take vague product requirements, design the technical architecture, and ship production-ready systems independently.</p>
                </div>
              </div>
              
              <div className="flex gap-5 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600">
                  <FaCode />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Complex Problem Solving</h4>
                  <p className="text-sm leading-relaxed text-gray-600">Specialized in unblocking critical engineering challenges—from custom WebRTC integrations to secure hardware protocols.</p>
                </div>
              </div>

              <div className="flex gap-5 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600">
                  <FaRocket />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Adaptive Engineering</h4>
                  <p className="text-sm leading-relaxed text-gray-600">Technology-agnostic approach, rapidly adopting the right tools for the job, with a strong focus on Python, modern TypeScript, and AI ecosystems.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaBriefcase className="text-blue-600" /> Industry Experience
            </h3>
            <div className="flex flex-wrap gap-3">
              {domains.map((domain) => (
                <span key={domain} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
