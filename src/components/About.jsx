import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >

        {/* TITLE */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-crema mb-12 text-center">
          Über mich
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl text-turquesa mb-4 font-semibold">
              Technik, die einfach funktioniert.
            </h3>

            <p className="text-crema/80 mb-6 leading-relaxed">
              Ich helfe Privatkunden und kleinen Unternehmen dabei, ihre Systeme zu optimieren, Probleme schnell zu lösen und digitale Lösungen effizient umzusetzen.
            </p>

            <p className="text-crema/70 mb-6 leading-relaxed">
              Kein unnötiger Overhead, keine komplizierten Prozesse – sondern direkte, saubere Lösungen, die wirklich funktionieren.
            </p>

            {/* TRUST POINTS */}
            <div className="space-y-2 text-crema/70">
              <p>✔ Schnelle Problemlösung</p>
              <p>✔ Persönlicher Support</p>
              <p>✔ Klare Kommunikation</p>
              <p>✔ Fokus auf Effizienz</p>
            </div>
          </div>

<div className="relative flex justify-center">

  {/* GLOW BACK */}
  <div className="absolute w-72 h-72 bg-turquesa/20 blur-[100px] rounded-full" />

  {/* CONTENEDOR */}
  <div className="relative px-6 py-4">

    {/* LINEA IZQUIERDA */}
    <div className="absolute left-0 top-0 h-full w-[2px] 
      bg-gradient-to-b from-transparent via-turquesa to-transparent 
      opacity-70" />

    {/* LINEA DERECHA */}
    <div className="absolute right-0 top-0 h-full w-[2px] 
      bg-gradient-to-b from-transparent via-turquesa to-transparent 
      opacity-70" />

    {/* IMAGEN */}
    <img
      src="/images/Bild.png"
      alt="Daniel Rodríguez"
      className="w-56 h-64 sm:w-64 sm:h-72 
      object-contain 
      rounded-md 
      relative z-10"
    />

  </div>

  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 
  text-xs bg-black/70 text-turquesa px-3 py-1 rounded-full backdrop-blur">
  Founder
</div>
</div>

        </div>

      </motion.div>
    </section>
  );
}