"use client";

import { motion } from "framer-motion";

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
      {/* Background dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#0b0f19] z-[-2]" />

      {/* Abstract Glowing Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-[60%] right-[10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute bottom-[-10%] left-[40%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
    </div>
  );
}
