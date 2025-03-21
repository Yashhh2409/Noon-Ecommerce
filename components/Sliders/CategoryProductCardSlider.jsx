import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import Slider from "../Slider";
import LoadingSpinner from "../LoadingSpinner";
import ProductCard from "../ProductCard";
import Title from "../Title";
const CategoryProductCardSlider = () => {
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
    <div className="w-full h-auto  text-gray-800 px-5 py-2">
      <div className="flex justify-between items-center  font-bold">
        <p className="px-5 text-gray-700 font-extrabold text-xs sm:text-md md:text-lg lg:text-xl">
          Eid ideas: 30% off or more
        </p>
        <button className="border border-gray-800 px-2 py-1 cursor-pointer">VIEW ALL</button>
      </div>
      <div className="bg-white flex flex-col w-full">
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
    </div>
  );
};

export default CategoryProductCardSlider;
