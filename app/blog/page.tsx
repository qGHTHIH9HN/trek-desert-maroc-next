import { BlogCard } from "@/components/BlogCard";
import { getPosts, matchText } from "@/lib/api";

export const revalidate = 120;
export const metadata = { title: "Blog Trek Maroc | Trek Desert Maroc" };

export default async function BlogPage() {
  const posts = await getPosts(80);
  const trekking = posts.filter((post) => matchText(post, ["trek", "désert", "sahara", "atlas", "toubkal", "randonnée", "maroc"]));
  const main = trekking.length ? trekking : posts;

  return (
    <>
      <section className="hero" style={{minHeight: "70vh"}}>
        <img src="https://desertbrise-travel.com/public/assets/images/og-default.jpg" alt="Blog trek Maroc" />
        <div className="container hero-content">
          <p className="eyebrow">Blog Trek Desert Maroc</p>
          <h1 className="display">Guides pour préparer un trek au Maroc.</h1>
          <p>Sahara, M’Hamid, Erg Chigaga, Atlas, Toubkal, saisons, préparation, difficulté, équipement et yoga trek.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {main.slice(0, 12).map((post, index) => <BlogCard key={post.id || post.slug || index} post={post} />)}
        </div>
      </section>
    </>
  );
}
