import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="min-h-screen max-w-6xl mx-auto px-12 py-40 relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-20 items-center relative">

        {/* 🔥 LÍNEA VERTICAL */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-turquesa/30 to-transparent"></div>

        {/* IZQUIERDA */}
        <div className="pr-6">
          <h2 className="text-5xl font-extrabold text-crema mb-12">
            About Me
          </h2>

          <p className="text-lg text-crema/90 leading-relaxed">
            Ich bin ein{" "}
            <span className="text-turquesa font-semibold">
              Fullstack-Entwickler und IT-Dienstleister
            </span>
            , spezialisiert auf die Entwicklung moderner und zuverlässiger
            technischer Lösungen.
          </p>

          <p className="mt-6 text-crema/80 leading-relaxed">
            Ich unterstütze sowohl Privatpersonen als auch Unternehmen bei der
            Analyse, Optimierung und Umsetzung von IT-Systemen – von der
            klassischen Wartung bis hin zu individuellen Webanwendungen und
            Smart-Home-Integrationen.
          </p>

          <p className="mt-6 text-crema/80 leading-relaxed">
            Mein Fokus liegt auf klar strukturierten, nachhaltigen Lösungen mit
            echtem Mehrwert.
          </p>
        </div>

        {/* DERECHA */}
        <div className="flex flex-col gap-8 pl-6">

          {/* CARD */}
          <motion.div
            className="p-6 rounded-xl bg-black/50 border border-turquesa/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(46,233,164,0.25)"
            }}
          >
            <h3 className="text-lg font-semibold text-crema mb-2">
              IT-Service
            </h3>
            <p className="text-crema/80 text-sm">
              Diagnose, Reparatur und Optimierung von PCs und Systemen.
            </p>
          </motion.div>

          {/* CARD */}
          <motion.div
            className="p-6 rounded-xl bg-black/50 border border-turquesa/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(46,233,164,0.25)"
            }}
          >
            <h3 className="text-lg font-semibold text-crema mb-2">
              Softwareentwicklung
            </h3>
            <p className="text-crema/80 text-sm">
              Individuelle Webanwendungen und Automatisierung von Prozessen.
            </p>
          </motion.div>

          {/* CARD */}
          <motion.div
            className="p-6 rounded-xl bg-black/50 border border-turquesa/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(46,233,164,0.25)"
            }}
          >
            <h3 className="text-lg font-semibold text-crema mb-2">
              Smart Home
            </h3>
            <p className="text-crema/80 text-sm">
              Planung und Integration intelligenter Systeme für Zuhause.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}