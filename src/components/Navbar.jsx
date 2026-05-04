import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("services");

  const sections = ["services", "about", "projects", "references", "contact"];

  // 🔥 SCROLL CENTRADO
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

    setOpen(false);
  };

  // 🔥 SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-fondo/80 backdrop-blur border-b border-white/5">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl font-bold text-crema tracking-wide">
          DNX Lab
        </h1>

        {/* DESKTOP */}
        <ul className="hidden md:flex gap-8 text-turquesa font-medium relative">
          {sections.map((id) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className="relative cursor-pointer group"
            >
              <span
                className={`transition ${
                  active === id
                    ? "text-turquesa"
                    : "text-crema/70 hover:text-turquesa"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>

              {/* 🔥 underline animado */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-turquesa transition-all duration-300 ${
                  active === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-turquesa text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE */}
      {open && (
        <div className="md:hidden bg-fondo border-t border-white/10 flex flex-col items-center gap-6 py-6 text-turquesa font-medium">
          {sections.map((id) => (
            <div
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer ${
                active === id ? "text-turquesa" : "text-crema/70"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}