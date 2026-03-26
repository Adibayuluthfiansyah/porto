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

  // Simplified 3D scroll (reduced GPU load)
  const rotateX = useTransform(scrollY, [0, 500], [0, 12]);
  const rotateY = useTransform(smoothVelocity, [-1000, 1000], [-4, 4]);

  const x = useTransform(baseX, (v: number) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  // Smooth animation frame for 60fps performance
  useAnimationFrame((t, delta) => {
    // Calculate base movement
    let moveBy = directionFactor.current * default_velocity * (delta / 1000);
    
    // Update direction based on scroll velocity
    const velocity = velocityFactor.get();
    if (velocity < 0) directionFactor.current = -1;
    else if (velocity > 0) directionFactor.current = 1;

    // Add scroll-based velocity (reduced impact for smoother animation)
    moveBy += directionFactor.current * moveBy * Math.abs(velocity) * 0.3;
    
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
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {[...Array(3)].map((_, i) => (
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
