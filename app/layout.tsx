import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Rubik } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import CardNav from "@/components/CardNav";
import logo from "../public/icon.png";
import { items } from "@/components/NavbarItems";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etqan Geoinformatics Systems",
  description:
    "Etqan for Geoinformatics Systems and Solutions is a leading specialized company that provides spatial systems ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-black ${playfair.variable} ${rubik.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
