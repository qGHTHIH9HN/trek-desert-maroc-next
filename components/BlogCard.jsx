import Link from "next/link";
import { SymbolIcon } from "./SymbolIcon";
import { blogUrl, cleanText, imageOf, visualClass } from "../lib/api";
function topicFor(post) { const text = `${post.title || ""} ${post.slug || ""} ${post.excerpt || ""}`.toLowerCase(); if (text.includes("pack")) return "Packing"; if (text.includes("time") || text.includes("season")) return "Season"; if (text.includes("atlas")) return "Atlas"; if (text.includes("yoga")) return "Retreat"; return "Trekking"; }
export function BlogCard({ post }) {
  const image = imageOf(post);
  return <Link href={blogUrl(post)} className="blog-card guide-card"><div className={`visual ${visualClass(post)}`}>{image ? <img src={image} alt={post.title || "Morocco trekking guide"}/> : null}<span className="symbol-float"><SymbolIcon name="map"/></span></div><div className="card-body"><span className="eyebrow">{topicFor(post)} Guide</span><h3>{post.title || "Morocco Trekking Guide"}</h3><p>{cleanText(post.excerpt || post.description || post.content || "Practical trekking advice for Morocco.").slice(0,185)}</p><span className="card-flag">Read trekking guide →</span></div></Link>;
}
