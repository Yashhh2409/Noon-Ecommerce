"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black !important`}
      style={{ ...style, display: "block", right: 0, color: "black" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} style={{ color: "black" }} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black !important`}
      style={{ ...style, display: "block", left: 0, zIndex: 1, color: "black" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} style={{ color: "black" }} />
    </div>
  );
};

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty & Health",
    "Sports",
    "Toys",
    "Automotive",
    "Books",
  ];

  return (
    <div className="w-full overflow-hidden border-b-2">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index}>
            <div className="bg-[#FCFBF4] text-black p-2 text-center">
              <h2 className="text-xl font-medium">{category}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
