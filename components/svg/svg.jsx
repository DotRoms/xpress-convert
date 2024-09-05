import Image from "next/image";
import expressSvg from "../../public/xpress.svg";
export function XpressSvg() {
  return (
    <Image
      src={expressSvg}
      width={250}
      height={250}
      alt="Logo de Xpress Convert"
    ></Image>
  );
}
