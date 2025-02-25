"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = ["/carousel/Crousel1.png", "/carousel/Crousel2.png", "/carousel/Crousel3.png"];

export default function Newsletter() {
  const [current, setCurrent] = useState(0);

  // next slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  // previous slide
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="w-full h-auto">
      {/* Static Newsletter Image */}
      <div className="w-full">
        <Image
          src="/StaticImage.png"
          alt="Newsletter"
          width={1920}
          height={500}
          className="w-full object-cover"
          
        />
      </div>

      {/* Flex container for carousel and shop sections */}
      <div className="flex w-full h-auto">
        {/* Carousel Section */}
        <div className="relative h-auto w-[70%]">
          {/* Previous and Next Slide Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <button onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <button onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </button>
          </div>

          {/* Carousel Image */}
          <div className="w-full h-auto overflow-hidden">
            <Image
              src={images[current]}
              alt="Carousel Image"
              width={1200}
              height={200}
              className="w-full object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Shop Men and Shop Women Sections */}
        <div className="flex w-[30%] justify-between">
          {/* Shop Men Section */}
          <div className="relative w-full sm:w-1/2 md:w-1.5/3 lg:w-2/4">
            <Image src="/carousel/shop-men.png" alt="Shop Men" fill className="object-contain" />
          </div>

          {/* Shop Women Section */}
          <div className="relative w-full sm:w-1/2 md:w-1.5/3 lg:w-2/4">
            <Image
              src="/carousel/shop-women.png"
              alt="Shop Women"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
