import Link from "next/link";

export function RouteCard({ route }) {
  return (
    <Link href={`/routes/${route.slug}`} className="route-card">
      <div className="route-card-image">
        {route.image ? <img src={route.image} alt={route.title} /> : null}
        <span>{route.region}</span>
      </div>
      <div className="route-card-body">
        <h3>{route.title}</h3>
        <p>{route.subtitle}</p>
        <div className="mini-specs">
          <span>{route.duration}</span>
          <span>{route.difficulty}</span>
          <span>{route.walking}</span>
        </div>
        <strong>Open route file →</strong>
      </div>
    </Link>
  );
}
