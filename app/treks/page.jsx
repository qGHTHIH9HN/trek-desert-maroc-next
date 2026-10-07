import { TourCard } from "../../components/TourCard";
import { SymbolIcon } from "../../components/SymbolIcon";
import { fallbackTours, getServices, matches, mergeWithFallback } from "../../lib/api";

export const revalidate = 120;

export default async function TreksPage() {
  const services = await getServices({ per_page: 100 });
  const all = mergeWithFallback(services, fallbackTours, 8);
  const sahara = all.filter((item) => matches(item, ["sahara", "desert", "mhamid", "chigaga", "nomad", "camel"]));
  const atlas = all.filter((item) => matches(item, ["atlas", "mountain", "toubkal", "valley"]));
  const retreat = all.filter((item) => matches(item, ["yoga", "retreat", "wellness"]));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Trek pages</span>
          <h1 className="display">Trekking routes with itinerary, terrain and walking details.</h1>
          <p>This is the main trekking catalog. Every card opens a detailed trek page with day-by-day itinerary and practical walking information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-4">
            {[["boot","Walking-focused","Every page explains walking hours, level and terrain."],["map","Itinerary","Day-by-day route structure for travelers."],["tent","Camp/Lodge","Where travelers sleep and how the support works."],["compass","Planning","Best season, who it suits and CTA to request."]].map(([icon,title,text]) => (
              <div className="focus-card" key={title}><span className="icon-circle"><SymbolIcon name={icon} /></span><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Sahara trek pages</span><h2 className="display">Desert walking routes.</h2></div><p>M’Hamid, Erg Chigaga, dunes, nomadic trails, camel-supported treks and desert camps.</p></div>
          <div className="grid-3">{(sahara.length ? sahara : all).slice(0, 6).map((tour, index) => <TourCard key={tour.id || tour.slug || index} tour={tour} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Atlas trek pages</span><h2 className="display">Mountain walking journeys.</h2></div><p>High Atlas valleys, village trails, mountain passes and Toubkal region routes.</p></div>
          <div className="grid-3">{(atlas.length ? atlas : fallbackTours.filter(t => String(t.title).toLowerCase().includes("atlas") || String(t.title).toLowerCase().includes("toubkal"))).map((tour, index) => <TourCard key={tour.id || tour.slug || index} tour={tour} />)}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Yoga trek retreat pages</span><h2 className="display">Retreats built around walking.</h2></div><p>Future retreat programs combining yoga, desert silence, mountain routes and mindful trekking.</p></div>
          <div className="grid-3">{(retreat.length ? retreat : fallbackTours.filter(t => String(t.title).toLowerCase().includes("yoga"))).map((tour, index) => <TourCard key={tour.id || tour.slug || index} tour={tour} />)}</div>
        </div>
      </section>
    </>
  );
}
