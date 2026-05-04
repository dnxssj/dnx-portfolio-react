import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-crema">
          
          <h1 className="text-3xl font-bold mb-6">Impressum</h1>

          <p className="mb-4">
            Angaben gemäß § 5 TMG
          </p>

          <p className="mb-4">
            Francisco Daniel Lirola Rodríguez<br />
            Mühlbergstr. 8, Wald-Michelbach<br />
            Deutschland
          </p>

          <p className="mb-4">
            E-Mail: contact@dnxlab.de
          </p>

          <p className="mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
            Daniel Rodríguez
          </p>

        </section>
      </main>

      <Footer />

    </div>
  );
}