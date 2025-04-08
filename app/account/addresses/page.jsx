import EmptyPage from "@/components/account/EmptyPage";
import React from "react";

const page = () => {
  return (
    <div>
      <EmptyPage
        image={"/icons-svg/addresses_blanks.svg"}
        heading={"No saved addresses"}
        subHeading={
          "Add your addresses for fast and easy checkout across our marketplaces"
        }
        btnText={"Add new address"}
        hrefRoute={"/"}
      />
    </div>
  );
};

export default page;
