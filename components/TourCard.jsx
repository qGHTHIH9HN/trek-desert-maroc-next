import Link from "next/link";
import { SymbolIcon } from "./SymbolIcon";
import { TrekVisual } from "./Visual";
import { cleanText, departureOf, difficultyOf, durationOf, priceOf, terrainOf, tourUrl, walkingHoursOf } from "../lib/api";

export function TourCard({ tour }) {
  return (
    <Link href={tourUrl(tour)} className="tour-card trekking-card">
      <div className="card-visual-wrap">
        <TrekVisual item={tour} />
        <span className="badge">{tour.badge || "Trekking Route"}</span>
      </div>

      <div className="card-body">
        <span className="eyebrow">Morocco Walking Journey</span>
        <h3>{tour.title || tour.name || "Morocco Trekking Tour"}</h3>
        <p>{cleanText(tour.excerpt || tour.short_description || tour.description || "A private trekking journey in Morocco designed by local experts.").slice(0, 190)}</p>

        <div className="trek-specs">
          <div><SymbolIcon name="boot" /><strong>Duration</strong><span>{durationOf(tour)}</span></div>
          <div><SymbolIcon name="difficulty" /><strong>Level</strong><span>{difficultyOf(tour)}</span></div>
          <div><SymbolIcon name="map" /><strong>Terrain</strong><span>{terrainOf(tour)}</span></div>
          <div><SymbolIcon name="compass" /><strong>Walking</strong><span>{walkingHoursOf(tour)}</span></div>
        </div>

        <div className="price-row">
          <span>{priceOf(tour)}</span>
          <strong>View itinerary →</strong>
        </div>
      </div>
    </Link>
  );
}
