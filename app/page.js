import React from "react";
import dynamic from "next/dynamic";

// Lazy import components
const NewsLetter = dynamic(() => import("@/components/NewsLetter"));
const ProductCategories = dynamic(() => import("@/components/ProductCategories"));
const Deals = dynamic(() => import("@/components/Deals"));
const Recommended = dynamic(() => import("@/components/Recommended"));
const AddBanner = dynamic(() => import("@/components/AddBanner"));
const BestDeals = dynamic(() => import("@/components/BestDeals"));
// const RamadanSlider = dynamic(()=> import("@/components/RamadanSlider"))

const page = () => {
  return (
    <div className="">
      <NewsLetter />
      <ProductCategories />
      <Deals />
      <Recommended />
      <AddBanner />
      <BestDeals />
      {/* <RamadanSlider /> */}
    </div>
  );
};

export default page;
