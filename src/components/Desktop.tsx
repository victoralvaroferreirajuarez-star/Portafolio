"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useDragControls,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  JuvakLogo,
  FPTLogo,
  SXSLogo,
  BananitaLogo,
  GitHubIcon,
  DiscordIcon,
  InstagramIcon,
} from "@/components/icons";

const DISCORD_USER = "avalouw.";

type WindowId = "sxs" | "juvak" | "fpt" | "bananita";
type WinState = "open" | "min" | "closed";

type Venture = {
  id: WindowId;
  app: string;
  name: string;
  logo: React.ReactNode;
  dockLogo: React.ReactNode;
  role: { es: string; en: string };
  desc: { es: string; en: string };
  web?: { label: string; href: string };
  ig?: { label: string; href: string };
  status?: { es: string; en: string };
  pos: { left: string; top: string };
};

const VENTURES: Venture[] = [
  {
    id: "sxs",
    app: "sxs.app",
    name: "S X S",
    logo: <SXSLogo size={44} />,
    dockLogo: <SXSLogo size={40} />,
    role: { es: "Co-Founder · Núcleo", en: "Co-Founder · Core" },
    desc: {
      es: "El paraguas. La empresa núcleo desde donde nacen y crecen todos los demás negocios.",
      en: "The umbrella. The core company where every other business is born and grows.",
    },
    status: { es: "En construcción", en: "In the works" },
    pos: { left: "60%", top: "5%" },
  },
  {
    id: "juvak",
    app: "juvak.app",
    name: "JUVAK",
    logo: (
      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white">
        <JuvakLogo size={34} />
      </span>
    ),
    dockLogo: (
      <span className="flex items-center justify-center w-full h-full rounded-[10px] bg-white">
        <JuvakLogo size={30} />
      </span>
    ),
    role: { es: "Founder", en: "Founder" },
    desc: {
      es: "Marca de relojes. Diseño y venta de relojes con identidad propia.",
      en: "Watch brand. Designing and selling watches with an identity of their own.",
    },
    web: { label: "juvak.store", href: "https://juvak.store" },
    ig: { label: "@juvak.es", href: "https://www.instagram.com/juvak.es" },
    pos: { left: "4%", top: "10%" },
  },
  {
    id: "fpt",
    app: "fpt.app",
    name: "Fútbol Para Todos",
    logo: <FPTLogo size={44} />,
    dockLogo: <FPTLogo size={40} />,
    role: { es: "Co-Founder", en: "Co-Founder" },
    desc: {
      es: "Camisetas de fútbol para todos los hinchas. El fútbol no entiende de fronteras.",
      en: "Football jerseys for every fan. Football knows no borders.",
    },
    web: { label: "futbolparatodos.store", href: "https://futbolparatodos.store" },
    ig: { label: "@fpt.store", href: "https://www.instagram.com/fpt.store" },
    pos: { left: "32%", top: "36%" },
  },
  {
    id: "bananita",
    app: "bananita.app",
    name: "BananitaStore",
    logo: <BananitaLogo size={44} />,
    dockLogo: <BananitaLogo size={40} />,
    role: { es: "Founder · Live", en: "Founder · Live" },
    desc: {
      es: "Marketplace de mascotas de Adopt Me (Roblox). Compra, vende y calcula el valor de tus pets.",
      en: "Adopt Me (Roblox) pet marketplace. Buy, sell and calculate your pets' value.",
    },
    web: { label: "bananitastore.shop", href: "https://www.bananitastore.shop" },
    pos: { left: "63%", top: "47%" },
  },
];

const CONTENT = {
  es: {
    label: "Emprendimientos",
    title: "Mi escritorio.",
    subtitle:
      "S X S es el núcleo — de ahí nacen JUVAK y Fútbol Para Todos. Arrastra las ventanas, ciérralas, minimízalas y reábrelas desde el dock. Es un escritorio de verdad.",
    visit: "Visitar web",
    allClosed: "Todo cerrado. Reabre las apps desde el dock 👇",
    copied: "¡Copiado!",
    menus: ["Archivo", "Editar", "Ver", "Ir"],
    menuTitle: "Alvaro Ferreira — Emprendimientos",
  },
  en: {
    label: "Ventures",
    title: "My desktop.",
    subtitle:
      "S X S is the core — JUVAK and Fútbol Para Todos grow from it. Drag the windows, close them, minimize them and reopen them from the dock. It's a real desktop.",
    visit: "Visit website",
    allClosed: "Everything's closed. Reopen the apps from the dock 👇",
    copied: "Copied!",
    menus: ["File", "Edit", "View", "Go"],
    menuTitle: "Alvaro Ferreira — Ventures",
  },
};

/* ---------- Window content (shared desktop/mobile) ---------- */

function VentureContent({ v, lang, visit }: { v: Venture; lang: "es" | "en"; visit: string }) {
  return (
    <div className="p-5">
      <div className="flex items-center gap-3.5 mb-4">
        {v.logo}
        <div>
          <h3 className="text-white font-semibold text-base leading-tight">{v.name}</h3>
          <span className="inline-block mt-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#1B45FF]/20 text-[#7FA8FF] border border-[#1B45FF]/30">
            {v.role[lang]}
          </span>
        </div>
      </div>

      <p className="text-sm text-[#9AA4B8] leading-relaxed mb-5">{v.desc[lang]}</p>

      {v.web || v.ig ? (
        <div className="flex flex-wrap gap-2">
          {v.web && (
            <a
              href={v.web.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1B45FF] text-white text-xs font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              {visit}
              <ArrowUpRight size={12} />
            </a>
          )}
          {v.ig && (
            <a
              href={v.ig.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-[#C6CDDB] text-xs font-medium hover:border-white/30 hover:text-white active:scale-95 transition-all duration-200"
            >
              <InstagramIcon size={12} />
              {v.ig.label}
            </a>
          )}
        </div>
      ) : (
        v.status && (
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-white/20 text-xs text-[#8A93A6]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E] animate-pulse" />
            {v.status[lang]}
          </span>
        )
      )}
    </div>
  );
}

/* ---------- Traffic lights ---------- */

function TrafficLights({
  onClose,
  onMin,
  onMax,
  interactive = true,
}: {
  onClose?: () => void;
  onMin?: () => void;
  onMax?: () => void;
  interactive?: boolean;
}) {
  const base =
    "w-3 h-3 rounded-full flex items-center justify-center text-[8px] font-bold text-black/50 leading-none";
  return (
    <div className="flex items-center gap-2 group/lights" onPointerDown={(e) => e.stopPropagation()}>
      <button
        aria-label="Cerrar"
        onClick={onClose}
        disabled={!interactive}
        className={`${base} bg-[#FF5F57] ${interactive ? "hover:brightness-90 cursor-pointer" : ""}`}
      >
        <span className="opacity-0 group-hover/lights:opacity-100 transition-opacity">×</span>
      </button>
      <button
        aria-label="Minimizar"
        onClick={onMin}
        disabled={!interactive}
        className={`${base} bg-[#FEBC2E] ${interactive ? "hover:brightness-90 cursor-pointer" : ""}`}
      >
        <span className="opacity-0 group-hover/lights:opacity-100 transition-opacity">−</span>
      </button>
      <button
        aria-label="Maximizar"
        onClick={onMax}
        disabled={!interactive}
        className={`${base} bg-[#28C840] ${interactive ? "hover:brightness-90 cursor-pointer" : ""}`}
      >
        <span className="opacity-0 group-hover/lights:opacity-100 transition-opacity">+</span>
      </button>
    </div>
  );
}

/* ---------- Draggable macOS window (desktop only) ---------- */

function MacWindow({
  v,
  lang,
  visit,
  z,
  maximized,
  constraintsRef,
  onClose,
  onMin,
  onMax,
  onFocus,
}: {
  v: Venture;
  lang: "es" | "en";
  visit: string;
  z: number;
  maximized: boolean;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onMin: () => void;
  onMax: () => void;
  onFocus: () => void;
}) {
  const dragControls = useDragControls();

  return (
    <motion.div
      layout
      drag={!maximized}
      dragListener={false}
      dragControls={dragControls}
      dragConstraints={constraintsRef}
      dragMomentum={false}
      dragElastic={0.08}
      onPointerDown={onFocus}
      initial={{ opacity: 0, scale: 0.9, y: 24 }}
      animate={maximized ? { opacity: 1, scale: 1, y: 0, x: 0 } : { opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: 180, transition: { duration: 0.28, ease: "easeIn" } }}
      transition={{ duration: 0.45, ease: [0.6, 0, 0.05, 1] }}
      className={`absolute rounded-xl overflow-hidden border border-white/10 bg-[#0B101E]/90 backdrop-blur-2xl shadow-2xl shadow-black/50 ${
        maximized ? "inset-4 md:inset-6 w-auto" : "w-[320px] xl:w-[350px]"
      }`}
      style={maximized ? { zIndex: z } : { left: v.pos.left, top: v.pos.top, zIndex: z }}
    >
      {/* Title bar — drag handle */}
      <div
        onPointerDown={(e) => {
          if (!maximized) dragControls.start(e);
        }}
        className={`flex items-center gap-3 h-9 px-3.5 bg-white/[0.04] border-b border-white/[0.06] select-none ${
          maximized ? "" : "cursor-grab active:cursor-grabbing"
        }`}
        style={{ touchAction: "none" }}
      >
        <TrafficLights onClose={onClose} onMin={onMin} onMax={onMax} />
        <span className="flex-1 text-center text-[11px] text-white/40 font-medium pr-14">
          {v.app}
        </span>
      </div>

      <VentureContent v={v} lang={lang} visit={visit} />
    </motion.div>
  );
}

/* ---------- Dock with magnification ---------- */

function DockItem({
  mouseX,
  label,
  running,
  onClick,
  href,
  children,
}: {
  mouseX: MotionValue<number>;
  label: string;
  running?: boolean;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds || val === Infinity) return 500;
    return val - (bounds.x + bounds.width / 2);
  });
  const sizeRaw = useTransform(distance, [-110, 0, 110], [44, 68, 44]);
  const size = useSpring(sizeRaw, { mass: 0.1, stiffness: 180, damping: 13 });

  const inner = (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center rounded-xl bg-white/[0.08] border border-white/10 hover:border-white/25 transition-colors cursor-pointer group [&_svg]:w-[60%] [&_svg]:h-[60%]"
    >
      {children}
      {/* Tooltip */}
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#161D30] border border-white/10 text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
      {/* Running indicator */}
      {running && (
        <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/70" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} aria-label={label}>
      {inner}
    </button>
  );
}

/* ---------- Menu bar clock ---------- */

function useClock(lang: "es" | "en") {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  if (!now) return "";
  const locale = lang === "es" ? "es-ES" : "en-US";
  const date = now.toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" });
  const time = now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
  return `${date}  ${time}`;
}

/* ---------- Main section ---------- */

export default function Desktop() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const constraintsRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);

  const [states, setStates] = useState<Record<WindowId, WinState>>({
    sxs: "open",
    juvak: "open",
    fpt: "open",
    bananita: "open",
  });
  const [zOrder, setZOrder] = useState<WindowId[]>(["sxs", "bananita", "fpt", "juvak"]);
  const [maximized, setMaximized] = useState<WindowId | null>(null);
  const [copied, setCopied] = useState(false);

  const clock = useClock(lang);

  const bringToFront = (id: WindowId) =>
    setZOrder((prev) => [...prev.filter((w) => w !== id), id]);

  const setWin = (id: WindowId, state: WinState) => {
    setStates((prev) => ({ ...prev, [id]: state }));
    if (state !== "open" && maximized === id) setMaximized(null);
    if (state === "open") bringToFront(id);
  };

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USER);
    } catch {
      // clipboard unavailable
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const allClosed = VENTURES.every((v) => states[v.id] !== "open");

  const socialDockItems = (
    <>
      <DockItem mouseX={mouseX} label="GitHub" href="https://github.com/victoralvaroferreirajuarez-star">
        <span className="text-white/90 flex items-center justify-center w-full h-full">
          <GitHubIcon size={24} />
        </span>
      </DockItem>
      <DockItem
        mouseX={mouseX}
        label={copied ? `${t.copied} ${DISCORD_USER}` : `Discord · ${DISCORD_USER}`}
        onClick={copyDiscord}
      >
        <span className="text-[#7FA8FF] flex items-center justify-center w-full h-full">
          {copied ? <Check size={24} /> : <DiscordIcon size={24} />}
        </span>
      </DockItem>
      <DockItem mouseX={mouseX} label="Instagram · @avalowowo" href="https://www.instagram.com/avalowowo">
        <span className="text-white/90 flex items-center justify-center w-full h-full">
          <InstagramIcon size={24} />
        </span>
      </DockItem>
    </>
  );

  return (
    <section id="ventures" className="py-32 bg-[#070B14] relative overflow-hidden">
      {/* Ambient glow behind the screen */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at center, rgba(27,69,255,0.18), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
          <p className="text-[#8A93A6] max-w-2xl font-light leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* ===== Desktop (md+): real interactive desktop ===== */}
        <motion.div
          className="hidden md:block rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.05, 1] }}
        >
          {/* Menu bar */}
          <div className="flex items-center justify-between h-8 px-4 bg-[#0A0F1C]/95 border-b border-white/[0.06] text-[11px] text-white/60 select-none">
            <div className="flex items-center gap-4">
              <span className="font-semibold bg-gradient-to-r from-[#60A5FA] to-[#1B45FF] bg-clip-text text-transparent">
                avalito
              </span>
              <span className="hidden lg:inline font-medium text-white/70">{t.menuTitle}</span>
              {t.menus.map((m) => (
                <span key={m} className="hidden xl:inline hover:text-white/90 cursor-default">
                  {m}
                </span>
              ))}
            </div>
            <span className="tabular-nums whitespace-pre">{clock}</span>
          </div>

          {/* Wallpaper + windows */}
          <div
            ref={constraintsRef}
            className="relative h-[600px]"
            style={{
              background:
                "radial-gradient(ellipse at 70% 15%, rgba(27,69,255,0.25), transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(37,99,235,0.18), transparent 55%), linear-gradient(160deg, #060A16 0%, #0A1226 55%, #060A16 100%)",
            }}
          >
            {/* Wallpaper dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: "radial-gradient(rgba(96,165,250,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {allClosed && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-white/40">{t.allClosed}</p>
              </div>
            )}

            <AnimatePresence>
              {VENTURES.filter((v) => states[v.id] === "open").map((v) => (
                <MacWindow
                  key={v.id}
                  v={v}
                  lang={lang}
                  visit={t.visit}
                  z={10 + zOrder.indexOf(v.id)}
                  maximized={maximized === v.id}
                  constraintsRef={constraintsRef}
                  onClose={() => setWin(v.id, "closed")}
                  onMin={() => setWin(v.id, "min")}
                  onMax={() => {
                    setMaximized((m) => (m === v.id ? null : v.id));
                    bringToFront(v.id);
                  }}
                  onFocus={() => bringToFront(v.id)}
                />
              ))}
            </AnimatePresence>

            {/* Dock */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40">
              <motion.div
                onMouseMove={(e) => mouseX.set(e.clientX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-end gap-2 px-3 py-2 rounded-2xl bg-white/[0.07] backdrop-blur-2xl border border-white/10 shadow-xl shadow-black/40"
              >
                {VENTURES.map((v) => (
                  <DockItem
                    key={v.id}
                    mouseX={mouseX}
                    label={v.name}
                    running={states[v.id] !== "closed"}
                    onClick={() => setWin(v.id, "open")}
                  >
                    <span className="flex items-center justify-center w-full h-full">{v.dockLogo}</span>
                  </DockItem>
                ))}
                <div className="w-px h-9 bg-white/15 mx-1 self-center" />
                {socialDockItems}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ===== Mobile: stacked window cards + simple dock ===== */}
        <div className="md:hidden space-y-5">
          {VENTURES.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-xl overflow-hidden border border-white/10 bg-[#0B101E]/90 shadow-xl shadow-black/40"
            >
              <div className="flex items-center gap-3 h-9 px-3.5 bg-white/[0.04] border-b border-white/[0.06]">
                <TrafficLights interactive={false} />
                <span className="flex-1 text-center text-[11px] text-white/40 font-medium pr-14">
                  {v.app}
                </span>
              </div>
              <VentureContent v={v} lang={lang} visit={t.visit} />
            </motion.div>
          ))}

          {/* Simple dock */}
          <div className="flex justify-center gap-3 pt-2">
            {[
              {
                label: "GitHub",
                href: "https://github.com/victoralvaroferreirajuarez-star",
                icon: <GitHubIcon size={20} />,
              },
              { label: "Discord", onClick: copyDiscord, icon: copied ? <Check size={20} /> : <DiscordIcon size={20} /> },
              {
                label: "Instagram",
                href: "https://www.instagram.com/avalowowo",
                icon: <InstagramIcon size={20} />,
              },
            ].map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/90 active:scale-95 transition-transform"
                >
                  {item.icon}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  aria-label={`Discord: ${DISCORD_USER}`}
                  className="w-12 h-12 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-[#7FA8FF] active:scale-95 transition-transform"
                >
                  {item.icon}
                </button>
              )
            )}
          </div>
          {copied && (
            <p className="text-center text-xs text-[#7FA8FF]">
              {t.copied} <span className="font-mono">{DISCORD_USER}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
