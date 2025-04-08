import EmptyPage from "@/components/account/EmptyPage";
import React from "react";

const page = () => {
  return (
    <div>
      <EmptyPage
        image={"/icons-svg/saved-cards_blanks.svg"}
        heading={"No saved cards"}
        subHeading={
          "Cards saved during the checkout process will display here. We use encrypted methods to store your details securely"
        }
        btnText={"Add new card"}
        hrefRoute={"/"}
      />
    </div>
  );
};

export default page;
