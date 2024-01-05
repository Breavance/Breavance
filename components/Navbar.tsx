import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (<div className="flex justify-between font-semibold mx-5">
        <div className="justify-items-start">
            <Image
                className=""
                alt=""
                src={"/nombre.png"}
                width={200}
                height={200}
            />
        </div>
        <div className="flex gap-7">
            <Link href={'/sobre-nosotros'} className="">Sobre Nosotros</Link>
            <Link href={''}>Contáctanos</Link>
            <Link href={''}>Nuestros Proyectos</Link>
        </div>
    </div>)
}