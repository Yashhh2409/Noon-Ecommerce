"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import Slider from "../Slider";
import LoadingSpinner from "../LoadingSpinner";
import ProductCard from "../ProductCard";
import Title from "../Title";


const Recommended = () => {
  const { products } = useContext(ShopContext) || { products: [] };
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (products?.length) {
      setTimeout(() => { 
        setRecommendedProducts(products.slice(0, 10));
        setLoading(false); // Stop loading after data is ready
      }, 1000); // Simulate API delay
    }
  }, [products]);

  return (
    <div className="bg-white mt-10 flex flex-col w-full">
      <Title firstTxt={"RECOMMENDED"} secondTxt={" FOR YOU"} />
      {/* Show Loader while loading */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Slider>
          {recommendedProducts.map((product) => (
            <ProductCard
              key={product._id}
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
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Recommended;
