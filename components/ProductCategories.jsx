"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  "/categoryimages/First.gif",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png",
  "/categoryimages/CategoryImg1.png",
  "/categoryimages/CategoryImg2.png"
];

const ProductCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(12);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(6);
      } else {
        setSlidesToShow(12);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const prevSlide = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <div className="relative w-full mx-auto p-5 bg-[#FFF4D0]">
      <Slider ref={sliderRef} {...settings} className="relative">
        {categories.map((img, index) => (
          <div key={index} className="px-2">
            <div className="flex items-center justify-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-[150px] h-[150px] object-contain rounded-xl"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white w-10 h-10 flex justify-center items-center p-3 rounded-full shadow-md z-10 opacity-25"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-lg text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 w-10 h-10 flex justify-center items-center opacity-25"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-lg text-gray-700" />
      </button>

      {/* Custom Tracking Bar */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[10%] h-1 bg-gray-300 rounded-md flex items-center">
        <div
          className="h-1 bg-gray-700 rounded-full transition-all duration-300"
          style={{
            width: `${slidesToShow * 4}px`,
            transform: `translateX(${categories.length > slidesToShow ? (currentSlide / (categories.length - slidesToShow)) * (slidesToShow * 4) : 0}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductCategories;
