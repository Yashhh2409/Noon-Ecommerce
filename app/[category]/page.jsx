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
import { getCategories } from "@/api/getCategories";

const images = [
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
  "/carousel/Crousel1.png",
  "/carousel/Crousel2.png",
  "/carousel/Crousel3.png",
]


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
  { id: 1, src: "/categoryimages/CategoryImg3.avif" },
  { id: 2, src: "/categoryimages/CategoryImg4.avif" },
  { id: 3, src: "/categoryimages/CategoryImg5.avif" },
  { id: 4, src: "/categoryimages/CategoryImg4.avif" },
  { id: 5, src: "/categoryimages/CategoryImg5.avif" },
  { id: 6, src: "/categoryimages/CategoryImg4.avif" },
  { id: 7, src: "/categoryimages/CategoryImg5.avif" },
  { id: 8, src: "/categoryimages/CategoryImg4.avif" },
  { id: 9, src: "/categoryimages/CategoryImg5.avif" },
  { id: 10, src: "/categoryimages/CategoryImg4.avif" },
  { id: 11, src: "/categoryimages/CategoryImg5.avif" },
  { id: 12, src: "/categoryimages/CategoryImg4.avif" },
  { id: 13, src: "/categoryimages/CategoryImg5.avif" },
  { id: 14, src: "/categoryimages/CategoryImg4.avif" },
  { id: 15, src: "/categoryimages/CategoryImg5.avif" },
  { id: 16, src: "/categoryimages/CategoryImg4.avif" },
  { id: 17, src: "/categoryimages/CategoryImg5.avif" },
  { id: 18, src: "/categoryimages/CategoryImg4.avif" },
  { id: 19, src: "/categoryimages/CategoryImg5.avif" },
  { id: 20, src: "/categoryimages/CategoryImg4.avif" },
  { id: 21, src: "/categoryimages/CategoryImg5.avif" },
  { id: 22, src: "/categoryimages/CategoryImg4.avif" },
  { id: 23, src: "/categoryimages/CategoryImg5.avif" },
  { id: 24, src: "/categoryimages/CategoryImg4.avif" },
  { id: 25, src: "/categoryimages/CategoryImg5.avif" },
];


const Eidcategories = [
  { id: 1, src: "/categoryimages/CategoryImg6.avif" },
  { id: 2, src: "/categoryimages/CategoryImg7.avif" },
  { id: 3, src: "/categoryimages/CategoryImg6.avif" },
  { id: 4, src: "/categoryimages/CategoryImg7.avif" },
  { id: 5, src: "/categoryimages/CategoryImg6.avif" },
  { id: 6, src: "/categoryimages/CategoryImg7.avif" },
  { id: 7, src: "/categoryimages/CategoryImg6.avif" },
  { id: 8, src: "/categoryimages/CategoryImg7.avif" },
  { id: 9, src: "/categoryimages/CategoryImg6.avif" },
  { id: 10, src: "/categoryimages/CategoryImg7.avif" },
  { id: 11, src: "/categoryimages/CategoryImg6.avif" },
  { id: 12, src: "/categoryimages/CategoryImg7.avif" },
  { id: 13, src: "/categoryimages/CategoryImg6.avif" },
  { id: 14, src: "/categoryimages/CategoryImg7.avif" },
  { id: 15, src: "/categoryimages/CategoryImg6.avif" },
  { id: 16, src: "/categoryimages/CategoryImg7.avif" },
  { id: 17, src: "/categoryimages/CategoryImg6.avif" },
  { id: 18, src: "/categoryimages/CategoryImg7.avif" },
];

const CrazyDeals = [
  { id: 1, src: "/CrazyDeals/Img1.avif" },
  { id: 2, src: "/CrazyDeals/Img2.avif" },
  { id: 3, src: "/CrazyDeals/Img1.avif" },
  { id: 4, src: "/CrazyDeals/Img2.avif" },
  { id: 5, src: "/CrazyDeals/Img1.avif" },
  { id: 6, src: "/CrazyDeals/Img2.avif" },
  { id: 7, src: "/CrazyDeals/Img1.avif" },
  { id: 8, src: "/CrazyDeals/Img2.avif" },
  { id: 9, src: "/CrazyDeals/Img1.avif" },
  { id: 10, src: "/CrazyDeals/Img2.avif" },
];



const CategoryPage = () => {
  const params = useParams();
  const decodedCategory = decodeURIComponent(params.category);

  console.log("Params of cat:", decodedCategory);


  const [categories, setCategories] = useState([]);
  const [foundCategory, setFoundCategory] = useState([]);
  const [forthLevelCategory, setForthLevelCategory] = useState([]);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const { currency } = useContext(ShopContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      if (data) {
        setCategories(data);
      }

    }

    fetchCategories()
  }, [])

  console.log("Category URLs:", categories.map(cat => cat.category_url));

  useEffect(() => {
    if (decodedCategory && categories.length > 0) {
      console.log("Decoded Category:", decodedCategory);
      categories.forEach((cat) => {
        console.log(`Checking if ${cat?.category_url} === ${decodedCategory}`);
      });

      const foundCategory = categories.find(
        (cat) => cat?.category_url === decodedCategory
      );
      setFoundCategory(foundCategory || []);

      console.log("Found category is:", foundCategory);
      console.log("MY category is:", categories);

      // extracted cat id from slug
      const categoryId = foundCategory.category_id;
      console.log("Cats id: ", categoryId);

      // extracting forth level cats
      const forthLevel = categories.filter((cat) => cat.sub_category === categoryId);
      setForthLevelCategory(forthLevel);


    }
  }, [decodedCategory, categories]);






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

            {/* Dummy data */}
            <div className="flex gap-5 mb-5">
              {
                forthLevelCategory.map((cat) => (
                  <Link
                    href={`/${cat.category_url}`}
                    className="bg-gray-500 text-white px-5 py-2 rounded-md flex justify-center items-center"
                  >
                    <p>{cat.category_name}</p>
                  </Link>
                ))
              }

            </div>

            {/* with data  */}
            {/* <div className="flex gap-5 mb-5">
              {categoryData?.subcategories?.map((sub, idx) => (
                <Link
                  href={`/${params.category}/${sub.slug}`}
                  key={idx}
                  className="bg-red-500 text-white px-5 py-2 rounded-md flex justify-center items-center"
                >
                  <p>{sub.name}</p>
                </Link>
              ))}
            </div> */}

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
                width={90}
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