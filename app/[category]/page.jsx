"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import categoriesList from "@/public/categoryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AddBanner from "@/components/AddBanner";
import ProductCategories from "@/components/ProductCategories";

const images = [
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
];

const CategoryPage = () => {
  const params = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [current, setCurrent] = useState(0);

  // Next slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  // Previous slide
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // ✅ Use Effect is always called to maintain hook order
  useEffect(() => {
    if (params?.category) {
      const foundCategory = categoriesList.find(
        (cat) => cat.slug === params.category
      );
      setCategoryData(
        foundCategory || { title: "Category Not Found", subcategories: [] }
      );
    }
  }, [params?.category]);

  // ✅ Auto change image every 5 seconds (hook order is maintained)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Don't return early (instead, use conditional rendering inside JSX)
  return (
    <div className="max-w-full h-auto overflow-hidden mx-0 md:mx-10 bg-[#FFFFFF]">
      {/* ✅ Show loading message inside the div instead of returning early */}
      {!categoryData ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* SubCategory Boxes */}
          <div className="max-w-full flex gap-6 p-5 justify-center">
            {categoryData.subcategories.map((sub, index) => (
              <Link
                href={`/subcategory/${sub.slug}`}
                key={index}
                className="text-white bg-gray-900 max-w-60 rounded-xl py-3 px-10 flex flex-col justify-center items-center"
              >
                <p className="font-bold text-sm md:text-md lg:text-lg">{sub.name}</p>
                <p className="text-xs">{sub.discount}</p>
              </Link>
            ))}
          </div>

          {/* Carousel */}
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
                src={images[current]}
                alt="Carousel Image"
                width={1200}
                height={450}
                className="w-full h-full object-cover"
                priority
              />

              {/* 🚀 Dashed Line Progress Tracker */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
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

          {/* Add banner  */}
          <AddBanner />

          {/* productCategories  */}
          <ProductCategories />

          <h1>4

            ftghgjv
          </h1>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
