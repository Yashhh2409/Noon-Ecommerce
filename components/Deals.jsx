import React, { useContext } from "react";
import Image from "next/image";
import Title from "./Title";
import { ShopContext } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Link from "next/link";

const megaDeals = [
  {
    id: 1,
    title:
      "Samsung Galaxy S24 Ultra Dual SIM Titanium Black 12GB RAM 256GB 5G - International Version",
    originalPrice: 5399,
    price: 2945,
    image: "/deals/MegaDeals/megadeals1.avif",
    tag: "Smartphone deals",
  },
  {
    id: 2,
    title:
      "Apple iPhone 15 Pro Max 256GB, Natural Titanium - International Version",
    originalPrice: 5899,
    price: 3699,
    image: "/deals/MegaDeals/megadeals2.avif",
    tag: "Smartphone deals",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Black",
    originalPrice: 1499,
    price: 999,
    image: "/deals/MegaDeals/megadeals3.avif",
    tag: "Audio & Accessories",
  },
  {
    id: 4,
    title: "Dell XPS 15 Laptop - 13th Gen Intel Core i7, 16GB RAM, 512GB SSD",
    originalPrice: 6799,
    price: 4999,
    image: "/deals/MegaDeals/megadeals4.avif",
    tag: "Laptop deals",
  },
];

const Deals = () => {
  const { currency, addToCart } = useContext(ShopContext);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    addToCart(id);
    toast.success("Product Added to cart!");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
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
      <div className="relative w-full h-auto bg-[#FFE367] p-4">
        <div className="flex justify-between mb-5">
          <div>
            <Title firstTxt={"Mega"} secondTxt={"Deals"} />
          </div>

          <Link href={"/"} className="bg-secondary px-4 flex items-center justify-center rounded-md">
            <p className="uppercase font-bold text-light text-xs lg:text-lg">All Deals</p>
          </Link>

          <div className="absolute top-0 left-40 lg:left-56 flex gap-2 items-center text-light bg-secondary w-fit py-1 px-2 rounded-b-lg">
            <FontAwesomeIcon icon={faStopwatch} width={25}/>
            <p className="text-xs lg:text-[15px]">23h: 06m</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {megaDeals.map((deal, index) => (
            <div key={index} className="relative w-full aspect-square">
              <div className="bg-[#F5F4F4] h-full rounded-lg overflow-hidden">
                <div className="flex flex-col gap-[2px]">
                  <div className="w-fit flex items-center text-xs lg:text-[15px] text-[#E42921] font-bold h-5 lg:h-8 bg-[#F4E20C] rounded-bl-lg rounded-tr-lg px-2 self-end ">
                    <p className="text-nowrap">{deal.tag}</p>
                  </div>
                  <div className="w-[85px] h-[90px] lg:w-24 lg:h-28 self-center">
                    <Image
                      src={deal.image}
                      width={40}
                      height={40}
                      alt="img"
                      className="object-cover w-full h-full"
                    />
                    <button
                      onClick={handleAddToCart}
                      className="relative flex items-center justify-center bottom-8 -right-[75px] lg:-right-[120px] text-gray-600 text-sm bg-white p-2 rounded-md shadow z-20"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                  <div className="bg-[#ECECEC]">
                    <div className="w-full px-2">
                      <div className="text-ellipsis text-primary line-clamp-2 text-xs lg:text-sm">
                        {deal.title}
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="flex gap-2 text-secondary font-bold items-baseline">
                        <p className="text-[14px] lg:text-[18px] line-through decoration-red-600">
                          {deal.originalPrice}
                        </p>
                        <div className="flex gap-2 text-[16px] lg:text-[24px]">
                          <p>{deal.price}</p>
                          <p>{currency}</p>
                        </div>
                      </div>
                    </div>
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
