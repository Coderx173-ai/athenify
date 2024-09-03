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
      price: "50",
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
      price: "125",
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
      price: "225",
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


  const handleSelectPlan = (price) => {
    setChosenInfo({...chosenInfo, amount: Number(price)});
    setIsOpen(true)
  }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      setIsOpen(false)
  
      
  
      if (!stripe || !elements) {
        return;
      }
  
      const cardElement = elements.getElement(CardElement);
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
            name: chosenInfo.name,
            email: chosenInfo.email,
          },
      });
  
      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }
  
      // Call your backend to create a PaymentIntent with the selected amount
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            paymentMethodId: paymentMethod.id, 
            email: chosenInfo.email,
            name: chosenInfo.name,
            amount: chosenInfo.amount // or another dynamic value
          }),
        });
  
        
        
      const paymentIntent = await response.json();
      paymentIntent && toast.success('Payment Successfull !!!');
        paymentIntent && router.push("/")
        
      if (paymentIntent.error) {
        console.error(paymentIntent.error);
        setLoading(false);
        return;
      }
  
      const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.client_secret);
  
      if (confirmError) {
        console.error(confirmError);
        setLoading(false);
        return;
      }
  
      // Payment succeeded - Redirect the user based on the response
      setLoading(false);
  
      if (paymentIntent.success) {
        window.location.href = paymentIntent.redirectUrl; // Redirect to the URL provided by the backend
      } else {
        console.error('Payment not successful');
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
                  <h2 className="text-[#473BF0] font-AvenirRomanFont text-4xl font-semibold mb-2 pt-6">
                    {plan.name}
                  </h2>
                  <div className=" font-AvenirRomanFont pt-5 pb-2">
                    
                    <p className=" text-2xl font-AvenirRomanFont italic">
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
                  <button className="bg-[#473BF0] text-white py-3 px-4 rounded-md text-left max-w-[205px] w-full flex items-center justify-between" onClick={() => handleSelectPlan(plan.price)}>
                    <span>Buy Now</span>
                    <TiArrowRight className="text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          

            {
                isOpen && <div className="fixed top-0 left-0 h-screen w-screen bg-indigo-900/90 overscroll-none">
                    
                    <form onSubmit={handleSubmit} className="pay-form max-w-[500px] w-full bg-gradient-to-br from-[#5a461f] via-[#7d6e49] to-[#644d13] px-5 py-4 rounded-md text-white shadow-md  drop-shadow-md gap-3 flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                   <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-cyan-100">Payment form for {chosenInfo.amount} $</h4>
                   <button className="bg-blue-800 text-white font-semibold rounded-md px-4 py-1 text-sm" onClick={() => setIsOpen(false)}>Close</button>
                   </div>
                <div>
                  <label className="flex items-center justify-between gap-2 max-w-[450px] w-full">
                    <span>Name</span>
                    <input
                      type="text"
                      value={chosenInfo.name}
                      onChange={(e) => setChosenInfo({...chosenInfo, name: e.target.value})}
                      placeholder="Cardholder Name"
                      required
                      className="bg-transparent border rounded-md px-2 py-1 max-w-[350px] w-full"
                    />
                  </label>
                </div>
                <div>
                <label className="flex items-center justify-between gap-2 max-w-[450px] w-full">
                    <span>Email</span>
                    <input
                      type="email"
                      value={chosenInfo.email}
                      onChange={(e) => setChosenInfo({...chosenInfo, email: e.target.value})}
                      placeholder="Email"
                      required
                      className="bg-transparent border rounded-md px-2 py-1 max-w-[350px] w-full"
                    />
                  </label>
                </div>
                <div>
                <label className="flex items-center justify-between gap-2 max-w-[450px] w-full">
                    <span>Country</span>
                    <input
                      type="text"
                      value={chosenInfo.country}
                      onChange={(e) => setChosenInfo({...chosenInfo, country: e.target.value})}
                      placeholder="Country"
                      required
                      className="bg-transparent border rounded-md px-2 py-1 max-w-[350px] w-full"
          
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Card Details
                    <div className="bg-transparent border rounded-md px-2 py-1 text-white w-full">
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#fff',
                            '::placeholder': {
                              color: '#a0aec0',
                            },
                          },
                          invalid: {
                            color: '#fa755a',
                            iconColor: '#fa755a',
                          },
                        },
                      }}
                    />
                    </div>
                  </label>
                </div>
                <div className="max-w-[350px] w-full mx-auto flex justify-center">
                <button type="submit" disabled={!stripe || loading} className="bg-blue-700 text-white border-white px-8 py-2 rounded-lg">
                  {loading ? 'Processing...' : 'Pay'}
                </button>
                </div>
              </form>
                </div>
            }


      </div>
    )
  }


  export default PlansCards