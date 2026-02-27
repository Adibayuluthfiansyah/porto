"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

interface CardType {
  title: string;
  category: string;
  src: string;
  content: React.ReactNode;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = window.innerWidth < 768 ? 16 : 32;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="absolute right-0 z-[1000] h-auto w-[5%] bg-gradient-to-l from-white dark:from-[#0a0a0a]" />
          <div className="flex flex-row justify-start gap-4 md:gap-8 pl-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 * index },
                }}
                key={"card" + index}
                className="last:pr-8"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-4 md:mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent flex items-center justify-center disabled:opacity-30 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-transparent flex items-center justify-center disabled:opacity-30 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center px-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              ref={containerRef}
              className="w-full max-w-4xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl p-8 md:p-12 border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl relative"
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 h-10 w-10 bg-neutral-100/80 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 flex items-center justify-center transition-all duration-200 border border-neutral-200/50 dark:border-white/10"
              >
                <X className="h-5 w-5 text-neutral-900 dark:text-white" />
              </button>

              <p className="text-xs font-sans uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-3 font-medium">
                {card.category}
              </p>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-neutral-900 dark:text-white mb-8 leading-tight tracking-tight">
                {card.title}
              </h3>

              <div className="relative w-full aspect-video mb-10 overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="text-neutral-700 dark:text-neutral-300 font-light font-sans text-base md:text-lg leading-relaxed">
                {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group relative h-[350px] w-[280px] md:h-[500px] md:w-[384px] overflow-hidden bg-neutral-900/5 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-500 ease-out"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 dark:to-black/50 z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content container */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between p-6">
          {/* Category badge */}
          <div className="inline-flex self-start">
            <div className="bg-white/90 dark:bg-black/50 backdrop-blur-md px-3 py-1.5 border border-neutral-200/50 dark:border-white/10 shadow-sm">
              <p className="text-neutral-900 dark:text-white text-xs font-sans uppercase tracking-[0.25em] font-medium">
                {card.category}
              </p>
            </div>
          </div>
          
          {/* Title */}
          <div className="mt-auto">
            <h3 className="text-neutral-900 dark:text-white text-2xl md:text-4xl font-serif italic leading-tight tracking-tight opacity-95 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-[-4px]">
              {card.title}
            </h3>
          </div>
        </div>
        
        {/* Image with enhanced effects */}
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-0 inset-0 group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
        />
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent" />
        </div>
      </motion.button>
    </>
  );
};
