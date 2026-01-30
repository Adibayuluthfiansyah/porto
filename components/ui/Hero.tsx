"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import { Link, MoveDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { IntersectingDots } from "./IntersectingDots";

const CircularText = ({ text = "MBOLEH • DEV • 2026 •", radius = 50 }) => {
  const characters = text.split("");
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="relative flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-transparent"
    >
      {characters.map((char, i) => (
        <span
          key={i}
          className="absolute text-[10px] md:text-xs font-bold uppercase tracking-widest text-black"
          style={{
            transform: `rotate(${i * (360 / characters.length)}deg) translate(0, -${radius}px)`,
            transformOrigin: "bottom center",
            height: `${radius}px`,
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "10px",
            marginLeft: "-5px",
          }}
        >
          {char}
        </span>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-black rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 40, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 30 });

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX / width - 0.5) * 20);
    y.set((clientY / height - 0.5) * 20);
  }

  const reveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#F4F4F4] text-[#1a1a1a] overflow-hidden flex flex-col items-center justify-start px-4 pt-24 pb-12"
    >
      <motion.div
        style={{ y: yImage, x: mouseX, rotateY: mouseX }}
        className="
          absolute z-0 
          bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[60vh]
          md:top-[8%] md:right-[2%] md:left-auto md:translate-x-0 md:w-[40vw] md:h-[80vh]
          pointer-events-none
        "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="w-full h-full relative"
        >
          <Image
            src="/hero.png"
            alt="Adibayu Portrait"
            fill
            className="object-contain object-bottom md:object-center drop-shadow-sm"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 relative w-full flex flex-col items-center"
      >
        <div className="relative inline-block">
          <h1 className="font-serif uppercase text-gray-900 text-center text-[2.5rem] sm:text-[3.2rem] md:text-[4.5rem] lg:text-[clamp(5.5rem,7vw,10rem)] leading-[0.9] tracking-[-0.04em]">
            Adibayu luthfiansyah
          </h1>
        </div>
        <div className="relative mt-6 flex flex-col items-center">
          <p className="font-serif italic font-semibold text-gray-900 text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl text-center">
            {"Hello I'm a fullstack developer"}
          </p>
          {/* ANIMASI PUTAR PUTAR*/}{" "}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mt-4"
          >
            <IntersectingDots />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 relative w-full flex flex-col items-center"
      >
        <div className="relative z-10 w-full mt-16 grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 md:col-start-2">
            <p className="text-sm font-serif leading-relaxed italic md:text-base lg:text-lg">
              {`"I firmly believe that exceptional code should tackle genuine
            problems and generate meaningful impact. I'm driven by the vision of
            creating software that enhances communities and accelerates business
            success"`}
            </p>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-0 w-full px-6 md:px-12 z-30 grid grid-cols-1 md:grid-cols-3 items-end gap-6 md:gap-0">
        <div className="hidden md:block max-w-xs">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="font-serif italic text-sm text-[#1a1a1a]/60"
          >
            <span>Contact</span>
            <br />
            <span className="font-semibold text-black/80">
              adibayuluthfiansyah@gmail.com
            </span>
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-end order-3 md:order-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-serif italic text-[10px] opacity-50 tracking-wider">
              (Scroll Down)
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="opacity-50"
            >
              <MoveDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
