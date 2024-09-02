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
    <div className="max-w-7xl mx-auto pb-10">
      <h1 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-AvenirRomanFont">
        Here's What to Expect...
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-10 mt-8">
        <div className="bg-[#33464f] text-white p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {topics?.map((column, index) => (
              <ul key={index} className="space-y-2">
                {column?.map((topic, idx) => (
                  <li key={idx} className="list-disc">
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
