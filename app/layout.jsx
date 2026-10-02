import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Trek Desert Maroc | Trekking in Morocco",
  description: "Trek Desert Maroc: Sahara desert treks, Atlas mountain walking journeys, scheduled departures and yoga trekking retreats in Morocco."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
