import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" href="/">
          <span className="logo-mark">☀</span>
          <span>
            Trek Desert Maroc
            <small>Morocco Trekking Specialist</small>
          </span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/tours">Treks & Tours</Link>
          <Link href="/yoga-trek-retreat">Yoga Trek Retreat</Link>
          <Link href="/blog">Trekking Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link className="btn btn-primary" href="/contact">
          Plan a Trek
        </Link>
      </div>
    </header>
  );
}
