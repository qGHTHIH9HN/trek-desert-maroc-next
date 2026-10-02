import { cleanText, getPost, imageOf, visualClass } from "../../../lib/api";

export const revalidate = 120;

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <div className="notice">Article not found in the PHP API.</div>
        </div>
      </section>
    );
  }

  const image = imageOf(post);

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 920 }}>
        <span className="eyebrow">Trekking Guide</span>
        <h1 className="display" style={{ fontSize: 72, margin: "18px 0" }}>{post.title}</h1>
        <div className={`visual ${visualClass(post)}`} style={{ height: 460 }}>
          {image ? <img src={image} alt={post.title} /> : null}
        </div>
        <div style={{ fontSize: 18, lineHeight: 1.9, color: "var(--muted)", marginTop: 34 }}>
          {post.content ? <div dangerouslySetInnerHTML={{ __html: post.content }} /> : cleanText(post.description || post.excerpt)}
        </div>
      </div>
    </article>
  );
}
