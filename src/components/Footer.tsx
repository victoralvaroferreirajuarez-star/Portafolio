"use client";

import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  es: { rights: "Todos los derechos reservados.", made: "Hecho con" },
  en: { rights: "All rights reserved.", made: "Made with" },
};

export default function Footer() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#05070D] border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[#5A6478]">
          © {year} Alvaro Ferreira. {t.rights}
        </p>
        <p className="text-xs text-[#5A6478]">
          {t.made}{" "}
          <span className="bg-gradient-to-r from-[#60A5FA] to-[#1B45FF] bg-clip-text text-transparent font-medium">
            avalito
          </span>
        </p>
      </div>
    </footer>
  );
}
