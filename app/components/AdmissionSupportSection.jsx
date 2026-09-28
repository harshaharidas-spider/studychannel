"use client";

import React from "react";
import Link from "next/link";

export default function AdmissionSupportSection() {

  const services = [
    {
      id: "01",
      title: "Academic Counselling",
      subtitle: "One-on-One • Career Pathway • University Insights",
      description:
        "Choosing the right academic pathway is the foundation of a successful future. Our education consultants provide one-on-one counselling to understand your interests, qualifications, and career aspirations. We guide you through stream recommendations and university accreditation insights.",
    },
    {
      id: "02",
      title: "Admission Guidance",
      subtitle: "Step-by-Step • Document Verification • Visa Support",
      description:
        "We simplify the admission process by offering step-by-step support for university applications, document verification, and eligibility checks through our recognized university partners. This process is a crucial first step, setting the stage for effective enrollment while minimizing friction.",
    },
    {
      id: "03",
      title: "Course Selection",
      subtitle: "Personalized • UG & PG Streams • Budget Planning",
      description:
        "Selecting the right program is essential for academic success. We provide personalized recommendations based on your educational background, budget, and future career objectives. Compare undergraduate and postgraduate streams to ensure your choices are efficiently repurposed.",
    },
    {
      id: "04",
      title: "Career Guidance",
      subtitle: "Industry Demands • Long-Term Goals • UAE Focus",
      description:
        "Our career guidance services help students identify educational pathways that align with long-term professional goals and evolving UAE industry demands. We cater to your unique needs with customizable insights, helping to reduce the need for raw trial and error in your career journey.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-28 overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Sticky Header) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight mb-12">
                Complete Educational <br className="hidden lg:block" /> Solutions
              </h2>

              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  OR CONTACT US WITH
                </p>
                <a 
                  href="mailto:hello@indianstudychannel.com" 
                  className="text-lg lg:text-xl font-medium text-[#ff5a00] hover:text-[#e55000] transition-colors"
                >
                  hello@indianstudychannel.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Minimal List) */}
          <div className="lg:col-span-8 border-t border-slate-100">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 lg:py-10 group cursor-pointer"
              >
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
                    OUR SERVICES
                  </p>
                  <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-light text-[#0f2c42] mb-3 group-hover:text-[#ff5a00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[15px] font-normal text-slate-500">
                    {service.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 sm:pt-4">
                  {/* Chevron Button */}
                  <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-slate-200 group-hover:bg-slate-50 transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>

                  {/* Action Button (No Background) */}
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full border border-slate-200 hover:border-slate-300 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300 ease-out"
                  >
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
