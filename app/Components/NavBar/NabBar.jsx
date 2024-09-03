"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import ScrollContext from "../ScrollContext";

const NabBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollToSection } = useContext(ScrollContext);
  const items = ["Benefit", "Subscriptions", "Expect", "About"];

  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <div className={`sticky top-0 left-0 right-0 !z-[999] ${
        isScrolled ? ' bg-[#071C25]' : 'bg-transparent'} h-[95px]`}>
      <nav className="flex items-center justify-between border-b py-4 px-4 shadow">
        <div className="flex items-center gap-8">
          <Link href={"/"}>
            <h1 className="font-AvenirBlackFont !text-[39px] font-extrabold text-white">athenify.ai</h1>
          </Link>
          <ul className="hidden md:flex items-center gap-4 font-AvenirRomanFont mt-2">
            {items?.map((item, index) => (
              
                <li className="cursor-pointer text-white text-[15px]" key={index}>
                  <Link href="/"  className="px-2">
                  {item}
                  </Link>
                  </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-600 md:hidden"
          >
            {isSidebarOpen ? (
              <FaTimes className=" size-8" />
            ) : (
              <FaBars className=" size-8" />
            )}
          </button>
          <button className="hidden md:flex bg-[#63E1E1] font-AvenirRomanFont px-4 py-1.5 rounded-md text-black ml-4 text-[19px]" onClick={() => scrollToSection("subscription")}>
            Buy Now
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-30 bg-[#131515] text-white p-4 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300`}
        id="sidebar"
      >
        <div className="">
          <div className="flex items-center justify-between border-b pb-5">
            <Link href={"/"}>
              <h1 className="font-AvenirBlackFont text-4xl">athenify.ai</h1>
            </Link>
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-600 md:hidden"
            >
              {isSidebarOpen ? (
                <FaTimes className="size-8" />
              ) : (
                <FaBars className="size-8" />
              )}
            </button>
          </div>
          <ul className="flex flex-col gap-4 font-AvenirRomanFont mt-5 px-5">
            {items?.map((item) => (
              <Link href="/" key={item}>
                <li className="cursor-pointer">{item}</li>
              </Link>
            ))}
          </ul>

          <button className="flex bg-[#63E1E1] font-AvenirRomanFont px-14 py-1.5 rounded-md text-black mt-4" onClick={() => {scrollToSection("subscription"); toggleSidebar()}}>
            Buy Now
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-40 ${
          isSidebarOpen ? "block" : "hidden"
        } z-20 md:hidden`}
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default NabBar;
