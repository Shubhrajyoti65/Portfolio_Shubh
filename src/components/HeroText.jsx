import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

function HeroText() {
  const variants={
    hidden:{opacity:0, x:-50},
    visible:{opacity:1, x:0}
  }
  const words = ["Intelligent", "Scalable", "AI-Powered", "Robust", "Performant"];
  return (
    <div
      className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
    >
      {/* {desktop view} */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I am Shubhrajyoti!
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p 
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Full-Stack & AI Developer <br /> Dedicated to Building
          </motion.p>
          <motion.div 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords 
              words={words}
              className="text-white font-black text-8xl"
            />
          </motion.div>
          <motion.p 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300">
            Software Solutions
          </motion.p>
        </div>
      </div>

      {/* {mobile view} */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p 
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi, I am Shubhrajyoti!
        </motion.p>
        <div >
          <motion.p 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords 
              words={words}
              className="text-white font-bold text-7xl"
            />
          </motion.div>
          <motion.p 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-black text-neutral-300"
          >
            Software Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;