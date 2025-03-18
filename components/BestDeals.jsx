"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import ProductCard from "./ProductCard";
import Title from "./Title";
import Slider from "./Slider";
import LoadingSpinner from "./LoadingSpinner";

const BestDeals = () => {
  const { products } = useContext(ShopContext);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products?.length) {
      setTimeout(() => {
        setRecommendedProducts(products.slice(11, 20));
        setLoading(false);
      }, 1000);
    }
  }, [products]);

  return (
    <div className="bg-white mt-10 flex flex-col">
      <Title firstTxt={"BEST DEALS"} secondTxt={" FOR YOU"} />

      {/* Show Loader While loading */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Slider>
          {recommendedProducts.map((product, idx) => (
            <ProductCard
              key={idx}
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

export default BestDeals;
