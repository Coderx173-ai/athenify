import AboutSection from "./Components/AboutSection/AboutSection";
import BenefitSection from "./Components/BenefitSection/BenefitSection";
import ExpectSection from "./Components/ExpectSection/ExpectSecton";
import HeroSection from "./Components/HeroSection/HeroSection";
import MethodsSection from "./Components/MethodsSection/MethodsSection";
import SubscriptionSection from "./Components/SubscriptionSection/SubscriptionSection";
import ViewersSection from "./Components/ViewersSection/ViewersSection";

export default function Home() {
  return (
    <main>
      <div className="bg-heroBG min-h-[1050px] h-full pb-2  bg-[#062630] px-2 md:px-4 bg-cover from-transparent w-full bg-left-top">
        
        <div className="content-wrapper mt-[-95px] pt-[160px] px-2 md:px-[54px]">
          
          <HeroSection />
        </div>
      </div>
       
      <div className="w-full bg-gradient-to-tr from-[#071a23] via-[#071a23] to-[#044050] bg-[length:100%_100%]">
        <BenefitSection />
      </div>
      
      <div className="bg-[#071a23]">
        <SubscriptionSection />
        <ExpectSection />
         <AboutSection />
        <ViewersSection/>
       <MethodsSection/>
      </div> 
    </main>
  );
}