"use client";

import HomeProductSlider from "@/components/Sliders/HomeProductSlider";
import { ShopContext } from "@/context/ShopContext";
import {
  faEllipsis,
  faListDots,
  faLock,
  faShare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

const page = () => {
  const { products } = useContext(ShopContext);

  return (
    <>
      <div className="w-full bg-[#F7F7FA] flex justify-between p-5 border-b">
        <h2 className="text-[24px] font-bold text-secondary">Wishlist</h2>
        <button className="bg-[#3866df] text-white px-4 py-1 rounded-md uppercase font-semibold">
          create new wishlist
        </button>
      </div>
      <div className="w-full bg-[#F7F7FA] flex flex-col lg:flex-row">
        {/* first  */}
        <div className="min-w-[25%] border-r p-5">
          <div className="w-full bg-gray-200 p-2">
            <div>
              {" "}
              <span className="text-[16px] mr-2">default</span>
              <span className="text-[16px] bg-[#3866df] text-white px-2 rounded-full">
                default
              </span>
            </div>
            <div>
              {" "}
              <span className="text-[16px] mr-2">2 items</span>
              <FontAwesomeIcon
                icon={faLock}
                width={20}
                height={20}
                className="w-3 h-3"
              />
            </div>
          </div>
        </div>

        {/* secondary */}
        <div className="min-w-[75%] ">
          <div className="w-full flex justify-between border-b py-5 px-4">
            <div className="flex justify-center items-center">
              {" "}
              <span className="text-[22px] mr-2 font-bold">default</span>
              <span className="text-[16px] bg-[#3866df] text-white px-2 rounded-full">
                default
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex justify-center items-center gap-2 px-5 py-1 border rounded-full ">
                <FontAwesomeIcon
                  icon={faShareNodes}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-[14px]">Share</span>
              </div>
              <div className="flex justify-center items-center gap-2 px-5 py-1 border rounded-full ">
                <FontAwesomeIcon
                  icon={faEllipsis}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-[14px]">More</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[300px]">
                <video width="100%" autoPlay loop muted>
                  <source src="/wishlist-empty-desktop.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="w-full flex flex-col items-center m-2 justify-center mx-auto">
              <h3 className="text-[22px] text-secondary font-bold">
                Ready to make a wish?
              </h3>
              <p className="text-[14px] text-primary">
                Start adding items you love to your wishlist by tapping on the
                heart icon
              </p>
            </div>
          </div>
          <div className="w-full mt-5">
            <HomeProductSlider
              firstTxt={"Items you"}
              secondTxt={"previousely viewed"}
              products={products.slice(25, 40)}
              slidesPerView={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
