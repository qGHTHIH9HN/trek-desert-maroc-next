import Link from "next/link";
import { SymbolIcon } from "./SymbolIcon";
import { blogUrl, cleanText, imageOf, visualClass } from "../lib/api";

export function BlogCard({ post }) {
  const image = imageOf(post);

  return (
    <Link href={blogUrl(post)} className="blog-card">
      <div className={`visual ${visualClass(post)}`}>
        {image ? <img src={image} alt={post.title || "Morocco trekking guide"} /> : null}
        <span className="symbol-float"><SymbolIcon name="map" /></span>
      </div>

      <div className="card-body">
        <span className="eyebrow">Trekking Guide</span>
        <h3>{post.title || "Morocco Trekking Guide"}</h3>
        <p>{cleanText(post.excerpt || post.description || post.content || "Practical trekking advice for Morocco.").slice(0, 180)}</p>
        <span className="card-flag">Read guide</span>
      </div>
    </Link>
  );
}
