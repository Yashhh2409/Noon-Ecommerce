import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-green-600"></div>
    </div>
  );
};

export default LoadingSpinner;
