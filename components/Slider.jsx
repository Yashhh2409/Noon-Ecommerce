"use client";

import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ children }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(6);

  // Responsive slides count
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(2);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(4);
      } else {
        setVisibleSlides(6);
      }
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Mouse drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Mouse dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Drag (Mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Scroll buttons
  const scrollLeftBtn = () => {
    sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth / visibleSlides, behavior: "smooth" });
  };

  const scrollRightBtn = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth / visibleSlides, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-5">
      {/* Navigation Arrows */}
      {visibleSlides >= 4 && (
        <>
          <button
            onClick={scrollLeftBtn}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow w-10 h-10 flex justify-center items-center z-50 opacity-30"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={scrollRightBtn}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg z-50 w-10 h-10 flex justify-center items-center opacity-30"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth select-none cursor-grab active:cursor-grabbing gap-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div key={index} style={{ flex: `0 0 ${100 / visibleSlides}%`, marginRight: "0px" }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
