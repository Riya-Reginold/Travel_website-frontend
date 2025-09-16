import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google'
import "./globals.css";
import Responsive from "@/components/Home/Navigation/Responsive";
import Footer from "@/components/Home/Footer/Footer";


const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "EaseVoyage",
  description: "Discover beautiful destinations and plan your next adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${font.className} antialiased`}
      >
        <Responsive/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
