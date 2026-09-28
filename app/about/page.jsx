"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from  "framer-motion";
import { ArrowRight, Target, Compass, Award, ShieldCheck, HeartHandshake, Users, Sparkles, CheckCircle2, BookOpen, Building2, GraduationCap, ChevronDown, HelpCircle, PhoneCall, MapPin, Briefcase, Clock, Globe, FileText, UserCheck, Zap, Check, TrendingUp } from "lucide-react";
import HeaderNavbar from "@/app/components/HeaderNavbar";
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";
import FooterSection from "@/app/components/FooterSection";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Absolute Integrity",
      desc: "We uphold total honesty transparency and ethical professionalism in every student interaction university recommendation and document verification process",
    },
    {
      icon: HeartHandshake,
      title: "Student-First Commitment",
      desc: "We place our students' aspirations at the heart of our mission providing tailored 1-on-1 guidance that matches individual career trajectory and lifestyle",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      desc: "We collaborate exclusively with accredited globally recognized university partners to deliver legitimate undergraduate and postgraduate degree programs",
    },
    {
      icon: Sparkles,
      title: "Complete Transparency",
      desc: "Clear upfront guidance on tuition fees document requirements credit transfers and university accreditation with zero hidden charges or surprises",
    },
    {
      icon: Users,
      title: "Flexible Learning Paths",
      desc: "Versatile online blended and executive learning formats customized specifically to help working adults complete degrees while maintaining full-time jobs",
    },
    {
      icon: CheckCircle2,
      title: "Continuous Mentorship",
      desc: "Dedicated education advisors who stay with you throughout your entire academic journey—from course selection to final graduation",
    },
  ];

  const pillars = [
    {
      icon: Globe,
      title: "Global Recognition",
      subtitle: "Accredited Qualifications",
      desc: "All degree programs facilitated through our institute are issued by accredited universities recognized by international educational authorities and employers globally",
    },
    {
      icon: Clock,
      title: "Tailored Flexibility",
      subtitle: "Work-Life-Study Harmony",
      desc: "Specifically structured schedules online lecture access and self-paced modules enable busy professionals across the UAE to upgrade their qualifications smoothly",
    },
    {
      icon: FileText,
      title: "Simplified Admissions",
      subtitle: "Hassle-Free Processing",
      desc: "Our experienced team handles complex paperwork document evaluation and application submissions to ensure swift and successful university acceptance",
    },
    {
      icon: UserCheck,
      title: "Personalized Counseling",
      subtitle: "1-on-1 Academic Advisory",
      desc: "We assess your work experience previous education and future ambitions to recommend degree pathways that maximize career growth",
    },
  ];

  const studentJourney = [
    {
      step: "01",
      title: "Free Counseling & Profile Evaluation",
      desc: "Meet with an expert educational advisor in Abu Dhabi or online to review your academic history work experience and career objectives",
      icon: Users,
    },
    {
      step: "02",
      title: "Program Selection & Pathway Mapping",
      desc: "Choose from recognized Bachelor's Master's or Executive Diploma programs tailored to your schedule budget and specialization preference",
      icon: BookOpen,
    },
    {
      step: "03",
      title: "Application & Document Verification",
      desc: "Our dedicated team verifies your certificates prepares application dossiers and manages direct university submission for fast track approval",
      icon: FileText,
    },
    {
      step: "04",
      title: "Enrollment & Ongoing Mentorship",
      desc: "Receive your official admission letter set up flexible installment plans and enjoy continuous support throughout your study duration",
      icon: GraduationCap,
    },
  ];

  const audienceGroups = [
    {
      title: "Working Professionals",
      badge: "Flexible Schedules",
      desc: "Advance your corporate career with accredited Bachelor's or Master's degrees without leaving your job using weekend or online modules",
      icon: Briefcase,
    },
    {
      title: "High School Graduates",
      badge: "Degree Pathways",
      desc: "Begin your higher education journey with recognized undergraduate degrees in Business IT Engineering Healthcare and Management",
      icon: GraduationCap,
    },
    {
      title: "Diploma Holders & Transfer Students",
      badge: "Credit Transfer",
      desc: "Fast-track your degree completion by transferring existing diploma credits towards an accredited Bachelor's degree program",
      icon: TrendingUp,
    },
    {
      title: "Executives & Managers",
      badge: "Postgraduate & MBA",
      desc: "Elevate strategic leadership skills with specialized MBA and Executive Master's programs designed for senior management aspirants",
      icon: Zap,
    },
  ];

  const faqs = [
    {
      question: "What services does Indian Study Channel provide?",
      answer:
        "Indian Study Channel provides comprehensive higher education consultancy university admission guidance program selection document evaluation and end-to-end mentorship for undergraduate postgraduate and diploma qualifications",
    },
    {
      question:
        "Are the degree programs offered through Indian Study Channel officially recognized?",
      answer:
        "Yes 100% of the programs facilitated through Indian Study Channel are offered in partnership with accredited globally recognized university partners",
    },
    {
      question: "Can I complete my degree while working full-time in the UAE?",
      answer:
        "Absolutely. Our partner university programs feature flexible hybrid evening and online distance learning modules tailored specifically so working adults can balance full-time careers with higher education",
    },
    {
      question: "What easy tuition payment plans are available?",
      answer:
        "We support easy stress-free monthly payment options through trusted financial partners like Tamara & Tabby making higher education affordable with zero upfront financial burden",
    },
    {
      question: "How long does the admission process take?",
      answer:
        "Once required documents (educational transcripts ID photograph) are submitted and verified by our team official university admission processing typically takes between 3 to 7 working days",
    },
    {
      question: "How can I book a counseling session with an advisor?",
      answer:
        "You can connect directly with our admissions counselors via WhatsApp (+971 50 123 4567), request a callback through our site or visit our counseling office for a free consultation",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans select-none flex flex-col antialiased overflow-x-hidden">
      {/* Header Navbar */}
      <HeaderNavbar />

      {/* Modern Clean Hero Section */}
      <section className="relative w-full bg-[#0b132a] py-12 sm:py-18 lg:py-24 overflow-hidden text-white border-b border-slate-800">
        {/* Decorative background glow elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff5a00]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-4 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Eyebrow Tag */}
            <motion.div
              variants={itemFadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[#ff5a00] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 sm:mb-6 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Abu Dhabi &amp; Dubai • United Arab Emirates</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemFadeUp}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.15] tracking-tight text-white mb-4 sm:mb-6"
            >
              Empowering Higher Education <br />
              <span className="text-[#ff5a00] inline-block">
                In the UAE &amp; Globally
              </span>
            </motion.h1>

            {/* Subtitle / Intro text */}
            <motion.p
              variants={itemFadeUp}
              className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10 px-2"
            >
              Indian Study Channel is a premier educational consultancy dedicated
              to transforming lives. We bridge the gap between ambitious
              learners and accredited university qualifications through
              transparent admissions flexible study pathways and personalized
              career guidance.
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div
              variants={itemFadeUp}
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl"
            >
              <div className="text-center p-2">
                <div className="text-xl sm:text-3xl font-black text-white">
                  8+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                  Specialized Streams
                </div>
              </div>
              <div className="text-center p-2 sm:border-l sm:border-slate-800">
                <div className="text-xl sm:text-3xl font-black text-[#ff5a00]">
                  1000+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                  Graduates &amp; Students
                </div>
              </div>
              <div className="text-center p-2 border-t sm:border-t-0 sm:border-l border-slate-800">
                <div className="text-xl sm:text-3xl font-black text-white">
                  98%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                  Admission Success
                </div>
              </div>
              <div className="text-center p-2 border-t sm:border-t-0 sm:border-l border-slate-800">
                <div className="text-xl sm:text-3xl font-black text-[#ff5a00]">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                  Accredited Partners
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & Institutional Profile Section */}
      <section className="py-12 sm:py-18 lg:py-20 bg-white relative z-10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-[#0b132a] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[440px]">
                {/* Subtle card background ornament */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#ff5a00]/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-800 text-[#ff5a00] text-[11px] sm:text-xs font-bold mb-4 sm:mb-6 border border-slate-700">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>Established Educational Hub</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-3 sm:mb-4">
                    Building Brighter Educational Futures Since Day One
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                    Indian Study Channel serves as a trusted guide for students,
                    expatriates and working adults seeking legitimate,
                    flexible and career-boosting university degrees.
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 pt-1">
                    <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff5a00]/20 text-[#ff5a00] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs">
                        Direct partnerships with accredited universities
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff5a00]/20 text-[#ff5a00] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs">
                        Customized study schedules for full-time employees
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff5a00]/20 text-[#ff5a00] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs">
                        Affordable tuition payment plans (Tamara &amp; Tabby)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ff5a00] text-white flex items-center justify-center font-black text-xs shadow-md shrink-0">
                      UAE
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Abu Dhabi Headquarters
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Serving all 7 Emirates
                      </div>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#ff5a00] shrink-0" />
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-5 h-[2px] bg-[#ff5a00] inline-block rounded-full" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b132a] leading-tight mb-4">
                Your Trusted Partner for Higher Education &amp; Career Growth
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5">
                <strong>Indian Study Channel</strong> was established
                with a singular mission: to eliminate barriers to quality higher
                education across the United Arab Emirates. We understand that
                prospective students and working professionals often face
                complex admission requirements rigid schedules and
                overwhelming financial commitments.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our institution provides clarity structure and personalized
                support. From evaluating prior educational credentials to
                selecting specialized Bachelor&apos;s Master&apos;s or Diploma
                courses our counselors walk hand-in-hand with every applicant
                to ensure a seamless admission journey.
              </p>

              {/* Highlight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-[#ff5a00] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0b132a]">
                      Transparent Process
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Clear advice with zero hidden conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-[#ff5a00] shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0b132a]">
                      Recognized Degrees
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Globally accredited university partners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-[#ff5a00] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0b132a]">
                      Flexible Learning
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Evening &amp; online study models.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-12 sm:py-18 lg:py-20 bg-[#f8fafc] border-y border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b132a] mt-1.5">
              4 Pillars of Educational Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              Every counseling session and program selection at Indian Study Channel is
              guided by four fundamental pillars designed for student success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-50 text-[#ff5a00] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#ff5a00] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-[#ff5a00] uppercase">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0b132a] mt-1 mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission Interactive Cards */}
      <section className="py-12 sm:py-18 lg:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
              FOUNDATIONAL PURPOSE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b132a] mt-1.5">
              Driven by Purpose &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0b132a] text-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800"
            >
              <div className="relative z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#ff5a00] text-white flex items-center justify-center mb-5 sm:mb-6 shadow-md">
                  <Compass className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
                  OUR VISION
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-3.5">
                  To Be UAE&apos;s Leading Educational Consultancy
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  To stand as the premier higher education consultancy across
                  Abu Dhabi and the wider UAE celebrated for connecting
                  learners with prestigious accredited university programs. We
                  aspire to inspire lifelong learning empower working
                  professionals and cultivate an accessible educational
                  ecosystem where every ambitious individual can reach their
                  academic peak.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800 relative z-10 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>INSPIRING ACCESSIBLE LEARNING</span>
                <Sparkles className="w-4 h-4 text-[#ff5a00]" />
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white text-slate-900 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg border border-slate-200/90 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5 sm:mb-6 shadow-md">
                  <Target className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
                  OUR MISSION
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b132a] mt-1 mb-3.5">
                  Student-Centered Guidance &amp; Integrity
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  To deliver reliable transparent and student-focused
                  educational guidance by leveraging accredited university
                  partnerships. We commit to supporting each learner with
                  personalized academic advice streamlined admission
                  processing and continuous mentorship—empowering them to
                  secure recognized qualifications and build meaningful,
                  high-impact careers.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>TRANSPARENT &amp; ETHICAL COUNSELING</span>
                <Award className="w-4 h-4 text-[#0b132a]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values 6-Grid Section */}
      <section className="py-12 sm:py-18 lg:py-20 bg-[#f8fafc] border-y border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
              WHAT DRIVES US
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b132a] mt-1.5">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              These six core values shape our culture and define our standard of
              excellence for student counseling in Abu Dhabi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-orange-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-50 text-[#ff5a00] flex items-center justify-center mb-4 group-hover:bg-[#ff5a00] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                  </div>
                  <h4 className="font-bold text-base text-[#0b132a] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Admission & Student Journey Section */}
      <section className="py-12 sm:py-18 lg:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b132a] mt-1.5">
              Your 4-Step Student Admission Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              We streamline the entire higher education process into four clear,
              stress-free stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {studentJourney.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative bg-[#f8fafc] p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <span className="text-2xl font-black text-[#ff5a00]">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white text-slate-700 flex items-center justify-center shadow-2xs group-hover:bg-[#0b132a] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#0b132a] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200/60 text-[11px] font-semibold text-[#ff5a00] flex items-center gap-1">
                    <span>Step {step.step} Milestone</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audiences / Who We Serve Section */}
      <section className="py-12 sm:py-18 lg:py-20 bg-[#0b132a] text-white relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase">
              LEARNING PATHWAYS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1.5">
              Who We Guide &amp; Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
              Tailored degree programs designed to fulfill diverse academic
              backgrounds and scheduling requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {audienceGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#ff5a00] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-[#ff5a00] text-[10px] font-bold mb-3 border border-slate-700">
                      {group.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {group.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {group.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section Reusable Component */}
      <WhyChooseUsSection />

      {/* Interactive FAQ Section */}
      <section className="py-12 sm:py-18 lg:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-[#ff5a00] text-[11px] sm:text-xs font-bold mb-3">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b132a]">
              Have Questions? We Have Answers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              Find instant clarity on Indian Study Channel admissions,
              flexible learning options and tuition payment plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden bg-[#f8fafc] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    type="button"
                    className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-[#0b132a] cursor-pointer hover:bg-slate-100/70 transition-colors"
                  >
                    <span className="pr-2">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-slate-400"
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Counseling Banner */}
      <section className="py-12 sm:py-18 lg:py-20 bg-[#0b132a] text-white relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#ff5a00] uppercase mb-2 inline-block">
            START YOUR ADMISSION TODAY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3.5 leading-tight">
            Ready to Take the Next Step in Your Education?
          </h2>
          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-7 font-normal px-2">
            Speak directly with an experienced education advisor today for
            personalized course recommendations fee details and application
            guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="https://wa.me/971502768411"
              target="_blank"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#ff5a00] hover:bg-[#e04f00] text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Talk to Advisor (+971 5027 68411)</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-xs transition-all duration-200"
            >
              Explore Home Page
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}

