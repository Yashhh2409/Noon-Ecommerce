import React from "react";

const Title = ({ firstTxt, secondTxt }) => {
  return (
    <div className="flex items-center gap-2 uppercase text-[18px] lg:text-[24px] font-extrabold text-nowrap">
      <span className="text-red-600">{firstTxt}</span>
      <span className="text-gray-800">{secondTxt}</span>
    </div>
  );
};

export default Title;
