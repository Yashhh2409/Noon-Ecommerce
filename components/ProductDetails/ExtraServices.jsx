import { ShopContext } from "@/context/ShopContext";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faAngleRight,
  faTruckFast,
  faBank,
  faRotateForward,
  faHandHoldingHand,
  faFolderMinus,
  faIdBadge,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ExtraServices = () => {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      {/* Add banner */}
      <div className="flex items-center justify-between border p-2 rounded-md">
        <Image src={"/icons-svg/iphone.png"} width={35} height={35} />
        <h2 className="max-w-60 text-sm text-gray-700">
          Apple iPhone 16 Pro Max Case With MagSafe - Clear
        </h2>
        <div className="flex flex-col justify-center items-center space-x-2">
          <p className="text-sm text-gray-800">
            {currency}{" "}
            <span className="font-bold text-gray-800 text-[18px]">145.00</span>
          </p>
          <div className="flex gap-4">
            <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
              express
            </span>
            <p className="text-gray-400 text-sm bg-gray-200 px-2 py-0.5 rounded-lg text-center">
              Ad
            </p>
          </div>
        </div>
      </div>

      {/* Bank Offers */}
      <div className="mt-4">
        <h2 className="text-gray-600 font-bold tracking-wide">BANK OFFERS</h2>
        <div className="border rounded-lg bg-gray-50">
          <div className="flex gap-4 justify-center items-center px-5 py-2">
            <FontAwesomeIcon icon={faCreditCard} className="text-yellow-400" />
            <p className="text-gray-500">
              <span className="text-sm text-gray-800 font-bold">
                Earn {currency} 264.95
              </span>{" "}
              cashback with the Marsheq noon credit card.
            </p>
            <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
          </div>
          <hr />
          <div className="flex gap-4 justify-between items-center px-5 py-2">
            <FontAwesomeIcon icon={faBank} className="text-yellow-400" />
            <p className="text-gray-500">
              cashback with the Marsheq noon credit card.
            </p>
            <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Seller */}
      <div className="mt-4">
        <h2 className="text-gray-600 font-bold tracking-wide mb-4">SELLER</h2>
        <div className="border rounded-lg bg-gray-50">
          <div className="flex gap-4 justify-between items-center px-5 py-2">
            <div className="w-auto h-auto flex justify-center items-center gap-6 px-5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#FFF8EC] py-5">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="text-gray-800  text-3xl"
                />
              </div>
              <div>
                <p className="text-gray-500">
                  <span className="text-sm text-gray-800 font-bold">
                    Sold by
                  </span>{" "}
                  <span className="text-blue-600 underline">noon</span>
                </p>
                <div>
                  <p className="text-gray-800 text-sm">72% Positive Rating</p>
                </div>
              </div>
            </div>

            <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
          </div>
          <hr />
          <div className="flex gap-4 flex-wrap justify-between items-center px-5 py-2">
            {/* first  */}
            <div className="flex justify-center items-center gap-5">
              <FontAwesomeIcon
                icon={faHandHoldingHand}
                className="text-yellow-500"
              />
              <div className="flex flex-col font-bold">
                <p className="text-gray-600">Partner Since</p>
                <p className="text-green-600">4+ Years</p>
              </div>
            </div>

            {/* second  */}
            <div className="flex justify-center items-center gap-5">
              <FontAwesomeIcon
                icon={faFolderMinus}
                className="text-yellow-500"
              />
              <div className="flex flex-col font-bold">
                <p className="text-gray-600">Item as Described</p>
                <p className="text-green-600">80%</p>
              </div>
            </div>

            {/* third  */}
            <div className="flex justify-center items-center gap-5">
              <FontAwesomeIcon
                icon={faRotateForward}
                className="text-yellow-500"
              />
              <p className="text-gray-600 font-bold">Low Return Seller</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warranty */}
      <div className="mt-4">
        <div className="border rounded-lg bg-gray-50">
          <div className="flex gap-4 justify-between items-center px-5 py-2">
            <div className="flex gap-5 justify-center items-center">
              <FontAwesomeIcon icon={faIdBadge} className="text-yellow-400" />
              <p className="text-gray-500">1 year warranty.</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
          </div>
          <hr />
          <div className="flex gap-4 justify-between items-center px-5 py-2">
            <div className="flex gap-5 justify-center items-center">
              <FontAwesomeIcon icon={faIdBadge} className="text-yellow-400" />
              <p className="text-gray-500">
                Enjoy hassle free returns with this offer.
              </p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Extra Offers */}
      <div className="mt-4">
        <div className="border rounded-lg bg-gray-50">
          <div className="flex gap-4 justify-between items-center px-5 py-2">
            <div className="flex gap-5 justify-center items-center">
              <FontAwesomeIcon icon={faTag} className="text-yellow-400" />
              <p className="text-gray-500 text-wrap">
                4 others offers from other sellers{" "}
                <span className="font-bold text-gray-600">
                  {currency} 5349.00
                </span>
              </p>
            </div>
            <p className="font-bold text-blue-500 text-nowrap">VIEW ALL</p>
          </div>
        </div>
      </div>

      {/* Adds and banners */}
      <div className="mt-4">
        <div className="border bg-gray-50">
          <div className="flex gap-4 justify-between items-center px-5 py-2">
            <div className="flex gap-5 justify-center items-center">
              <Image
                src={"/icons-svg/AnkerBannerImage.png"}
                alt="img"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-gray-800 font-bold">Carge fast, live more</p>
                <div className="flex items-center gap-1 text-blue-600">
                  <p>Shop Anker</p>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 justify-center items-center px-5 py-2">
            <div className="flex justify-center items-center">
              <Image src={"/icons-svg/banner.png"} width={65} height={65} className="w-full h-full"/>
            </div>
            <div>
              <p className="text-gray-600 text-sm  font-bold">Anker 20000 mAh Power Bank, Portable Charger {currency} <span className="text-lg text-gray-800">327.00</span></p>
              <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
              express
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
