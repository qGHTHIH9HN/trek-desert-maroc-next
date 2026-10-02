import { TourCard } from "@/components/TourCard";
import { categorizeTours, getServices } from "@/lib/api";

export const revalidate = 120;
export const metadata = { title: "Treks au Maroc | Trek Desert Maroc" };

function TourSection({ title, text, items }: { title: string; text: string; items: any[] }) {
  if (!items.length) return null;
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Treks</p>
        <h2 className="display" style={{fontSize: "clamp(42px, 6vw, 72px)", lineHeight: .95, margin: "12px 0"}}>{title}</h2>
        <p className="muted" style={{maxWidth: 760}}>{text}</p>
        <div className="grid grid-3" style={{marginTop: 40}}>
          {items.map((tour, index) => <TourCard key={tour.id || tour.slug || index} tour={tour} index={index} />)}
        </div>
      </div>
    </section>
  );
}

export default async function ToursPage() {
  const services = await getServices(100);
  const cats = categorizeTours(services);
  const all = cats.trekking.length ? cats.trekking : services;

  return (
    <>
      <section className="hero" style={{minHeight: "70vh"}}>
        <img src="https://desertbrise-travel.com/public/assets/images/og-default.jpg" alt="Treks au Maroc" />
        <div className="container hero-content">
          <p className="eyebrow">Tous les programmes</p>
          <h1 className="display">Treks au Maroc, départs privés et futures dates programmées.</h1>
          <p>Une page tournée vers le trekking: Sahara, M’Hamid, Erg Chigaga, Atlas, Toubkal, yoga trek et petits groupes.</p>
        </div>
      </section>
      <TourSection title="Treks dans le désert marocain" text="Programmes Sahara, M’Hamid, Erg Chigaga, dunes, bivouacs et marche nomade." items={(cats.desert.length ? cats.desert : all).slice(0, 9)} />
      <TourSection title="Treks Atlas & Toubkal" text="Randonnées de montagne, villages, vallées, sentiers berbères et ascension du Toubkal." items={cats.atlas.slice(0, 9)} />
      <TourSection title="Départs programmés" text="Section prête pour les futures dates fixes. Ajoute les dates dans l’admin quand les tours sont planifiés." items={cats.scheduled.slice(0, 9)} />
      <TourSection title="Yoga Trek & Retraites" text="Programmes futurs mêlant yoga, marche, désert, montagne, souffle et retour à soi." items={cats.yoga.slice(0, 9)} />
    </>
  );
}
