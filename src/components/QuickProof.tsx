import React from 'react';
import { FaBrain, FaGlobe, FaMobile } from 'react-icons/fa';

const proofItems = [
  {
    icon: <FaBrain />,
    title: 'AI and automation',
    text: 'Study Mind, Vital Edge Fit, Twin Companion, Planet AI, The AutoBot and Alfalah.',
  },
  {
    icon: <FaGlobe />,
    title: 'Web platforms',
    text: 'Fintech, logistics, analytics, media, CRM, community and retail systems.',
  },
  {
    icon: <FaMobile />,
    title: 'Mobile apps',
    text: 'React Native apps for NFC, directories, finance, restaurants and retail workflows.',
  },
];

const QuickProof: React.FC = () => {
  return (
    <section aria-label="Portfolio summary" className="bg-white py-10 text-gray-900 border-t border-gray-200">
      <div className="container mx-auto grid gap-6 px-6 max-w-6xl md:grid-cols-3">
        {proofItems.map(item => (
          <a
            key={item.title}
            href="#projects"
            className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              {item.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{item.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickProof;
