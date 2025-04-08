"use client";
import { useEffect, useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCaretDown,
  faHeart,
  faList,
  faPerson,
  faPersonRifle,
  faShoppingCart,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { ShopContext } from "@/context/ShopContext";
import LoginSignup from "./LoginSignup";
import { getHeaders } from "@/api/getHeader";

const links = [
  {
    id: "1",
    name: "Orders",
    link_url: "orders",
  },
  {
    id: "2",
    name: "Returns",
    link_url: "returns",
  },
  {
    id: "3",
    name: "Wishlist",
    link_url: "wishlist",
  },
];

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
  const [navItems, setNavItems] = useState([]);
  const [navSettings, setNavSettings] = useState([]);
  const [hoverText, setHoverText] = useState(false);
  const [isAccDropDownOpen, setIsAccDropDownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

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

  const fetchNavSettings = async () => {
    try {
      const response = await fetch(
        "https://noon-website.onrender.com/noon/getHeaderSetting"
      );

      if (!response.ok) {
        console.error("Failed to fetch NavSettings");
      }

      const data = await response.json();

      if (data) {
        setNavSettings(data);
      }
    } catch (error) {
      console.error("Failed to fetch NavSettings");
    }
  };

  const fetchNavItems = async () => {
    const data = await getHeaders();

    const activeItems = data
      .filter((item) => item.status_id === 1)
      .sort((a, b) => a.sort_order - b.sort_order);

    setNavItems(activeItems);
    setLoading(false);
  };

  useEffect(() => {
    fetchNavItems();
    fetchNavSettings();
  }, []);

  return (
    <>
      {/* Navbar for large and medium screens */}
      <nav
        className="hidden md:flex lg:flex items-center justify-between sticky top-0 px-5 h-[70px] mx-auto w-full z-50"
        style={{
          backgroundColor: navSettings?.background_color,
        }}
      >
        {navItems
          .filter((item) => item.header_name === "noon")
          .map((item) => (
            // First Section - Logo
            <div key={item} className="flex items-center gap-4">
              <Link href="/">
                <Image src="/Logo.png" alt="Logo" width={100} height={100} />
              </Link>
            </div>
          ))}

        {navItems
          .filter((item) => item.header_name === "Delivery Location")
          .map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 p-5 duration-300"
              style={{ color: navSettings.text_color }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = navSettings.hover_color)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = navSettings.text_color)
              }
            >
              <Image
                src="/assets/Flag_of_Qatar.svg"
                alt="Flag"
                width={50}
                height={30}
                className="rounded-md"
              />
              <div>
                <span className="text-sm ">
                  Deliver to <FontAwesomeIcon icon={faCaretDown} />
                </span>

                <div className="font-semibold flex items-center gap-1">
                  {navSettings?.delivery_location}
                </div>
              </div>
            </div>
          ))}

        {navItems
          .filter((item) => item.header_name === "Search")
          .map((item) => (
            // Third Section - Search Bar
            <div
              key={item}
              ref={searchRef}
              className="flex-1 mx-4 px-5 relative hidden md:block lg:block"
            >
              <div className="flex">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  onFocus={() => setShowDropdown(true)}
                  placeholder={navSettings?.search_placeholder}
                  className="w-full md:w-full p-2 rounded-lg border border-gray-300 outline-none z-50"
                />
                {isClient && searchTerm && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-gray-500 cursor-pointer hover:text-gray-700 absolute top-3 right-10 z-50"
                    onClick={crossHandler}
                  />
                )}
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
          ))}

        {navItems
          .filter((item) => item.header_name === "Log in")
          .map((item) => (
            <div key={item} className="relative p-5">
              <button
                onClick={() => setIsAccDropDownOpen((prev) => !prev)}
                className="flex items-center gap-2"
                style={{ color: navSettings.text_color }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = navSettings.hover_color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = navSettings.text_color)
                }
              >
                <div className="flex flex-col justify-end">
                  <p className="text-xs">Hala !</p>
                  <span className="font-semibold">My Account</span>
                </div>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>

              {isAccDropDownOpen && (
                <div className="absolute left-2 top-[75px] text-primary max-w-20% flex flex-col items-center pt-4 rounded-md shadow-md bg-white">
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      href={`/account/${link.link_url}`}
                      onClick={() => setIsAccDropDownOpen(false)}
                      className="hover:bg-blue-100 w-full block"
                    >
                      <div className="w-full flex items-center gap-2 px-8 py-2">
                        <FontAwesomeIcon icon={faList} width={25} height={25} />
                        <p>{link.name}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="absolute self-end flex justify-end -top-2 right-2">
                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>
                  </div>

                  <hr className="border w-full border-gray-100"/>
                  <div className="w-full flex justify-center items-center py-2 hover:opacity-50 transition-all duration-300">
                    <p>Sign Out</p>
                  </div>
                </div>
              )}
            </div>
            // <div key={item.header_name}>
            //   <button
            //     onClick={() => setIsLoginOpen(true)}
            //     className="flex items-center gap-2 relative py-5 px-5 font-semibold leading-tight duration-300"
            //     style={{ color: navSettings.text_color }}
            //     onMouseEnter={(e) =>
            //       (e.currentTarget.style.color = navSettings.hover_color)
            //     }
            //     onMouseLeave={(e) =>
            //       (e.currentTarget.style.color = navSettings.text_color)
            //     }
            //   >
            //     <span className="text-nowrap">Log in</span>
            //     <FontAwesomeIcon icon={faUser} />
            //   </button>

            //   {isLoginOpen && (
            //     <LoginSignup onClose={() => setIsLoginOpen(false)} />
            //   )}
            // </div>
          ))}

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

        {/* <button
          onClick={() => setIsLoginOpen(true)}
          className="flex items-center gap-2 relative py-5 px-5 font-semibold leading-tight hover:text-white"
        >
          <span className="text-nowrap">Log in</span>
          <FontAwesomeIcon icon={faUser} />
        </button> */}

        {/* login form  */}
        {/* {isLoginOpen && <LoginSignup onClose={() => setIsLoginOpen(false)} />} */}

        {/* Sixth Section - Wishlist */}
        {navItems
          .filter((item) => item.header_name === "Wishlist")
          .map((item) => (
            <button
              key={item}
              className="flex items-center gap-2 relative py-5 px-5 font-semibold leading-tight duration-300"
              style={{ color: navSettings.text_color }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = navSettings.hover_color)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = navSettings.text_color)
              }
            >
              <span>Wishlist</span>
              <FontAwesomeIcon icon={faHeart} />
              <span className="absolute top-4 z-50 right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          ))}

        {/* Seventh Section - Cart */}
        {navItems
          .filter((item) => item.header_name === "Cart")
          .map((item) => (
            <Link
              key={item}
              href="/cart"
              className="flex items-center gap-2 relative py-5 px-5 font-semibold leading-tight duration-300"
              style={{ color: navSettings.text_color }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = navSettings.hover_color)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = navSettings.text_color)
              }
            >
              <span>Cart</span>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="absolute top-4 right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {getCartCount}
              </span>
            </Link>
          ))}
      </nav>

      {/* Navbar for small screens */}
      <nav
        className="md:hidden lg:hidden flex items-center justify-between p-4 h-[60px]"
        style={{ backgroundColor: navSettings.background_color }}
      >
        {/* Noon logo */}
        <Image src="/Logo.png" alt="Logo" width={60} height={60} />

        {/* Deliver to section */}
        {loading ? (
          loader
        ) : (
          <div className="flex items-center gap-2 ml-2">
            <Image
              src="/assets/Flag_of_Qatar.svg"
              alt="Flag"
              width={30}
              height={20}
              className="rounded-md"
            />
            <div className="leading-tight text-white">
              <span className="text-xs">
                Deliver to <FontAwesomeIcon icon={faCaretDown} />
              </span>
              <div className="font-semibold text-sm flex items-center gap-1">
                Doha{" "}
              </div>
            </div>
          </div>
        )}

        {/* Login setion */}

        <button
          onClick={() => setIsLoginOpen(true)}
          className="flex items-center gap-2 relative py-5 px-5 font-semibold  leading-tight text-white"
        >
          <span className="text-nowrap">Log in</span>
          <FontAwesomeIcon icon={faUser} />
        </button>

        {/* login form  */}
        {isLoginOpen && <LoginSignup onClose={() => setIsLoginOpen(false)} />}

        {/* Wishlist and Cart */}
        <div className="flex items-center text-white font-bold">
          <button className="flex items-center gap-2 relative py-5">
            <span className="hidden md:inline text-sm font-bold">Wishlist</span>
            <FontAwesomeIcon icon={faHeart} />
            <span className="absolute top-4 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <Link href="/cart" className="flex items-center gap-2 relative p-5">
            <span className="hidden md:inline text-sm font-bold">Cart</span>
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
