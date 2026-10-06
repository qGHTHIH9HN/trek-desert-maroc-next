import Link from "next/link";
import { SymbolIcon } from "./SymbolIcon";
import { cleanText, departureOf, durationOf, imageOf, priceOf, tourUrl, visualClass } from "../lib/api";

function symbolFor(tour) {
  const text = `${tour.title || ""} ${tour.slug || ""} ${tour.excerpt || ""}`.toLowerCase();
  if (text.includes("atlas") || text.includes("mountain") || text.includes("toubkal")) return "mountain";
  if (text.includes("yoga") || text.includes("retreat")) return "yoga";
  if (text.includes("camel") || text.includes("nomad")) return "camel";
  return "boot";
}

export function TourCard({ tour }) {
  const image = imageOf(tour);
  return (
    <Link href={tourUrl(tour)} className="tour-card">
      <div style={{ position: "relative" }}>
        <div className={`visual ${visualClass(tour)}`}>
          {image ? <img src={image} alt={tour.title || "Morocco trekking tour"} /> : null}
          <svg className="landscape-lines" viewBox="0 0 500 280" preserveAspectRatio="none">
            <path d="M0 210 C90 165 160 210 250 150 C340 90 395 130 500 75" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0 240 C100 190 190 230 280 175 C360 125 420 155 500 110" fill="none" stroke="white" strokeWidth="1.2" />
          </svg>
          <span className="symbol-float"><SymbolIcon name={symbolFor(tour)} /></span>
        </div>
        <span className="badge">{tour.badge || durationOf(tour)}</span>
      </div>

      <div className="card-body">
        <span className="eyebrow">Trekking Program</span>
        <h3>{tour.title || tour.name || "Morocco Trekking Tour"}</h3>
        <p>{cleanText(tour.excerpt || tour.short_description || tour.description || "A private trekking journey in Morocco designed by local experts.").slice(0, 185)}</p>

        <div className="meta">
          <div><strong>Duration</strong>{durationOf(tour)}</div>
          <div><strong>Departure</strong>{departureOf(tour)}</div>
          <div><strong>Price</strong>{priceOf(tour)}</div>
          <div><strong>Route style</strong>{tour.badge || "Walking journey"}</div>
        </div>

        <span className="card-flag">↗ View trek details</span>
      </div>
    </Link>
  );
}
