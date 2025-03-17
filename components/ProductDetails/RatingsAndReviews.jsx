"use client"

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFilter,
  faSort,
  faQuestion,
  faCheck,
  faThumbsUp,
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const RatingsAndReviews = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 1, src: "/RatingStars/one-star.svg", label: "1 Star" },
    { id: 2, src: "/RatingStars/two-stars.svg", label: "2 Stars" },
    { id: 3, src: "/RatingStars/three-stars.svg", label: "3 Stars" },
    { id: 4, src: "/RatingStars/four-stars.svg", label: "4 Stars" },
    { id: 5, src: "/RatingStars/five-stars.svg", label: "5 Stars" },
  ].reverse();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">
        Product Ratings & Reviews
      </h1>
      <hr />
      <div className="flex gap-5">
        {/* first  */}
        <div className="w-[30%] h-auto py-5 text-gray-800">
          <h2 className="text-lg font-bold mb-5">Overall Rating</h2>
          <div className="mb-8">
            <h1 className="text-3xl font-bold">4.6</h1>
            <div className="flex gap-1 mb-2">
              <FontAwesomeIcon icon={faStar} className="text-green-500" />
              <FontAwesomeIcon icon={faStar} className="text-green-500" />
              <FontAwesomeIcon icon={faStar} className="text-green-500" />
              <FontAwesomeIcon icon={faStar} className="text-green-500" />
              <FontAwesomeIcon icon={faStar} className="text-green-500" />
            </div>
            <p className="text-gray-400">Based on 21 ratings</p>
            <div>
              <div className="flex gap-2 justify-start items-center">
                <p>5</p>
                <FontAwesomeIcon icon={faStar} className="text-green-500" />
                <div className="relative w-[80%] h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-4 bg-green-500 w-[80%] transition-all duration-300"></div>
                </div>
                <p>81%</p>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <p>4</p>
                <FontAwesomeIcon icon={faStar} className="text-[#82AE04]" />
                <div className="relative w-[80%] h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-4 bg-[#82AE04] w-[5%] transition-all duration-300"></div>
                </div>
                <p>5%</p>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <p>3</p>
                <FontAwesomeIcon icon={faStar} className="text-[#F3AC30]" />
                <div className="relative w-[80%] h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-4 bg-[#F3AC30] w-[10%] transition-all duration-300"></div>
                </div>
                <p>10%</p>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <p>2</p>
                <FontAwesomeIcon icon={faStar} className="text-[#F36C32]" />
                <div className="relative w-[80%] h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-4 bg-[#F36C32] w-[5%] transition-all duration-300"></div>
                </div>
                <p>5%</p>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <p>1</p>
                <FontAwesomeIcon icon={faStar} className="text-[#F36C32]" />
                <div className="relative w-[80%] h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-4 bg-[#F36C32] w-[0%] transition-all duration-300"></div>
                </div>
                <p>0%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex gap-2">
              <Image
                src={"/icons-svg/reviews-icon-yellow-star-circle.svg"}
                width={17}
                height={17}
                className="w-6 h-6"
              />
              <p className="text-lg font-bold">How do I review this product?</p>
            </div>
            <p className="text-sm text-gray-600">
              If you recently purchased this product from noon, you can go to
              your Orders page and click on the Submit Review button
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src={"/icons-svg/reviews-icon-noon-logo-circle.svg"}
                width={17}
                height={17}
                className="w-6 h-6"
              />
              <p className="text-lg font-bold">How do I review this product?</p>
            </div>
            <p className="text-sm text-gray-600">
              Our reviews are from noon customers who purchased the product and
              submitted a review
            </p>
          </div>
        </div>
        {/* second  */}
        <div className="w-[70%] h-auto py-5 px-10 border-l">
          <div className="flex justify-between items-center mb-3 text-gray-800">
            <div>
              <h2 className="text-lg font-bold mb-5">1 Review</h2>
            </div>

            <div className="flex justify-center items-center gap-5">
              <button className="bg-blue-500 text-white py-1 px-2 rounded-md">
                Revert all translations
              </button>
              <div>
                <span className="mr-2">
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />
                  FILTER BY:
                </span>

                <div className="relative inline-block w-40">
                  {/* Selected Option (Dropdown Button) */}
                  <button
                    className="w-full border p-2 flex items-center justify-between bg-white rounded-md border-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selected ? (
                      <Image
                        src={selected.src}
                        alt="Selected Star"
                        width={90}
                        height={90}
                      />
                    ) : (
                      <span>Select Rating</span>
                    )}

                    {/* Animated Dropdown Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? (
                        <FontAwesomeIcon icon={faArrowCircleUp} />
                      ) : (
                        <FontAwesomeIcon icon={faArrowCircleDown} />
                      )}
                    </motion.div>
                  </button>

                  {/* Dropdown List (Hidden by Default) */}
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute w-full bg-white border mt-1 shadow-lg rounded-md"
                    >
                      {options.map((option) => (
                        <li
                          key={option.id}
                          className="flex justify-center p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false); // Close dropdown after selection
                          }}
                        >
                          <Image
                            src={option.src}
                            alt={`Star ${option.id}`}
                            width={90}
                            height={90}
                          />
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>

              </div>

              <div>
                <span className="mr-2 text-gray-800">
                  <FontAwesomeIcon icon={faSort} className="mr-2" />
                  SORT BY:
                </span>
                <select
                  name=""
                  id=""
                  className="border border-gray-800 rounded-md px-5 py-2 text-gray-500"
                >
                  All Stars
                  <option value="">Top Reviews</option>
                  <option value="">Most Recent</option>
                  <option value="">Highest Rating</option>
                  <option value="">Lowest Rating</option>
                </select>
              </div>
            </div>
          </div>
          <hr className="border-gray-400" />

          <div
            className={`transition-all duration-300 ${
              expanded ? "h-auto" : "h-80"
            } `}
          >
            <div className="text-gray-800 py-5">
              <div className="flex gap-5 items-start mb-4">
                <div className="flex gap-2">
                  <div className="flex justify-center items-center w-10 h-10 bg-[#EFF3FD] p-2 rounded-full">
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className="text-gray-800"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <p className="font-bold">Anonymous</p>
                    <p>Nov 12, 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center bg-[#EFF3FD] py-0 px-1 rounded-full">
                  <div className="w-5 h-5 bg-gray-800 rounded-full flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-gray-300 text-xs"
                    />
                  </div>
                  <p>Verified purchase</p>
                </div>
              </div>

              {/* star */}
              <div className="flex gap-1 mb-2">
                <FontAwesomeIcon icon={faStar} className="text-green-500" />
                <FontAwesomeIcon icon={faStar} className="text-green-500" />
                <FontAwesomeIcon icon={faStar} className="text-green-500" />
                <FontAwesomeIcon icon={faStar} className="text-green-500" />
                <FontAwesomeIcon icon={faStar} className="text-green-500" />
              </div>

              <div className="flex gap-2 items-center">
                <p className="font-bold">Fast Delivery</p>
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>

              <div className="flex gap-2 items-center">
                <p>Fast Delivery</p>
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>

              <div className="flex gap-4 items-center">
                <p className="text-blue-700 underline cursor-pointer">
                  See original
                </p>
                <hr className="border-r-2 h-4" />
                <p className="text-gray-500">Translate by Google</p>
              </div>

              <p className="mb-2">
                This is an automated translation.{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Report errors
                </span>
              </p>

              <div className="flex gap-1 items-center border w-fit px-3 rounded-sm text-gray-700 border-gray-700 cursor-pointer">
                <FontAwesomeIcon icon={faThumbsUp} />
                <p>Helpful</p>
              </div>
            </div>
            <div className="w-full  flex justify-center text-blue-600 px-4 font-bold">
              <button
                onClick={() => setExpanded(!expanded)}
                className="border-2 border-blue-600 rounded-md px-4"
              >
                {expanded ? "View All Reviews" : "Show Less"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
