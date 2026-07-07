"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Line = { type: "cmd" | "out"; text: string };

const CONTENT = {
  es: {
    label: "Stack",
    title: "Mis herramientas.",
    subtitle:
      "Trabajo con la IA como copiloto: Claude, GPT y Gemini en el día a día. Debajo, la base técnica que llevo construyendo desde 2020.",
    lines: [
      { type: "cmd", text: "whoami" },
      { type: "out", text: "alvaro “avalito” ferreira — developer & co-founder" },
      { type: "cmd", text: "stack --list" },
      { type: "out", text: "IA          Claude · GPT · Gemini      # copilotos diarios" },
      { type: "out", text: "lenguajes   Python · Lua · Node.js" },
      { type: "out", text: "sistemas    Windows · Linux · macOS    # desde 2020" },
      { type: "out", text: "seguridad   game hacking · memoryhackers" },
      { type: "out", text: "negocio     e-commerce · Instagram · Discord" },
      { type: "cmd", text: "motto" },
      { type: "out", text: "“le encuentro solución a todo.”" },
    ] as Line[],
  },
  en: {
    label: "Stack",
    title: "My tools.",
    subtitle:
      "I work with AI as my copilot: Claude, GPT and Gemini every day. Underneath, the technical foundation I've been building since 2020.",
    lines: [
      { type: "cmd", text: "whoami" },
      { type: "out", text: "alvaro “avalito” ferreira — developer & co-founder" },
      { type: "cmd", text: "stack --list" },
      { type: "out", text: "AI          Claude · GPT · Gemini      # daily copilots" },
      { type: "out", text: "languages   Python · Lua · Node.js" },
      { type: "out", text: "systems     Windows · Linux · macOS    # since 2020" },
      { type: "out", text: "security    game hacking · memoryhackers" },
      { type: "out", text: "business    e-commerce · Instagram · Discord" },
      { type: "cmd", text: "motto" },
      { type: "out", text: "“i find a solution to everything.”" },
    ] as Line[],
  },
};

const PROMPT = "alvaro@avalito ~ %";

export default function Stack() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section id="stack" className="py-32 bg-[#05070D] relative overflow-hidden">
      <div
        className="absolute top-[20%] right-[-8%] w-[450px] h-[450px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(27,69,255,0.10), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-[#60A5FA] tracking-[0.18em] uppercase mb-3">
            {t.label}
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-white leading-[1.1] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-[#8A93A6] max-w-xl font-light leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0E19]/95 shadow-2xl shadow-black/50"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.6, 0, 0.05, 1] }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 h-9 px-3.5 bg-white/[0.04] border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="flex-1 text-center text-[11px] text-white/40 font-medium pr-14">
              avalito — zsh
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-7 font-mono text-[12.5px] md:text-sm leading-[1.9] overflow-x-auto">
            {t.lines.map((line, i) => (
              <motion.div
                key={`${lang}-${i}`}
                className="whitespace-pre"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.25, delay: 0.3 + i * 0.18 }}
              >
                {line.type === "cmd" ? (
                  <>
                    <span className="text-[#28C840]">{PROMPT}</span>{" "}
                    <span className="text-white">{line.text}</span>
                  </>
                ) : (
                  <span className="text-[#8FA3C8] pl-2">{line.text}</span>
                )}
              </motion.div>
            ))}
            {/* Blinking cursor */}
            <motion.div
              className="whitespace-pre"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.25, delay: 0.3 + t.lines.length * 0.18 }}
            >
              <span className="text-[#28C840]">{PROMPT}</span>{" "}
              <span className="inline-block w-[8px] h-[15px] translate-y-[2px] bg-[#60A5FA] animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
