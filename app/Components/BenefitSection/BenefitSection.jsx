import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import calender from "@/public/calender.png";
import successes from "@/public/successes.png";
import rocket from "@/public/rocket.png";
import man from "@/public/man.png";
import imageRemove from "@/public/image-remove.png";
import iphone from "@/public/iphone.png";
import Image from "next/image";
// import videoSrc from "@/public/video.mov";

const BenefitSection = () => {
  return (
    <div className="content-wrapper px-4 md:px-[54px] pt-14">
      <SectionTitle title={"Benefit"} />
      <div className="flex flex-col md:flex-row px-4v md:px-[42px] py-10">
        <div className="md:w-[70%] font-AvenirBlackFont font-light text-gray-300 md:mt-8 mt-0">
          <div className="flex items-start justify-start gap-2">
            <Image
              src={rocket}
              className="pt-1 mr-[24px]"
              alt="pic"
              width={50}
              height={50}
            />
            <h1 className="max-w-[738px] w-full">
              <span className="text-xl md:text-[36px]">Start Now:</span> <span className="font-AvenirRomanFont text-lg md:text-[32px]">and envision yourself
              as the best in your field to build confidence and motivation.</span>
            </h1>
          </div>
          <div className="flex items-start justify-start gap-2 mt-8">
            <Image
              src={calender}
              className="pt-1 mr-[15px]"
              alt="pic"
              width={60}
              height={60}
            />
            <h1 className="max-w-[738px] w-full">
              <span className="text-xl md:text-[36px]">Establish a Dedicated Schedule:</span>{" "}
              <span className="font-AvenirRomanFont text-lg md:text-[32px]">and stick to a consistent routine that focuses on your goals and
              development. motivation. </span>
            </h1>
          </div>
          <div className="flex items-start justify-start gap-2 mt-8">
            <Image
              src={imageRemove}
              className="pt-1"
              alt="pic"
              width={80}
              height={80}
            />
            <h1 className="max-w-[738px] w-full">
              <span className="text-xl md:text-[36px]">Personalize Existing Strategies:</span>{" "}
              
              <span className="font-AvenirRomanFont text-lg md:text-[32px]">and frameworks to fit your unique needs and circumstances instead
              of starting from scratch.</span>
            </h1>
          </div>
          <div className="flex items-start justify-start gap-2 mt-8">
            <Image
              src={successes}
              className="pt-1 mr-[10px]"
              alt="pic"
              width={70}
              height={70}
            />
            <h1 className="max-w-[738px] w-full">
              <span className="text-xl md:text-[36px]"> Analyze Your Successes:</span> {" "}
              <span className="font-AvenirRomanFont text-lg md:text-[32px]"> Reflect
              on your achievements to understand what worked well, and use those
              insights to refine your approach.</span>
            </h1>
          </div>
        </div>
        <div className="md:w-[30%] pt-10 md:pt-0">
          <div className="h-[452px] w-[250px] relative mx-auto overflow-hidden b-phone bg-cover bg-left-top">
            
            
            <div className=" w-full h-full object-center rounded-3xl z-[20] overflow-hidden">
              <Image
                src={iphone}
                className="max-w-[398px] max-h-[782px] w-full h-full object-center"
                alt="pic"
              />
              <div className="rounded-3xl h-[458px] w-[205px] mx-auto absolute bottom-[20px] right-[22px] z-10 overflow-hidden">
              <video
              className="object-center w-full h-full"
              controls
              autoPlay
              // poster={man}
            >
              <source src={"/video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h4 className="absolute bottom-2 left-[49%] translate-x-[-50%] -z-20 text-white text-xl font-cursive">athenify</h4>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
