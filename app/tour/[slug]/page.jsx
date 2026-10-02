import { SymbolIcon } from "../../../components/SymbolIcon";
import { cleanText, departureOf, durationOf, getService, imageOf, priceOf, visualClass } from "../../../lib/api";

export const revalidate = 120;

export default async function TourDetailPage({ params }) {
  const { slug } = await params;
  const tour = await getService(slug);

  if (!tour) {
    return (
      <section className="section">
        <div className="container">
          <div className="notice">Tour not found in the PHP API.</div>
        </div>
      </section>
    );
  }

  const image = imageOf(tour);

  return (
    <section className="section">
      <div className="container grid-2">
        <div className={`visual ${visualClass(tour)}`} style={{ height: 540 }}>
          {image ? <img src={image} alt={tour.title} /> : null}
          <span className="symbol-float"><SymbolIcon name="boot" /></span>
        </div>

        <div>
          <span className="eyebrow">Trek Desert Maroc</span>
          <h1 className="display" style={{ fontSize: 64, margin: "16px 0" }}>{tour.title}</h1>
          <p style={{ lineHeight: 1.8, color: "var(--muted)" }}>
            {cleanText(tour.description || tour.content || tour.excerpt)}
          </p>

          <div className="meta">
            <div><strong>Duration</strong>{durationOf(tour)}</div>
            <div><strong>Departure</strong>{departureOf(tour)}</div>
            <div><strong>Price</strong>{priceOf(tour)}</div>
            <div><strong>Style</strong>Private / scheduled ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}
