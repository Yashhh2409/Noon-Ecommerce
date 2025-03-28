"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import RotatingText from "./RotatingText";
import { toast } from "react-toastify";
import { Card } from "antd";
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const messages = [
  { image: "/icons-svg/cart.avif", text: "10+ sold recently" },
  { image: "/icons-svg/delivery-car.avif", text: "Selling out fast" },
  { image: "/icons-svg/basket.avif", text: "Free Delivery" },
];

const ProductCard = ({
  _id,
  image,
  name,
  price,
  originalPrice,
  reviews,
  discount,
  tag,
  ranking,
  rating,
}) => {
  const { currency, addToCart, products } = useContext(ShopContext);

  console.log("My Products are: ", products);

  const getThumbnailImages = (_id) => {
    const product = products.find((item) => item._id === _id);
    return product ? product.image : [];
  };

  // Example Usage
  const thumbImages = getThumbnailImages(_id);
  console.log("Thumbnail Images:", thumbImages);

  const [isHovered, setIsHovered] = useState(false);

  const productImage = image[0] || "/placeholder.png";
  const altText = name ? `${name} product image` : "Product image";

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    addToCart(_id);
    toast.success("Product Added to cart!");
  };

  return (
    <Link
      href={`/product/${_id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col gap-1 max-w-[262px] h-[500px] border cursor-pointer bg-light p-[5px] rounded-lg"
    >
      <div className="border rounded-lg overflow-hidden">
        <div className="flex justify-between bg-[#F1EFF0]">
          <div className="relative flex justify-center items-center  px-[10px] bg-[#404553] rounded-full top-1 left-1 z-50">
            <p className="text-[14px] font-semibold text-white">Best Seller</p>
          </div>
          <button className="relative w-[24px] h-[24px] flex items-center justify-center top-1 right-2 text-gray-600 text-sm bg-white p-4 rounded-md shadow z-50">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

        {/* Image Slider Section */}
        <div className="relative">
          {isHovered ? (
            <Swiper modules={[Navigation]} navigation pagination={{clickable: true}} className="w-full h-full">
              {thumbImages.map((thumb, idx) => (
                <SwiperSlide key={idx}>
                  <Image src={thumb} alt={`Thumbnail ${idx + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Image
              src={productImage}
              alt={altText || "image"}
              width={210}
              height={210}
              className="object-cover w-full"
            />
          )}
        </div>

        <div className="flex justify-between bg-[#F1EFF0]">
          <div className="relative flex items-center mt-2 text-sm bg-white p-1 rounded-md shadow bottom-4 left-1 z-10">
            <FontAwesomeIcon icon={faStar} className="text-green" />
            <span className="ml-1 text-gray-700 text-xs font-semibold">
              {rating}
            </span>
            <span className="ml-1 text-gray-500 text-xs">({reviews})</span>
          </div>
          <button
            className="relative flex items-center justify-center bottom-4 right-2 text-gray-600 text-sm bg-white p-2 rounded-md shadow z-20"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
      <div className="max-w-[262px]">
        <div className="flex flex-col gap-1 break-words line-clamp-3 leading-snug text-[14px] font-semibold">
          <p className="h-[60] overflow-hidden">
            iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle
            East Version
          </p>
          <div className="flex gap-1 items-baseline justify-start leading-tight">
            <p className="font-normal">{currency}</p>
            <p className="text-[18px] text-secondary font-bold">{price}</p>
            <p className="line-through text-primary">{originalPrice}</p>
            <p className="text-green ">65%</p>
          </div>
          <div className="h-[20px] mb-1">
            <RotatingText messages={messages} />
          </div>
        </div>
        <div className="relative min-w-[240px] -left-4 bg-[#2122B8] text-white flex items-center justify-between gap-x-4 px-5 pl-2 pr-5 py-1 rounded-r-lg rounded-bl-lg h-8 mt-2 ">
          <div className="flex items-center gap-4 px-2">
            <div className="flex items-center">
              <div className="text-yellow-400 font-bold text-xs leading-none">
                super <br /> mall
              </div>
              <div className="ml-2 text-white text-nowrap text-sm ">
                GET IN <span className="font-bold">1 HR 20 MINS</span>
              </div>
            </div>
            <div className="ml-2 text-white text-lg">
              <FontAwesomeIcon icon={faChevronRight} width={10} height={10} />
            </div>
          </div>
        </div>
        <div className="bg-[#404553] w-3 h-3 rotate-45 relative -top-[38px] -left-[13.2px] -z-20"></div>
      </div>
    </Link>
  );
};

export default ProductCard;
