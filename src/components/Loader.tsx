"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
  progress: number;
}

export default function Loader({ isLoading, progress }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#121212]"
        >
          {/* Main animated text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
              Loading Experience
            </h1>
            <p className="text-white/50 tracking-[0.2em] text-sm uppercase">
              Preparing Assets
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 md:w-96 p-[1px] rounded-full bg-white/10 relative overflow-hidden">
            <motion.div
              className="h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          
          {/* Percentage */}
          <motion.div 
            className="mt-6 text-2xl font-mono text-white/80"
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
