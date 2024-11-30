import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "./components/SessionWrapper";

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
      <body className={`${inter.className}  `}>
        <SessionWrapper>
          <div
            className="
          flex flex-col   min-h-screen
          absolute inset-0 -z-10 h-full w-full items-center
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
        "
          >
            <nav className="w-full">
              <Navbar />
            </nav>

            <main className="flex-grow  w-full h-[480vh] text-white">
              {children}
            </main>

            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
