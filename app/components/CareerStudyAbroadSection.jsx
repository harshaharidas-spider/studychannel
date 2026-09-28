"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Globe, BookOpen, Compass } from "lucide-react";

export default function CareerStudyAbroadSection() {
  const categories = [
    {
      id: "01",
      title: "University Admissions in India",
      icon: <GraduationCap className="w-6 h-6" />,
      description:
        "Get comprehensive details about universities in India. Find contact information, admission notifications, announcements, and examination results. Discover the right path for your higher education journey.",
    },
    {
      id: "02",
      title: "Study Abroad & Scholarships",
      icon: <Globe className="w-6 h-6" />,
      description:
        "Looking for overseas education with or without a scholarship? We provide expert guidance to help you secure admission in top universities globally. Connect with reliable overseas education consultants.",
    },
    {
      id: "03",
      title: "School Admissions",
      icon: <BookOpen className="w-6 h-6" />,
      description:
        "Find the best schools in India for the upcoming academic year. From CBSE and ICSE to State and International schools, our directory and consultants guide you through the admission process seamlessly.",
    },
    {
      id: "04",
      title: "Career & Knowledge Centre",
      icon: <Compass className="w-6 h-6" />,
      description:
        "Explore various courses available across colleges and universities. We provide career guidance and insights on educational pathways that align with industry demands and your long-term goals.",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-28 overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.18em] text-slate-500 uppercase mb-4 block">
            Your Education Portal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight mb-6">
            Explore Study Options & <br className="hidden sm:block" /> Career Guidance
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600 font-medium leading-relaxed">
            We are dedicated to providing the most authentic college admission guidance and comprehensive information on education systems, both in India and abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white p-8 sm:p-10 rounded-[24px] border border-slate-100 hover:border-slate-300 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-[#fdeee4] text-[#ff5a00] flex items-center justify-center shrink-0">
                  {category.icon}
                </div>
                <span className="text-2xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors">
                  {category.id}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {category.title}
              </h3>
              <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-8">
                {category.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5a00] hover:text-[#e55000] transition-colors group/link"
              >
                <span>Read more</span>
                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
