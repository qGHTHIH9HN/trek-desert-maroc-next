import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-icon">△</span>
          <span>Trek Desert Maroc<small>Trekking Routes Atlas</small></span>
        </Link>
        <nav className="nav">
          <Link href="/routes">Routes</Link>
          <Link href="/routes/mhamid-erg-zahar-erg-smar-erg-chigaga">M’Hamid Loop</Link>
          <Link href="/trekking-map">Trekking Map</Link>
          <Link href="/contact">Plan Your Trek</Link>
        </nav>
      </div>
    </header>
  );
}
