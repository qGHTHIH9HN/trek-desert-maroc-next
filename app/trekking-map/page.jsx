import { SaharaMap, AtlasMap } from '../../components/RouteMap';
import { regions } from '../../lib/routes';
import { RegionCard } from '../../components/RouteSections';
export const metadata={title:'Morocco Trekking Map | Trek Desert Maroc'};
export default function TrekkingMapPage(){return <><section className="page-hero"><div className="container"><span className="eyebrow">Custom trekking map</span><h1>Illustrated route maps, not Google Maps.</h1><p>The map style is designed for trekking: corridors, camps, stages, dunes, passes, camel routes, mule trails and region relationships.</p></div></section><section className="section map-showcase"><div className="container two-maps"><SaharaMap/><AtlasMap/></div></section><section className="section atlas-section"><div className="container"><div className="regions-grid">{regions.map(r=><RegionCard key={r.key} region={r}/>)}</div></div></section></>}
