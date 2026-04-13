"use client";

import React from 'react';

const BrandDivider = () => {
  return (
    <div className="w-full bg-[#EAF7F1] py-16 flex justify-center items-center border-t border-[#0B6B4F]/10">
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
            <span className="text-[#0B6B4F]">ODONTO</span>{" "}
            <span className="text-[#2ECC71]">STRATEGY</span>
          </span>
          <div className="h-1.5 w-20 bg-[#2ECC71] mt-4 rounded-full opacity-60"></div>
          <p className="mt-4 text-[#0B6B4F]/60 text-xs font-bold uppercase tracking-[0.2em]">
            Consultoria Estratégica
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandDivider;