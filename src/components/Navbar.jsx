import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-fondo/80 backdrop-blur border-b border-white/5">
      
      {/* CONTENEDOR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl font-bold text-crema tracking-wide">
          DNX Lab
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 text-turquesa font-medium">
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#testimonials" className="hover:underline">References</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

        {/* HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-turquesa text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-fondo border-t border-white/10 flex flex-col items-center gap-6 py-6 text-turquesa font-medium">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>References</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}