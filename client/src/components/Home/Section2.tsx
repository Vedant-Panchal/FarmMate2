import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <div className="flex items-center gap-20 justify-between h-72">
      <Category text="Best Sellers" />
      <Category text="Vegetable Seeds" />
      <Category text="Fertilizers" />
      <Category text="Pesticides" />
    </div>
  );
}

export default Section2;

function Category({ text,link }: { text: string,link?:string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="rounded-full bg-yellow-300 outline outline-pink-300 outline-offset-8 size-32">
        <Image src={link!} alt="category" width={32} height={32} />
      </div>
      <p>{text}</p>
    </div>
  );
}
