"use client";

import React from "react";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
          
          {/* Left Image */}
          <div className="w-full md:w-[45%] shrink-0">
            <div className="relative w-full aspect-square rounded-[24px] overflow-hidden shadow-sm bg-slate-100">
              <Image
                src="/images/tonysir.png"
                alt="Our Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-[55%] flex flex-col items-start">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight ] mb-6">
              Meet with our founder
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-base text-slate-600 font-medium leading-relaxed mb-8 max-w-lg">
              Tony Sir is the visionary behind Nihou Studio, a creative agency built on the belief that great design starts with meaningful stories. Tony Sir leads the team with a blend of strategic thinking, creative insight, and a deep commitment to helping brands stand out in the world.
            </p>

            {/* Name and Title */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 tracking-tight">Tony Sir</h4>
              <p className="text-sm font-bold text-slate-500 mt-1">CEO at Nihou Studio</p>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
