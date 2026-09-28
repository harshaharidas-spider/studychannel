"use client";

import React from "react";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#f8f7f4] py-16 lg:py-24 overflow-hidden select-none">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Yellow Card */}
        <div className="w-full bg-[#fad654] rounded-3xl p-8 sm:p-12 lg:p-16 relative z-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Title Column */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight ] max-w-sm">
                Who we are & how we arrived here?
              </h2>
            </div>

            {/* CTA Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5 pt-2">
              <p className="text-sm font-semibold text-slate-800 leading-relaxed max-w-md">
                Indian Study Channel has proudly helped millions of students across the continent find their perfect university.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-orange-50 text-sm font-bold text-[#ff5a00] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Story Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-1 hidden lg:block"></div>
            <div className="lg:col-span-11 space-y-6 text-[15px] text-slate-900 font-medium leading-relaxed pr-4 lg:pr-8">
              <p>
                Started in 2013 by education enthusiasts, Indian Study Channel partners with forward-thinking universities to create streamlined, effective, and easy-to-use admission pathways. It is our mission to empower students with the tools they need to supercharge their careers so that they can achieve their academic dreams without friction.
              </p>
              <p>
                Our founders spent the early part of their careers working in university admissions where they focused on guiding students on how to choose their majors—whether it was a new technical degree or a traditional arts program they had never considered before. Throughout those early years, they began to see a pattern day after day. Thousands of students came with the same goals—to start fresh in a new country, learn innovative skills, and start creative careers. However, once students attempted to navigate international admissions alone, the process was a giant mess.
              </p>
              <p>
                Seeing a need in the market motivated our founders to begin helping students get their documentation organized, evaluated, and submitted properly. After massive success, word spread quickly and they dedicated themselves fully to keeping up with the demand. And Indian Study Channel was born.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
