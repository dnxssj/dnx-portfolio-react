import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-fondo/80 backdrop-blur">
      <h1 className="text-2xl font-bold text-crema tracking-wide">DNX</h1>
      <ul className="flex gap-6 text-turquesa font-medium">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
