"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const categories = [
    {
      title: "Electronics",
      items: [
        "Mobiles",
        "Tablets",
        "Laptops",
        "Home Appliances",
        "Cameras",
        "Televisions",
        "Headphones",
        "Video Games",
      ],
    },
    {
      title: "Fashion",
      items: [
        "Women’s Fashion",
        "Men’s Fashion",
        "Girls’ Fashion",
        "Boys’ Fashion",
        "Watches",
        "Jewellery",
        "Women’s Handbags",
        "Men’s Eyewear",
      ],
    },
    {
      title: "Home And Kitchen",
      items: [
        "Bath",
        "Home Decor",
        "Kitchen & Dining",
        "Tools & Home Improvement",
        "Furniture",
        "Pet Supplies",
      ],
    },
    {
      title: "Beauty",
      items: [
        "Fragrance",
        "Make-up",
        "Haircare",
        "Skincare",
        "Bath & Body",
        "Men’s Grooming",
      ],
    },
    {
      title: "Baby & Toys",
      items: [
        "Diapering",
        "Baby Transport",
        "Nursing & Feeding",
        "Baby & Kids Fashion",
        "Toys & Games",
      ],
    },
    {
      title: "Top Brands",
      items: ["Apple", "Nike", "Samsung", "Tefal", "L’Oréal", "Skechers"],
    },
    {
      title: "Discover Now",
      items: [
        "noon Digest",
        "Best Mobile Phones",
        "Trending Searches",
        "Ramadan Sale",
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 text-black p-5">
      {/* Support Section */}
      <div className="max-w-7xl mx-auto border-b border-gray-300 pb-5 text-center md:text-left flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="font-bold text-xl">We’re Always Here To Help</h1>
          <p className="text-gray-500">
            Reach out to us through any of these support channels
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center flex-wrap mt-5 gap-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faInfoCircle}
              size="lg"
              className="text-black"
            />
            <div>
              <p className="text-gray-500 text-sm">Customer Happiness Center</p>
              <h1 className="font-bold text-black text-lg">help.meenaHub.com</h1>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3 md:mt-0">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="text-black"
            />
            <div>
              <p className="text-gray-500 text-sm">Email Support</p>
              <h1 className="font-bold text-black text-lg">care@meenaHub.com</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-5">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="font-bold">{category.title}</h2>
            <ul className="text-gray-500 text-sm">
              {category.items.map((item) => (
                <li key={item} className="mt-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Accordion for Small Screens */}
      <div className="md:hidden mt-5">
        {categories.map((category) => (
          <div key={category.title}>
            <button
              className="w-full flex justify-between items-center py-2 border-b"
              onClick={() => toggleSection(category.title)}
            >
              <span className="font-bold">{category.title}</span>
              <span>{openSections[category.title] ? "-" : "+"}</span>
            </button>
            {openSections[category.title] && (
              <ul className="text-gray-500 text-sm pl-3 py-2">
                {category.items.map((item) => (
                  <li key={item} className="mt-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-300 pt-5">
        <div className="flex gap-3">
          <img
            src="/g-pay.png"
            alt="Google Play"
            className="h-10 border-2 rounded-md border-[#ABABAB]"
          />
          <img
            src="/app-store.png"
            alt="App Gallery"
            className="h-10 border-2 rounded-md border-[#ABABAB]"
          />
        </div>
        <div className="flex gap-5 mt-3 md:mt-0">
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            className="text-black bg-[#FEF132] p-2 rounded-full"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            className="text-black bg-[#FEF132] p-2 rounded-full"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="text-black bg-[#FEF132] p-2 rounded-full"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            className="text-black bg-[#FEF132] p-2 rounded-full"
          />
        </div>
        <p className="text-gray-500 text-sm mt-3 md:mt-0">
          © 2025 noon. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
