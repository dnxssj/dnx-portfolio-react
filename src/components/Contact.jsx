import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Mail, Instagram } from "lucide-react";

export default function Contact() {

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkoyjwrz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleDiscordCopy = () => {
    navigator.clipboard.writeText("@dnxssj");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        Kontakt aufnehmen! Lass uns sprechen:
      </p>

      {/* ICONOS (los tuyos intactos) */}
      <div className="flex justify-center gap-8">

        <motion.a
          whileHover={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          href="mailto:dnxssj@gmail.com"
          className="text-turquesa"
          target="_blank"
        >
          <Mail size={32} />
        </motion.a>

        <motion.a
          whileHover={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          href="https://github.com/dnxssj"
          className="text-turquesa"
          target="_blank"
        >
          <Github size={32} />
        </motion.a>

        <motion.a
          whileHover={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          href="https://instagram.com/dnxssj"
          className="text-turquesa"
          target="_blank"
        >
          <Instagram size={32} />
        </motion.a>

        {/* DISCORD ORIGINAL */}
        <div className="relative group">
          <motion.button
            onClick={handleDiscordCopy}
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="text-turquesa w-8 h-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -28.5 256 256"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z" />
            </svg>
          </motion.button>

          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-xs text-crema px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Click to copy
          </span>
        </div>

      </div>

      {/* MENSAJE COPY */}
      {copied && (
        <p className="text-sm text-crema/70 mt-4">
          Copied Discord ID: <span className="text-turquesa">@dnxssj</span>
        </p>
      )}

      {/* BOTÓN PRESUPUESTO */}
      <div className="mt-10">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-turquesa text-fondo px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          {showForm ? "Cerrar" : "Angebot anfragen"}
        </button>
      </div>

      {/* FORMULARIO */}
      {showForm && (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-8 max-w-xl mx-auto text-left"
        >

          <select name="service" required className="p-3 rounded bg-black/40 text-crema border border-turquesa/20 focus:border-turquesa outline-none">
            <option value="">Service auswählen</option>
            <option>IT-Service</option>
            <option>Smart Home</option>
            <option>Webentwicklung</option>
            <option>Support</option>
          </select>

          <input name="subject" required placeholder="Kurzbeschreibung" className="p-3 rounded bg-black/40 text-crema border border-turquesa/20 focus:border-turquesa outline-none" />

          <textarea name="message" required rows="4" placeholder="Details zum Projekt..." className="p-3 rounded bg-black/40 text-crema border border-turquesa/20 focus:border-turquesa outline-none" />

          <input name="email" type="email" required placeholder="E-Mail" className="p-3 rounded bg-black/40 text-crema border border-turquesa/20 focus:border-turquesa outline-none" />

          <input name="phone" type="tel" placeholder="Telefon (optional)" className="p-3 rounded bg-black/40 text-crema border border-turquesa/20 focus:border-turquesa outline-none" />

          <input type="hidden" name="_captcha" value="false" />

          {/* BOTÓN */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`py-3 rounded-lg font-semibold transition 
              ${status === "sending"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-turquesa text-fondo hover:scale-105 hover:shadow-[0_0_20px_rgba(46,233,164,0.4)]"
              }`}
          >
            {status === "sending" ? "Senden..." : "Anfrage senden"}
          </button>

          {/* MENSAJES */}
          {status === "success" && (
            <p className="text-green-400 text-sm text-center mt-2">
              Anfrage erfolgreich gesendet ✔
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-2">
              Fehler beim Senden. Bitte erneut versuchen.
            </p>
          )}

          <p className="text-xs text-crema/50 text-center mt-2">
            Unverbindlich · Antwort innerhalb von 24h
          </p>

        </motion.form>
      )}
    </motion.section>
  );
}