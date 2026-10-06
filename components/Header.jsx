import Link from "next/link";
import { SymbolIcon } from "./SymbolIcon";
export function Header() {
  return (
    <header className="site-header">
      <div className="top-trail"><div className="container top-trail-inner"><span><SymbolIcon name="boot"/> Trekking-first Morocco specialist</span><span>Sahara treks</span><span>Atlas walks</span><span>Yoga trek retreats</span></div></div>
      <div className="container header-inner">
        <Link className="logo" href="/"><span className="logo-mark"><SymbolIcon name="compass"/></span><span>Trek Desert Maroc<small>Morocco Trekking Specialist</small></span></Link>
        <nav className="nav"><Link href="/">Trekking Home</Link><Link href="/tours">Treks & Tours</Link><Link href="/yoga-trek-retreat">Yoga Trek Retreat</Link><Link href="/blog">Trekking Guides</Link><Link href="/contact">Plan a Trek</Link></nav>
        <Link className="btn btn-primary" href="/contact">Start Planning</Link>
      </div>
    </header>
  );
}
