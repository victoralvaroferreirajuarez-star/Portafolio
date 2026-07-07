// Brand logos and social icons — all inline SVG, no external assets.

/* ---------- Business logos ---------- */

// Exact logo from juvak.store (J + orange slash + blue dot).
// `onDark` swaps the near-black J for white so it reads on dark surfaces.
export function JuvakLogo({ size = 40, onDark = false }: { size?: number; onDark?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="455 235 350 350" role="img" aria-label="JUVAK">
      <path
        d="M470 250 h95 v210 a95 95 0 0 1 -95 95 h-95 v-95 h95 z"
        fill={onDark ? "#F5F6FA" : "#101014"}
      />
      <path d="M690 250 h95 l-90 305 h-95 z" fill="#F2610C" />
      <circle cx="600" cy="510" r="58" fill="#1B45FF" />
    </svg>
  );
}

// Recreation of the Fútbol Para Todos badge: circular seal, curved
// lettering and a green globe at the center.
export function FPTLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" role="img" aria-label="Fútbol Para Todos">
      <defs>
        <path id="fpt-arc-top" d="M 30 100 A 70 70 0 0 1 170 100" fill="none" />
        <path id="fpt-arc-bottom" d="M 26 100 A 74 74 0 0 0 174 100" fill="none" />
      </defs>
      {/* Seal */}
      <circle cx="100" cy="100" r="96" fill="#FFFFFF" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="#111111" strokeWidth="5" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="#111111" strokeWidth="4.5" />
      {/* Side accents */}
      <path d="M 22 78 A 80 80 0 0 1 30 62" fill="none" stroke="#1E7A34" strokeWidth="3" strokeLinecap="round" />
      <path d="M 178 78 A 80 80 0 0 0 170 62" fill="none" stroke="#1E7A34" strokeWidth="3" strokeLinecap="round" />
      <path d="M 22 122 A 80 80 0 0 0 30 138" fill="none" stroke="#1E7A34" strokeWidth="3" strokeLinecap="round" />
      <path d="M 178 122 A 80 80 0 0 1 170 138" fill="none" stroke="#1E7A34" strokeWidth="3" strokeLinecap="round" />
      <circle cx="18" cy="100" r="4" fill="#1E7A34" />
      <circle cx="182" cy="100" r="4" fill="#1E7A34" />
      {/* Globe */}
      <circle cx="100" cy="100" r="44" fill="#1E7A34" />
      <g stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.9">
        <ellipse cx="100" cy="100" rx="44" ry="44" stroke="none" />
        <ellipse cx="100" cy="100" rx="20" ry="44" />
        <ellipse cx="100" cy="100" rx="36" ry="44" opacity="0.45" />
        <line x1="56" y1="100" x2="144" y2="100" />
        <path d="M 62 78 Q 100 64 138 78" />
        <path d="M 62 122 Q 100 136 138 122" />
      </g>
      {/* Lettering */}
      <text fontFamily="Arial Black, Arial, sans-serif" fontSize="24" fontWeight="900" fill="#111111" letterSpacing="6">
        <textPath href="#fpt-arc-top" startOffset="50%" textAnchor="middle">
          FUTBOL
        </textPath>
      </text>
      <text fontFamily="Arial Black, Arial, sans-serif" fontSize="19" fontWeight="900" fill="#111111" letterSpacing="3">
        <textPath href="#fpt-arc-bottom" startOffset="50%" textAnchor="middle">
          PARA TODOS
        </textPath>
      </text>
    </svg>
  );
}

// S X S — umbrella brand monogram.
export function SXSLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="S X S">
      <defs>
        <linearGradient id="sxs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0E1B4D" />
          <stop offset="100%" stopColor="#1B45FF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="96" height="96" rx="24" fill="url(#sxs-bg)" />
      <text
        x="50"
        y="59"
        textAnchor="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="30"
        fontWeight="800"
        fill="#FFFFFF"
        letterSpacing="1"
      >
        S×S
      </text>
    </svg>
  );
}

/* ---------- Social icons ---------- */

export function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function DiscordIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
