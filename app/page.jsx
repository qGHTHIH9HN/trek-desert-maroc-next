import Link from "next/link";
import { routes } from "../lib/routes";
import { RouteCard } from "../components/RouteCard";
import { RouteMapImage } from "../components/RouteMap";

export default function HomePage() {
  const mainRoute = routes[0];

  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Route Atlas Visual System</span>
            <h1>M’Hamid desert trekking, mapped like a real expedition.</h1>
            <p>
              Trek Desert Maroc should become a route-atlas platform: satellite-style maps,
              desert ground texture, waypoints, walking stages, elevation profiles and route files.
            </p>
            <div className="actions">
              <Link className="btn primary" href={`/routes/${mainRoute.slug}`}>Open M’Hamid Loop</Link>
              <Link className="btn secondary" href="/routes">View Routes</Link>
            </div>
          </div>
          <RouteMapImage route={mainRoute} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Main route file</span>
            <h2>The map becomes the website, not decoration.</h2>
            <p>Every future route should have a visual map, stage cards, profile, statistics, logistics and route notes.</p>
          </div>
          <div className="route-grid">
            {routes.map(route => <RouteCard key={route.slug} route={route} />)}
          </div>
        </div>
      </section>
    </>
  );
}
