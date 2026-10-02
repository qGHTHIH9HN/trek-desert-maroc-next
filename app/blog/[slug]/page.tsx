import { notFound } from "next/navigation";
import { clean, getPost, imageOf } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };
export const revalidate = 120;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post ? `${post.title} | Trek Desert Maroc` : "Blog Trek Desert Maroc" };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="hero" style={{minHeight: "70vh"}}>
        <img src={imageOf(post)} alt={post.title} />
        <div className="container hero-content">
          <p className="eyebrow">Guide Trekking</p>
          <h1 className="display">{post.title}</h1>
          <p>{clean(post.excerpt || post.description || "Guide trekking au Maroc.")}</p>
        </div>
      </section>
      <section className="section">
        <article className="container article">
          <p>{clean(post.content || post.description || post.excerpt || "Article à compléter depuis l’admin.")}</p>
        </article>
      </section>
    </>
  );
}
