"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


export default function OurProgramsSection() {
  const allFilters = ["Bachelor Degrees", "Master Degrees", "Diplomas", "Certifications"];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const programs = [
    {
      id: 1,
      category: "Bachelor Degrees",
      date: "2024-05-20",
      title: "Bachelor of Business Administration (BBA)",
      description: "A comprehensive undergraduate program focusing on business principles, management strategies, and organizational leadership.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      category: "Master Degrees",
      date: "2024-05-22",
      title: "Master of Business Administration (MBA)",
      description: "An advanced degree designed to develop the skills required for careers in business and management at an executive level.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      category: "Diplomas",
      date: "2024-06-10",
      title: "Diploma in Information Technology",
      description: "A practical program teaching essential IT skills, software development, and network administration for the modern workforce.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      category: "Bachelor Degrees",
      date: "2024-06-15",
      title: "Bachelor of Computer Applications (BCA)",
      description: "An undergraduate program in computer applications and software development.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredPrograms =
    selectedFilters.length === 0
      ? programs
      : programs.filter((p) => selectedFilters.includes(p.category));

  return (
    <section className="relative w-full bg-[#f8f9fa] py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Sidebar */}
          <div className="lg:w-[240px] shrink-0 lg:sticky lg:top-32 self-start">
            {/* Filters */}
            <div className="mb-10">
              <h3 className="text-[17px] font-bold text-slate-900 mb-6 tracking-tight">Quick Filters :</h3>
              <div className="space-y-4">
                {allFilters.map((filter) => (
                  <label
                    key={filter}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-slate-300 bg-white group-hover:border-[#53777a] transition-colors overflow-hidden">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={selectedFilters.includes(filter)}
                        onChange={() => handleFilterChange(filter)}
                      />
                      <div className="absolute inset-0 bg-[#53777a] opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className={`text-sm font-semibold transition-colors ${selectedFilters.includes(filter) ? 'text-slate-900' : 'text-slate-600'}`}>
                      {filter}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-6 tracking-tight">Follow us on :</h3>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="10" ry="10"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Programs List */}
          <div className="flex-1 flex flex-col space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((program, index) => {
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      key={program.id}
                      className="flex flex-col sm:flex-row gap-8 sm:gap-12 p-8 sm:p-10 rounded-[24px] bg-white border border-slate-100 transition-all hover:border-slate-300"
                    >
                      <div className="flex flex-col flex-1 justify-center">
                        {/* Meta row */}
                        <div className="flex items-center gap-6 mb-4">
                          <span className="text-[11px] sm:text-xs font-bold text-slate-700 tracking-wider uppercase">
                            {program.category}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500">
                            {program.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
                          {program.title}
                        </h4>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                          {program.description}
                        </p>

                        {/* Action Link */}
                        <div className="flex justify-end mt-auto">
                          <Link
                            href="#"
                            className="text-[13px] font-bold text-[#334c62] hover:text-[#ff5a00] transition-colors"
                          >
                            Read full details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 flex flex-col items-center justify-center text-center"
                >
                  <p className="text-slate-500 font-medium">No programs found for the selected filters.</p>
                  <button 
                    onClick={() => setSelectedFilters([])}
                    className="mt-4 px-5 py-2.5 bg-slate-100 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
