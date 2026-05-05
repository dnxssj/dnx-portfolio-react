import React, { useRef, useState } from "react";
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

  // Glow ratón
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const x = (e.clientX / innerWidth) * 100;
    const y = (e.clientY / innerHeight) * 100;

    setMouse({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#050505] z-0" />

      {/* 🔥 GLOW RATÓN (DETRÁS) */}
      <motion.div
        className="absolute z-0 w-[800px] h-[800px] 
        bg-turquesa/10 blur-[180px] rounded-full pointer-events-none"
        animate={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 30,
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 🔥 GLOW CENTRAL */}
      <div className="absolute z-0 top-1/2 left-1/2 w-[600px] h-[600px] 
        bg-turquesa/20 blur-[120px] rounded-full 
        -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* 🔥 GRID (VISIBLE SIEMPRE) */}
      <div
        className="absolute inset-0 z-10 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(46,233,164,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(46,233,164,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* CONTENT */}
      <motion.div
        ref={ref}
        className="relative z-20 text-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >

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

        <motion.p
          className="max-w-2xl mx-auto text-crema/80 text-lg sm:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          Effiziente IT-Lösungen für Privatkunden und kleine Unternehmen.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-turquesa text-fondo px-6 py-3 rounded-lg font-semibold
            hover:scale-105 hover:shadow-[0_0_25px_rgba(46,233,164,0.6)]
            transition-all duration-300"
          >
            Projekt starten
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="border border-turquesa/40 text-turquesa px-6 py-3 rounded-lg
            hover:bg-turquesa/10 transition-all duration-300"
          >
            Mehr erfahren
          </button>
        </motion.div>

        <motion.div
          className="text-sm text-crema/60 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <span>✔ Schnelle Antwort</span>
          <span>✔ Unverbindlich</span>
          <span>✔ Effiziente Lösungen</span>
        </motion.div>

      </motion.div>

      {/* SCROLL INDICATOR */}
      <div
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 inset-x-0 flex flex-col items-center text-crema/40 cursor-pointer group z-20"
      >
        <span className="text-xs mb-3 tracking-wide group-hover:text-turquesa transition">
          Mehr entdecken
        </span>

        <div className="relative h-12 w-[2px] overflow-hidden rounded-full">

          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/10" />

          <div className="absolute inset-0 bg-turquesa/20 opacity-0 group-hover:opacity-100 transition duration-300" />

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-turquesa rounded-full shadow-[0_0_10px_rgba(46,233,164,0.9)]"
            animate={{
              y: [10, 48],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </div>
      </div>

    </section>
  );
}