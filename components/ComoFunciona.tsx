import Image from "next/image";

export default function ComoFunciona() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold pb-20 text-shadow-white">
        ¿Cómo funciona?
      </h2>
      <h2 className="text-2xl font-bold pb-20">¿Cómo funciona?</h2>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 md:max-w-[340px] lg:max-w-[480px] pb-20">
          <Image
            alt="La Entrevista"
            src={"/proceso1.png"}
            width={100}
            height={100}
            className="mx-auto"
          />
          <div className="pt-5">
            <h3 className="text-xl font-bold pb-5">1. La entrevista:</h3>
            <p>
              ¡Primero, la entrevista! Eso sí, puede que no quedes seleccionado
              a la primera. Pero no te preocupes, tendrás hasta tres
              oportunidades para intentarlo. Cada vez recibirás feedback
              detallado para mejorar. Sin embargo, las entrevistas podrían
              variar, así que prepárate para nuevos retos en cada intento.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:max-w-[340px] lg:max-w-[480px] pb-20">
          <Image
            alt="Práctica"
            src={"/proceso2.png"}
            width={100}
            height={100}
            className="mx-auto"
          />
          <div className="pt-5">
            <h3 className="text-xl font-bold pb-5">2. Práctica:</h3>
            <p>
              Calienta motores con una o dos semanas de proyectos de práctica.
              Durante este tiempo, te ayudaremos a fortalecer tu portfolio y
              crear mini proyectos que podrás agregar a tu perfil profesional.
              Es el momento perfecto para prepararte antes de asumir retos más
              grandes.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:max-w-[340px] lg:max-w-[480px] pb-20">
          <Image
            alt="Código"
            src={"/proceso3.png"}
            width={100}
            height={100}
            className="mx-auto"
          />
          <div className="pt-5">
            <h3 className="text-xl font-bold pb-5">3. Código:</h3>
            <p>
              Ahora sí, ¡manos a la obra! Empiezas a desarrollar tus primeros
              tickets dentro del proyecto que hayas elegido o al que se te haya
              asignado. Aquí comenzarás a aplicar tus conocimientos en un
              entorno real y a ganar experiencia práctica.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:max-w-[340px] lg:max-w-[480px] pb-20">
          <Image
            alt="Repite y Crece"
            src={"/proceso4.png"}
            width={100}
            height={100}
            className="mx-auto"
          />
          <div className="pt-5">
            <h3 className="text-xl font-bold pb-5">4. Repite y crece:</h3>
            <p>
              Cuando completes un mes en el desarrollo de proyectos, tendrás la
              opción de seguir en el mismo equipo o explorar un nuevo desafío.
              Además, si llegas a los cinco meses de trabajo constante, podrás
              postularte para convertirte en Team Leader, liderando equipos y
              proyectos con tu experiencia acumulada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
