import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });

  return (
    <motion.section
      ref={ref}
      className="min-h-screen pt-32 pb-12 flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-crema mb-4"
        initial={false}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        Daniel Rodríguez
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl text-turquesa mb-6"
        initial={false}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        Fullstack Developer
      </motion.h2>

      <motion.p
        className="max-w-xl text-lg sm:text-xl mb-8 text-crema text-opacity-90"
        initial={false}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        I build clean, fast and scalable web applications with a strong focus on design and usability.
      </motion.p>

      <motion.a
        href="#contact"
        className="bg-turquesa text-fondo font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        whileTap={{ scale: 0.95 }}
        initial={false}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        Contact me
      </motion.a>

      <motion.div
        className="mt-12 w-24 h-1 bg-turquesa rounded-full mx-auto"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
      />
    </motion.section>
  );
}
