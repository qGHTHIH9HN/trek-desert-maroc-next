import Link from "next/link";
import { SymbolIcon } from "../../../components/SymbolIcon";
import { TrekVisual } from "../../../components/Visual";
import { cleanText, departureOf, difficultyOf, durationOf, fallbackItinerary, fallbackTours, getService, priceOf, supportOf, terrainOf, visualType, walkingHoursOf } from "../../../lib/api";

export const revalidate = 120;

function fallbackBySlug(slug) {
  return fallbackTours.find((item) => item.slug === slug) || null;
}

export default async function TrekDetailPage({ params }) {
  const { slug } = await params;
  const apiTour = await getService(slug);
  const fallbackTour = fallbackBySlug(slug);
  const tour = apiTour || fallbackTour;

  if (!tour) {
    return (
      <section className="section">
        <div className="container"><div className="notice">Trek not found yet. Add this trek in the admin or choose another route.</div></div>
      </section>
    );
  }

  const itinerary = tour.itinerary || tour.days || fallbackItinerary(tour);
  const type = visualType(tour);

  return (
    <>
      <section className="trek-detail-hero">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">{tour.badge || "Trekking Route"}</span>
            <h1 className="display">{tour.title}</h1>
            <p>{cleanText(tour.excerpt || tour.description || "A Morocco trekking journey with local guides, clear route rhythm and practical walking support.")}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Plan this trek →</Link>
              <Link className="btn btn-light" href="/treks">View all treks</Link>
            </div>
          </div>
          <TrekVisual item={tour} large />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid-3">
          <div className="detail-panel">
            <h3>Trek facts</h3>
            <div className="detail-list">
              <div><SymbolIcon name="boot" /><span><strong>Duration</strong>{durationOf(tour)}</span></div>
              <div><SymbolIcon name="difficulty" /><span><strong>Difficulty</strong>{difficultyOf(tour)}</span></div>
              <div><SymbolIcon name="compass" /><span><strong>Walking</strong>{walkingHoursOf(tour)}</span></div>
              <div><SymbolIcon name="map" /><span><strong>Terrain</strong>{terrainOf(tour)}</span></div>
            </div>
          </div>

          <div className="detail-panel">
            <h3>Support & nights</h3>
            <div className="detail-list">
              <div><SymbolIcon name={type === "mountain" ? "mountain" : "camel"} /><span><strong>Support</strong>{supportOf(tour)}</span></div>
              <div><SymbolIcon name="tent" /><span><strong>Nights</strong>{type === "mountain" ? "Guesthouses / lodges" : "Desert camp / bivouac"}</span></div>
              <div><SymbolIcon name="sun" /><span><strong>Best season</strong>{type === "mountain" ? "Spring to autumn" : "October to April"}</span></div>
              <div><SymbolIcon name="compass" /><span><strong>Departure</strong>{departureOf(tour)}</span></div>
            </div>
          </div>

          <div className="detail-panel">
            <h3>Booking</h3>
            <div className="detail-list">
              <div><SymbolIcon name="map" /><span><strong>Price</strong>{priceOf(tour)}</span></div>
              <div><SymbolIcon name="boot" /><span><strong>Best for</strong>{type === "retreat" ? "Yoga groups and slow travel" : type === "mountain" ? "Active walkers and mountain lovers" : "Desert walkers and culture seekers"}</span></div>
              <div><SymbolIcon name="camel" /><span><strong>Group style</strong>Private or scheduled</span></div>
              <div><SymbolIcon name="compass" /><span><strong>Customization</strong>Dates, pace and comfort can be adjusted</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Day-by-day route</span><h2 className="display">Sample itinerary</h2></div>
            <p>This gives travelers a real trekking rhythm: where the walk starts, how the terrain changes, where they sleep and what each day feels like.</p>
          </div>
          <div className="route-steps">
            {itinerary.map((day, index) => (
              <div className="itinerary-card" key={day.day || index}>
                <span className="itinerary-day">{day.day || `Day ${index + 1}`}</span>
                <div><h3>{day.title}</h3><p>{day.text || day.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">What makes this trek different</span><h2 className="display">A route designed for walking, not rushing.</h2></div>
            <p>The page highlights realistic pace, terrain, local support and clear expectations, which makes the trek easier to trust and easier to sell.</p>
          </div>
          <div className="trek-info">
            <div className="info-strip"><SymbolIcon name="boot" /><h3>Walking rhythm</h3><p>Balanced daily stages with time for stops, tea, landscape and arrival before dark.</p></div>
            <div className="info-strip"><SymbolIcon name="map" /><h3>Route sense</h3><p>The journey shows how the terrain changes day by day, from first trail to final return.</p></div>
            <div className="info-strip"><SymbolIcon name="tent" /><h3>Camp feeling</h3><p>Nights are part of the experience, not only logistics: stars, quiet, fire, tea and rest.</p></div>
            <div className="info-strip"><SymbolIcon name="compass" /><h3>Local knowledge</h3><p>Guides, route choices and pace come from people who know the landscape directly.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div><span className="eyebrow" style={{color:"rgba(255,255,255,.7)"}}>Ready to plan</span><h2 className="display">Request this trek with your dates.</h2><p>Send your group size, dates, walking level and preferred comfort. The route can be adapted before confirmation.</p></div>
            <Link className="btn btn-light" href="/contact">Plan this trek →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
