"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function FadeInScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: FadeInScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const directionMap = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { y: 0, x: 50 },
      right: { y: 0, x: -50 },
    };

    const { x, y } = directionMap[direction];

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translate(0, 0)";
            }, delay * 1000);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [direction, delay]);

  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const { x, y } = directionMap[direction];

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: 0,
        transform: `translate(${x}px, ${y}px)`,
        transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
