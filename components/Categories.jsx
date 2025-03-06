"use client";

import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import categoriesList from "@/data/categoryList";
// import getCategories from "@/lib/getCategories";

const Categories = ({ categories }) => {

  // const categories = await getCategories();

  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Check if scrolling is possible
  const updateScrollState = () => {
    if (sliderRef.current) {
      setCanScrollLeft(sliderRef.current.scrollLeft > 0);
      setCanScrollRight(
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth <
          sliderRef.current.scrollWidth
      );
    }
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(updateScrollState, 300);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(updateScrollState, 300);
    }
  };

  return (
    <div className="relative w-full h-10 bg-white shadow-md">
      {/* Category Slider with Arrows */}
      <div className="relative flex items-center">
        {canScrollLeft && (
          <button
            className="absolute -left-1 z-10 px-3 bg-white text-black shadow-[6px_0_10px_rgba(255,255,255,2)]"
            onClick={scrollLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}

        {/* Categories */}
        <div
          className="flex overflow-x-auto scrollbar-hide space-x-4 px-8 w-[90%]"
          ref={sliderRef}
          onScroll={updateScrollState}
        >
          {categoriesList.map((category, index) => (
            <Link href={`/${category.slug}`}
              key={index}
              className="relative group cursor-pointer whitespace-nowrap text-black font-semibold px-4 py-2  hover:underline"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {category.title}
            </Link>
          ))}
        </div>

        {canScrollRight && (
          <button
            className="absolute right-[10%] z-10 px-3 bg-white text-black shadow-[-6px_0_10px_rgba(255,255,255,2)]"
            onClick={scrollRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}

        {/* Right-Side Small Banner */}
        <div className="w-[10%] flex justify-center">
          <Image
            src="/categoryimages/categoryBanner.png"
            alt="category"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Full-Width Dropdown on Hover */}
      {hoveredCategory !== null && (
        <div
          className="absolute top-[40px] left-0 w-full bg-white shadow-lg p-6 z-50 text-md sm:text-xs sm:p-10"
          onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="grid grid-cols-[3fr_2fr] gap-8 justify-between">
            {/* Left Section: Subcategories & Top Brands */}
            <div>
              <div className="grid grid-cols-4 gap-6">
                {/* Subcategories */}
                {categoriesList[hoveredCategory].subcategories.map((sub, i) => (
                  <div key={i}>
                    <p className="text-base sm:text-sm md:text-md lg:text-lg font-semibold text-gray-700">
                      {sub.name}
                    </p>

                    <ul className="text-gray-600 text-sm mt-2">
                      {sub.subnames.map((item, j) => (
                        <li key={j} className="hover:text-black cursor-pointer">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Top Brands */}
              <div className="mt-6">
                <p className="text-lg font-semibold text-gray-700">
                  Top Brands
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-800 font-bold">
                  {categoriesList[hoveredCategory].brands.map((brand, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-white p-2 rounded-md"
                    >
                      <img
                        src={brand.Logo}
                        alt=""
                        className="w-[100px] object-contain border-2"
                      />
                      <p className="text-sm mt-1">{brand.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section: Promo Banner */}
            <div className="w-[250px] sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-end lg:ml-60">
              <img
                src={categoriesList[hoveredCategory].promoBanner}
                alt="Promo Banner"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
