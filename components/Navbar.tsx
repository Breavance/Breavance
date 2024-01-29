"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => { setShowMenu(false) }
    return (<div className="flex justify-between font-semibold items-center pt-5 px-5">

        <Link
            href={'/'}><Image
                alt="Breavance logo"
                src={"/nombre.svg"}
                width={200}
                height={200}
                priority={true}
            /></Link>
        <div className="flex md:hidden items-center justify-center bg-[#008080] h-10 w-10 rounded-lg" onClick={() => setShowMenu(!showMenu)}>
            <TiThMenu />
        </div>
        <div className="flex gap-7 max-md:hidden items-center">
            <Link href={'/'} className="hover:text-[#EF4665]">Inicio</Link>
            <Link href={'/sobre-nosotros'} className="hover:text-[#EF4665]">Sobre Nosotros</Link>
            <Link href={'/contactanos'} className="hover:text-[#EF4665]">Contáctanos</Link>
            <div className="bg-[#008080] p-2 rounded-lg hover:bg-[#EF4665]">
                <Link href={'/nuestros-proyectos'} className="hover:bg-[#EF4665]">Nuestros Proyectos</Link>
            </div>
        </div>
        {showMenu && (<Menu closeMenu={closeMenu} />)}
    </div >)
}

function Menu({ closeMenu }) {
    return (<div className="fixed md:hidden right-5 top-16 bg-[#008080] p-5 left rounded-lg">
        <Link href={'/'} className="hover:text-[#EF4665]" onClick={closeMenu}>Inicio</Link>
        <p><Link href={'/sobre-nosotros'} className="hover:text-[#EF4665]" onClick={closeMenu}>Sobre Nosotros</Link></p>
        <p><Link href={'/contactanos'} className="hover:text-[#EF4665]" onClick={closeMenu}>Contáctanos</Link></p>
        <button>
            <Link href={'/nuestros-proyectos'} className="hover:text-[#EF4665]" onClick={closeMenu}>Nuestros Proyectos</Link>
        </button>
    </div>)
}