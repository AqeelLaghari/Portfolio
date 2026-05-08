"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TerminalSquare } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Hero Specific Floating Shapes */}
      <motion.div
        animate={{ rotate: 360, y: [0, -30, 0] }}
        transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-[15%] right-[20%] w-16 h-16 text-blue-500/10 pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[45%] left-[5%] w-24 h-24 text-violet-500/10 pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10" /></svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] relative z-10">
            <Image
              src="/pics/1769983157542.jpg"
              alt="Aqeel Laghari"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -inset-2 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute -inset-4 rounded-full border border-violet-500/20 animate-[spin_15s_linear_infinite_reverse]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Aqeel Laghari</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4 max-w-2xl mx-auto">
            Data Scientist | ML Enthusiast | Software Engineering Student
          </p>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            "Building intelligent systems, data-driven solutions, and modern AI-powered applications."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" className="gap-2 group">
            <a href="#projects" className="flex items-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="secondary" className="gap-2 group">
            <a href="#contact" className="flex items-center gap-2">
              Contact Me
            </a>
          </Button>
        </motion.div>
      </div>
      
    </section>
  );
}
