import React, { useState } from "react";

const ProductOverview = () => {
  const specifications = [
    ["Expandable Memory Type", "No Expandable Memory"],
    ["Secondary Camera Resolution", "12 MP"],
    ["Charging Type", "Type-C"],
    ["SIM Count", "Dual SIM"],
    ["Secondary Camera", "12 - 15.9 MP"],
    ["RAM Size", "8 GB"],
    ["Battery Size", "3577 MAh"],
    ["Internal Memory", "128 GB"],
    ["Product Weight", "199 G"],
    ["Screen Size", "6.3 In"],
    ["Version", "Middle East Version"],
    ["SIM Type", "Nano + ESIM"],
    ["Refresh Rates", "120Hz"],
    ["Colour Name", "Black Titanium"],
    ["Display Type", "OLED"],
    ["Operating System Version", "IOS 18"],
    ["Operating System", "IOS"],
    ["Expandable Memory Type", "No Expandable Memory"],
    ["Secondary Camera Resolution", "12 MP"],
    ["Charging Type", "Type-C"],
    ["SIM Count", "Dual SIM"],
    ["Secondary Camera", "12 - 15.9 MP"],
    ["RAM Size", "8 GB"],
    ["Battery Size", "3577 MAh"],
    ["Internal Memory", "128 GB"],
    ["Product Weight", "199 G"],
    ["Screen Size", "6.3 In"],
    ["Version", "Middle East Version"],
    ["SIM Type", "Nano + ESIM"],
    ["Refresh Rates", "120Hz"],
    ["Colour Name", "Black Titanium"],
    ["Display Type", "OLED"],
    ["Operating System Version", "IOS 18"],
    ["Operating System", "IOS"],
  ];

  const [showFullList, setShowFullList] = useState(false);
  const visibleList = showFullList
    ? specifications
    : specifications.slice(0, 15);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">
        Product Overview
      </h1>
      <hr />
      <div className="flex gap-10 justify-between">
        <div className="w-[50%] bg-white py-5 text-gray-600 flex flex-col gap-10">
          {/* Highlights  */}
          <div>
            <h1 className="text-xl font-bold mb-2 pl-5">Highlights</h1>
            <div className="text-sm text-gray-500">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Personalise your Home Screen. Tint your icons with any colour.
                  Rearrange and resize apps and widgets. You can even lock or
                  hide apps to protect sensitive information — it’s your call.
                </li>
                <li>
                  Choose your controls. Swap out your Lock Screen controls for
                  ones you love to use more often. Or you can assign a control
                  to the Action button.
                </li>
                <li>
                  In the redesigned Photos app, your Collections are
                  automatically organised by topic, like People & Pets.
                </li>
                <li>
                  Personalise every style even more with the new control pad,
                  which makes it easy to adjust tone and colour simultaneously.
                  You can also use the slider to adjust the intensity of the
                  specific colours, instead of applying a one-size-fits-all
                  approach.
                </li>
                <li>
                  Our improved image pipeline also enables more creative styles,
                  which allow you to customise the different moods of a photo
                  through colour.
                </li>
              </ul>
            </div>
          </div>

          {/* Overview  */}
          <div>
            <h1 className="text-xl font-bold mb-2 pl-5">Overview</h1>
            <div className="text-sm text-gray-500">
              <ul className="space-y-2 pl-5">
                <li>
                  Apple Intelligence protects your privacy at every step. With
                  on-device processing and Private Cloud Compute, no one but you
                  can access your data — not even Apple. The new Passwords app
                  makes it even easier to access account passwords, passkeys,
                  Wi-Fi passwords, two-factor authentication codes and more. It
                  stores them securely and syncs across your devices with
                  end-to-end encryption. You can also control which contacts to
                  share with an app, rather than giving it access to all your
                  contacts. And you can choose to share more contacts over time.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications  */}
        <div className="w-[50%] mx-auto text-gray-600 mt-5">
          <h1 className="text-xl font-bold mb-4 pl-5">Specifications</h1>
          <div className="">
            {visibleList.map(([title, value], index) => (
              <div
                key={index}
                className={`grid grid-cols-2 px-4 py-2 text-sm ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                }`}
              >
                <span className="text-gray-500 font-medium">{title}</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-white p-2 flex justify-center items-center ">
        <div className="absolute top-0 left-0 w-full h-10 bg-white blur-md"></div>
        <button
          className="m-6 text-blue-600 font-bold z-50 border-2 border-blue-600 px-5 py-1 rounded-lg hover:border-blue-700 hover:text-blue-700"
          onClick={() => setShowFullList(!showFullList)}
        >
          {showFullList ? "Show Less" : "View Full Overview"}
        </button>
      </div>
    </div>
  );
};

export default ProductOverview;
