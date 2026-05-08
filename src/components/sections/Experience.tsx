"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Map, Compass } from "lucide-react";

const timeline = [
  {
    year: "Present",
    title: "Learning APIs, Deployment & LLMs",
    description: "Currently focusing on backend integrations, deploying machine learning models to production, and exploring Large Language Models (LLMs) to build intelligent web applications.",
    color: "bg-rose-500",
  },
  {
    year: "Recent",
    title: "Developing ML Applications",
    description: "Creating full-stack AI applications such as Jobify, integrating machine learning recommendation systems with Flutter and Flask.",
    color: "bg-blue-500",
  },
  {
    year: "Past",
    title: "Power BI Dashboards",
    description: "Mastering data visualization and business intelligence by building interactive dashboards and utilizing complex DAX measures.",
    color: "bg-emerald-500",
  },
  {
    year: "Foundation",
    title: "Learning Data Science",
    description: "Started the journey into Data Science and Software Engineering at Bahria University Karachi. Mastered Python, SQL, and EDA.",
    color: "bg-violet-500",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.01] overflow-hidden">
      {/* Experience Specific Floating Shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] text-emerald-500/10 pointer-events-none"
      >
        <Map size={160} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -45, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] left-[5%] text-rose-500/10 pointer-events-none"
      >
        <Compass size={140} strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="My Journey" 
            subtitle="The path of continuous learning and building in AI and Software Engineering."
          />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-150 transition-transform duration-300`} />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <span className={`text-sm font-bold tracking-wider uppercase bg-white/5 px-3 py-1 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 inline-block w-max`}>
                  {item.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-2xl mt-3 bg-white/[0.02] p-5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
