const icons = {
  boot: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8v25c0 5 4 9 9 9h10l6 8h15c2 0 4-2 4-4v-4l-14-3-8-12V8" />
      <path d="M16 48h40" />
      <path d="M24 18h14M24 28h14" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="24" />
      <path d="M40 24l-6 16-10 4 6-16 10-4z" />
      <path d="M32 4v8M32 52v8M4 32h8M52 32h8" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 54h56L40 18 29 38 22 28 4 54z" />
      <path d="M40 18l-4 13 8-3" />
    </svg>
  ),
  camel: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 40c5-12 11-14 18-7 4-14 16-14 20 0 5-4 9-3 12 3" />
      <path d="M14 40v14M28 40v14M44 40v14M55 38v16" />
      <path d="M50 31l7-10 4 8" />
    </svg>
  ),
  tent: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 54L32 10l28 44H4z" />
      <path d="M32 10v44" />
      <path d="M32 54l12-20" />
      <path d="M32 54L20 34" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="11" />
      <path d="M32 3v10M32 51v10M3 32h10M51 32h10M11 11l7 7M46 46l7 7M53 11l-7 7M18 46l-7 7" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14l16-6 24 8 16-6v40l-16 6-24-8-16 6V14z" />
      <path d="M20 8v40M44 16v40" />
    </svg>
  ),
  yoga: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="13" r="6" />
      <path d="M32 21v18" />
      <path d="M16 33l16 6 16-6" />
      <path d="M18 54c8-10 20-10 28 0" />
      <path d="M22 44l10-5 10 5" />
    </svg>
  )
};

export function SymbolIcon({ name = "boot" }) {
  return icons[name] || icons.boot;
}
