"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const lemaPartes = ["Crea valor", "Gana experiencia", "Deja tu huella"];

export default function Hero() {
  const [parteIndex, setParteIndex] = useState(0);
  const [textoMostrado, setTextoMostrado] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  useEffect(() => {
    // Animación tipo escritura
    if (charIndex < lemaPartes[parteIndex].length) {
      const timeout = setTimeout(() => {
        setTextoMostrado(
          (prev) => prev + lemaPartes[parteIndex].charAt(charIndex)
        );
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      // Mostrar descripción con delay luego de completar primera animación
      const pauseTimeout = setTimeout(() => {
        setParteIndex((prev) => (prev + 1) % lemaPartes.length);
        setTextoMostrado("");
        setCharIndex(0);
        if (!mostrarDescripcion) {
          setMostrarDescripcion(true);
        }
      }, 700);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, parteIndex]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-5">
      {/* Logo grande transparente */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40 pointer-events-none select-none">
        <Image
          src="/nombre-blanco.png"
          alt="Breavance"
          width={1000}
          height={1000}
          className="object-contain"
          priority
        />
      </div>

      {/* Texto animado */}
      <div className="relative z-10 mb-28 md:mb-36">
        <h1 className="text-4xl md:text-6xl font-semibold text-white relative transition-transform duration-300 scale-110 text-shadow-white">
          {textoMostrado}
          <span className="animate-pulse">|</span>
        </h1>
      </div>

      {/* Frase descriptiva con fade-in */}
      {mostrarDescripcion && (
        <p className="relative z-10 text-lg mt-16 md:mt-24 md:text-3xl text-white opacity-0 animate-fade-in">
          Donde el aprendizaje se transforma en experiencia y las ideas en
          productos.
        </p>
      )}

      {/* Animación personalizada fade-in */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
