"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: scale,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay, scale]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
