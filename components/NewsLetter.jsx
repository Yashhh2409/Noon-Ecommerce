"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = ["/carousel/Crousel1.png", "/carousel/Crousel2.png", "/carousel/Crousel3.png"];

export default function Newsletter() {
  const [current, setCurrent] = useState(0);

  // Next slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  // Previous slide
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Banner Section */}
      <div className="w-full">
        <Image
          src="/StaticImage.png"
          alt="Newsletter Banner"
          width={1900}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main Row: Carousel + Shop Sections */}
      <div className="flex w-full gap-2">
        {/* Left: Carousel Section (70%) */}
        <div className="relative w-full md:w-[100%] h-[150px] sm:h-[200px] md:h-[200px] lg:h-[250px] overflow-hidden">
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 bg-gray-50 bg-opacity-20 text-black p-3 rounded-full shadow-md"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
          </button>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 z-10 transform -translate-y-1/2 bg-gray-50 bg-opacity-20 text-black p-3 rounded-full shadow-md"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
          </button>

          {/* Carousel Image */}
          <Image
            src={images[current]}
            alt="Carousel Image"
            width={1200}
            height={450}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right: Shop Sections (30%) (Hidden on sm screens) */}
        <div className="hidden md:flex w-[50%]">
          {/* Shop Women Section */}
          <div className="w-[50%]">
            <Image
              src="/carousel/shop-women.png"
              alt="Shop Women"
              width={500}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Shop Men Section */}
          <div className="w-[50%]">
            <Image
              src="/carousel/shop-men.png"
              alt="Shop Men"
              width={500}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
