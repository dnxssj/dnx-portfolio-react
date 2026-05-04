import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";


const testimonials = [
  {
    name: "Max Müller",
    role: "Privatkunde",
    country: "Deutschland",
    flag: "https://flagcdn.com/w40/de.png",
    text: "Schnelle und professionelle Hilfe. Mein PC läuft wieder perfekt.",
    rating: 5,
  },
  {
    name: "Laura Schmidt",
    role: "Smart Home",
    country: "Deutschland",
    flag: "https://flagcdn.com/w40/de.png",
    text: "Top Beratung und saubere Umsetzung. Sehr empfehlenswert!",
    rating: 5,
  },
  {
    name: "Daniel Weber",
    role: "Unternehmen",
    country: "Deutschland",
    flag: "https://flagcdn.com/w40/de.png",
    text: "Zuverlässig, effizient und technisch auf hohem Niveau.",
    rating: 4,
  },
  {
    name: "Roberto Rodríguez",
    role: "Privatkunde",
    country: "Argentinien",
    flag: "https://flagcdn.com/w40/ar.png",
    text: "Muy buena orientación y trato. Solución muy rápida.",
    rating: 5,
  },
];

const loopData = [...testimonials, ...testimonials];


export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ✅ detectar móvil correctamente
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ autoplay (desactivado en móvil)
useEffect(() => {
  if (isHovered || isMobile) return;

  const interval = setInterval(() => {
    setIndex((prev) => prev + 1);
  }, 4000);

  return () => clearInterval(interval);
}, [isHovered, isMobile]);

  // loop infinito
useEffect(() => {
  if (index >= testimonials.length) {
    setTimeout(() => {
      setIndex(0);
    }, 400); // igual que transition
  }
}, [index]);

  const next = () => setIndex((prev) => prev + 1);
const prev = () =>
  setIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );

  return (
    <motion.section
  ref={ref}
  className="max-w-6xl mx-auto px-4 sm:px-6 py-20 overflow-hidden"
  initial={{ opacity: 0, y: 60 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7 }}
>
      
      {/* TITLE */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-crema text-center mb-12">
        Testimonials
      </h2>

      {/* BADGE */}
      <motion.div
  className="flex justify-center mb-10"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 70, damping: 20 }}
>
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-turquesa/20 bg-black/30 backdrop-blur-sm shadow-[0_0_20px_rgba(46,233,164,0.1)]">
          <span className="text-turquesa">★★★★★</span>
          <span className="text-crema/80 text-sm">
            4.9 / 5 aus 10 Bewertungen
          </span>
        </div>
      </motion.div>

      {/* SLIDER */}
      <div
        className="overflow-hidden w-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* FADE IZQUIERDA */}
<div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 
                bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

{/* FADE DERECHA */}
<div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 
                bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        <motion.div
          ref={containerRef}
          className="flex gap-2 sm:gap-8"
          animate={{
x: isMobile
  ? `-${index * 100}%`
  : `calc(-${index * 320}px + 50% - 150px)`,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
          }}
          drag="x"
          dragElastic={0.2}
          dragMomentum={false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
        >
          {loopData.map((t, i) => {
            const realIndex = index % testimonials.length;
const isActive = i % testimonials.length === realIndex;
            return (
              <motion.div
                key={i}
                className="min-w-[100%] sm:min-w-[300px] rounded-xl p-4 sm:p-6"
                whileHover={!isMobile ? { scale: 1.03 } : {}}
                animate={{
  scale: isMobile ? 1 : isActive ? 1 : 0.9,
  opacity: isMobile ? 1 : isActive ? 1 : 0.5,
  filter: isMobile
    ? "none"
    : isActive
    ? "blur(0px)"
    : "blur(2px)",
}}
              >
                    <div
                    className="bg-black/40 backdrop-blur-sm border rounded-xl p-4 sm:p-6 transition-all duration-300"
                    style={{
                        borderColor: isActive
                        ? "rgba(46,233,164,0.4)"
                        : "rgba(46,233,164,0.1)",
                        boxShadow:
                        !isMobile && isActive
                            ? "0 0 25px rgba(46,233,164,0.25)"
                            : "none",
                    }}
                    >
                  
                  <div className="text-turquesa mb-3">
                    {"★".repeat(t.rating)}
                  </div>

                  <p className="text-crema/90 text-sm mb-4 italic">
                    “{t.text}”
                  </p>

                  <div className="text-crema font-semibold">
                    {t.name}
                  </div>

                  <div className="text-crema/60 text-xs">
                    {t.role}
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-xs text-crema/50">
                    <img src={t.flag} className="w-5 h-[14px]" />
                    {t.country}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

              {/* BOTONES (solo desktop) */}
      <div className="block">
  <button
  onClick={prev}
  className="absolute left-[-10px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-10
             bg-black/60 backdrop-blur-md
             border border-turquesa/30
             text-turquesa
             w-10 h-10 flex items-center justify-center
             rounded-full
             hover:bg-turquesa/10 hover:scale-110
             transition-all duration-300"
>
  ←
</button>

<button
  onClick={next}
  className="absolute right-[-10px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-10
             bg-black/60 backdrop-blur-md
             border border-turquesa/30
             text-turquesa
             w-10 h-10 flex items-center justify-center
             rounded-full
             hover:bg-turquesa/10 hover:scale-110
             transition-all duration-300"
>
  →
</button>
</div>
      </div>


    </motion.section>
  );
}