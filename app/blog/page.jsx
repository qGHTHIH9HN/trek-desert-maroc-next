import { BlogCard } from "../../components/BlogCard";
import { SymbolIcon } from "../../components/SymbolIcon";
import { fallbackPosts, getBlogPosts, mergeWithFallback } from "../../lib/api";

export const revalidate = 120;

export default async function BlogPage() {
  const posts = await getBlogPosts({ per_page: 60 });
  const finalPosts = mergeWithFallback(posts, fallbackPosts, 6);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Trekking Blog</span>
          <h1 className="display">A blog built around trekking questions.</h1>
          <p>
            The content direction should educate travelers before they book: seasons, terrain, walking hours,
            packing, difficulty, desert vs mountain and yoga trekking retreats.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-4">
            {[
              ["sun", "Best Season", "When to trek in the Sahara or Atlas depending on heat, snow and comfort."],
              ["boot", "Difficulty", "Walking hours, pace, terrain and fitness level explained simply."],
              ["tent", "Packing", "What to carry, what support handles and how to prepare."],
              ["map", "Route Choice", "How to choose Sahara, Atlas, Toubkal, nomadic trails or retreats."]
            ].map(([icon, title, text]) => (
              <div className="focus-card" key={title}>
                <span className="icon-circle"><SymbolIcon name={icon} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Latest trekking guides</span>
              <h2 className="display">Content that supports bookings.</h2>
            </div>
            <p>
              If the admin has few blog posts now, planned content cards keep the site visually complete until you publish more guides.
            </p>
          </div>
          <div className="grid-3">
            {finalPosts.map((post, index) => <BlogCard key={post.id || post.slug || index} post={post} />)}
          </div>
        </div>
      </section>
    </>
  );
}
