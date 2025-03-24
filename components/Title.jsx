import React from "react";

const Title = ({ firstTxt, secondTxt }) => {
  return (
    <div className="slider-title">
      <span className="text-red-600">{firstTxt}</span>
      <span className="text-gray-800">{secondTxt}</span>
    </div>
  );
};

export default Title;
