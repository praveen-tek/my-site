import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Praveen Kumar — Full-Stack Engineer & Builder",
  description:
    "Portfolio of Praveen Kumar — builder of browser extensions (AloeXT, Manger Maki), AI exam platforms (MockCrack), open-source hardware (CLACK), and modern web apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-full bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
