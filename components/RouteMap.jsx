export function RouteMapImage({ route, compact = false }) {
  if (route.image) {
    return (
      <figure className={compact ? "map-image compact" : "map-image"}>
        <img src={route.image} alt={`${route.title} trekking route map`} />
      </figure>
    );
  }

  return (
    <div className={compact ? "schematic-map compact" : "schematic-map"}>
      <div className="map-title">
        <span>{route.region}</span>
        <strong>{route.start} → {route.finish}</strong>
      </div>
      <svg viewBox="0 0 900 520" aria-label={`${route.title} schematic map`}>
        <path className="terrain-a" d="M0 400 C160 330 250 380 390 300 C550 215 660 285 840 195 C1010 110 1100 145 1200 85 L1200 620 L0 620 Z" />
        <path className="terrain-b" d="M0 470 C185 410 290 470 468 380 C635 300 743 360 940 275 C1070 218 1135 230 1200 198 L1200 620 L0 620 Z" />
        <path className="route-path" d="M90 355 C190 300 265 330 350 260 C470 165 610 260 710 160 C800 70 865 110 820 260 C760 405 520 395 390 440 C250 490 145 435 90 355" />
        {route.routeLine.map((point, index) => {
          const coords = [
            [90,355],[250,300],[390,255],[540,260],[710,160],[805,245],[590,390],[90,355]
          ];
          const [x,y] = coords[index % coords.length];
          return <g key={point}><circle cx={x} cy={y} r="10" /><text x={x + 16} y={y - 10}>{point}</text></g>;
        })}
      </svg>
    </div>
  );
}

export function ElevationProfile({ route }) {
  return (
    <div className="elevation">
      <div className="elevation-head">
        <strong>Route elevation profile</strong>
        <span>Approximate ground feel, not GPS exact</span>
      </div>
      <svg viewBox="0 0 900 180" aria-label="Route elevation profile">
        <path d="M20 135 C120 130 160 138 230 128 C310 112 355 95 430 98 C520 88 555 58 640 82 C730 98 790 86 880 118 L880 160 L20 160 Z" fill="rgba(180,85,50,.24)" />
        <path d="M20 135 C120 130 160 138 230 128 C310 112 355 95 430 98 C520 88 555 58 640 82 C730 98 790 86 880 118" fill="none" stroke="#b45532" strokeWidth="4" />
        {route.routeLine.slice(0, 7).map((p, i) => {
          const xs = [60,210,350,470,620,750,850];
          const ys = [130,125,107,95,67,92,112];
          return <g key={p}><circle cx={xs[i]} cy={ys[i]} r="6" fill="#fff" stroke="#b45532" strokeWidth="3" /><text x={xs[i]-35} y={ys[i]-15}>{p}</text></g>;
        })}
      </svg>
    </div>
  );
}
