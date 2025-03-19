import React from "react";
import dynamic from "next/dynamic";


// Lazy import components
const NewsLetter = dynamic(() => import("@/components/NewsLetter"));
const ProductCategories = dynamic(() => import("@/components/Sliders/ProductCategories"));
const Deals = dynamic(() => import("@/components/Deals"));
const Recommended = dynamic(() => import("@/components/Sliders/Recommended"));
const AddBanner = dynamic(() => import("@/components/AddBanner"));
const BestDeals = dynamic(() => import("@/components/Sliders/BestDeals"));
const RamadanSlider = dynamic(()=> import("@/components/Sliders/RamadanSlider"))
const MaximizeSaving = dynamic(()=> import("@/components/Sliders/MaximizeSaving"))

const categories = [
  "/categoryimages/First.gif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
  "/categoryimages/CategoryImg1.avif",
  "/categoryimages/CategoryImg2.avif",
];


const page = () => {
  return (
    <div className="">
      <NewsLetter />
      <ProductCategories categories={categories} rows={1} sliderBG = {true}/>
      <Deals />
      <Recommended />
      <AddBanner />
      <BestDeals />
      <RamadanSlider />
      <AddBanner />
      <MaximizeSaving />
    </div>
  );
};

export default page;
