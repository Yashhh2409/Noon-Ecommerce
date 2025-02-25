import React from "react";
import Image from "next/image";
import dealsTitle1 from "@/public/deals/dealsTitle1.avif";
import dealsTitle2 from "@/public/deals/dealsTitle2.avif";
import dealsTitle3 from "@/public/deals/dealsTitle3.avif";
import deals1 from "@/public/deals/deals1.avif";
import deals2 from "@/public/deals/deals2.avif";
import deals3 from "@/public/deals/deals3.avif";
import deals4 from "@/public/deals/deals4.avif";
import deals5 from "@/public/deals/deals5.avif";
import deals6 from "@/public/deals/deals6.avif";

const Deals = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2">
      {/* first div  */}
      <div className="w-full sm:w-full md:w-full lg:w-full h-auto bg-[#FFE367]">
        <Image src={dealsTitle1} width={600} className="m-4 max-w-full" />

        <div className="flex flex-wrap items-center justify-evenly gap-2 m-2">
          <Image src={deals1} className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%]" />
          <Image src={deals2} className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%]" />
          <Image src={deals3} className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%]" />
          <Image src={deals4} className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%]" />
        </div>
      </div>

      {/* second div  */}
      <div className="w-full sm:w-full md:w-full lg:w-full bg-[#FFE367]">
        <Image src={dealsTitle2} width={600} />
      </div>

      {/* third div  */}
      <div className="w-full sm:w-full md:w-full lg:w-full bg-[#FFE367]">
        <Image src={dealsTitle3} width={600} className="m-4" />
        <div className="flex flex-col items-center justify-center m-4 gap-2">
          <Image src={deals5} className="w-[90%]" />
          <Image src={deals6} className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default Deals;
