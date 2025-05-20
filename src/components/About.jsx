import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="min-h-screen max-w-4xl mx-auto px-4 pt-24 pb-12 text-center scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-crema mb-8">About Me</h2>
      <p className="text-lg sm:text-xl text-crema text-opacity-90 leading-relaxed">
        I'm a passionate <span className="text-turquesa font-semibold">Fullstack Developer</span> who loves turning
        ideas into functional and elegant solutions. Whether it's building backend logic, crafting beautiful
        interfaces or integrating external APIs, I enjoy the full journey of development.
        <br /><br />
        I focus on writing clean, maintainable code and constantly learning new technologies to stay sharp and
        effective. My goal is to build web experiences that are not just fast, but also meaningful and intuitive.
      </p>

      <motion.div
        className="mt-12 w-24 h-1 bg-turquesa rounded-full mx-auto"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
      />
    </motion.section>
  );
}
