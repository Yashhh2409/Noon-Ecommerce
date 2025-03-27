import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const CustomSwiper = ({ children }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6} // Show 5 slides at a time
        spaceBetween={14} // Add spacing between slides
        breakpoints={{
          1024: { slidesPerView: 6}, // Desktop: 5 slides
          768: { slidesPerView: 3 }, // Tablet: 3 slides
          480: { slidesPerView: 2 }, // Mobile: 2 slides
          0: { slidesPerView: 1 }, // Small screens: 1 slide
        }}
        className="mySwiper"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
