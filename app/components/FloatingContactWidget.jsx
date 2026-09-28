"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, ArrowRight } from "lucide-react";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show widget after scrolling down slightly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4"
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, originY: 1, originX: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-64 mb-2 overflow-hidden"
              >
                <div className="mb-3 pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-slate-800">Hello there! 👋</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">Need help finding the right program? We're here to assist you.</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/971501234567"
                    target="_blank"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm">
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-xs font-bold">WhatsApp Us</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                  
                  <a
                    href="tel:+971501234567"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#ff5a00] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ff5a00] text-white flex items-center justify-center hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 ease-out">
                        <Phone className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-xs font-bold">Request Callback</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Button */}
          <div className="relative">
            {/* Pulse rings behind the button */}
            {!isOpen && (
              <>
                <motion.div
                  animate={{ scale: [1, 1.4, 1.8], opacity: [0.5, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-[#ff5a00] z-0 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 ease-out"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1.6], opacity: [0.6, 0.3, 0] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-[#ff5a00] z-0 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 ease-out"
                />
              </>
            )}

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-14 h-14 bg-[#ff5a00] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#e04f00] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 ease-out"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 stroke-[2.5]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle className="w-6 h-6 stroke-[2.5] fill-white/20" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
