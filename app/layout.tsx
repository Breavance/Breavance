import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Breavance",
  description: "A workspace for everyone to develope all kind of projects",
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
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
