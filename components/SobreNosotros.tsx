import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function SobreNosotros() {
  return (
    <div className="text-center">
      <div className="md:flex md:justify-between md:items-center md:flex-row-reverse pb-20">
        <Image
          alt="Logo en blanco"
          src={"/nombre-blanco.png"}
          width={400}
          height={400}
          className="mx-auto md:mx-0"
        />
        <div className="md:max-w-[340px] lg:max-w-[480px] pt-5 md:pt-0">
          <h2 className="text-2xl font-bold pb-5">Sobre Nosotros</h2>
          <p className="pb-5">
            En Breavance, nuestra misión es cerrar la brecha entre el talento
            emergente y las oportunidades en el mercado TI.
          </p>
          <p>
            Entendemos las dificultades que enfrentan las personas que inician
            su carrera:{" "}
            <span className="font-semibold">
              altos requisitos de experiencia
            </span>
            {""}, <span className="font-semibold">procesos inaccesibles</span> y{" "}
            <span className="font-semibold">
              pocas oportunidades reales para crecer
            </span>
            {""}.
          </p>
        </div>
      </div>
      <div className="text-left">
        <p>Por eso creamos un espacio gratuito, donde los aspirantes pueden:</p>
        <div className="py-5">
          <div className="flex bg-white/10 rounded-2xl p-[10px] box-shadow-white border">
            <CheckBadgeIcon className="text-white w-6 md:w-8 min-w-[24px] mr-[14px] md:mr-5" />
            <p className="content-center">
              Vivir una experiencia laboral auténtica a través de proyectos
              reales.
            </p>
          </div>
          <div className="flex my-4 bg-white/10 rounded-2xl p-[10px] box-shadow-white border">
            <CheckBadgeIcon className="text-white w-6 md:w-8 min-w-[24px] mr-[14px] md:mr-5" />
            <p className="content-center">
              Desarrollar habilidades técnicas y colaborativas en un entorno
              práctico.
            </p>
          </div>
          <div className="flex bg-white/10 rounded-2xl p-[10px] box-shadow-white border">
            <CheckBadgeIcon className="text-white w-6 md:w-8 min-w-[24px] mr-[14px] md:mr-5" />
            <p className="content-center">
              Conectarse con una comunidad comprometida que fomenta el
              aprendizaje y el crecimiento.
            </p>
          </div>
        </div>
      </div>
      <div className="text-left">
        <p>
          Nuestro enfoque combina asesoramiento, trabajo en equipo con
          metodologías ágiles y el desarrollo de proyectos sostenibles.
        </p>
        <p className="py-5">
          Valoramos el compromiso, porque creemos que con esfuerzo y dedicación,
          cualquier persona puede alcanzar su máximo potencial.
        </p>
        <p>
          En Breavance no solo construimos proyectos, construimos futuros.
          ¡Únete y sé parte de esta experiencia transformadora!
        </p>
      </div>
    </div>
  );
}
