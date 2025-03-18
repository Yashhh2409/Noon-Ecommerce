"use client";

import { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import categoriesList from "@/data/categoryList";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCategories from "@/components/ProductCategories";
import Carousel from "@/components/Carousel";
import NestedCategory from "@/components/NestedCategory";
import { ShopContext } from "@/context/ShopContext";

const images = [
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
];

const categoriesData = [
  {
    name: "Fashion",
    subcategories: [
      {
        name: "All Fashion",
        isHeading: true,
        subcategories: [
          {
            name: "Men",
            subcategories: [{ name: "Clothing" }, { name: "Shoes" }],
          },
          {
            name: "Women",
            subcategories: [{ name: "Dresses" }, { name: "Jewellery" }],
          },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    subcategories: [
      {
        name: "All Electronics",
        isHeading: true,
        subcategories: [
          {
            name: "Mobiles",
            subcategories: [{ name: "Apple" }, { name: "Samsung" }],
          },
          {
            name: "Laptops",
            subcategories: [
              { name: "Gaming Laptops" },
              { name: "Business Laptops" },
            ],
          },
        ],
      },
    ],
  },
];

const CategoryPage = () => {
  const params = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const {currency} = useContext(ShopContext);

  useEffect(() => {
    if (params?.category) {
      console.log("Params category: ", params.category);
      const foundCategory = categoriesList.find(
        (cat) => cat.slug === params.category
      );
      setCategoryData(foundCategory || null);
    }
  }, [params?.category]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDeliveryOpen(false);
        setIsCategoryOpen(false);
        setIsBrandsOpen(false);
        setIsPriceOpen(false);
      } else {
        setIsDeliveryOpen(true);
        setIsCategoryOpen(true);
        setIsBrandsOpen(true);
        setIsPriceOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-full h-auto overflow-hidden mx-0 md:mx-5 bg-[#FFFFFF]">
      <div className="flex gap-5">
        {/* Filters */}
        <div className="w-[20%] bg-white p-5 mt-2 rounded-md">
          {/* Delivery Mode Section */}
          <div className="mb-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsDeliveryOpen((prev) => !prev)}
            >
              <p className="font-bold text-gray-800">Delivery Mode</p>
              <FontAwesomeIcon
                width={20}
                height={20}
                icon={faChevronDown}
                className={`transition-transform duration-200 text-gray-800 ${
                  isDeliveryOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isDeliveryOpen && (
              <div className="flex gap-2 py-5">
                <input type="radio" className="w-5" />
                <div className="bg-blue-500 text-white w-fit py-1 px-2 rounded-md">
                  <p>Supermall</p>
                </div>
              </div>
            )}
          </div>

          {/* Category Section */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsCategoryOpen((prev) => !prev)}
            >
              <p className="font-bold text-gray-800">Categories</p>
              <FontAwesomeIcon
                width={20}
                height={20}
                icon={faChevronDown}
                className={`transition-transform duration-200 text-gray-800 ${
                  isCategoryOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isCategoryOpen && (
              <div className="mt-3">
                <NestedCategory categories={categoriesData} />
              </div>
            )}
          </div>

          {/* Brands Section */}
          <div className="mt-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsBrandsOpen((prev) => !prev)}
            >
              <p className="font-bold text-gray-800">Brands</p>
              <FontAwesomeIcon
                width={20}
                height={20}
                icon={faChevronDown}
                className={`transition-transform duration-200 text-gray-800 ${
                  isBrandsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isBrandsOpen && (
              <div className="flex flex-col py-2">
                <div className="flex justify-center">
                  <input type="text" placeholder="Search" className="border-2 px-2 w-full m-2 border-gray-500" />
                </div>
                <div className="flex justify-between px-3">
                  <div className="flex gap-2 items-center">
                  <input type="radio" className={`appearance-none w-4 h-4 border-2 border-gray-500 rounded-sm checked:bg-blue-500`}/>
                  <p className="text-gray-800">Puna</p>
                  </div>
                  <p className="text-gray-800">(0)</p>
                </div>
              </div>
            )}
          </div>

          {/* Price Section */}
          <div className="mt-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsPriceOpen((prev) => !prev)}
            >
              <p className="font-bold text-gray-800">{`Price (${currency})`}</p>
              <FontAwesomeIcon
                width={20}
                height={20}
                icon={faChevronDown}
                className={`transition-transform duration-200 text-gray-800 ${
                  isPriceOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isPriceOpen && (
              <div className="flex flex-col py-2">
                <div className="flex gap-2 justify-evenly">
                  <input type="text" placeholder="0" className="w-24 px-5"/>
                  <p className="text-gray-800">To</p>
                  <input type="text" placeholder="0" className="w-24 px-5"/>
                  <p className="text-blue-500">Go</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[80%] bg-white p-5 mt-2 rounded-md">
          {/* Subcategories */}
          <div className="flex gap-5 mb-5">
            {categoryData?.subcategories?.map((sub, idx) => (
              <Link
                href={`/${params.category}/${sub.slug}`}
                key={idx}
                className="bg-red-500 text-white px-5 py-2 rounded-md flex justify-center items-center"
              >
                <p>{sub.name}</p>
              </Link>
            ))}
          </div>

          {/* Carousel */}
          <Carousel imgArray={images} />

          {/* Product Categories */}
          <ProductCategories />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
