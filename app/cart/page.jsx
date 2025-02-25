"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faTag,
  faTrash,
  faHeart,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-2">
      

      {/* Left: Cart Items */}
      <div className="bg-white p-4 rounded-lg shadow">

      <h2 className="text-2xl text-gray-800 font-semibold mb-5">
        Cart <span className="text-gray-500 text-sm">(2 items)</span>
      </h2>
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row border-b pb-4 mb-4">
          <img
            src="/iphone.png"
            alt="iPhone"
            className="w-28 h-28 object-cover rounded-lg"
          />
          <div className="flex-1 md:ml-6">
            <h3 className="font-bold text-gray-800 mb-4">
              Apple iPhone 16 Plus 128GB 5G
            </h3>

            <p className="text-gray-500 text-sm">Order in 7h 51m</p>
            <p className="text-gray-600 text-sm font-semibold">
              Get it <span className="text-green-500">Tomorrow</span>
            </p>

            <p className="text-gray-500">
              Sold by <span className="text-gray-800 font-semibold">noon</span>
            </p>

            <div className="flex items-center text-sm text-gray-700 mt-2">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-yellow-500 mr-2"
              />
              <span className="font-semibold">1 year warranty</span>
            </div>
            <div className="mt-2 text-sm bg-green-100 border border-green-500 text-green-700 px-3 py-1 rounded">
              <FontAwesomeIcon icon={faTag} className="mr-2" />
              Extra 20% off! CODE: <span className="font-bold">ENBDOne</span>
            </div>
            <div className="flex mt-3 gap-3">
              <button className="text-gray-600 hover:text-red-500 border-2 py-1 px-2 rounded-lg">
                <div className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faTrash} />
                  <p className="text-gray-500">Remove</p>
                </div>
              </button>

              <button className="text-gray-600 hover:text-red-500 border-2 py-1 px-2 rounded-lg">
                <div className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faHeart} />
                  <p className="text-gray-500">Move to wishlist</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xl font-bold text-gray-800">AED 3,299</p>
            <div className="flex justify-center items-center text-xs">
              <p className="text-gray-500 line-through pr-2">3,799.00</p>
              <p className="text-green-600 font-semibold">13% OFF</p>
            </div>
            <span className="inline-block bg-yellow-300 text-black text-xs font-semibold m-1 px-3 py-1 rounded-tl-xl rounded-bl-xl rounded-br-3xl">
              express
            </span>
            <span key="free-delivery" className="text-gray-800 text-xs">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-blue-500 text-xs  mr-1"
              />
              Free Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className="bg-white p-4 rounded-lg text-gray-800 shadow h-fit">
        <h3 className="text-lg font-semibold">Order Summary</h3>

        {/* Coupon Code */}
        <div className="mt-4 flex gap-[-12px]">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full p-2 pr-20 border rounded-l-lg outline-none"
          />
          <button className=" bg-blue-600 text-white px-4 py- rounded-r-lg font-semibold hover:bg-blue-700">
            Apply
          </button>
        </div>

        <div className="flex justify-between mt-3">
          <p>Subtotal (2 items)</p>
          <p className="font-semibold text-gray-500">AED 3411.00</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Shipping Fee</p>
          <p className="text-green-600 font-semibold">FREE</p>
        </div>
        <div className="flex justify-between mt-3 text-xl font-bold">
          <p>
            Total{" "}
            <span className="text-sm text-gray-500">(Inclusive of VAT)</span>
          </p>
          <p>AED 3411.00</p>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-sm font-semibold hover:bg-blue-700">
          CHECKOUT
        </button>
      </div>
      </div>
  );
};

export default page;
