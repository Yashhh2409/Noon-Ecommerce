"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  "/carousel/carousel-1.avif",
  "/carousel/carousel-2.avif",
  "/carousel/carousel-3.avif",
  "/carousel/carousel-4.avif",
];

export default function Newsletter() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto">
      {/* Static Newsletter Image */}
      <div className="w-full">
        <img src="/NewsLetter1.png" alt="Newsletter" className="w-full object-cover" />
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
            <img src={images[current]} alt="Carousel Image" className="w-full object-cover" />
          </div>
        </div>

        {/* Shop Men and Shop Women Sections */}
        <div className="flex w-[30%] justify-between">
          <img src="/carousel/shop-men.avif" alt="Shop Men" className="w-full object-contain" />
          <img src="/carousel/shop-women.avif" alt="Shop Women" className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
