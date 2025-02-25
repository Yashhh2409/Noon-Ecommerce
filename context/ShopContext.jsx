"use client";

import React, { createContext, useState, useMemo } from "react";
import { products } from "@/public/assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

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
 

  // removeFromCart function
  const removeFromCart = async (itemId) => {
    setCartItems((prevCart) => {
      const updateCart = { ...prevCart };
      if(updateCart[itemId] > 1) {
        updateCart[itemId] -= 1; // decrease quantity
      } else {
        delete updateCart[itemId]; 
      }
      return updateCart;
    })
  }

  const currency = "AED ";

  const value = {
    products,
    currency,
    addToCart,
    cartItems,
    getCartCount,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
