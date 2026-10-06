import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="logo" href="/">
              <span className="logo-mark">☀</span>
              <span>
                Trek Desert Maroc
                <small>Walk Morocco differently</small>
              </span>
            </Link>
            <p>
              Specialist trekking website for Sahara desert treks, Atlas mountain walking journeys,
              scheduled departures and yoga trekking retreats in Morocco.
            </p>
          </div>

          <div>
            <h4>Treks</h4>
            <p>
              <Link href="/tours">Sahara Treks</Link><br />
              <Link href="/tours">Atlas Treks</Link><br />
              <Link href="/tours">Scheduled Departures</Link>
            </p>
          </div>

          <div>
            <h4>Retreats</h4>
            <p>
              <Link href="/yoga-trek-retreat">Yoga Trek Retreat</Link><br />
              <Link href="/tours">Private Programs</Link><br />
              <Link href="/contact">Custom Request</Link>
            </p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>
              <Link href="/contact">Plan your trek</Link><br />
              <Link href="/blog">Read guides</Link><br />
              Morocco trekking experts
            </p>
          </div>
        </div>

        <div className="footer-bottom">© Trek Desert Maroc. Next.js trekking website connected to the PHP admin API.</div>
      </div>
    </footer>
  );
}
