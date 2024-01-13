import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
    const showMenu = false;
    return (<div className="navbar flex justify-between font-semibold mx-5 mt-5">
        <div className="flex w-full justify-between">
            <Image
                className="w-1/2"
                alt=""
                src={"/nombre.png"}
                width={200}
                height={200}
            />
            <TiThMenu
                className="md:hidden"
                onClick={showMenu}
            />
        </div>
        <div className="flex gap-7 max-md:hidden w-1/2">
            <Link href={'/sobre-nosotros'} className="">Sobre Nosotros</Link>
            <Link href={''}>Contáctanos</Link>
            <button>
                <Link href={''}>Nuestros Proyectos</Link>
            </button>
        </div>
        {showMenu && (
            <div className="fixed md:hidden">
                hola
            </div>
        )}
    </div>)
}