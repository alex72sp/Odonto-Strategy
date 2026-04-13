"use client";

import React from 'react';

const BrandDivider = () => {
  return (
    <div className="w-full bg-[#EAF7F1] py-12 flex justify-center items-center border-t border-[#0B6B4F]/5">
      <div className="text-center animate-in fade-in zoom-in duration-700">
        <span className="text-2xl md:text-4xl font-black tracking-tighter uppercase">
          <span className="text-[#0B6B4F]">ODONTO</span>{" "}
          <span className="text-[#2ECC71]">STRATEGY</span>
        </span>
        <div className="h-1 w-12 bg-[#2ECC71] mx-auto mt-2 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default BrandDivider;