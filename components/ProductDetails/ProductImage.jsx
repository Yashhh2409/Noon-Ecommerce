"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductImage = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-[350px] flex flex-col gap-4">
      {/* Main Image Swiper */}
      <Swiper
        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-[350px] rounded-lg overflow-hidden"
      >
        {product?.image?.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={img.src}
              alt={`Product Image ${index + 1}`}
              width={400}
              height={350}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[350px]"
      >
        {product?.image?.map((img, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <Image
              src={img.src}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="w-20 h-20 rounded-md object-cover border border-gray-300 hover:border-black transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImage;
