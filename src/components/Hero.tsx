"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { GitHubIcon, DiscordIcon, InstagramIcon, JuvakLogo, FPTLogo, SXSLogo } from "@/components/icons";

const DISCORD_USER = "avalouw.";

const CONTENT = {
  es: {
    greeting: "Hola, soy",
    role: "Developer & Co-Founder",
    tagline: "Construyo software y negocios. De Perú a Barcelona — y le encuentro solución a todo.",
    cta1: "Ver emprendimientos",
    cta2: "Sobre mí",
    scroll: "Explorar",
    copied: "¡Copiado!",
    discordHint: "Copiar Discord",
  },
  en: {
    greeting: "Hi, I'm",
    role: "Developer & Co-Founder",
    tagline: "I build software and businesses. From Peru to Barcelona — and I find a solution to everything.",
    cta1: "View ventures",
    cta2: "About me",
    scroll: "Explore",
    copied: "Copied!",
    discordHint: "Copy Discord",
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.6, 0, 0.05, 1] as [number, number, number, number] },
});

export default function Hero() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USER);
    } catch {
      // clipboard unavailable — the tooltip still shows the username
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const socialBtn =
    "p-3 rounded-full border border-white/10 text-[#8A93A6] hover:text-white hover:border-[#3B82F6]/60 hover:bg-[#3B82F6]/10 transition-all duration-200 hover:scale-110 active:scale-95";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05070D]"
    >
      {/* Blue gradient blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-6%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(27,69,255,0.22), transparent 68%)",
        }}
        animate={{ x: [0, 25, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[-6%] w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(59,130,246,0.16), transparent 68%)",
        }}
        animate={{ x: [0, -18, 0], y: [0, 22, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-[38%] left-[30%] w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(96,165,250,0.10), transparent 68%)",
        }}
        animate={{ x: [0, 14, 0], y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(96,165,250,0.14) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20 pb-16">
        <motion.p
          className="text-xs font-semibold text-[#60A5FA] tracking-[0.2em] uppercase mb-5"
          {...fadeUp(0.2)}
        >
          {t.greeting}
        </motion.p>

        <motion.h1
          className="text-[clamp(3rem,10vw,6.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.02] mb-4"
          {...fadeUp(0.35)}
        >
          Alvaro Ferreira
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-light bg-gradient-to-r from-[#60A5FA] to-[#1B45FF] bg-clip-text text-transparent mb-4 tracking-wide"
          {...fadeUp(0.5)}
        >
          avalito
        </motion.p>

        <motion.p className="text-lg md:text-xl text-[#A7B0C2] font-light mb-2" {...fadeUp(0.6)}>
          {t.role}
        </motion.p>

        <motion.p
          className="text-sm text-[#707A8F] mb-8 max-w-md mx-auto leading-relaxed"
          {...fadeUp(0.7)}
        >
          {t.tagline}
        </motion.p>

        {/* Venture pills */}
        <motion.div className="flex flex-wrap gap-2.5 justify-center mb-10" {...fadeUp(0.78)}>
          {[
            { label: "S X S", logo: <SXSLogo size={18} /> },
            { label: "JUVAK", logo: <JuvakLogo size={18} onDark /> },
            { label: "Fútbol Para Todos", logo: <FPTLogo size={18} /> },
          ].map((v) => (
            <a
              key={v.label}
              href="#ventures"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-[#C6CDDB] hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 hover:text-white transition-all duration-200"
            >
              {v.logo}
              {v.label}
            </a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10"
          {...fadeUp(0.88)}
        >
          <a
            href="#ventures"
            className="px-7 py-3 bg-gradient-to-r from-[#2563EB] to-[#1B45FF] text-white text-sm font-medium rounded-full hover:brightness-110 active:scale-95 transition-all duration-300 shadow-lg shadow-[#1B45FF]/25"
          >
            {t.cta1}
          </a>
          <a
            href="#about"
            className="px-7 py-3 border border-white/15 text-white text-sm font-medium rounded-full hover:border-white/30 hover:bg-white/[0.05] active:scale-95 transition-all duration-300"
          >
            {t.cta2}
          </a>
        </motion.div>

        {/* Social */}
        <motion.div className="flex gap-3 justify-center items-center" {...fadeUp(1)}>
          <a
            href="https://github.com/victoralvaroferreirajuarez-star"
            target="_blank"
            rel="noopener noreferrer"
            className={socialBtn}
            aria-label="GitHub"
          >
            <GitHubIcon size={17} />
          </a>

          {/* Discord: copies the username */}
          <div className="relative">
            <button
              onClick={copyDiscord}
              className={socialBtn}
              aria-label={`Discord: ${DISCORD_USER}`}
              title={`${t.discordHint}: ${DISCORD_USER}`}
            >
              <DiscordIcon size={17} />
            </button>
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1B45FF] text-white text-xs font-medium shadow-lg shadow-[#1B45FF]/30"
                >
                  <Check size={12} />
                  {t.copied} {DISCORD_USER}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://www.instagram.com/avalowowo"
            target="_blank"
            rel="noopener noreferrer"
            className={socialBtn}
            aria-label="Instagram"
          >
            <InstagramIcon size={17} />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4C5568]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.18em] uppercase">{t.scroll}</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
