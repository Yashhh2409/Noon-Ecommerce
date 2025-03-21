"use client";

import { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import categoriesList from "@/data/categoryList";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCategories from "@/components/Sliders/ProductCategories";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import NestedCategory from "@/components/NestedCategory";
import { ShopContext } from "@/context/ShopContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import Filters from "@/components/L1category/Filters";
import Recommended from "@/components/Sliders/Recommended";
import CategoryProductCardSlider from "@/components/Sliders/CategoryProductCardSlider";

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

const categories = [
  "/categoryimages/CategoryImg3.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
  "/categoryimages/CategoryImg4.avif",
  "/categoryimages/CategoryImg5.avif",
];

const Eidcategories = [
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
  "/categoryimages/CategoryImg6.avif",
  "/categoryimages/CategoryImg7.avif",
];

const CrazyDeals = [
  "/CrazyDeals/Img1.avif",
  "/CrazyDeals/Img2.avif",
  "/CrazyDeals/Img1.avif",
  "/CrazyDeals/Img2.avif",
  "/CrazyDeals/Img1.avif",
  "/CrazyDeals/Img2.avif",
  "/CrazyDeals/Img1.avif",
  "/CrazyDeals/Img2.avif",
  "/CrazyDeals/Img1.avif",
  "/CrazyDeals/Img2.avif",
];

const CategoryPage = () => {
  const params = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const { currency } = useContext(ShopContext);

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

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  });

  return (
    <div className="max-w-full h-auto overflow-hidden mx-0 md:mx-5 bg-[#FFFFFF]">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex gap-5">
          {/* Filters */}
          <Filters categoriesData={categoriesData} />

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
            {loading ? (
              <LoadingSpinner />
            ) : (
              <ProductCategories
                categories={categories}
                rows={2}
                sliderBG={false}
              />
            )}

            {/* flash sell banner  */}
            <div className="mb-10 w-full h-auto">
              <Image
                src="/categoryimages/FlashSaleBanner.gif"
                alt="image"
                layout="responsive"
                width={500}
                height={300}
                className="w-full h-[20px] object-cover"
              />
            </div>

            {/* Limited Price Drops */}
           

            {/* Get Eid Ready  */}
            {loading ? (
              <LoadingSpinner />
            ) : (
              <div>
                <p className="px-5 text-gray-700 font-extrabold text-xs sm:text-md md:text-lg lg:text-xl">
                  Get Eid Ready
                </p>
                <ProductCategories
                  categories={Eidcategories}
                  rows={1}
                  sliderBG={false}
                  slidesPerView={7}
                  width={150}
                />
              </div>
            )}

            {/* Category Product Card Slider */}
            <CategoryProductCardSlider />


             {/* Crazy Deals  */}
             {loading ? (
              <LoadingSpinner />
            ) : (
              <div className="bg-[#FDFDEB] pt-5">
                <p className="px-5 text-gray-700 font-extrabold text-xs sm:text-md md:text-lg lg:text-xl">
                  Get Eid Ready
                </p>
                <ProductCategories
                  categories={CrazyDeals}
                  rows={1}
                  sliderBG={false}
                  slidesPerView={5}
                  width={200}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
