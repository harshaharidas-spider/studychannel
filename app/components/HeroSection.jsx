"use client";

import React from "react";
import Link from "next/link";
import { Search, GraduationCap, Building2, MonitorPlay, Globe2, Quote } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white font-sans">
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[450px] md:h-[550px] bg-[#0c599b] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/bgggg.webp")' }}
        ></div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900/30"></div>

        {/* Content Container (Header & Search Bar) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light text-white mb-10 tracking-tight text-center leading-tight">
            Gateway to Your Global Career
          </h1>
          
          <div className="relative w-full max-w-3xl mx-auto rounded-full bg-white">
            <input 
              type="text" 
              placeholder="Search courses, colleges, exams..." 
              className="w-full bg-transparent rounded-full py-4 md:py-5 pl-6 md:pl-8 pr-16 text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-[#f05a28]/40 text-slate-800 placeholder:text-slate-400" 
            />
            <button className="absolute right-2.5 top-1/2 -translate-y-1/2 p-3 bg-[#f05a28] text-white rounded-full hover:bg-[#e04f20] transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        


        {/* 3. Featured Categories */}
        <div>
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-800 mb-2 tracking-tight">Featured Categories</h2>
          <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
            New, custom designed, high-quality various study categories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <Link href="#" className="flex flex-col items-center p-6 bg-white rounded-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                <Building2 className="w-7 h-7 text-slate-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="font-bold text-[16px] text-slate-700 group-hover:text-slate-900">MBA Bangalore</span>
            </Link>
            
            {/* Category 2 */}
            <Link href="#" className="flex flex-col items-center p-6 bg-white rounded-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors">
                <MonitorPlay className="w-7 h-7 text-slate-500 group-hover:text-indigo-600 transition-colors" />
              </div>
              <span className="font-bold text-[16px] text-slate-700 group-hover:text-slate-900">Distance MBA</span>
            </Link>
            
            {/* Category 3 */}
            <Link href="#" className="flex flex-col items-center p-6 bg-white rounded-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-cyan-50 transition-colors">
                <Globe2 className="w-7 h-7 text-slate-500 group-hover:text-cyan-600 transition-colors" />
              </div>
              <span className="font-bold text-[16px] text-slate-700 group-hover:text-slate-900">Study Germany</span>
            </Link>

            {/* Category 4 */}
            <Link href="#" className="flex flex-col items-center p-6 bg-white rounded-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                <GraduationCap className="w-7 h-7 text-slate-500 group-hover:text-orange-600 transition-colors" />
              </div>
              <span className="font-bold text-[16px] text-slate-700 group-hover:text-slate-900">Medical Admissions</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
