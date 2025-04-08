import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmptyPage = ({ image, heading, subHeading, btnText, hrefRoute }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center p-40">
      <div className="max-w-[320px] max-h-[220px]">
        <Image
          src={image}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-secondary text-[19px] font-bold text-center">
          {heading}
        </h3>
        <p className="text-primary text-[16px] text-center">{subHeading}</p>
      </div>
      <Link
        href={hrefRoute}
        className="p-[32px] py-3 bg-[#3866DF] text-[14px] font-semibold text-white rounded-md uppercase"
      >
        {btnText}
      </Link>
    </div>
  );
};

export default EmptyPage;
