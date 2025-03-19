"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Scrollbar, Navigation, Grid } from "swiper/modules";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner";
import Link from "next/link";

const ProductCategories = ({ categories, rows = 1, sliderBG = false, slidesPerView = 12, width = 90 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  return (
    <div className={`${sliderBG ? "slider-bg" : ""} w-full h-auto p-5`}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Swiper
          modules={[Scrollbar, Navigation, Grid]}
          scrollbar={{ draggable: true }}
          navigation={true}
          grid={{ rows: rows, fill: "row" }} // Dynamic row setting
          slidesPerView={slidesPerView}
          spaceBetween={1}
          className="custom-swiper"
        >
          <div className="">
            {categories.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-fit mb-5">
                  <Link href={"/Yash"}>
                  <Image
                    src={img}
                    width={width}
                    height={width}
                    className="object-cover cursor-pointer"
                  />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default ProductCategories;
