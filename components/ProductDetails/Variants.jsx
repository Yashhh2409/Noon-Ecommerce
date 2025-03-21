import React, { useState } from "react";
import Image from "next/image";
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

const Variants = () => {
  const images = [
    "/icons-svg/iphone.png",
    "/icons-svg/iphone.png",
    "/icons-svg/iphone.png",
    "/icons-svg/iphone.png",
  ];

  const Memories = ["1 TB", "128 GB", "256 GB", "512 GB"];

  const Versions = ["International Version", "Middle East Version"];

  const ModelNames = ["Iphone 16 Pro", "Iphone 16 Pro Max"];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMemory, setSelectedMemory] = useState(Memories[0]);
  const [selectedVersion, setSelectedVersion] = useState(Versions[0]);
  const [selectedModelNames, setSelectedModelNames] = useState(ModelNames[0]);

  return (
    <div className="flex flex-col gap-5">
      {/* color  */}
      <div className="flex flex-col gap-4 mt-2">
        <p className="text-gray-500 font-bold text-md">
          Colour Name: <span className="text-gray-600">Natural Titanium</span>
        </p>

        <div className="w-full overflow-x-auto scrollbar-hide flex gap-2">
          {images.map((src, index) => (
            <div
              key={index}
              className={`w-16 flex justify-center items-center border p-2 rounded-md aspect-square cursor-pointer ${
                selectedImage === index ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={src}
                width={25}
                height={20}
                alt={`Variant ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Memory  */}
      <div className="flex flex-col gap-4 mt-2">
        <p className="text-gray-500 font-bold text-md">
          Colour Name: <span className="text-gray-600">{selectedMemory}</span>
        </p>

        <div className="w-full overflow-x-auto scrollbar-hide flex gap-2 text-gray-500">
          {Memories.map((Memory, index) => (
            <div
              key={index}
              className={`flex justify-center items-center border py-1 px-3 rounded-md cursor-pointer ${
                selectedMemory === Memory
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedMemory(Memory)}
            >
              <p>{Memory}</p>
            </div>
          ))}
        </div>
      </div>

      {/* version  */}
      <div className="flex flex-col gap-4 mt-2">
        <p className="text-gray-500 font-bold text-md">
          Colour Name: <span className="text-gray-600">{selectedVersion}</span>
        </p>

        <div className="w-full overflow-x-auto scrollbar-hide flex gap-2 text-gray-500">
          {Versions.map((Version, index) => (
            <div
              key={index}
              className={`flex justify-center items-center border py-1 px-3 rounded-md cursor-pointer ${
                selectedVersion === Version
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedVersion(Version)}
            >
              <p>{Version}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Model name */}
      <div className="flex flex-col gap-4 mt-2">
        <p className="text-gray-500 font-bold text-md">
          Colour Name:{" "}
          <span className="text-gray-600">{selectedModelNames}</span>
        </p>

        <div className="w-full overflow-x-auto scrollbar-hide flex gap-2 text-gray-500">
          {ModelNames.map((ModelName, index) => (
            <div
              key={index}
              className={`flex justify-center items-center border py-1 px-3 rounded-md cursor-pointer ${
                selectedModelNames === ModelName
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedModelNames(ModelName)}
            >
              <p>{ModelName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seller */}
      <div className="mt-4">
        <div className="border rounded-lg bg-gray-50 hover:border-gray-800 duration-500 ease-in-out">
          <div className="flex gap-4 justify-between items-center px-5 py-2">
            <div className="w-auto h-auto flex justify-center items-center gap-2 px-5">
              <Image
                src={"/icons-svg/starVariants.png"}
                alt="img"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">
                  Explore other bestsellers <span className="font-normal">in</span>
                </p>
                <div>
                  <p className="text-blue-600 font-semibold text-sm">Smartphones</p>
                </div>
              </div>
            </div>

            <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variants;
