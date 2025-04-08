import EmptyPage from "@/components/account/EmptyPage";
import React from "react";

const page = () => {
  return (
    <>
      <EmptyPage
        image={"/icons-svg/returns_blanks.svg"}
        heading={"No returns requested"}
        subHeading={
          "You have not requested any previous returns"
        }
        btnText={"create a new return"}
        hrefRoute={"/"}
      />
    </>
  );
};

export default page;
