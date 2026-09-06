import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaMobile, FaBrain, FaAws, FaRobot } from 'react-icons/fa';
import { SiDjango, SiFastapi } from 'react-icons/si';
import ProgressBars from './ProgressBar';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-900 dark:text-gray-100 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gray-200/20 to-slate-300/10 dark:from-gray-700/20 dark:to-slate-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-slate-200/20 to-gray-300/10 dark:from-slate-700/20 dark:to-gray-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto p-3 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-5xl text-3xl font-bold mb-6 tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Forward-deployed applied AI engineer with 5 years of experience across product architecture, full-stack systems, React Native and AI integrations. I work close to users and teams: clarifying requirements, designing the solution, shipping the product and staying with it through deployment.
          </motion.p>
        </div>
        
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-900 dark:bg-gray-100 p-3 rounded-xl mr-4">
                  <FaReact className="text-gray-100 dark:text-gray-900 text-xl" />
                </div>
                <h3 className="text-xl font-bold">Full-Stack Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I turn unclear product requirements into working systems: technical discovery, architecture, API design, frontend delivery, backend implementation and release planning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-900 dark:bg-gray-100 p-3 rounded-xl mr-4">
                  <FaPython className="text-gray-100 dark:text-gray-900 text-xl" />
                </div>
                <h3 className="text-xl font-bold">Python & Backend Expertise</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I build Python and Node.js backends with FastAPI, Django, Flask, MongoDB, MySQL and PostgreSQL, with enough product context to make the system useful rather than just functional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-900 dark:bg-gray-100 p-3 rounded-xl mr-4">
                  <FaBrain className="text-gray-100 dark:text-gray-900 text-xl" />
                </div>
                <h3 className="text-xl font-bold">AI/ML & Automation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I design applied AI workflows including RAG, GraphRAG, chatbots, computer vision, Nylas integrations, automation agents and LLM-backed product features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-900 dark:bg-gray-100 p-3 rounded-xl mr-4">
                  <FaAws className="text-gray-100 dark:text-gray-900 text-xl" />
                </div>
                <h3 className="text-xl font-bold">Cloud & DevOps</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Extensive experience with AWS services (EC2, S3, Lambda, ECS), Docker containerization, 
                auto-scaling with load balancers, and CI/CD pipelines using GitHub Actions. Payment integration expertise with Stripe.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-0"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Core Competencies
              </h3>
              <ProgressBars />
            </div>
            
            {/* Technology Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h4 className="text-lg font-bold mb-6 text-center text-gray-800 dark:text-white">
                Technology Stack
              </h4>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: <FaPython />, name: "Python", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <SiFastapi />, name: "FastAPI", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <SiDjango />, name: "Django", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <FaReact />, name: "React", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <FaMobile />, name: "React Native", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <FaBrain />, name: "AI/ML", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <FaAws />, name: "AWS", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <FaRobot />, name: "Automation", color: "text-gray-700 dark:text-gray-300" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-sm transition-all duration-200"
                  >
                    <div className={`text-2xl mb-2 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
