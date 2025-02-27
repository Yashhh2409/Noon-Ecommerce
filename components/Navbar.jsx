"use client";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faHeart,
  faShoppingCart,
  faBox,
  faMapMarkerAlt,
  faCreditCard,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { ShopContext } from "@/context/ShopContext";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { getCartCount } = useContext(ShopContext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "iPhone",
    "Samsung",
    "Headphones",
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (term) => {
    setSearchTerm(term);
    setShowDropdown(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const crossHandler = () => {
    setShowDropdown(false);
    setSearchTerm("");
  };

  return (
    <>
      {/* Navbar for large and medium screens */}
      <nav className="hidden md:flex lg:flex bg-[var(--theme-color)] text-gray-900 items-center justify-between sticky top-0 px-5 h-[70px] mx-auto w-full z-50">
        {/* First Section - Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/noon-logo.svg" alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Second Section - Deliver To */}
        <div className="flex items-center gap-2 p-5">
          <Image src="/assets/flag.svg" alt="Flag" width={30} height={15} />
          <div>
            <span className="text-sm">Deliver to</span>
            <div className="font-semibold flex items-center gap-1">
              Dubai <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </div>

        {/* Third Section - Search Bar */}
        <div className="flex-1 mx-4 px-5 relative hidden md:block lg:block">
          <div className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => setShowDropdown(true)}
              placeholder="What are you looking for?"
              className="w-full md:w-full p-2 rounded-lg border border-gray-300 outline-none z-50"
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="text-gray-500 cursor-pointer hover:text-gray-700 relative top-3 right-7 z-50"
              onClick={crossHandler}
            />
          </div>
          {showDropdown && (
            <div className="absolute w-full bg-white border border-gray-300 shadow-lg rounded-md mt-1">
              <div className="flex justify-between p-2 text-sm font-semibold text-gray-500">
                <span>RECENT SEARCHES</span>
                <button
                  onClick={clearRecentSearches}
                  className="text-blue-500 hover:underline"
                >
                  CLEAR ALL
                </button>
              </div>
              {recentSearches.length > 0 ? (
                recentSearches.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(item)}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-400 text-sm">
                  No recent searches
                </div>
              )}
            </div>
          )}
        </div>

        {/* Fourth Section - Language */}
        <div className="text-sm font-bold py-5">العربية</div>

        {/* Fifth Section - My Account */}
        <div className="relative p-5">
          <button onClick={toggleDropdown} className="flex items-center gap-2">
            <div className="flex flex-col justify-end">
              <p className="text-xs">Hala !</p>
              <span className="font-semibold">My Account</span>
            </div>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>

        {/* Sixth Section - Wishlist */}
        <button className="flex items-center gap-2 relative p-5">
          <span>Wishlist</span>
          <FontAwesomeIcon icon={faHeart} />
          <span className="absolute top-4 right-3 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </button>

        {/* Seventh Section - Cart */}
        <Link href="/cart" className="flex items-center gap-2 relative p-5">
          <span>Cart</span>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="absolute top-4 right-3 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {getCartCount}
          </span>
        </Link>
      </nav>

      {/* Navbar for small screens */}
      <nav className="md:hidden lg:hidden bg-[var(--theme-color)] flex items-center justify-between p-4 h-[60px]">
        {/* Noon logo */}
        <Image src="/noon-logo.svg" alt="Logo" width={60} height={60} />
        {/* Deliver to section */}
        <div className="flex text-gray-600 items-center gap-2 p-5">
          <Image src="/assets/flag.svg" alt="Flag" width={20} height={20} />
          <div className="leading-tight">
            <span className="text-xs">Deliver to</span>
            <div className="font-semibold flex items-center gap-1">
              Dubai <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </div>
        {/* Wishlist and Cart */}
        <div className="flex items-center text-gray-600 font-bold">
          <button className="flex items-center gap-2 relative p-5">
            <span>Wishlist</span>
            <FontAwesomeIcon icon={faHeart} />
            <span className="absolute top-4 right-3 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <Link href="/cart" className="flex items-center gap-2 relative p-5 mr-4">
            <span>Cart</span>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="absolute top-4 right-3 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {getCartCount}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
