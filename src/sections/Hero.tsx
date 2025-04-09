"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from '@/assets/images/profile.png';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex min-h-screen items-center justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600">Sangmin Shim</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <motion.button 
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full">
            <Image
              src={profileImage}
              alt="Profile"
              width={300} 
              height={300} 
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 