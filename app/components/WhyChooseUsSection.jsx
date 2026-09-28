"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from  "framer-motion";
import { GraduationCap, Award, Users, CreditCard, ArrowRight } from "lucide-react";

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 25, x: 20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-10 sm:py-12 lg:py-14 overflow-hidden select-none"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with Asymmetrical Rounded Corners & Glass Badge */}
          <div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative w-full h-[350px] sm:h-[390px] lg:h-[420px] overflow-hidden rounded-[28px] lg:rounded-tl-[56px] lg:rounded-br-[56px] shadow-lg border border-slate-100">
              <div
                style={{ y: imageY }}
                className="relative w-full h-[110%] -top-[5%]"
              >
                <Image
                  src="/images/why-choose-us-student.png"
                  alt="Student learning confidently at university campus"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw 45vw"
                  className="object-cover object-center filter contrast-[1.02] brightness-95"
                />
              </div>

              {/* Dark Translucent Glassmorphism Badge Overlay */}
              <div
                initial={{ opacity: 0, y: 15, x: -15 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute bottom-5 left-5 z-20 bg-slate-900/70 backdrop-blur-md border border-white/20 px-3.5 py-3 rounded-xl max-w-[175px] shadow-lg text-white pointer-events-auto"
              >
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                  Education
                </h3>
                <p className="text-xs text-slate-200 font-medium mt-0.5">
                  for what&apos;s next 
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Title Subtitle 2x2 Feature Grid & Stats Footer */}
          <div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow Tag */}
            <motion.div
              variants={itemFadeUp}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-slate-500 uppercase">
                WHY CHOOSE US
              </span>
            </motion.div>

            {/* Main Heading */}
            <h2
              variants={itemFadeUp}
              className="text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight ] mb-2.5"
            >
              Built Around{" "}
              <span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                className="text-[#ff5a00] inline-block"
              >
                Your Tomorrow
              </span>
            </h2>

            {/* Subtitle */}
            <p
              variants={itemFadeUp}
              className="text-[#64748b] text-xs sm:text-sm leading-relaxed font-normal max-w-lg mb-6"
            >
              We make quality education accessible flexible and future-focused so you can achieve your goals on your terms 
            </p>

            {/* 2x2 Feature Grid */}
            <div
              variants={itemFadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6"
            >
              {/* Feature 1: Flexible Learning */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#fdeee4] text-[#ff5a00] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <GraduationCap className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-semibold  text-xs sm:text-sm leading-snug">
                    Flexible Learning
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748b] font-normal mt-0.5 leading-relaxed">
                    Study at your own pace anytime anywhere 
                  </p>
                </div>
              </div>

              {/* Feature 2: Recognised Programs */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#edf1f7] text-[#475569] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Award className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-semibold  text-xs sm:text-sm leading-snug">
                    Recognised Programs
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748b] font-normal mt-0.5 leading-relaxed">
                    Globally recognised degrees from trusted universities 
                  </p>
                </div>
              </div>

              {/* Feature 3: Expert Guidance */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#edf1f7] text-[#475569] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Users className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-semibold  text-xs sm:text-sm leading-snug">
                    Expert Guidance
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748b] font-normal mt-0.5 leading-relaxed">
                    Get support from admission to graduation 
                  </p>
                </div>
              </div>

              {/* Feature 4: Flexible Payments */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#fdeee4] text-[#ff5a00] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <CreditCard className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-semibold  text-xs sm:text-sm leading-snug">
                    Flexible Payments
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748b] font-normal mt-0.5 leading-relaxed">
                    Easy payment options with Tamara &amp; Tabby 
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Row: Stats + Learn More CTA */}
            <div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-slate-200/70"
            >
              {/* 3 Stats Items */}
              <div className="flex items-center gap-5 sm:gap-7">
                {/* Stat 1 */}
                <div>
                  <div className="text-lg sm:text-xl font-extrabold  leading-none">
                    8+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#8692a6] font-medium mt-1">
                    Programs
                  </div>
                </div>

                {/* Divider 1 */}
                <div className="w-[1px] h-6 bg-slate-200 shrink-0" />

                {/* Stat 2 */}
                <div>
                  <div className="text-lg sm:text-xl font-extrabold  leading-none">
                    1000+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#8692a6] font-medium mt-1">
                    Students
                  </div>
                </div>

                {/* Divider 2 */}
                <div className="w-[1px] h-6 bg-slate-200 shrink-0" />

                {/* Stat 3 */}
                <div>
                  <div className="text-lg sm:text-xl font-extrabold  leading-none">
                    95%
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#8692a6] font-medium mt-1">
                    Student Satisfaction
                  </div>
                </div>
              </div>

              {/* Right CTA Button */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff5a00] hover:bg-[#e55000] text-sm font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

