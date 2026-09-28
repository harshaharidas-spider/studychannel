"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-[80px] gap-4">
          
          {/* Left: Logo & Nav Links */}
          <div className="flex items-center gap-8 xl:gap-12 h-full shrink-0">
            <Link href="/" className="flex items-center group shrink-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <img src="/images/logobgremove.png" alt="India Study Channel Logo" className="h-12 sm:h-16 lg:h-[72px] w-auto object-contain" />
              </motion.div>
            </Link>

            {/* Center Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
              <Link href="/" className={`text-[15px] font-semibold transition-colors ${pathname === "/" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`}>Home</Link>
              
              {/* Mega Menu Dropdown */}
              <div className="group h-full flex items-center">
                <Link href="#" className="text-[15px] font-semibold text-slate-500 hover:text-slate-900 transition-colors py-2 group-hover:text-slate-900">Education</Link>
                
                {/* Dropdown Content */}
                <div className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Column 1 */}
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-5">Institutes & Courses</h3>
                        <ul className="space-y-4">
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Universities</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Colleges & Institutes</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Schools & Higher Secondary</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Degree & Professional Courses</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Practice Tests & Mock Exams</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Learn English & Soft Skills</Link></li>
                        </ul>
                        <div className="mt-6">
                          <Link href="#" className="text-sm font-bold text-slate-900 hover:text-blue-600 inline-flex items-center">More Institutes <span className="ml-1">→</span></Link>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-5">Admissions & Global</h3>
                        <ul className="space-y-4">
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">College Admissions 2027 - 2028</Link></li>
                          <li>
                            <Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                              Online MBA Admissions 
                              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded">Trending</span>
                            </Link>
                          </li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Study Abroad Programs</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Study Abroad Consultants</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Entrance Exam Notifications</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Scholarships & Fee Concessions</Link></li>
                        </ul>
                        <div className="mt-6">
                          <Link href="#" className="text-sm font-bold text-slate-900 hover:text-blue-600 inline-flex items-center">More Admissions <span className="ml-1">→</span></Link>
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-5">Knowledge & Guidance</h3>
                        <ul className="space-y-4">
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Educational Articles</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Ask Experts (Q&A Guidance)</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">College & Course Reviews</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Top Contributors & Rankings</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Career Guides & Salary Trends</Link></li>
                          <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Discussion Forum Topics</Link></li>
                        </ul>
                        <div className="mt-6">
                          <Link href="#" className="text-sm font-bold text-slate-900 hover:text-blue-600 inline-flex items-center">Explore Knowledge Centre <span className="ml-1">→</span></Link>
                        </div>
                      </div>

                      {/* Column 4 - Highlight Card */}
                      <div className="pl-4">
                        <Link href="#" className="block rounded-2xl overflow-hidden bg-slate-50 relative group/card cursor-pointer h-full transition-transform hover:-translate-y-1">
                          <div className="aspect-[16/9] w-full overflow-hidden bg-slate-200">
                             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" alt="Students studying" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
                          </div>
                          <div className="p-5">
                            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-2 block">2027 ADMISSIONS ALERT</span>
                            <h4 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug group-hover/card:text-blue-600 transition-colors">Online MBA Admissions 2027 - 2028</h4>
                            <p className="text-[13px] text-slate-500 leading-relaxed">Compare top Indian universities offering online MBA programs, check eligibility criteria, entrance cutoffs, and application deadlines.</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/knowledge-centre" className={`text-[15px] font-semibold transition-colors ${pathname === "/knowledge-centre" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`}>Knowledge Centre</Link>
              <Link href="/forum" className={`text-[15px] font-semibold transition-colors ${pathname === "/forum" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`}>Forum</Link>
              <Link href="/jobs" className={`text-[15px] font-semibold transition-colors ${pathname === "/jobs" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`}>Jobs</Link>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Search Bar */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text" 
                  placeholder="Search courses, exams..." 
                  className="pl-9 pr-4 py-2.5 w-[220px] xl:w-[260px] bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-6 shrink-0">
              <Link href="/login" className="text-[14px] font-bold text-slate-700 hover:text-slate-900 transition-colors">
                Login
              </Link>

              <Link
                href="/post-content"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black hover:bg-slate-800 text-[14px] font-bold text-white shadow-sm hover:shadow transition-all duration-300"
              >
                Post Content
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center shrink-0 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="p-2.5 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5.5 h-5.5" />
                ) : (
                  <Menu className="w-5.5 h-5.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden border-t border-slate-200/80 bg-white px-5 py-5 space-y-4 overflow-hidden shadow-xl"
          >
            {/* Mobile Search */}
            <div className="relative mb-6">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Search courses, exams..." 
                className="pl-9 pr-4 py-3 w-full bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/"
                  ? "bg-slate-50 text-slate-900"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>
            
            <div className="px-3.5 py-2 space-y-2 border-t border-slate-100 pt-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                Education
              </span>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1.5">Institutes & Courses</Link>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1.5">Admissions & Global</Link>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1.5">Knowledge & Guidance</Link>
            </div>

            <Link
              href="/knowledge-centre"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/knowledge-centre"
                  ? "bg-slate-50 text-slate-900"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Knowledge Centre
            </Link>

            <Link
              href="/forum"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/forum"
                  ? "bg-slate-50 text-slate-900"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Forum
            </Link>
            
            <Link
              href="/jobs"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/jobs"
                  ? "bg-slate-50 text-slate-900"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Jobs
            </Link>

            {/* Quick Actions for Mobile */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200"
              >
                <span>Login</span>
              </Link>
              <Link
                href="/post-content"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black text-white font-bold text-sm hover:-translate-y-0.5 shadow-md transition-all duration-300 ease-out"
              >
                <span>Post Content</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
