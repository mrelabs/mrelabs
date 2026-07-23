import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "MRE Labs",
    template: "%s | MRE Labs",
  },

  description:
    "MRE Labs builds intelligent software systems designed to simplify complexity and solve real-world problems.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body
        className="
          relative
          isolate

          min-h-screen

          flex
          flex-col

          bg-black
          text-white
        "
      >

        <GridBackground />


        <div
          className="
            relative
            z-10

            flex
            min-h-screen
            flex-col
          "
        >

          <Navbar />


          <main
            className="
              flex-1
            "
          >

            {children}

          </main>


          <Footer />

        </div>


      </body>

    </html>

  );

}