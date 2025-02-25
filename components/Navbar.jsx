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
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/noon-logo.svg";
import { ShopContext } from "@/context/ShopContext";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { getCartCount } = useContext(ShopContext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[var(--theme-color)] text-gray-900 px-6 py-3 flex items-center justify-between flex-wrap sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </Link>

        <div>
          <span className="text-sm">Deliver to</span>
          <div className="font-bold">Dubai</div>
        </div>
      </div>

      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full md:w-1/4 p-2 rounded-lg border border-gray-300 mt-2 md:mt-0"
      />

      <div className="flex items-center gap-6 mt-2 md:mt-0">
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center gap-2">
            <div className="flex flex-col">
              <p>Hala !</p>
              <span>My Account</span>
            </div>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdownOpen && (
            <div className="absolute bg-white text-gray-900 mt-2 rounded-lg shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                  <FontAwesomeIcon icon={faBox} />
                  Orders
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  Address
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                  <FontAwesomeIcon icon={faCreditCard} />
                  Payments
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="flex items-center gap-2 relative">
          <span>Wishlist</span>
          <FontAwesomeIcon icon={faHeart} />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </button>
        <Link href="/cart" className="flex items-center gap-2 relative">
          <span>Cart</span>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {getCartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar