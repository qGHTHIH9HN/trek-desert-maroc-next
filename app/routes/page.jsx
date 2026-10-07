import { routes } from "../../lib/routes";
import { RouteCard } from "../../components/RouteCard";

export default function RoutesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Route files</span>
          <h1>Morocco trekking route atlas.</h1>
          <p>Each route page is designed as a complete trekking file with map, stages, route stats and planning notes.</p>
        </div>
      </section>
      <section className="section">
        <div className="container route-grid">
          {routes.map(route => <RouteCard key={route.slug} route={route} />)}
        </div>
      </section>
    </>
  );
}
