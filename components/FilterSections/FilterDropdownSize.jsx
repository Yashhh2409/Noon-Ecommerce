import React from 'react'

const FilterDropdownSize = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute left-0 mt-1 w-[300px] shadow-md bg-white rounded-md border border-gray-300 z-10 p-4">
        <h1 className="text-primary font-bold text-xl mb-6">Size</h1>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-md flex items-center justify-center gap-1 border py-1">
            <p>L/XL</p>
            <p>(7)</p>
          </div>
          <div className="rounded-md flex items-center justify-center border py-1">
          <p>L/XL</p>
          <p>(7)</p>
          </div>
          <div className="rounded-md flex items-center justify-center border py-1">
          <p>L/XL</p>
          <p>(7)</p>
          </div>
          <div className="rounded-md flex items-center justify-center border py-1">
          <p>L/XL</p>
          <p>(7)</p>
          </div>
          <div className="rounded-md flex items-center justify-center border py-1">
          <p>L/XL</p>
          <p>(7)</p>
          </div>
        </div>
      </div>
    );
  };

export default FilterDropdownSize
