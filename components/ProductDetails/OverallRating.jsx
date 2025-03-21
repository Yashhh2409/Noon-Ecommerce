"use client"

import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const OverallRating = () => {
  return (
    <div >
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
                <div className="w-full">
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
                    alt="img"
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
                    alt="img"
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
  )
}

export default OverallRating
