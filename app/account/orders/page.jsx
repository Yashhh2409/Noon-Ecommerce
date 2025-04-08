"use client";

import React from "react";
import EmptyPage from "@/components/account/EmptyPage";

const page = () => {
  return (
    <>
      <EmptyPage
        image={"/icons-svg/orders_blanks.svg"}
        heading={"You have no previous orders"}
        subHeading={
          "We have thousands of items available across our wide range of sellers. Start ordering today!"
        }
        btnText={"continue shopping"}
        hrefRoute={"/"}
      />
    </>
  );
};

export default page;
