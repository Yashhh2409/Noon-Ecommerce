import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const FilterDropdownBrands = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute left-0 mt-1 w-[250px] shadow-md bg-white rounded-md border border-gray-300 z-10">
      <div className="flex justify-center p-2 border-b">
        <div className="relative w-full">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            width={18}
            height={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="border px-8 py-2 w-full border-gray-500 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <div>
        <p className="w-full px-2 bg-gray-300 py-1">A</p>
        <div className="flex gap-2 px-3 py-4">
          <div className="flex gap-2 items-center justify-center">
          <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 border cursor-pointer border-gray-500 rounded-sm checked:bg-blue-500 checked:bg-[url('/icons-svg/checkbox-square_checked_v2.svg')] checked:bg-center checked:bg-no-repeat"
                />
            <p className="text-gray-800">Puna</p>
          </div>
          <p className="text-gray-800">(0)</p>
        </div>
        <div className="flex justify-between p-2 border-t">
          <button className="bg-gray-200 px-4 py-1 rounded-md uppercase">
            Clear
          </button>
          <button className="bg-gray-200 px-4 py-1 rounded-md uppercase">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdownBrands
