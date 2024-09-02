import AboutSection from "./Components/AboutSection/AboutSection";
import BenefitSection from "./Components/BenefitSection/BenefitSection";
import ExpectSection from "./Components/ExpectSection/ExpectSecton";
import SubscriptionSection from "./Components/SubscriptionSection/SubscriptionSection";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-gradient-to-tr from-[#071a23] via-[#071a23] to-[#044050] bg-[length:100%_100%]">
        <BenefitSection />
      </div>
      <div className="bg-[#071a23]">
        <SubscriptionSection />
        <ExpectSection />
        <AboutSection />
      </div>
    </main>
  );
}
