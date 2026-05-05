import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* TOP */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* LEFT */}
          <p className="text-sm text-crema/60 text-center sm:text-left">
            © {new Date().getFullYear()} DNX Lab — Daniel Rodríguez
          </p>

          {/* RIGHT LINKS */}
          <div className="flex gap-6 text-sm text-crema/60">
            <Link
              to="/impressum"
              className="opacity-70 hover:opacity-100 hover:text-turquesa transition"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="opacity-70 hover:opacity-100 hover:text-turquesa transition"
            >
              Datenschutz
            </Link>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 mt-6">

          <a
            href="https://github.com/dnxssj"
            target="_blank"
            className="text-crema/60 opacity-70 hover:opacity-100 hover:text-turquesa transition"
          >
            <Github size={20} />
          </a>

          <a
                href="https://linkedin.com/in/dienix" // 
            target="_blank"
            className="text-crema/60 opacity-70 hover:opacity-100 hover:text-turquesa transition"
          >
            <Linkedin size={20} />
          </a>

        </div>

        {/* BOTTOM */}
        <div className="mt-6 text-center text-xs text-crema/40">
          Made by DNX
        </div>

      </div>
    </footer>
  );
}