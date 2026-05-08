"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Server, Terminal, Play, X } from "lucide-react";

const projects = [
  {
    title: "Jobify — AI Resume & Job App",
    shortTitle: "JOBIFY",
    description: "Upload resumes and find relevant jobs using AI. Features resume analysis and recommendation systems using advanced NLP techniques.",
    tech: ["Flutter", "Flask", "TF-IDF", "Cosine Similarity"],
    gradient: "from-blue-600 to-cyan-500",
    video: "/pics/Jobify.mp4",
  },
  {
    title: "Movie Recommendation System",
    shortTitle: "MOVIE REC",
    description: "Personalized recommendation engine utilizing similarity algorithms to suggest movies based on given user input preferences.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    gradient: "from-violet-600 to-fuchsia-500",
    video: "/pics/Movie Reccomentdation.mp4",
  },
  {
    title: "Anime Face GAN",
    shortTitle: "ANIME GAN",
    description: "Deep learning model (DCGAN) built to generate anime-style faces from random noise, served through a custom web interface.",
    tech: ["PyTorch", "GANs", "Flask"],
    gradient: "from-rose-500 to-orange-500",
    video: "/pics/DCGans.mp4",
  },
  {
    title: "Power BI Analytics Dashboard",
    shortTitle: "POWER BI",
    description: "Interactive corporate dashboards featuring complex KPIs, DAX measures, and professional data storytelling for business insights.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    gradient: "from-emerald-500 to-teal-400",
    video: "/pics/PowerBi.mp4",
  },
];

export function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Projects Specific Floating Shapes */}
      <motion.div
        animate={{ y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] text-blue-500/10 pointer-events-none"
      >
        <Server size={180} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, 5, -5, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[5%] text-violet-500/10 pointer-events-none"
      >
        <Terminal size={150} strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my recent work in Data Science, ML, and App Development."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <GlassCard className="h-full p-0 overflow-hidden flex flex-col group-hover:border-white/20 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                {/* Image/Video Placeholder with Gradient */}
                <div 
                  className={`h-56 w-full ${project.video ? 'bg-black cursor-pointer' : `bg-gradient-to-br ${project.gradient}`} relative overflow-hidden flex items-center justify-center`}
                  onClick={() => project.video && setSelectedVideo(project.video)}
                >
                  {project.video && (
                    <video 
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700"
                    />
                  )}
                  {!project.video && <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />}
                  
                  {project.video ? (
                    <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-lg">
                        <Play fill="currentColor" size={24} className="ml-1" />
                      </div>
                    </div>
                  ) : null}

                  <div className={`absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500 z-10 ${project.video ? 'bg-gradient-to-t from-[#0B0F19] to-transparent opacity-80 group-hover:opacity-40' : ''}`} />
                  <h3 className={`text-2xl font-bold text-white tracking-wider uppercase z-20 drop-shadow-lg transition-all duration-700 ${project.video ? 'group-hover:scale-105' : 'group-hover:scale-110 mix-blend-overlay'}`}>
                    {project.shortTitle || project.title.split(" ")[0]}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="glow">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0f19]/90 backdrop-blur-lg p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain max-h-[85vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
