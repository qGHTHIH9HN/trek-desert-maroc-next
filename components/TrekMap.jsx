import { SymbolIcon } from "./SymbolIcon";
export function TrekMap() {
  return (
    <div className="trek-map-panel" aria-hidden="true">
      <div className="map-title"><span>Route logic</span><strong>Sahara → Atlas → Retreats</strong></div>
      <svg viewBox="0 0 520 360" fill="none"><path d="M56 285 C110 238 154 260 202 211 C248 164 295 185 343 132 C384 87 429 104 474 54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 12"/><path d="M40 310 C118 270 151 309 235 250 C305 200 350 218 486 154" stroke="currentColor" strokeWidth="1.4" opacity=".35"/><circle cx="56" cy="285" r="9" fill="currentColor"/><circle cx="202" cy="211" r="9" fill="currentColor"/><circle cx="343" cy="132" r="9" fill="currentColor"/><circle cx="474" cy="54" r="9" fill="currentColor"/></svg>
      <div className="map-points"><div><SymbolIcon name="sun"/><span>M’Hamid</span></div><div><SymbolIcon name="camel"/><span>Erg Chigaga</span></div><div><SymbolIcon name="mountain"/><span>Atlas</span></div></div>
    </div>
  );
}
