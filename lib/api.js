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
  return item?.image || item?.hero_image || item?.featured_image || item?.thumbnail || "";
}

export function visualType(item) {
  const text = `${item?.title || ""} ${item?.slug || ""} ${item?.excerpt || ""}`.toLowerCase();
  if (text.includes("atlas") || text.includes("mountain") || text.includes("toubkal")) return "mountain";
  if (text.includes("yoga") || text.includes("retreat")) return "retreat";
  if (text.includes("nomad") || text.includes("camel")) return "nomad";
  return "desert";
}

export function tourUrl(item) {
  if (item?.url) return item.url;
  if (item?.slug) return `/treks/${item.slug}`;
  return "/contact";
}

export function oldTourUrl(item) {
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

export function difficultyOf(item) {
  const text = `${item?.title || ""} ${item?.slug || ""} ${item?.excerpt || ""}`.toLowerCase();
  if (text.includes("toubkal") || text.includes("summit")) return "Challenging";
  if (text.includes("family") || text.includes("gentle")) return "Easy";
  if (text.includes("atlas") || text.includes("chigaga")) return "Moderate";
  return "Moderate";
}

export function terrainOf(item) {
  const type = visualType(item);
  if (type === "mountain") return "Mountain trails, valleys, passes";
  if (type === "retreat") return "Gentle trails, desert silence, retreat rhythm";
  if (type === "nomad") return "Nomadic tracks, dunes, dry riverbeds";
  return "Dunes, hamada, dry riverbeds";
}

export function walkingHoursOf(item) {
  const diff = difficultyOf(item);
  if (diff === "Challenging") return "5–7 hrs/day";
  if (diff === "Easy") return "2–4 hrs/day";
  return "4–6 hrs/day";
}

export function supportOf(item) {
  const type = visualType(item);
  if (type === "mountain") return "Local guide + mule support when needed";
  return "Local guide + camel support";
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
    excerpt: "A walking journey from the edge of the Sahara into dunes, dry riverbeds, tamarisk trees and nomadic desert landscapes.",
    duration: "4–5 days",
    next_departure: "Private dates available",
    badge: "Sahara Trek",
    region: "M’Hamid Desert"
  },
  {
    title: "Erg Chigaga Desert Trek",
    slug: "erg-chigaga-desert-trek",
    excerpt: "A deeper Sahara route toward Erg Chigaga with wild camps, camel support, open plateaus and long silent horizons.",
    duration: "5–7 days",
    next_departure: "Private dates available",
    badge: "Deep Desert",
    region: "Erg Chigaga"
  },
  {
    title: "Atlas Mountain Village Trek",
    slug: "atlas-mountain-village-trek",
    excerpt: "Walk through High Atlas valleys, stone villages, terraces, walnut trees and mountain passes with local guides.",
    duration: "3–6 days",
    next_departure: "Private dates available",
    badge: "Atlas Trek",
    region: "High Atlas"
  },
  {
    title: "Toubkal & Berber Valleys Trek",
    slug: "toubkal-berber-valleys-trek",
    excerpt: "A mountain trekking program around Toubkal landscapes, village life, high trails and panoramic passes.",
    duration: "4–6 days",
    next_departure: "Private dates available",
    badge: "Mountain Trek",
    region: "Toubkal Region"
  },
  {
    title: "Yoga & Desert Trek Retreat",
    slug: "yoga-desert-trek-retreat",
    excerpt: "A retreat-style desert journey combining morning movement, Sahara walking, quiet camp evenings and space to reset.",
    duration: "7 days",
    next_departure: "Planned future departure",
    badge: "Yoga Trek",
    region: "Sahara Desert"
  },
  {
    title: "Scheduled Small Group Sahara Trek",
    slug: "scheduled-small-group-sahara-trek",
    excerpt: "A fixed-date Sahara trekking departure for travelers who want to join a small walking group in Morocco.",
    duration: "5 days",
    next_departure: "Dates coming soon",
    badge: "Scheduled Trek",
    region: "Sahara"
  },
  {
    title: "Nomad Trails Trek",
    slug: "nomad-trails-trek",
    excerpt: "A cultural desert walk shaped around nomadic routes, tea stops, camp life, camel support and desert storytelling.",
    duration: "4 days",
    next_departure: "Private dates available",
    badge: "Nomad Route",
    region: "M’Hamid"
  },
  {
    title: "Family Desert Walking Journey",
    slug: "family-desert-walking-journey",
    excerpt: "A gentle private desert walking program for families, with shorter stages, flexible camp comfort and soft dunes.",
    duration: "3–4 days",
    next_departure: "Private dates available",
    badge: "Family Trek",
    region: "Sahara"
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

export function fallbackItinerary(item) {
  const type = visualType(item);

  if (type === "mountain") {
    return [
      { day: "Day 1", title: "Arrival in the High Atlas", text: "Meet your guide, enter the mountain valleys and begin with a gentle walk between villages, terraces and walnut trees." },
      { day: "Day 2", title: "Village Trails & Mountain Passes", text: "Follow mule paths through Berber villages, climb gradually toward open viewpoints and learn the rhythm of Atlas trekking." },
      { day: "Day 3", title: "High Valley Walking", text: "Walk deeper into the valley system with panoramic views, local hospitality and a clear mountain trail rhythm." },
      { day: "Day 4", title: "Return Through the Valleys", text: "Descend through village paths and finish the trek with a final view of the mountains before returning to Marrakech or your next destination." }
    ];
  }

  if (type === "retreat") {
    return [
      { day: "Day 1", title: "Arrival & Desert Landing", text: "Arrive at the desert edge, settle into camp and begin the retreat with a soft walk, sunset silence and a grounding evening." },
      { day: "Day 2", title: "Morning Practice & First Trek", text: "Start with movement or breathwork, then walk across dunes and dry riverbeds with camel support and a gentle trekking pace." },
      { day: "Day 3", title: "Deep Desert Walking", text: "Move through open Sahara landscapes with time for silence, tea stops, rest and a camp evening under the stars." },
      { day: "Day 4", title: "Integration & Return", text: "Close the retreat with a final sunrise practice, an easy walk and return from the desert with space to integrate the experience." }
    ];
  }

  return [
    { day: "Day 1", title: "From M’Hamid to the First Desert Camp", text: "Meet your desert team, leave the village edge and begin walking into dunes, tamarisk trees and dry riverbeds before your first camp night." },
    { day: "Day 2", title: "Dunes, Hamada & Nomadic Trails", text: "Walk through changing desert terrain with camel support, learning the rhythm of Sahara trekking and stopping for tea in the shade." },
    { day: "Day 3", title: "Toward the Wide Desert Horizons", text: "Continue across open plateaus and soft sand areas, with time to slow down, watch tracks in the sand and arrive at a quiet camp." },
    { day: "Day 4", title: "Sunrise Walk & Return Route", text: "Wake early for sunrise, walk a final desert stage and return toward M’Hamid or continue deeper depending on the chosen program." }
  ];
}
