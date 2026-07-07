"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const NAV = {
  es: {
    links: ["Inicio", "Emprendimientos", "Sobre Mí", "Trayectoria", "Stack", "Contacto"],
    hrefs: ["#hero", "#ventures", "#about", "#timeline", "#stack", "#contact"],
  },
  en: {
    links: ["Home", "Ventures", "About", "Journey", "Stack", "Contact"],
    hrefs: ["#hero", "#ventures", "#about", "#timeline", "#stack", "#contact"],
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { links, hrefs } = NAV[lang];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05070D]/75 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, 0, 0.05, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-base font-semibold tracking-tight bg-gradient-to-r from-[#60A5FA] to-[#1B45FF] bg-clip-text text-transparent"
        >
          avalito
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={hrefs[i]}
              className="text-sm text-[#8A93A6] hover:text-white transition-colors duration-200 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 hover:border-white/30 text-[#8A93A6] hover:text-white transition-all duration-200 tracking-wide"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block h-[1.5px] w-5 bg-white origin-center transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-200 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white origin-center transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#05070D]/95 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={hrefs[i]}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-white py-0.5"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
