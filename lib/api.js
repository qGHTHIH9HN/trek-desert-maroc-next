const API_BASE = process.env.NEXT_PUBLIC_PHP_API_BASE || "https://desertbrise-travel.com/public/api";

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") query.set(key, String(value));
  });
  const output = query.toString();
  return output ? `?${output}` : "";
}

export async function getJson(path, revalidate = 120) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate },
      headers: { Accept: "application/json" }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export function itemsFrom(data) {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  return data.items || data.data || data.services || data.posts || [];
}

export async function getServices(params = {}) {
  const data = await getJson(`/services.php${buildQuery(params)}`);
  return itemsFrom(data);
}

export async function getBlogPosts(params = {}) {
  const data = await getJson(`/blog.php${buildQuery(params)}`);
  return itemsFrom(data);
}

export async function getService(slug) {
  const data = await getJson(`/service.php?slug=${encodeURIComponent(slug)}`);
  return data?.service || data?.item || data?.data || null;
}

export async function getPost(slug) {
  const data = await getJson(`/post.php?slug=${encodeURIComponent(slug)}`);
  return data?.post || data?.item || data?.data || null;
}

export function cleanText(value) {
  return String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function matches(item, terms) {
  const text = `${item?.title || ""} ${item?.name || ""} ${item?.slug || ""} ${item?.excerpt || ""} ${item?.description || ""} ${item?.location || ""} ${item?.category || ""}`.toLowerCase();
  return terms.some((term) => text.includes(term));
}

export function imageOf(item) {
  return (
    item?.image ||
    item?.hero_image ||
    item?.featured_image ||
    item?.thumbnail ||
    ""
  );
}

export function visualClass(item) {
  const text = `${item?.title || ""} ${item?.slug || ""} ${item?.excerpt || ""}`.toLowerCase();
  if (text.includes("atlas") || text.includes("mountain") || text.includes("toubkal")) return "visual-mountain";
  if (text.includes("yoga") || text.includes("retreat")) return "visual-retreat";
  if (text.includes("camel") || text.includes("nomad")) return "visual-nomad";
  return "visual-desert";
}

export function tourUrl(item) {
  if (item?.url) return item.url;
  if (item?.slug) return `/tour/${item.slug}`;
  return "/contact";
}

export function blogUrl(item) {
  if (item?.url) return item.url;
  if (item?.slug) return `/blog/${item.slug}`;
  return "/blog";
}

export function durationOf(item) {
  return item?.duration || item?.days || item?.length || "Tailor-made";
}

export function departureOf(item) {
  return (
    item?.next_departure ||
    item?.next_departure_date ||
    item?.departure_date ||
    item?.departures ||
    item?.scheduled_departures ||
    item?.schedule ||
    item?.dates ||
    "Private dates available"
  );
}

export function priceOf(item) {
  if (item?.price_from) return `From ${item.price_from}`;
  if (item?.price) return `From ${item.price}`;
  return "On request";
}

export function mergeWithFallback(realItems, fallbackItems, minCount = 6) {
  const used = new Set(realItems.map((item) => item.slug || item.title));
  const extra = fallbackItems.filter((item) => !used.has(item.slug || item.title));
  return [...realItems, ...extra].slice(0, Math.max(minCount, realItems.length));
}

export const fallbackTours = [
  {
    title: "M’Hamid Sahara Trek",
    slug: "mhamid-sahara-trek",
    excerpt: "A walking journey from the edge of the Sahara into dunes, dry riverbeds and nomadic desert landscapes.",
    duration: "4–5 days",
    next_departure: "Private dates available",
    badge: "Sahara"
  },
  {
    title: "Erg Chigaga Desert Trek",
    slug: "erg-chigaga-desert-trek",
    excerpt: "A deeper desert route toward Erg Chigaga with wild camps, camel support and long silent horizons.",
    duration: "5–7 days",
    next_departure: "Private dates available",
    badge: "Deep Desert"
  },
  {
    title: "Atlas Mountain Village Trek",
    slug: "atlas-mountain-village-trek",
    excerpt: "Walk through High Atlas valleys, stone villages, terraces and mountain passes with local guides.",
    duration: "3–6 days",
    next_departure: "Private dates available",
    badge: "Atlas"
  },
  {
    title: "Toubkal & Berber Valleys Trek",
    slug: "toubkal-berber-valleys-trek",
    excerpt: "A mountain trekking program around Toubkal landscapes, village life and panoramic trails.",
    duration: "4–6 days",
    next_departure: "Private dates available",
    badge: "Mountain"
  },
  {
    title: "Yoga & Desert Trek Retreat",
    slug: "yoga-desert-trek-retreat",
    excerpt: "A future retreat combining morning movement, Sahara walking, camp evenings and space to reset.",
    duration: "7 days",
    next_departure: "Planned future departure",
    badge: "Retreat"
  },
  {
    title: "Scheduled Small Group Sahara Trek",
    slug: "scheduled-small-group-sahara-trek",
    excerpt: "A planned fixed-date departure for travelers who want to join a small trekking group in Morocco.",
    duration: "5 days",
    next_departure: "Dates coming soon",
    badge: "Scheduled"
  },
  {
    title: "Nomad Trails Trek",
    slug: "nomad-trails-trek",
    excerpt: "A cultural desert walk shaped around nomadic routes, tea stops, camp life and desert storytelling.",
    duration: "4 days",
    next_departure: "Private dates available",
    badge: "Nomad"
  },
  {
    title: "Family Desert Walking Journey",
    slug: "family-desert-walking-journey",
    excerpt: "A gentle private desert walking program for families, with shorter stages and flexible camp comfort.",
    duration: "3–4 days",
    next_departure: "Private dates available",
    badge: "Family"
  }
];

export const fallbackPosts = [
  {
    title: "Best Time for Trekking in Morocco",
    slug: "best-time-for-trekking-in-morocco",
    excerpt: "A practical guide to Sahara and Atlas trekking seasons, temperatures and route choice."
  },
  {
    title: "What to Pack for a Sahara Trek",
    slug: "what-to-pack-for-sahara-trek",
    excerpt: "Essential packing advice for walking, camping and staying comfortable in desert conditions."
  },
  {
    title: "Desert Trek or Atlas Trek?",
    slug: "desert-trek-or-atlas-trek",
    excerpt: "How to choose between Sahara silence and Atlas mountain trails for your Morocco walking journey."
  },
  {
    title: "How Difficult Is a Morocco Desert Trek?",
    slug: "morocco-desert-trek-difficulty",
    excerpt: "A simple explanation of walking hours, terrain, heat, pacing and fitness level."
  },
  {
    title: "Camel Supported Trekking Explained",
    slug: "camel-supported-trekking-morocco",
    excerpt: "How camel support works on a desert trek and what travelers carry each day."
  },
  {
    title: "Yoga and Trekking in Morocco",
    slug: "yoga-and-trekking-morocco",
    excerpt: "How retreat-style trekking combines movement, silence, landscapes and local hospitality."
  }
];
