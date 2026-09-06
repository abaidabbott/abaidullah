import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth < percentage) {
          return prevWidth + 1;
        } else {
          clearInterval(interval);
          return percentage;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="mb-6">
      <p className="flex justify-between mb-2 text-sm font-medium">
        <span>{label}</span>
        <span>{width}%</span>
      </p>
      <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
        <div
          className="bg-gray-900 dark:bg-gray-100 h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const ProgressBars: React.FC = () => {
  const progressData = [
    { label: 'Senior Full-Stack Development (MERN)', percentage: 95 },
    { label: 'AI/ML & RAG System Integration', percentage: 90 },
    { label: 'Mobile App Development (React Native)', percentage: 92 },
    { label: 'Cloud Architecture & DevOps (AWS)', percentage: 85 },
    { label: 'API Design & Microservices', percentage: 88 },
    { label: 'System Design & Unit Testing', percentage: 85 },
  ];

  return (
    <section className="">
      <div className="container mx-auto md:px-4">
        <div className="space-y-2">
          {progressData.map((progress, index) => (
            <ProgressBar
              key={index}
              label={progress.label}
              percentage={progress.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressBars;