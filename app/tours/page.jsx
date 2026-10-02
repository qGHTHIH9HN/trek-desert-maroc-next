import { SymbolIcon } from "../../components/SymbolIcon";
import { TourCard } from "../../components/TourCard";
import { departureOf, fallbackTours, getServices, matches, mergeWithFallback } from "../../lib/api";

export const revalidate = 120;

function TourSection({ title, subtitle, items }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Treks</span>
            <h2 className="display">{title}</h2>
          </div>
          <p>{subtitle}</p>
        </div>
        <div className="grid-3">
          {items.map((tour, index) => <TourCard key={tour.id || tour.slug || index} tour={tour} />)}
        </div>
      </div>
    </section>
  );
}

export default async function ToursPage() {
  const services = await getServices({ per_page: 100 });
  const all = mergeWithFallback(services, fallbackTours, 8);

  const trekking = mergeWithFallback(all.filter((item) => matches(item, ["trek", "hiking", "walk", "desert", "sahara", "atlas", "toubkal"])), fallbackTours, 6);
  const scheduled = all.filter((item) => matches(item, ["scheduled", "departure", "group"]) || departureOf(item) !== "Private dates available");
  const yoga = mergeWithFallback(all.filter((item) => matches(item, ["yoga", "retreat", "wellness"])), fallbackTours.filter((item) => String(item.title).toLowerCase().includes("yoga")), 3);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Treks & Tours</span>
          <h1 className="display">A trekking catalog, not a generic tour list.</h1>
          <p>
            Tours are organized by trekking intent: Sahara walking, Atlas mountain trails, scheduled departures,
            yoga trekking retreats and private tailor-made programs.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid-4">
            {[
              ["boot", "Walking Focus", "Every card highlights route, rhythm, duration and departure style."],
              ["mountain", "Atlas + Sahara", "The site separates mountain and desert trekking experiences."],
              ["compass", "Route Choice", "Travelers can understand what kind of trek fits them."],
              ["yoga", "Retreat Ready", "Yoga trek retreats are treated as future scheduled programs."]
            ].map(([icon, title, text]) => (
              <div className="focus-card" key={title}>
                <span className="icon-circle"><SymbolIcon name={icon} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TourSection title="Sahara & Atlas Trekking Tours" subtitle="Core walking journeys for travelers looking specifically for trekking in Morocco." items={trekking.slice(0, 9)} />
      <TourSection title="Scheduled Departures" subtitle="Fixed-date group journeys will appear here when you add departure dates in the admin." items={(scheduled.length ? scheduled : fallbackTours.filter((item) => item.badge === "Scheduled")).slice(0, 6)} />
      <TourSection title="Yoga, Trekking & Retreat Tours" subtitle="Future retreat programs combining yoga, walking, desert silence and mountain landscapes." items={yoga.slice(0, 6)} />
      <TourSection title="Private Tailor-Made Treks" subtitle="Flexible Morocco trekking programs for couples, families, friends and small private groups." items={all.slice(0, 9)} />
    </>
  );
}
