"use client";
import { useEffect, useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faHeart,
  faShoppingCart,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { ShopContext } from "@/context/ShopContext";
import LoginSignup from "./LoginSignup";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const searchRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // dot loader
  const loader = (
    <div className="flex ml-10 space-x-2 justify-center items-center h-16">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
    </div>
  );

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "iPhone",
    "Samsung",
    "Headphones",
  ]);
  const [isClient, setIsClient] = useState(false); // Fix for flickering on SSR
  const [loading, setLoading] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(()=>{
    const handleClickOutSide = (e) => {
      if(searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [])

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => {
      setLoading(false); // Simulate loading for "Deliver to" section
    }, 1500);
  }, []);

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
        {loading ? (
          loader
        ) : (
          <div className="flex items-center gap-2 p-5">
            <Image src="/assets/flag.svg" alt="Flag" width={30} height={15} />
            <div>
              <span className="text-sm text-gray-600">
                Deliver to{" "}
                <FontAwesomeIcon icon={faCaretDown} className="text-gray-600" />
              </span>

              <div className="font-semibold flex items-center gap-1">Dubai</div>
            </div>
          </div>
        )}

        {/* Third Section - Search Bar */}
        <div ref={searchRef} className="flex-1 mx-4 px-5 relative hidden md:block lg:block">
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
              className="text-gray-500 cursor-pointer hover:text-gray-700 absolute top-3 right-10 z-50"
              onClick={crossHandler}
            />
          </div>

          {isClient && showDropdown && (
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
        <div className="text-sm font-bold py-5 px-5">العربية</div>

        {/* Fifth Section - My Account */}
        {/* {loading ? (
          loader
        ) : (
          <div className="relative p-5">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2"
            >
              <div className="flex flex-col justify-end">
                <p className="text-xs">Hala !</p>
                <span className="font-semibold">My Account</span>
              </div>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
        )} */}

        <button
          onClick={() => setIsLoginOpen(true)}
          className="flex items-center gap-2 relative py-5 px-5 font-semibold leading-tight text-gray-600 hover:text-gray-800"
        >
          <span>Log in</span>
          <FontAwesomeIcon icon={faUser} />
        </button>

        {/* login form  */}
        {isLoginOpen && <LoginSignup onClose={() => setIsLoginOpen(false)} />}

        {/* Sixth Section - Wishlist */}
        <button className="flex items-center gap-2 relative py-5 px-5 font-semibold leading-tight text-gray-700 hover:text-gray-800">
          <span>Wishlist</span>
          <FontAwesomeIcon icon={faHeart} />
          <span className="absolute top-4 right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </button>

        {/* Seventh Section - Cart */}
        <Link
          href="/cart"
          className="flex items-center gap-2 relative py-5 px-5 font-semibold leading-tight text-gray-700 hover:text-gray-800"
        >
          <span>Cart</span>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="absolute top-4 right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {getCartCount}
          </span>
        </Link>
      </nav>

      {/* Navbar for small screens */}
      <nav className="md:hidden lg:hidden bg-[var(--theme-color)] flex items-center justify-between p-4 h-[60px]">
        {/* Noon logo */}
        <Image src="/noon-logo.svg" alt="Logo" width={60} height={60} />

        {/* Deliver to section */}
        {loading ? (
          loader
        ) : (
          <div className="flex text-gray-600 items-center gap-2 ml-2">
            <Image src="/assets/flag.svg" alt="Flag" width={20} height={20} />
            <div className="leading-tight">
              <span className="text-xs">
                Deliver to <FontAwesomeIcon icon={faCaretDown} />
              </span>
              <div className="font-semibold text-sm flex items-center gap-1">
                Dubai{" "}
              </div>
            </div>
          </div>
        )}

        {/* Wishlist and Cart */}
        <div className="flex items-center text-gray-600 font-bold">
          <button className="flex items-center gap-2 relative py-5">
            <span className="text-sm font-bold">Wishlist</span>
            <FontAwesomeIcon icon={faHeart} />
            <span className="absolute top-4 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <Link href="/cart" className="flex items-center gap-2 relative p-5">
            <span className="text-sm font-bold">Cart</span>
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
