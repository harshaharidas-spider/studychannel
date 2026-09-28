"use client";

import React from "react";
import { motion } from  "framer-motion";
import { MessageCircle } from  "lucide-react";

export default function FloatingWhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/971501234567?text=Hello%21%20I%20would%20like%20to%20get%20more%20information%20about%20Indian%20Study%20Channel%20programs";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center group select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer"
      >
        {/* Ripple/Pulse Effect ring behind icon */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-800">
          Chat with Us on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}

