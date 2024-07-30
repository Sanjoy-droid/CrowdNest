import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowd Nest - fund your future projects",
  description: "Platform to fund your future projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen `}>
        <Navbar />
        <main className="flex-grow flex  bg-gradient-radial from-black to-indigo-800  inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
