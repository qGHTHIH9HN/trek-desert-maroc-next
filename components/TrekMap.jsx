export function TrekMap() {
  return (
    <div className="hero-map" aria-hidden="true">
      <svg viewBox="0 0 450 320" fill="none">
        <path d="M65 235 C110 190 150 208 184 168 C230 112 292 148 345 78" stroke="white" strokeWidth="3" strokeDasharray="8 10" opacity=".86" />
        <circle cx="65" cy="235" r="8" fill="#d7a05e" />
        <circle cx="184" cy="168" r="8" fill="#d7a05e" />
        <circle cx="345" cy="78" r="8" fill="#d7a05e" />
        <path d="M38 270 C96 238 132 260 190 220 C236 188 282 202 405 138" stroke="white" strokeWidth="1.2" opacity=".45" />
        <text x="42" y="258" fill="white" fontSize="13" fontWeight="800">M'Hamid</text>
        <text x="197" y="160" fill="white" fontSize="13" fontWeight="800">Erg Chigaga</text>
        <text x="292" y="70" fill="white" fontSize="13" fontWeight="800">Atlas</text>
      </svg>
    </div>
  );
}
