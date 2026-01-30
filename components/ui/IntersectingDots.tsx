import { motion } from "framer-motion";

export const IntersectingDots = () => {
  return (
    <div className="relative w-16 h-6 flex items-center justify-center">
      {/* DOT OUTLINE */}
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
          border border-black
          bg-transparent
        "
      />

      {/* DOT SOLID */}
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
          bg-black
          mix-blend-multiply
        "
      />
    </div>
  );
};
