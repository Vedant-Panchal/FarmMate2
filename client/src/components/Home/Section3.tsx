import React from "react";

function Section3() {
  return (
    <div className="h-max mb-10 py-10 w-max  bg-gray-100 rounded-lg px-20">
      <div className="py-4 flex-1 flex justify-center align-middle text-4xl">
        <h1 className="font-medium">Why us?</h1>
      </div>
      <div className="py-8 flex justify-around gap-80 items-center text-lg">
        <div className="flex justify-center flex-col items-center ">
          <img src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502" alt="Secure-recycle" className="size-14"/>
          <h2>Secure and Recyclable</h2>
          <h2>Packaging</h2>
        </div>  
        <div className="flex justify-center flex-col items-center">
          <img src="https://www.ugaoo.com/cdn/shop/files/Returns_2x_9d73addf-8f69-42d6-b602-79cc4bb7b28d_small.png?v=1656421516" alt="free replacements" className="size-14" />
          <h2>Free Replacements if</h2>
          <h2>Damaged</h2>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src="https://www.ugaoo.com/cdn/shop/files/Pot_2x_296c9f06-b47d-4dc9-b00e-18c42a3e165e_small.png?v=1656421532" alt="self watering" className="size-14" />
          <h2>Self-Watering Pots with</h2>
          <h2>Every Plant</h2>
        </div>
      </div>
    </div>
  );
}

export default Section3;
