import React from "react";
import dynamic from "next/dynamic";

// Lazy import components
const NewsLetter = dynamic(() => import("@/components/NewsLetter"));
const ProductCategories = dynamic(() =>
  import("@/components/Sliders/ProductCategories")
);
const Deals = dynamic(() => import("@/components/Deals"));
const Recommended = dynamic(() => import("@/components/Sliders/Recommended"));
const AddBanner = dynamic(() => import("@/components/AddBanner"));
const BestDeals = dynamic(() => import("@/components/Sliders/BestDeals"));
const RamadanSlider = dynamic(() =>
  import("@/components/Sliders/RamadanSlider")
);
const MaximizeSaving = dynamic(() =>
  import("@/components/Sliders/MaximizeSaving")
);

const categories = [
  { id: 1, src: "/categoryimages/First.gif" },
  { id: 2, src: "/categoryimages/CategoryImg1.avif" },
  { id: 3, src: "/categoryimages/CategoryImg2.avif" },
  { id: 4, src: "/categoryimages/CategoryImg1.avif" },
  { id: 5, src: "/categoryimages/CategoryImg2.avif" },
  { id: 6, src: "/categoryimages/CategoryImg1.avif" },
  { id: 7, src: "/categoryimages/CategoryImg2.avif" },
  { id: 8, src: "/categoryimages/CategoryImg1.avif" },
  { id: 9, src: "/categoryimages/CategoryImg2.avif" },
  { id: 10, src: "/categoryimages/CategoryImg1.avif" },
  { id: 11, src: "/categoryimages/CategoryImg2.avif" },
  { id: 12, src: "/categoryimages/CategoryImg1.avif" },
  { id: 13, src: "/categoryimages/CategoryImg2.avif" },
  { id: 14, src: "/categoryimages/CategoryImg1.avif" },
  { id: 15, src: "/categoryimages/CategoryImg2.avif" },
  { id: 16, src: "/categoryimages/CategoryImg1.avif" },
  { id: 17, src: "/categoryimages/CategoryImg2.avif" },
  { id: 18, src: "/categoryimages/CategoryImg1.avif" },
  { id: 19, src: "/categoryimages/CategoryImg2.avif" },
  { id: 20, src: "/categoryimages/CategoryImg1.avif" },
  { id: 21, src: "/categoryimages/CategoryImg2.avif" },
];

const page = () => {
  return (
    <div className="">
      <NewsLetter />
      <ProductCategories categories={categories} rows={1} sliderBG={true} />
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
