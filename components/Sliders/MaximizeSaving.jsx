"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Scrollbar, Navigation } from "swiper/modules";
import Image from "next/image";
import Title from "../Title";
import LoadingSpinner from "../LoadingSpinner";

const images = [
  "/RamdanImgs/Img6.avif",
  "/RamdanImgs/Img7.avif",
  "/RamdanImgs/Img6.avif",
  "/RamdanImgs/Img7.avif",
  "/RamdanImgs/Img6.avif",
  "/RamdanImgs/Img7.avif",
  "/RamdanImgs/Img6.avif",
  "/RamdanImgs/Img7.avif",
  "/RamdanImgs/Img6.avif",
  "/RamdanImgs/Img7.avif",
];

const MaximizeSaving = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (images.length > 0) {
      setLoading(false);
    }
  }, [images]);

  return (
    <div className="slider-bg w-full h-auto p-5">
      <div className="flex justify-between items-center mb-5">
        <Title firstTxt={"RAMADAN"} secondTxt={"ESSENTIALS"} />
        <button className="bg-gray-800 text-white font-bold py-1 px-2 rounded-md text-xs sm:text-md md:text-lg lg:text-xl">
          VIEW ALL
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <Swiper
          scrollbar={{ draggable: true }}
          navigation={true}
          modules={[Scrollbar, Navigation]}
          slidesPerView={4}
          spaceBetween={2}
          className="custom-swiper"
        >
          <div className="">
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-fit mb-5">
                  <Image
                    src={img}
                    alt="img"
                    width={350}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default MaximizeSaving;
