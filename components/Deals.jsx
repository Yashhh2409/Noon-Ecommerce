import React from "react";
import Image from "next/image";
import Title from "./Title";

const megaDeals = [
  {
    Title:
      "Samsung Galaxy S24 Ultra Dual SIM Titanium Black 12GB RAM 256GB 5G - International Version",
    OriginalPrice: "5399",
    Price: "2945",
    image: "/deals/MegaDeals/megadeals1.avif",
    tag: "Smartphone deals",
  },
  {
    Title:
      "Apple iPhone 15 Pro Max 256GB, Natural Titanium - International Version",
    OriginalPrice: "5899",
    Price: "3699",
    image: "/deals/MegaDeals/megadeals2.avif",
    tag: "Smartphone deals",
  },
  {
    Title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Black",
    OriginalPrice: "1499",
    Price: "999",
    image: "/deals/MegaDeals/megadeals3.avif",
    tag: "Audio & Accessories",
  },
  {
    Title: "Dell XPS 15 Laptop - 13th Gen Intel Core i7, 16GB RAM, 512GB SSD",
    OriginalPrice: "6799",
    Price: "4999",
    image: "/deals/MegaDeals/megadeals4.avif",
    tag: "Laptop deals",
  },
];

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
      <div className="w-full h-auto bg-[#FFE367] p-4">
        <div className="mb-5">
          <Title firstTxt={"Mega"} secondTxt={"Deals"} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {megaDeals.map((deal, index) => (
            <div key={index} className="relative w-full aspect-square">
              <div className="bg-red-500 h-full rounded-lg">
                <div className="flex flex-col">
                  <div className="w-fit flex items-center text-[#E42921] font-bold h-8 bg-[#F4E20C] rounded-bl-lg rounded-tr-lg px-2 ml-[69px]">
                    <p>{deal.tag}</p>
                  </div>
                  <div className="w-32 h-32">
                    <Image src={deal.image} width={40} height={40} alt="img" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full bg-[#FFE367] p-4 flex flex-col items-start justify-center min-h-[500px] sm:min-h-[400px]">
        <Title firstTxt={"IN"} secondTxt={" FOCUS"} />

        <div className="grid grid-cols-1 gap-4 sm:gap-2 p-4 w-full h-full">
          {["deals5.png", "deals6.png"].map((deal, index) => (
            <div
              key={index}
              className="relative w-full aspect-[16/7] sm:aspect-[16/9] rounded-md overflow-hidden flex-grow"
            >
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
