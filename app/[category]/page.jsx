"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import categoriesList from "@/data/categoryList";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddBanner from "@/components/AddBanner";
import ProductCategories from "@/components/ProductCategories";
import Carousel from "@/components/Carousel";

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
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (params?.category) {
      console.log("Params category: ", params.category);
      const foundCategory = categoriesList.find(
        (cat) => cat.slug === params.category
      );
      if (foundCategory) {
        setCategoryData(foundCategory);
      } else {
        setCategoryData(null);
      }
    }
  }, [params?.category]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="max-w-full h-auto overflow-hidden mx-0 md:mx-5 bg-[#FFFFFF]">
      <div className="flex gap-5">
        {/* Filters  */}
        <div className="w-[25%] bg-red-500 p-5">
          {/* Delivery Mode  */}
          <div>
            <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
              <p className="font-bold text-gray-800">Delivery Mode</p>
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && (
              <div className="flex gap-2 py-5">
                <input type="radio" className="w-5" />
                <div className="bg-blue-500 w-fit py-1 px-2 rounded-md">
                  <p>Supermall</p>
                </div>
              </div>
              
            )}
          </div>
        </div>

        {/* Page  */}
        <div className="w-[75%] bg-blue-500">
          {/* sub categories  */}
          <div className="flex gap-5 p-5">
            {categoryData?.subcategories?.map((sub, idx) => (
              <Link
                href={`/${params.category}/${sub.slug}`}
                key={idx}
                className="max-w-20 bg-red-500 px-20 py-3 rounded-md flex justify-center items-center"
              >
                <p>{sub.name}</p>
              </Link>
            ))}
          </div>

          {/* carousel  */}
          <Carousel imgArray={images} />

          {/* Product slider */}
          <ProductCategories />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
