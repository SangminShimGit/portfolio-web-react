"use client";
import { motion } from "framer-motion";
import { 
  SiSalesforce,
  SiJavascript,
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { DiDotnet, DiMsqlServer } from "react-icons/di";

const skills = [
  { name: "Salesforce Commerce Cloud", icon: SiSalesforce, color: "text-blue-500" },
  { name: "C# ASP.NET MVC", icon: DiDotnet, color: "text-[#106DAE]" },
  { name: "Javascript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Material UI", icon: SiMui, color: "text-blue-500" },
  { name: "MSSQL", icon: DiMsqlServer, color: "text-red-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className={`text-4xl mb-2 ${skill.color}`}>
                  <skill.icon />
                </div>
                <h3 className="text-lg font-medium dark:text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
