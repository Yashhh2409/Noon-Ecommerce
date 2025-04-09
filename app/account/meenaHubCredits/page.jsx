"use client";

import EmptyPage from "@/components/account/EmptyPage";
import { ShopContext } from "@/context/ShopContext";
import React, { useState, useContext } from "react";

const tabs = ["Credits", "Transfers"];

const page = () => {
  const { currency } = useContext(ShopContext);

  const [activeTab, setActiveTab] = useState("Credits");

  console.log("Activetab is : ", activeTab);
  

  const renderTabContent = () => {
    switch (activeTab) {
      case "Credits":
        return (
          <EmptyPage
            image={"/icons-svg/credits_blanks.svg"}
            heading={"No credits available"}
            subHeading={
              "Credits and cashback you accumulate from any marketplace on noon will display here"
            }
            hrefRoute={"/"}
          />
        );

      case "Transfers":
        return (
          <EmptyPage
            image={"/icons-svg/transfers_blanks.svg"}
            heading={"No previous bank transfers"}
            subHeading={
              "Requests to transfer your credits to your bank account will display here"
            }
            hrefRoute={"/"}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 px-2 my-5">
      <h1 className="text-[28px] font-bold text-secondary">MeenaHub Credits</h1>

      <div className="w-full bg-blue-200 flex p-5 gap-10 leading-tight">
        <div>
          <p className="text-[14px] text-primary">Total credits</p>
          <strong className="text-[24px]">{currency} 0.00</strong>
        </div>
        <div className="flex gap-2">
          <button className="py-1 px-4 bg-[#3E72F7] rounded-sm text-[14px] cursor-pointer text-white uppercase font-bold">
            Redeem gift card
          </button>
          <button className="py-1 px-4 bg-white rounded-sm text-[14px] cursor-pointer text-[#3E72F7] border-2 border-[#3E72F7] uppercase font-bold">
            withdraw
          </button>
        </div>
      </div>

      {/* tabs  */}
      <div className="w-full h-auto bg-white p-5 py-8">
        <div className="flex gap-4 text-secondary text-[16px] font-semibold">
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={` cursor-pointer ${
                activeTab === tab ? "relative text-blue-600 border-b-[3px] px-2 border-blue-600" : ""
              } `}
            >
              {tab}
            </p>
          ))}
        </div>
        <hr className="w-full border-primary" />
        {renderTabContent()}
      </div>
    </div>
  );
};

export default page;
