import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaAws, FaMobile, FaBrain, FaRobot } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiFlask, SiMongodb, SiExpress, SiNodedotjs, SiTensorflow, SiPandas, SiNumpy, SiScikitlearn } from 'react-icons/si';

const skillCategories = [
    {
        title: "Python & Backend",
        icon: <FaPython className="text-3xl mb-2" />,
        skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Flask", icon: <SiFlask /> },
        ]
    },
    {
        title: "AI/ML & Data Science",
        icon: <FaBrain className="text-3xl mb-2" />,
        skills: [
            { name: "Pandas", icon: <SiPandas /> },
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "Scikit-learn", icon: <SiScikitlearn /> },
            { name: "TensorFlow", icon: <SiTensorflow /> },
            { name: "RAG Systems", icon: <FaBrain /> },
            { name: "Fine-tuning", icon: <FaRobot /> },
            { name: "Voice Agents", icon: <FaRobot /> },
            { name: "Agentic AI", icon: <FaBrain /> },
        ]
    },
    {
        title: "MERN & Web Stack",
        icon: <FaReact className="text-3xl mb-2" />,
        skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Next.js", icon: <FaReact /> },
            { name: "TypeScript", icon: <FaReact /> },
            { name: "MySQL", icon: <SiExpress /> },
            { name: "PostgreSQL", icon: <SiExpress /> },
            { name: "Firebase", icon: <SiExpress /> },
        ]
    },
    {
        title: "Mobile Development",
        icon: <FaMobile className="text-3xl mb-2" />,
        skills: [
            { name: "React Native", icon: <FaMobile /> },
            { name: "iOS/Android", icon: <FaMobile /> },
            { name: "SQLite", icon: <FaMobile /> },
            { name: "Push Notifications", icon: <FaMobile /> },
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: <FaAws className="text-3xl mb-2" />,
        skills: [
            { name: "AWS (ECS, EC2, S3)", icon: <FaAws /> },
            { name: "Docker", icon: <FaAws /> },
            { name: "CI/CD Pipelines", icon: <FaAws /> },
            { name: "Cloud Functions", icon: <FaAws /> },
            { name: "Git/Github/Gitlab", icon: <FaAws /> },
            { name: "Unit Testing", icon: <FaAws /> },
        ]
    },
    {
        title: "Automation & Integration",
        icon: <FaRobot className="text-3xl mb-2" />,
        skills: [
            { name: "n8n Workflows", icon: <FaRobot /> },
            { name: "Chatbots", icon: <FaRobot /> },
            { name: "API Integration", icon: <FaRobot /> },
            { name: "Workflow Automation", icon: <FaRobot /> },
        ]
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 dark:bg-gray-800 bg-white text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="md:text-5xl text-3xl font-bold mb-6 tracking-tight">
                        Technical Expertise
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Full-stack development with cutting-edge AI/ML integration and modern cloud technologies
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl w-fit mx-auto mb-6 text-gray-100 dark:text-gray-900">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                        className="flex items-center space-x-2 p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-600"
                                    >
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{skill.icon}</span>
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* AI/ML Specializations */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 dark:text-white">
                        AI/ML Specializations
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            "Chatbot Development",
                            "RAG Systems",
                            "Model Fine-tuning",
                            "Voice Agents",
                            "Agentic AI",
                            "n8n Automation",
                            "Data Analysis",
                            "ML Pipelines"
                        ].map((specialization, index) => (
                            <motion.div
                                key={specialization}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
                            >
                                {specialization}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;