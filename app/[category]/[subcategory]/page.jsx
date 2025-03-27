"use client";

import FilterDropdown from "@/components/FilterSections/FilterDropdown";
import Filters from "@/components/L1category/Filters";
import {
  faSort,
  faTag,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "@/context/ShopContext";
import ProductCard from "@/components/ProductCard";
import fetchFilters from "@/api/fetchFilters";

const categoriesData = [
  {
    name: "Fashion",
    subcategories: [
      {
        name: "All Fashion",
        isHeading: true,
        subcategories: [
          {
            name: "Men",
            subcategories: [{ name: "Clothing" }, { name: "Shoes" }],
          },
          {
            name: "Women",
            subcategories: [{ name: "Dresses" }, { name: "Jewellery" }],
          },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    subcategories: [
      {
        name: "All Electronics",
        isHeading: true,
        subcategories: [
          {
            name: "Mobiles",
            subcategories: [{ name: "Apple" }, { name: "Samsung" }],
          },
          {
            name: "Laptops",
            subcategories: [
              { name: "Gaming Laptops" },
              { name: "Business Laptops" },
            ],
          },
        ],
      },
    ],
  },
];

const Breadcrumb = () => (
  <nav className="text-sm text-purple-500 py-4">
    <p className="text-gray-500 px-5">Home &gt; Data Aaana abhi baki hai</p>
  </nav>
);

const SortOptions = () => (
  <div className="flex gap-2 items-center border border-gray-500 rounded-md px-2 py-1">
    <FontAwesomeIcon icon={faSort} />
    <p className="text-nowrap">Sort By:</p>
    <select className="outline-none rounded-md p-1 text-primary">
      <option value="">Recommended</option>
      <option value="">Price: High to Low</option>
      <option value="">Price: Low to high</option>
      <option value="">New Arrivals</option>
      <option value="">Best Rated</option>
    </select>
  </div>
);

const ToggleSection = ({ label, icon, isOpen, toggle }) => (
  <div className="relative">
    <div
      className="flex items-center justify-start gap-1 bg-gray-200 p-1 px-2 w-fit rounded-md mb-2 cursor-pointer"
      onClick={toggle}
    >
      <FontAwesomeIcon icon={icon} width={20} height={20} />
      <p className=" text-gray-800">{label}</p>
      <FontAwesomeIcon
        width={20}
        height={20}
        icon={faChevronDown}
        className={`transition-transform duration-200 text-secondary ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  </div>
);

const SubcategoryPage = () => {
  const { products } = useContext(ShopContext);

  const [filters, setFilters] = useState([]);
  const [sections, setSections] = useState({});

  useEffect(() => {
    const loadFilters = async () => {
      const data = await fetchFilters();
      console.log("Data is :", data);

      setFilters(data);
    };
    loadFilters();
  }, []);

  const toggleSection = (name) => {
    setSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="w-full h-auto bg-white">
      <Breadcrumb />
      <div className="flex">
        {/* filters  */}
        <div className="w-[20vw] min-w-[300px] bg-white p-5">
          <Filters categoriesData={categoriesData} />
        </div>

        {/* main  */}
        <div className="flex-1 bg-white p-5 text-secondary overflow-hidden">
          <div className="flex flex-wrap justify-between gap-2 mb-4">
            <p>
              202 Results for{" "}
              <span className="text-primary">
                "Men's Arabian Clothing in UAE"
              </span>
            </p>
            <SortOptions />
          </div>
          <div className="flex gap-2 relative">
            {filters.map((filter, idx) => (
              <div key={idx} className="relative">
                <ToggleSection
                  label={filter.name}
                  icon={faTag}
                  isOpen={sections[filter.name]}
                  toggle={() => toggleSection(filter.name)}
                />
                {sections[filter.name] && (
                  <FilterDropdown
                    filterName={filter.name}
                    filterData={filter.data}
                  />
                )}
              </div>
            ))}

            {/* <div className="relative">
              <ToggleSection
                label="Size"
                icon={faRuler}
                isOpen={sections.size}
                toggle={() => toggleSection("size")}
              />
              <FilterDropdownSize isOpen={sections.size} />
            </div>
            <div className="relative">
              <ToggleSection
                label="Deals"
                icon={faPercentage}
                isOpen={sections.deals}
                toggle={() => toggleSection("deals")}
              />
              <FilterDropdownDeals isOpen={sections.deals} />
            </div> */}
          </div>
          <hr className="border border-gray-300 mb-8" />

          {/* Rendering cards as per filters  */}
          <div className="grid-cols-1">
            {/* Sidebar / Product List Container */}
            <div className="w-full bg-white sm:col-span-5 col-span-1 p-5">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {products?.map((product) => (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPage;
