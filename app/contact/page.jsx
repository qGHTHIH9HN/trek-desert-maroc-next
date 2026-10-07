export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Plan a trek</span>
          <h1>Request a route-based trekking proposal.</h1>
          <p>Send the route, dates, walking level, group size and comfort style.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>Route request</h2>
            <p>Use this form for M’Hamid loop, Erg Chigaga, Atlas, custom Sahara crossings and future 200+ route files.</p>
          </div>
          <form className="form-card">
            <label>Name</label><input placeholder="Your name" />
            <label>Email / WhatsApp</label><input placeholder="Email or WhatsApp" />
            <label>Route</label><select><option>M’Hamid – Erg Zahar – Erg Smar – Erg Chigaga</option><option>Erg Chigaga classic</option><option>Atlas Toubkal / Azzaden</option><option>Custom route</option></select>
            <label>Message</label><textarea placeholder="Dates, group size, walking level and what you want." />
            <button className="btn primary" type="button">Send route request</button>
          </form>
        </div>
      </section>
    </>
  );
}
