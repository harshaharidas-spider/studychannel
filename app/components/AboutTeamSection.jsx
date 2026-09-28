"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, animate } from "framer-motion";

function AnimatedCounter({ from, to, duration = 2.5, suffix = "" }) {
  const nodeRef = useRef(null);
  // once: false means it will animate every time it comes into view!
  const inView = useInView(nodeRef, { once: false, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    } else {
      // Reset when out of view
      if (nodeRef.current) {
        nodeRef.current.textContent = from + suffix;
      }
    }
  }, [from, to, duration, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function AboutTeamSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Content */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-900 leading-[1.15] tracking-tight mb-4 max-w-3xl">
            We help your businesses with creative idea
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl">
            We specialize in transforming innovative ideas into impactful digital solutions that drive growth.
          </p>
        </div>

        {/* Large Team Image */}
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] rounded-[24px] overflow-hidden mb-12 lg:mb-16">
          <Image
            src="/images/aboutbg.jpg"
            alt="Our Team"
            fill
            className="object-cover object-[center_35%]"
          />
        </div>

        {/* Bottom Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end">
          
          {/* Text Description */}
          <div className="flex-1">
            <p className="text-[15px] sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
              At Nihou Studio, we're passionate about turning bold ideas into stunning designs and powerful digital solutions. With a focus on creativity and innovation, our team crafts visually captivating experiences that elevate your brand and drive measurable growth. From concept to execution, we're here to bring your vision to life with precision and flair.
            </p>
          </div>

        </div>
        
        {/* Stats and Button */}
        <div className="mt-12 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
                <AnimatedCounter from={0} to={15} />
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Members</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-200 hidden sm:block"></div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
                <AnimatedCounter from={0} to={100} suffix="k+" />
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Clients</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-200 hidden sm:block"></div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
                <AnimatedCounter from={0} to={5} />
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-200 hidden sm:block"></div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
                <AnimatedCounter from={0} to={400} suffix="+" />
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Projects</p>
            </div>
          </div>

          <Link
            href="#"
            className="inline-flex shrink-0 items-center justify-center px-6 py-3 rounded-full bg-[#ff5a00] hover:bg-[#e55000] text-sm font-bold text-white hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 ease-out"
          >
            See Details
          </Link>
        </div>

      </div>
    </section>
  );
}
