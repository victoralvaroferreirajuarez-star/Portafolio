"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { GitHubIcon, DiscordIcon, InstagramIcon } from "@/components/icons";

const DISCORD_USER = "avalouw.";

const CONTENT = {
  es: {
    label: "Contacto",
    title: "Hablemos.",
    subtitle:
      "Estoy abierto a colaboraciones, ideas de negocio, o simplemente a conectar. El camino más rápido: Discord o Instagram.",
    cta: "¿Tienes un proyecto o una idea en mente? Escríbeme y le encontramos solución.",
    ctaBtn: "Escribir por Instagram",
    copy: "Copiar",
    copied: "¡Copiado!",
  },
  en: {
    label: "Contact",
    title: "Let's talk.",
    subtitle:
      "I'm open to collaborations, business ideas, or simply connecting. Fastest way to reach me: Discord or Instagram.",
    cta: "Got a project or an idea in mind? Write me and we'll figure it out.",
    ctaBtn: "Message on Instagram",
    copy: "Copy",
    copied: "Copied!",
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USER);
    } catch {
      // clipboard unavailable
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const cardClass =
    "flex items-center gap-4 p-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] hover:border-[#3B82F6]/40 transition-all duration-300 group w-full text-left";

  const iconTile =
    "w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1B45FF] flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-[#1B45FF]/20";

  return (
    <section id="contact" className="py-32 bg-[#05070D] overflow-hidden relative">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.5]"
        style={{ background: "radial-gradient(circle, rgba(27,69,255,0.12), transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.5]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-[#60A5FA] tracking-[0.18em] uppercase mb-3">
            {t.label}
          </p>
          <h2 className="text-[clamp(3rem,9vw,5.5rem)] font-bold text-white leading-[1.02] tracking-tight mb-5">
            {t.title}
          </h2>
          <p className="text-[#8A93A6] max-w-lg font-light text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Social links */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Discord — copies username */}
            <button onClick={copyDiscord} className={cardClass}>
              <div className={iconTile}>
                <DiscordIcon size={17} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#5A6478] mb-0.5 font-medium tracking-wide uppercase">
                  Discord
                </p>
                <p className="text-sm text-white/80 font-medium truncate font-mono">{DISCORD_USER}</p>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#7FA8FF] flex-shrink-0"
                  >
                    <Check size={14} />
                    {t.copied}
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1.5 text-xs text-[#5A6478] group-hover:text-white/70 transition-colors flex-shrink-0"
                  >
                    <Copy size={14} />
                    {t.copy}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/avalowowo"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <div className={iconTile}>
                <InstagramIcon size={17} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#5A6478] mb-0.5 font-medium tracking-wide uppercase">
                  Instagram
                </p>
                <p className="text-sm text-white/80 font-medium truncate">@avalowowo</p>
              </div>
              <ArrowUpRight
                size={15}
                className="text-[#5A6478] group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/victoralvaroferreirajuarez-star"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <div className={iconTile}>
                <GitHubIcon size={17} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#5A6478] mb-0.5 font-medium tracking-wide uppercase">
                  GitHub
                </p>
                <p className="text-sm text-white/80 font-medium truncate">
                  @victoralvaroferreirajuarez-star
                </p>
              </div>
              <ArrowUpRight
                size={15}
                className="text-[#5A6478] group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
              />
            </a>
          </motion.div>

          {/* CTA card */}
          <motion.div
            className="p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#1B45FF]/[0.10] to-[#60A5FA]/[0.05]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="text-white/60 text-lg font-light leading-[1.7] mb-7">{t.cta}</p>
            <a
              href="https://www.instagram.com/avalowowo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#1B45FF] text-white text-sm font-semibold rounded-full hover:brightness-110 active:scale-95 transition-all duration-300 shadow-lg shadow-[#1B45FF]/25"
            >
              <InstagramIcon size={15} />
              {t.ctaBtn}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
