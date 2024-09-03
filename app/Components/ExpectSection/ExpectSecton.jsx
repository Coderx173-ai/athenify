/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ExpectSection = () => {
  const topics = [
    [
      "Starting an Online Business",
      "Building Relationships With Prospects",
      "What to Sell Online",
      "How to Close Client Deals",
    ],
    [
      "Client Income Growth",
      "Success Story Process",
      "Branding and Using Social Media for Credibility",
      "Landing Deals",
    ],
    [
      "How To Get Started in Your First Week",
      "The Money Math to 6 and 7 figure earning",
      "Growing And Scaling Your Income Online",
    ],
  ];
  return (
    <div className="content-wrapper px-2 md:px-[50px] bg-[#081c25] pb-10">
      <h1 className="flex items-center justify-center gap-3 text-3xl md:text-5xl font-AvenirRomanFont text-white">
        Here's What to Expect...
      </h1>
      <div className=" py-10 mt-8">
        <div className="expert-shadow text-white p-8 rounded-3xl bg-[#071921] shadow-lg shadow-black">
          <div className="flex flex-col md:flex-row justify-between">
            {topics?.map((column, index) => (
              <ul key={index} className="px-3 md:px-8 max-w-[380px]">
                {column?.map((topic, idx) => (
                  <li key={idx} className="list-disc font-AvenirRomanFont font-medium text-xl py-2 =leading-6 md:leading-10 md:text-[30px]">
                    {topic}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectSection;
