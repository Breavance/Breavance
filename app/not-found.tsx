import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto text-center">
      <Image
        alt="Sitio en conatrucción"
        src={"/not-found.png"}
        className="mx-auto"
        width={300}
        height={300}
      />
      <h2 className="text-2xl sm:text-5xl">Página No Encontrada</h2>
      <p className="text-xl sm:text-2xl">LLegaste a un destino no propuesto</p>
      <br />
      <Link
        href="/"
        className="sm:text-xl font-semibold hover:scale-110 hover:text-shadow-white"
      >
        Vuelve al Home
      </Link>
    </div>
  );
}
