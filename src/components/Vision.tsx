import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCogs, FaShieldAlt, FaChartLine, FaRocket, FaBrain, FaTools, FaTrophy } from 'react-icons/fa';

const VisionMission: React.FC = () => {
    return (
        <section id="vision-mission" className="py-20 dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-900 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gray-200/20 to-slate-300/10 dark:from-gray-700/20 dark:to-slate-800/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-slate-200/20 to-gray-300/10 dark:from-slate-700/20 dark:to-gray-800/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full text-sm font-medium tracking-wide mb-4">
                            Startup-Focused Developer
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center justify-center mb-8"
                    >
                        <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl mr-6">
                            <FaLightbulb className="text-3xl text-gray-100 dark:text-gray-900" />
                        </div>
                        <h2 className="md:text-5xl text-3xl font-bold tracking-tight">
                            My Vision & Approach
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        I thrive in product-based environments, especially startups with bold ideas. From concept to deployment,
                        I've built feature-rich apps across diverse domains—all tackled solo, end-to-end.
                    </motion.p>
                </div>

                {/* What I Do Best Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-20"
                >
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-8">
                            <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl mr-6">
                                <FaRocket className="text-2xl text-gray-100 dark:text-gray-900" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                What I Do Best
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <FaCogs className="text-2xl" />,
                                    title: "End-to-End Ownership",
                                    description: "Take complete ownership of projects and ship them from scratch to production"
                                },
                                {
                                    icon: <FaBrain className="text-2xl" />,
                                    title: "Detective-Level Debugging",
                                    description: "Debug like a detective—leveraging docs, GPT, Medium, and YouTube for solutions"
                                },
                                {
                                    icon: <FaChartLine className="text-2xl" />,
                                    title: "Continuous Growth",
                                    description: "Constantly evolving with Python and AI/ML as my next frontier"
                                },
                                {
                                    icon: <FaTools className="text-2xl" />,
                                    title: "Strategic Problem-Solving",
                                    description: "Problem-solve using divide-and-conquer thinking for complex challenges"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="bg-gray-900 dark:bg-gray-100 p-3 rounded-lg w-fit mb-4">
                                        <div className="text-gray-100 dark:text-gray-900">{item.icon}</div>
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Success Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-20"
                >
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-8">
                            <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl mr-6">
                                <FaTrophy className="text-2xl text-gray-100 dark:text-gray-900" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                A Win I'm Proud Of
                            </h3>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                                I solved a challenge where <span className="font-bold text-gray-900 dark:text-gray-100">developers had previously struggled</span>:
                                building a plugin for a video streaming app that mimicked screen sharing without using a screenshare prompt.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                This involved <span className="font-semibold">custom Nylas & Dyte integration</span> and creative engineering solutions.
                                The client said it was exactly what they'd envisioned—finally realized.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 italic text-center">
                                    "This was exactly what we envisioned—finally realized!" - Client Feedback
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* My Style Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-8">
                            <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl mr-6">
                                <FaShieldAlt className="text-2xl text-gray-100 dark:text-gray-900" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                My Working Style
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <div className="bg-gray-900 dark:bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Independent</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Work autonomously with full project ownership</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-900 dark:bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Continuous Learning</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Always learning and adapting to new technologies</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gray-900 dark:bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Fast Adaptation</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Quick to adapt and implement solutions</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-lg">
                                I strongly believe in discipline and hard work as the foundation of meaningful progress. These principles drive me to consistently meet milestones while maintaining clarity and focus. My approach is rooted in structured learning—breaking down complex challenges into actionable steps and executing with precision. I don’t rely on external assistance; instead, I leverage my own strategies, technical expertise, and persistence to architect and deliver robust systems independently.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Domain Expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                            Domains I've Conquered Solo
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            Feature-rich applications built end-to-end across diverse industries
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {[
                            { name: "Chit Funds", icon: "💰" },
                            { name: "Agro Finance", icon: "🌾" },
                            { name: "NFC Management", icon: "📱" },
                            { name: "Employee Tracking", icon: "👥" },
                            { name: "Food Delivery", icon: "🍕" }
                        ].map((domain, index) => (
                            <motion.div
                                key={domain.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-3xl mb-3">{domain.icon}</div>
                                <div className="text-sm font-medium">{domain.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionMission;