"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  wrap,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

export default function ScrollBasedAnimated({
  text,
  default_velocity = 5,
  className,
}: AnimateScrollProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // 3d scroll
  const rotateX = useTransform(scrollY, [0, 500], [0, 15]);
  const rotateY = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const x = useTransform(baseX, (v: number) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * default_velocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="relative w-full overflow-hidden flex whitespace-nowrap"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        style={{
          x,
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={cn("inline-block", className)}
            style={{
              textShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
