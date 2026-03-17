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

  // Section 1: "My Name. Creative Developer." (0% -> 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-50vh"]);

  // Section 2: "I build digital experiences." (30% -> 45% -> 60%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], ["10vh", "-40vh"]);

  // Section 3: "Bridging design and engineering." (60% -> 75% -> 100%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 1], ["10vh", "-40vh"]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-[500vh] w-full pointer-events-none z-10">
      {/* Sticky container bounds the absolute positioned sections to track the window viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        
        {/* Section 1 - Centered */}
        <motion.div
           style={{ opacity: opacity1, y: y1 }}
           className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white/90 drop-shadow-2xl">
            Abhinand SD.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/70 font-medium tracking-wide">
            Full Stack Developer
          </p>
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
