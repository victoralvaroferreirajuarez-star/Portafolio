"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  es: {
    label: "Trayectoria",
    title: "El camino\nhasta aquí.",
    subtitle: "De la cuarentena en Perú a fundar negocios en Barcelona.",
    milestones: [
      {
        year: "2020",
        title: "La cuarentena que lo cambió todo",
        desc: "Encerrado por la pandemia, empecé a explorar la informática por mi cuenta: sistemas operativos, herramientas, trucos. Sin saberlo, estaba construyendo la base de todo lo que vino después.",
      },
      {
        year: "2022–23",
        title: "Primer negocio: juegos de Steam",
        desc: "Monté mi primera operación real: reventa de juegos de Steam aprovechando el cambio de divisa argentino. Muy buenas ventas para un estudiante de colegio — hasta que parchearon el truco.",
      },
      {
        year: "2023",
        title: "Bachiller terminado en Perú",
        desc: "Cerré mi etapa escolar en Perú con una idea clara: lo mío iba a estar entre la tecnología y los negocios.",
      },
      {
        year: "2024–25",
        title: "Nueva vida en España",
        desc: "Mudanza a España. FP de Comercio Internacional en Vilanova i la Geltrú: la parte de negocio que le faltaba a mi lado técnico.",
      },
      {
        year: "2025",
        title: "Nace todo: S X S, JUVAK y FPT",
        desc: "Arranco los negocios de verdad — S X S como núcleo, JUVAK y Fútbol Para Todos creciendo dentro. Y mientras tanto, estudiando Sistemas en Barcelona.",
      },
      {
        year: "Hoy",
        title: "Y esto recién empieza",
        desc: "Proyecciones a más negocios, más productos y más ideas. El objetivo: seguir construyendo.",
      },
    ],
  },
  en: {
    label: "Journey",
    title: "The road\nto here.",
    subtitle: "From lockdown in Peru to founding businesses in Barcelona.",
    milestones: [
      {
        year: "2020",
        title: "The lockdown that changed everything",
        desc: "Stuck at home during the pandemic, I started exploring computers on my own: operating systems, tools, tricks. Without knowing it, I was building the foundation for everything that came next.",
      },
      {
        year: "2022–23",
        title: "First business: Steam games",
        desc: "My first real operation: reselling Steam games leveraging the Argentine currency exchange. Great sales for a high-school student — until they patched the trick.",
      },
      {
        year: "2023",
        title: "Finished high school in Peru",
        desc: "Closed my school years in Peru with one thing clear: my path was somewhere between technology and business.",
      },
      {
        year: "2024–25",
        title: "A new life in Spain",
        desc: "Moved to Spain. International Trade diploma in Vilanova i la Geltrú: the business side my technical side was missing.",
      },
      {
        year: "2025",
        title: "Everything begins: S X S, JUVAK & FPT",
        desc: "The real businesses launch — S X S as the core, with JUVAK and Fútbol Para Todos growing inside it. All while studying IT Systems in Barcelona.",
      },
      {
        year: "Now",
        title: "And this is just the start",
        desc: "More businesses, more products, more ideas on the horizon. The goal: keep building.",
      },
    ],
  },
};

export default function Timeline() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section id="timeline" className="py-32 bg-[#070B14] relative overflow-hidden">
      <div
        className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-[#60A5FA] tracking-[0.18em] uppercase mb-3">
            {t.label}
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-white leading-[1.1] tracking-tight mb-4 whitespace-pre-line">
            {t.title}
          </h2>
          <p className="text-[#8A93A6] font-light">{t.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-1 bottom-1 w-px bg-gradient-to-b from-[#1B45FF]/60 via-[#1B45FF]/25 to-transparent" />

          <div className="space-y-14">
            {t.milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative pl-10 md:pl-0 md:w-1/2 ${
                    left ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  {/* Node */}
                  <span
                    className={`absolute top-1 w-[15px] h-[15px] rounded-full border-2 border-[#1B45FF] bg-[#070B14] shadow-[0_0_12px_rgba(27,69,255,0.6)] ${
                      left ? "left-0 md:left-auto md:right-[-7.5px]" : "left-0 md:left-[-7.5px]"
                    }`}
                  />
                  <p className="text-xs font-bold text-[#60A5FA] tracking-[0.15em] uppercase mb-2">
                    {m.year}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-[#8A93A6] leading-relaxed">{m.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
