import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "IT-Service",
    description:
      "Reparatur, Optimierung und Wartung von PCs und Laptops für maximale Leistung.",
    technologies: ["Reparatur", "Upgrades", "Optimierung", "Diagnose"],
    image: "/images/service1.png",
  },
  {
    title: "Smart Home",
    description:
      "Installation und Integration von Smart-Home-Systemen für ein automatisiertes Zuhause.",
    technologies: ["Alexa", "Google", "Automation", "Setup"],
    image: "/images/service2.png",
  },
  {
    title: "Programmierung",
    description:
      "Entwicklung moderner Webseiten und individueller Softwarelösungen.",
    technologies: ["Web", "Apps", "Automation", "Tools"],
    image: "/images/service3.png",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [active, setActive] = useState<number | null>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.section
      id="services"
      ref={ref}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-crema text-center mb-10 sm:mb-20 tracking-tight">
        Services
      </h2>

      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {services.map((service, index) => {
          const isActive = active === index;
          const isDimmed = active !== null && !isActive;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => !isMobile && setActive(index)}
              onMouseLeave={() => !isMobile && setActive(null)}
              className="w-full h-[420px] sm:h-[460px] relative rounded-xl overflow-hidden group cursor-pointer"
              animate={
                isMobile
                  ? {} // sin animaciones en móvil
                  : {
                      scale: isActive ? 1.08 : isDimmed ? 0.94 : 1,
                      opacity: isDimmed ? 0.35 : 1,
                      filter: isDimmed ? "blur(1.5px)" : "blur(0px)",
                      x:
                        active !== null
                          ? index < active
                            ? -40
                            : index > active
                            ? 40
                            : 0
                          : 0,
                      boxShadow: isActive
                        ? "0 0 40px rgba(46,233,164,0.25)"
                        : "0 10px 25px rgba(0,0,0,0.3)",
                    }
              }
              transition={{ duration: 0.35 }}
            >
              {/* Imagen */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 bg-black/60">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-crema mb-3">
                    {service.title}
                  </h3>

                  <p className="text-crema/90 text-[14px] sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-turquesa text-fondo px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}