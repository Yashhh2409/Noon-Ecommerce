"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBoltLightning,
  faChevronDown,
  faChevronUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const giftCards = [
  {
    id: "1",
    name: "Any occasion",
    img1: "/gift-cards/card1_1.avif",
    img2: "/gift-cards/card1_2.avif",
  },
  {
    id: "2",
    name: "Noon Gift Card",
    img1: "/gift-cards/card2_1.avif",
    img2: "/gift-cards/card2_2.avif",
  },
  {
    id: "3",
    name: "Eid Mubarak",
    img1: "/gift-cards/card3_1.avif",
    img2: "/gift-cards/card3_2.avif",
  },
  {
    id: "4",
    name: "Congratulations",
    img1: "/gift-cards/card4_1.avif",
    img2: "/gift-cards/card4_2.avif",
  },
];

const logos = [
  {
    id: "1",
    img: "/gift-cards/food-logo.avif",
  },
  {
    id: "2",
    img: "/gift-cards/minutes-new-logo.avif",
  },
  {
    id: "3",
    img: "/gift-cards/food-logo.avif",
  },
  {
    id: "4",
    img: "/gift-cards/minutes-new-logo.avif",
  },
  {
    id: "5",
    img: "/gift-cards/food-logo.avif",
  },
];

const questions = [
  {
    id: "1",
    question: "What is a noon Gift Card?",
    answer:
      "A noon Gift Card is an electronic prepaid card that contains a specific amount of money available for use on a variety of purchases.",
  },
  {
    id: "2",
    question: "How will the noon Gift Card be delivered?",
    answer:
      "Gift Cards will be sent to the receiver through an email. You can also share a link via WhatsApp.",
  },
  {
    id: "3",
    question: "How long is the Gift Card valid for?",
    answer: "Gift Cards are valid for one (1) year from the date of purchase.",
  },
];

const page = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(null);

  const toggleQuestion = (id) => {
    setIsDropDownOpen((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="max-w-full h-[100px] lg:h-[275px]">
        <Image
          src={"/gift-cards/banner_image_1.avif"}
          alt="img"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col gap-4 lg:flex-row justify-between lg:justify-center items-center px-2 lg:px-0">
        <div className="w-full lg:w-[66%] py-5">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
            <p className="text-[20px] sm:text-[22px] lg:text-[24px] px-2 mt-4 lg:mt-0 font-bold">
              Shop by category
            </p>
            <div className="flex flex-col sm:flex-row justify-evenly gap-2 px-2 sm:px-0">
              <div className="relative hidden lg:block">
                <FontAwesomeIcon
                  icon={faSearch}
                  width={25}
                  height={25}
                  className="absolute w-4 h-4 left-3 top-3 outline-none text-primary"
                />
                <input
                  type="text"
                  placeholder="Search by category"
                  className="py-2 pl-10 border rounded-md w-full sm:w-auto"
                />
              </div>
              <div className="flex items-center justify-center gap-2 py-2 px-4 border-[1px] text-blue-600 rounded-md border-blue-600 whitespace-nowrap">
                <FontAwesomeIcon
                  icon={faBoltLightning}
                  width={25}
                  height={25}
                  className="w-4 h-4"
                />
                <p className="text-nowrap text-sm sm:text-base">
                  Redeem gift card
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 py-2 px-4 border-[1px] text-blue-600 rounded-md border-blue-600 whitespace-nowrap">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  width={25}
                  height={25}
                  className="w-4 h-4"
                />
                <p className="text-nowrap text-sm sm:text-base">
                  View past orders
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-4 mt-5 p-2">
            {giftCards.map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-[47%] md:w-[30%] lg:w-[240px] h-[150px] lg:h-[220px] shrink-0 bg-[#EFF3FD] rounded-md"
              >
                <div className="relative w-full h-[100px] lg:h-[172.86px] flex items-center justify-center">
                  <Image
                    src={card.img1}
                    alt="img"
                    width={143}
                    height={88}
                    className="absolute top-8 left-10 sm:w-[47%] md:w-[30%] lg:w-[143px] lg:h-[88px] rotate-[-20deg]"
                    style={{ boxShadow: "-4px 4px 6px -1px rgba(0,0,0,0.3)" }}
                  />
                  <Image
                    src={card.img2}
                    alt="img"
                    width={143}
                    height={88}
                    className="absolute lg:top-[75px] right-8 sm:w-[47%] md:w-[30%] lg:w-[143px] lg:h-[88px]"
                    style={{ boxShadow: "4px 4px 6px -1px rgba(0,0,0,0.3)" }}
                  />
                </div>
                <div className="w-full h-[47.14px]">
                  <p className="text-[16px] text-center font-semibold text-primary">
                    {card.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full py-5">
            <p className="text-[19px] lg:text-[32px] font-bold text-center text-secondary">
              Use your noon Gift Card balance across all brands
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-evenly items-center py-8">
            <div className="max-w-full flex gap-4 flex-wrap justify-center">
              {logos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.img}
                  alt="img"
                  width={300}
                  height={300}
                  className="w-[20%] lg:w-[126px] h-[20%]  lg:h-[50px] object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full h-[100px] lg:h-[275px]">
        <Image
          src={"/gift-cards/banner_image_2.avif"}
          alt="img"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full px-2 lg:px-0 bg-[#F3F4F8] flex justify-center items-center py-5">
        <div className="w-full lg:w-[66%] flex flex-col justify-center items-center">
          <p className="text-[19px] lg:text-[32px] text-secondary font-bold py-4">
            Frequently asked questions
          </p>

          {questions.map((ques) => (
            <div key={ques.id} className="w-full bg-white">
              <div
                onClick={() => toggleQuestion(ques.id)}
                className="flex justify-between items-center px-4 py-2"
              >
                <p className="text-[14px] lg:text-[16px] text-secondary font-semibold py-2">
                  {ques.question}
                </p>
                {isDropDownOpen === ques.id ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    width={20}
                    height={20}
                    className="w-3 lg:w-4 h-3 lg:h-4"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    width={20}
                    height={20}
                    className="w-3 lg:w-4 h-3 lg:h-4"
                  />
                )}
              </div>
              
              {isDropDownOpen === ques.id && (
                <div className="w-full text-[12px] lg:text-[16px] px-4 py-2 text-primary text-wrap">
                  {ques.answer}
                  
                </div>
              )}
            <hr className="border-b-2 border-gray-200 w-full"/>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default page;
