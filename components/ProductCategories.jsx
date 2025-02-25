import React from "react";
import Image from "next/image";
import Slider from "./Slider";

const ProductCategories = () => {
  const categories = [
     "/categoryimages/CategoryImg1.png",
     "/categoryimages/CategoryImg2.png",
     "/categoryimages/CategoryImg1.png",
     "/categoryimages/CategoryImg2.png",
     "/categoryimages/CategoryImg1.png",
     "/categoryimages/CategoryImg2.png",
     "/categoryimages/CategoryImg1.png",
     "/categoryimages/CategoryImg2.png",
  ];

  return (
    <div className="w-full h-48 bg-[#FFF4D0] px-5 flex items-center justify-start gap-4 p-5">
      <Slider>
      {categories.map((category, idx) => {
        return (
          <div key={idx}>
            <Image src={category} width={100} height={100} />
          </div>
        );
      })}
      </Slider>
    </div>
  );
};

export default ProductCategories;
