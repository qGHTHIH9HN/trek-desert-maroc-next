import { SaharaMap } from '../../../components/RouteMap';
import { RouteListSection } from '../../../components/RouteSections';
import { routes } from '../../../lib/routes';
export const metadata={title:'Sahara Trekking Routes | Trek Desert Maroc'};
export default function SaharaRoutesPage(){const sahara=routes.filter(r=>r.type==='sahara'||r.type==='retreat');return <><section className="page-hero sahara-hero"><div className="container"><span className="eyebrow">Sahara Corridor</span><h1>M’Hamid to Foum Zguid trekking route network.</h1><p>A custom trekking map for M’Hamid, Sidi Naji, Erg Zahar, Erg Chigaga, Lake Iriki and Foum Zguid. This is the foundation for many desert route variations.</p></div></section><section className="section map-showcase"><div className="container"><SaharaMap/></div></section><RouteListSection title="Sahara route files" subtitle="Camel-supported desert routes, dune stages, dry riverbeds, wild camps and expedition crossings." routes={sahara}/></>}
