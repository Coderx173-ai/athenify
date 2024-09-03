/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import aboutImage from "@/public/about.png";
import Image from "next/image";
const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto pb-16 px-6">
      <SectionTitle title={"About"} />
      <div className="flex flex-col md:flex-row pt-16">
        <p className="md:w-[70%] leading-[35px] text-white">
          Bilal Ahmed is a creator with over 5M followers across his social
          platforms. As the CEO of MindMountain, Bilal has used his expertise in
          virality, personal branding and identity shifting to build millions of
          social media followers within 3 years. From mentoring and coaching a
          diverse range of influencers to making short-form content for
          worldwide audiences, Bilal remains an effective influence for
          countless people. Bilal has also worked with brands such as Manscaped
          with their Lawn Mower 4.0 Campaign along with ArtSabers' campaign,
          generating 100m views across Tik Tok and Instagram.
        </p>
        <div className="w-full md:w-[30%] pt-10 md:pt-0">
          <div className="md:h-[350px] relative  md:w-[250px] mx-auto">
            <Image
              src={aboutImage}
              className="w-full h-full object-center"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
