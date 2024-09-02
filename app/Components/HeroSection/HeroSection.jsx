import React from "react";
import Image from "next/image";

const HeroSection = () => {
  const contents = [
    {
      icon: "/icon1.png",
      title: "Earn Money",
      des: "Patrons Earn $3,500+: Gain significant revenue through strategic funding initiatives.",
    },
    {
      icon: "/icon2.png",
      title: "Follower Boost",
      des: "Instant Follower Boost: Increase follower count by 30% within the first month.",
    },
    {
      icon: "/icon3.png",
      title: "Partnerships",
      des: "Secure partnerships with 5 leading brands within 6 months.",
    },
    {
      icon: "/icon4.png",
      title: "Workshops",
      des: "Host 12 workshops, each with an average attendance of 50 participants.",
    },
  ];

  return (
    <>
      <div className="relative md:w-[600px] p-8 mt-[8%] md:ml-[50px] rounded-2xl bg-gradient-to-r from-black via-black/20 to-transparent backdrop-blur-sm">
        <h1 className="font-AvenirBlackFont text-[35px] md:text-[48px] md:leading-[55px] tracking-[2px] text-white">
          Social Media is Not <br /> Dumb Luck. It’s <br /> Battle Strategy.
        </h1>
        <p className="font-AvenirRomanFont pt-4 text-white md:w-[450px]">
          Success comes from understanding your audience, crafting a clear
          message, and executing with precision, just like in a well-planned
          battle.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 justify-center border rounded-2xl border-gray-400 bg-gradient-to-r from-black via-black/30 to-transparent backdrop-blur-sm p-6 mt-[7%]">
        {contents?.map((content) => (
          <div key={content?.title}>
            <Image
              src={content?.icon}
              alt={content?.title}
              width={35}
              height={35}
              className="pb-1"
            />
            <h1 className="py-1 text-lg">{content?.title}</h1>
            <p className="text-gray-300 font-light">{content?.des}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
