"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ imgArray = [] }) => {
  if (!imgArray.length) return null;

  const [current, setCurrent] = useState(0);

  // Next slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % imgArray.length);

  // Previous slide
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + imgArray.length) % imgArray.length);

  // Auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="relative w-full md:w-[100%] h-[150px] sm:h-[200px] md:h-[200px] lg:h-[250px] overflow-hidden">
        {/* Previous Slide Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 text-black p-3 w-12 h-12 rounded-full shadow-md flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-2xl text-gray-800"
          />
        </button>

        {/* Next Slide Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 z-10 transform -translate-y-1/2 bg-white bg-opacity-70 text-black p-3 w-12 h-12 rounded-full shadow-md flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-2xl text-gray-800"
          />
        </button>

        {/* Carousel Image */}
        <Image
          src={imgArray[current]}
          alt="Carousel Image"
          width={1200}
          height={450}
          className="w-full h-full object-cover"
          priority
        />

        {/* 🚀 Dashed Line Progress Tracker */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {imgArray.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 rounded-md transition-all ${
                current === index ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
