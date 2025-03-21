import React, { useContext } from "react";
import Image from "next/image";
import { ShopContext } from "@/context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

const FrequentlyBought = ({ productId, product, mainImage }) => {
  const { currency } = useContext(ShopContext);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">
        Fequently Bought Together
      </h1>
      <div className="flex justify-between gap-5">
        {/* first  */}
        <div className="flex justify-start border-2 border-gray-100 p-4 rounded-md gap-4">
          {/* box 1 */}
          <div className="p-5 text-gray-800 border border-gray-200 rounded-[20px] ">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="peer hidden" />
              <Image
                src={"/icons-svg/checkbox-square_checked_v2.svg"}
                alt="img"
                width={20}
                height={20}
              />
            </label>

            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={mainImage}
                alt="img"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <p className="text-gray-800 font-bold">
                {currency} {product?.price}.00
              </p>
              <div className="w-40 flex flex-col justify-center items-center -mt-4">
                <span className="w-full truncate overflow-hidden">
                  {product?.name}
                </span>
                <span className="w-fit bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                  express
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-gray-800">
            <FontAwesomeIcon icon={faPlus} className="text-xl" />
          </div>
          {/* box 2 */}
          <div className="p-5 text-gray-800 border border-gray-200 rounded-[20px] ">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="peer hidden" />
              <Image
                src={"/icons-svg/checkbox-square_checked_v2.svg"}
                alt="img"
                width={20}
                height={20}
              />
            </label>

            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={mainImage}
                width={80}
                alt="img"
                height={80}
                className="rounded-lg"
              />
              <p className="text-gray-800 font-bold">
                {currency} {product?.price}.00
              </p>
              <div className="w-40 flex flex-col justify-center items-center -mt-4">
                <span className="w-full truncate overflow-hidden whitespace-nowrap">
                  {product?.name}
                </span>
                <span className="w-fit bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                  express
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-gray-800">
            <FontAwesomeIcon icon={faPlus} className="text-xl" />
          </div>
          {/* box 3 */}
          <div className="p-5 text-gray-800 border border-gray-200 rounded-[20px] ">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="option" className="peer hidden" />
              <Image
                src={"/icons-svg/checkbox-square_checked_v2.svg"}
                alt="img"
                width={20}
                height={20}
              />
            </label>

            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={mainImage}
                alt="img"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <p className="text-gray-800 font-bold">
                {currency} {product?.price}.00
              </p>
              <div className="w-40 flex flex-col justify-center items-center -mt-4">
                <span className="w-full truncate overflow-hidden whitespace-nowrap">
                  {product?.name}
                </span>
                <span className="w-fit bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                  express
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-gray-800">
          <FontAwesomeIcon icon={faEquals} className="text-xl" />
        </div>
        {/* second  */}
        <div className="w-[30%] bg-[#F8F9FD] p-5 flex flex-col text-gray-600 items-center justify-center gap-5">
          <h1 className="text-4xl  font-semibold">
            {currency} {product.price}.00
          </h1>
          <p>Package Total for all 3 items together</p>
          <button className="border border-blue-600 rounded-sm py-4 px-5  text-blue-600 font-semibold">
            Buy 3 together {currency} {product.price}.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyBought;
