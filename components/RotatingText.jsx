"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const RotatingText = ({ messages = [] }) => {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="h-[30px] overflow-hidden flex items-baseline">
      {isMounted && messages.length > 0 && (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black text-sm flex items-center"
        >
          {messages[index]?.image && (
            <Image
              src={messages[index].image}
              alt="icon"
              width={12}
              height={12}
              className="mr-1"
            />
          )}
          <span className="font-normal leading-tight text-[12px]">
            {messages[index]?.text}
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default RotatingText;
