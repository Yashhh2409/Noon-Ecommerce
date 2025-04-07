"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 px-10 bg-[#F3F4F8]">
      <div className="col-span-3 p-4">
        <div className="bg-white w-full rounded-xl p-4 mb-5 flex flex-col gap-4">
          <div className="text-secondary">
            <h2 className="font-bold">Hala!</h2>
            <h2>dhande.yash2001@gmail.com</h2>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-semibold">Profile Completion</p>
            <p className="bg-yellow-400 rounded-full px-2">20%</p>
          </div>
          <div className="w-full bg-gray-500 overflow-hidden h-2 rounded-full">
            <div className="bg-yellow-500 h-2" style={{ width: "20%" }}></div>
          </div>
          <div className="w-full">
            <Image
              src="/categoryimages/categoryBanner.png"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white w-full rounded-xl p-4 flex flex-col gap-4">
          <div>
            <h2>Hala!</h2>
            <h2>dhande.yash2001@gmail.com</h2>
          </div>
          <div className="flex gap-2 items-center">
            <p>Profile Completion</p>
            <p className="bg-yellow-400 rounded-full px-2">20%</p>
          </div>
          <div className="w-full bg-gray-500 overflow-hidden h-2 rounded-full">
            <div className="bg-yellow-500 h-2" style={{ width: "20%" }}></div>
          </div>
        </div>
      </div>
      <div className="col-span-9 flex flex-col gap-4 justify-center items-center p-40">
        <div className="">
          <Image
            src={"/icons-svg/orders_blanks.svg"}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-secondary font-bold text-center">
            You have no previous orders
          </h2>
          <p className="text-primary text-center">
            We have thousands of items available across our wide range of
            sellers. Start ordering today!
          </p>
        </div>
        <Link href={"/"} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          continue shopping
        </Link>
      </div>
    </div>
  );
};

export default page;
