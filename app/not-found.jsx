import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Route not found.</h1>
        <Link className="btn primary" href="/routes">Back to routes</Link>
      </div>
    </section>
  );
}
