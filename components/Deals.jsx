import React from "react";
import Image from "next/image";
import Title from "./Title";

const Deals = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* First Section */}
      <div className="w-full h-auto bg-[#FFE367] p-4">
        <div className="mb-5">
          <Title firstTxt={"MORE REASONS"} secondTxt={" TO SHOP"} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["deals1.png", "deals2.png", "deals3.png", "deals4.png"].map(
            (deal, index) => (
              <div key={index} className="relative w-full aspect-square">
                <Image
                  src={`/deals/${deal}`}
                  layout="fill"
                  objectFit="cover"
                  alt={`Deals ${index + 1}`}
                  className="rounded-md"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Second Section (Centered Title) */}
      <div className="w-full h-auto bg-[#FFE367] p-4 flex items-start justify-start">
        <Title firstTxt={"MEGA DEALS"} secondTxt={" 24 HRS ONLY"} />
      </div>

      {/* Third Section */}
{/* Third Section */}
<div className="w-full bg-[#FFE367] p-4 flex flex-col items-start justify-center min-h-[500px] sm:min-h-[400px]">
  <Title firstTxt={"IN"} secondTxt={" FOCUS"} />

  <div className="grid grid-cols-1 gap-4 sm:gap-2 p-4 w-full h-full">
    {["deals5.png", "deals6.png"].map((deal, index) => (
      <div key={index} className="relative w-full aspect-[16/7] sm:aspect-[16/9] rounded-md overflow-hidden flex-grow">
        <Image
          src={`/deals/${deal}`}
          layout="fill"
          objectFit="cover"
          alt={`Deals ${index + 5}`}
          className="rounded-md"
        />
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Deals;
