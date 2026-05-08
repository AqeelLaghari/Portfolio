"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send, Mailbox } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Contact Specific Floating Shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] text-blue-500/10 pointer-events-none"
      >
        <Mailbox size={150} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[30%] right-[5%] text-cyan-500/10 pointer-events-none"
      >
        <Send size={180} strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Interested in collaborating or have an opportunity? I'd love to hear from you."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Feel free to reach out through any of these platforms. I'm currently open to new opportunities in Data Science and Software Engineering.
              </p>

              <div className="space-y-6">
                <a href="mailto:noob9583@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">noob9583@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/aqeel-laghari/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <FaLinkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/aqeel-laghari/</p>
                  </div>
                </a>

                <a href="https://github.com/AqeelLaghari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <p className="font-medium">github.com/AqeelLaghari</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="h-full p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Hello Aqeel, I'd like to discuss..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full gap-2 mt-4">
                  Send Message
                  <Send size={18} />
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
