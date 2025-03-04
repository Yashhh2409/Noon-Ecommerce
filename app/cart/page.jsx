"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faTag,
  faTrash,
  faHeart,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import { toast } from "react-toastify";

const page = () => {
  const {
    products,
    currency,
    cartItems,
    getCartCount,
    removeFromCart,
    updateQuantity,
    getCartAmount,
    getShippingFee,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
    toast.success("Product Removed!");
  };

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        tempData.push({ _id: productId, quantity: cartItems[productId] });
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="max-w-8xl mx-auto px-16 grid grid-cols-1 md:grid-cols-3 gap-2 h-fit bg-white">
      {/* Left: Cart Items (Larger Width) */}
      <div className="bg-white p-4 rounded-lg md:col-span-2">
        <div className="flex justify-between items-start border-b pb-4 mb-4">
          <h2 className="text-2xl text-gray-800 font-semibold">
            Cart{" "}
            <span className="text-gray-500 text-sm">
              ({getCartCount} items)
            </span>
          </h2>
        </div>

        {/* map here  */}
        <div className="flex flex-col justify-center items-center gap-5">
          {cartData.length === 0 ? (
            <h1 className="text-xl text-black font-medium mt-5">Not Found</h1>
          ) : (
            cartData.map((item) => {
              const productData = products.find(
                (product) => product._id === item._id
              );

              if (!productData || item.quantity <= 0) {
                return null;
              }

              return (
                <div
                  key={productData._id}
                  className="grid grid-cols-1 shadow border-2 p-5 md:grid-cols-3 gap-4"
                >
                  {/* Image Section */}
                  <div>
                    <img
                      src={productData.image[0].src}
                      alt="iPhone"
                      className="w-35 h-35 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4">
                      {productData.name}
                    </h3>
                    <p className="text-gray-500 text-sm">Order in 7h 51m</p>
                    <p className="text-gray-600 text-sm font-semibold">
                      Get it <span className="text-green-500">Tomorrow</span>
                    </p>
                    <p className="text-gray-500">
                      Sold by{" "}
                      <span className="text-gray-800 font-semibold">noon</span>
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
                      Extra 20% off! CODE:{" "}
                      <span className="font-bold">ENBDOne</span>
                    </div>
                    <div className="flex mt-3 gap-3">
                      <button className="text-gray-600 hover:text-red-500 border-2 py-1 px-2 rounded-lg">
                        <div
                          className="flex items-center justify-center gap-2"
                          onClick={() => handleRemove(productData._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          <p className="text-gray-500">Remove</p>
                        </div>
                      </button>
                      <button className="text-gray-600 hover:text-red-500 border-2 py-1 px-2 rounded-lg">
                        <div className="flex items-center justify-center gap-2">
                          <FontAwesomeIcon icon={faHeart} />
                          <p className="text-gray-500">wishlist</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Pricing Details */}
                  <div className="flex flex-col justify-between items-end">
                    <div className="">
                      <p className="text-xl font-bold text-gray-800">
                        {currency}
                        {productData.price}
                      </p>
                      <div className="flex justify-center items-center text-xs">
                        <p className="text-gray-500 line-through pr-2">
                          {productData.originalPrice}
                        </p>
                        <p className="text-green-600 font-semibold">
                          {productData.discount}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="inline-block bg-yellow-300 text-black text-xs font-semibold m-1 px-3 py-1 rounded-tl-xl rounded-bl-xl rounded-br-3xl">
                          {productData.tag}
                        </span>
                        <span
                          key="free-delivery"
                          className="text-gray-800 text-xs"
                        >
                          <FontAwesomeIcon
                            icon={faTruckFast}
                            className="text-blue-500 text-xs  mr-1"
                          />
                          Free Delivery
                        </span>
                      </div>
                    </div>
                    <input
                      onChange={(e) =>
                        e.target.value === "" || e.target.value === "0"
                          ? null
                          : updateQuantity(item._id, Number(e.target.value))
                      }
                      className="border-2 rounded-sm max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-black"
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right: Order Summary (Full Height) */}
      <div className="bg-white p-4 rounded-lg text-gray-800 shadow-md border h-auto mt-5 mb-5">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <div className="mt-4 flex gap-[-12px]">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full p-2 pr-20 border rounded-l-lg outline-none"
          />
          <button className=" bg-blue-600 text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-blue-700">
            Apply
          </button>
        </div>
        <div className="flex justify-between mt-3">
          <p>Subtotal ({getCartCount} items)</p>
          <p className="font-semibold text-gray-500">
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Shipping Fee</p>
          <p className="text-green-600 font-semibold">{getShippingFee()}</p>
        </div>
        <div className="flex justify-between mt-3 text-xl font-bold">
          <p>
            Total{" "}
            <span className="text-sm text-gray-500">(Inclusive of VAT)</span>
          </p>
          <p>
            {getShippingFee() > 0
              ? (`${currency}${getCartAmount() + getShippingFee()}`) : (
                <>
                {currency}{getCartAmount()}{" "} 
                <span className="text-xs text-green-600">(FREE Shipping)</span>
                </>
              )}
          </p>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-sm font-semibold hover:bg-blue-700">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default page;
