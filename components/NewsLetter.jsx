"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./LoadingSpinner";

const images = [
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
];

export default function Newsletter() {
  const carouselRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full bg-white">
          {/* Banner Section */}
          <div className="w-full h-fit">
            <Image
              src="/StaticImage.png"
              alt="Newsletter Banner"
              width={900}
              height={50}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Main Section: Carousel & Single Image */}
          <div className="flex w-full h-auto md:h-52">
            {/* Left: Carousel Section (70%) */}
            <div className="relative w-full md:w-3/4 h-auto md:h-52 overflow-hidden">
              <Carousel autoplay ref={carouselRef} afterChange={setCurrent}>
                {images.map((img, index) => (
                  <div key={index} className="w-full h-52">
                    <Image
                      src={img}
                      width={500}
                      height={200}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </Carousel>

              {/* Custom Previous Button */}
              <button
                onClick={() => carouselRef.current?.prev()}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-gray-100 opacity-40 rounded-full flex items-center justify-center z-10"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-black text-lg md:text-xl" />
              </button>

              {/* Custom Next Button */}
              <button
                onClick={() => carouselRef.current?.next()}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-gray-100 opacity-40 rounded-full flex items-center justify-center z-10"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-black text-lg md:text-xl" />
              </button>
            </div>

            {/* Right: Single Image Section (30%) (Hidden on small screens) */}
            <div className="hidden md:flex w-1.8/4 h-52 overflow-hidden">
              <Image
                src="/shopmen-women.png"
                alt="Shop-Men-Women"
                width={900}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
