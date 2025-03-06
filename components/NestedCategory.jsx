import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const NestedCategory = ({ categories }) => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderCategories = (categories, level = 0) => {
    return (
      <ul className={`${level > 0 ? "pl-4 border-l-2 border-gray-300 mt-4" : ""}`}>
        {categories.map((cat, index) => (
          <li key={cat.name} className="relative">
            <div className="flex items-start gap-2">
              {/* Square bordered icon for expanding/collapsing */}
              {cat.subcategories?.length > 0 && (
                <button
                  onClick={() => toggleCategory(cat.name)}
                  className="w-5 h-5 flex items-center justify-center border border-gray-500 text-gray-700"
                >
                  <FontAwesomeIcon
                    icon={openCategories[cat.name] ? faMinus : faPlus}
                    className="text-xs"
                    width={20}
                    height={20}
                  />
                </button>
              )}

              {/* Category Name */}
              <span
                className="text-gray-800 cursor-pointer"
                onClick={() => cat.subcategories && toggleCategory(cat.name)}
              >
                {cat.name}
              </span>
            </div>

            {/* Render nested categories */}
            {cat.subcategories && openCategories[cat.name] && (
              <div className="ml-2">{renderCategories(cat.subcategories, level + 1)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="p-4">{renderCategories(categories)}</div>;
};

export default NestedCategory;
