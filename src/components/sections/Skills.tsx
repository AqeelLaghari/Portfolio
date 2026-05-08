"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Braces, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis & Visualization",
    color: "from-blue-500 to-cyan-400",
    skills: ["Power BI", "Data Modeling", "DAX", "Exploratory Data Analysis", "Data Storytelling"],
  },
  {
    title: "Programming",
    color: "from-violet-500 to-fuchsia-400",
    skills: ["Python", "Java", "OOP", "SQL", "C#", "Flutter", "Pandas", "NumPy", "Scikit-learn", "PyTorch"],
  },
  {
    title: "AI & Machine Learning",
    color: "from-emerald-400 to-cyan-500",
    skills: ["Machine Learning", "Deep Learning", "Recommendation Systems", "GANs", "Data Preprocessing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/[0.01] overflow-hidden">
      {/* Skills Specific Floating Shapes */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[5%] text-violet-500/10 pointer-events-none"
      >
        <Braces size={160} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] left-[8%] text-cyan-500/10 pointer-events-none"
      >
        <Cpu size={140} strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Technical Skills" 
            subtitle="My arsenal of tools, languages, and frameworks for building intelligent solutions."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard hoverEffect className="h-full p-8 group">
                <div className="mb-6 flex flex-col items-center text-center">
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
                  <h3 className={`text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${category.color} transition-all duration-300 group-hover:from-blue-400 group-hover:to-violet-400`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
