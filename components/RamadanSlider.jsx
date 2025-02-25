"use client";

import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const RamadanSlider = () => {
  const sliderImages = [
    {
      color: "white",
      title: "Slide 1",
      text: "This is a card inside the slider.",
    },
    {
      color: "blue-500",
      title: "Slide 2",
      text: "Click the button below!",
    },
    {
      color: "green-500",
      title: "Slide 3",
      text: "Another content here.",
    },
    {
      color: "red-500",
      title: "Slide 4",
      text: "More content inside the slider.",
    },
  ];

  return (
    <div className="flex flex-col bg-[#FFF1BA]">
      <div>
        <Image
          src="{RamdanTitle}"
          alt=""
          width={1920}
          height={500}
          className="w-full p-5"
        />
      </div>
      <div className="flex items-center justify-center bg-red-500 p-5">
        <Slider>
          {sliderImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-6 bg-${slide.color} text-white text-center rounded-lg w-72 shadow-lg`}
              >
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="mt-2">{slide.text}</p>
                {index === 1 && (
                  <button className="mt-2 bg-white text-blue-500 px-4 py-2 rounded">
                    Click Me
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RamadanSlider;
