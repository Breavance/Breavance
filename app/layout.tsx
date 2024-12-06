import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Breavance",
  description:
    "Un espacio de trabajo para que todos puedan desarrollar todo tipo de proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen text-white">
          <Navbar />
          <main className="flex-grow px-5 py-10 container mx-auto content-center max-w-5xl">
            {children}
            <SpeedInsights />
            <Analytics />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
