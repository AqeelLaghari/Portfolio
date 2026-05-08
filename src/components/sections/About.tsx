"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { GraduationCap, Briefcase, Code, Heart } from "lucide-react";

import { Database, LineChart } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* About Specific Floating Shapes */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] text-cyan-500/10 pointer-events-none"
      >
        <Database size={120} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[10%] text-blue-500/10 pointer-events-none"
      >
        <LineChart size={150} strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="About Me" 
            subtitle="Get to know my background, education, and passions."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            className="lg:col-span-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard hoverEffect className="p-8 md:p-10 text-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                "An Undergraduate software engineer at Bahria University Karachi with a deep passion for Data Science. Skilled in Machine Learning, Data Analysis, Power BI, and building AI-driven applications. I love creating impactful visualizations and transforming raw data into intelligent, meaningful systems."
              </p>
            </GlassCard>
          </motion.div>

          <motion.div 
            className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <GlassCard hoverEffect className="h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-gray-400">Software Engineering</p>
                <p className="text-sm text-gray-500 mt-1">Bahria University Karachi</p>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard hoverEffect className="h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mb-4 text-violet-400">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                <p className="text-gray-400">Building ML & AI Projects</p>
                <p className="text-sm text-gray-500 mt-1">Data Analysis & Modeling</p>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard hoverEffect className="h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 text-cyan-400">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expertise</h3>
                <p className="text-gray-400">Machine Learning</p>
                <p className="text-sm text-gray-500 mt-1">Power BI & App Dev</p>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard hoverEffect className="h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mb-4 text-rose-400">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Interests</h3>
                <p className="text-gray-400">Deep Learning</p>
                <p className="text-sm text-gray-500 mt-1">Generative AI & LLMs</p>
              </GlassCard>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
