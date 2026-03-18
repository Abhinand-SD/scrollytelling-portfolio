"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll context for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: "My Name. Creative Developer."
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], ["10vh", "-30vh", "-30vh"]);

  // Section 2: "I build digital experiences."
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ["10vh", "10vh", "-30vh", "-30vh"]);

  // Section 3: "Bridging design and engineering."
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.55, 0.85, 0.95, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.95, 1], ["10vh", "10vh", "-30vh", "-30vh"]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-[500vh] w-full pointer-events-none z-10">
      {/* Sticky container bounds the absolute positioned sections to track the window viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        
        {/* Section 1 - Centered Bottom */}
        <motion.div
           style={{ opacity: opacity1, y: y1 }}
           className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center text-center px-4"
        >
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white/90 drop-shadow-2xl mb-4">
             Abhinand SD.
           </h1>
           <p className="text-lg md:text-xl text-white/70 font-medium tracking-wide mb-12">
             Full Stack Developer
           </p>

           {/* Scroll Indicator */}
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             className="flex flex-col items-center gap-2 mt-8 opacity-60"
           >
             <span className="text-sm tracking-widest uppercase">Scroll</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
           </motion.div>
        </motion.div>

        {/* Section 2 - Left Aligned */}
        <motion.div
           style={{ opacity: opacity2, y: y2 }}
           className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 leading-tight drop-shadow-xl">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 - Right Aligned */}
        <motion.div
           style={{ opacity: opacity3, y: y3 }}
           className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 leading-tight drop-shadow-xl">
              Bridging design <br />
              <span className="text-white/50">&amp; engineering.</span>
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
