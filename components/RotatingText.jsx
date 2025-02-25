"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFire,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const RotatingText = () => {
  const textArray = [
    <span key="sold-recently">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="text-green-500 text-xs mr-1"
      />
      10+ sold recently
    </span>,

    <span key="selling-fast">
      <FontAwesomeIcon icon={faFire} className="text-red-500 text-xs mr-1" />
      Selling out fast
    </span>,

    <span key="free-delivery">
      <FontAwesomeIcon
        icon={faTruckFast}
        className="text-blue-500 text-xs mr-1"
      />
      Free Delivery
    </span>,
  ];

  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[30px] overflow-hidden flex items-center">
      {isMounted && (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black text-sm"
        >
          {textArray[index]}
        </motion.div>
      )}
    </div>
  );
};

export default RotatingText;
