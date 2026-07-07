"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Rocket, Puzzle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  es: {
    label: "Sobre Mí",
    title: "Hecho en Perú,\nconstruyendo desde Barcelona.",
    paragraphs: [
      "Soy Alvaro — avalito. Nací en Perú, con padre colombiano y madre peruana, y desde hace un año vivo en Sitges, Barcelona. Estudio Sistemas y, mientras tanto, construyo mis propios negocios.",
      "Me mueve descubrir cosas nuevas. No me rindo hasta conseguir lo que busco, y si algo me define es esto: le encuentro solución a todo. Todo.",
    ],
    quote: "«Le encuentro solución a todo.»",
    cards: [
      {
        icon: MapPin,
        title: "Sitges, Barcelona",
        desc: "Raíces peruanas y colombianas, base en la costa catalana.",
      },
      {
        icon: GraduationCap,
        title: "Estudiante de Sistemas",
        desc: "Formándome en Barcelona mientras emprendo.",
      },
      {
        icon: Rocket,
        title: "Emprendedor",
        desc: "Co-founder de S X S, founder de JUVAK, co-founder de FPT.",
      },
      {
        icon: Puzzle,
        title: "Resolutivo",
        desc: "Eficaz, honesto, rápido, cumplidor. No suelto un problema hasta resolverlo.",
      },
    ],
    traits: ["Eficaz", "Honesto", "Rápido", "Cumplidor", "Responsable", "Perseverante"],
  },
  en: {
    label: "About Me",
    title: "Made in Peru,\nbuilding from Barcelona.",
    paragraphs: [
      "I'm Alvaro — avalito. Born in Peru to a Colombian father and a Peruvian mother, I've been living in Sitges, Barcelona for a year now. I study IT Systems and, in the meantime, I build my own businesses.",
      "Discovering new things is what drives me. I don't give up until I get what I'm after, and if one thing defines me it's this: I find a solution to everything. Everything.",
    ],
    quote: "“I find a solution to everything.”",
    cards: [
      {
        icon: MapPin,
        title: "Sitges, Barcelona",
        desc: "Peruvian and Colombian roots, based on the Catalan coast.",
      },
      {
        icon: GraduationCap,
        title: "IT Systems student",
        desc: "Studying in Barcelona while building companies.",
      },
      {
        icon: Rocket,
        title: "Entrepreneur",
        desc: "Co-founder of S X S, founder of JUVAK, co-founder of FPT.",
      },
      {
        icon: Puzzle,
        title: "Problem solver",
        desc: "Effective, honest, fast, reliable. I don't let go of a problem until it's solved.",
      },
    ],
    traits: ["Effective", "Honest", "Fast", "Reliable", "Responsible", "Relentless"],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.6, 0, 0.05, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section id="about" className="py-32 bg-[#05070D] relative overflow-hidden">
      <div
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(27,69,255,0.10), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          custom={0}
          variants={fadeUp}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold text-[#60A5FA] tracking-[0.18em] uppercase mb-3">
            {t.label}
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-white leading-[1.1] tracking-tight whitespace-pre-line">
            {t.title}
          </h2>
        </motion.div>

        {/* Paragraphs */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {t.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-lg text-[#9AA4B8] leading-[1.75] font-light"
              initial="hidden"
              whileInView="visible"
              custom={0.1 + i * 0.12}
              variants={fadeUp}
              viewport={{ once: true, margin: "-60px" }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Trait chips */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-16"
          initial="hidden"
          whileInView="visible"
          custom={0.25}
          variants={fadeUp}
          viewport={{ once: true, margin: "-40px" }}
        >
          {t.traits.map((trait) => (
            <span
              key={trait}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#1B45FF]/10 border border-[#1B45FF]/25 text-[#7FA8FF]"
            >
              {trait}
            </span>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1B45FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#1B45FF]/20">
                <card.icon size={18} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug">{card.title}</h3>
              <p className="text-sm text-[#8A93A6] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          className="mt-16 text-center text-2xl md:text-3xl font-light bg-gradient-to-r from-[#60A5FA] to-[#1B45FF] bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          {t.quote}
        </motion.p>
      </div>
    </section>
  );
}
