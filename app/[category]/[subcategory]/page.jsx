"use client";

import FilterDropdown from "@/components/FilterSections/FilterDropdown";
import Filters from "@/components/L1category/Filters";
import {
  faSort,
  faTag,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "@/context/ShopContext";
import ProductCard from "@/components/ProductCard";
import fetchFilters from "@/api/fetchFilters";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

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

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Read page number from url
  const pageFromUrl = Number(searchParams.get("page")) || 0;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  console.log("Current Page:", currentPage);

  useEffect(() => {
    const loadFilters = async () => {
      const data = await fetchFilters();
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

  const totalProducts = products.length;
  const PAGE_SIZE = 7;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE; // 0 5 10 15
  const end = start + PAGE_SIZE; // 5 10 15 20

  // Function to update the URL dynamically
  const updatePageInUrl = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    router.replace(`${pathname}?${params.toString()}`);
  };

  // Ensure currentPage is valid
  useEffect(() => {
    if (pageFromUrl >= 0 && pageFromUrl < noOfPages) {
      setCurrentPage(pageFromUrl);
    } else {
      updatePageInUrl(0);
    }
  }, [pageFromUrl, noOfPages]);

  const goToNextPage = () => {
    if (currentPage < noOfPages - 1) {
      setCurrentPage((prev) => prev + 1);
      updatePageInUrl(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      updatePageInUrl(currentPage - 1);
    }
  };

  const visiblePages = 3;
  const pages = [];

  if (noOfPages <= visiblePages + 2) {
    // if total pages are small, show all pages
    for (let i = 0; i < noOfPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(0); // first page always visible

    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }

    if (currentPage !== 0 && currentPage !== noOfPages - 1) {
      pages.push(currentPage);
    }

    if (currentPage < noOfPages - 2) {
      pages.push(currentPage + 1);
    }

    if (currentPage < noOfPages - 3) {
      pages.push("..."); // Ellipsis
    }

    pages.push(noOfPages - 1); // Last page (always visible)
  }

  return (
    <div className="w-full h-auto bg-white">
   
      <div className="flex">
        {/* filters  */}
        <div className="w-[20vw] min-w-[300px] bg-white p-5">
          <Filters categoriesData={categoriesData} />
        </div>

        {/* main  */}
        <div className="flex-1 bg-white p-5 text-secondary overflow-hidden mt-10">
          <div className="flex flex-wrap justify-between gap-2 mb-4">
            <p className="text-primary">
              {noOfPages} Results for{" "}
              <span className="text-secondary font-semibold">
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
          </div>
          <hr className="border border-gray-300 mb-8" />

          {/* Rendering cards as per filters  */}
          <div className="grid-cols-1">
            {/* Sidebar / Product List Container */}

            <div className="w-full bg-light">
              <div className="grid grid-cols-4 gap-2">
                {products?.slice(start, end).map((product) => (
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

            {/* Pagination */}
            <div className="w-full gap-1 mb-5">
              <div className="flex justify-center items-center gap-2">
                {/* Previous Button */}
                <button
                  disabled={currentPage === 0}
                  onClick={() => updatePageInUrl(currentPage - 1)}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    width={25}
                    height={25}
                    className="border-[2px]  rounded-md py-3 px-1 mt-1"
                  />
                </button>

                {/* Page Numbers with Ellipsis */}
                {[...Array(noOfPages).keys()].map((n) => {
                  if (
                    n === 0 || // Always show first page
                    n === noOfPages - 1 || // Always show last page
                    (n >= currentPage - 1 && n <= currentPage + 1) // Show current, previous, and next page
                  ) {
                    return (
                      <button
                        key={n}
                        onClick={() => updatePageInUrl(n)}
                        className={`text-center text-gray-400 border-[2px] rounded-md py-2 px-3 m-1 ${
                          currentPage === n ? "!border-2 !border-blue-600 !text-blue-600" : ""
                        }`}
                      >
                        {n}
                      </button>
                    );
                  } else if (
                    n === currentPage - 2 || // Show "..." before current page range
                    n === currentPage + 2 // Show "..." after current page range
                  ) {
                    return <span key={n} className="text-center border-[2px] rounded-md py-2 px-3 m-1 cursor-default">...</span>;
                  }
                  return null;
                })}

                {/* Next Button */}
                <button
                  disabled={currentPage === noOfPages - 1}
                  onClick={() => updatePageInUrl(currentPage + 1)}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    width={25}
                    height={25}
                    className="border-[2px] rounded-md py-3 px-1 mt-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPage;
