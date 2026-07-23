import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const oswald = localFont({
  src: "./fonts/Oswald.ttf",
  variable: "--font-oswald",
  display: "swap",
});

const openSans = localFont({
  src: "./fonts/OpenSans.ttf",
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PANDAS LAB",
  description:
    "Programmable Assembly for Nucleic acid Delivery and Artificial Systems (PANDAS)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}