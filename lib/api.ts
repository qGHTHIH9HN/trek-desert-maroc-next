export type AnyItem = Record<string, any>;

type ApiList = AnyItem[] | {
  ok?: boolean;
  items?: AnyItem[];
  data?: AnyItem[];
  services?: AnyItem[];
  posts?: AnyItem[];
  service?: AnyItem;
  post?: AnyItem;
  page?: AnyItem;
};

export const API_BASE = process.env.NEXT_PUBLIC_PHP_API_BASE || "https://desertbrise-travel.com/public/api";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trekdesertmaroc.com";
export const FALLBACK_IMAGE = "https://desertbrise-travel.com/public/assets/images/og-default.jpg";

export async function getJson<T = ApiList>(path: string, revalidate = 120): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { next: { revalidate } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function listFrom(data: ApiList | null): AnyItem[] {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  return data.items || data.data || data.services || data.posts || [];
}

export function clean(value: any) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function imageOf(item: AnyItem) {
  return item.image || item.hero_image || item.featured_image || item.thumbnail || FALLBACK_IMAGE;
}

export function serviceUrl(item: AnyItem) {
  return item.url || (item.slug ? `/tour/${item.slug}` : "/contact");
}

export function blogUrl(item: AnyItem) {
  return item.url || (item.slug ? `/blog/${item.slug}` : "/blog");
}

export function durationOf(item: AnyItem) {
  return item.duration || item.days || item.length || "Sur mesure";
}

export function priceOf(item: AnyItem) {
  if (item.price_from) return `À partir de ${item.price_from}`;
  if (item.price) return `À partir de ${item.price}`;
  return "Sur demande";
}

export function departureOf(item: AnyItem) {
  return (
    item.next_departure ||
    item.next_departure_date ||
    item.departure_date ||
    item.departures ||
    item.scheduled_departures ||
    item.schedule ||
    item.dates ||
    "Dates privées disponibles"
  );
}

export function matchText(item: AnyItem, terms: string[]) {
  const text = `${item.title || ""} ${item.name || ""} ${item.slug || ""} ${item.excerpt || ""} ${item.description || ""} ${item.location || ""} ${item.category || ""}`.toLowerCase();
  return terms.some((term) => text.includes(term));
}

export async function getServices(limit = 100) {
  return listFrom(await getJson(`/services.php?per_page=${limit}`));
}

export async function getService(slug: string) {
  const data = await getJson(`/service.php?slug=${encodeURIComponent(slug)}`);
  if (!data || Array.isArray(data)) return null;
  return data.service || data.page || null;
}

export async function getPosts(limit = 60) {
  return listFrom(await getJson(`/blog.php?per_page=${limit}`));
}

export async function getPost(slug: string) {
  const direct = await getJson(`/post.php?slug=${encodeURIComponent(slug)}`);
  if (direct && !Array.isArray(direct) && direct.post) return direct.post;

  const posts = await getPosts(100);
  return posts.find((post) => String(post.slug) === slug) || null;
}

export function categorizeTours(services: AnyItem[]) {
  const desert = services.filter((item) => matchText(item, ["desert", "désert", "sahara", "mhamid", "m'hamid", "chigaga", "merzouga", "erg"]));
  const atlas = services.filter((item) => matchText(item, ["atlas", "toubkal", "mountain", "montagne", "vallée", "valley", "berber", "berbère"]));
  const yoga = services.filter((item) => matchText(item, ["yoga", "retreat", "retraite", "bien-être", "wellness"]));
  const scheduled = services.filter((item) => matchText(item, ["scheduled", "departure", "départ", "groupe"]) || String(departureOf(item)).toLowerCase() !== "dates privées disponibles");
  const trekking = services.filter((item) => matchText(item, ["trek", "trekking", "randonnée", "marche", "hiking", "walk", "désert", "sahara", "atlas", "toubkal"]));
  return { desert, atlas, yoga, scheduled, trekking };
}
