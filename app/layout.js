import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { personSchema, websiteSchema, JsonLdScript } from "./utils/jsonld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Developer & Competitive Programmer",
  description:
    "A developer portfolio showcasing projects, experience, coding achievements, and tech stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <JsonLdScript data={personSchema} />
        <JsonLdScript data={websiteSchema} />
      </head>
      <body>
        <div className="page-bg" />
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
