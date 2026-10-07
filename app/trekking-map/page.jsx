import { routes } from "../../lib/routes";
import { RouteMapImage } from "../../components/RouteMap";

export default function TrekkingMapPage() {
  const route = routes[0];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Trekking map</span>
          <h1>Map language for Trek Desert Maroc.</h1>
          <p>This page shows the style direction: terrain-first, satellite-inspired, route-based and stage-focused.</p>
        </div>
      </section>
      <section className="map-section">
        <div className="container">
          <RouteMapImage route={route} />
        </div>
      </section>
    </>
  );
}
