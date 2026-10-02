import Link from "next/link";
import { AnyItem, clean, departureOf, durationOf, imageOf, priceOf, serviceUrl } from "../lib/api";

export function TourCard({ tour, index }: { tour: AnyItem; index?: number }) {
  return (
    <Link href={serviceUrl(tour)} className="card" style={{display: "block"}}>
      <div style={{position: "relative"}}>
        <img src={imageOf(tour)} alt={tour.title || "Trek Maroc"} className="tour-image" />
        <div style={{position: "absolute", top: 16, left: 16}} className="pill">{durationOf(tour)}</div>
      </div>
      <div className="card-pad">
        <p className="eyebrow">{typeof index === "number" ? `Trek 0${index + 1}` : "Trek Maroc"}</p>
        <h3 style={{fontSize: 26, lineHeight: 1.1, margin: "12px 0"}}>{tour.title || tour.name}</h3>
        <p className="muted">{clean(tour.excerpt || tour.short_description || tour.description || "Programme de trekking au Maroc.").slice(0, 180)}</p>
        <div className="meta">
          <span className="pill">{departureOf(tour)}</span>
          <span className="pill">{priceOf(tour)}</span>
        </div>
      </div>
    </Link>
  );
}
