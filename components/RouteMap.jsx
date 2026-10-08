export function RouteMapImage({ route, compact = false }) {
  if (route?.image) {
    return (
      <figure className={compact ? "map-image compact" : "map-image"}>
        <img src={route.image} alt={`${route.title} trekking route map`} />
      </figure>
    );
  }

  const safeRoute = route || {
    title: "Sahara Desert Route Map",
    region: "Sahara Desert",
    start: "M’Hamid",
    finish: "Erg Chigaga",
    routeLine: ["M’Hamid", "Sidi Naji", "Erg Zahar", "Erg Smar", "Erg Chigaga"]
  };

  return (
    <div className={compact ? "schematic-map compact" : "schematic-map"}>
      <div className="map-title">
        <span>{safeRoute.region}</span>
        <strong>{safeRoute.start} → {safeRoute.finish}</strong>
      </div>

      <svg viewBox="0 0 900 520" aria-label={`${safeRoute.title} schematic map`}>
        <path className="terrain-a" d="M0 400 C160 330 250 380 390 300 C550 215 660 285 840 195 C1010 110 1100 145 1200 85 L1200 620 L0 620 Z" />
        <path className="terrain-b" d="M0 470 C185 410 290 470 468 380 C635 300 743 360 940 275 C1070 218 1135 230 1200 198 L1200 620 L0 620 Z" />
        <path className="route-path" d="M90 355 C190 300 265 330 350 260 C470 165 610 260 710 160 C800 70 865 110 820 260 C760 405 520 395 390 440 C250 490 145 435 90 355" />

        {(safeRoute.routeLine || []).map((point, index) => {
          const coords = [[90,355], [250,300], [390,255], [540,260], [710,160], [805,245], [590,390], [90,355]];
          const [x, y] = coords[index % coords.length];
          return (
            <g key={`${point}-${index}`}>
              <circle cx={x} cy={y} r="10" />
              <text x={x + 16} y={y - 10}>{point}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function ElevationProfile({ route }) {
  const routeLine = route?.routeLine || ["M’Hamid", "Erg Zahar", "Erg Smar", "Erg Chigaga"];

  return (
    <div className="elevation">
      <div className="elevation-head">
        <strong>Route elevation profile</strong>
        <span>Approximate ground feel, not GPS exact</span>
      </div>

      <svg viewBox="0 0 900 180" aria-label="Route elevation profile">
        <path d="M20 135 C120 130 160 138 230 128 C310 112 355 95 430 98 C520 88 555 58 640 82 C730 98 790 86 880 118 L880 160 L20 160 Z" fill="rgba(180,85,50,.24)" />
        <path d="M20 135 C120 130 160 138 230 128 C310 112 355 95 430 98 C520 88 555 58 640 82 C730 98 790 86 880 118" fill="none" stroke="#b45532" strokeWidth="4" />

        {routeLine.slice(0, 7).map((point, index) => {
          const xs = [60, 210, 350, 470, 620, 750, 850];
          const ys = [130, 125, 107, 95, 67, 92, 112];
          return (
            <g key={`${point}-${index}`}>
              <circle cx={xs[index]} cy={ys[index]} r="6" fill="#fff" stroke="#b45532" strokeWidth="3" />
              <text x={xs[index] - 35} y={ys[index] - 15}>{point}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function RouteMap({ route, landscape = "sahara", type }) {
  const mapType = type || landscape;

  const fallbackRoute = route || {
    title: mapType === "atlas" ? "Atlas Mountain Routes" : "Sahara Desert Routes",
    region: mapType === "atlas" ? "High Atlas" : "Sahara Desert",
    start: mapType === "atlas" ? "Imlil" : "M’Hamid",
    finish: mapType === "atlas" ? "Toubkal / Azzaden" : "Erg Chigaga",
    routeLine: mapType === "atlas"
      ? ["Imlil", "Azzaden", "Toubkal", "Imlil"]
      : ["M’Hamid", "Sidi Naji", "Erg Zahar", "Erg Smar", "Erg Chigaga"],
    image: ""
  };

  return <RouteMapImage route={fallbackRoute} />;
}

export function SaharaMap({ compact = false }) {
  return (
    <RouteMapImage
      compact={compact}
      route={{
        title: "Sahara Desert Route Map",
        region: "Sahara Desert",
        start: "M’Hamid",
        finish: "Erg Chigaga",
        routeLine: ["M’Hamid", "Sidi Naji", "Erg Zahar", "Erg Smar", "Erg Chigaga"],
        image: ""
      }}
    />
  );
}

export function AtlasMap({ compact = false }) {
  return (
    <RouteMapImage
      compact={compact}
      route={{
        title: "Atlas Mountain Route Map",
        region: "High Atlas",
        start: "Imlil",
        finish: "Toubkal / Azzaden",
        routeLine: ["Imlil", "Azzaden", "Toubkal", "Imlil"],
        image: ""
      }}
    />
  );
}
