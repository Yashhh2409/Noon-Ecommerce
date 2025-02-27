import React from "react";

const Title = ({ firstTxt, secondTxt }) => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black leading-none flex items-center px-2 whitespace-nowrap gap-2">
      <span className="text-red-600">{firstTxt}</span>
      <span className="text-gray-800">{secondTxt}</span>
    </div>
  );
};

export default Title;
