"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const LoginSignup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Default to Login

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-2xl relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {/* Scrolling Image */}
        <div className="w-full overflow-hidden mb-4">
          <motion.img
            src="/loginImg.png"
            alt="scrolling"
            className="w-full max-w-3xl mx-auto"
            animate={{ x: [0, -50, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">
          Hala! Let’s get started
        </h2>

        {/* Toggle Login/Signup */}
        <div className="flex gap-2 mb-4">
          <button
            className={`flex-1 p-2 rounded-lg ${
              isLogin ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            className={`flex-1 p-2 rounded-lg ${
              !isLogin ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Conditional Form Inputs */}
        {isLogin ? (
          <>
            {/* Login Form */}
            <input
              type="text"
              placeholder="Enter email or mobile number"
              className="w-full p-3 border rounded-lg mb-4"
            />
          </>
        ) : (
          <>
            {/* Signup Form */}
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <input
              type="password"
              placeholder="Enter confirm password"
              className="w-full p-3 border rounded-lg mb-3"
            />
          </>
        )}

        <button className="w-full p-3 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed mb-5">
          {isLogin ? "LOG IN" : "SIGN UP"}
        </button>

        <p className="text-xs text-center mt-2 text-gray-500">
          This site is protected by reCAPTCHA and the Google <br />
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
