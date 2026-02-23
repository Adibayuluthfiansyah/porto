"use client";

import { motion } from "framer-motion";

export const IntersectingDots = () => {
  return (
    <div className="relative w-16 h-6 flex items-center justify-center">
      {/* outline dot */}
      <motion.span
        animate={{ x: [-8, 8, -8] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-5 h-5
          rounded-full
          border border-neutral-900 dark:border-[#F4F4F4]
          bg-neutral-50 dark:bg-[#1a1a1a]
          transition-colors duration-500
          z-10
        "
      />

      {/* solid dot */}
      <motion.span
        animate={{ x: [8, -8, 8] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-5 h-5
          rounded-full
          bg-neutral-900 dark:bg-white
          transition-colors duration-500
        "
      />
    </div>
  );
};
