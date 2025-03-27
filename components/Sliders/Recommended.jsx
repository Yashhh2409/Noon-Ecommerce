"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import CustomSwiper from "../CustomSwiper"; // Import the reusable Swiper component
import LoadingSpinner from "../LoadingSpinner";
import Title from "../Title";
import ProductCard from "../ProductCard";

const Recommended = () => {
  const { products } = useContext(ShopContext) || { products: [] };
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products?.length) {
      setTimeout(() => {
        setRecommendedProducts(products.slice(0, 10));
        setLoading(false);
      }, 1000); // Simulated API delay
    }
  }, [products]);

  return (
    <div className="w-full max-w-screen bg-white mt-10 flex flex-col p-5 gap-5">
      <Title firstTxt="RECOMMENDED" secondTxt=" FOR YOU" />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CustomSwiper>
          {recommendedProducts.map((product) => (
            <div key={product._id} className="w-full">
              <ProductCard
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                ranking={product.ranking}
                rating={product.rating}
                tag={product.tag}
                reviews={product.reviews}
              />
            </div>
          ))}
        </CustomSwiper>
      )}
    </div>
  );
};

export default Recommended;
