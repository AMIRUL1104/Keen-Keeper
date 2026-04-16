import { House, Clock2, ChartLine } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

function Navbar() {
  return (
    <header className="w-full shadow-lg py-2.5 flex items-center justify-between lg:px-20 mx-auto">
      <h1 className=" font-black text-2xl">
        Keen<span className=" font-semibold text-[#244D3F] ">Keeper</span>
      </h1>

      <nav className="flex  items-center justify-between gap-4 text-base">
        <Link href={"/"}>
          <House size={14} className="mr-1 inline" />
          Home
        </Link>
        <Link href={"/timeline"}>
          <Clock2 size={14} className="mr-1 inline" />
          Timeline
        </Link>
        <Link href={"/stats"}>
          <ChartLine size={14} className="mr-1 inline" />
          Stats
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
