import Link from "next/link";
import { BlogCard } from "../components/BlogCard";
import { SymbolIcon } from "../components/SymbolIcon";
import { TourCard } from "../components/TourCard";
import { TrekMap } from "../components/TrekMap";
import { departureOf, fallbackPosts, fallbackTours, getBlogPosts, getServices, matches, mergeWithFallback } from "../lib/api";

export const revalidate = 120;

export default async function HomePage() {
  const services = await getServices({ per_page: 60 });
  const posts = await getBlogPosts({ per_page: 9 });

  const trekking = services.filter((item) => matches(item, ["trek", "hiking", "walk", "desert", "sahara", "atlas", "toubkal"]));
  const scheduled = services.filter((item) => matches(item, ["scheduled", "departure", "group"]) || departureOf(item) !== "Private dates available");

  const finalTours = mergeWithFallback(trekking.length ? trekking : services, fallbackTours, 6).slice(0, 6);
  const finalPosts = mergeWithFallback(posts, fallbackPosts, 3).slice(0, 3);

  return (
    <>
      <section className="hero">
        <TrekMap />
        <div className="container hero-content">
          <span className="eyebrow">Sahara treks • Atlas trails • day-by-day walking journeys</span>
          <h1 className="display">Morocco trekking, designed route by route.</h1>
          <p>
            Trek Desert Maroc is built for travelers looking for real walking journeys:
            Sahara desert treks, Atlas mountain routes, camel-supported trails, scheduled departures
            and yoga trekking retreats.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/treks">Explore Trek Pages →</Link>
            <Link className="btn btn-light" href="/contact">Plan My Trek</Link>
          </div>
          <div className="symbol-grid">
            {[["boot","Walking"],["map","Itinerary"],["mountain","Atlas"],["camel","Camel Support"],["tent","Camp Nights"],["difficulty","Difficulty"]].map(([icon,label]) => (
              <div className="symbol-card" key={label}><SymbolIcon name={icon} /><span>{label}</span></div>
            ))}
          </div>
        </div>
        <div className="hero-badges">
          <div className="hero-badge"><strong>Trek Pages</strong><span>Each trek has route facts, itinerary, terrain, difficulty and CTA.</span></div>
          <div className="hero-badge"><strong>Sahara</strong><span>M’Hamid, Erg Chigaga, dunes, dry riverbeds and wild camps.</span></div>
          <div className="hero-badge"><strong>Atlas</strong><span>Mountain valleys, village trails, passes and Toubkal area.</span></div>
          <div className="hero-badge"><strong>Retreats</strong><span>Yoga, walking, desert silence and mountain retreat rhythm.</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Trek system</span><h2 className="display">Not only tour cards. Real trek pages.</h2></div>
            <p>Every trek page should explain what travelers need before booking: route, walking hours, terrain, itinerary, support style, best season and who it is for.</p>
          </div>
          <div className="grid-4">
            {[["map","Day-by-day itinerary","Each trek includes a clear route rhythm and daily walking story."],["difficulty","Difficulty level","Easy, moderate or challenging with realistic walking hours."],["camel","Support style","Camel, mule, local guide, camps, meals and transport explained."],["tent","Camp/lodge nights","Desert bivouacs, camps, guesthouses or mountain lodges." ]].map(([icon,title,text]) => (
              <div className="focus-card" key={title}><span className="icon-circle"><SymbolIcon name={icon} /></span><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Featured trek pages</span><h2 className="display">Desert and mountain routes with real detail.</h2></div>
            <p>These cards lead to trek detail pages, not generic tour pages. Each one includes itinerary, terrain, walking facts and planning sections.</p>
          </div>
          <div className="grid-3">{finalTours.map((tour, index) => <TourCard key={tour.id || tour.slug || index} tour={tour} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-wide">
          <div>
            <span className="eyebrow">Before booking</span>
            <h2 className="display" style={{ fontSize: 72, margin: "16px 0" }}>Answer trekking questions before people ask.</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>A top trekking website does not only show beautiful photos. It explains the journey: how long you walk, where you sleep, what the terrain is like, what support is included, and who the trek is right for.</p>
          </div>
          <div className="route-steps">
            {[["01","Route overview","Sahara, Atlas, village paths, dunes, plateaus or retreat trails."],["02","Daily rhythm","Walking hours, pace, rest stops, tea breaks and camp arrival."],["03","Support & comfort","Guides, camel/mule support, meals, camps, lodges and transfers."],["04","Best fit","Difficulty, best season, group type and recommended preparation."]].map(([number,title,text]) => (
              <div className="route-step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Trek essentials</span><h2 className="display">Visual identity: desert, mountains, trail symbols.</h2></div>
            <p>The site now uses desert/mountain visual blocks, map lines, trekking icons and route logic so every corner feels connected to walking Morocco.</p>
          </div>
          <div className="trek-info">
            {[["mountain","Terrain","Dunes, rocky plateaus, valleys, passes and village paths."],["boot","Walking Hours","Clear daily walking rhythm and realistic pace information."],["camel","Support","Camel or mule support depending on the region and route."],["tent","Nights","Desert camps, bivouacs, guesthouses or mountain lodges."]].map(([icon,title,text]) => (
              <div className="info-strip" key={title}><SymbolIcon name={icon} /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div><span className="eyebrow" style={{color:"rgba(255,255,255,.7)"}}>Custom trek planning</span><h2 className="display">Need a route built around your dates?</h2><p>Ask for a private Sahara trek, Atlas walking journey, scheduled departure or yoga trekking retreat.</p></div>
            <Link className="btn btn-light" href="/contact">Plan a Trek →</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Trekking blog</span><h2 className="display">Guides that support trek bookings.</h2></div>
            <p>Blog content should answer real trekking questions: seasons, packing, walking difficulty, Sahara vs Atlas and yoga trekking retreats.</p>
          </div>
          <div className="grid-3">{finalPosts.map((post, index) => <BlogCard key={post.id || post.slug || index} post={post} />)}</div>
        </div>
      </section>
    </>
  );
}
