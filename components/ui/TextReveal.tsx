"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useMemo } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
}

const CharReveal = ({
  char,
  index,
  scrollYProgress,
}: {
  char: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index * 0.009;
  const end = start + 0.2;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(156, 163, 175, 0.25)", "rgb(255, 255, 255)"],
  );

  return (
    <motion.span style={{ color }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const chars = useMemo(() => text.split(""), [text]);

  return (
    <section ref={containerRef} className={`flex items-center ${className}`}>
      <div className="w-full flex justify-center">
        <h2
          className="
            text-[2rem] md:text-[2.5rem] lg:text-[3rem]
            font-bold
            w-[100%]
            flex flex-wrap
            leading-relaxed
          "
          style={{ color: "rgba(156, 163, 175, 0.25)" }}
        >
          {chars.map((char, i) => (
            <CharReveal
              key={i}
              char={char}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </h2>
      </div>
    </section>
  );
}
