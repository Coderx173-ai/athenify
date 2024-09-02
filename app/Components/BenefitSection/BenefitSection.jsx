import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import calender from "@/public/calender.png";
import successes from "@/public/successes.png";
import rocket from "@/public/rocket.png";
import man from "@/public/man.png";
import imageRemove from "@/public/image-remove.png";
import iphone from "@/public/iphone.png";
import Image from "next/image";

const BenefitSection = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10">
      <SectionTitle title={"Benefit"} />
      <div className="flex flex-col md:flex-row px-4 py-10">
        <div className="md:w-[70%] font-AvenirBlackFont font-light text-gray-300 md:mt-8 mt-0">
          <div className="flex items-start gap-2">
            <Image
              src={rocket}
              className="pt-1"
              alt="pic"
              width={20}
              height={20}
            />
            <h1>
              <span className="text-lg">Start Now:</span> and envision yourself
              as the best in your field to build confidence and motivation.
            </h1>
          </div>
          <div className="flex items-start gap-2 mt-8">
            <Image
              src={calender}
              className="pt-1"
              alt="pic"
              width={20}
              height={20}
            />
            <h1>
              <span className="text-lg">Establish a Dedicated Schedule:</span>{" "}
              and stick to a consistent routine that focuses on your goals and
              development. motivation.
            </h1>
          </div>
          <div className="flex items-start gap-2 mt-8">
            <Image
              src={imageRemove}
              className="pt-1"
              alt="pic"
              width={20}
              height={20}
            />
            <h1>
              <span className="text-lg">Personalize Existing Strategies:</span>{" "}
              and frameworks to fit your unique needs and circumstances instead
              of starting from scratch.
            </h1>
          </div>
          <div className="flex items-start gap-2 mt-8">
            <Image
              src={successes}
              className="pt-1"
              alt="pic"
              width={20}
              height={20}
            />
            <h1>
              <span className="text-lg"> Analyze Your Successes:</span> Reflect
              on your achievements to understand what worked well, and use those
              insights to refine your approach.
            </h1>
          </div>
        </div>
        <div className="md:w-[30%] pt-10 md:pt-0">
          <div className="h-[420px] relative w-[230px] mx-auto">
            <Image
              src={man}
              className="w-full h-full object-center"
              alt="pic"
            />
            <div className="h-[452px] w-[270px] mx-auto absolute -top-[15px] -right-5">
              <Image
                src={iphone}
                className="w-full h-full object-center"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
