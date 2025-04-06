"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            I'm always open to new opportunities and interesting projects.
                            Feel free to reach out if you'd like to connect!
                        </p>
                        <div className="flex justify-center items-center space-x-8">
                            <motion.a
                                href="mailto:naonuragg@gmail.com"
                                className="flex flex-col items-center group"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                                    <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">Email</span>
                            </motion.a>

                            <motion.a
                                href="https://github.com/SangminShimGit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center group"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                                    <FaGithub className="text-2xl text-gray-800 dark:text-white" />
                                </div>
                                <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">GitHub</span>
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/in/sangmin-shim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center group"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                                    <FaLinkedin className="text-2xl text-[#0A66C2] dark:text-[#0A66C2]" />
                                </div>
                                <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">LinkedIn</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
