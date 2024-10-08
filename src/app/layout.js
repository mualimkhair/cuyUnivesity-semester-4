import { Gabarito, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Indonesian Web Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-dark`} suppressHydrationWarning>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
