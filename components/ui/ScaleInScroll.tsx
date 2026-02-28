"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScaleInScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scale?: number;
}

export default function ScaleInScroll({
  children,
  delay = 0,
  className = "",
  scale = 0.8,
}: ScaleInScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use Intersection Observer instead of GSAP for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "scale(1)";
            }, delay * 1000);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: 0,
        transform: `scale(${scale})`,
        transition: "opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
