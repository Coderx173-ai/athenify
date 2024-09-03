"use client"
import React, { useContext } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./subscription.css";
import {  Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PlansCards from "./PlansCards";
import ScrollContext from "../ScrollContext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const SubscriptionSection = () => {
  const { sectionRefs } = useContext(ScrollContext);
  
  return (
    <Elements stripe={stripePromise}>
    <div className="max-w-7xl mx-auto py-16"  id="subscription" ref={sectionRefs.subscription}>
      <SectionTitle title={"Flexible Membership Options"} />
      <div className="max-w-[755px] w-full text-center mx-auto pt-4">
        <p className="text-[18px] text-white">We know decision-making is hard, but don’t sweat it. Choose the membership that’s right for you and start perspiring to greatness.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-10 gap-8 w-full">
        <PlansCards/>
        
      </div>
      
      </div>
    </Elements>
  );
};

export default SubscriptionSection;


