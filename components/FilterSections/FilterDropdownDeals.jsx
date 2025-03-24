import React from 'react'

const FilterDropdownDeals = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute left-0 mt-1 w-[300px] shadow-md bg-white rounded-md border border-gray-300 z-10 p-4">
        <h1 className="text-primary font-bold text-xl">Deals</h1>
        <div>
  
          {/* map here  */}
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
        </div>
      </div>
    );
  };

export default FilterDropdownDeals
