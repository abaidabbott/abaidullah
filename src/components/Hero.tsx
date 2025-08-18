import React, { Suspense } from 'react';
import { FaStar, FaPython, FaReact, FaMobile, FaBrain, FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="home" className="py-20 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-200/30 to-gray-300/20 dark:from-slate-700/20 dark:to-gray-800/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-200/30 to-slate-300/20 dark:from-gray-700/20 dark:to-slate-800/10 rounded-full blur-3xl"></div>
            </div>


            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-left relative z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-2 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full text-sm font-medium tracking-wide">
                                Full-Stack Developer & AI Engineer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="md:text-6xl text-4xl font-bold mb-6 leading-tight tracking-tight"
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                                Abaid Ullah
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                        >
                            Crafting intelligent solutions with{' '}
                            <span className="font-semibold text-gray-900 dark:text-gray-100">Python</span>,{' '}
                            <span className="font-semibold text-gray-900 dark:text-gray-100">MERN Stack</span>,{' '}
                            <span className="font-semibold text-gray-900 dark:text-gray-100">React Native</span>, and{' '}
                            <span className="font-semibold text-gray-900 dark:text-gray-100">AI/ML</span> technologies
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Let's Collaborate
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-gray-900 dark:hover:border-gray-100 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                            >
                                View Projects
                            </a>
                        </motion.div>

                        {/* Tech Stack Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center space-x-6"
                        >
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">TECH STACK</span>
                            <div className="flex space-x-4">
                                <FaPython className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-110 transition-all duration-200" />
                                <FaReact className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-110 transition-all duration-200" />
                                <FaMobile className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-110 transition-all duration-200" />
                                <FaBrain className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-110 transition-all duration-200" />
                                <FaAws className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-110 transition-all duration-200" />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                    >
                        <Suspense fallback={<div className="h-16 w-16 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700"></div>}>
                            <ImageComponent />
                        </Suspense>
                    </motion.div>
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                >
                    <img
                        src={"./abaid-ullah.jpg"}
                        alt="Abaid Abbott"
                        className="rounded-full w-full h-full object-cover"
                    />
                </motion.div> */}

            </div>
        </section>
    );
};

const ImageComponent: React.FC = () => {
    return (
        <div className="relative">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-80 h-80 md:w-96 md:h-96 relative"
            >
                {/* Professional Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-300 dark:to-gray-100 rounded-full p-1">
                    <div className="w-full h-full bg-gray-50 dark:bg-gray-900 rounded-full p-2">
                        <img
                            src={"./abaid-ullah.jpg"}
                            alt="Abaid Abbott"
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Floating Elements */}
                <StarRating />
                <Experience />
                <ProjectSummary />
            </motion.div>
        </div>
    );
};

const StarRating: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -top-4 -right-4 flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
            <div className="flex text-gray-800 dark:text-gray-200 mb-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                ))}
            </div>
            <p className="text-gray-900 dark:text-gray-100 text-xs font-bold">4.9/5.0</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Client Rating</p>
        </motion.div>
    );
};

const ProjectSummary: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 md:block hidden"
        >
            <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">50+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
            </div>
        </motion.div>
    );
};

const Experience: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
            <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">5+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Years Exp</p>
            </div>
        </motion.div>
    );
};

export default Hero;