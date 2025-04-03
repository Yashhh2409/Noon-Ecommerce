"use client";

import { useState, useEffect, useContext } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NestedCategory from "@/components/NestedCategory";
import { ShopContext } from "@/context/ShopContext";

const Filters = ({ categoriesData }) => {
  const [sections, setSections] = useState({
    delivery: true,
    category: true,
    brands: true,
    price: true,
    deals: true,
    priceDrop: true,
    size: true,
  });

  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setSections({
        delivery: !isMobile,
        category: !isMobile,
        brands: !isMobile,
        price: !isMobile,
        deals: !isMobile,
        priceDrop: !isMobile,
        size: !isMobile,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch products when API URL is available
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("API_URL_HERE"); // Replace with actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Adjust according to API response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle only the clicked section
    }));
  };

  return (
    <div className="w-auto p-5 mt-2 rounded-md text-md">
      {/* Delivery Mode Section */}
      <div className="mb-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("delivery")}
        >
          <p className="font-bold text-gray-800">Delivery Mode</p>
          <FontAwesomeIcon
            width={20}
            height={20}
            icon={faChevronDown}
            className={`transition-transform duration-200 text-gray-800 ${
              sections.delivery ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {sections.delivery && (
          <div className="flex gap-2 py-5">
            <input type="radio" className="w-5" />
            <div className="bg-blue-500 text-white w-fit py-1 px-2 rounded-md">
              <p>Supermall</p>
            </div>
          </div>
        )}
      </div>

      {/* Category Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <p className="font-bold text-gray-800">Categories</p>
          <FontAwesomeIcon
            width={20}
            height={20}
            icon={faChevronDown}
            className={`transition-transform duration-200 text-gray-800 ${
              sections.category ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {sections.category && (
          <div className="mt-3">
            <NestedCategory categories={categoriesData} />
          </div>
        )}
      </div>

      {/* Brands Section */}
      <div className="mt-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("brands")}
        >
          <p className="font-bold text-gray-800">Brands</p>
          <FontAwesomeIcon
            width={20}
            height={20}
            icon={faChevronDown}
            className={`transition-transform duration-200 text-gray-800 ${
              sections.brands ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {sections.brands && (
          <div className="flex flex-col py-2">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search"
                className="border px-2 w-full m-2 border-gray-500"
              />
            </div>
            <div className="flex justify-between px-3">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 border cursor-pointer border-gray-500 rounded-sm checked:bg-blue-500 checked:bg-[url('/icons-svg/checkbox-square_checked_v2.svg')] checked:bg-center checked:bg-no-repeat"
                />

                <p className="text-gray-800">Puna</p>
              </div>
              <p className="text-gray-800">(0)</p>
            </div>
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="mt-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <p className="font-bold text-gray-800">Price</p>
          <FontAwesomeIcon
            width={20}
            height={20}
            icon={faChevronDown}
            className={`transition-transform duration-200 text-gray-800 ${
              sections.price ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {sections.price && (
          <div className="flex flex-col py-2">
            <div className="flex justify-around gap-2">
              <input
                type="text"
                placeholder="0"
                className="w-20 px-5 border rounded-md text-gray-500 outline-none"
              />
              <p className="text-gray-800">To</p>
              <input
                type="text"
                placeholder="900"
                className="w-20 px-5 border rounded-md text-gray-500 outline-none"
              />
              <p className="text-blue-500 cursor-pointer">Go</p>
            </div>
          </div>
        )}
      </div>

      {/* Deals Section */}
      <div className="mt-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("deals")}
        >
          <p className="font-bold text-gray-800">Deals</p>
          <div className="flex items-center gap-2">
            {sections.deals && (
              <button
                onClick={() => setInputValue("")}
                className="text-blue-500 border border-blue-500 rounded-md px-2 "
              >
                clear
              </button>
            )}

            <FontAwesomeIcon
              width={20}
              height={20}
              icon={faChevronDown}
              className={`transition-transform duration-200 text-gray-800 ${
                sections.deals ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        {sections.deals && (
          <div className="flex flex-col py-2">
            <div className="flex gap-2 px-3">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="appearance-none w-4 h-4 border cursor-pointer border-gray-500 rounded-sm checked:bg-blue-500 checked:bg-[url('/icons-svg/checkbox-square_checked_v2.svg')] checked:bg-center checked:bg-no-repeat"
                />

                <p className="text-gray-800">Big Ramadan Deal</p>
              </div>
              <p className="text-gray-800">(0)</p>
            </div>
          </div>
        )}
      </div>

      {/* Price Drop Section */}
      <div className="mt-5 text-nowrap">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("priceDrop")}
        >
          <p className="font-bold text-gray-800">Price Drop</p>
          <div className="flex items-center gap-2">
            {sections.priceDrop && (
              <button
                onClick={() => setInputValue("")}
                className="text-blue-500 border border-blue-500 rounded-md px-2 "
              >
                clear
              </button>
            )}

            <FontAwesomeIcon
              width={20}
              height={20}
              icon={faChevronDown}
              className={`transition-transform duration-200 text-gray-800 ${
                sections.priceDrop ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        {sections.priceDrop && (
          <div className="flex flex-col py-2 gap-1">
            <div className="flex gap-1 px-1 text-sm">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="appearance-none w-4 h-4 border cursor-pointer border-gray-500 rounded-sm checked:bg-blue-500 checked:bg-[url('/icons-svg/checkbox-square_checked_v2.svg')] checked:bg-center checked:bg-no-repeat"
                />

                <p className="text-gray-800 text-sm">Lowest price in a year</p>
              </div>
              <p className="text-gray-800">(0)</p>
            </div>

            <div className="flex gap-1 px-1 text-sm">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="appearance-none w-4 h-4 border cursor-pointer border-gray-500 rounded-sm checked:bg-blue-500 checked:bg-[url('/icons-svg/checkbox-square_checked_v2.svg')] checked:bg-center checked:bg-no-repeat"
                />

                <p className="text-gray-800 ">Lowest price in 30 days</p>
              </div>
              <p className="text-gray-800">(0)</p>
            </div>

            <div className="flex gap-1 px-1 text-sm">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="appearance-none w-4 h-4 border cursor-pointer border-gray-500 rounded-sm checked:bg-blue-500 checked:bg-[url('/icons-svg/checkbox-square_checked_v2.svg')] checked:bg-center checked:bg-no-repeat"
                />

                <p className="text-gray-800 ">Lowest price in 7 days</p>
              </div>
              <p className="text-gray-800">(0)</p>
            </div>
          </div>
        )}
      </div>

      {/* Size Section */}
      <div className="mt-5 text-nowrap">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("size")}
        >
          <p className="font-bold text-gray-800">Size</p>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              width={20}
              height={20}
              icon={faChevronDown}
              className={`transition-transform duration-200 text-gray-800 ${
                sections.size ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        {sections.size && (
          <div className="flex py-2 gap-2">
            <div className="flex flex-wrap gap-2">
              <div className="text-gray-500 w-20 h-10 flex justify-center items-center text-[14px] border px-2 gap-1 rounded-md">
                <p className="text-gray-800">7XL</p>
                <p>(0)</p>
              </div>
              <div className="text-gray-500 w-20 h-10 flex justify-center items-center text-[14px]  border px-2 py-1 gap-1 rounded-md">
                <p className="text-gray-800">6XL</p>
                <p>(0)</p>
              </div>
              <div className="text-gray-500 w-20 h-10 flex justify-center items-center text-[14px]  border px-2 py-1 gap-1 rounded-md">
                <p className="text-gray-800">44</p>
                <p>(0)</p>
              </div>

              <div className="text-gray-500 w-20 h-10 flex justify-center items-center text-[14px]  border px-2 py-1 gap-1 rounded-md">
                <p className="text-gray-800">44</p>
                <p>(0)</p>
              </div>

              <div className="text-gray-500 w-20 h-10 flex justify-center items-center text-[14px]  border px-2 py-1 gap-1 rounded-md">
                <p className="text-gray-800">44</p>
                <p>(0)</p>
              </div>

              <div className="text-gray-500 w-20 h-10 flex justify-center items-center text-[14px]  border px-2 py-1 gap-1 rounded-md">
                <p className="text-gray-800">44</p>
                <p>(0)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
