"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HomeIntroduce() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="z-50 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700  dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        안녕하세요 웹 프론트엔드 개발자{" "}
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="z-50 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700  dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
          최영진
        </Highlight>
        {" "}입니다
      </motion.h1>
    </HeroHighlight>
  );
}
