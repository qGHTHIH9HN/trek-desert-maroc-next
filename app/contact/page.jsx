export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Plan your trek</span>
          <h1 className="display">Tell us the journey you want to walk.</h1>
          <p>
            This request page is focused on Sahara treks, Atlas walks, scheduled departures and yoga trekking retreats.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2 className="display" style={{ fontSize: 64, margin: "0 0 20px" }}>Trekking request</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              The form asks for trekking style, dates, group size and walking level. The next step is connecting it
              to your PHP booking endpoint.
            </p>
            <div className="notice">Next technical step: connect this form to your PHP booking endpoint.</div>
          </div>

          <form className="form">
            <label>Name</label>
            <input placeholder="Your name" />
            <label>Email / WhatsApp</label>
            <input placeholder="Email or WhatsApp number" />
            <label>Journey type</label>
            <select defaultValue="Sahara Desert Trek">
              <option>Sahara Desert Trek</option>
              <option>Atlas Mountain Trek</option>
              <option>Scheduled Departure</option>
              <option>Yoga Trek Retreat</option>
              <option>Private Tailor-Made Trek</option>
            </select>
            <label>Walking level</label>
            <select defaultValue="Moderate">
              <option>Easy</option>
              <option>Moderate</option>
              <option>Challenging</option>
              <option>Not sure yet</option>
            </select>
            <label>Travel dates</label>
            <input placeholder="Your preferred dates" />
            <label>Message</label>
            <textarea placeholder="Tell us your group size, trekking level and what you want to experience." />
            <p style={{ marginTop: 22 }}><button className="btn btn-primary" type="button">Send Request →</button></p>
          </form>
        </div>
      </section>
    </>
  );
}
