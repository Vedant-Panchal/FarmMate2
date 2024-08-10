import React from "react";
import FarmMateLogo from "../../../public/FarmMate.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { fontrye } from "@/app/layout";
function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#FFF6F4] w-screen fixed z-10 top-0 left-0 px-6 py-2">
      <div className="flex items-center justify-between">
        <p className={`text-xl font-rye-regular ${fontrye}`}>Farmmate</p>
        <Image src={FarmMateLogo} alt="FarmMate Logo" width={50} height={50} />
      </div>
      <div className="relative">
        <div className="w-max h-max bg-teal-900 text-[#FFF6F4] p-1 size-3 rounded-full text-xs absolute">
          1
        </div>
        <ShoppingCart size={16} />
      </div>
    </nav>
  );
}

export default Navbar;
