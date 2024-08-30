import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/utilities";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Indonesian Web Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
