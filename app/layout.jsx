import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export const metadata={title:'Trek Desert Maroc | Morocco Trekking Route Atlas',description:'A route-atlas website for Sahara desert treks, Atlas mountain routes, M’Hamid to Foum Zguid, trekking maps and route files.'};
export default function RootLayout({children}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
