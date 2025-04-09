import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-full p-5 my-4 flex flex-col gap-6">
        <h2 className="text-[24px] text-secondary font-bold">
          Security Settings
        </h2>

        <div className="w-full bg-white p-5 rounded-xl">
          <h2 className="text-[18px] font-semibold mb-5">Security</h2>

          <div className="w-full flex flex-wrap justify-start items-center gap-5">
            <div className="min-w-[300px] flex flex-col gap-2">
              <label className="text-primary">Language</label>
              <input
                type="password"
                placeholder="*******"
                className="w-full border p-4 rounded-xl"
              />
            </div>
            <button className="h-14 px-4 border mt-8 rounded-sm uppercase font-semibold text-primary cursor-pointer">
              change password
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 bg-white p-5 rounded-xl">
          <h2 className="text-[18px] font-semibold">Account Deletion</h2>

          <p className="text-[16px] text-red-600 border-b-2 w-fit border-red-600 hover:border-hidden cursor-pointer">
            Delete your account
          </p>

          <p className="text-[14px] text-primary">
            We are sad to see you go, but hope to see you again!
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
