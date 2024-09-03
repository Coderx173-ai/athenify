"use client";
import Image from "next/image";
import method1 from '@/public/method-img-1.png'
import method2 from '@/public/method-img-2.png'
import Link from "next/link";
import { useContext } from "react";
import ScrollContext from "../ScrollContext";

const MethodsSection = () => {
  const { scrollToSection } = useContext(ScrollContext);
    return (
      <div className="bg-methodBg bg-blend-darken md:bg-blend-lighten bg-[#071a23] md:min-h-screen bg-cover bg-no-repeat py-52 flex flex-col items-center relative z-[20] w-full">
        <div className="content-wrapper px-2 grid grid-cols-1 md:grid-cols-3 gap-8 text-white z-[20]">
          {/* Old Method */}
          <div className="px-4 md:px-1 text-start w-full">
            <h3 className="text-2xl md:text-[40px] font-semibold mb-4">OLD METHOD</h3>
            <ul className=" text-lg md:text-[30px] font-AvenirRomanFont space-y-2 leading-16 md:leading-10">
              <li>• Organic Growth</li>
              <li>• Hashtag Strategy</li>
              <li>• Collaborations</li>
              <li>• Timing of Posts</li>
              <li>• Platform Algorithms</li>
              <li>• Word of Mouth</li>
            </ul>
          </div>
  
          {/* New Method */}
          <div className="px-4 md:px-1 text-start w-full">
            <h3 className="text-2xl md:text-[40px] font-semibold mb-4">NEW METHOD</h3>
            <ul className=" text-lg md:text-[30px] font-AvenirRomanFont space-y-2 leading-16 md:leading-10">
              <li>• AI-Generated Content</li>
              <li>• Niche Targeting</li>
              <li>• Interactive Content</li>
              <li>• Cross-Platform Promotion</li>
              <li>• User-Generated Content</li>
            </ul>
          </div>
  
          {/* Athenify Method */}
          <div className="px-4 md:px-1 text-start w-full">
            <h3 className="font-semibold mb-4 bg-gradient-to-r from-[#15FFF1] to-[#6750A4] bg-clip-text text-2xl md:text-[40px]"><span className="text-transparent">ATHENIFY</span> METHOD</h3>
            <ul className=" text-lg md:text-[30px] font-AvenirRomanFont space-y-2 leading-16 md:leading-10">
              <li>• Balance Content Types</li>
              <li>• Steal Like an Artist</li>
              <li>• Consistency is Key</li>
              <li>• Know Your Audience</li>
              <li>• Focus on Presentation</li>
            </ul>
          </div>
        </div>
  
        {/* Call to Action Button */}
        <div className="content-wrapper px-2 md:px-[54px] mt-24 relative z-20">
          <button className="bg-[#63E1E1]/80 font-AvenirRomanFont text-[20px] md:text-[35px] text-white font-semibold py-2 md:py-5 px-2 md:px-10 rounded-full h-[80px] md:h-auto" onClick={() => scrollToSection("subscription")}>
            Start Your Social Media Success. Choose Your Plan Today
          </button>
        </div>
        <Image src={method1} alt="bg image" className="absolute h-full w-full bottom-0 z-0" />
        <Image src={method2} alt="bg image" className="absolute h-full w-full bottom-0 z-0" />
      </div>
    );
  };
  
  export default MethodsSection;