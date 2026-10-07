const icons = {
  boot: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8v25c0 5 4 9 9 9h10l6 8h15c2 0 4-2 4-4v-4l-14-3-8-12V8" /><path d="M16 48h40" /><path d="M24 18h14M24 28h14" /></svg>,
  compass: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="32" cy="32" r="24" /><path d="M42 22L34 42 22 46l8-20 12-4z" /><path d="M32 4v7M32 53v7M4 32h7M53 32h7" /></svg>,
  mountain: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 54h56L42 17 31 37 24 29 4 54z" /><path d="M42 17l-5 14 9-4" /></svg>,
  camel: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M8 40c5-12 12-14 19-7 4-14 16-14 20 0 5-4 9-3 12 3" /><path d="M14 40v14M28 40v14M44 40v14M55 38v16" /><path d="M50 31l7-10 4 8" /></svg>,
  tent: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 54L32 10l28 44H4z" /><path d="M32 10v44" /><path d="M32 54l12-20M32 54L20 34" /></svg>,
  sun: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="32" cy="32" r="11" /><path d="M32 3v10M32 51v10M3 32h10M51 32h10M11 11l7 7M46 46l7 7M53 11l-7 7M18 46l-7 7" /></svg>,
  map: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14l16-6 24 8 16-6v40l-16 6-24-8-16 6V14z" /><path d="M20 8v40M44 16v40" /></svg>,
  yoga: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="32" cy="13" r="6" /><path d="M32 21v18" /><path d="M16 33l16 6 16-6" /><path d="M18 54c8-10 20-10 28 0" /><path d="M22 44l10-5 10 5" /></svg>,
  difficulty: <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M8 52h48" /><path d="M13 52V34M27 52V24M41 52V14" /><path d="M13 34h10M27 24h10M41 14h10" /></svg>
};

export function SymbolIcon({ name = "boot" }) {
  return icons[name] || icons.boot;
}
