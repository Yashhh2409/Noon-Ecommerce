import React from "react";
import Image from "next/image";
import dealsTitle1 from "@/public/deals/dealsTitle1.avif";
import dealsTitle2 from "@/public/deals/dealsTitle2.avif";
import dealsTitle3 from "@/public/deals/dealsTitle3.avif";
import Title from "./Title";

const Deals = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* First div */}
      <div className="w-full h-auto bg-[#FFE367] p-4">
      <Title firstTxt={"MORE REASONS"} secondTxt={" TO SHOP"} />

        <div className="flex flex-wrap items-center justify-evenly gap-2 m-2">
          {/* Deals Images with rounded-md */}
          <div className="relative w-[40%] h-[150px] rounded-md overflow-hidden">
            <Image src="/deals/deals1.png" layout="fill" objectFit="contain" alt="Deals 1" className="rounded-md" />
          </div>
          <div className="relative w-[40%] h-[150px] rounded-md overflow-hidden">
            <Image src="/deals/deals2.png" layout="fill" objectFit="contain" alt="Deals 2" className="rounded-md" />
          </div>
          <div className="relative w-[40%] h-[150px] rounded-md overflow-hidden">
            <Image src="/deals/deals3.png" layout="fill" objectFit="contain" alt="Deals 3" className="rounded-md" />
          </div>
          <div className="relative w-[40%] h-[150px] rounded-md overflow-hidden">
            <Image src="/deals/deals4.png" layout="fill" objectFit="contain" alt="Deals 4" className="rounded-md" />
          </div>
        </div>
      </div>

      {/* Second div (Middle div with title at top) */}
      <div className="w-full h-auto bg-[#FFE367] p-4 flex flex-col items-center">
      <Title firstTxt={"MEGA DEALS"} secondTxt={" 24 HRS ONLY"} />
      </div>

      {/* Third div */}
      <div className="w-full h-auto bg-[#FFE367] p-4">
      <Title firstTxt={"IN"} secondTxt={" FOCUS"} />

        <div className="flex flex-col items-center justify-center m-4 gap-2">
          <div className="relative w-[90%] h-[150px] rounded-md overflow-hidden">
            <Image src="/deals/deals5.png" layout="fill" objectFit="contain" alt="Deals 5" className="rounded-lg" />
          </div>
          <div className="relative w-[90%] h-[150px] rounded-md overflow-hidden">
            <Image src="/deals/deals6.png" layout="fill" objectFit="contain" alt="Deals 6" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
