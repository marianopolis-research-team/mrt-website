import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marianopolis Research Team | MRT",
  description: "The Marianopolis Research Team conducts cutting-edge research and fosters scientific curiosity at Marianopolis College. Join us in exploring, discovering, and innovating.",
  keywords: ["research", "Marianopolis", "science", "college", "student research", "STEM"],
  authors: [{ name: "Marianopolis Research Team" }],
  openGraph: {
    title: "Marianopolis Research Team",
    description: "Stay curious!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
