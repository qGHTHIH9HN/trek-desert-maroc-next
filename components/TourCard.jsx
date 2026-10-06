import Link from "next/link";
import { SymbolIcon } from "./SymbolIcon";
import { cleanText, departureOf, durationOf, imageOf, priceOf, tourUrl, visualClass } from "../lib/api";
function symbolFor(tour) { const text = `${tour.title || ""} ${tour.slug || ""} ${tour.excerpt || ""}`.toLowerCase(); if (text.includes("atlas") || text.includes("mountain") || text.includes("toubkal")) return "mountain"; if (text.includes("yoga") || text.includes("retreat")) return "yoga"; if (text.includes("camel") || text.includes("nomad")) return "camel"; return "boot"; }
function levelFor(tour) { const text = `${tour.title || ""} ${tour.slug || ""} ${tour.excerpt || ""}`.toLowerCase(); if (text.includes("toubkal") || text.includes("mountain")) return "Moderate / active"; if (text.includes("family") || text.includes("gentle")) return "Easy"; return "Moderate"; }
export function TourCard({ tour }) {
  const image = imageOf(tour); const symbol = symbolFor(tour);
  return (
    <Link href={tourUrl(tour)} className="tour-card trekking-card">
      <div className="card-visual-wrap"><div className={`visual ${visualClass(tour)}`}>{image ? <img src={image} alt={tour.title || "Morocco trekking tour"}/> : null}<svg className="landscape-lines" viewBox="0 0 500 280" preserveAspectRatio="none"><path d="M0 210 C90 165 160 210 250 150 C340 90 395 130 500 75" fill="none" stroke="white" strokeWidth="2"/><path d="M0 240 C100 190 190 230 280 175 C360 125 420 155 500 110" fill="none" stroke="white" strokeWidth="1.2"/><path d="M40 190 C110 170 120 140 180 155 C260 175 280 110 350 115" fill="none" stroke="white" strokeWidth="1" opacity=".65"/></svg><span className="symbol-float"><SymbolIcon name={symbol}/></span></div><span className="badge">{tour.badge || "Trekking Route"}</span></div>
      <div className="card-body"><span className="eyebrow">Morocco Walking Journey</span><h3>{tour.title || tour.name || "Morocco Trekking Tour"}</h3><p>{cleanText(tour.excerpt || tour.short_description || tour.description || "A private trekking journey in Morocco designed by local experts.").slice(0,190)}</p><div className="trek-specs"><div><SymbolIcon name="boot"/><strong>Duration</strong><span>{durationOf(tour)}</span></div><div><SymbolIcon name="difficulty"/><strong>Level</strong><span>{levelFor(tour)}</span></div><div><SymbolIcon name="tent"/><strong>Style</strong><span>Camp / lodge</span></div><div><SymbolIcon name="compass"/><strong>Departure</strong><span>{departureOf(tour)}</span></div></div><div className="price-row"><span>{priceOf(tour)}</span><strong>View trek →</strong></div></div>
    </Link>
  );
}
