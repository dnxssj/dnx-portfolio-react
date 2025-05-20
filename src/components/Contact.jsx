import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Mail, Instagram } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="max-w-4xl mx-auto px-4 pt-24 pb-12 text-center scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-crema mb-8">
        Contact
      </h2>
      <p className="text-lg text-crema text-opacity-90 mb-8">
        Let’s connect! You can find me on any of these platforms:
      </p>

      <div className="flex justify-center gap-8">
        <motion.a
          whileHover={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          href="mailto:dnxssj@gmail.com"
          className="text-turquesa transition"
          target="_blank"
        >
          <Mail size={32} />
        </motion.a>

        <motion.a
          whileHover={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          href="https://github.com/dnxssj"
          className="text-turquesa transition"
          target="_blank"
        >
          <Github size={32} />
        </motion.a>

        <motion.a
          whileHover={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          href="https://instagram.com/dnxssj"
          className="text-turquesa transition"
          target="_blank"
        >
          <Instagram size={32} />
        </motion.a>
      </div>

    </motion.section>
  );
}
