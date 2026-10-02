import Link from "next/link";
import { AnyItem, blogUrl, clean, imageOf } from "@/lib/api";

export function BlogCard({ post }: { post: AnyItem }) {
  return (
    <Link href={blogUrl(post)} className="card" style={{display: "block"}}>
      <img src={imageOf(post)} alt={post.title || "Guide trek Maroc"} className="tour-image" />
      <div className="card-pad">
        <p className="eyebrow">Guide Trekking</p>
        <h3 style={{fontSize: 24, lineHeight: 1.15, margin: "12px 0"}}>{post.title}</h3>
        <p className="muted">{clean(post.excerpt || post.description || post.content || "Guide trekking au Maroc.").slice(0, 170)}</p>
      </div>
    </Link>
  );
}
