"use client";

import React from "react";
import Link from "next/link";
import { motion } from  "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck } from  "lucide-react";

export default function FooterSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="w-full bg-[#0b132a] text-slate-300 font-sans select-none pt-12 sm:pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Column Grid */}
        <div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800"
        >
          {/* Column 1: Brand Logo & Description (4 cols) */}
          <div
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              {/* Text Logo */}
              <Link href="/" className="inline-block mb-4">
                <img src="/images/logobgremove.png" alt="Indian Study Channel Logo" className="h-10 sm:h-12 w-auto object-contain" />
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm mb-6">
                Indian Study Channel is a trusted educational consultancy
                offering transparent admission guidance through recognized
                university partnerships worldwide 
              </p>
            </div>

            {/* Payment Options Badges */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff5a00]" />
                <span>Flexible Installment Options</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="h-7 px-3 rounded bg-gradient-to-r from-[#ffd391] via-[#f7a8b8] to-[#9ad6ff] text-slate-900 font-black text-[11px] flex items-center justify-center tracking-wider">
                  tamara
                </div>
                <div className="h-7 px-3 rounded bg-[#3bffb1] text-slate-950 font-black text-[11px] flex items-center justify-center tracking-tight">
                  tabby
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                "Home",
                "About Us",
                "Our Programs",
                "Services",
                "Admissions",
                "Contact Us",
              ].map((linkName) => {
                const path =
                  linkName === "Home"
                    ? "/"
                    : linkName === "About Us"
                      ? "/about"
                      : "#";
                return (
                  <li key={linkName}>
                    <Link
                      href={path}
                      className="text-slate-400 hover:text-[#ff5a00] transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] opacity-0 group-hover:opacity-100 transition-opacity hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 ease-out" />
                      <span>{linkName}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Degree Programs (3 cols) */}
          <div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Programs Offered
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                "BBA – Business Administration",
                "BCom Bachelor of Commerce",
                "BA Bachelor of Arts",
                "BCA Computer Applications",
                "BSc Bachelor of Science",
                "BTech Civil CS Electrical",
                "Diploma Programs",
                "Master Degrees MBA MCA MCom",
              ].map((prog) => (
                <li key={prog}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#ff5a00] font-bold">•</span>
                    <span>{prog}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs font-normal">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#ff5a00] shrink-0 mt-0.5" />
                <span>
                  123 Education Boulevard Academic District City Country
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#ff5a00] shrink-0" />
                <a
                  href="https://me/971501234567"
                  target="_blank"
                  className="hover:text-[#ff5a00] transition-colors"
                >
                  +971 50 123 4567 / +971 54 987 6543
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-[#ff5a00] shrink-0" />
                <span>Sat to Thu 9:00 AM to 7:00 PM</span>
              </li>
            </ul>

            {/* Direct WhatsApp CTA Button */}
            <div className="mt-6">
              <a
                href="https://me/971501234567"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-xs transition-all group hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                <span>Chat with Advisor</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Row */}
        <div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
        >
          <p>
            © {new Date().getFullYear()} Indian Study Channel All rights reserved
            
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

