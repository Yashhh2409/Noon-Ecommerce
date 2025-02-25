"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import RotatingText from "./RotatingText"; // Importing the new animation component
import { toast } from "react-toastify";

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
  const { currency, addToCart } = useContext(ShopContext);
  const productImage = image[0] || "/placeholder.png";
  const altText = name ? `${name} product image` : "Product image";

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    addToCart(_id);
    toast.success("Product Added to cart!")
  };

  return (
    <div className="w-full h-full flex justify-center">
      <Link
        href={`/product/${_id}`}
        className="w-56 rounded-2xl shadow-lg border p-2 relative bg-white"
      >
        <div className="relative w-full flex justify-center items-center bg-gray-100 overflow-hidden rounded-xl">
          <Image
            src={productImage}
            alt={altText}
            width={210}
            height={210}
            className="object-contain"
          />

          <button className="absolute flex items-center justify-center top-1 right-2 text-gray-600 text-sm bg-white p-2 rounded-md shadow">
            <FontAwesomeIcon icon={faHeart} />
          </button>

          <button
            className="absolute flex items-center justify-center bottom-2 right-2 text-gray-600 text-sm bg-white p-2 rounded-md shadow z-10"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>

        <div className="flex items-center mt-2 text-sm">
          <FontAwesomeIcon icon={faStar} className="text-green-500" />
          <span className="ml-1 text-gray-700 font-semibold">{rating}</span>
          <span className="ml-1 text-gray-500">({reviews})</span>
        </div>

        <h2 className="text-xs font-semibold text-gray-400 mt-1 leading-tight">
          {name}
        </h2>

        <div className="flex items-center mt-1 text-sm">
          <span className="text-gray-800 font-bold">
            {currency}
            {price}
          </span>
          <span className="text-gray-500 line-through ml-2">{originalPrice}</span>
          <span className="text-green-600 ml-2">{discount}</span>
        </div>

        <p className="text-xs text-gray-500 mt-1">{ranking}</p>

        {/* Using the extracted RotatingText component */}
        <RotatingText />

        <span className="inline-block bg-yellow-300 text-black text-xs font-semibold mt-1 px-3 py-1 rounded-tl-xl rounded-bl-xl rounded-br-3xl">
          {tag}
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
