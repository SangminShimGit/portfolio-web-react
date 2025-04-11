"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import forever21Image from '@/assets/images/forever21_home.png';
import xxiImage from '@/assets/images/xxi.jpg';
import warehouseImage from '@/assets/images/warehouse.png';

const projects = [
  {
    title: "Salesforce Commerce Cloud",
    description: "Migration from MS Commerce Server to Salesforce Commerce Cloud",
    tech: ["Salesforce Commerce Cloud", "C# ASP.NET MVC", "Restful API", "Javascript", "jQuery", "MSSQL"],
    image: forever21Image,
    link: "",
    github: ""
  },
  {
    title: "Headless e-Commerce website with MS Commerce Server",
    description: "Headless e-Commerce website with MS Commerce Server",
    tech: ["MS Commerce Server", "C# ASP.NET MVC", "Restful API", "Javascript", "jQuery", "MSSQL"],
    image: xxiImage,
    link: "",
    github: ""
  },
  {
    title: "PWA Warehouse Utility",
    description: "Take a photos of a product and upload it to the warehouse database",
    tech: ["Next.js", "React 18", "TypeScript", "Tailwind CSS"],
    image: warehouseImage,
    link: "https://pwa-warehouse-mvp-v1.vercel.app/",
    github: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <div className="bg-gray-200 dark:bg-gray-700 w-full h-full" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.link || project.github) && (
                    <div className="flex space-x-4">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                            >
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800 dark:text-gray-400"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
