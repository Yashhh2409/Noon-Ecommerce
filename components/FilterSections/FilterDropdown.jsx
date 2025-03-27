"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FilterDropdown = ({ filterName, filterData }) => {
  const [search, setSearch] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  let filteredOptions = [];

  if (typeof filterData === "object" && filterData.all) {
    // Handling "Brand" where filterData has an 'all' object with categorized brands
    filteredOptions = Object.entries(filterData.all).flatMap(([_, values]) =>
      values.filter(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(search.toLowerCase())
      )
    );
  } else if (Array.isArray(filterData)) {
    // Handling "Size" (array of strings) & "Colour" (array of objects)
    if (typeof filterData[0] === "string") {
      // If it's an array of strings, filter normally
      filteredOptions = filterData.filter((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      );
    } else if (typeof filterData[0] === "object" && filterData[0].colour_name) {
      // If it's an array of objects (Colour), filter based on colour_name
      filteredOptions = filterData.filter((item) =>
        item.colour_name.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="absolute left-0 mt-1 w-[250px] bg-white shadow-md rounded-md border border-gray-300 z-50">
      {/* Brand Filter UI */}
      {filterName === "Brand" && (
        <>
          <div className="flex justify-center p-2 border-b">
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-8 py-2 w-full rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div>
            {filteredOptions.length === 0 ? (
              <p className="p-2 text-gray-500">No options found</p>
            ) : (
              filteredOptions.map((option, idx) => (
                <div key={idx} className="flex gap-2 px-3 py-2 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                    checked={selectedOptions.includes(option)}
                    onChange={() => toggleOption(option)}
                  />
                  <p>{option}</p>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-between p-2 border-t">
            <button
              onClick={() => setSelectedOptions([])}
              className="bg-gray-200 px-4 py-1 rounded-md uppercase"
            >
              Clear
            </button>
            <button className="bg-gray-200 px-4 py-1 rounded-md uppercase">
              Apply
            </button>
          </div>
        </>
      )}

      {/* Size Filter UI */}
      {filterName === "Size" && (
        <div className="p-2">
          <p className="text-xl text-primary font-semibold">Select Size</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {filteredOptions.length === 0 ? (
              <p className="p-2 text-gray-500">No sizes available</p>
            ) : (
              filteredOptions.map((size, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-md text-sm cursor-pointer transition-all duration-200 ${
                    selectedOptions.includes(size)
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => toggleOption(size)}
                >
                  {size}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Colour Filter UI */}
      {filterName === "Colour" && (
        <div className="p-2">
          <p className="text-xl pl-4 text-primary font-semibold"> Colour</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {filteredOptions.length === 0 ? (
              <p className="p-2 text-gray-500">No colours available</p>
            ) : (
              filteredOptions.map((colour, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1 text-xs cursor-pointer transition-all duration-200 ${
                    selectedOptions.includes(colour)
                      ? "border border-blue-500 rounded-full text-blue-500"
                      : "border border-gray-500 hover:bg-gray-300"
                  }`}
                  onClick={() => toggleOption(colour)}
                >
                  <div className="">
                    <div className="flex justify-center items-center gap-2">
                      <div
                        className="w-6 h-6 border border-gray-500"
                        style={{ backgroundColor: colour.colour_code }}
                      ></div>
                      <div>
                        <p>{colour.colour_name}</p>
                        <p>(count)</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
