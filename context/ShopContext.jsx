"use client";

import React, { createContext, useState, useMemo } from "react";
import { products } from "@/public/assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const currency = "AED ";
 const API_BACKEND_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

 

  // addToCart function
  const addToCart = async (itemId) => {
    setCartItems((prevCart) => {
      const updateCart = { ...prevCart };
      if (updateCart[itemId]) {
        updateCart[itemId] += 1; 
      } else {
        updateCart[itemId] = 1; 
      }
      return updateCart;
    });
  };

  // get Cart count (Memoized for performance)
  const getCartCount = useMemo(() => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  }, [cartItems]); 

  // update quantity
  const updateQuantity = async (itemId, quantity) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
  
      if (quantity > 0) {
        updatedCart[itemId] = quantity; 
      } else {
        delete updatedCart[itemId];
      }
  
      return updatedCart;
    });
  };
 

  // removeFromCart function
  const removeFromCart = async (itemId) => {
    setCartItems((prevCart) => {
      const updateCart = { ...prevCart };
        delete updateCart[itemId];
      return updateCart;
    })
  }

  // get cart amount
  const getCartAmount = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId]; // Multiply price with quantity
      }
    }
  
    return totalAmount;
  };

  // Shipping Fee
  const getShippingFee = () => {
    const cartProductIds = Object.keys(cartItems);
    
    // Check if any remaining product in cart has a shipping fee
    const shippingFees = cartProductIds
      .map((id) => {
        const product = products.find((p) => p._id === id);
        return product?.shippingFee || 0;
      })
      .filter((fee) => fee > 0);
  
    return shippingFees.length > 0 ? Math.max(...shippingFees) : 0;
  };
  
  



  const value = {
    products,
    currency,
    addToCart,
    cartItems,
    getCartCount,
    removeFromCart,
    updateQuantity,
    getCartAmount,
    getShippingFee,
    API_BACKEND_URL,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
