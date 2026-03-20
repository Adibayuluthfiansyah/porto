"use client";

import dynamic from "next/dynamic";

// Lazy load heavy animation component to reduce initial bundle
const ScrollBasedAnimated = dynamic(
  () => import("./scroll-based-animate"),
  {
    ssr: false,
    loading: () => (
      <div className="h-24 md:h-32 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full" />
    ),
  }
);

interface ScrollBasedAnimatedWrapperProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

export default function ScrollBasedAnimatedWrapper(
  props: ScrollBasedAnimatedWrapperProps
) {
  return <ScrollBasedAnimated {...props} />;
}
