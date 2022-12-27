"use client";
import { motion } from "framer-motion";
import style from "./test.module.css";
import cn from "classnames";
const TryError = () => {
  const animationStyle = {
    initial: {
      y: "150%",
    },
    animated: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };
  return (
    <div>
      <div className=" p-16 flex flex-col gap-10">
        <div className=" overflow-y-hidden bg-white w-max p-5">
          <motion.h2
            variants={animationStyle}
            initial="initial"
            animate="animated"
            className=" font-semibold text-black text-2xl"
          >
            Hello world
          </motion.h2>
        </div>
        {/* second */}
        <div className=" overflow-y-hidden bg-white w-max p-5">
          <motion.h2
            variants={animationStyle}
            initial="initial"
            animate="animated"
         
            className=" font-semibold text-black text-2xl"
          >
            Hello world
          </motion.h2>
        </div>
        {/* third */}
        <div className=" overflow-y-hidden bg-white w-max p-5">
          <motion.h2
            variants={animationStyle}
            initial="initial"
            animate="animated"
            className=" font-semibold text-black text-2xl"
          >
            Hello world
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default TryError;
