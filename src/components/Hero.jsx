import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const NAV_HEIGHT = 80;

  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    window.innerHeight / 2 +
    el.offsetHeight / 2 -
    NAV_HEIGHT / 2;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 BACKGROUND BASE */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GRADIENT LIGHT */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] 
        bg-turquesa/20 blur-[120px] rounded-full 
        -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* CONTENT */}
      <motion.div
        ref={ref}
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >

        {/* HEADLINE */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-crema mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          Build. Fix. Optimize. <br />
          <span className="text-turquesa drop-shadow-[0_0_20px_rgba(46,233,164,0.6)]">
            Without the bullshit.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          className="max-w-2xl mx-auto text-crema/80 text-lg sm:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          IT-Service, Smart Home und individuelle Softwarelösungen – schnell, effizient und direkt auf den Punkt.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-turquesa text-fondo px-6 py-3 rounded-lg font-semibold
            hover:scale-105 hover:shadow-[0_0_25px_rgba(46,233,164,0.6)]
            transition-all duration-300"
          >
            Anfrage senden
          </button>


          <button
            onClick={() => scrollToSection("about")}
            className="border border-turquesa/40 text-turquesa px-6 py-3 rounded-lg
            hover:bg-turquesa/10 transition-all duration-300"
          >
            Mehr erfahren
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}