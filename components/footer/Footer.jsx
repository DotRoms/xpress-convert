import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-40 bg-orange-100">
      <p className="">
        2024 @ Create by{" "}
        <Link target="_blank" className="font-extrabold" href="https://romain-hernandez.com/">
          Roms
        </Link>
      </p>
      <p>
      If you wish, consult the source code <Link href="https://github.com/Roms-Her/xpress-convert" target="_blank" className="font-bold">here</Link> 🙋‍♂️
      </p>
      
    </div>
  );
}
