"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faList } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { id: "1", name: "Orders", link_url: "orders" },
  { id: "2", name: "Returns", link_url: "returns" },
  { id: "3", name: "Wishlist", link_url: "wishlist" },
  { id: "4", name: "Noon Credits", link_url: "meenaHubCredits" },
];

const myAccountLinks = [
  { id: "1", name: "Profile", link_url: "profile" },
  { id: "2", name: "Addresses", link_url: "addresses" },
  { id: "3", name: "Payments", link_url: "payments" },
  { id: "4", name: "Warranty Claims", link_url: "warranty-claims" },
  { id: "5", name: "Gift Cards", link_url: "gift-cards" },
];

const otherLinks = [
  { id: "1", name: "Notification", link_url: "notification" },
  { id: "2", name: "Security Settings", link_url: "securitySettings" },
];

const signOut = [{ id: "1", name: "SignOut", link_url: "signout" }];

const layout = ({ children }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const SidebarContent = () => (
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
          alt="Banner"
        />
      </div>
    </div>
  );

  const LinkGroup = ({ title, items }) => (
    <>
      {title && (
        <h3 className="text-primary text-[12px] font-bold mb-2 ml-2 uppercase">
          {title}
        </h3>
      )}
      <div className="bg-white w-full rounded-xl p-2 flex flex-col gap-1 mb-5">
        {items.map((link) => (
          <Link
            key={link.id}
            href={` ${
              link.link_url.includes("gift-cards")
                ? `/${link.link_url}`
                : `/account/${link.link_url}`
            }  `}
            // href={`/account/${link.link_url}`}
            onClick={() => setSidebarOpen(false)}
            className={`p-3 w-full text-primary hover:bg-blue-100 ${
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
    </>
  );

  return (
    <>
      {/* Hamburger for small screen */}
      <div
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="p-2 block lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} width={25} height={25} />
      </div>

      {/* Layout Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 px-0 lg:px-10 bg-[#F3F4F8]">
        {/* Sidebar for lg and above - always visible */}
        <div className="hidden lg:block col-span-3 p-4">
          <SidebarContent />
          <LinkGroup items={links} />
          <LinkGroup title="my account" items={myAccountLinks} />
          <LinkGroup title="Other" items={otherLinks} />
          <LinkGroup items={signOut} />
        </div>

        {/* Sidebar for small screen - AnimatePresence */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="block lg:hidden absolute top-0 left-0 h-auto w-3/4 bg-yellow-50 p-4 z-50"
            >
              <SidebarContent />
              <LinkGroup items={links} />
              <LinkGroup title="my account" items={myAccountLinks} />
              <LinkGroup title="Other" items={otherLinks} />
              <LinkGroup items={signOut} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="col-span-9 w-full h-auto">{children}</main>
      </div>
    </>
  );
};

export default layout;
