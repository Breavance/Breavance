"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(!isHome); // visible por defecto si no es home

  const onClickHamburguer = () => setOpen(!open);

  useEffect(() => {
    if (!isHome) return; // si no estamos en la home, no escuchamos scroll

    const handleScroll = () => {
      setShowNavbar(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } backdrop-blur`}
    >
      <div className="flex items-center justify-between font-semibold text-white p-5 xl:w-[1280px] xl:mx-auto">
        <div className="justify-items-start">
          <Link href={"/"}>
            <Image
              alt="Breavance"
              src={"/nombre.png"}
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="relative md:static">
          <button
            className="md:hidden relative md:static flex justify-end"
            onClick={onClickHamburguer}
          >
            {open ? (
              <XMarkIcon className="text-white w-6" />
            ) : (
              <Bars3Icon className="text-white w-6" />
            )}
          </button>

          <div className="absolute md:static right-[5px] top-[40px] md:right-0 md:top-0">
            <div
              className={`${
                open ? "flex" : "hidden"
              } gap-2 md:flex md:gap-7 flex-col md:flex-row text-right`}
            >
              <Link
                href={"/sobre-nosotros"}
                className="relative transition-transform duration-300 hover:scale-110 hover:text-shadow-white w-[155px]"
                onClick={() => setOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                href={"/contactanos"}
                className="relative transition-transform duration-300 hover:scale-110 hover:text-shadow-white"
                onClick={() => setOpen(false)}
              >
                Contáctanos
              </Link>
              <Link
                href={"/nuestros-proyectos"}
                className="relative transition-transform duration-300 hover:scale-110 hover:text-shadow-white"
                onClick={() => setOpen(false)}
              >
                Nuestros Proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
