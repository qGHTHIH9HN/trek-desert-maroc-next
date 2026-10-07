export const regions = [
  {
    key: "sahara",
    title: "Sahara Desert Routes",
    subtitle: "M’Hamid, Erg Zahar, Erg Smar, Erg Chigaga and desert loop routes",
    href: "/routes",
    description: "Camel-supported desert trekking routes across dunes, hamada, dry oueds and camp stages."
  },
  {
    key: "atlas",
    title: "Atlas Mountain Routes",
    subtitle: "Toubkal, Azzaden, valleys and high mountain trails",
    href: "/routes",
    description: "Mountain trekking routes with village paths, passes, mule support and High Atlas scenery."
  },
  {
    key: "route-atlas",
    title: "Route Atlas System",
    subtitle: "A structure prepared for 200+ future trekking routes",
    href: "/trekking-map",
    description: "A visual route database with maps, stages, statistics, elevation profiles and logistics."
  }
];

export const routes = [
  {
    slug: "mhamid-erg-zahar-erg-smar-erg-chigaga",
    title: "M’Hamid – Erg Zahar – Erg Smar – Erg Chigaga",
    subtitle: "Desert trekking loop through dunes, hamada, oued crossings and camel caravan stages.",
    region: "Sahara Desert",
    start: "M’Hamid",
    finish: "M’Hamid / Erg Chigaga return logistics",
    duration: "5–6 days",
    distance: "Approx. 115–120 km",
    difficulty: "Moderate",
    walking: "5–7 hrs/day",
    bestSeason: "October to April",
    terrain: "Dunes, hamada, oued, desert plateau",
    support: "Camel support + local desert guide + optional 4x4 logistics",
    altitude: "~270–320 m",
    image: "/images/mhamid-erg-zahar-erg-smar-erg-chigaga-map.png",
    routeLine: ["M’Hamid", "Marabout Sidi Naji", "Erg Zahar", "Erg Smar", "Erg Chigaga", "Oued Btah RaHala", "Oued Naam", "M’Hamid"],
    highlights: [
      "Satellite-style desert route map",
      "Erg Zahar and Erg Smar dune stages",
      "Erg Chigaga as the major dune destination",
      "Dry riverbed and hamada crossing zones",
      "Camel-supported walking stages",
      "Route profile and stage cards"
    ],
    days: [
      {
        day: "Day 1",
        title: "M’Hamid → Marabout Sidi Naji",
        distance: "15 km",
        walking: "4–5 h",
        terrain: "Flat / Oued",
        text: "Start from the village edge of M’Hamid and walk into open desert ground, dry oued lines and the first camp rhythm near the Sidi Naji area."
      },
      {
        day: "Day 2",
        title: "Sidi Naji → Erg Zahar",
        distance: "18 km",
        walking: "5–6 h",
        terrain: "Hamada / Dunes",
        text: "The route becomes more remote, crossing stony ground and sandy corridors before reaching the dramatic dune system of Erg Zahar."
      },
      {
        day: "Day 3",
        title: "Erg Zahar → Erg Smar",
        distance: "20 km",
        walking: "5–6 h",
        terrain: "Dunes / Hamada",
        text: "A strong desert stage between dune zones and open hamada, with camel support, isolated camp atmosphere and wide Sahara horizons."
      },
      {
        day: "Day 4",
        title: "Erg Smar → Erg Chigaga",
        distance: "18 km",
        walking: "5–6 h",
        terrain: "Dunes",
        text: "Walk toward the largest dune destination of the route, with the landscape becoming more cinematic around Erg Chigaga."
      },
      {
        day: "Day 5",
        title: "Erg Chigaga → Oued Btah RaHala",
        distance: "20 km",
        walking: "5–6 h",
        terrain: "Hamada / Oued",
        text: "Leave the dune field and cross open desert plateau and dry riverbed terrain along the northern part of the loop."
      },
      {
        day: "Day 6",
        title: "Oued Btah RaHala → Oued Naam → M’Hamid",
        distance: "25 km",
        walking: "6–7 h",
        terrain: "Oued / desert plateau",
        text: "Final long stage through the northern desert corridor, passing Oued Naam before returning toward M’Hamid."
      }
    ]
  },
  {
    slug: "mhamid-to-erg-chigaga-classic",
    title: "M’Hamid to Erg Chigaga Classic Trek",
    subtitle: "Shorter camel-supported desert trek from M’Hamid toward Erg Chigaga.",
    region: "Sahara Desert",
    start: "M’Hamid",
    finish: "Erg Chigaga",
    duration: "4–5 days",
    distance: "Approx. 65–80 km",
    difficulty: "Moderate",
    walking: "4–6 hrs/day",
    bestSeason: "October to April",
    terrain: "Dunes, dry riverbeds, hamada",
    support: "Camel support + desert guide",
    altitude: "~270–300 m",
    image: "",
    routeLine: ["M’Hamid", "Tamarisk zone", "Nomadic tracks", "Erg Chigaga"],
    highlights: ["Camel-supported stages", "Wild camp nights", "Erg Chigaga dunes", "Good first Sahara trek"],
    days: [
      { day: "Day 1", title: "M’Hamid to desert camp", distance: "12 km", walking: "3–4 h", terrain: "Small dunes", text: "Walk out from the village edge into dunes and tamarisk shade." },
      { day: "Day 2", title: "Nomadic tracks", distance: "17 km", walking: "5 h", terrain: "Hamada / oued", text: "Follow desert tracks with camel support and tea stops." },
      { day: "Day 3", title: "Toward Erg Chigaga", distance: "18 km", walking: "5–6 h", terrain: "Dunes", text: "Approach the large dune area and camp close to Erg Chigaga." },
      { day: "Day 4", title: "Return or 4x4 exit", distance: "Flexible", walking: "Flexible", terrain: "Desert track", text: "Return by adapted route or connect with 4x4 logistics." }
    ]
  },
  {
    slug: "atlas-toubkal-azzaden-route",
    title: "Toubkal & Azzaden Valley Route",
    subtitle: "Mountain trekking route with village paths, passes and High Atlas scenery.",
    region: "High Atlas",
    start: "Imlil",
    finish: "Imlil / Marrakech",
    duration: "4–6 days",
    distance: "Approx. 45–75 km",
    difficulty: "Moderate to challenging",
    walking: "5–7 hrs/day",
    bestSeason: "Spring to autumn",
    terrain: "Mountain trails, valleys, passes",
    support: "Mountain guide + mule support when needed",
    altitude: "High mountain route",
    image: "",
    routeLine: ["Imlil", "Azzaden", "Toubkal area", "Imlil"],
    highlights: ["High Atlas villages", "Azzaden Valley", "Mountain passes", "Optional summit extension"],
    days: [
      { day: "Day 1", title: "Imlil to mountain village", distance: "10–14 km", walking: "4–5 h", terrain: "Village trails", text: "Start from Imlil and walk through terraces and valley paths." },
      { day: "Day 2", title: "Azzaden Valley", distance: "14–17 km", walking: "5–6 h", terrain: "Mountain paths", text: "Cross toward Azzaden with panoramic valley views." },
      { day: "Day 3", title: "High pass walking", distance: "12–16 km", walking: "5–7 h", terrain: "Passes", text: "Climb and descend through stronger mountain terrain." },
      { day: "Day 4", title: "Return route", distance: "Flexible", walking: "4–6 h", terrain: "Valley path", text: "Return through village paths or extend toward Toubkal." }
    ]
  }
];

export function getRoute(slug) {
  return routes.find((route) => route.slug === slug) || null;
}

export function nearbyRoutes(slug) {
  const current = getRoute(slug);
  if (!current) return routes.slice(0, 3);
  return routes.filter((route) => route.slug !== slug && route.region === current.region).slice(0, 3);
}
