import Image from "next/image";

export default function Slides() {
  return (
    <div>
      <div className="md:flex pb-20 md:justify-between md:items-center md:flex-row-reverse">
        <Image
          alt="creatividad"
          src={"/Creatividad.png"}
          width={300}
          height={300}
          className="mx-auto md:mx-0"
        />
        <div className="md:max-w-[340px] lg:max-w-[480px] text-center pt-5 md:pt-0">
          <h2 className="text-2xl font-bold pb-5">Deja fluir tus ideas</h2>
          <p>
            Contribuye a proyectos con el apoyo de otras personas. Desde páginas
            web y aplicaciones hasta juegos, explora una experiencia práctica
            enriquecedora. Desarrolla tus habilidades y adquiere experiencia
            demostrable que te ayudará a conseguir tu primer empleo o
            simplemente a crear algo único.
          </p>
        </div>
      </div>

      <div className="md:flex pb-20 md:justify-between md:items-center">
        <Image
          alt="trabajo en equipo"
          src={"/Trabajo-en-Equipo.png"}
          width={300}
          height={300}
          className="mx-auto md:mx-0"
        />
        <div className="md:max-w-[340px] lg:max-w-[480px] text-center items-center pt-5 md:pt-0">
          <h2 className="text-2xl font-bold pb-5">
            Trabaja con diferentes personas
          </h2>
          <p>
            Conecta con personas de distintos lugares y culturas. Construye
            redes de contacto y aprende de ellas. Gana experiencia trabajando en
            equipos multidisciplinarios, experimentando diversos puntos de vista
            y enriqueciendo tus habilidades con perspectivas únicas.
          </p>
        </div>
      </div>

      <div className="md:flex pb-20 md:justify-between md:flex-row-reverse">
        <Image
          alt="innovación"
          src={"/Innovacion.png"}
          width={300}
          height={300}
          className="mx-auto md:mx-0"
        />
        <div className="md:max-w-[340px] lg:max-w-[480px] text-center pt-5 md:pt-0">
          <h2 className="text-2xl font-bold pb-5">Innova en cada proyecto</h2>
          <p>
            Participa en los proyectos activos que más te interesen, aportando
            ideas sobre funcionalidades, diseño y más. Tu opinión es clave para
            mejorar cada proyecto, permitiéndote probar y practicar nuevas
            técnicas mientras haces una contribución significativa.
          </p>
        </div>
      </div>
    </div>
  );
}
