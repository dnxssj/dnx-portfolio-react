import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wrench, Home, Code } from "lucide-react";

const services = [
  {
    title: "IT-Service & Reparatur",
    desc: "Diagnose, Wartung und Optimierung deiner Geräte – schnell und zuverlässig.",
    icon: Wrench,
  },
  {
    title: "Smart Home Lösungen",
    desc: "Individuelle Automatisierung für mehr Komfort und Effizienz.",
    icon: Home,
  },
  {
    title: "Individuelle Software",
    desc: "Maßgeschneiderte Lösungen für deine Anforderungen.",
    icon: Code,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="services"
      className="max-w-6xl mx-auto px-4 py-24"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}    
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-crema mb-4">
          Services
        </h2>
        <p className="text-crema/70 max-w-xl mx-auto">
          Lösungen, die funktionieren – ohne unnötige Komplexität.
        </p>
      </div>

      {/* GRID con stagger */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 pb-24"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="group relative p-6 rounded-xl 
              bg-white/[0.03] backdrop-blur-md 
              border border-white/10 
              transition-all duration-300"
            >
              {/* CONTENT */}
              <div className="flex items-start gap-4">
                {/* ICON */}
                <div className="text-turquesa mt-1 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} strokeWidth={2} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-xl font-semibold text-crema mb-1">
                    {s.title}
                  </h3>

                  <p className="text-crema/70 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 
                bg-turquesa transition-all duration-500 
                group-hover:w-full" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-20">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-turquesa text-fondo px-6 py-3 rounded-lg font-semibold
          hover:scale-105 hover:shadow-[0_0_25px_rgba(46,233,164,0.6)]
          transition-all duration-300"
        >
          Jetzt Kontakt aufnehmen
        </button>
      </div>
    </motion.section>
  );
}