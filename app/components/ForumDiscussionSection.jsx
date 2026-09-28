"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ForumDiscussionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Eligibility Criteria for Admissions",
      answer:
        "The admission process is simple and collaborative. It begins with a brief call to understand your educational goals and career aspirations.\n\nWe guide you every step through initial concepts and core outlines, depending on the scale, and are always available for a chat.",
    },
    {
      question: "Are there any scholarship opportunities?",
      answer:
        "Yes, we offer various merit-based and need-based scholarships. Our advisors will help you identify the best opportunities during your initial consultation.",
    },
    {
      question: "Do you provide visa assistance for international students?",
      answer:
        "Absolutely. We have a dedicated team that handles student visa applications, document verification, and interview preparation to ensure a smooth transition.",
    },
    {
      question: "Can I transfer credits from another university?",
      answer:
        "Credit transfers are evaluated on a case-by-case basis depending on the accreditation of your previous institution and the alignment of course syllabi.",
    },
    {
      question: "What is the average class size?",
      answer:
        "We maintain small class sizes, typically between 15 to 25 students, to ensure personalized attention and an interactive learning environment.",
    },
    {
      question: "Are your online degrees fully accredited?",
      answer:
        "Yes, all our online and hybrid programs carry the exact same accreditation and recognition as our traditional on-campus degrees globally.",
    },
    {
      question: "When is the application deadline?",
      answer:
        "We offer rolling admissions for most programs, with major intakes in Fall (September) and Spring (January). We recommend applying at least 3 months prior.",
    },
    {
      question: "Do you offer career placement support?",
      answer:
        "Our career services team provides resume building, interview prep, and direct connections to our network of corporate partners across the UAE.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight max-w-lg">
            Got any questions? We have got answers.
          </h2>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed max-w-[280px] md:mt-2">
            Plan your education securely, with confidence. We guide, qualify, and support students for their future careers.
          </p>
        </div>

        {/* FAQs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {faqs.slice(0, 4).map((faq, idx) => {
              const actualIndex = idx;
              const isOpen = openIndex === actualIndex;

              return (
                <div 
                  key={idx}
                  onClick={() => toggleFaq(actualIndex)}
                  className="bg-[#faf9f5] rounded-[16px] p-5 sm:p-6 cursor-pointer transition-colors hover:bg-[#f5f4ef]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-[15px] sm:text-base font-bold text-slate-800">
                      {faq.question}
                    </h4>
                    <button className="shrink-0 text-slate-400">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-slate-200/60">
                          {faq.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="text-[13px] sm:text-sm text-slate-600 leading-relaxed font-medium mb-3 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {faqs.slice(4, 8).map((faq, idx) => {
              const actualIndex = idx + 4;
              const isOpen = openIndex === actualIndex;

              return (
                <div 
                  key={idx}
                  onClick={() => toggleFaq(actualIndex)}
                  className="bg-[#faf9f5] rounded-[16px] p-5 sm:p-6 cursor-pointer transition-colors hover:bg-[#f5f4ef]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-[15px] sm:text-base font-bold text-slate-800">
                      {faq.question}
                    </h4>
                    <button className="shrink-0 text-slate-400">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-slate-200/60">
                          {faq.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="text-[13px] sm:text-sm text-slate-600 leading-relaxed font-medium mb-3 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
