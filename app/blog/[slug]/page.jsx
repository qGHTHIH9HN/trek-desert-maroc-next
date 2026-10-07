import { getPost, cleanText } from "../../../lib/api";
import { TrekVisual } from "../../../components/Visual";

export const revalidate = 120;

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <section className="section"><div className="container"><div className="notice">Article not found in the PHP API.</div></div></section>;
  }

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 920 }}>
        <span className="eyebrow">Trekking Guide</span>
        <h1 className="display" style={{ fontSize: 72, margin: "18px 0" }}>{post.title}</h1>
        <TrekVisual item={post} large />
        <div style={{ fontSize: 18, lineHeight: 1.9, color: "var(--muted)", marginTop: 34 }}>
          {post.content ? <div dangerouslySetInnerHTML={{ __html: post.content }} /> : cleanText(post.description || post.excerpt)}
        </div>
      </div>
    </article>
  );
}
