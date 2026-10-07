import "./globals.css";
import { Header } from "../components/Header";

export const metadata = {
  title: "Trek Desert Maroc | Route Atlas Visual System",
  description: "Trekking route atlas for M’Hamid, Erg Zahar, Erg Smar, Erg Chigaga and Morocco trekking routes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
