"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Hi there! I'm a web developer passionate about creating exceptional digital experiences. 
                  I specialize in building efficient and scalable web applications with a strong focus on user experience 
                  and modern best practices.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  My tech stack primarily includes SFCC, C# ASP.NET MVC, Javascript, TypeScript, Node.js, React, and Next.js. 
                  I'm also deeply interested in backend development and database architecture, 
                  always striving to create robust full-stack solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}