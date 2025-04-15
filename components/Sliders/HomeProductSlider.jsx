"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import CustomSwiper from "../CustomSwiper"; 
import LoadingSpinner from "../LoadingSpinner";
import Title from "../Title";
import ProductCard from "../ProductCard";

const HomeProductSlider = ({firstTxt, secondTxt, products, slidesPerView = 6}) => {
  // const { products } = useContext(ShopContext) || { products: [] };
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products?.length) {
      setTimeout(() => {
        setRecommendedProducts(products.slice(0, 10));
        setLoading(false);
      }, 1000); 
    }
  }, [products]);

  return (
    <div className="w-full max-w-screen bg-white px-4 mt-4 mb-4  flex flex-col justify-center gap-5">
      <Title firstTxt={firstTxt} secondTxt={secondTxt} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CustomSwiper slidesPerView={slidesPerView}>
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

export default HomeProductSlider;
