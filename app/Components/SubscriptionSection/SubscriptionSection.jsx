import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const SubscriptionSection = () => {
  const plans = [
    {
      name: "Soldier",
      originalPrice: "$75",
      price: "50",
      discountedPrice: "$50/mo*",
      points: [
        "7 training modules",
        "community access",
        ""
      ],
      description:
        "7 training modules, community access, weekly group calls, and editor support.",
      options: ["Month-to-Month No Commitment", "$40 w/12 month commitment"],
      bgColor: "bg-gradient-to-tr from-[#7a3b10] to-[#bb6e21]",
    },
    {
      name: "Demigod",
      originalPrice: "$175",
      price: "125",
      discountedPrice: "$125/mo*",
      description:
        "Everything in Soldier plus monthly 1-on-1s with Bilal and sponsor outreach assistance.",
      options: ["Month-to-Month No Commitment", "$100 w/ 12 Month Commitment"],
      bgColor: "bg-gradient-to-tr from-[#5e5e5e] to-[#8b8b8b]",
    },
    {
      name: "Olympian",
      originalPrice: "$300",
      price: "225",
      discountedPrice: "$225/mo*",
      description:
        "All Demigod perks plus weekly 1-on-1s and personalized merch creation support.",
      options: ["Month-to-Month No Commitment", "$185 w/12 Month Commitment"],
      bgColor: "bg-gradient-to-tr from-[#9f751f] to-[#d5aa4c]",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16">
      <SectionTitle title={"Flexible Membership Options"} />
      <div className="max-w-[755px] w-full text-center mx-auto pt-4">
        <p className="text-[18px] text-white">We know decision-making is hard, but don’t sweat it. Choose the membership that’s right for you and start perspiring to greatness.</p>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between items-center px-4 py-10 gap-8 mt-10">
        <div className="w-full md:w-1/3">
          <h1 className="text-white text-3xl font-AvenirRomanFont font-extrabold mb-4 text-center leading-[40px] tracking-[5px]">
            Flexible Membership Options
          </h1>
          <p className="text-white text-lg text-center leading-8">
            We know decision-making is hard, but don’t sweat it. Choose the
            membership that’s right for you and start perspiring to greatness.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {plans?.map((plan, index) => (
            <div
              key={index}
              className={`shadow-md text-center w-[350px] md:w-[300px] h-[420px] overflow-hidden`}
            >
              <div className={`${plan.bgColor} pb-6 rounded-lg`}>
                <h2 className="text-white font-AvenirRomanFont text-4xl font-semibold mb-2 pt-6">
                  {plan.name}
                </h2>
                <div className="flex items-center justify-center font-AvenirRomanFont gap-1">
                  <p
                    className="text-white line-through decoration-[#FF0303] text-2xl"
                    style={{ textDecorationThickness: "4px" }}
                  >
                    {plan.originalPrice}
                  </p>
                  <p className="text-white text-2xl font-semibold">
                    {plan.discountedPrice}
                  </p>
                </div>
                <div className="bg-white text-black mx-2 rounded-md pb-2">
                  <p className="mt-4 mx-6 pt-5 border-b-2 pb-4 leading-[30px]">
                    {plan.description}
                  </p>
                  <ul className="text-start px-5 text-sm pt-3 pb-6">
                    {plan?.options.map((option, idx) => (
                      <li className="flex items-center gap-1 pt-1" key={idx}>
                        <div className="size-3 bg-slate-300 border border-black rounded-full" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="bg-teal-500 text-white mt-4 py-2 px-4 rounded-full w-full">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-10 gap-8 mt-10">
        <div className="flex flex-col md:flex-row gap-4">
          {plans?.map((plan, index) => (
            <div
              key={index}
              className={`shadow-md text-center w-[350px] md:w-[300px] h-[420px] overflow-hidden`}
            >
              <div className={`${plan.bgColor} pb-6 rounded-lg`}>
                <h2 className="text-white font-AvenirRomanFont text-4xl font-semibold mb-2 pt-6">
                  {plan.name}
                </h2>
                <div className="flex items-center justify-center font-AvenirRomanFont gap-1">
                  <p
                    className="text-white line-through decoration-[#FF0303] text-2xl"
                    style={{ textDecorationThickness: "4px" }}
                  >
                    {plan.originalPrice}
                  </p>
                  <p className="text-white text-2xl font-semibold">
                    {plan.discountedPrice}
                  </p>
                </div>
                <div className="bg-white text-black mx-2 rounded-md pb-2">
                  <p className="mt-4 mx-6 pt-5 border-b-2 pb-4 leading-[30px]">
                    {plan.description}
                  </p>
                  <ul className="text-start px-5 text-sm pt-3 pb-6">
                    {plan?.options.map((option, idx) => (
                      <li className="flex items-center gap-1 pt-1" key={idx}>
                        <div className="size-3 bg-slate-300 border border-black rounded-full" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="bg-teal-500 text-white mt-4 py-2 px-4 rounded-full w-full">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SubscriptionSection;
