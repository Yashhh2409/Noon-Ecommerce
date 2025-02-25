import React from "react";
import Image from "next/image";
import CImg1 from "@/public/categoryimages/c-image1.avif";
import CImg2 from "@/public/categoryimages/c-image2.avif";
import CImg3 from "@/public/categoryimages/c-image3.avif";
import Slider from "./Slider";

const ProductCategories = () => {
  const categories = [
     CImg1,
     CImg2,
     CImg3,
     CImg1,
     CImg2,
     CImg3,
     CImg1,
     CImg2,
     CImg3
  ];

  return (
    <div className="w-full h-48 bg-[#FFF4D0] px-5 flex items-center justify-start gap-4 p-5">
      <Slider>
      {categories.map((category, idx) => {
        return (
          <div key={idx}>
            <Image src={category} width={100} />
          </div>
        );
      })}
      </Slider>
    </div>
  );
};

export default ProductCategories;
