import Link from "next/link";
import { SymbolIcon } from "../../components/SymbolIcon";

export default function YogaTrekRetreatPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">Yoga • Trekking • Morocco Retreats</span>
          <h1 className="display">Yoga retreats that still feel like trekking journeys.</h1>
          <p>
            This page is for planned future programs: Morocco Yoga Trek Retreat, Desert Yoga Trek Retreat
            and Atlas Mountain Yoga Retreat, each with landscape, rhythm and departure possibilities.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">Plan a Retreat →</Link>
            <Link className="btn btn-light" href="/tours">View Trekking Tours</Link>
          </div>
          <div className="symbol-grid">
            {[
              ["yoga", "Yoga"],
              ["boot", "Walking"],
              ["sun", "Sunrise"],
              ["tent", "Camp"],
              ["mountain", "Atlas"],
              ["compass", "Route"]
            ].map(([icon, label]) => (
              <div className="symbol-card" key={label}>
                <SymbolIcon name={icon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="route-card">
            <span className="icon-circle"><SymbolIcon name="sun" /></span>
            <h3>Desert Yoga Trek Retreat</h3>
            <p>Sahara silence, sunrise movement, mindful walking, camp nights and fire circles.</p>
          </div>
          <div className="route-card">
            <span className="icon-circle"><SymbolIcon name="mountain" /></span>
            <h3>Atlas Mountain Yoga Retreat</h3>
            <p>Fresh air, valley walks, village hospitality and mountain stillness.</p>
          </div>
          <div className="route-card">
            <span className="icon-circle"><SymbolIcon name="compass" /></span>
            <h3>Private Teacher Retreats</h3>
            <p>Logistics and local support for yoga teachers bringing a private group.</p>
          </div>
        </div>
      </section>
    </>
  );
}
