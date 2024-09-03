/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import aboutImage from "@/public/about.png";
import Image from "next/image";
const AboutSection = () => {
  return (
    <div className="content-wrapper pb-16 px-2 md:px-[54px]">
      <SectionTitle title={"About"} />
      <div className="flex flex-col md:flex-row pt-6">
        <p className="md:w-full leading-8 md:leading-[60px] text-lg md:text-[30px] text-white text-center font-AvenirRomanFont">
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
      </div>
    </div>
  );
};

export default AboutSection;
