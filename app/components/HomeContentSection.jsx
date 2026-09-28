"use client";

import React from "react";
import Link from "next/link";

export default function HomeContentSection() {
  return (
    <div className="w-full font-sans bg-white">
      
      {/* PART 1: MAIN ADMISSIONS LIST */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col">
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8">
            <div className="md:w-[35%] shrink-0">
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                Online MBA Admissions 2027 – MBA Admission Notifications
              </h2>
            </div>
            <div className="md:w-[65%]">
              <p className="text-[15px] text-[#555] leading-relaxed mb-4">
                Are you looking for admission for online MBA? You have made a great decision to join MBA. Now it's time to look for MBA admission to one of the best universities for your MBA. Thousands of people complete MBA courses every year but only a small percentage of them make a great career. To make your life secure through a rewarding management career, you must complete MBA from a reputed business school or university in India.
              </p>
              <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                We can help you find the best online MBA courses in India.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.indiastudychannel.com/online-mba/" className="px-5 py-2.5 bg-[#f05a28] text-white text-sm font-semibold rounded hover:bg-[#e04f20] transition-colors">
                  Online MBA admissions
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8">
            <div className="md:w-[35%] shrink-0">
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                College Admissions in India – 2027–2028 Academic Year
              </h2>
            </div>
            <div className="md:w-[65%]">
              <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                IndiaStudyChannel.com is rated as the best educational website in India, providing admission guidance to universities, colleges and schools in the country. Our study abroad section provides comprehensive guidance to Indian students to find admission in the best universities abroad. Also, we provide reliable and comprehensive information on examinations, the education system, exam results, and entrance coaching.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.indiastudychannel.com/universities/" className="px-5 py-2.5 bg-[#f05a28] text-white text-sm font-semibold rounded hover:bg-[#e04f20] transition-colors">
                  Universities
                </Link>
                <Link href="https://www.indiastudychannel.com/colleges/" className="px-5 py-2.5 bg-[#fff4ed] text-[#1a1a1a] text-sm font-semibold rounded hover:bg-[#ffe6d6] transition-colors">
                  Colleges
                </Link>
                <Link href="https://www.indiastudychannel.com/schools/" className="px-5 py-2.5 bg-[#fff4ed] text-[#1a1a1a] text-sm font-semibold rounded hover:bg-[#ffe6d6] transition-colors">
                  Schools
                </Link>
                <Link href="https://www.indiastudychannel.com/study-abroad/countries/" className="px-5 py-2.5 bg-[#fff4ed] text-[#1a1a1a] text-sm font-semibold rounded hover:bg-[#ffe6d6] transition-colors">
                  Study abroad
                </Link>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8">
            <div className="md:w-[35%] shrink-0">
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                Study Abroad with or without Scholarship
              </h2>
            </div>
            <div className="md:w-[65%]">
              <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                If you are looking for an overseas education with a scholarship, take a look at our study abroad section. We provide expert guidance to help you get admission to the best universities in countries like Germany, Canada, Switzerland, Singapore, China and many others. Our goal is to help you find overseas education opportunities through the reliable overseas education consultants in India.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.indiastudychannel.com/topics/study-abroad-consultants" className="px-5 py-2.5 bg-[#f05a28] text-white text-sm font-semibold rounded hover:bg-[#e04f20] transition-colors">
                  Study Abroad Consultants
                </Link>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8">
            <div className="md:w-[35%] shrink-0">
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                School Admissions 2027 – 2028 Academic Year
              </h2>
            </div>
            <div className="md:w-[65%]">
              <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                Are you looking for school admissions to the admissions for the 2027 - 2028 academic year? Many private schools in India will start admissions for the next academic year very soon. If you are looking for admission for your child to one of the best schools in the country, check out our Indian school directory. Search for CBSE, ICSE, State or International schools and fill out the form to get admission guidance. We have partnered with admission consultants in various states and will guide you through the admission process in popular schools in India.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.indiastudychannel.com/schools/" className="px-5 py-2.5 bg-[#f05a28] text-white text-sm font-semibold rounded hover:bg-[#e04f20] transition-colors">
                  Indian school directory
                </Link>
                <Link href="https://www.indiastudychannel.com/schools/cbse-board-schools-in-india-country-2" className="px-5 py-2.5 bg-[#fff4ed] text-[#1a1a1a] text-sm font-semibold rounded hover:bg-[#ffe6d6] transition-colors">
                  CBSE
                </Link>
                <Link href="https://www.indiastudychannel.com/schools/icse-board-schools-in-india-country-2" className="px-5 py-2.5 bg-[#fff4ed] text-[#1a1a1a] text-sm font-semibold rounded hover:bg-[#ffe6d6] transition-colors">
                  ICSE
                </Link>
                <Link href="https://www.indiastudychannel.com/schools/ib-board-schools-in-india-country-2" className="px-5 py-2.5 bg-[#fff4ed] text-[#1a1a1a] text-sm font-semibold rounded hover:bg-[#ffe6d6] transition-colors">
                  IB
                </Link>
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8">
            <div className="md:w-[35%] shrink-0">
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                University Admissions in India
              </h2>
            </div>
            <div className="md:w-[65%]">
              <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                This section lists all universities in India. You can find various details including contact details, admission notifications, announcements and examination results. When you select university name, you can find the list of all colleges affiliated to the university. Get to quickly know the address, phone numbers and email address of the university and detailed information about the university. Find information about the colleges affiliated to the university, previous year exam papers for the university, admission news and links to other universities in the particular state.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.indiastudychannel.com/universities/" className="px-5 py-2.5 bg-[#f05a28] text-white text-sm font-semibold rounded hover:bg-[#e04f20] transition-colors">
                  Search universities
                </Link>
              </div>
            </div>
          </div>

          {/* Row 6 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8">
            <div className="md:w-[35%] shrink-0">
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                Search for courses & admissions
              </h2>
            </div>
            <div className="md:w-[65%]">
              <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                This section lists various courses available in the colleges and universities in India. You can view the course name and click on the course name to view various branches within the course. You can also search for colleges offering the specific courses. When you select a course, you can find the list of colleges offering the course.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.indiastudychannel.com/courses/" className="px-5 py-2.5 bg-[#f05a28] text-white text-sm font-semibold rounded hover:bg-[#e04f20] transition-colors">
                  Search for courses
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PART 2: LATEST NOTIFICATIONS (Beige Background) */}
      <section className="w-full bg-[#fffaf5] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <h2 className="text-4xl md:text-[44px] font-extrabold text-[#1a1a1a] tracking-tight mb-2">
              Latest Notifications
            </h2>
            <p className="text-[15px] text-[#666]">
              Recent announcements and articles from the IndiaStudyChannel community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Recent Announcements */}
            <div>
              <div className="flex justify-between items-end pb-2 mb-6">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1a1a]">Recent Announcements</h3>
                <Link href="https://www.indiastudychannel.com/forum/" className="text-sm font-semibold text-[#f05a28] hover:underline mb-0.5">
                  More...
                </Link>
              </div>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">01</span>
                  <Link href="https://www.indiastudychannel.com/forum/187645-Completing-13-years-with-ISC-today" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    Completing 13 years with ISC today
                  </Link>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">02</span>
                  <Link href="https://www.indiastudychannel.com/forum/187643-Republic-Day-Greetings-to-all" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    Republic Day Greetings to all!
                  </Link>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">03</span>
                  <Link href="https://www.indiastudychannel.com/forum/187625-Festival-greetings-to-all" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    Festival greetings to all!
                  </Link>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">04</span>
                  <Link href="https://www.indiastudychannel.com/forum/187581-Alert-Ongoing-Cyber-Crimes-Scams-and-Frauds-to-Avoid-Getting-Trapped" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    Alert - Ongoing Cyber Crimes, Scams and Frauds to Avoid Getting Trapped
                  </Link>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">05</span>
                  <Link href="https://www.indiastudychannel.com/forum/187496-Remembering-the-Mahatma-and-Shastriji-Oct-2nd" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    Remembering the Mahatma and Shastriji - Oct 2nd
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recent Articles */}
            <div>
              <div className="flex justify-between items-end pb-2 mb-6">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1a1a]">Recent Articles</h3>
                <Link href="https://www.indiastudychannel.com/resources/" className="text-sm font-semibold text-[#f05a28] hover:underline mb-0.5">
                  More...
                </Link>
              </div>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">01</span>
                  <Link href="https://www.indiastudychannel.com/resources/183359-how-digital-gold-can-fit-into-family-saving-habits" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    Small Amounts, Long-Term Goals: How Digital Gold Can Fit into Family Saving Habits
                  </Link>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">02</span>
                  <Link href="https://www.indiastudychannel.com/resources/183358-mbbs-in-russia-key-factors-universities" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    MBBS in Russia: Key Factors & Universities 2026
                  </Link>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[28px] font-bold text-[#f05a28] leading-none shrink-0 w-9">03</span>
                  <Link href="https://www.indiastudychannel.com/resources/183352-where-an-early-childhood-care-and-education-qualification-actually-takes-you" className="text-[15px] font-medium text-[#222] hover:text-[#f05a28] leading-snug pt-1">
                    Where an Early Childhood Care and Education Qualification Actually Takes You
                  </Link>
                </li>
              </ul>
            </div>

            {/* Discover More & Top Contributors */}
            <div className="flex flex-col gap-10">
              
              {/* Discover More */}
              <div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1a1a] pb-2 mb-6">Discover more</h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="#" className="flex items-center text-[15px] font-medium text-[#222] hover:text-[#f05a28] bg-white px-4 py-3 rounded-lg">
                      Try Prep Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center text-[15px] font-medium text-[#222] hover:text-[#f05a28] bg-white px-4 py-3 rounded-lg">
                      Enroll In Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center text-[15px] font-medium text-[#222] hover:text-[#f05a28] bg-white px-4 py-3 rounded-lg">
                      Explore Trade Classes
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Top Contributors */}
              <div>
                <div className="flex justify-between items-end pb-2 mb-6">
                  <h3 className="text-xl md:text-[22px] font-bold text-[#1a1a1a]">Top Contributors</h3>
                  <Link href="https://www.indiastudychannel.com/members/TopPerformers.aspx" className="text-sm font-semibold text-[#f05a28] hover:underline mb-0.5">
                    more...
                  </Link>
                </div>
                <div className="flex gap-4 mb-4">
                  <button className="px-4 py-1.5 text-[14px] font-bold text-white bg-[#f05a28] rounded">Today</button>
                  <button className="px-4 py-1.5 text-[14px] font-medium text-[#555] bg-white rounded hover:bg-slate-50">Last 7 Days</button>
                </div>
                <div className="text-[14px] text-[#666] bg-white p-4 rounded-lg">
                  User rankings appear here...
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PART 3: ABOUT US */}
      <section className="w-full bg-[#f05a28] py-16 text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed mb-6">
            IndiaStudyChannel is the most authentic college admission website in India, providing guidance and comprehensive information on the education system of India. Also, we provide a complete directory of all schools, colleges and universities in India with contact information, course details, admission guidance and much more. Join us today and learn more about Indian education system.
          </p>
          <p className="text-[16px] text-white/90 leading-relaxed">
            If you are looking for admissions to various courses, colleges, universities or schools in India, you can visit our <Link href="https://www.indiastudychannel.com/courses/" className="font-bold underline hover:text-white">courses</Link> section and <Link href="https://www.indiastudychannel.com/admissions/" className="font-bold underline hover:text-white">admission guidance</Link> section.
          </p>
        </div>
      </section>

      {/* PART 4: OUR LISTINGS */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl md:text-[36px] font-extrabold text-[#1a1a1a] tracking-tight">
              Our Listings
            </h2>
            <Link href="#" className="text-sm font-semibold text-[#f05a28] pb-1 hover:text-[#e04f20] hover:border-[#e04f20]">
              All admissions
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1: Popular Admissions */}
            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] pb-2 mb-4">Popular Admissions</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Online MBA", "Distance MBA", "MBA in Bangalore", "MBA Digital Marketing", 
                  "MBBS in Mangalore", "BDS in Mangalore", "B Pharm in Mangalore", 
                  "Nursing colleges in Mangalore", "BBA in Mangalore"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[15px] text-[#444] hover:text-[#f05a28]">
                    <span className="text-[#f05a28] font-bold mr-2 text-sm leading-none shrink-0">›</span>
                    <Link href="#" className="leading-snug">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Study Abroad */}
            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] pb-2 mb-4">Study Abroad</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Study in Germany", "Study in Italy", "Study in Ireland", "Study in France", 
                  "Study in Australia", "Study in New Zealand", "Study Abroad Consultants"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[15px] text-[#444] hover:text-[#f05a28]">
                    <span className="text-[#f05a28] font-bold mr-2 text-sm leading-none shrink-0">›</span>
                    <Link href="#" className="leading-snug">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Schools & Learn */}
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1a1a1a] pb-2 mb-4">Schools</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "CBSE Schools", "ICSE Schools", "IB Schools", "Best Schools in India"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-[15px] text-[#444] hover:text-[#f05a28]">
                      <span className="text-[#f05a28] font-bold mr-2 text-sm leading-none shrink-0">›</span>
                      <Link href="#" className="leading-snug">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] pb-2 mb-4">Learn</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Learn English", "Practice Tests"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-[15px] text-[#444] hover:text-[#f05a28]">
                      <span className="text-[#f05a28] font-bold mr-2 text-sm leading-none shrink-0">›</span>
                      <Link href="#" className="leading-snug">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Directory */}
            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] pb-2 mb-4">Directory</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Institutes", "Universities", "Colleges", "Courses", "Schools", 
                  "Jobs", "Reviews", "Ask Experts"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[15px] text-[#444] hover:text-[#f05a28]">
                    <span className="text-[#f05a28] font-bold mr-2 text-sm leading-none shrink-0">›</span>
                    <Link href="#" className="leading-snug">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
