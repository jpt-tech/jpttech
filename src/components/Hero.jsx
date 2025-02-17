import React from "react";
import heroImage from "../assets/hero-images.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-30">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              JPT Technologies
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developers
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter "
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
            >
              <a
                href="#contact"
                className="mt-6 inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-400 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-purple-500 hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
  <div className="flex justify-center">
    <motion.img
      initial={{ x: 100, opacity: 1 }}
      animate={{
        x: 0,
        opacity: 1,
        scale: [1, 1.05, 1], // Scales up and down
        rotate: [0, 2, 0], // Slight rotation effect
      }}
      transition={{
        duration: 3, // Time for one full cycle
        repeat: Infinity, // Runs infinitely
        repeatType: "reverse", // Moves back and forth smoothly
        ease: "easeInOut", // Smooth transition
      }}
      src={heroImage}
      alt="JPT Technologies"
      className="cursor-pointer"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
