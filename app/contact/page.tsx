export const metadata = { title: "Contact | Trek Desert Maroc" };

export default function ContactPage() {
  return (
    <>
      <section className="hero" style={{minHeight: "62vh"}}>
        <img src="https://desertbrise-travel.com/public/assets/images/og-default.jpg" alt="Contact Trek Desert Maroc" />
        <div className="container hero-content">
          <p className="eyebrow">Planifier un trek</p>
          <h1 className="display">Parlez-nous de votre projet de trek.</h1>
          <p>Désert, Atlas, yoga trek, départ privé ou futur départ programmé.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Demande</p>
            <h2 className="display" style={{fontSize: 56, lineHeight: .95}}>Un message simple, une réponse humaine.</h2>
            <p className="muted">Ce formulaire peut être connecté plus tard à l’API booking PHP. Pour l’instant, il sert de page contact propre pour le nouveau projet.</p>
          </div>
          <form className="card card-pad form" action="mailto:desertbrise@gmail.com" method="post" encType="text/plain">
            <input className="input" name="name" placeholder="Nom" required />
            <input className="input" name="email" placeholder="Email" required />
            <select className="input" name="interest">
              <option>Trek désert Maroc</option>
              <option>Trek Atlas / Toubkal</option>
              <option>Yoga Trek / Retraite</option>
              <option>Départ programmé</option>
              <option>Programme sur mesure</option>
            </select>
            <textarea name="message" placeholder="Votre idée de voyage, dates, nombre de personnes..." />
            <button className="btn btn-primary" type="submit">Envoyer la demande</button>
          </form>
        </div>
      </section>
    </>
  );
}
