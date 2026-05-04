import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-crema">
          
          <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

          <p className="mb-4">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig.
          </p>

          <p className="mb-4">
            Beim Besuch dieser Website werden technische Daten erfasst (z. B. IP-Adresse).
          </p>

          <p className="mb-4">
            Sie haben jederzeit das Recht auf Auskunft oder Löschung Ihrer Daten.
          </p>

        </section>
      </main>

      <Footer />

    </div>
  );
}