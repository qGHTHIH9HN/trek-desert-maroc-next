import { notFound } from "next/navigation";
import Link from "next/link";
import { clean, departureOf, durationOf, getService, imageOf, priceOf } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };
export const revalidate = 120;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = await getService(slug);
  return { title: tour ? `${tour.title} | Trek Desert Maroc` : "Trek Desert Maroc" };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = await getService(slug);
  if (!tour) notFound();

  return (
    <>
      <section className="hero" style={{minHeight: "76vh"}}>
        <img src={imageOf(tour)} alt={tour.title} />
        <div className="container hero-content">
          <p className="eyebrow">Trek Maroc</p>
          <h1 className="display">{tour.title}</h1>
          <p>{clean(tour.excerpt || tour.hero_subtitle || tour.short_description || "Programme de trekking au Maroc.")}</p>
          <div className="meta">
            <span className="pill">{durationOf(tour)}</span>
            <span className="pill">{departureOf(tour)}</span>
            <span className="pill">{priceOf(tour)}</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <article className="article">
            <h2 className="display" style={{fontSize: 48}}>Le programme</h2>
            <p>{clean(tour.content || tour.description || tour.long_description || tour.excerpt || "Ce trek sera détaillé prochainement depuis l’admin.")}</p>
          </article>
          <aside className="card card-pad">
            <p className="eyebrow">Résumé</p>
            <p><strong>Durée:</strong> {durationOf(tour)}</p>
            <p><strong>Départ:</strong> {departureOf(tour)}</p>
            <p><strong>Prix:</strong> {priceOf(tour)}</p>
            <Link href="/contact" className="btn btn-primary" style={{marginTop: 20}}>Demander ce trek</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
