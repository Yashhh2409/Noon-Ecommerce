"use client";

import {
  faChevronDown,
  faChevronUp,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Bangladesh", code: "BD" },
  { name: "Belgium", code: "BE" },
  { name: "Brazil", code: "BR" },
  { name: "Canada", code: "CA" },
  { name: "China", code: "CN" },
  { name: "Denmark", code: "DK" },
  { name: "Egypt", code: "EG" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Italy", code: "IT" },
  { name: "Japan", code: "JP" },
  { name: "Malaysia", code: "MY" },
  { name: "Mexico", code: "MX" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nigeria", code: "NG" },
  { name: "Norway", code: "NO" },
  { name: "Pakistan", code: "PK" },
  { name: "Russia", code: "RU" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Singapore", code: "SG" },
  { name: "South Africa", code: "ZA" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Thailand", code: "TH" },
  { name: "Turkey", code: "TR" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
];

const page = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <>
      <div className="max-w-full p-5 my-4 flex flex-col gap-6">
        <h2 className="text-[24px] text-secondary font-bold">Profile</h2>
        <p className="text-[16px]">
          View & Update Your Personal and Contact Information
        </p>

        <div className="w-full bg-white p-5 rounded-xl">
          <h2 className="text-[18px] font-semibold mb-5">
            Contact Information
          </h2>

          <div className="w-full flex flex-wrap justify-start gap-5">
            <div className="min-w-[300px] flex flex-col gap-2">
              <label className="text-primary">Email</label>
              <input
                type="text"
                disabled
                placeholder="dhande.yash2001@gmail.com"
                className="w-full border p-4 rounded-xl"
              />
            </div>

            <div className="min-w-[300px] flex flex-col gap-2">
              <label className="text-primary">Phone number</label>
              <input
                type="text"
                className="w-full p-4 pr-16 border rounded-xl text-secondary outline-none"
              />
              <p className="text-[12px] text-primary">
                This can be used to login across all noon apps.
              </p>
              <div className="relative w-fit text-blue-800 flex justify-end items-center -top-1/2 self-end pr-2">
                <FontAwesomeIcon icon={faPlus} width={25} height={25} />
                <span>Add</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white p-5 rounded-xl">
          <h2 className="text-[18px] font-semibold mb-5">
            Personal Information
          </h2>

          <div className="w-full flex flex-wrap justify-start gap-5">
            <div className="min-w-[300px] flex flex-col gap-2">
              <label className="text-primary">First Name</label>
              <input
                type="text"
                className="w-full p-4 pr-16 border rounded-xl text-secondary outline-none"
              />
              <div className="relative w-fit text-blue-800 -top-12 self-end pr-2">
                <FontAwesomeIcon icon={faPen} width={25} height={25} />
              </div>
            </div>

            <div className="min-w-[300px] flex flex-col gap-2">
              <label className="text-primary">Last Name</label>
              <input
                type="text"
                className="w-full p-4 pr-16 border rounded-xl text-secondary outline-none"
              />
              <div className="relative w-fit text-blue-800 -top-12 self-end pr-2">
                <FontAwesomeIcon icon={faPen} width={25} height={25} />
              </div>
            </div>

            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="min-w-[300px] min-h-fit flex flex-col gap-2"
            >
              <label className="text-primary">Nationality</label>
              <input
                type="text"
                className="w-full p-4 pr-16 border rounded-xl text-secondary outline-none"
              />
              <div className="relative w-fit text-blue-800 -top-12 self-end pr-2 transition-all duration-300">
                {isDropDownOpen ? (
                  <FontAwesomeIcon icon={faChevronUp} width={25} height={25} />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    width={25}
                    height={25}
                  />
                )}
              </div>

              {isDropDownOpen && (
                <div className="relative -top-8 w-full max-h-[250px] px-2 z-50 rounded-lg shadow-lg border-2 overflow-y-auto">
                  {countries.map((country) => (
                    <p key={country} className="hover:bg-blue-100 w-full">
                      {country.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="min-w-[300px] flex flex-col gap-2">
              <label className="text-primary">Birthday</label>
              <input
                type="date"
                className="w-full p-4 border rounded-xl text-secondary outline-none"
              />
              <p className="text-[12px] text-primary">
                This cannot be changed later.
              </p>
            </div>

            <div className="flex gap-2">
              <input type="radio" />
              <span>Male</span>
            </div>

            <div className="flex gap-2">
              <input type="radio" />
              <span>Female</span>
            </div>
          </div>
        </div>

        <Link
        href={"/"}
        className="w-fit px-[100px] py-3 bg-[#3866DF] text-[14px] font-semibold text-white rounded-md uppercase"
      >
        Update Profile
      </Link>
      </div>
    </>
  );
};

export default page;
