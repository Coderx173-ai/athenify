"use client";
import "./subscription.css"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import { useRouter } from 'next/navigation'
import toast, { Toaster } from "react-hot-toast";

const plans = [
    {
      name: "Soldier",
      originalPrice: "$75",
      price: 50,
      discountedPrice: "$50/mo*",
      points: [
        "7 training modules",
        "Community access",
        "Weekly group calls",
        "Editor support"
      ],
      description:
        "7 training modules, community access, weekly group calls, and editor support.",
      options: ["Month-to-Month No Commitment", "$40 w/12 month commitment"],
      bgColor: "bg-gradient-to-tr from-[#7a3b10] to-[#bb6e21]",
      
    },
    {
      name: "Demigod",
      originalPrice: "$175",
      price: 125,
      discountedPrice: "$125/mo*",
      points: [
        "7 training modules",
        "Community access",
        "Weekly group calls",
        "Editor support",
        "Monthly 1-on-1 w/Bilal",
        "Sponsor outreach assistance",
      ],
      description:
        "Everything in Soldier plus monthly 1-on-1s with Bilal and sponsor outreach assistance.",
      options: ["Month-to-Month No Commitment", "$100 w/ 12 Month Commitment"],
      bgColor: "bg-gradient-to-tr from-[#5e5e5e] to-[#8b8b8b]",
      
    },
    {
      name: "Olympian",
      originalPrice: "$300",
      price: 225,
      discountedPrice: "$225/mo*",
      points: [
        "7 training modules",
        "Community access",
        "Weekly group calls",
        "Editor support",
        "Sponsor outreach assistance",
        "Weekly 1-on-1 w/ Bilal",
        "Personalized merch creation"
      ],
      description:
        "All Demigod perks plus weekly 1-on-1s and personalized merch creation support.",
      options: ["Month-to-Month No Commitment", "$185 w/12 Month Commitment"],
      bgColor: "bg-gradient-to-tr from-[#9f751f] to-[#d5aa4c]",
      
    },
  ];


const PlansCards = () => {
    const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [chosenInfo, setChosenInfo] = useState({
    amount: 50,
    name: "",
    email: "",
    country: ""
  });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
    const stripe = useStripe();


 

    const handleCheckout = async (amount) => {
      setLoading(true);
      try {
        const response = await fetch('/api/payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount }),
        });
  
        const { url, error } = await response.json();
  
        if (error) {
          console.error('Error creating Checkout session:', error);
          setLoading(false);
          return;
        }
  
        // Redirect to Stripe Checkout page
        window.location.href = url;
      } catch (err) {
        console.error('Error:', err);
        setLoading(false);
      }
    };

    return (
      <div className="w-full relative">
         <Toaster />
        <div className="flex flex-col md:flex-row gap-3 w-full justify-around">
            {plans?.map((plan, index) => (
              <div
                key={index}
                className={`shadow-md w-full md:w-[349px] h-full md:h-[600px] overflow-hidden rounded-lg bg-cover bg-left-top buy-card-${index} px-3 md:px-8 py-8 flex flex-col justify-between`}
                
              >
                <div className={` rounded-lg`}>
                  <h2 className="text-[#473BF0] font-AvenirRomanFont text-2xl uppercase font-semibold mb-2 pt-6">
                    {plan.name}
                  </h2>
                  <div className=" font-AvenirRomanFont pt-5 pb-2">
                    
                    <p className=" text-2xl font-AvenirRomanFont">
                      <sub className="font-bold">$</sub><span className="text-[50px] font-bold">{plan.price}</span> <span>/ month</span>
                    </p>
                    <p className="text-lg py-2">billed monthly</p>
                  </div>
                  <div className=" text-black mx-2 rounded-md py-2">
                    <ul className="flex flex-col gap-1">
                      {
                        plan.points.map((item, index) => <li key={index} className="flex items-center justify-start gap-2 text-xl">
                          <IoMdCheckmark className="text-[#68D585]"/><span className="font-AvenirRomanFont">{item}</span>
                        </li>)
                      }
                    </ul>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <button className="bg-[#473BF0] text-white py-3 px-4 rounded-md text-left max-w-[205px] w-full flex items-center justify-between" onClick={() => handleCheckout(plan.price)}>
                    <span>Buy Now</span>
                    <TiArrowRight className="text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  }


  export default PlansCards