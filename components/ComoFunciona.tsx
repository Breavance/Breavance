import Image from "next/image";

export default function ComoFunciona() {
  return (
    <div>
      <div className="flex justify-between">
        <Image alt="Proceso 1" src={"/proceso1.png"} width={100} height={100} />
        <Image alt="Proceso 2" src={"/proceso2.png"} width={100} height={100} />
        <Image alt="Proceso 3" src={"/proceso3.png"} width={100} height={100} />
        <Image alt="Proceso 4" src={"/proceso4.png"} width={100} height={100} />
      </div>
      <div className="flex justify-between">
        <Image
          alt="Proceso 1"
          src={"/proceso11.png"}
          width={100}
          height={100}
        />
        <Image
          alt="Proceso 2"
          src={"/proceso22.png"}
          width={100}
          height={100}
        />
        <Image
          alt="Proceso 3"
          src={"/proceso33.png"}
          width={100}
          height={100}
        />
        <Image
          alt="Proceso 4"
          src={"/proceso44.png"}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
