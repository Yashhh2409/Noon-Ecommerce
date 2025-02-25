import React from "react";
import Image from "next/image";
import AddBannerImg from '@/public/AddBanner.avif'

const AddBanner = () => {
  return (
    <div className="p-5 bg-[#EBEBEB] mt-5">
      <Image
        src={AddBannerImg}
        alt="Banner"
        width={1920}
        height={500}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default AddBanner;
