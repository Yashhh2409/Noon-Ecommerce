"use client";

import React from "react";
const page = () => {
  return (
    <>
      <div className="max-w-full p-5 my-4 flex flex-col gap-6">
        <h2 className="text-[24px] text-secondary font-bold">Profile</h2>

        <div className="w-full bg-white p-5 rounded-xl">
          <h2 className="text-[18px] font-semibold mb-5">
            Receive Communications In
          </h2>

          <div className="w-full flex flex-wrap justify-start gap-5">
            <div className="min-w-[300px] flex flex-col gap-2">
              <label className="text-primary">Language</label>
              <select name="" id="" className="w-full border p-4 rounded-xl outline-none">
                <option value="">English</option>
                <option value="">العربية</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
