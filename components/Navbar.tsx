import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between font-semibold text-white p-5">
      <div className="justify-items-start">
        <Link href={"/"}>
          <Image alt="Breavance" src={"/nombre.png"} width={200} height={200} />
        </Link>
      </div>
      <div className="flex gap-7">
        <Link
          href={"/sobre-nosotros"}
          className="hidden sm:block relative transition-transform duration-300 hover:scale-110 hover:text-shadow-white"
        >
          Sobre Nosotros
        </Link>
        <Link
          href={"/contactanos"}
          className="hidden sm:block relative transition-transform duration-300 hover:scale-110 hover:text-shadow-white"
        >
          Contáctanos
        </Link>
        <Link
          href={"/nuestros-proyectos"}
          className="hidden sm:block relative transition-transform duration-300 hover:scale-110 hover:text-shadow-white"
        >
          Nuestros Proyectos
        </Link>
      </div>
    </div>
  );
}
