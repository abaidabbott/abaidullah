import React from 'react';
import { FaBrain, FaGlobe, FaMobile } from 'react-icons/fa';
import { calendlyUrl } from '../lib/booking';

const proofItems = [
  {
    icon: <FaGlobe />,
    title: 'AI and automation',
    text: 'Study Mind, Vital Edge Fit, Twin Companion, Planet AI, The AutoBot and Alfalah.',
  },
  {
    icon: <FaMobile />,
    title: 'Web apps',
    text: 'Fintech, logistics, analytics, media, CRM and community platforms shipped for real teams.',
  },
  {
    icon: <FaBrain />,
    title: 'Mobile apps',
    text: 'Published React Native apps for NFC, business directories and community finance.',
  },
];

const QuickProof: React.FC = () => {
  return (
    <section aria-label="Quick portfolio summary" className="bg-white py-10 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-3">
          {proofItems.map((item) => (
            <a
              key={item.title}
              href="#projects"
              className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gray-900 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-100"
            >
              <div className="mb-4 inline-flex rounded-lg bg-gray-900 p-3 text-xl text-white dark:bg-white dark:text-gray-900">
                {item.icon}
              </div>
              <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.text}</p>
            </a>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Official portfolio: abaidbutt.website. Main username: @abaidabbott. Available for global teams and remote collaboration.
          </span>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white dark:bg-white dark:text-gray-900"
          >
            Open Calendly
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickProof;
