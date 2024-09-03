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
      <div className="relative w-full md:w-[680px] rounded-2xl bg-gradient-to-r from-black via-black/20 to-transparent backdrop-blur-sm py-10 px-3 md:px-[56px]">
        <h1 className="font-AvenirBlackFont text-[32px] md:text-[58px] md:leading-[60px] tracking-[2px] text-white max-w-[612px] w-full">
          Social Media is Not <br /> Dumb Luck. It&apos;s <br /> Battle Strategy.
        </h1>
        <p className="font-AvenirRomanFont font-normal text-[20px] md:text-[25px] pt-4 text-white md:w-[600px]">
          Success comes from understanding your audience, crafting a clear
          message, and executing with precision, just like in a well-planned
          battle.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-4 justify-between border rounded-2xl border-gray-400 bg-gradient-to-r from-black via-black/30 to-transparent backdrop-blur-sm mt-[80px] px-[54px] py-6 text-white">
        {contents?.map((content) => (
          <div key={content?.title} className="max-w-[231px] w-full flex flex-col justify-start items-start min-h-[150px] h-full">
            <Image
              src={content?.icon}
              alt={content?.title}
              width={35}
              height={35}
              className="pb-1"
            />
            <h1 className="py-1 text-[30px] font-AvenirBlackFont">{content?.title}</h1>
            <p className="text-gray-300 font-normal font-AvenirRomanFont text-[22px]">{content?.des}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
