import Link from "next/link";
import { TourCard } from "../components/TourCard";
import { BlogCard } from "../components/BlogCard";
import { categorizeTours, getPosts, getServices, imageOf, matchText } from "../lib/api";

export const revalidate = 120;

export default async function HomePage() {
  const services = await getServices(100);
  const posts = await getPosts(9);
  const cats = categorizeTours(services);
  const featured = (cats.trekking.length ? cats.trekking : services).slice(0, 6);

  return (
    <>
      <section className="hero">
        <img src={imageOf(featured[0] || {})} alt="Trek désert Maroc" />
        <div className="container hero-content">
          <p className="eyebrow">Trek désert Maroc • Sahara • Atlas • Yoga Trek</p>
          <h1 className="display">Le Maroc se découvre en marchant.</h1>
          <p>Treks dans le désert marocain, randonnées dans l’Atlas, départs programmés, voyages privés et retraites yoga trek — avec une approche locale, humaine et spécialiste du terrain.</p>
          <div style={{display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34}}>
            <Link href="/tours" className="btn btn-primary">Voir les treks →</Link>
            <Link href="/yoga-trek-retreat-maroc" className="btn btn-light">Yoga Trek & Retraites</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-4">
          {[
            ["Désert & Sahara", "M’Hamid, Erg Chigaga, dunes, plateaux, bivouacs et marche nomade."],
            ["Atlas & Toubkal", "Villages berbères, vallées, sentiers de montagne et ascension du Toubkal."],
            ["Départs programmés", "Futures dates fixes pour petits groupes et départs saisonniers."],
            ["Yoga Trek", "Retraites futures mêlant marche, silence, souffle, yoga et désert."],
          ].map(([title, text]) => (
            <div className="card card-pad" key={title}>
              <p className="eyebrow">Spécialité</p>
              <h2>{title}</h2>
              <p className="muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background: "var(--soft)"}}>
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Treks sélectionnés</p>
              <h2 className="display" style={{fontSize: "clamp(44px, 6vw, 78px)", lineHeight: .95, margin: "16px 0"}}>Des programmes construits autour de la marche.</h2>
            </div>
            <p className="muted">Chaque trek doit montrer clairement son rythme, sa durée, son style de départ, ses paysages et son niveau. Le site est prêt pour les départs programmés dès que tu ajoutes les dates dans l’admin.</p>
          </div>
          <div className="grid grid-3" style={{marginTop: 44}}>
            {featured.map((tour, index) => <TourCard key={tour.id || tour.slug || index} tour={tour} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split">
          <div>
            <p className="eyebrow">Yoga trek & retraites</p>
            <h2 className="display" style={{fontSize: "clamp(44px, 6vw, 74px)", lineHeight: .95}}>Une future ligne de retraites liées au désert et à la montagne.</h2>
            <p className="muted">Le site prévoit déjà les pages pour les retraites yoga: Maroc, désert et Atlas. Elles pourront devenir de vrais tours avec dates, programmes et départs planifiés.</p>
            <Link href="/yoga-trek-retreat-maroc" className="btn btn-primary" style={{marginTop: 24}}>Voir Yoga Trek</Link>
          </div>
          <div className="grid">
            {[
              "Retraite yoga désert Maroc",
              "Yoga trek M’Hamid & Erg Chigaga",
              "Retraite yoga Atlas Maroc",
            ].map((title) => (
              <div className="card-pad" style={{border: "1px solid rgba(255,255,255,.16)", borderRadius: 28, background: "rgba(255,255,255,.08)"}} key={title}>
                <h3>{title}</h3>
                <p className="muted">Programme futur: marche, yoga, respiration, silence, culture locale et immersion nature.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display: "flex", justifyContent: "space-between", gap: 24, alignItems: "end", flexWrap: "wrap"}}>
            <div>
              <p className="eyebrow">Blog trekking</p>
              <h2 className="display" style={{fontSize: "clamp(44px, 6vw, 72px)", margin: "12px 0"}}>Guides utiles pour préparer un trek au Maroc.</h2>
            </div>
            <Link href="/blog" className="btn btn-dark">Lire le blog</Link>
          </div>
          <div className="grid grid-3" style={{marginTop: 40}}>
            {posts.slice(0, 3).map((post, index) => <BlogCard key={post.id || post.slug || index} post={post} />)}
          </div>
        </div>
      </section>
    </>
  );
}
