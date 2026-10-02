import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trek Desert Maroc | Trekking dans le désert marocain",
  description: "Trek désert Maroc, randonnées Sahara, M’Hamid, Erg Chigaga, Atlas, Toubkal, yoga trek et départs programmés.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="nav">
          <div className="nav-inner">
            <Link href="/" className="logo">Trek Desert Maroc</Link>
            <nav className="nav-links">
              <Link href="/tours">Treks</Link>
              <Link href="/yoga-trek-retreat-maroc">Yoga Trek</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/contact" className="btn btn-primary">Planifier</Link>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container grid grid-3">
            <div>
              <h2 className="display" style={{fontSize: 42, margin: 0}}>Trek Desert Maroc</h2>
              <p className="muted">Spécialiste des treks au Maroc: désert, Sahara, Atlas, départs privés et retraites yoga trek.</p>
            </div>
            <div>
              <p className="eyebrow">Explorer</p>
              <p><Link href="/tours">Tous les treks</Link></p>
              <p><Link href="/blog">Guides trekking</Link></p>
              <p><Link href="/contact">Demander un programme</Link></p>
            </div>
            <div>
              <p className="eyebrow">Connexion admin</p>
              <p className="muted">Le contenu dynamique vient du PHP admin/API connecté.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
