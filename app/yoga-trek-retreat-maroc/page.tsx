import Link from "next/link";

export const metadata = { title: "Yoga Trek Maroc | Retraites désert et montagne" };

export default function YogaTrekPage() {
  return (
    <>
      <section className="hero">
        <img src="https://desertbrise-travel.com/public/assets/images/og-default.jpg" alt="Yoga trek Maroc" />
        <div className="container hero-content">
          <p className="eyebrow">Yoga Trek & Retraites</p>
          <h1 className="display">Marcher, respirer, ralentir.</h1>
          <p>Une future ligne de programmes mêlant trek, yoga, désert, montagne, silence, culture locale et reconnexion.</p>
          <Link href="/contact" className="btn btn-primary">Planifier une retraite</Link>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {[
            ["Yoga Trek Désert", "Sahara, camp, marche douce, respiration et nuits sous les étoiles."],
            ["Yoga Trek Atlas", "Montagne, vallées, villages, air frais et pratiques matinales."],
            ["Retraite privée", "Programme sur mesure pour professeur, groupe, couple ou amis."],
          ].map(([title, text]) => (
            <div className="card card-pad" key={title}>
              <p className="eyebrow">Future offre</p>
              <h2>{title}</h2>
              <p className="muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
