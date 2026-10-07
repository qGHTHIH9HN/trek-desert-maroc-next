import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoute, nearbyRoutes } from "../../../lib/routes";
import { RouteMapImage, ElevationProfile } from "../../../components/RouteMap";
import { RouteCard } from "../../../components/RouteCard";

export default async function RoutePage({ params }) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const nearby = nearbyRoutes(route.slug);

  return (
    <>
      <section className="route-hero">
        <div className="container route-hero-grid">
          <div>
            <span className="eyebrow">{route.region}</span>
            <h1>{route.title}</h1>
            <p>{route.subtitle}</p>
            <div className="actions">
              <Link className="btn primary" href="/contact">Plan this trek</Link>
              <Link className="btn secondary" href="/routes">All routes</Link>
            </div>
          </div>
          <div className="route-summary">
            <strong>{route.start} → {route.finish}</strong>
            <span>{route.duration}</span>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <RouteMapImage route={route} />
        </div>
      </section>

      <section className="section">
        <div className="container specs-grid">
          <div><span>Duration</span><strong>{route.duration}</strong></div>
          <div><span>Distance</span><strong>{route.distance}</strong></div>
          <div><span>Difficulty</span><strong>{route.difficulty}</strong></div>
          <div><span>Walking</span><strong>{route.walking}</strong></div>
          <div><span>Terrain</span><strong>{route.terrain}</strong></div>
          <div><span>Support</span><strong>{route.support}</strong></div>
          <div><span>Best season</span><strong>{route.bestSeason}</strong></div>
          <div><span>Altitude</span><strong>{route.altitude}</strong></div>
        </div>
      </section>

      <section className="section warm">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Day-by-day stages</span>
            <h2>Route itinerary</h2>
            <p>Stage cards should feel like a trekking file, not a generic tour description.</p>
          </div>
          <div className="day-grid">
            {route.days.map(day => (
              <article className="day-card" key={day.day}>
                <div className="day-image"><span>{day.day}</span></div>
                <div className="day-body">
                  <h3>{day.title}</h3>
                  <p>{day.text}</p>
                  <div className="day-meta">
                    <span>{day.distance}</span>
                    <span>{day.walking}</span>
                    <span>{day.terrain}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ElevationProfile route={route} />
        </div>
      </section>

      <section className="section warm">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Route highlights</span>
            <h2>Why this trek matters</h2>
          </div>
          <div className="highlight-grid">
            {route.highlights.map(item => <div key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      {nearby.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Nearby route files</span>
              <h2>Related routes</h2>
            </div>
            <div className="route-grid">
              {nearby.map(item => <RouteCard key={item.slug} route={item} />)}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
