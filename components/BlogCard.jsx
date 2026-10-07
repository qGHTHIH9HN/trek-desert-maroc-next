import Link from "next/link";
import { SymbolIcon } from "./SymbolIcon";
import { TrekVisual } from "./Visual";
import { blogUrl, cleanText } from "../lib/api";

export function BlogCard({ post }) {
  return (
    <Link href={blogUrl(post)} className="blog-card guide-card">
      <TrekVisual item={post} />
      <div className="card-body">
        <span className="eyebrow">Trekking Guide</span>
        <h3>{post.title || "Morocco Trekking Guide"}</h3>
        <p>{cleanText(post.excerpt || post.description || post.content || "Practical trekking advice for Morocco.").slice(0, 185)}</p>
        <span className="card-flag"><SymbolIcon name="map" /> Read trekking guide →</span>
      </div>
    </Link>
  );
}
