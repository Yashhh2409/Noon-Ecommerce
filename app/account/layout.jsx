"use client";

import React, { Children } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faList,
  faTentArrowTurnLeft,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const links = [
  {
    id: "1",
    name: "Orders",
    link_url: "orders",
  },
  {
    id: "2",
    name: "Returns",
    link_url: "returns",
  },
  {
    id: "3",
    name: "Wishlist",
    link_url: "wishlist",
  },
];

const myAccountLinks = [
  {
    id: "1",
    name: "Profile",
    link_url: "profile",
  },
  {
    id: "2",
    name: "Addresses",
    link_url: "addresses",
  },
  {
    id: "3",
    name: "Payments",
    link_url: "payments",
  },
  {
    id: "4",
    name: "Warranty Claims",
    link_url: "warranty-claims",
  },
  {
    id: "5",
    name: "Gift Cards",
    link_url: "gift-cards",
  },
];

const layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-red-200 block lg:hidden">
        <FontAwesomeIcon icon={faBars} width={25} height={25} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 px-10 bg-[#F3F4F8]">
        <div className="col-span-3 p-4">
          <div className="bg-white w-full rounded-xl p-4 mb-5 flex flex-col gap-4">
            <div className="text-secondary">
              <strong className="text-[18px] font-bold">Hala!</strong>
              <p className="text-[14px]">dhande.yash2001@gmail.com</p>
            </div>
            <div className="text-[14px] flex gap-2 items-center">
              <p className="font-semibold">Profile Completion</p>
              <p className="bg-yellow-400 rounded-full px-2">20%</p>
            </div>
            <div className="w-full bg-gray-500 overflow-hidden h-2 rounded-full">
              <div className="bg-yellow-500 h-2" style={{ width: "20%" }}></div>
            </div>
            <div className="w-full">
              <Image
                src="/categoryimages/categoryBanner.png"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white w-full rounded-xl p-2 flex flex-col gap-1 mb-5">
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/account/${link.link_url}`}
                className={`p-3 w-full text-primary ${
                  pathname.includes(link.link_url)
                    ? "bg-[#FFFCD1] border text-secondary font-semibold"
                    : ""
                } rounded-xl`}
              >
                <div className="flex items-center justify-start gap-3">
                  <FontAwesomeIcon icon={faList} width={25} height={25} />
                  <span className="text-[16px]">{link.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <h3 className="text-primary text-[12px] font-bold mb-2 ml-2 uppercase">
            my account
          </h3>
          <div className="bg-white w-full rounded-xl p-2 flex flex-col gap-1">
            {myAccountLinks.map((link) => (
              <Link
                key={link.id}
                href={`/account/${link.link_url}`}
                className={`p-3 w-full text-primary ${
                  pathname.includes(link.link_url)
                    ? "bg-[#FFFCD1] border text-secondary font-semibold"
                    : ""
                } rounded-xl`}
              >
                <div className="flex items-center justify-start gap-3">
                  <FontAwesomeIcon icon={faList} width={25} height={25} />
                  <span className="text-[16px]">{link.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <main className="col-span-9">{children}</main>
      </div>
    </>
  );
};

export default layout;
