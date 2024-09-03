import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl font-AvenirRomanFont pt-6 text-white text-center">
      <div className="w-[60px] md:w-[100px] h-[4px] bg-white " /> {title}{" "}
      <div className="w-[60px] md:w-[100px] h-[4px] bg-white" />
    </div>
  );
};

export default SectionTitle;
